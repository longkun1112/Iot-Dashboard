import * as types from '../Types/UserType'

export const loadUsersAction = () => {
    return {
        type: types.LOAD_USERS
    }
}

export const UsersLoadedAction = Users => {
    return {
        type: types.USERS_LOADED,
        Users
    }
}

export const addUserAction = (data) => {
    return {
        type: types.ADD_USER,
        data
    }
}

export const UserAddedAction = (User) => {
    return {
        type: types.USER_ADDED,
        User
    }
}

export const editUserAction = (id, data) => {
    return {
        type: types.EDIT_USERS,
        payload: {id, data}
    }
}

export const UserEditedAction = (User) => {
    return {
        type: types.USERS_EDITED,
        payload: User
    }
}

export const deleteUserAction = (id) => {
    return {
        type: types.DELETE_USER,
        id
    }
}

export const UserDeletedAction = (id) => {
    return {
        type: types.USER_DELETED,
        id
    }
}