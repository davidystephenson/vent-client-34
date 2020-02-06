import { ROOMS } from './actions'

const initialState = []

export default function (state = initialState, action) {
  console.log('state test:', state)
  console.log('reducer test')
  switch (action.type) {
    case ROOMS:
      return action.payload
    default:
      console.log('default test')
      return state
  }
}