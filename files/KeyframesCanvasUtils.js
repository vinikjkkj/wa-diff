__d(
  "KeyframesCanvasUtils",
  ["invariant", "KeyframesSchema"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("KeyframesSchema").StrokeLineCap,
      s = n("KeyframesSchema").CommandType,
      u = ["miter", "round", "bevel"];
    function c(e) {
      return (
        "rgba(" +
        Math.floor(e.red) +
        "," +
        Math.floor(e.green) +
        "," +
        Math.floor(e.blue) +
        "," +
        Math.floor(e.alpha) / 255 +
        ")"
      );
    }
    function d(t) {
      switch (t) {
        case e.Square:
          return "square";
        case e.Round:
          return "round";
        case e.Butt:
        default:
          return "butt";
      }
    }
    function m(e, t) {
      e.beginPath();
      for (var n of t)
        switch (n.type) {
          case s.MoveTo:
            e.moveTo(n.point.x, n.point.y);
            break;
          case s.CubicTo:
            ((n.control1 && n.control2) || l(0, 2935),
              e.bezierCurveTo(
                n.control1.x,
                n.control1.y,
                n.control2.x,
                n.control2.y,
                n.point.x,
                n.point.y,
              ));
            break;
          case s.QuadTo:
            (n.control1 || l(0, 2936),
              e.quadraticCurveTo(
                n.control1.x,
                n.control1.y,
                n.point.x,
                n.point.y,
              ));
            break;
          case s.LineTo:
            e.lineTo(n.point.x, n.point.y);
            break;
          default: {
            var r = new Error("Unrecognized path command " + n.type);
            throw (r.stack, r);
          }
        }
    }
    a.exports = {
      drawPath: m,
      getCanvasStyle: c,
      getCanvasLineCap: d,
      LINE_JOINS: u,
    };
  },
  null,
);
