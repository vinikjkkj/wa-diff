__d(
  "WebBloksViewTransformExtensionHandler",
  ["WebBloksViewTransformsExtensionWrapper", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        hasLayoutWrapper: function () {
          return !0;
        },
        wrap: function (t, n) {
          return s.jsx(r("WebBloksViewTransformsExtensionWrapper"), {
            node: t,
            children: n,
          });
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
