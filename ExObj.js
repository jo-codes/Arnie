const exercises = {
  Groups: {
    Chest: {
      ExType: {
        Press: {
          Equipment: {
            Barbell: [
              'Flat Barbell Bench Press, Incline Barbell Bench Press, Decline Barbell Bench Press'
            ],
            Dumbbell: [
              'Flat Dumbbell Bench Press, Incline Dumbbell Bench Press, Decline Dumbbell Bench Press'
            ],
            Smith: [
              'Flat Smith Bench Press, Incline Smith Bench Press, Decline Smith Bench Press'
            ],
            Cables: ['Cable Chest Press'],
            Machine: [
              'Machine Chest Press',
              'Incline Machine Chest Press',
              'Decline Machine Chest Press'
            ]
          }
        },
        Fly: {
          Equipment: {
            Dumbbell: [
              'Flat Dumbbell Fly, Incline Dumbbell Fly, Decline Dumbbell Fly'
            ],
            Cables: [
              'High to Low Cable Fly',
              'Mid Cable Fly',
              'Low to High Cable Fly'
            ],
            Machine: ['Pec Deck', 'Machine Chest Fly']
          }
        }
      }
    },
    Back: {
      ExType: {
        Row: {
          Equipment: {
            Barbell: ['Barbell Row', 'Barbell T-bar Row'],
            Dumbbell: ['Dumbbell Row'],
            Smith: ['Smith Machine Row'],
            Cables: ['Single Arm Cable Row'],
            Machine: [
              'Machine T-bar Row',
              'Machine Row',
              'Machine High Row',
              'Machine Low Row'
            ]
          }
        },
        Pullover: {
          Equipment: {
            Barbell: ['Barbell Pullover'],
            Dumbbell: ['Dumbbell Pullover'],
            Cable: ['Cable Pullover'],
            Machine: ['Machine Pullover']
          }
        },
        Pulldown: {
          Equipment: {
            Cable: ['Cable Pull-in'],
            Machine: ['Lat Pulldown'],
            Bodyweight: ['Pullup', 'Chinup']
          }
        },

        Deadlift: {
          Equipment: {
            Barbell: ['Barbell Deadlift', 'Rack Pull', 'Hex Bar Deadlift'],
            Dumbbell: ['Dumbbell Deadlift'],
            Smith: ['Smith Machine Deadlift']
          }
        },

        Clean: ['Barbell Power Clean', 'Barbell Hang Clean']
      }
    },

    Arms: {
      Part: {
        Biceps: {
          Equipment: {
            Barbell: ['Barbell Curl'],
            Dumbbell: ['Dumbbell Curl', 'Dumbbell Hammer Curl'],
            Cables: ['Cable Rop Curl'],
            Machine: ['Machine Concentration Curl']
          }
        },

        Triceps: {
          Equipment: {
            Barbell: ['Lying Barbell Triceps Extension'],
            Dumbbell: ['Dumbbell Overhead Extension'],
            Smith: ['Smith Machine Close Grip Bench Press'],
            Cables: ['Cable Kickbacks'],
            Machine: ['Machine Tricep Extension']
          }
        }
      }
    },

    Legs: {
      Part: {
        Quads: {
          Equipment: {
            Barbell: ['Barbell Squat'],
            Dumbbell: ['Dumbbell Squat'],
            Smith: ['Smith Machine Squat'],
            Cables: ['Cable Squat'],
            Machine: ['Leg Press', 'Hack Squat']
          }
        },

        Hamstrings: {
          Equipment: {
            Barbell: ['Barbell Stiff Legged Deadlift'],
            Dumbbell: ['Dumbbell Romanian Deadlift'],
            Smith: ['Smith Machine Stiff Legged Deadlift'],
            Cables: ['Calbe Pullthroughs'],
            Machine: ['Hamstring Curl']
          }
        }
      }
    },

    Shoulders: {
      Equipment: {
        Barbell: ['Barbell Shoulder Press', 'Barbell Upright Row'],
        Dumbbell: {
          ExType: {
            Press: ['Dumbbell Shoulder Press'],
            Raise: ['Dumbbell Side Raises', 'Dumbbell Front Raises'],
            Row: ['Dumbbell Upright Row'],
            Fly: ['Dumbell Rear Delt Flys']
          }
        },
        Smith: {
          ExType: {
            Press: ['Smith Machine Shoulder Press'],
            Row: ['Smith Machine Upright Row']
          }
        },
        Cables: {
          ExType: {
            Press: ['Cable Shoulder Press'],
            Raise: ['Cable Shoulder Raises', 'Cable Front Raises'],
            Row: ['Cable Rear Delt Row', 'Cable Upright Row'],
            Pull: ['Face Pulls']
          }
        },

        Machine: {
          ExType: {
            Press: ['Machine Shoulder Press'],
            Raise: ['Machine Side Raise'],
            Fly: ['Machine Rear Delt Fly']
          }
        }
      }
    },

    Accessories: {
      Part: {
        Calves: {
          Equipment: {
            Barbell: ['Barbell Calf Raise'],
            Dumbbell: ['Dumbbell Calf Raise'],
            Smith: ['Smith Machine Calf Raise'],
            Machine: ['Leg Press Calf Raise', 'Hack Squat Calf Raise']
          }
        },

        Forearms: {
          Equipment: {
            Barbell: ['Barbell Forearm Curl', 'Barbell Reverse Curl'],
            Dumbbell: [
              'Dumbbell Forearm Curl',
              'Dumbbell Reverse Curl',
              'Dumbbell Hammer Curl'
            ],
            Smith: ['Smith Machine Forearm Curl'],
            Cables: ['Calbe Forearm Curl', 'Cable Reverse Curl'],
            Machine: ['Machine Forearm Curl']
          }
        },
        Traps: {
          Equipment: {
            Barbell: ['Barbell Shrug', 'Barbell Upright Row'],
            Dumbbell: ['Dumbbell Shrug', 'Dumbbell Upright Row'],
            Smith: ['Smith Machine Shrug', 'Smith Machine Upright Row'],
            Cables: ['Cable Shrug', 'Cable Upright Row'],
            Machine: ['Machine Shrug', 'Hack Squat Machine Shrug']
          }
        },
        Abs: {
          Equipment: {
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
      }
    },
    Hipsterflexers: ['Barbell Snatch']
  }
};

const icons = {
  muscleGrougs: {
    chest: require('./images/muscleGroupIcons/chest.jpg'),
    back: require('./images/muscleGroupIcons/back.jpg'),
    arms: require('./images/muscleGroupIcons/arms.jpg'),
    legs: require('./images/muscleGroupIcons/legs.jpg'),
    shoulders: require('./images/muscleGroupIcons/shoulders.jpg'),
    accessories: require('./images/muscleGroupIcons/accessories.jpg'),
    hipsterflexers: require('./images/muscleGroupIcons/hipsterflexers.jpg')
  },
  exEquipment: {
    dumbbell: require('./images/equipmentIcons/dumbbell.jpg'),
    barbell: require('./images/equipmentIcons/barbell.jpg'),
    smith: require('./images/equipmentIcons/smith.jpg'),
    cables: require('./images/equipmentIcons/cables.jpg'),
    machine: require('./images/equipmentIcons/machine.jpg')
  }
};

export { exercises, icons };
