import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Text } from '../components/atoms'
import { Body } from '../components/layout'
import { getHouses } from '../store/houses.slice'

function Data() {
  const dispatch = useDispatch()
  const houses = useSelector((state) => state.houses.houses)
  const {allIds, byId} = houses
  const reqStatus = useSelector((state) => state.houses.reqStatus)

  useEffect(() => {
    dispatch(getHouses())
  }, [dispatch])

  return (
    <Body>
      {reqStatus === 'loading' && <Text>Loading ...</Text>}
      {reqStatus === 'failed' && <Text>Error!</Text>}
      {reqStatus === 'success' &&
        allIds.map((id) => <Text>{byId[id].title}</Text>)}
    </Body>
    /* minut 43 de video */
  )
}

export default Data
