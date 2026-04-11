__d(
  "CometComposedTextV2UnsupportedURType.react",
  [
    "CometComposedTextV2RendererWithStableKeys.react",
    "FBLogger",
    "cometComposedTextV2NodeBuilders",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      return (
        r("FBLogger")("comet_ur_parser").mustfix(
          "[CometURParser] Unsupported UR type: " + e,
        ),
        o("cometComposedTextV2NodeBuilders").buildCustomNode("unsupportedType")
      );
    }
    function c(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.typename,
        a;
      t[0] !== n
        ? ((a = o("cometComposedTextV2NodeBuilders")
            .buildRootNode()
            .append(u(n))),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      return (
        t[2] !== i
          ? ((l = s.jsx(r("CometComposedTextV2RendererWithStableKeys.react"), {
              root: i,
            })),
            (t[2] = i),
            (t[3] = l))
          : (l = t[3]),
        l
      );
    }
    ((l.buildUnsupportedURTypeNode = u),
      (l.CometComposedTextV2UnsupportedURType = c));
  },
  98,
);
