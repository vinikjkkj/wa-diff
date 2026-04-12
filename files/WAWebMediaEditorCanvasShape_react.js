__d(
  "WAWebMediaEditorCanvasShape.react",
  ["ReactKonva", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useRef,
      m = u.useState,
      p = 0.9,
      _ = 10,
      f = 20,
      g = 4,
      h = 1;
    function y(e) {
      var t = e.canvasScale,
        n = e.layer,
        r = e.onPointsChange,
        a = e.selected,
        i = e.stageHeight,
        l = e.stageWidth,
        u = d(),
        y = m(n.getPoints()),
        C = y[0],
        b = y[1],
        v = d(n.getPoints()),
        S = n.getImage(),
        R = n.getPoints();
      (c(
        function () {
          var e;
          u == null ||
            (e = u.current) == null ||
            e.cache({ imageSmoothingEnabled: !1 });
        },
        [S],
      ),
        c(
          function () {
            v.current !== R && (b(R), r(R), (v.current = R));
          },
          [R, r],
        ));
      var L = n.getWidth(),
        E = n.getHeight(),
        k = n.getFillColor().toRgbaString(),
        I = n.getStrokeColor().toRgbaString(),
        T = n.getStrokeWidth(),
        D = {
          x: (L * (1 - p)) / 2,
          y: (E * (1 - p)) / 2,
          width: L,
          height: E,
          fill: k,
          stroke: I,
          strokeWidth: T,
          strokeScaleEnabled: !1,
          scaleX: p,
          scaleY: p,
        },
        x = function (n, r, o) {
          var e = o === !0 ? l / t : l,
            a = o === !0 ? i / t : i,
            s = Math.max(0, Math.min(n.x, e)),
            u = Math.max(0, Math.min(n.y, a));
          return { x: s, y: u };
        },
        $ = function (t, n) {
          var e = [].concat(C);
          ((e[t] = n.target.x()), (e[t + 1] = n.target.y()));
          var r = 2;
          if (t === 0 || t === 4) {
            var o = C[r],
              a = C[r + 1],
              i = C[4] - C[0],
              l = C[5] - C[1],
              s = (C[0] + C[4]) / 2,
              u = (C[1] + C[5]) / 2,
              c = o - s,
              d = a - u,
              m = Math.sqrt(i * i + l * l),
              p = e[4] - e[0],
              _ = e[5] - e[1],
              f = (e[0] + e[4]) / 2,
              g = (e[1] + e[5]) / 2,
              h = Math.sqrt(p * p + _ * _),
              y = h / m,
              v = c * y,
              S = d * y,
              R = { x: f + v, y: g + S },
              L = x(R, null, !0);
            ((e[r] = L.x), (e[r + 1] = L.y));
          } else t === 2 && ((e[r] = n.target.x()), (e[r + 1] = n.target.y()));
          b(e);
        },
        P = function () {
          r(C);
        },
        N = n.isArrow() || n.isLine(),
        M =
          a &&
          N &&
          s.jsx(o("ReactKonva").Circle, {
            x: C[0],
            y: C[1],
            radius: g / t,
            stroke: "black",
            strokeWidth: h / t,
            fill: "white",
            draggable: !0,
            dragBoundFunc: x,
            onDragMove: function (t) {
              return $(0, t);
            },
            onDragEnd: P,
          }),
        w =
          a &&
          N &&
          s.jsx(o("ReactKonva").Circle, {
            x: C[4],
            y: C[5],
            radius: g / t,
            stroke: "black",
            strokeWidth: h / t,
            fill: "white",
            draggable: !0,
            dragBoundFunc: x,
            onDragMove: function (t) {
              return $(4, t);
            },
            onDragEnd: P,
          }),
        A =
          a &&
          N &&
          s.jsx(o("ReactKonva").Circle, {
            x: C[2],
            y: C[3],
            radius: (g * 0.8) / t,
            stroke: "black",
            strokeWidth: h / t,
            fill: "white",
            draggable: !0,
            dragBoundFunc: x,
            onDragMove: function (t) {
              return $(2, t);
            },
            onDragEnd: P,
          });
      return s.jsxs(s.Fragment, {
        children: [
          n.isRectangle() &&
            s.jsx(o("ReactKonva").Rect, babelHelpers.extends({}, D)),
          n.isCircle() &&
            s.jsx(
              o("ReactKonva").Ellipse,
              babelHelpers.extends({ offset: { x: -L / 2, y: -E / 2 } }, D),
            ),
          n.isArrow() &&
            s.jsx(o("ReactKonva").Arrow, {
              points: C,
              stroke: I,
              strokeWidth: T,
              fill: I,
              strokeScaleEnabled: !1,
              hitStrokeWidth: f,
              pointerLength: _ / t,
              pointerWidth: _ / t,
              tension: 0.4,
            }),
          n.isLine() &&
            s.jsx(o("ReactKonva").Line, {
              points: C,
              stroke: I,
              strokeWidth: T,
              strokeScaleEnabled: !1,
              hitStrokeWidth: f,
              tension: 0.4,
            }),
          M,
          A,
          w,
        ],
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  98,
);
