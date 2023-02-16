import { db } from 'src/lib/db'

export const notifications = () => {
  return db.notification.findMany()
}

export const notification = ({ id }) => {
  return db.notification.findUnique({
    where: { id },
  })
}

export const createNotification = ({ input }) => {
  return db.notification.create({
    data: input,
  })
}

export const updateNotification = ({ id, input }) => {
  return db.notification.update({
    data: input,
    where: { id },
  })
}

export const deleteNotification = ({ id }) => {
  return db.notification.delete({
    where: { id },
  })
}

export const Notification = {
  airman: (_obj, { root }) => {
    return db.notification.findUnique({ where: { id: root?.id } }).airman()
  },
}
