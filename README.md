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
    <li><a href="#redux">Redux</a></li>
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
* If it is a single page we can create a standart js file for the page if it may has multiple routes inside, we must create a folder for it for example inside workspace folder > `Survey > SurveyCreate.js` && `Survey > SurveyDetails.js` || `Survey > SurveyCreate.js`
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


## Redux
This project is using Redux Toolkit with Thunk middleware for async API calls from store.
###### How to create a `Redux Slice`?
With Redux Toolkit we have slices which are state pieces for specific page or module. We can create Redux Slice with proper naming according to where it's involved for example: 
For global user data we want to keep, we can create slice inside `pages > admin > Auth > authSlice.js`
<br/>

For basic redux slice layout you can check out [this page](https://github.com/alperenjs/demo3/blob/master/src/app/pages/Auth/authSlice.js)

### Built With

* [React.js 16](https://reactjs.org/)
* [Redux Toolkit 1.8.1](https://redux-toolkit.js.org/)
* [React Router Dom v6](https://reactrouter.com/)
* [React Bootstrap](https://react-bootstrap.github.io/)
* [Material Ui](https://v4.mui.com/getting-started/installation/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

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
- [ ] Documentation
    - [ ] Http Calls
    - [x] Redux

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/alperenjs
