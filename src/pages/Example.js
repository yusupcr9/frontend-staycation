import React, { Component } from "react";

import InputNumber from "elements/Form/InputNumber";
import Breadcrumb from "elements/Breadcrumb";

// export default class ExampleInputNumber extends Component {
//   state = {
//     value: "1",
//   };

//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   render() {
//     return (
//       <div className="container">
//         <div
//           className="row align-items-center justify-content-center"
//           style={{ height: "100vh" }}
//         >
//           <div className="col-auto">
//             <InputNumber
//               max={30}
//               onChange={this.handleChange}
//               suffix=" night"
//               isSuffixPlural
//               name="value"
//               value={this.state.value}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
export default class ExampleBreadcrumb extends Component {
  render() {
    const breadcrumbList = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            <Breadcrumb data={breadcrumbList} />
          </div>
        </div>
      </div>
    );
  }
}
