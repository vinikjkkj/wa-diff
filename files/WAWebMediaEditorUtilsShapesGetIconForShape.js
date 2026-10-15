__d(
  "WAWebMediaEditorUtilsShapesGetIconForShape",
  [
    "WAWebMediaEditorArrowIcon.react",
    "WAWebMediaEditorCircleIcon.react",
    "WAWebMediaEditorLineIcon.react",
    "WAWebMediaEditorSquareIcon.react",
    "WAWebMediaEditorUtilsShapes",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      switch (e) {
        case o("WAWebMediaEditorUtilsShapes").ShapeType.RECTANGLE:
          return s.jsx(
            o("WAWebMediaEditorSquareIcon.react").MediaEditorSquareIcon,
            {},
          );
        case o("WAWebMediaEditorUtilsShapes").ShapeType.CIRCLE:
          return s.jsx(
            o("WAWebMediaEditorCircleIcon.react").MediaEditorCircleIcon,
            {},
          );
        case o("WAWebMediaEditorUtilsShapes").ShapeType.LINE:
          return s.jsx(
            o("WAWebMediaEditorLineIcon.react").MediaEditorLineIcon,
            {},
          );
        case o("WAWebMediaEditorUtilsShapes").ShapeType.ARROW:
          return s.jsx(
            o("WAWebMediaEditorArrowIcon.react").MediaEditorArrowIcon,
            {},
          );
      }
    }
    ((u.displayName = u.name + " [from " + i.id + "]"),
      (l.getIconForShape = u));
  },
  98,
);
