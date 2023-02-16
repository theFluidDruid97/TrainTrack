// import * as React from 'react'

// import MailIcon from '@mui/icons-material/Mail'
// import InboxIcon from '@mui/icons-material/MoveToInbox'
// import Box from '@mui/material/Box'
// import Button from '@mui/material/Button'
// import Divider from '@mui/material/Divider'
// import Drawer from '@mui/material/Drawer'
// import List from '@mui/material/List'
// import ListItem from '@mui/material/ListItem'
// import ListItemButton from '@mui/material/ListItemButton'
// import ListItemIcon from '@mui/material/ListItemIcon'
// import ListItemText from '@mui/material/ListItemText'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { useQuery } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_NOTIFICATION_MUTATION = gql`
  mutation DeleteNotificationMutation($id: Int!) {
    deleteNotification(id: $id) {
      id
    }
  }
`
export const QUERY = gql`
  query FindAirman {
    airmen {
      id
      lastName
      firstName
      rank
    }
  }
`

const NotificationsList = ({ notifications }) => {
  const { loading, error, data } = useQuery(QUERY)
  console.log(data.airmen)
  const [deleteNotification] = useMutation(DELETE_NOTIFICATION_MUTATION, {
    onCompleted: () => {
      toast.success('Notification deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete notification ' + id + '?')) {
      deleteNotification({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>airmanId</th>
            <th>Created at</th>
            <th>Message</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {notifications.map((notification) => (
            <tr key={notification.id}>
              <td>{truncate(notification.id)}</td>
              <td>
                {`${
                  data.airmen.find(
                    (airman) => airman.id === notification.airmanId
                  ).rank
                }
                  ${
                    data.airmen.find(
                      (airman) => airman.id === notification.airmanId
                    ).lastName
                  }, ${
                  data.airmen.find(
                    (airman) => airman.id === notification.airmanId
                  ).firstName
                }`}
              </td>
              <td>{timeTag(notification.createdAt)}</td>
              <td>{truncate(notification.message)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.notification({ id: notification.id })}
                    title={'Show notification ' + notification.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editNotification({ id: notification.id })}
                    title={'Edit notification ' + notification.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete notification ' + notification.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(notification.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default NotificationsList

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";

// export default function TemporaryDrawer() {
//   const [state, setState] = React.useState({
//     right: false
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <Box
//       sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         <ListItem>lorem ipsum</ListItem>
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       {["right"].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>Show Details</Button>
//           <Drawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//           >
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }
