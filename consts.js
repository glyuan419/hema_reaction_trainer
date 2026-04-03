const GUARDS = ['right_ochs', 'right_vom_tag', 'right_pflug', 'right_nebenhut', 'right_alber', 'left_alber', 'left_nebenhut', 'left_pflug', 'left_vom_tag', 'left_ochs'];
const ATTACKS = ['forehand_oberhau', 'right_mittelhau', 'forehand_unterhau', 'backhand_unterhau', 'left_mittelhau', 'backhand_oberhau', 'stechen']

const GUARD_TRANSITIONS = {
  right_vom_tag: ['right_ochs', 'right_vom_tag', 'right_pflug', 'right_alber', 'right_nebenhut', 'left_ochs', 'left_vom_tag', 'left_pflug', 'left_alber', 'left_nebenhut'],
  right_ochs: ['right_ochs', 'right_vom_tag', 'right_pflug', 'right_alber', 'right_nebenhut', 'left_ochs', 'left_vom_tag', 'left_pflug', 'left_alber', 'left_nebenhut'],
  right_pflug: ['right_ochs', 'right_vom_tag', 'right_pflug', 'right_alber', 'right_nebenhut', 'left_ochs', 'left_vom_tag', 'left_pflug', 'left_alber', 'left_nebenhut'],
  right_alber: ['right_ochs', 'right_vom_tag', 'right_pflug', 'right_alber', 'right_nebenhut', 'left_ochs', 'left_vom_tag', 'left_pflug', 'left_alber', 'left_nebenhut'],
  right_nebenhut: ['right_ochs', 'right_vom_tag', 'right_pflug', 'right_alber', 'right_nebenhut', 'left_ochs', 'left_vom_tag', 'left_pflug', 'left_alber', 'left_nebenhut'],

  left_vom_tag: ['right_ochs', 'right_vom_tag', 'right_pflug', 'right_alber', 'right_nebenhut', 'left_ochs', 'left_vom_tag', 'left_pflug', 'left_alber', 'left_nebenhut'],
  left_ochs: ['right_ochs', 'right_vom_tag', 'right_pflug', 'right_alber', 'right_nebenhut', 'left_ochs', 'left_vom_tag', 'left_pflug', 'left_alber', 'left_nebenhut'],
  left_pflug: ['right_ochs', 'right_vom_tag', 'right_pflug', 'right_alber', 'right_nebenhut', 'left_ochs', 'left_vom_tag', 'left_pflug', 'left_alber', 'left_nebenhut'],
  left_alber: ['right_ochs', 'right_vom_tag', 'right_pflug', 'right_alber', 'right_nebenhut', 'left_ochs', 'left_vom_tag', 'left_pflug', 'left_alber', 'left_nebenhut'],
  left_nebenhut: ['right_ochs', 'right_vom_tag', 'right_pflug', 'right_alber', 'right_nebenhut', 'left_ochs', 'left_vom_tag', 'left_pflug', 'left_alber', 'left_nebenhut'],
};

const GUARD_COUNTERS = {
  right_vom_tag: ['right_ochs', 'right_vom_tag', 'right_pflug', 'right_alber', 'right_nebenhut', 'left_ochs', 'left_vom_tag', 'left_pflug', 'left_alber', 'left_nebenhut'],
  right_ochs: ['right_ochs', 'right_vom_tag', 'right_pflug', 'right_alber', 'right_nebenhut', 'left_ochs', 'left_vom_tag', 'left_pflug', 'left_alber', 'left_nebenhut'],
  right_pflug: ['right_ochs', 'right_vom_tag', 'right_pflug', 'right_alber', 'right_nebenhut', 'left_ochs', 'left_vom_tag', 'left_pflug', 'left_alber', 'left_nebenhut'],
  right_alber: ['right_ochs', 'right_vom_tag', 'right_pflug', 'right_alber', 'right_nebenhut', 'left_ochs', 'left_vom_tag', 'left_pflug', 'left_alber', 'left_nebenhut'],
  right_nebenhut: ['right_ochs', 'right_vom_tag', 'right_pflug', 'right_alber', 'right_nebenhut', 'left_ochs', 'left_vom_tag', 'left_pflug', 'left_alber', 'left_nebenhut'],

  left_vom_tag: ['right_ochs', 'right_vom_tag', 'right_pflug', 'right_alber', 'right_nebenhut', 'left_ochs', 'left_vom_tag', 'left_pflug', 'left_alber', 'left_nebenhut'],
  left_ochs: ['right_ochs', 'right_vom_tag', 'right_pflug', 'right_alber', 'right_nebenhut', 'left_ochs', 'left_vom_tag', 'left_pflug', 'left_alber', 'left_nebenhut'],
  left_pflug: ['right_ochs', 'right_vom_tag', 'right_pflug', 'right_alber', 'right_nebenhut', 'left_ochs', 'left_vom_tag', 'left_pflug', 'left_alber', 'left_nebenhut'],
  left_alber: ['right_ochs', 'right_vom_tag', 'right_pflug', 'right_alber', 'right_nebenhut', 'left_ochs', 'left_vom_tag', 'left_pflug', 'left_alber', 'left_nebenhut'],
  left_nebenhut: ['right_ochs', 'right_vom_tag', 'right_pflug', 'right_alber', 'right_nebenhut', 'left_ochs', 'left_vom_tag', 'left_pflug', 'left_alber', 'left_nebenhut'],
};

