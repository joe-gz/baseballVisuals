"use strict";

(function(){
  angular
  .module("leagues")

  //camel cased directive name
  //in your HTML, this will be named as bars-chart
  .directive('barsChart', function ($parse) {
    //explicitly creating a directive definition variable
    //this may look verbose but is good for clarification purposes
    //in real life you'd want to simply return the object {...}
    var directiveDefinitionObject = {
      //We restrict its use to an element
      //as usually  <bars-chart> is semantically
      //more understandable
      restrict: 'E',
      //this is important,
      //we don't want to overwrite our directive declaration
      //in the HTML mark-up
      replace: false,
      //our data source would be an array
      //passed thru chart-data attribute
      scope: {data: '=chartData', filter: '=filterRound'},
      link: function (scope, element, attrs) {
        console.log(scope.data);

        scope.masterData = scope.data;

        scope.$watch('filter', function(newValue, oldValue) {

          $('.chart').remove();
          scope.data = [];

          if (newValue.round === 'Show All') {
            console.log('Make everything show!');
            scope.data = scope.masterData
          } else {
            for (var i = 0; i < scope.masterData.length; i++){
              if (Number(scope.masterData[i].round) === newValue.round) {
                console.log('SHOW JUST '+ scope.masterData[i].round);
                scope.data.push(scope.masterData[i])
              }
            }
          }

          scope.loadChart();
          console.log('NEW VALUE: ' + newValue.round);
        }, true);

        //in D3, any selection[0] contains the group
        //selection[0][0] is the DOM node
        //but we won't need that this time
        // var chart = d3.select(element[0]);
        //to our original directive markup bars-chart
        //we add a div with out chart stling and bind each
        //data entry to the chart


        scope.loadChart = function(){

          // chart.append("div").attr("class", "chart")
          // .selectAll('div')
          // .data(scope.data).enter().append("div")
          // .attr("class", "bar")
          // .transition().ease("elastic")
          // .style("width", function(d) { return d.cost + "%"; })
          // .text(function(d) { return d.playerName +" $"+ d.cost; });
          //a little of magic: setting it's width based
          //on the data value (d)
          //and text all with a smooth transition

          // *******************************************************
          var margin = {
            top: 10,
            right: 60,
            bottom: 70,
            left: 70
          },w = 600,
          h = 350;

          var xScale = d3.scale.ordinal()
          .domain(d3.range(scope.data.length))
          .rangeRoundBands([0, w], 0.05);
          // ternary operator to determine if global or cost has a larger scale
          var yScale = d3.scale.linear()
          .domain([0, d3.max(scope.data, function (d) {
            return (d.cost);
          })])
          .range([h, 0]);
          var xAxis = d3.svg.axis()
          .scale(xScale)
          .tickFormat(function (d) {
            return scope.data[d].playerName;
          })
          var yAxis = d3.svg.axis()
          .scale(yScale)
          .orient("left")
          .ticks(10);

          //SVG element
          var svg = d3.select(element[0])
          .append("svg")
          .attr("class", "chart")
          .attr("width", w + margin.left + margin.right)
          .attr("height", h + margin.top + margin.bottom)
          .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

          // Graph Bars
          var sets = svg.selectAll(".set")
          .data(scope.data)
          .enter()
          .append("g")
          .attr("class", "set")
          .attr("transform", function (d, i) {
            return "translate(" + xScale(i) + ",0)";
          });

          sets.append("rect")
          .attr("class", "cost")
          .transition().ease("elastic")
          .attr("width", xScale.rangeBand()/2)
          .attr("y", function (d) {
            return yScale(d.cost);
          })
          .attr("x", xScale.rangeBand()/6)
          .attr("height", function (d) {
            return h - yScale(d.cost);
          })
          ;

          // xAxis
          svg.append("g") // Add the X Axis
          .attr("class", "x-axis")
          .attr("transform", "translate(0," + (h) + ")")
          .call(xAxis)
          .selectAll("text")
          .attr("dx", "4em")
          .attr("dy", "1em")
          .style("text-anchor", "end")
          .attr("transform", function (d) {
            return "rotate(0)";
          });
          // yAxis
          svg.append("g")
          .attr("class", "y axis")
          .attr("transform", "translate(0 ,0)")
          .call(yAxis);

          // *******************************************************

        };

        scope.loadChart();
      }
    };
    return directiveDefinitionObject;
  });

}());
