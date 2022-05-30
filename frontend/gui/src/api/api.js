const topics = [
    {
      name: "פקולטה למערכות מידע",
      id: "compsi",
      description: "A JavaScript library for building user interfaces",
      resources: [
        {
          name: "מבוא למדעי המחשב",
          id: "6150",
          description:
            " לימוד השפה והתחביר של פייתון, מימוש אלגורתמים בסיסיים, יעליות של חישובים-מבוא.",
          downloads:[
            {
              name: "name 1 of link",
              link: "http://www.google.com",
              date: "2022-08-17",
              upvotes: 12,
              downvotes : 3
            },
            {
              name: "name 2 of link",
              link: "http://www.google.com",
              date: "2022-08-15",
              upvotes: 11,
              downvotes : 1
            },
            {
              name: "name 3 of link",
              link: "http://www.google.com",
              date: "2022-08-14",
              upvotes: 14,
              downvotes : 4
            }
          ]
        },
        {
          name: "מתמטיקה בדידה",
          id: "6151",
          description:
            "מושגי יסוד בלוגיקה מתמטית, קבוצות ויחסים בין קבוצות, עקרון האינדוקציה ורקורסיה, עקרונות לספירה, קומבינטוריקה, בעיות מנייה. כמו כן יובא מבוא לתורת הגרפים.",
          downloads:[
            {
              name: "מועד א 2020 פתרון",
              link: "https://docs.google.com/document/d/10ik2vrVai8x-TgcNwCxauyrUWe-Sx8zw/edit?usp=sharing&ouid=112867442737678432624&rtpof=true&sd=true",
              date: "2022-08-17",
              upvotes: 12,
              downvotes : 3
            },
            {
              name: "בוחן בדידה 2019 פתרון",
              link: "https://drive.google.com/file/d/10_FPTlv4AVGYAdi9e1AY2qeKzx-xTYAK/view?usp=sharing",
              date: "2022-08-15",
              upvotes: 11,
              downvotes : 1
            },
            {
              name: "דוגמאות לשאלות",
              link: "https://docs.google.com/document/d/10l5WE1mPFgEj4KOdf-w5cUzfkO-iwDeg/edit?usp=sharing&ouid=112867442737678432624&rtpof=true&sd=true",
              date: "2022-08-14",
              upvotes: 14,
              downvotes : 4
            },
            {
              name: "מבחן מועד א 2017 פתרון",
              link: "https://drive.google.com/file/d/10bQx8XtaDohzpnvP-oV6BPOja8iDkoU7/view?usp=sharing",
              date: "2022-08-14",
              upvotes: 14,
              downvotes : 4
            }
          ]
        },
        {
          name: "מבוא למערכות מידע וישומי המחשב",
          id: "6153",
          description:
            "הכרת מושגי יסוד בתחום מערכות מידע,הכרת תהליך קבלת החלטות בארגון והקשר למערכת המידע,הכרת מחזור חיי המערכת על שלביו השונים,הכרת תחום ה data big,הענקת ידע וכלים בתחום מערכות מידע מודרניות,הכרת מערכת SAS לניתוח נתונים ובינה עסקית.",
          downloads:[
            {
              name: "תרגיל בית WORD",
              link: "https://docs.google.com/document/d/1x1ogW32CKxXRZYlDra9dkh2T2-viZiZJp3pa7jUJuDc/edit?usp=sharing",
              date: "2022-08-17",
              upvotes: 12,
              downvotes : 3
            },
            {
              name: "תרגיל אקסל לוח הכפל",
              link: "https://docs.google.com/spreadsheets/d/118uTqJyQRNe9o8_sWQ167WxMCvQymEiR/edit?usp=sharing&ouid=112867442737678432624&rtpof=true&sd=true",
              date: "2022-08-15",
              upvotes: 11,
              downvotes : 1
            },
            {
              name: "תרגיל 4 אקסל",
              link: "https://docs.google.com/spreadsheets/d/11HgB-2DoM3OL5oZ0DQqoLz_Td7RtkhgW/edit?usp=sharing&ouid=112867442737678432624&rtpof=true&sd=true",
              date: "2022-08-14",
              upvotes: 14,
              downvotes : 4
            }
          ]  
        },
        {
          name: "חשבון אינפי 1",
          id: "6152",
          description:
            "פיתוח יכולות חשיבה מתמטית,הקניית ידע וכלים חשובים כמו:הגדרת מושג הסדרה וחסמים,חישוב גבול סדרה,מושג הפונקציהוחקירת פונקציות באמצעות נגזרות.",
          downloads:[
            {
              name: "name 1 of link",
              link: "http://www.google.com",
              date: "2022-08-17",
              upvotes: 12,
              downvotes : 3
            },
            {
              name: "name 2 of link",
              link: "http://www.google.com",
              date: "2022-08-15",
              upvotes: 11,
              downvotes : 1
            },
            {
              name: "name 3 of link",
              link: "http://www.google.com",
              date: "2022-08-14",
              upvotes: 14,
              downvotes : 4
            }
          ]  
        },
        {
          name: "היסטוריה ופילוסופיה של חישוב",
          id: "6154",
          description:
            "פיתוח יכולות חשיבה מתמטית,הקניית ידע וכלים חשובים כמו:הגדרת מושג הסדרה וחסמים,חישוב גבול סדרה,מושג הפונקציהוחקירת פונקציות באמצעות נגזרות.",
          downloads:[
            {
              name: "מטלה1",
              link: "https://docs.google.com/document/d/1sG5sRVfFmfkKIPQjBDmFkVUomGJT8CI9KNenUZ1we6E/edit?usp=sharing",
              date: "2022-08-17",
              upvotes: 12,
              downvotes : 3
            },
            {
              name: "מטלה 2",
              link: "https://docs.google.com/document/d/11ZdOmburZ0ElEKoFdYHLV3PXOb5tIaNtCqeqA3VaNmA/edit?usp=sharing",
              date: "2022-08-15",
              upvotes: 11,
              downvotes : 1
            },
            {
              name: "מטלה 3",
              link: "https://docs.google.com/document/d/1kz6lZRuxjSh1y_ICpguEgNwczwQCyE3Ilfd90XdaxT4/edit?usp=sharing",
              date: "2022-08-14",
              upvotes: 14,
              downvotes : 4
            },
            {
              name: "מבחן מועד א' 2020 פתרון",
              link: "https://docs.google.com/document/d/1q8jB5ThXV1c_6SWatqhNhP5BvdkFO1v6pMwF-ILUoHk/edit?usp=sharing",
              date: "2022-08-14",
              upvotes: 14,
              downvotes : 4
            }
          ]
        }, 
        {
          name: "הסתברות",
          id: "6156",
          description:
            "להקנות את ידע תיאורטי ומעשי של שיטות סטטיסטיות להבנה וניתוח בעיות שונות",
          downloads:[
            {
              name: "סיכום שיעור 1",
              link: "https://drive.google.com/file/d/15jLUNJSh4nTw91pd1AEF3he4eCSIvbEk/view?usp=sharing",
              date: "2022-08-17",
              upvotes: 12,
              downvotes : 3
            },
            {
              name: "סיכום שיעור 2",
              link: "https://drive.google.com/file/d/16sxDJ1iaZSSBIMQQgeXzD1l2XX9sSjmY/view?usp=sharing",
              date: "2022-08-15",
              upvotes: 11,
              downvotes : 1
            },
            {
              name: "סיכום שיעור 3",
              link: "https://drive.google.com/file/d/16q3YLtP2j9zgWWHY3kGvSQNTVc_LOViM/view?usp=sharing",
              date: "2022-08-14",
              upvotes: 14,
              downvotes : 4
            },
            {
              name: "סיכום שיעור 4",
              link: "https://drive.google.com/file/d/16memeqn9PgQyujeLMpLY0lRetSPz2hnO/view?usp=sharing",
              date: "2022-08-14",
              upvotes: 14,
              downvotes : 4
            }
          ]
        }, 
        {
          name: "מסדי נתונים",
          id: "6158",
          description:
            "התלמידים יכירו את עקרונות הניהול והבניה של מסד הנתונים הטבלאי. את המודלים לבנייתו וכמובן כיצד להשתמש בו לצרכי ניהול ושליפת מידע. ",
          downloads:[
            {
              name: " תרגול 3 MYSQL",
              link: "https://drive.google.com/file/d/18_WzYkHbrWbcpm85owiXgdPOWzTLWsD0/view?usp=sharing",
              date: "2022-08-17",
              upvotes: 12,
              downvotes : 3
            },
            {
              name: " תרגיל 1 קניות באינטרנט",
              link: "https://drive.google.com/file/d/18_USVjwKxP-0ytvNGNfclohlzde-xVQq/view?usp=sharing",
              date: "2022-08-15",
              upvotes: 11,
              downvotes : 1
            },
            {
              name: "סיכום שיעור 3",
              link: "https://drive.google.com/file/d/16q3YLtP2j9zgWWHY3kGvSQNTVc_LOViM/view?usp=sharing",
              date: "2022-08-14",
              upvotes: 14,
              downvotes : 4
            },
            {
              name: "  מבחן מועד א 2020",
              link: "https://drive.google.com/file/d/16yaI7NscWTiK-H3y1XMuQZndXlCacGXS/view?usp=sharinghttps://drive.google.com/file/d/16yaI7NscWTiK-H3y1XMuQZndXlCacGXS/view?usp=sharing",
              date: "2022-08-14",
              upvotes: 14,
              downvotes : 4
            },
            {
              name: " מבחן מועד א  2020 פיתרון",
              link: "https://docs.google.com/document/d/1i_oYvrh4xBgXSKTCLzVcyRnhGIYrfWzCmoWl07M6vsw/edit?usp=sharing",
              date: "2022-08-14",
              upvotes: 14,
              downvotes : 4
            }
          ]
        }, 
        {
          name: "מבני נתונים",
          id: "6157",
          description:
            "לימוד נושאים של מבני נתונים שמיועדים לפיתוח אלגוריתמים בצורה יעילה ומהירה והתנסות בכתיבת קוד תחת שפת פייתון.",
          downloads:[
            {
              name: "מיון בועות",
              link: "https://docs.google.com/document/d/1K2o73r2axQh4yKMlGoGvLyIWo84TLEBX/edit?usp=sharing&ouid=112867442737678432624&rtpof=true&sd=true",
              date: "2022-05-07",
              upvotes: 12,
              downvotes : 3
            },
            {
              name: "רשימה מקושרת",
              link: "https://docs.google.com/document/d/1JuVyg48lhFXEKj3SOl2NqV2-bwnMwkni/edit?usp=sharing&ouid=112867442737678432624&rtpof=true&sd=true",
              date: "2022-05-07",
              upvotes: 11,
              downvotes : 1
            },
            {
              name: "מבחן מועד א' 2019",
              link: "https://docs.google.com/document/d/1Vr9Ua3lOvNoR3K0NQ2-FTRN_XlF40IY9/edit?usp=sharing&ouid=112867442737678432624&rtpof=true&sd=true",
              date: "2022-08-14",
              upvotes: 14,
              downvotes : 4
            },
            {
              name: "מבחן מועד ב' 2019",
              link: "https://docs.google.com/document/d/1VqidU4YSSxNq9c0ZC3tae8rs_goObAqC/edit?usp=sharing&ouid=112867442737678432624&rtpof=true&sd=true",
              date: "2022-08-14",
              upvotes: 14,
              downvotes : 4
            }
          ]  
        }
      ]
    },
    {
      name: "פקולטה לחשבונאות",
      id: "acct",
      description: "Typed JavaScript at Any Scale.",
      resources: [
        {
          name: "Why TypeScript?",
          id: "why-typescript",
          description:
            "TypeScript might be the hottest, most popular language on the web, but why might you want to use it?"
        },
        {
          name: "Installing and Configuring TypeScript",
          id: "typescript-advanced-configuration",
          description:
            "TypeScript comes with a lot of configuration options. This post explains how some of the more common options work."
        },
        {
          name: "Getting Started with TypeScript",
          id: "typescript-getting-started",
          description:
            "In this up-to-date guide, we'll learn about all of the types you can use with TypeScript, as well as how to annotate values and variables."
        },
        {
          name: "Guide to Functions in TypeScript",
          id: "typescript-functions",
          description:
            "In this up-to-date guide, we'll discuss all the ways you can write a function in TypeScript."
        },
        {
          name: "Guide to Classes in TypeScript",
          id: "typescript-classes",
          description:
            "TypeScript builds upon the class syntax defined by JavaScript, making it more powerful and safe."
        }
      ]
    },
    {
      name: "פקולטה לפסיכולוגיה",
      id: "psych",
      description: "Declarative, component based routing for React",
      resources: [
        {
          name: "Code Splitting with React, React.lazy, and React Router",
          id: "react-router-code-splitting",
          description:
            "In this post you'll learn how to increase the performance of your React application by adding code splitting with React.lazy and React Router."
        },
        {
          name: "The Guide to Nested routes with React Router",
          id: "react-router-nested-routes",
          description:
            "In this up-to-date guide, you'll learn two patterns for creating nested routes with React Router."
        },
        {
          name: "How to Programmatically Navigate with React Router",
          id: "react-router-programmatically-navigate",
          description:
            "In this up-to-date guide, you'll learn the two ways to programmatically navigate with React Router - the Navigate component and the useNavigate Hook."
        },
        {
          name: "Protected Routes and Authentication with React Router",
          id: "react-router-protected-routes-authentication",
          description:
            "In this up-to-date guide, you'll learn a pattern for adding protected routes to your React Router application."
        },
        {
          name: "Server Rendering with React Router",
          id: "react-router-server-rendering",
          description:
            "In this comprehensive, up-to-date guide, you'll learn how, why, and when to add server rendering to a React and React Router application."
        }
      ]
    },
    {
        name: "פקולטה למשפטים",
        id: "law",
        description: "Declarative, component based routing for React",
        resources: [
          {
            name: "Code Splitting with React, React.lazy, and React Router",
            id: "react-router-code-splitting",
            description:
              "In this post you'll learn how to increase the performance of your React application by adding code splitting with React.lazy and React Router."
          },
          {
            name: "The Guide to Nested routes with React Router",
            id: "react-router-nested-routes",
            description:
              "In this up-to-date guide, you'll learn two patterns for creating nested routes with React Router."
          },
          {
            name: "How to Programmatically Navigate with React Router",
            id: "react-router-programmatically-navigate",
            description:
              "In this up-to-date guide, you'll learn the two ways to programmatically navigate with React Router - the Navigate component and the useNavigate Hook."
          },
          {
            name: "Protected Routes and Authentication with React Router",
            id: "react-router-protected-routes-authentication",
            description:
              "In this up-to-date guide, you'll learn a pattern for adding protected routes to your React Router application."
          },
          {
            name: "Server Rendering with React Router",
            id: "react-router-server-rendering",
            description:
              "In this comprehensive, up-to-date guide, you'll learn how, why, and when to add server rendering to a React and React Router application."
          }
        ]
      },
      {
        name: "פקולטה למנהל עסקים",
        id: "biz",
        description: "Declarative, component based routing for React",
        resources: [
          {
            name: "Code Splitting with React, React.lazy, and React Router",
            id: "react-router-code-splitting",
            description:
              "In this post you'll learn how to increase the performance of your React application by adding code splitting with React.lazy and React Router."
          },
          {
            name: "The Guide to Nested routes with React Router",
            id: "react-router-nested-routes",
            description:
              "In this up-to-date guide, you'll learn two patterns for creating nested routes with React Router."
          },
          {
            name: "How to Programmatically Navigate with React Router",
            id: "react-router-programmatically-navigate",
            description:
              "In this up-to-date guide, you'll learn the two ways to programmatically navigate with React Router - the Navigate component and the useNavigate Hook."
          },
          {
            name: "Protected Routes and Authentication with React Router",
            id: "react-router-protected-routes-authentication",
            description:
              "In this up-to-date guide, you'll learn a pattern for adding protected routes to your React Router application."
          },
          {
            name: "Server Rendering with React Router",
            id: "react-router-server-rendering",
            description:
              "In this comprehensive, up-to-date guide, you'll learn how, why, and when to add server rendering to a React and React Router application."
          }
        ]
      }
  ];

 
  export function getResource({ resourceId, topicId }) {
    return getTopic(topicId).resources.find(({ id }) => id === resourceId);
  }
  
  export function getTopic(topicId) {
    return topics.find(({ id }) => id === topicId);
  }
  
  export function getTopics() {
    return topics;
  }

  export function getFaculties(){
    

  }
  