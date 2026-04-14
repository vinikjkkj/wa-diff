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
    "useWAWebFocusOnMount",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = r("useWAWebFocusOnMount")(),
        t = o("WAWebABProps").getABPropConfigValue(
          "biz_ai_consumer_tos_update_web",
        ),
        n = function () {
          o("WAWebExternalLink.react").openExternalLink(
            o("WAWebFaqUrl").getBizBot1pLearnMoreUrl(),
          );
        };
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        cancelText: s._(/*BTDS*/ "Close"),
        okText: t ? s._(/*BTDS*/ "Learn more") : null,
        onCancel: o("WAWebModalManager").closeModalManager,
        onOK: t ? n : void 0,
        ref: e,
        children: u.jsx(o("WAWebFlex.react").FlexColumn, {
          align: "center",
          xstyle: [
            o("WAWebUISpacing").uiMargin.vertAuto,
            o("WAWebUISpacing").uiPadding.bottom16,
          ],
          children: u.jsx(r("WAWebBizBotLearnMoreContent.react"), {}),
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
