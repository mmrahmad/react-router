import React from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';
import { JSCourses, HTMLCourses, CSSCourses } from '../data/courses'

// Courses Componants
import CourseContainer from './courses/CourseContainer'


const Courses = ({ match }) => (
  <div className="main-content courses">
    <div className="course-header group">
    {console.log(match)}
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink to={`${match.url}/html`}>HTML</NavLink></li>
        <li><NavLink to={`${match.url}/css`}>CSS</NavLink></li>
        <li><NavLink to={`${match.url}/javascript`}>JavaScript</NavLink></li>
      </ul>
    </div>
    
    {/* Write routes here... */}
    <Route path={`${match.path}`} exact render={ () => <Redirect to={`${match.path}/html`} />} />
    <Route path={`${match.path}/html`} render={() => <CourseContainer data={HTMLCourses} />} />
    <Route path={`${match.path}/css`} render={() => <CourseContainer data={CSSCourses} />} />
    <Route path={`${match.path}/javascript`} render={() => <CourseContainer data={JSCourses} />} />
  </div>
);

export default Courses;