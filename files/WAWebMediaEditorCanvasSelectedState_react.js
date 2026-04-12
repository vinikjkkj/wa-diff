__d(
  "WAWebMediaEditorCanvasSelectedState.react",
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
      c = new (o("WAWebMediaEditorUtilsColor").Color)(82, 248, 24, 0.1),
      d = new (o("WAWebMediaEditorUtilsColor").Color)(0, 0, 0, 0),
      m = 2;
    function p(e) {
      var t,
        n,
        r,
        a,
        i = e.borderRadius,
        l = e.frame,
        p = e.layer,
        _ =
          p instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
          (p.isLine() || p.isArrow()),
        f = Math.min(p.getWidth(), p.getHeight()),
        g =
          p instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
          !p.isBlur()
            ? f / 50 + p.getStrokeWidth()
            : 0;
      g = _ ? g + 20 : g;
      var h =
          (_
            ? (t = l == null ? void 0 : l.getX()) != null
              ? t
              : p.getX()
            : 0) - g,
        y =
          (_
            ? (n = l == null ? void 0 : l.getY()) != null
              ? n
              : p.getY()
            : 0) - g;
      return s.jsx(o("ReactKonva").Rect, {
        name: "selectedState",
        x: h,
        y: y,
        width:
          ((r = l == null ? void 0 : l.getWidth()) != null ? r : p.getWidth()) +
          g * 2,
        height:
          ((a = l == null ? void 0 : l.getHeight()) != null
            ? a
            : p.getHeight()) +
          g * 2,
        fill: (p instanceof o("WAWebMediaEditorLayersShape").ShapeLayer
          ? d
          : c
        ).toRgbaString(),
        stroke: u.toRgbaString(),
        strokeWidth: m,
        cornerRadius: i,
        strokeScaleEnabled: !1,
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
