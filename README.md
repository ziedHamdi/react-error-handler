# react-error-handler
This library allows you to handle runtime errors in react (in event handling processes) with a minimum of code to display errors, warning, info and success messages through a hook method call

# How to use #
**You can read a blog article that explains how this library works here: https://medium.com/@zhamdi/react-how-to-centralize-api-errors-management-b70fa05dba76**

## - Add context
`import ToastContextProvider from 'transverse/toast/ToastContextProvider'`
### plain React ###

Surround your app component with the context provider
```
<ToastContextProvider>
    <App/>
</ToastContextProvider>
```

### next.js ###
Add  to your /pages/_app.js file the error list context provider component
```
<ToastContextProvider>
    <Component {...pageProps} />
</ToastContextProvider>
```

## - Consume the context content ##
`import DynamicNotifications from comp/toast/DynamicNotifications.js`

Somewhere in your layout component, add the component

`<DynamicNotifications/>`

to display the errors

## - Use the hook ##
`import useToast from "transverse/toast/hook/useToast"`

In your components call useToast to get a shorthand to the publishing to the context method

For example in **Apollo** you would write your code this way:
```
const TOAST_TIMEOUT = 3000 //in ms

export default function MyComp(props) {
    const {addToast} = useToast(TOAST_TIMEOUT)
    const {loading, error, data} = useQuery(myQuery, {
        onError: (error)=> addToast({message:error.message}),
    })
}
```

# Options #
`addToast` has the following options

  - **message**: the message to display
  - **type**: (default: `error`), can be one of 'success' | 'info' | 'warning' | 'error'
  - **title**: (default: `error`), you can add a title to the displayed toast
  - **timeout**: (default: timeout supplied to useToast hook, if none toast does not close automatically), you can specify a different timeout for an individual toast
  - **sx**: (default: see ToastComp), you can define your own styles
