__d(
  "WAWebMediaEditorEnumsThickness",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = n("$InternalEnum").Mirrored(["SMALL", "MEDIUM", "LARGE", "XLARGE"]);
    function l() {
      return Array.from(e.members());
    }
    function s(t) {
      switch (t) {
        case e.SMALL:
          return 8;
        case e.MEDIUM:
          return 12;
        case e.LARGE:
          return 18;
        case e.XLARGE:
          return 24;
      }
    }
    ((i.ThicknessType = e),
      (i.getAllThicknesses = l),
      (i.getThicknessValue = s));
  },
  66,
);
