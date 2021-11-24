import React from "react";
import Fade from "react-reveal/Fade";

import Button from "elements/Button";

export default function Activities({ data }) {
  if (data.length === 0) return null;
  return (
    <Fade>
      <section className="container">
        <h4 className="mb-3 font-weight-medium">Teasure To Choice</h4>
        <div className="container-grid">
          {data.map((activity, index) => {
            return (
              <div className="item column-3 row-1" key={`activity-${index}`}>
                <Fade bottom delay={300 * index}>
                  <div className="card">
                    {activity.isPopular && (
                      <div className="tag">
                        Popular{" "}
                        <span className="font-weight-light">Choice</span>
                      </div>
                    )}
                    <figure className="img-wrapper" style={{ height: 180 }}>
                      <img
                        src={
                          activity.imageUrl
                            ? `${process.env.REACT_APP_HOST}${activity.imageUrl}`
                            : ""
                        }
                        alt={activity.name}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        className="stretched-link d-block text-gray-800"
                        href={`/soon`}
                      >
                        <h5 className="h4">{activity.name}</h5>
                      </Button>
                      <span className="text-gray-500">{activity.type}</span>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </section>
    </Fade>
  );
}
