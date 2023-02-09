import { db } from 'src/lib/db'

export const trainings = () => {
  return db.training.findMany()
}

export const training = ({ id }) => {
  return db.training.findUnique({
    where: { id },
  })
}

export const createTraining = ({ input }) => {
  return db.training.create({
    data: input,
  })
}

export const updateTraining = ({ id, input }) => {
  return db.training.update({
    data: input,
    where: { id },
  })
}

export const deleteTraining = ({ id }) => {
  return db.training.delete({
    where: { id },
  })
}

export const Training = {
  TrainingCollection: (_obj, { root }) => {
    return db.training
      .findUnique({ where: { id: root?.id } })
      .TrainingCollection()
  },
  AirmanTraining: (_obj, { root }) => {
    return db.training.findUnique({ where: { id: root?.id } }).AirmanTraining()
  },
}
