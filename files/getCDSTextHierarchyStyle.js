__d(
  "getCDSTextHierarchyStyle",
  ["memoizeWithArgs"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("memoizeWithArgs")(
      function (e, t) {
        switch (e) {
          case 1:
            return {
              bodyType: "body",
              headlineType: "headline1",
              metaType: "metaEmphasized",
            };
          case 2:
            return {
              bodyType: "body",
              headlineType: "headline2",
              metaType: "metaEmphasized",
            };
          case 3:
            return {
              bodyType: "body",
              headlineType: t === !0 ? "primaryLabel" : "headline3",
              metaType: "meta",
            };
          default:
          case 4:
            return {
              bodyType: "meta",
              headlineType: t === !0 ? "secondaryLabel" : "headline3",
              metaType: "meta",
            };
          case "entityHeader1":
          case "entityHeader2":
            return {
              bodyType: "body",
              headlineType: "headline1",
              metaType: "headline3",
            };
        }
      },
      function (e, t) {
        return String(e) + (t === !0 ? "" : "e");
      },
    );
    l.default = e;
  },
  98,
);
