__d(
  "WAWebBizPixKeyPromo.react",
  [
    "fbt",
    "WAWebBannerEventWamEvent",
    "WAWebFlex.react",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "WAWebWamEnumBannerOperations",
    "WAWebWamEnumBannerTypes",
    "WAWebWdsIllSmbPixKeyChatIcon.react",
    "WDSButton.react",
    "WDSIconIcClose.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState,
      p = {
        closeButton: {
          alignSelf: "xqcrz7y",
          insetInlineEnd: "x67dgr1",
          left: null,
          right: null,
          position: "x10l6tqk",
          top: "xugynej",
          $$css: !0,
        },
        container: {
          paddingTop: "x1p57kb1",
          paddingBottom: "xvpt6g3",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          position: "x1n2onr6",
          $$css: !0,
        },
        icon: {
          marginBottom: "xdqhqc9",
          marginInlineStart: "xlese2p",
          $$css: !0,
        },
        text: { textAlign: "x2b8uid", $$css: !0 },
        title: { marginBottom: "x1ua1l7f", $$css: !0 },
      };
    function _(e) {
      var t = e.onTryIt,
        n = m(function () {
          var e = r("WAWebUserPrefsStore").get(
            o("WAWebUserPrefsKeys").PaymentsBannerUserPrefs
              .TryItPixKeyPromoDismissed,
          );
          return e === !0;
        }),
        a = n[0],
        i = n[1];
      d(
        function () {
          if (!a) {
            var e = new (o("WAWebBannerEventWamEvent").BannerEventWamEvent)({
              bannerOperation: o("WAWebWamEnumBannerOperations")
                .BANNER_OPERATIONS.SHOWN,
              bannerType: o("WAWebWamEnumBannerTypes").BANNER_TYPES
                .PAYMENTS_HOME_PUX_BANNER,
            });
            e.commit();
          }
        },
        [a],
      );
      var l = function () {
        (i(!0),
          r("WAWebUserPrefsStore").set(
            o("WAWebUserPrefsKeys").PaymentsBannerUserPrefs
              .TryItPixKeyPromoDismissed,
            !0,
          ));
      };
      return a
        ? null
        : u.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            xstyle: p.container,
            children: [
              u.jsx(o("WAWebFlex.react").FlexRow, {
                xstyle: p.closeButton,
                children: u.jsx(r("WDSButton.react"), {
                  Icon: r("WDSIconIcClose.react"),
                  onPress: l,
                  variant: "borderless",
                  size: "medium",
                  "aria-label": s._(/*BTDS*/ "Dismiss").toString(),
                }),
              }),
              u.jsx(
                o("WAWebWdsIllSmbPixKeyChatIcon.react").WdsIllSmbPixKeyChatIcon,
                { iconXstyle: p.icon },
              ),
              u.jsx(r("WDSText.react"), {
                type: "Headline2",
                colorName: "contentDefault",
                xstyle: [p.text, p.title],
                children: s._(/*BTDS*/ "Quickly send your Pix key in chat"),
              }),
              u.jsx("div", {
                className: "xv6tirj",
                children: u.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  xstyle: p.text,
                  children: s._(
                    /*BTDS*/ 'Tap \u00a0+\u00a0 then select the Pix icon or type "\/pix" in the text input field of a chat.',
                  ),
                }),
              }),
              u.jsx(r("WDSButton.react"), {
                label: s._(/*BTDS*/ "Try it"),
                onPress: function () {
                  var e = new (o(
                    "WAWebBannerEventWamEvent",
                  ).BannerEventWamEvent)({
                    bannerOperation: o("WAWebWamEnumBannerOperations")
                      .BANNER_OPERATIONS.CLICK,
                    bannerType: o("WAWebWamEnumBannerTypes").BANNER_TYPES
                      .PAYMENTS_HOME_PUX_BANNER,
                  });
                  (e.commit(), t());
                },
                variant: "filled",
                size: "medium",
                widthMode: "flexible",
              }),
            ],
          });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
