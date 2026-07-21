__d(
  "formatRepresentationForDisplayInVideoDebugOverlay",
  ["formatForDisplayInVideoDebugOverlay", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      return s.jsxs("span", {
        className: "xuxw1ft",
        children: [
          r("formatForDisplayInVideoDebugOverlay")(
            e == null ? void 0 : e.representationId,
          ),
          "\xA0(",
          r("formatForDisplayInVideoDebugOverlay")(
            e == null ? void 0 : e.label,
          ),
          ")\xA0\u2014\xA0",
          s.jsx("br", {}),
          r("formatForDisplayInVideoDebugOverlay")(
            e == null ? void 0 : e.mimeCodecs,
          ),
        ],
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