const SIMPLE_ATTACKS = {
    right_vom_tag: [
        [['forehand_oberhau', 'defence']],
        [['right_mittelhau', 'defence']],
        [['stechen', 'defence']]
    ],

    left_vom_tag: [
        [['backhand_oberhau', 'defence']],
        [['left_mittelhau', 'defence']],
        [['stechen', 'defence']]
    ],

    right_ochs: [
        [['stechen', 'defence']],
        [['forehand_oberhau', 'defence']]
    ],

    left_ochs: [
        [['stechen', 'defence']],
        [['backhand_oberhau', 'defence']]
    ],

    right_pflug: [
        [['stechen', 'defence']],
        [['forehand_unterhau', 'defence']]
    ],

    left_pflug: [
        [['stechen', 'defence']],
        [['backhand_unterhau', 'defence']]
    ],

    right_nebenhut: [
        [['right_mittelhau', 'defence']],
        [['forehand_unterhau', 'defence']]
    ],

    left_nebenhut: [
        [['left_mittelhau', 'defence']],
        [['backhand_unterhau', 'defence']]
    ],

    right_alber: [
        [['forehand_unterhau', 'defence']]
    ],

    left_alber: [
        [['backhand_unterhau', 'defence']]
    ]
};

const COMPLEX_ATTACKS = {
    right_vom_tag: [
        ...SIMPLE_ATTACKS['right_vom_tag'],
        [
            ['forehand_oberhau', 'feint'],
            ['forehand_unterhau', 'defence']
        ],
        [
            ['forehand_oberhau', 'feint'],
            ['left_mittelhau', 'defence']
        ],
        [
            ['right_mittelhau', 'feint'],
            ['forehand_oberhau', 'defence']
        ]
    ],

    left_vom_tag: [
        ...SIMPLE_ATTACKS['left_vom_tag'],
        [
            ['backhand_oberhau', 'feint'],
            ['backhand_unterhau', 'defence']
        ],
        [
            ['backhand_oberhau', 'feint'],
            ['right_mittelhau', 'defence']
        ],
        [
            ['left_mittelhau', 'feint'],
            ['backhand_oberhau', 'defence']
        ]
    ],

    right_ochs: [
        ...SIMPLE_ATTACKS['right_ochs'],
        [
            ['stechen', 'feint'],
            ['forehand_oberhau', 'defence']
        ],
        [
            ['stechen', 'feint'],
            ['right_mittelhau', 'defence']
        ]
    ],

    left_ochs: [
        ...SIMPLE_ATTACKS['left_ochs'],
        [
            ['stechen', 'feint'],
            ['backhand_oberhau', 'defence']
        ],
        [
            ['stechen', 'feint'],
            ['left_mittelhau', 'defence']
        ]
    ],

    right_pflug: [
        ...SIMPLE_ATTACKS['right_pflug'],
        [
            ['stechen', 'feint'],
            ['forehand_unterhau', 'defence']
        ],
        [
            ['stechen', 'feint'],
            ['right_mittelhau', 'defence']
        ]
    ],

    left_pflug: [
        ...SIMPLE_ATTACKS['left_pflug'],
        [
            ['stechen', 'feint'],
            ['backhand_unterhau', 'defence']
        ],
        [
            ['stechen', 'feint'],
            ['left_mittelhau', 'defence']
        ]
    ],

    right_nebenhut: [
        ...SIMPLE_ATTACKS['right_nebenhut'],
        [
            ['right_mittelhau', 'feint'],
            ['forehand_oberhau', 'defence']
        ],
        [
            ['forehand_unterhau', 'feint'],
            ['stechen', 'defence']
        ]
    ],

    left_nebenhut: [
        ...SIMPLE_ATTACKS['left_nebenhut'],
        [
            ['left_mittelhau', 'feint'],
            ['backhand_oberhau', 'defence']
        ],
        [
            ['backhand_unterhau', 'feint'],
            ['stechen', 'defence']
        ]
    ],

    right_alber: [
        ...SIMPLE_ATTACKS['right_alber'],
        [
            ['forehand_unterhau', 'feint'],
            ['stechen', 'defence']
        ]
    ],

    left_alber: [
        ...SIMPLE_ATTACKS['left_alber'],
        [
            ['backhand_unterhau', 'feint'],
            ['stechen', 'defence']
        ]
    ]
};