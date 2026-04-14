__d(
  "WAWebMediaEditorCanvasPaint",
  ["ReactKonva", "fit-curve", "react"],
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
        r = t.getHeight(),
        a = t.getPaths(),
        i = d(
          function () {
            var e = document.createElement("canvas");
            return ((e.width = Math.max(n, 1)), (e.height = Math.max(r, 1)), e);
          },
          [n, r],
        ),
        l = m();
      return (
        c(
          function () {
            var e,
              t = i.getContext("2d");
            (t.clearRect(0, 0, i.width, i.height),
              a.forEach(function (e) {
                return _(i, e);
              }),
              (e = l.current) == null ||
                (e = e.getLayer()) == null ||
                e.batchDraw());
          },
          [a, i],
        ),
        s.jsx(o("ReactKonva").Image, {
          ref: l,
          width: t.getWidth(),
          height: t.getHeight(),
          image: i,
          listening: !1,
        })
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e, t) {
      var n = t.getPoints();
      if (n.length) {
        var o = e.getContext("2d"),
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
