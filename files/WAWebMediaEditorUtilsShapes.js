__d(
  "WAWebMediaEditorUtilsShapes",
  [
    "$InternalEnum",
    "WAWebMediaEditorArrowIcon.react",
    "WAWebMediaEditorCircleIcon.react",
    "WAWebMediaEditorLineIcon.react",
    "WAWebMediaEditorSquareIcon.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = n("$InternalEnum").Mirrored(["RECTANGLE", "CIRCLE", "LINE", "ARROW"]);
    function c(e) {
      switch (e) {
        case u.RECTANGLE:
          return s.jsx(
            o("WAWebMediaEditorSquareIcon.react").MediaEditorSquareIcon,
            {},
          );
        case u.CIRCLE:
          return s.jsx(
            o("WAWebMediaEditorCircleIcon.react").MediaEditorCircleIcon,
            {},
          );
        case u.LINE:
          return s.jsx(
            o("WAWebMediaEditorLineIcon.react").MediaEditorLineIcon,
            {},
          );
        case u.ARROW:
          return s.jsx(
            o("WAWebMediaEditorArrowIcon.react").MediaEditorArrowIcon,
            {},
          );
      }
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.ShapeType = u),
      (l.getIconForShape = c));
  },
  98,
);
