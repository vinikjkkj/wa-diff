__d(
  "useWAWebInfoButtonUtil",
  ["WAWebModalManager", "WDSButton.react", "WDSIconIcInfo.react", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useCallback;
    function c(e) {
      var t = u(
        function () {
          o("WAWebModalManager").ModalManager.open(s.jsx(e, {}));
        },
        [e],
      );
      return s.jsx(r("WDSButton.react"), {
        Icon: r("WDSIconIcInfo.react"),
        onPress: t,
        size: "small",
        variant: "borderless",
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
