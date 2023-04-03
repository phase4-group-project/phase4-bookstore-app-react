[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/Jobwawesh/my-portfolio-app-backend/graphs/commit-activity)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Linux](https://svgshare.com/i/Zhy.svg)](https://svgshare.com/i/Zhy.svg)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)


# BOOK STORE REACT APP
Our book store app is the ultimate platform for book lovers. With our app, you can easily browse through a vast collection of books and purchase the ones you love.

Our app features a user-friendly interface with easy navigation, making it simple to view book titles and descriptions. We offer a wide variety of books, including fiction, non-fiction, biographies, self-help, and much more. Our extensive catalog features the latest and greatest titles from top publishers.

Overall, our book store app is the perfect solution for anyone who loves reading and wants to explore a wide range of books. Hope you enjoy, CHEERS!

## Screenshot

<img src="images/bookstoreReact.png" width="1000">

## Pre-Requisites
In order to use this repository you will need the following:



- Operating System **(Windows `10+`, Linux `3.8+`, or MacOS X `10.7+`)**
- RAM >= 4GB
- Free Space >= 2GB

## Built With
This application has been built with the following tools:

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)


- **React**
- **npm**
- **Vercel**
- **Javascript**

## A deployed live link to this project:
This is the deployed link which helps you run the app in real time:
        https://bookstore-app-eta.vercel.app/


## Installation

To use this repo on your machine requires some simple steps

### Alternative One

- Open a terminal / command line interface on your computer
- Clone the repo by using the following:

        git clone https://github.com/phase4-group-project/phase4-bookstore-app-react

- Be patient as it creates a copy on your local machine for you.
- Change directory to the repo folder:

        cd phase4-bookstore-app-react

- (Optional) Open it in ``Visual Studio Code``

        code .

- (Alternate Option) Open it in any editor of your choice.
- Hurray! You are one step closer to being as intelligent as Einstein.

### Alternative Two

- On the top right corner of this page there is a button labelled ``Fork``.
- Click on that button to fork the repo to your own account.
- Take on the process in ``Alternative One`` above.
- Remember to replace your username when cloning.

        git clone https://github.com/your-username-here phase4-bookstore-app-react

## Running the application
Running the application is very straight forward. You can use the following steps to run the app.

1. Ensure you install the required dependancies
    ```{shell}
   npm install
   ```
2. Run the application
    ```{shell}
    npm start
    ```
3. Open the application from your browser
    ```
   http://localhost:3000
   ```
   
## Running the Application and Features
### User Story
- This Application works with fetched data  from a remote server. The API used was created specifically for this app: https://my-app-backend-portfolio.onrender.com/project 
- The first thing you will notice when you load the page is the login page where you need to either login if you have an account or signup if not. 
- Once you create an account you will be able to see other peoples,projects on your home page.
- On the home section, you will be able to see a list of books.
- You are able to create your own book where they will be displayed on the home page.
- You can search for books based on categories.
- The app in percistent, meaning you will stay logged in until you log out.

### MODELS
Database models representation for this app:

#### USER
| COLUMN        | DATA TYPE | DESCRIPTION                           | 
|---------------|-----------|---------------------------------------|
| id            | Integer   | Unique identifier.                    |
| name          | String    | User's name.                       |
| password_hash | String    | User's password hashed with `BCrypt`. |
| updated_at    | Date      | The date the user was updated.        |
| createdAt     | Date      | The date the user was created.        |


#### BOOKS
| COLUMN      | DATA TYPE                                       | DESCRIPTION                            | 
|-------------|-------------------------------------------------|----------------------------------------|
| id          | Integer                                         | Unique identifier.                     |
| title       | String                                          | The name of the project.               |
| description | String                                          | A short description about the project. |
| price | Integer | The price of the book. |
| author | String | The author of the book. |
| createdAt   | Date                                            | The date the book was created.         |

#### ORDERS
| COLUMN      | DATA TYPE                                       | DESCRIPTION                            | 
|-------------|-------------------------------------------------|----------------------------------------|
| id          | Integer                                         | Unique identifier.                     |
| user_id       | Integer                                          | The user's id |
| book_id | Integer                                         | The book's unique identifier. |
| quantity | Integer | The number of books. |
| total_price | Integer | The accumulative price of the books. |
| createdAt   | Date                                            | The date the ordder was created.     

#### AUTHOR
| COLUMN        | DATA TYPE | DESCRIPTION                           | 
|---------------|-----------|---------------------------------------|
| id            | Integer   | Unique identifier.                    |
| name          | String    | Author's name.                        |
| bio           | String    | Short info about the author.          |
| createdAt     | Date      | The date the author was created.      |

#### CATEGORIES
| COLUMN        | DATA TYPE | DESCRIPTION                           | 
|---------------|-----------|---------------------------------------|
| id            | Integer   | Unique identifier.                    |
| name          | String    | Author's name.                        |
| description   | String    | A short description about tcategory.  |
| createdAt     | Date      | The date the category was created.    |

# Authors
This project was contributed to by:
- [Job Waweru](https://github.com/Jobwawesh/)
- [Kevin Kimutai](https://github.com/kevinkkimutai)
- [Ivan Kainga](https://github.com/KahingaK)
- [Ian Orieko](https://github.com/orgs/phase4-group-project/people/ianrich69420)


# License
The project is licensed under Mozilla Public License Version 2.0
