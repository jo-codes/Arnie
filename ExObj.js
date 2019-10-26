const exercises = {
  Chest: {
    Barbell: [
      'Flat Barbell Bench Press, Incline Barbell Bench Press, Decline Barbell Bench Press'
    ],

    Dumbbell: {
      Press: [
        'Flat Dumbbell Bench Press, Incline Dumbbell Bench Press, Decline Dumbbell Bench Press'
      ],
      Fly: ['Flat Dumbbell Fly, Incline Dumbbell Fly, Decline Dumbbell Fly']
    },

    Smith: [
      'Flat Smith Bench Press, Incline Smith Bench Press, Decline Smith Bench Press'
    ],
    Cables: [
      'High to Low Cable Fly',
      'Mid Cable Fly',
      'Low to High Cable Fly',
      'Cable Chest Press'
    ],
    Machine: [
      'Machine Chest Press',
      'Incline Machine Chest Press',
      'Decline Machine Chest Press',
      'Pec Deck',
      'Machine Chest Fly'
    ]
  },

  Back: {
    Row: {
      Barbell: ['Barbell Row'],
      Dumbbell: ['Dumbbell Row'],
      Smith: ['Smith Machine Row'],
      Cables: ['Single Arm Cable Row'],
      Machine: ['T-bar Row, Machine Row', 'Machine High Row', 'Machine Low Row']
    },
    Pullover: [
      'Barbell Pullover',
      'Dumbbell Pullover',
      'Cable Pullover',
      'Machine Pullover'
    ],
    Pulldown: ['Cable Pull-in', 'Lat Pulldown', 'Pullup, Chinup'],
    Deadlift: [
      'Barbell Deadlift',
      'Dumbbell Deadlift',
      'Hex Bar Deadlift',
      'Smith Machine Deadlift',
      'Rack Pull'
    ]
  },

  Arms: {
    Biceps: {
      Barbell: ['Barbell Curl'],
      Dumbbell: ['Dumbbell Curl', 'Dumbbell Hammer Curl'],
      Cables: ['Cable Rop Curl'],
      Machine: ['Machine Concentration Curl']
    },

    Triceps: {
      Barbell: ['Lying Barbell Triceps Extension'],
      Dumbbell: ['Dumbbell Overhead Extension'],
      Smith: ['Smith Machine Close Grip Bench Press'],
      Cables: ['Cable Kickbacks'],
      Machine: ['Machine Tricep Extension']
    }
  },

  Legs: {
    Quads: {
      Barbell: ['Barbell Squat'],
      Dumbbell: ['Dumbbell Squat'],
      Smith: ['Smith Machine Squat'],
      Cables: ['Cable Squat'],
      Machine: ['Leg Press', 'Hack Squat']
    },

    Hamstrings: {
      Barbell: ['Barbell Stiff Legged Deadlift'],
      Dumbbell: ['Dumbbell Romanian Deadlift'],
      Smith: ['Smith Machine Stiff Legged Deadlift'],
      Cables: ['Calbe Pullthroughs'],
      Machine: ['Hamstring Curl']
    }
  },

  Shoulders: {
    Barbell: ['Barbell Shoulder Press', 'Barbell Upright Row'],
    Dumbbell: [
      'Dumbbell Shoulder Press',
      'Dumbbell Side Raises',
      'Dumbbell Front Raises',
      'Rear Delt Rows',
      'Dumbbell Upright Row'
    ],
    Smith: ['Smith Machine Shoulder Press', 'Smith Machine Upright Row'],
    Cables: [
      'Cable Shoulder Press',
      'Cable Shoulder Raises',
      'Cable Front Raises',
      'Cable Rear Delt Row',
      'Face Pulls',
      'Cable Upright Row'
    ],
    Machine: [
      'Machine Shoulder Press',
      'Machine Side Raise',
      'Machine Rear Delt Fly'
    ]
  },

  Accessories: {
    Calves: {
      Barbell: ['Barbell Calf Raise'],
      Dumbbell: ['Dumbbell Calf Raise'],
      Smith: ['Smith Machine Calf Raise'],
      Machine: ['Leg Press Calf Raise', 'Hack Squat Calf Raise']
    },
    Forearms: {
      Barbell: ['Barbell Forearm Curl', 'Barbell Reverse Curl'],
      Dumbbell: [
        'Dumbbell Forearm Curl',
        'Dumbbell Reverse Curl',
        'Dumbbell Hammer Curl'
      ],
      Smith: ['Smith Machine Forearm Curl'],
      Cables: ['Calbe Forearm Curl', 'Cable Reverse Curl'],
      Machine: ['Machine Forearm Curl']
    },
    Traps: {
      Barbell: ['Barbell Shrug', 'Barbell Upright Row'],
      Dumbbell: ['Dumbbell Shrug', 'Dumbbell Upright Row'],
      Smith: ['Smith Machine Shrug', 'Smith Machine Upright Row'],
      Cables: ['Cable Shrug', 'Cable Upright Row'],
      Machine: ['Machine Shrug', 'Hack Squat Machine Shrug']
    },
    Abs: {
      Barbell: ['Barbell Ab Rollout'],
      Dumbbell: [
        'Dumbbell Oblique Raise',
        'Russian Twist',
        'Dumbbell Weighted Sit-up'
      ],
      Cables: ['Calbe Crunch'],
      Machine: [
        'Ab Machine Crunch',
        'Ab Wheel Rollout',
        'Captains Chair Leg Raises',
        'Bench Leg Raises'
      ]
    }
  }
};

const icons = {
  // muscleGrougs: {
  chest: require('./images/muscleGroupIcons/chest.jpg'),
  back: require('./images/muscleGroupIcons/back.jpg'),
  arms: require('./images/muscleGroupIcons/arms.jpg'),
  legs: require('./images/muscleGroupIcons/legs.jpg'),
  shoulders: require('./images/muscleGroupIcons/shoulders.jpg'),
  accessories: require('./images/muscleGroupIcons/accessories.jpg'),
  // },
  // exEquipment: {
  dumbbell: require('./images/equipmentIcons/dumbbell.jpg'),
  barbell: require('./images/equipmentIcons/barbell.jpg'),
  smith: require('./images/equipmentIcons/smith.jpg'),
  cables: require('./images/equipmentIcons/cables.jpg'),
  machine: require('./images/equipmentIcons/machine.jpg')
  // }
};

export { exercises, icons };
