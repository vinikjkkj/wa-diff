__d(
  "OutsideExceptionKeyCommandListener.react",
  [
    "BaseKeyCommandListener.react",
    "CometLayerKeyCommandWrapper.react",
    "react",
    "react-compiler-runtime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.children;
      r("vulture")("y3ysjuiQ1BLh0BlF9A2EFBmw5h4=");
      var a;
      return (
        t[0] !== n
          ? ((a = s.jsx(r("BaseKeyCommandListener.react"), {
              observersEnabled: !1,
              children: s.jsx(r("CometLayerKeyCommandWrapper.react"), {
                debugName: "outside exception layer",
                children: n,
              }),
            })),
            (t[0] = n),
            (t[1] = a))
          : (a = t[1]),
        a
      );
    }
    l.default = u;
  },
  98,
);
