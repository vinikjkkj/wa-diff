__d(
  "CometLayerKeyCommandWrapper.react",
  [
    "CometLayerKeyCommandWidget",
    "SetActiveLayerIfAttached.react",
    "react",
    "react-compiler-runtime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.children,
        a = e.debugName;
      r("vulture")("mZ45GT846Je7MBaVaAI9vER3_Nk=");
      var i;
      t[0] !== a
        ? ((i = s.jsx(r("SetActiveLayerIfAttached.react"), { debugName: a })),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l;
      return (
        t[2] !== n || t[3] !== a || t[4] !== i
          ? ((l = s.jsxs(r("CometLayerKeyCommandWidget").Wrapper, {
              debugName: a,
              children: [i, n],
            })),
            (t[2] = n),
            (t[3] = a),
            (t[4] = i),
            (t[5] = l))
          : (l = t[5]),
        l
      );
    }
    l.default = u;
  },
  98,
);
