__d(
  "WAWebMediaEditorCanvasPaint",
  ["ReactKonva", "fit-curve", "react", "react-compiler-runtime"],
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
        r;
      t[0] !== n ? ((r = n.getWidth()), (t[0] = n), (t[1] = r)) : (r = t[1]);
      var a = r,
        i;
      t[2] !== n ? ((i = n.getHeight()), (t[2] = n), (t[3] = i)) : (i = t[3]);
      var l = i,
        u;
      t[4] !== n ? ((u = n.getPaths()), (t[4] = n), (t[5] = u)) : (u = t[5]);
      var d = u,
        p;
      t[6] !== l || t[7] !== a
        ? ((p = document.createElement("canvas")),
          (p.width = Math.max(a, 1)),
          (p.height = Math.max(l, 1)),
          (t[6] = l),
          (t[7] = a),
          (t[8] = p))
        : (p = t[8]);
      var f = p,
        g = m(),
        h,
        y;
      (t[9] !== f || t[10] !== d
        ? ((h = function () {
            var e,
              t = f.getContext("2d");
            (t.clearRect(0, 0, f.width, f.height),
              d.forEach(function (e) {
                return _(f, e);
              }),
              (e = g.current) == null ||
                (e = e.getLayer()) == null ||
                e.batchDraw());
          }),
          (y = [d, f]),
          (t[9] = f),
          (t[10] = d),
          (t[11] = h),
          (t[12] = y))
        : ((h = t[11]), (y = t[12])),
        c(h, y));
      var C;
      t[13] !== n
        ? ((C = n.getWidth()), (t[13] = n), (t[14] = C))
        : (C = t[14]);
      var b;
      t[15] !== n
        ? ((b = n.getHeight()), (t[15] = n), (t[16] = b))
        : (b = t[16]);
      var v;
      return (
        t[17] !== f || t[18] !== C || t[19] !== b
          ? ((v = s.jsx(o("ReactKonva").Image, {
              ref: g,
              width: C,
              height: b,
              image: f,
              listening: !1,
            })),
            (t[17] = f),
            (t[18] = C),
            (t[19] = b),
            (t[20] = v))
          : (v = t[20]),
        v
      );
    }
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
