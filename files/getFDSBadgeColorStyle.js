__d(
  "getFDSBadgeColorStyle",
  ["FBLogger", "MetaConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      blue_1dot1: { backgroundColor: "x1spa7qu", $$css: !0 },
      blue_legacy: { backgroundColor: "xwnonoy", $$css: !0 },
      darkGray: { backgroundColor: "x167v862", $$css: !0 },
      gray: { backgroundColor: "x80cks", $$css: !0 },
      gray1Dot1: { backgroundColor: "xh074lr", $$css: !0 },
      green_1dot1: { backgroundColor: "x7amd0a", $$css: !0 },
      green_legacy: { backgroundColor: "xv9rvxn", $$css: !0 },
      lightBlue: { backgroundColor: "x56hhle", $$css: !0 },
      red: { backgroundColor: "xdi0jry", $$css: !0 },
      yellow: { backgroundColor: "x1ajtyu9", $$css: !0 },
    };
    function s(t) {
      switch (t) {
        case "blue":
          return r("MetaConfig")._("73") ? e.blue_1dot1 : e.blue_legacy;
        case "gray":
          return r("MetaConfig")._("73") ? e.gray1Dot1 : e.gray;
        case "darkGray":
          return e.darkGray;
        case "green":
          return r("MetaConfig")._("73") ? e.green_1dot1 : e.green_legacy;
        case "lightBlue":
          return e.lightBlue;
        case "red":
          return e.red;
        case "yellow":
          return e.yellow;
        default:
          throw r("FBLogger")("comet_ui").mustfixThrow(
            " Invalid color in getFDSBadgeColorStyle",
          );
      }
    }
    l.default = s;
  },
  98,
);
