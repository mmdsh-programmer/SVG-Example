function openSVG() {
    document.write(`<svg height="202" width ="100%">
    <line x1="43" y1="202" x2="43" y2="0" style="stroke:rgb(255,0,0);stroke-width:3" />
    <text x="17" y="201">0%</text>
    <text x="1" y="10">100%</text>`);
  }
  
  function closeSVG() {
      document.write('</svg>');
    }
  
  function circle(r,cx,cy) {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let fill = "rgb(" + x + "," + y + "," + z + ")";
    document.write(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="black" stroke-width="1" />`);
  }
  
  function chart(points) {
    openSVG();
    for (let index = 0; index < points.length; index++) {
      const element = points[index];
      var cx;
      const cy = 201 - element;
      (index == 0) ? cx = element + 48 : cx = points[index-1] + cx + element + 10;
      circle(element,cx,cy);
    }
    closeSVG();
  }