__d(
  "WAWebVoipMicOffIndicator.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WDSIconIcMicOffFilled.react",
    "WDSTooltip.react",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(13),
        n = e.size,
        a = n === void 0 ? "medium" : n,
        i = d[a],
        l = r("useWAWebVoipWindowPopoutTooltipProps")(),
        m = l.tooltipAnchorRef,
        p = l.tooltipOwnerDocument,
        _;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = { className: "x10l6tqk x1u8a7rm x4brfc7 xugynej" }), (t[0] = _))
        : (_ = t[0]);
      var f;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "Muted")), (t[1] = f))
        : (f = t[1]);
      var g = c[a],
        h;
      t[2] !== g ? ((h = [c.badge, g]), (t[2] = g), (t[3] = h)) : (h = t[3]);
      var y;
      t[4] !== i
        ? ((y = u.jsx(r("WDSIconIcMicOffFilled.react"), {
            height: i,
            width: i,
          })),
          (t[4] = i),
          (t[5] = y))
        : (y = t[5]);
      var C;
      t[6] !== h || t[7] !== y
        ? ((C = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            role: "status",
            "aria-label": "Microphone is muted",
            xstyle: h,
            children: y,
          })),
          (t[6] = h),
          (t[7] = y),
          (t[8] = C))
        : (C = t[8]);
      var b;
      return (
        t[9] !== C || t[10] !== m || t[11] !== p
          ? ((b = u.jsx(
              "div",
              babelHelpers.extends({}, _, {
                children: u.jsx(r("WDSTooltip.react"), {
                  label: f,
                  ownerAnchorRef: m,
                  ownerDocument: p,
                  children: C,
                }),
              }),
            )),
            (t[9] = C),
            (t[10] = m),
            (t[11] = p),
            (t[12] = b))
          : (b = t[12]),
        b
      );
    }
    l.default = m;
  },
  226,
);
