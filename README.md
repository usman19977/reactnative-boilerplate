# React Native Boilerplate
React Native Clean Architecture With All New React Native 0.71 - Redux , Redux Saga , Ant Design Mobile UI , Container View Design Pattern Implemented


#

## Folder Structure

### <b> Assets : </b> 
1 - The folder named "assets" is designated for storing all static resources, as implied by its name.

2 - Each individual asset should be properly registered and exported in the assets/index.js file.

3 - Consequently, all resources can be accessed and imported from the '/assets' directory.

4 - Examples of static assets that can be stored in this folder include images, logos, vector icons, fonts, and more.
#

### <b> Config : </b> 
1 - The folder named "components" is reserved for shared components that are used across different screens.

2 - All components should be properly registered and exported in the components/index.js file to provide a single access point.

3 - It's important to use named exports for each component to avoid any potential conflicts.

4 - For components that involve complex logic or integration with Redux, it's recommended to use the "Container-View pattern" and separate them into "component.container.js" and "Component.view.js" ,to incorporate Container View Design Pattern.

Tip: When exporting components, it's advisable to use named exports rather than default exports for clarity and readability , multiple exports per module , easier refactoring & modular structure .
#
### <b> Components : </b> 
1 - The path designated for storing all of the app's configurations is located here.

2 - This may include settings such as the date format, default language, a master data set, or any other similar configuration options.
#
### <b> i18n : </b> 
1 - Internationalization or multi-lingual support in the app is implemented through the use of the "i18next" library.

2 - This approach typically involves creating a configuration file, along with separate language.json files for each supported language that contain the corresponding translations.
#

### <b> Navigation : </b> 
1 - As name suggests this folder contains all the logic and mechanism regarding routing .

2 - File <code>Contants.js</code> contains all the routes defined as constants.

3 - File <code>Navigators.js</code> <pre> <a href="https://www.npmjs.com/package/@react-navigation/native" target="_blank"> @react-navigation/native </a>, <a href="https://www.npmjs.com/package/react-native-screens" target="_blank"> react-native-screens </a> , <a href="https://www.npmjs.com/package/@react-navigation/native-stack" target="_blank">@react-navigation/native-stack</a> </pre>
Above Packages are used in this boilerplate for navigation and routing mechanism and this file contain Navigation Container.

4 - File <code>AuthRoutes.js</code> contains all the routes regarding Authentication like Login , Sign Up etc. initially it is using <b>Stack.Navigator</b> you can modify this according to your requirements for more information <a href="https://reactnavigation.org/docs/native-stack-navigator/" target="_blank"> visit </a>

5 - File <code>ProtectedRoutes.js</code> contains all the routes those are protected like Home , About , Profile , Dashboards etc . initially it is using <b> Drawer.Navigator </b> you can modify this according to your requirements for more information <a href="https://reactnavigation.org/docs/drawer-based-navigation/" target="_blank"> visit </a>

6 - Folder <code> components </code> if there is any of the shared component that is required for advance routing or for creating bridge between multiple layouts you can define those components here.

#

### <b> Redux : </b> 

1 - All State management logic is will go here as we are using <b>Redux</b> here for state management and for async operations we are using <b>Redux Saga</b> , every module has its respective folder and files as below
<pre> 
    <code>Actions.js</code> - Contains all the action creators for that specific module

    <code>Constants.js</code> - Contains all the constants regarding redux module the type  which will be used in reducer to identify which part of the state needs to be change and also we use these for dispatching the actions 


    <code>Reducer.js</code> - Contain Reducer of that module responsible for mutating the state immutably

    <code>Saga.js</code> - Contain the async generator function which could cause side effect in the app replacement of thunk middleware
    
</pre>

2 - File <code> rootSaga.js </code> will combine all the sagas and run them in <code>store.js</code>

3 - File <code> store.js </code> contain's all the reducers to be combined via combine reducer hook also dev tool is attached and <code> rootSaga.js </code> is also attached to the store as a middleware to perform async operation . later this store will be imported by provider on the very top element in the Tree.
#

### <b> Screens : </b>

1 - Contain all the screens of the app in a modular way and Container View Design Pattern implemented . 

2 - Each Module has its relevant components & sub - component if needed .

3 - Module main entry point by the Navigator will be <code> xxxModule.container.js </code> 

4 - Each module has two files <code>xxxModule.container.js </code> & <code>xxxModule.view.js </code> , <code>xxxModule.view.js </code> is the dumb component all the logic related work is done in <code>xxxModule.container.js </code> file and thus , <code>xxxModule.view.js </code> is reuseable , if needed.
#

### <b> Services : </b>

1 - Contains all api calls it is also implemented in modular way
2 - Each folder is a module and has <code> api.js </code> file containing its relevant API call for external system.

3 - Axios is used for api calls.
#
### <b> Styles : </b>
1 - Global styles are be implemented in <code> index.style.js </code> 

2 - Module-wise styles can be exported via Folder of that module in style folder.  

#
### <b> Utils : </b>
1 - Contain utilities of the application or some common modules those are needed through out the app 

#

### <b> <code> Main.js  </code> </b> will be the entry point of the application .
#



# Important  
Open for contributions and feedback , kindly add new features or enhancements and create Pull Request to develop branch , changes will be reviewed and merged back to main .
