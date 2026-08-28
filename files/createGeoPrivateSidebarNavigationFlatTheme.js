__d(
  "createGeoPrivateSidebarNavigationFlatTheme",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return babelHelpers.extends({}, e, {
        selectStaticBackgroundColor: function (n) {
          return [
            e.selectStaticBackgroundColor(n),
            n.surface === "content" && s.staticContent,
          ];
        },
      });
    }
    var s = { staticContent: { backgroundColor: "x1v911su", $$css: !0 } };
    l.default = e;
  },
  98,
);
