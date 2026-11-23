__d(
  "WAWebMediaEditorCanvasPaint",
  ["ReactKonva", "fit-curve", "nullthrows", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useMemo,
      m = u.useRef;
    function p(e) {
      var t = e.layer,
        n = t.getWidth(),
        a = t.getHeight(),
        i = t.getPaths(),
        l = d(
          function () {
            var e = document.createElement("canvas");
            return ((e.width = Math.max(n, 1)), (e.height = Math.max(a, 1)), e);
          },
          [n, a],
        ),
        u = m();
      return (
        c(
          function () {
            var e,
              t = r("nullthrows")(l.getContext("2d"));
            (t.clearRect(0, 0, l.width, l.height),
              i.forEach(function (e) {
                return _(l, e);
              }),
              (e = u.current) == null ||
                (e = e.getLayer()) == null ||
                e.batchDraw());
          },
          [i, l],
        ),
        s.jsx(o("ReactKonva").Image, {
          ref: u,
          width: t.getWidth(),
          height: t.getHeight(),
          image: l,
          listening: !1,
        })
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e, t) {
      var n = t.getPoints();
      if (n.length) {
        var o = r("nullthrows")(e.getContext("2d")),
          a = {
            color: t.getColor(),
            thickness: t.getThickness(),
            smoothing: !1,
          };
        if ((f(o, a), o.beginPath(), n.length > 2)) {
          var i = r("fit-curve")(
            n.map(function (e) {
              return [e.getX(), e.getY()];
            }),
            10,
          );
          (o.moveTo(i[0][0][0], i[0][0][1]),
            i.forEach(function (e) {
              o.bezierCurveTo(
                e[1][0],
                e[1][1],
                e[2][0],
                e[2][1],
                e[3][0],
                e[3][1],
              );
            }));
        } else
          (o.moveTo(n[0].getX(), n[0].getY()),
            o.lineTo(n[0].getX(), n[0].getY()));
        o.stroke();
      }
    }
    function f(e, t) {
      ((e.lineCap = "round"),
        (e.lineJoin = "round"),
        (e.lineWidth = t.thickness),
        (e.strokeStyle = t.color.toHex()));
    }
    l.default = p;
  },
  98,
);
