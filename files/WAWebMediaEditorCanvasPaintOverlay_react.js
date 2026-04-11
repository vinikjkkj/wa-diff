__d(
  "WAWebMediaEditorCanvasPaintOverlay.react",
  ["ReactKonva", "lodash", "react", "useWAWebMediaEditorCanvasDraw"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useImperativeHandle,
      d = u.useRef;
    function m(e) {
      var t,
        n = e.data,
        a = e.height,
        i = e.onDrawEnd,
        l = e.pathStyle,
        u = e.ref,
        m = e.width,
        p = d(),
        _ = d();
      c(u, function () {
        return {
          toggleCursor: function (t) {
            var e = _.current;
            e && (t ? e.show() : e.hide());
          },
        };
      });
      var f = r("useWAWebMediaEditorCanvasDraw")({
          onDrawEnd: i,
          data: n,
          pathStyle: l,
          stage: (t = p.current) == null ? void 0 : t.getStage(),
        }),
        g = f.cursorPosition,
        h = f.handlers,
        y = f.points,
        C = r("lodash").flatMap(y, function (e) {
          return [e.getX(), e.getY()];
        });
      return s.jsxs(
        o("ReactKonva").Layer,
        babelHelpers.extends({ ref: p }, h, {
          width: m,
          height: a,
          children: [
            s.jsx(o("ReactKonva").Rect, {
              width: m,
              height: a,
              fill: "rgba(0, 0, 0, 0)",
            }),
            g &&
              s.jsx(o("ReactKonva").Circle, {
                ref: _,
                x: g.getX(),
                y: g.getY(),
                radius: l.thickness / 2,
                fill: l.color.toRgbaString(),
              }),
            s.jsx(o("ReactKonva").Line, {
              points: C,
              lineCap: "round",
              lineJoin: "round",
              stroke: l.color.toRgbaString(),
              strokeWidth: l.thickness,
            }),
          ],
        }),
        "paintCursor",
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
