import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { content } from './styled'

import Category from './Category'
import Subcategory from './Subcategory'
import Document from './Document'

import pepegastatic from 'features/layout/Sidebar/components/PepegaStatic'

/**
 * main content of the application
 */
const Container = () => {

  return (
    <content>
      <Switch>
        <Route path='/legal' exact component={pepegastatic}/>
        <Route path="/:category" exact component={Category}/>
        <Route path="/:category/:subcategory" exact component={Subcategory}/>
        <Route path="/:category/:subcategory/:document" exact component={Document}/>
      </Switch>
    </content>
  )
}

export default Container