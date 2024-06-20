# Learning React from Scratch
# Parcel
- Dev Build
- Local Server
- HMR= Hot Module Replacement
- File Watching Algorithm= written in C++
- Uses Caching= provides faster builds
- Image optimization
- Minification of files for Production
- Bundling our files for Production
- Compress our files for Production
- Content Hashing
- Code Splitting
- Differential Bundling= to give support to be run in older browsers
- Error handling and suggestions to fix them
- Provides a way to host on HTTPS
- Tree Shaking- remove unused code for you


# Food-orderig app
/**
 * 
 * #Header
 *  -Logo
 *  -NavItems(Home,About,Cart)
 * #Body
 *  -Search
 *  -RestaurantContainer
 *      -RestaurantCards-- 
 *          -img
 *          -Name, star rating, delivery time,price for two
 * #Footer
 *  -Copyright
 *  -Address
 *  -Links
 *  -Contact 
 * 
 */

 # React-Hooks
 - They are Normal JS utility functions, written by facebook developers..
 - Major hooks, that are most widely used are useState() and useEffect.

 # Redux Toolkit
 - Install the libraries, @reduxjs/toolkit and react-redux
 - Build our Store
 - Connect our store to our app
 - Slice (cartSlice)
 - dispatch(action)
 - selector

 # Setting up Testing in our App
 - Install React Testing Library
 - Then Installed Jest
 - Installed Babel-jest dependencies
 - Configure Babel (babel.config.js)
 - Configure parcel config file to disable default babel transpilation
 - Jest configuration(npx jest --init)
 - Installing JsDom library(npm install --save-dev jest-environment-jsdom)
 - Install @babel/preset-react ==> to make jsx work inside test cases
 - Include @babel/preset-react inside our babel config
 - Install , npm i -D @testing-library/jest-dom