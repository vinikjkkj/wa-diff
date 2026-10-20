__d(
  "WAWebMediaEditorUtilsShapesGetIconForShape",
  [
    "WAWebMediaEditorUtilsShapes",
    "WDSIconIcCircle.react",
    "WDSIconIcCropSquare.react",
    "WDSIconIcNorthEast.react",
    "WDSIconIcPenSize2.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = 48,
      c = 56,
      d = 48,
      m = 56;
    function p(e) {
      switch (e) {
        case o("WAWebMediaEditorUtilsShapes").ShapeType.RECTANGLE:
          return s.jsx(r("WDSIconIcCropSquare.react"), {
            width: u,
            height: u,
            testid: "media-editor-square",
          });
        case o("WAWebMediaEditorUtilsShapes").ShapeType.CIRCLE:
          return s.jsx(r("WDSIconIcCircle.react"), {
            width: d,
            height: d,
            testid: "media-editor-circle",
          });
        case o("WAWebMediaEditorUtilsShapes").ShapeType.LINE:
          return s.jsx(r("WDSIconIcPenSize2.react"), {
            width: m,
            height: m,
            testid: "media-editor-line",
          });
        case o("WAWebMediaEditorUtilsShapes").ShapeType.ARROW:
          return s.jsx(r("WDSIconIcNorthEast.react"), {
            width: c,
            height: c,
            testid: "media-editor-arrow",
          });
      }
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.getIconForShape = p));
  },
  98,
);
