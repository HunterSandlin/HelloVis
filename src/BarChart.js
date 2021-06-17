import React, {Component} from 'react';
import * as d3 from "d3";


/*

BarChart made as a first introduction to d3 following:

https://blog.logrocket.com/data-visualization-in-react-using-react-d3-c35835af16d0/


*/
class BarChart extends Component {

    componentDidMount() {
        this.drawChart();
    }

    drawChart() {
        const data = this.props.data;
        let h = 400;
        let w = 700;

        const svg = d3.select("body").append("svg")
            .attr("width", this.props.width)
            .attr("height", this.props.height);
             
        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => h - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d * 10)
            .attr("fill", "green");
        
        svg.selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .text((d) => d)
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => h - (10 * d) - 3);
    
    
        }
            
    render(){
        return <div id={"#" + this.props.id}></div>
    }
}
    
export default BarChart;