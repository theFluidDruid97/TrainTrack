export const standard = defineScenario({
  airmanTraining: {
    one: {
      data: {
        start: '2023-02-12T00:46:31.074Z',
        end: '2023-02-12T00:46:31.074Z',
        airman: {
          create: {
            email: 'String4295905',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        training: { create: { name: 'String5522366' } },
      },
    },
    two: {
      data: {
        start: '2023-02-12T00:46:31.074Z',
        end: '2023-02-12T00:46:31.074Z',
        airman: {
          create: {
            email: 'String4309450',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        training: { create: { name: 'String9078856' } },
      },
    },
  },
})