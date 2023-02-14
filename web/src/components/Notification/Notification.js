export const Notify = (currentUser) => {
  let permission = Notification.permission

  if (permission === 'granted') {
    showNotification()
  } else if (permission === 'default') {
    requestAndShowPermission()
  } else {
    alert('Use normal alert')
  }

  function requestAndShowPermission() {
    Notification.requestPermission(function (permission) {
      if (permission === 'granted') {
        showNotification()
      }
    })
  }
  function showNotification() {
    if (document.visibilityState === 'visible') {
      return
    }
    if (currentUser.status === 'due') {
      let title = "You have Training that's due!"
      let body = 'Please check your training list.'
      let notification = new Notification(title, { body })
      notification.onclick = () => {
        notification.close()
        window.parent.focus()
      }
    } else if (currentUser.status === 'overdue') {
      let title = "You have Training that's overdue!"
      let body = 'Complete your training immedietly.'
      let notification = new Notification(title, { body })
      notification.onclick = () => {
        notification.close()
        window.parent.focus()
      }
    } else {
      let title = 'You have no Training that is due or overdue.'
      let body = 'Good Job!'
      let notification = new Notification(title, { body })
      notification.onclick = () => {
        notification.close()
        window.parent.focus()
      }
      console.log('clicked')
      // return
    }
  }
}
