__d(
  "WAWebProfileDrawerLoadableV2",
  [
    "CometPlaceholder.react",
    "JSResourceForInteraction",
    "WAWebLoadingDrawer.react",
    "lazyLoadComponent",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("JSResourceForInteraction")("WAWebProfileDrawer.react").__setRef(
        "WAWebProfileDrawerLoadableV2",
      ),
      c = r("lazyLoadComponent")(u);
    function d(e) {
      return s.jsx(r("CometPlaceholder.react"), {
        fallback: s.jsx(r("WAWebLoadingDrawer.react"), { error: !1 }),
        name: "ProfileDrawerFlowLoadableV2",
        children: s.jsx(c, babelHelpers.extends({}, e)),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
