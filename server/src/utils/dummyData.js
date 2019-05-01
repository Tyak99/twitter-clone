export default {
    users: [
        {
            id: 1,
            name: 'Malik Godwin',
            username: 'Despeauxz',
            email: 'despeauxz@gmail.com',
            status: 'active',
            is_admin: true,
            active: true,
            password: '$2b$10$4ktY4o8zXArp7xwrp15NEurQzBO8D2hT50iLKEqiQprTuezFxeSY6',
            created_at: new Date()
        },
        {
            id: 2,
            name: 'John Doe',
            username: 'Jahbless',
            email: 'john@gmail.com',
            status: 'active',
            is_admin: false,
            active: false,
            password: '$2b$10$Ty8L.q4NQ/pbNjdVTMlvaOUfOh.fdYwHWId2grtLau5RJCAor3IMK',
            created_at: new Date()
        },
    ],
    profile: [
        {
            id: 1,
            user_id: 1,
            desc: null,
            location: null,
            date_of_birth: new Date(),
            avatar: null,
            header_photo: null,
            created_at: new Date(),
            modified_at: null
        },
        {
            id: 2,
            user_id: 2,
            desc: null,
            location: null,
            date_of_birth: new Date(),
            avatar: null,
            header_photo: null,
            created_at: new Date(),
            modified_at: null
        },
    ]
};
