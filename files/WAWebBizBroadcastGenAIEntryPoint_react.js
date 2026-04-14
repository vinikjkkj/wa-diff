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
      var t = e.message,
        n = e.onPress,
        a = r("useWAWebNux")(
          o("WAWebNux").NUX.BUSINESS_BROADCAST_GENAI_TOOLTIP,
        ),
        i = a[0],
        l = a[1],
        c = m(!1),
        p =
          o("WAWebBizBroadcastGenAIGating").isGenAITextEnabled() &&
          o("WAWebBizBroadcastGenAIEligibilityModel").isGenAIEligible(),
        _ =
          o("WAWebBizBroadcastGenAIGating").countWords(t) >
          o("WAWebBizBroadcastGenAIGating").getGenAIComposerMinWords(),
        f = p && i && _;
      return (
        d(
          function () {
            f && !c.current && ((c.current = !0), l());
          },
          [f, l],
        ),
        p
          ? u.jsx(r("WDSTooltip.react"), {
              label: s._(/*BTDS*/ "Get help using AI"),
              position: "below",
              children: u.jsx(r("WDSButton.react"), {
                variant: "borderless",
                size: "small",
                Icon: r("WDSIconWdsIcAi.react"),
                onPress: n,
                "aria-label": s._(/*BTDS*/ "Generate with AI"),
              }),
            })
          : null
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
