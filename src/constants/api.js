export const apiURL = {
    default: 'https://my-chat-robertphi.herokuapp.com',
    authentication: {
        login: "/authentication/local/signin/",
        register: "/authentication/local/signup/",
        logout: "/authentication/signout/",
        refresh_token: "/authentication/refresh/",
        forgot_password: "/authentication/forgot-password/",
        reset_password: "/authentication/reset-password/",
    },
    user: {
        get_my: '/user/my',
        search: '/user/search/',
        update: '/user/update'
    },
    chat: {
        conversation: {
            all: '/conversation/all/',
            add_user: '/conversation/add-user'
        },
        chat_message: {
            all: '/message/all/',
            new: '/message/send/'
        }
    },
    file: {
        avatar: {
            send: '/file/upload/avatar',
            show: '/file/avatar/'
        },
        message: {
            send: '/file/upload/message',
            show: '/file/message/'
        }
    }
};