__d(
  "useWAWebInfoButtonUtil",
  [
    "WAWebModalManager",
    "WDSButton.react",
    "WDSIconIcInfo.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useCallback;
    function c(e) {
      var t = o("react-compiler-runtime").c(4),
        n;
      t[0] !== e
        ? ((n = function () {
            o("WAWebModalManager").ModalManager.open(s.jsx(e, {}));
          }),
          (t[0] = e),
          (t[1] = n))
        : (n = t[1]);
      var a = n,
        i;
      return (
        t[2] !== a
          ? ((i = s.jsx(r("WDSButton.react"), {
              Icon: r("WDSIconIcInfo.react"),
              onPress: a,
              size: "small",
              variant: "borderless",
            })),
            (t[2] = a),
            (t[3] = i))
          : (i = t[3]),
        i
      );
    }
    l.default = c;
  },
  98,
);
