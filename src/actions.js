import axios from 'axios'

export const ROOMS = 'ROOMS'

export function getRooms () {
  return async function (dispatch) {
    try {
      // const response = await fetch(
      //   'http://localhost:4000/room'
      // )
      // const json = await response.json()
      // const { data } = json
      // console.log(data)

      const response = await axios
        .get('http://localhost:4000/room')

      const { data } = response

      // this.props.dispatch(rooms(data))
      const action = rooms(data)
      dispatch(action)
    } catch (error) {
      throw error
    }
  }
}

export function rooms (rooms) {
  return {
    type: ROOMS,
    payload: rooms
  }
}