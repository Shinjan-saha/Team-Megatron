import React from 'react';
import './Home.css'; // Import the CSS file for styling
import homeImage from './asset/student.png'; // Import the image

const Home = () => (
  <div>
    <h1>Student Details</h1>
    <div className="glass-box">
      <p><b>Details About Student</b></p>
      <img src={homeImage} alt="Home" className="glass-image" />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Section</th>
            <th>Father's Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>9</td>
            <td>A</td>
            <td>David Doe</td>
          </tr>
          {/* <tr>
            <td>Jane Smith</td>
            <td>10</td>
            <td>B</td>
            <td>Michael Smith</td>
          </tr> */}
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  </div>
);

export default Home;
