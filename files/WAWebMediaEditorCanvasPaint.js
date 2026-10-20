__d(
  "WAWebMediaEditorCanvasPaint",
  ["ReactKonva", "fit-curve", "nullthrows", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useMemo,
      m = u.useRef;
    function p(e) {
      var t = o("react-compiler-runtime").c(21),
        n = e.layer,
        a;
      t[0] !== n ? ((a = n.getWidth()), (t[0] = n), (t[1] = a)) : (a = t[1]);
      var i = a,
        l;
      t[2] !== n ? ((l = n.getHeight()), (t[2] = n), (t[3] = l)) : (l = t[3]);
      var u = l,
        d;
      t[4] !== n ? ((d = n.getPaths()), (t[4] = n), (t[5] = d)) : (d = t[5]);
      var p = d,
        f;
      t[6] !== u || t[7] !== i
        ? ((f = document.createElement("canvas")),
          (f.width = Math.max(i, 1)),
          (f.height = Math.max(u, 1)),
          (t[6] = u),
          (t[7] = i),
          (t[8] = f))
        : (f = t[8]);
      var g = f,
        h = m(),
        y,
        C;
      (t[9] !== g || t[10] !== p
        ? ((y = function () {
            var e,
              t = r("nullthrows")(g.getContext("2d"));
            (t.clearRect(0, 0, g.width, g.height),
              p.forEach(function (e) {
                return _(g, e);
              }),
              (e = h.current) == null ||
                (e = e.getLayer()) == null ||
                e.batchDraw());
          }),
          (C = [p, g]),
          (t[9] = g),
          (t[10] = p),
          (t[11] = y),
          (t[12] = C))
        : ((y = t[11]), (C = t[12])),
        c(y, C));
      var b;
      t[13] !== n
        ? ((b = n.getWidth()), (t[13] = n), (t[14] = b))
        : (b = t[14]);
      var v;
      t[15] !== n
        ? ((v = n.getHeight()), (t[15] = n), (t[16] = v))
        : (v = t[16]);
      var S;
      return (
        t[17] !== g || t[18] !== b || t[19] !== v
          ? ((S = s.jsx(o("ReactKonva").Image, {
              ref: h,
              width: b,
              height: v,
              image: g,
              listening: !1,
            })),
            (t[17] = g),
            (t[18] = b),
            (t[19] = v),
            (t[20] = S))
          : (S = t[20]),
        S
      );
    }
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
