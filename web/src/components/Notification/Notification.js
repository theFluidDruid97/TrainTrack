import { toast } from '@redwoodjs/web/dist/toast'

import { GeneralContext } from 'src/App'
// import { Success } from '../Airman/AirmanCell/AirmanCell'

export const Notify = (currentUser) => {
  const { notified, setNotified } = React.useContext(GeneralContext)
  if (currentUser.status === 'Due' && notified === false) {
    toast('You have Training that is due! Please check your training list.')
    setNotified(true)
  } else if (currentUser.status === 'Overdue' && notified === false) {
    toast(
      'You have Training that is overdue! Complete your training immediately.'
    )
    setNotified(true)
  } else if (currentUser.status === 'Current' && notified === false) {
    toast('You have no training due or overdue.')
    setNotified(true)
  }
}
// export const Notify = (currentUser) => {
//   let permission = Notification.permission
//   console.log(currentUser)

//   if (permission === 'granted') {
//     showNotification()
//   } else if (permission === 'default') {
//     requestAndShowPermission()
//   } else {
//     alert('Use normal alert')
//   }

//   function requestAndShowPermission() {
//     Notification.requestPermission(function (permission) {
//       if (permission === 'granted') {
//         showNotification()
//       }
//     })
//   }
//   function showNotification() {
//     // if (document.visibilityState === 'visible') {
//     //   return
//     // }
//     if (currentUser.status === 'Due') {
//       let title = "You have Training that's due!"
//       let body = 'Please check your training list.'
//       let notification = new Notification(title, { body })
//       notification.onclick = () => {
//         notification.close()
//         window.parent.focus()
//       }
//     } else if (currentUser.status === 'Overdue') {
//       let title = "You have Training that's overdue!"
//       let body = 'Complete your training immedietly.'
//       let notification = new Notification(title, { body })
//       notification.onclick = () => {
//         notification.close()
//         window.parent.focus()
//       }
//     } else {
//       console.log(Success)
//     }

//     // return
//   }
// }
