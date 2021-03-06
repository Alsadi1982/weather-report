import React from "react";

class TodayWeather extends React.Component {
  render() {

    const img1 = `https://openweathermap.org/img/w/${this.props.state.icon[0]}.png`;
    const img2 = `https://openweathermap.org/img/w/${this.props.state.icon[1]}.png`;
    const img3 = `https://openweathermap.org/img/w/${this.props.state.icon[2]}.png`;
    const img4 = `https://openweathermap.org/img/w/${this.props.state.icon[3]}.png`;
    const img5 = `https://openweathermap.org/img/w/${this.props.state.icon[4]}.png`;

    console.log("from TodayWeather:");
    console.log(`period  : ${this.props.state.period}`);
    console.log(`cityInForm : ${this.props.state.cityInForm}`);
    console.log(`city : ${this.props.state.city}`);
    return (
      <div align="center">
        {this.props.state.city && this.props.state.period === 1 && (
          <div>
            <h1>{this.props.state.city}</h1>
            <img src={img1} alt="icon"/>
            <h2>{this.props.state.daydate[0]}</h2>
            <p>Температура: {parseInt(this.props.state.temp[0])} C</p>
            <p>Давление: {parseInt(this.props.state.pressure[0]*0.75)} мм.рт.ст</p>
            <p>Влажность: {this.props.state.humidity[0]}%</p>
          </div>
        )}
        {this.props.state.city && this.props.state.period === 2 && (
          <div>
            <h1>{this.props.state.city}</h1>
            <img src={img2} alt="icon"/>
            <h2>{this.props.state.daydate[1]}</h2>
            <p>Температура: {parseInt(this.props.state.temp[1])} C</p>
            <p>Давление: {parseInt(this.props.state.pressure[1]*0.75)} мм.рт.ст</p>
            <p>Влажность: {this.props.state.humidity[1]}%</p>
          </div>
        )}
        {this.props.state.city && this.props.state.period === 5 && (
          <div>
            <h1>{this.props.state.city}</h1>
            <table>
              <tr>
                <th>
                  <img src={img1} alt="icon"/>
                  <h2>{this.props.state.daydate[0]}</h2>
                  <p>Температура: {parseInt(this.props.state.temp[0])} C</p>
                  <p>Давление: {parseInt(this.props.state.pressure[0]*0.75)} мм.рт.ст</p>
                  <p>Влажность: {this.props.state.humidity[0]}%</p>
                </th>
                <th>
                  <img src={img2} alt="icon"/>
                  <h2>{this.props.state.daydate[1]}</h2>
                  <p>Температура: {parseInt(this.props.state.temp[1])} C</p>
                  <p>Давление: {parseInt(this.props.state.pressure[1]*0.75)} мм.рт.ст</p>
                  <p>Влажность: {this.props.state.humidity[1]}%</p>
                </th>
                <th>
                  <img src={img3} alt="icon"/>
                  <h2>{this.props.state.daydate[2]}</h2>
                  <p>Температура: {parseInt(this.props.state.temp[2])} C</p>
                  <p>Давление: {parseInt(this.props.state.pressure[2]*0.75)} мм.рт.ст</p>
                  <p>Влажность: {this.props.state.humidity[2]}%</p>
                </th>
                <th>
                  <img src={img4} alt="icon"/>
                  <h2>{this.props.state.daydate[3]}</h2>
                  <p>Температура: {parseInt(this.props.state.temp[3])} C</p>
                  <p>Давление: {parseInt(this.props.state.pressure[3]*0.75)} мм.рт.ст</p>
                  <p>Влажность: {this.props.state.humidity[3]}%</p>
                </th>
                <th>
                  <img src={img5} alt="icon"/>
                  <h2>{this.props.state.daydate[4]}</h2>
                  <p>Температура: {parseInt(this.props.state.temp[4])} C</p>
                  <p>Давление: {parseInt(this.props.state.pressure[4]*0.75)} мм.рт.ст</p>
                  <p>Влажность: {this.props.state.humidity[4]}%</p>
                </th>
              </tr>
            </table>
          </div>
        )}
        <p><i>{this.props.state.error}</i></p>
      </div>
    );
  }
}

export default TodayWeather;
