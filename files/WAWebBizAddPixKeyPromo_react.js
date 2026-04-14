__d(
  "WAWebBizAddPixKeyPromo.react",
  [
    "fbt",
    "WAWebBannerEventWamEvent",
    "WAWebBizAddPixKeyButton.react",
    "WAWebFlex.react",
    "WAWebWamEnumBannerOperations",
    "WAWebWamEnumBannerTypes",
    "WAWebWdsIllSmbGetPaidPixIcon.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect,
      d = {
        container: {
          paddingTop: "x1p57kb1",
          paddingBottom: "xvpt6g3",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
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
    function m() {
      return (
        c(function () {
          var e = new (o("WAWebBannerEventWamEvent").BannerEventWamEvent)({
            bannerOperation: o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS
              .SHOWN,
            bannerType: o("WAWebWamEnumBannerTypes").BANNER_TYPES
              .PAYMENTS_HOME_NUX_BANNER,
          });
          e.commit();
        }, []),
        u.jsxs(o("WAWebFlex.react").FlexColumn, {
          align: "center",
          xstyle: d.container,
          children: [
            u.jsx(
              o("WAWebWdsIllSmbGetPaidPixIcon.react").WdsIllSmbGetPaidPixIcon,
              { iconXstyle: d.icon },
            ),
            u.jsx(r("WDSText.react"), {
              type: "Headline2",
              colorName: "contentDefault",
              xstyle: [d.text, d.title],
              children: s._(/*BTDS*/ "Get paid with Pix"),
            }),
            u.jsx("div", {
              className: "xv6tirj",
              children: u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                xstyle: d.text,
                children: s._(
                  /*BTDS*/ "Make it easy for customers to pay you by quickly sending your Pix key in chat.",
                ),
              }),
            }),
            u.jsx(r("WAWebBizAddPixKeyButton.react"), {}),
          ],
        })
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
