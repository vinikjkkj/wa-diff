__d(
  "WebBloksCollection",
  [
    "WebBloksCollectionGrid_EXPERIMENTAL",
    "WebBloksCollectionHelpers",
    "WebBloksCollectionV1",
    "WebBloksCollectionV2",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.node.get("layout_config_type");
      if (n === "grid") {
        var a;
        return (
          t[0] !== e
            ? ((a = s.jsx(
                r("WebBloksCollectionGrid_EXPERIMENTAL"),
                babelHelpers.extends({}, e),
              )),
              (t[0] = e),
              (t[1] = a))
            : (a = t[1]),
          a
        );
      }
      if (
        o("WebBloksCollectionHelpers").shouldUseWebBloksCollectionV2(e.node)
      ) {
        var i;
        return (
          t[2] !== e
            ? ((i = s.jsx(
                r("WebBloksCollectionV2"),
                babelHelpers.extends({}, e),
              )),
              (t[2] = e),
              (t[3] = i))
            : (i = t[3]),
          i
        );
      }
      var l;
      return (
        t[4] !== e
          ? ((l = s.jsx(
              r("WebBloksCollectionV1"),
              babelHelpers.extends({}, e),
            )),
            (t[4] = e),
            (t[5] = l))
          : (l = t[5]),
        l
      );
    }
    l.default = u;
  },
  98,
);
