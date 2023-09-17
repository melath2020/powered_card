import React from "react";
import search from "../assets/icon-supervisor.svg";
import bulb from "../assets/icon-karma.svg";
import calc from "../assets/icon-calculator.svg";
import team from "../assets/icon-team-builder.svg";
const Cards = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div class="card-section shadow lgtbrdr-blue">
            <div class="card-body">
              <h5 class="card-title">Supervisor</h5>
              <p class="card-txt pt-2">
                Mentors Activity to Identify Project <br />
                Roadmap
              </p>

              <div className="text-end">
                <img src={search} alt="" srcset="" className="img-size" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 minus-m">
          <div class="card-section shadow brdr-red">
            <div class="card-body">
              <h5 class="card-title">Team Builder</h5>
              <p class="card-txt pt-2">
                Scans our talent network to create the
                <br />
                optimal team for the project
              </p>

              <div className="text-end">
                <img src={team} alt="" srcset="" className="img-size" />
              </div>
            </div>
          </div>
          <div class="card-section shadow mt-3 brdr-karma">
            <div class="card-body">
              <h5 class="card-title">Karma</h5>
              <p class="card-txt pt-2">
                Regulerly ealuates our talent to ensure
                <br />
                quality
              </p>

              <div className="text-end">
                <img src={bulb} alt="" srcset="" className="img-size" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div class="card-section shadow brdr-calc">
            <div class="card-body">
              <h5 class="card-title">Calculator</h5>
              <p class="card-txt pt-2">
                Users Data From past projects to provide <br />
                better delivery estimates
              </p>

              <div className="text-end">
                <img src={calc} alt="" srcset="" className="img-size" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
