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
