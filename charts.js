export function createSimplePieChart(a, b) {
  // Data for the pie chart
  const data = [a, b];

  // Size of the pie chart
  const width = 200;
  const height = 200;

  // Radius of the pie chart
  const radius = Math.min(width, height) / 2;

  // Colors for the pie chart
  const colors = ['#4caf50', '#2196f3'];

  // Create SVG container
  const svg = d3.select('#audit-chart')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', `translate(${width / 2},${height / 2})`);

  // Create pie chart layout
  const pie = d3.pie();

  // Define arc for each slice
  const arc = d3.arc()
    .innerRadius(0)
    .outerRadius(radius);

  // Create slices
  const slices = svg.selectAll('slice')
    .data(pie(data))
    .enter()
    .append('g');

  // Append paths to the slices
  slices.append('path')
    .attr('d', arc)
    .attr('fill', (d, i) => colors[i]);

  // Append labels to the slices
  slices.append('text')
    .attr('transform', (d) => `translate(${arc.centroid(d)})`)
    .attr('dy', '0.35em')
    .attr('text-anchor', 'middle')
    .text((d, i) => {
      return i === 0 ? 'Done' : 'Received';
    });
}

export function createSimpleBarChart(a, b, c) {
  // Data for the bar chart
  const data = [a, b, c];
  const labels = ['Go Piscine', 'JS Piscine', 'Div 1'];

  // Size of the bar chart
  const width = 300;
  const height = 200;
  const barWidth = 80;
  const padding = 20;

  // Create a linear scale for y-axis
  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data) * 1.2])
    .range([height, 0]);

  // Create SVG container
  const svg = d3.select('#xp-bar-chart')
    .append('svg')
    .attr('width', width)
    .attr('height', height + padding);

  // Create bars
  svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => i * (barWidth + padding))
    .attr('y', d => yScale(d))
    .attr('width', barWidth)
    .attr('height', d => height - yScale(d))
    .attr('fill', '#2196f3');

  // Create labels
  svg.selectAll('text')
    .data(labels)
    .enter()
    .append('text')
    .attr('x', (d, i) => i * (barWidth + padding) + barWidth / 2)
    .attr('y', height + padding)
    .attr('text-anchor', 'middle')
    .text(d => d);
}


