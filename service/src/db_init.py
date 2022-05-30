import os
import mysql.connector
from mysql.connector import errorcode
import argparse
import subprocess

file_path = "./src/init_db.sql"



parser = argparse.ArgumentParser(description='Initialize database')
parser.add_argument('--ip', required=True)
parser.add_argument('--port', required=True)
parser.add_argument('--user', required=True)
parser.add_argument('--dbpass', required=True)
parser.add_argument('--dbname', required=True)
parser.add_argument('--admin_name', required=True)
parser.add_argument('--admin_email', required=True)
parser.add_argument('--admin_user_name', required=True)

args = parser.parse_args()

port = int(args.port)
ip = str(args.ip)
db_user = str(args.user)
db_pass = str(args.dbpass)
db_name = str(args.dbname)
adminUserName = str(args.admin_user_name)
adminName = str(args.admin_name)
adminEmail = str(args.admin_email)


try:
    cnx = mysql.connector.connect(user=db_user, password=db_pass, host=ip, port=port, database=db_name)

    cursor = cnx.cursor()

    userquery = ("SELECT COUNT(1) as 'count' FROM users_sicumnetuser;" )
    cursor.execute(userquery)
    users = 0
    for count in cursor:
        users = count[0]
    
    cursor.close()

    print("Users found:", users)
    if users <=0:
        print("Creating superuser...")
        bashCommand = f"python ./src/manage.py createsuperuser --user_name {adminUserName} --email {adminEmail} --first_name {adminName} --noinput"
        process = subprocess.Popen(bashCommand.split(), stdout=subprocess.PIPE)
        output, error = process.communicate()
    else:
        print("Superuser already exists.")

    cursor = cnx.cursor()

    query = ("SELECT COUNT(1) as 'count' FROM sn_facility;" )

    cursor.execute(query)

    
    records = 0
    for count in cursor:
        records = count[0]
    
    cursor.close()
    
    print("Records Found", records)
    if records <= 0:
        print("Init DB")
            #check if file is present
        if os.path.isfile(file_path):
            print("File Found")
            #open text file in read mode
            text_file = open(file_path, "r", encoding="utf-8")
        
            #read whole file to a string
            data = text_file.read()
        
            #close file
            text_file.close()
        
            sql_statements = data.split(';') 
            
            for sql in sql_statements:
                try:
                    if len(sql.strip()) > 0:
                        cursor = cnx.cursor()

                        print("Executing:", sql)
                        cursor.execute(sql)

                        cnx.commit()
                        cursor.close()
                        print("Execution Succes")

                except mysql.connector.Error as err:
                    if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
                        print("Something is wrong with your user name or password")
                    elif err.errno == errorcode.ER_BAD_DB_ERROR:
                        print("Database does not exist")
                    else:
                        print(err)
        else:
            print("File not found:", file_path)

except mysql.connector.Error as err:
  if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
    print("Something is wrong with your user name or password")
  elif err.errno == errorcode.ER_BAD_DB_ERROR:
    print("Database does not exist")
  else:
    print(err)
else:
  cnx.close()