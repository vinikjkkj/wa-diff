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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(15),
        n = e.onTryIt,
        a = m(f),
        i = a[0],
        l = a[1],
        c,
        _;
      (t[0] !== i
        ? ((c = function () {
            if (!i) {
              var e = new (o("WAWebBannerEventWamEvent").BannerEventWamEvent)({
                bannerOperation: o("WAWebWamEnumBannerOperations")
                  .BANNER_OPERATIONS.SHOWN,
                bannerType: o("WAWebWamEnumBannerTypes").BANNER_TYPES
                  .PAYMENTS_HOME_PUX_BANNER,
              });
              e.commit();
            }
          }),
          (_ = [i]),
          (t[0] = i),
          (t[1] = c),
          (t[2] = _))
        : ((c = t[1]), (_ = t[2])),
        d(c, _));
      var g;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = function () {
            (l(!0),
              r("WAWebUserPrefsStore").set(
                o("WAWebUserPrefsKeys").PaymentsBannerUserPrefs
                  .TryItPixKeyPromoDismissed,
                !0,
              ));
          }),
          (t[3] = g))
        : (g = t[3]);
      var h = g;
      if (i) return null;
      var y, C;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = u.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: p.closeButton,
            children: u.jsx(r("WDSButton.react"), {
              Icon: r("WDSIconIcClose.react"),
              onPress: h,
              variant: "borderless",
              size: "medium",
              "aria-label": s._(/*BTDS*/ "Dismiss").toString(),
            }),
          })),
          (C = u.jsx(
            o("WAWebWdsIllSmbPixKeyChatIcon.react").WdsIllSmbPixKeyChatIcon,
            { iconXstyle: p.icon },
          )),
          (t[4] = y),
          (t[5] = C))
        : ((y = t[4]), (C = t[5]));
      var b, v;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = u.jsx(r("WDSText.react"), {
            type: "Headline2",
            colorName: "contentDefault",
            xstyle: [p.text, p.title],
            children: s._(/*BTDS*/ "Quickly send your Pix key in chat"),
          })),
          (v = { className: "xv6tirj" }),
          (t[6] = b),
          (t[7] = v))
        : ((b = t[6]), (v = t[7]));
      var S;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = u.jsx(
            "div",
            babelHelpers.extends({}, v, {
              children: u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                xstyle: p.text,
                children: s._(
                  /*BTDS*/ 'Tap \u00a0+\u00a0 then select the Pix icon or type "\/pix" in the text input field of a chat.',
                ),
              }),
            }),
          )),
          (t[8] = S))
        : (S = t[8]);
      var R;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = s._(/*BTDS*/ "Try it")), (t[9] = R))
        : (R = t[9]);
      var L;
      t[10] !== n
        ? ((L = u.jsx(r("WDSButton.react"), {
            label: R,
            onPress: function () {
              var e = new (o("WAWebBannerEventWamEvent").BannerEventWamEvent)({
                bannerOperation: o("WAWebWamEnumBannerOperations")
                  .BANNER_OPERATIONS.CLICK,
                bannerType: o("WAWebWamEnumBannerTypes").BANNER_TYPES
                  .PAYMENTS_HOME_PUX_BANNER,
              });
              (e.commit(), n());
            },
            variant: "filled",
            size: "medium",
            widthMode: "flexible",
          })),
          (t[10] = n),
          (t[11] = L))
        : (L = t[11]);
      var E;
      return (
        t[12] !== L || t[13] !== y
          ? ((E = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              xstyle: p.container,
              children: [y, C, b, S, L],
            })),
            (t[12] = L),
            (t[13] = y),
            (t[14] = E))
          : (E = t[14]),
        E
      );
    }
    function f() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").PaymentsBannerUserPrefs
          .TryItPixKeyPromoDismissed,
      );
      return e === !0;
    }
    l.default = _;
  },
  226,
);
