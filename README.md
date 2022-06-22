<div id="top"></div>

[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
 <!-- <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>
-->
  <h3 align="center">React, Redux Toolkit, react-router-dom v6</h3>

  <p align="center">
    This project is a fully configured started template for React, Redux Toolkit, React-router-dom v6 applications. It includes role based protected routes, authentication, menu generation from JSON.
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#folder-structure">Folder Structure</a>
     <ul>
        <li><a href="#how-to-create-new-page">How to Create New Page</a></li>
        <li><a href="#protected-route">Protected Routes - Role Based</a></li>
        <li><a href="#adding-items-to-menu">Adding Items to Menu</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## Folder Structure
![image](https://user-images.githubusercontent.com/64660609/174979810-80f31d50-7ca3-4cbd-b46f-2adfecc29744.png) <br/>
For this application, we have 2 layouts which are for Admin and Workspace pages. 
<br/>
Example: `app > pages > Workspace > Module1 > Page1`
<br/>
Inside Workspace, if we have so called 'module' which contains more than one page for example: `survey/detail`, `survey/results`... we create a module with routes.js file to implement module based routing.
<br/>
<br/>
Under `app > base` folder, we have shared components, services(local-storage, auth), utils(base http configs).
<br/>
<br/>
For two main layouts(admin and workspace) there are shared `components` folder, and we are able to create new components folder inside specific page or submodule.

## How to Create New Page:
* Go to related layout folder inside `app > pages > workspace`(for this example)
* If it is a single page you can create a standart js file for the page if it may has multiple routes inside, you must create a folder for it for example inside workspace folder > `Survey > SurveyCreate.js` && `Survey > SurveyDetails.js` || `Survey > SurveyCreate.js`
* We need to add lazy loading routes for create folder to `workspace > routes.js` and after that we can specify inner routes in `Survey > routes.js` for Survey folder we just created 
##### Protected Route:
* If the page need protection based on user role, we can use *ProtectedRoute* component in desired route file rather at lower or higher level.
  ```javascript
      <Route element={<ProtectedRoute allowedRoles={[1]} />}>
             <Route path="/*" element={<WorkspacePages />} />
      </Route>
    ```

##### Adding Items to Menu:
![image](https://user-images.githubusercontent.com/64660609/175013218-3e6500bb-f9c2-45bd-97fb-adfc293574ee.png)

All menu items are generating from Menu.js file. It provide us comfort for configuring url, icons, auth via roles, submenus. One item can has maximum two sub levels.

<p align="right">(<a href="#top">back to top</a>)</p>


### Built With

* [React.js 16](https://reactjs.org/)
* [Redux Toolkit 1.8.1](https://redux-toolkit.js.org/)
* [React Router Dom v6](https://reactrouter.com/)
* [React Bootstrap](https://react-bootstrap.github.io/)
* [Material Ui](https://v4.mui.com/getting-started/installation/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Install NPM packages
   ```sh
   npm install
   ```
2. Create a dummy token to login at [jwtBuilder](http://jwtbuilder.jamiekurtz.com/)
 `Login.js`
   ```js
   const testToken = 'ENTER YOUR TOKEN';
   ```
3. Start the server
   ```sh
   npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [x] Routing, Protected Routes
- [x] Redux Toolkit with Thunk
- [ ] Dark Mode
- [ ] Multi-language Support
    - [ ] English
    - [ ] Turkish

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/alperenjs
