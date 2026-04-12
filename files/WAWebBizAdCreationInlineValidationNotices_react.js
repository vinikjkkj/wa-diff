__d(
  "WAWebBizAdCreationInlineValidationNotices.react",
  [
    "WAWebBizInlineValidationNotice.react",
    "WAWebFlex.react",
    "react",
    "useWAWebBizAdCreationInlineValidationNotices",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = { container: { rowGap: "x1qvou4u", $$css: !0 } };
    function c(e) {
      return e === "ERROR" || e === "BLOCKING_TIP" ? "error" : "warning";
    }
    function d(e) {
      var t = e.specElement,
        n = r("useWAWebBizAdCreationInlineValidationNotices")(t);
      return n.length === 0
        ? null
        : s.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: u.container,
            children: n.map(function (e, t) {
              return s.jsx(
                r("WAWebBizInlineValidationNotice.react"),
                { message: e.title, type: c(e.severity) },
                t,
              );
            }),
          });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
