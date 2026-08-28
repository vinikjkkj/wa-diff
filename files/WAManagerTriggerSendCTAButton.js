__d(
  "WAManagerTriggerSendCTAButton",
  ["GeoButton.react", "react", "react-compiler-runtime", "useJSON"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useCallback,
      c = "maiba-wa-manager-trigger-send-cta";
    function d(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.attributesJson,
        a = r("useJSON")(n),
        i;
      t[0] !== a.action
        ? ((i = function () {
            a.action == null ||
              a.action === "" ||
              window.dispatchEvent(
                new CustomEvent(c, { detail: { action: a.action } }),
              );
          }),
          (t[0] = a.action),
          (t[1] = i))
        : (i = t[1]);
      var l = i;
      if (a.action == null || a.action === "") return null;
      var u = a.label != null && a.label !== "" ? a.label : null;
      if (u == null) return null;
      var d;
      return (
        t[2] !== l || t[3] !== u
          ? ((d = s.jsx(r("GeoButton.react"), {
              label: u,
              onClick: l,
              variant: "default",
            })),
            (t[2] = l),
            (t[3] = u),
            (t[4] = d))
          : (d = t[4]),
        d
      );
    }
    l.default = d;
  },
  98,
);
