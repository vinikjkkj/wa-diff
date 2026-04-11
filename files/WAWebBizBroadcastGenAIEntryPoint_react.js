__d(
  "WAWebBizBroadcastGenAIEntryPoint.react",
  [
    "fbt",
    "WAWebBizBroadcastGenAIEligibilityModel",
    "WAWebBizBroadcastGenAIGating",
    "WAWebNux",
    "WDSButton.react",
    "WDSIconWdsIcAi.react",
    "WDSTooltip.react",
    "react",
    "react-compiler-runtime",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useRef;
    function p(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.message,
        a = e.onPress,
        i = r("useWAWebNux")(
          o("WAWebNux").NUX.BUSINESS_BROADCAST_GENAI_TOOLTIP,
        ),
        l = i[0],
        c = i[1],
        p = m(!1),
        _;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ =
            o("WAWebBizBroadcastGenAIGating").isGenAITextEnabled() &&
            o("WAWebBizBroadcastGenAIEligibilityModel").isGenAIEligible()),
          (t[0] = _))
        : (_ = t[0]);
      var f = _,
        g =
          o("WAWebBizBroadcastGenAIGating").countWords(n) >
          o("WAWebBizBroadcastGenAIGating").getGenAIComposerMinWords(),
        h = f && l && g,
        y,
        C;
      if (
        (t[1] !== h || t[2] !== c
          ? ((y = function () {
              h && !p.current && ((p.current = !0), c());
            }),
            (C = [h, c]),
            (t[1] = h),
            (t[2] = c),
            (t[3] = y),
            (t[4] = C))
          : ((y = t[3]), (C = t[4])),
        d(y, C),
        !f)
      )
        return null;
      var b;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = s._(/*BTDS*/ "Get help using AI")), (t[5] = b))
        : (b = t[5]);
      var v;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = s._(/*BTDS*/ "Generate with AI")), (t[6] = v))
        : (v = t[6]);
      var S;
      return (
        t[7] !== a
          ? ((S = u.jsx(r("WDSTooltip.react"), {
              label: b,
              position: "below",
              children: u.jsx(r("WDSButton.react"), {
                variant: "borderless",
                size: "small",
                Icon: r("WDSIconWdsIcAi.react"),
                onPress: a,
                "aria-label": v,
              }),
            })),
            (t[7] = a),
            (t[8] = S))
          : (S = t[8]),
        S
      );
    }
    l.default = p;
  },
  226,
);
