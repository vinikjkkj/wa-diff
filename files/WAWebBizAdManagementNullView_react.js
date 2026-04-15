__d(
  "WAWebBizAdManagementNullView.react",
  [
    "fbt",
    "WAWebBizAdManagementLogger",
    "WAWebFlex.react",
    "WAWebWdsIllAdsWaIcon.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(4),
        n = e.manageAdsFlowID,
        r = e.pageId,
        a = m(!1),
        i,
        l;
      return (
        t[0] !== n || t[1] !== r
          ? ((i = function () {
              if (!a.current) {
                var e;
                ((a.current = !0),
                  (e = o(
                    "WAWebBizAdManagementLogger",
                  )).logManageAdsScreenAction(
                    e.LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE,
                    e.LWI_SCREEN_ACTION.LWI_ACTION_TOTAL_METRICS_VIEW,
                    e.LWI_ADS_IDENTITY_TYPE.PAGE,
                    n,
                    null,
                    JSON.stringify({ pageId: r, null_state: !0 }),
                  ));
              }
            }),
            (l = [n, r]),
            (t[0] = n),
            (t[1] = r),
            (t[2] = i),
            (t[3] = l))
          : ((i = t[2]), (l = t[3])),
        d(i, l),
        null
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.manageAdsFlowID,
        a = e.pageId,
        i;
      t[0] !== n || t[1] !== a
        ? ((i = u.jsx(_, { manageAdsFlowID: n, pageId: a })),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i))
        : (i = t[2]);
      var l;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = u.jsx(o("WAWebWdsIllAdsWaIcon.react").WdsIllAdsWaIcon, {})),
          (t[3] = l))
        : (l = t[3]);
      var c;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = u.jsx(r("WDSText.react"), {
            type: "Headline1",
            colorName: "contentDefault",
            children: s._(
              /*BTDS*/ "Bring in new customers with Facebook & Instagram ads",
            ),
          })),
          (t[4] = c))
        : (c = t[4]);
      var d;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: p.textContainer,
            children: [
              c,
              u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                xstyle: p.description,
                children: s._(
                  /*BTDS*/ "Easily create ads that show on Facebook & Instagram and lead people to WhatsApp chats with you.",
                ),
              }),
            ],
          })),
          (t[5] = d))
        : (d = t[5]);
      var m;
      return (
        t[6] !== i
          ? ((m = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: p.container,
              children: [i, l, d],
            })),
            (t[6] = i),
            (t[7] = m))
          : (m = t[7]),
        m
      );
    }
    l.default = f;
  },
  226,
);
