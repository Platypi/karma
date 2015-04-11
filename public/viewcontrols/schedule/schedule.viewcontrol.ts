﻿/// <reference path="../../_references.d.ts" />

import plat = require('platypus');

import BaseViewControl = require('../../viewcontrols/base/base.viewcontrol');
import UserRepository = require('../../repositories/user/user.repository');

class ScheduleViewControl extends BaseViewControl {
    templateString: string = require('./schedule.viewcontrol.html');

    context: any = { 
        user: null,
        procedures: [
            { name: 'Physical', frequency: 'Twice Yearly' },
            { name: 'Dermatologist', frequency: 'Twice Yearly' },
            { name: 'Flu Shot', frequency: 'October' },
        ]
    };

    // constructor(private userRepository: UserRepository) {
    //     super();
    // }

    initialize(): void { 
        // this.context.user = this.userRepository.fetchUser();
        // console.log(this.context);
    }
}

plat.register.viewControl('schedule-vc', ScheduleViewControl, [
    UserRepository
]);

export = ScheduleViewControl;
