INSERT INTO sn_facility (name,logo)
VALUES
("פקולטה למערכות מידע","sc"),
("פקולטה לחשבונאות","acct"),
("פקולטה לפסיכולוגיה","psy"),
("פקולטה למשפטים","law"),
("פקולטה למנהל עסקים","ba");




INSERT INTO sn_course (name)
VALUES
("מבני נתונים"),
("מתמטיקה בדידה"),
("מתמטיקה א'"),
("מבוא למערכות מידע ויישומי המחשב"),
("יסודות החשבונאות א'");


INSERT INTO sn_course_facility (course_id,facility_id)
VALUES
(1,1),
(2,1),
(3,2),
(4,1),
(5,2);

INSERT INTO sn_link (name,url,created,active,deleted,course_id)
VALUES
("מיון בועות","https://docs.google.com/document/d/1K2o73r2axQh4yKMlGoGvLyIWo84TLEBX/edit?usp=sharing&ouid=112867442737678432624&rtpof=true&sd=true","2022-05-15 16:27:41.000000",1,0,1),
("רשימה מקושרת","https://docs.google.com/document/d/1Vr9Ua3lOvNoR3K0NQ2-FTRN_XlF40IY9/editusp=sharing&ouid=112867442737678432624&rtpof=true&sd=true","2022-05-15 16:27:41.000000",1,0,1),
("מבחן אמצע 2019","https://docs.google.com/document/d/1Vr9Ua3lOvNoR3K0NQ2-FTRN_XlF40IY9/edit?usp=sharing&ouid=112867442737678432624&rtpof=true&sd=true","2022-05-15 16:27:41.000000",0,0,1),
("מבחן מועד א' 2019","https://docs.google.com/document/d/1VqidU4YSSxNq9c0ZC3tae8rs_goObAqC/edit?usp=sharing&ouid=112867442737678432624&rtpof=true&sd=true","2022-05-15 16:27:41.000000",1,0,1),
("מבחן מועד א' 2020 +פתרון","https://docs.google.com/document/d/10ik2vrVai8x-TgcNwCxauyrUWe-Sx8zw/edit","2022-05-16 16:27:41.000000",0,0,2),
("בוחן בדידה 2019 + פתרון","https://drive.google.com/file/d/10_FPTlv4AVGYAdi9e1AY2qeKzx-xTYAK/view?usp=sharing","2022-05-16 16:27:41.000000",1,0,2),
("מבחן מועד א' 2017 +פתרון","https://drive.google.com/file/d/10bQx8XtaDohzpnvP-oV6BPOja8iDkoU7/view?usp=sharing","2022-05-16 16:27:41.000000",1,0,2);

