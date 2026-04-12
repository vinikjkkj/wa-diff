__d(
  "WAWebBizAdManagementNullView.react",
  [
    "fbt",
    "WAWebBizAdManagementLogger",
    "WAWebFlex.react",
    "WAWebWdsIllAdsWaIcon.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useRef,
      p = {
        container: {
          justifyContent: "xl56j7k",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
        textContainer: {
          paddingTop: "x1p57kb1",
          textAlign: "x2b8uid",
          maxWidth: "xyq1l15",
          $$css: !0,
        },
        description: { paddingTop: "x16ovd2e", $$css: !0 },
      };
    function _(e) {
      var t = e.manageAdsFlowID,
        n = e.pageId,
        r = m(!1);
      return (
        d(
          function () {
            if (!r.current) {
              var e;
              ((r.current = !0),
                (e = o("WAWebBizAdManagementLogger")).logManageAdsScreenAction(
                  e.LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE,
                  e.LWI_SCREEN_ACTION.LWI_ACTION_TOTAL_METRICS_VIEW,
                  e.LWI_ADS_IDENTITY_TYPE.PAGE,
                  t,
                  null,
                  JSON.stringify({ pageId: n, null_state: !0 }),
                ));
            }
          },
          [t, n],
        ),
        null
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.manageAdsFlowID,
        n = e.pageId;
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        xstyle: p.container,
        children: [
          u.jsx(_, { manageAdsFlowID: t, pageId: n }),
          u.jsx(o("WAWebWdsIllAdsWaIcon.react").WdsIllAdsWaIcon, {}),
          u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: p.textContainer,
            children: [
              u.jsx(r("WDSText.react"), {
                type: "Headline1",
                colorName: "contentDefault",
                children: s._(
                  /*BTDS*/ "Bring in new customers with Facebook & Instagram ads",
                ),
              }),
              u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                xstyle: p.description,
                children: s._(
                  /*BTDS*/ "Easily create ads that show on Facebook & Instagram and lead people to WhatsApp chats with you.",
                ),
              }),
            ],
          }),
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
