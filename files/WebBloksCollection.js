__d(
  "WebBloksCollection",
  [
    "WebBloksCollectionGrid_EXPERIMENTAL",
    "WebBloksCollectionHelpers",
    "WebBloksCollectionMinificationKeys",
    "WebBloksCollectionV1",
    "WebBloksCollectionV2",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.node.get(
        o("WebBloksCollectionMinificationKeys").COLLECTION_LAYOUT_CONFIG_TYPE,
      );
      return t === "grid"
        ? s.jsx(
            r("WebBloksCollectionGrid_EXPERIMENTAL"),
            babelHelpers.extends({}, e),
          )
        : o("WebBloksCollectionHelpers").shouldUseWebBloksCollectionV2(e.node)
          ? s.jsx(r("WebBloksCollectionV2"), babelHelpers.extends({}, e))
          : s.jsx(r("WebBloksCollectionV1"), babelHelpers.extends({}, e));
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
