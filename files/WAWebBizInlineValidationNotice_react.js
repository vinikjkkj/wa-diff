__d(
  "WAWebBizInlineValidationNotice.react",
  [
    "WAWebFlex.react",
    "WDSIconIcError.react",
    "WDSIconIcWarning.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = { container: { columnGap: "x1s70e7g", $$css: !0 } },
      c = {
        error: { color: "x30a034", $$css: !0 },
        warning: { color: "x1f81s73", $$css: !0 },
      },
      d = 16,
      m = {
        error: r("WDSIconIcError.react"),
        warning: r("WDSIconIcWarning.react"),
      },
      p = { error: "secondaryNegative", warning: "secondaryWarning" };
    function _(e) {
      var t = e.message,
        n = e.type,
        a = n === void 0 ? "error" : n,
        i = m[a],
        l = p[a];
      return s.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        xstyle: u.container,
        children: [
          s.jsx(i, { height: d, width: d, xstyle: c[a] }),
          s.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: l,
            children: t,
          }),
        ],
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
