__d(
  "WAWebP2PPillsContactCardUIRequireBundle",
  ["JSResourceForInteraction", "WAWebLazyLoadedRetriable"],
  function (t, n, r, o, a, i, l) {
    var e = r("JSResourceForInteraction")(
        "WAWebP2PPillsContactCardUI",
      ).__setRef("WAWebP2PPillsContactCardUIRequireBundle"),
      s = r("WAWebLazyLoadedRetriable")(function () {
        return e.load();
      }, "WAWebP2PPillsContactCardUI");
    function u() {
      return e.getModuleIfRequireable();
    }
    ((l.requireBundle = s), (l.getLoadedBundle = u));
  },
  98,
);
