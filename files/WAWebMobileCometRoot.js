__d(
  "WAWebMobileCometRoot",
  [
    "CometPlaceholder.react",
    "buildWAWebCometRoot",
    "deferredLoadComponent",
    "react",
    "requireDeferredForDisplay",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("deferredLoadComponent")(
        r("requireDeferredForDisplay")(
          "WAWebMobileLandingInitializer.react",
        ).__setRef("WAWebMobileCometRoot"),
      );
    function c() {
      return s.jsx("div", {
        id: "app",
        children: s.jsx(r("CometPlaceholder.react"), {
          fallback: s.jsx("div", {}),
          name: i.id,
          children: s.jsx(u, {}),
        }),
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      r("buildWAWebCometRoot")(c, e);
    }
    l.init = d;
  },
  98,
);
