__d(
  "WAWebBizBot1pLearnMore.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebBizBotLearnMoreContent.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "useWAWebFocusOnMount",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("react-compiler-runtime").c(6),
        t = r("useWAWebFocusOnMount")(),
        n;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = o("WAWebABProps").getABPropConfigValue(
            "biz_ai_consumer_tos_update_web",
          )),
          (e[0] = n))
        : (n = e[0]);
      var a = n,
        i = d,
        l,
        c;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "Close")),
          (c = a ? s._(/*BTDS*/ "Learn more") : null),
          (e[1] = l),
          (e[2] = c))
        : ((l = e[1]), (c = e[2]));
      var m;
      e[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = u.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            xstyle: [
              o("WAWebUISpacing").uiMargin.vertAuto,
              o("WAWebUISpacing").uiPadding.bottom16,
            ],
            children: u.jsx(r("WAWebBizBotLearnMoreContent.react"), {}),
          })),
          (e[3] = m))
        : (m = e[3]);
      var p;
      return (
        e[4] !== t
          ? ((p = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              cancelText: l,
              okText: c,
              onCancel: o("WAWebModalManager").closeModalManager,
              onOK: a ? i : void 0,
              ref: t,
              children: m,
            })),
            (e[4] = t),
            (e[5] = p))
          : (p = e[5]),
        p
      );
    }
    function d() {
      o("WAWebExternalLink.react").openExternalLink(
        o("WAWebFaqUrl").getBizBot1pLearnMoreUrl(),
      );
    }
    l.default = c;
  },
  226,
);
