__d(
  "WDSTooltip.react",
  [
    "BaseTooltip.react",
    "CometPlaceholder.react",
    "WDSShortcut.react",
    "WDSText.react",
    "WDSTooltipShortcutResolver",
    "deferredLoadComponent",
    "react",
    "requireDeferredForDisplay",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["delayTooltipMs", "label", "ownerAnchorRef", "shortcut"],
      s,
      u = s || (s = o("react")),
      c = r("deferredLoadComponent")(
        r("requireDeferredForDisplay")("WDSTooltipConfig.react").__setRef(
          "WDSTooltip.react",
        ),
      ),
      d = {
        textLineCap: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          display: "x104kibb",
          WebkitBoxOrient: "x1ua5tub",
          WebkitLineClamp: "xnajbk2",
          $$css: !0,
        },
      };
    function m(e) {
      return u.jsx(r("CometPlaceholder.react"), {
        name: "WDSTooltip",
        fallback: null,
        children: u.jsx(c, babelHelpers.extends({}, e)),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(t) {
      var n = t.delayTooltipMs,
        a = n === void 0 ? 400 : n,
        i = t.label,
        l = t.ownerAnchorRef,
        s = t.shortcut,
        c = babelHelpers.objectWithoutPropertiesLoose(t, e),
        p,
        _;
      return (
        s != null &&
          (typeof s == "object"
            ? (_ = s)
            : (_ = o("WDSTooltipShortcutResolver").getWDSTooltipShortcut(s))),
        _ != null
          ? (p = u.jsxs("div", {
              className:
                "xowaa7l xmzvs34 xf159sx x1iorvi4 xjkvuk6 x78zum5 xfex06f x6s0dn4",
              children: [
                u.jsx(r("WDSText.react"), {
                  type: "Body3",
                  colorName: "contentInverse",
                  xstyle: d.textLineCap,
                  children: i,
                }),
                u.jsx(
                  r("WDSShortcut.react"),
                  babelHelpers.extends({}, _, { inverse: !0 }),
                ),
              ],
            }))
          : (p = u.jsx("div", {
              className:
                "xowaa7l xmzvs34 xf159sx x1iorvi4 xjkvuk6 x78zum5 xfex06f x6s0dn4",
              children: u.jsx(r("WDSText.react"), {
                type: "Body3",
                colorName: "contentInverse",
                children: i,
              }),
            })),
        u.jsx(
          r("BaseTooltip.react"),
          babelHelpers.extends({}, c, {
            anchorRef: l,
            tooltip: p,
            tooltipImpl: m,
            delayTooltipMs: a,
            hideDelayMs: 0,
          }),
        )
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
