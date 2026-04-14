__d(
  "WAWebVoipMicOffIndicator.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WDSIconIcMicOffFilled.react",
    "WDSTooltip.react",
    "react",
    "useWAWebVoipWindowPopoutTooltipProps",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        wrapper: {
          position: "x10l6tqk",
          zIndex: "x1u8a7rm",
          insetInlineStart: "x4brfc7",
          left: null,
          right: null,
          top: "xugynej",
          $$css: !0,
        },
        badge: {
          backgroundColor: "x1rk1j4g",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          color: "x17t9dm2",
          $$css: !0,
        },
        small: { width: "xvy4d1p", height: "xxk0z11", $$css: !0 },
        medium: { width: "x1td3qas", height: "x10w6t97", $$css: !0 },
        large: { width: "x100vrsf", height: "x1vqgdyp", $$css: !0 },
      },
      d = { small: 14, medium: 20, large: 24 };
    function m(e) {
      var t = e.size,
        n = t === void 0 ? "medium" : t,
        a = d[n],
        i = r("useWAWebVoipWindowPopoutTooltipProps")(),
        l = i.tooltipAnchorRef,
        m = i.tooltipOwnerDocument;
      return u.jsx("div", {
        className: "x10l6tqk x1u8a7rm x4brfc7 xugynej",
        children: u.jsx(r("WDSTooltip.react"), {
          label: s._(/*BTDS*/ "Muted"),
          ownerAnchorRef: l,
          ownerDocument: m,
          children: u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            role: "status",
            "aria-label": "Microphone is muted",
            xstyle: [c.badge, c[n]],
            children: u.jsx(r("WDSIconIcMicOffFilled.react"), {
              height: a,
              width: a,
            }),
          }),
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
