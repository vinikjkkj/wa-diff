__d(
  "WAWebMediaEditorCanvasHoveredState.react",
  [
    "ReactKonva",
    "WAWebMediaEditorLayersShape",
    "WAWebMediaEditorUtilsColor",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = new (o("WAWebMediaEditorUtilsColor").Color)(82, 248, 24, 1),
      c = 2;
    function d(e) {
      var t,
        n,
        r,
        a,
        i = e.borderRadius,
        l = e.frame,
        d = e.layer,
        m =
          d instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
          (d.isLine() || d.isArrow()),
        p = Math.min(d.getWidth(), d.getHeight()),
        _ =
          d instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
          !d.isBlur()
            ? p / 50 + d.getStrokeWidth()
            : 0;
      _ = m ? _ + 20 : _;
      var f =
          (m
            ? (t = l == null ? void 0 : l.getX()) != null
              ? t
              : d.getX()
            : 0) - _,
        g =
          (m
            ? (n = l == null ? void 0 : l.getY()) != null
              ? n
              : d.getY()
            : 0) - _;
      return s.jsx(o("ReactKonva").Rect, {
        name: "hoveredState",
        x: f,
        y: g,
        width:
          ((r = l == null ? void 0 : l.getWidth()) != null ? r : d.getWidth()) +
          _ * 2,
        height:
          ((a = l == null ? void 0 : l.getHeight()) != null
            ? a
            : d.getHeight()) +
          _ * 2,
        stroke: u.toRgbaString(),
        strokeWidth: c,
        cornerRadius: i,
        strokeScaleEnabled: !1,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
