import { useEffect, useState } from 'react';

import { format } from "date-fns";

import style from './style.module.scss';

const Home = () => {
  const [exoplanets, setExpolanets] = useState([]);

  useEffect(() => {
    // Note: would ideally use TypeScript and convert this the response to a type
    fetch('https://binary-vision.s3.eu-west-2.amazonaws.com/discoveries.json')
      .then((response) => response.json())
      .then((data) => setExpolanets(data));
  }, []);

  const sortByDate = (a, b) => {
    const dateA = new Date(a.releasedate);
    const dateB = new Date(b.releasedate);
    return dateB - dateA;
  }

  return (
    <div className={`container-sm ${style.main}`}>
      <div>
        <h1>Cosmos</h1>
        <p>
          Once you have an innovation culture, even those who are not scientists
          or engineers - poets, actors, journalists - they, as communities,
          embrace the meaning of what it is to be scientifically literate. They
          embrace the concept of an innovation culture. They vote in ways that
          promote it. They don't fight science and they don't fight technology.
        </p>
        <p>
          Private enterprise in the history of civilization has never led large,
          expensive, dangerous projects with unknown risks. That has never
          happened because when you combine all these factors, you cannot create
          a capital market valuation of that activity.
        </p>
        <p>
          In science, if you don't do it, somebody else will. Whereas in art, if
          Beethoven didn't compose the 'Ninth Symphony,' no one else before or
          after is going to compose the 'Ninth Symphony' that he composed; no
          one else is going to paint 'Starry Night' by van Gogh.
        </p>
      </div>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Release date (latest first)</th>
            <th>Planet radius (earth units)</th>
            <th>Discovery method</th>
          </tr>
        </thead>
        <tbody>
          {exoplanets.sort(sortByDate).map((exoplanet) => (
            <tr>
              <th>{exoplanet.pl_name}</th>
              <td>{format(new Date(exoplanet.releasedate), "dd/LL/yyyy")}</td>
              <td>{exoplanet.pl_rade}</td>
              <td>{exoplanet.discoverymethod}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
