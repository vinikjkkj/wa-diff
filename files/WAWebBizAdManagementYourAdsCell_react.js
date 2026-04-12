__d(
  "WAWebBizAdManagementYourAdsCell.react",
  [
    "fbt",
    "WAWebBizAdManagementDateUtils",
    "WAWebBizAdManagementLogger",
    "WAWebBizAdManagementThumbnail.react",
    "WAWebFlex.react",
    "WAWebL10nGetRenderedLocale",
    "WDSText.react",
    "react",
    "useWAWebNativeAdsFlowIDContext",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useRef,
      p = {
        rowContainer: { width: "xh8yej3", $$css: !0 },
        textContainer: { minWidth: "xeuugli", $$css: !0 },
      };
    function _(e) {
      var t = e.boostId,
        n = m(!1),
        a = r("useWAWebNativeAdsFlowIDContext")();
      return (
        d(
          function () {
            if (!n.current) {
              var e;
              ((n.current = !0),
                (e = o("WAWebBizAdManagementLogger")).logManageAdsScreenAction(
                  e.LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE,
                  e.LWI_SCREEN_ACTION.LWI_ACTION_ADS_LISTING_VIEW,
                  e.LWI_ADS_IDENTITY_TYPE.PAGE,
                  a.manageAdsFlowID,
                  t,
                ));
            }
          },
          [t, a.manageAdsFlowID],
        ),
        null
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.boostId,
        n = e.boostingStatus,
        a = e.durationInDays,
        i = e.startTime,
        l = e.thumbnailUrl,
        c = o("WAWebL10nGetRenderedLocale")
          .WAWebL10nGetRenderedLocale()
          .replace("_", "-"),
        d =
          i != null
            ? new Intl.DateTimeFormat(c, {
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                hour12: !0,
              })
                .format(i * 1e3)
                .replace(" AM", "am")
                .replace(" PM", "pm")
            : null,
        m = o("WAWebBizAdManagementDateUtils").getAdEndDateText({
          boostingStatus: n,
          durationInDays: a,
          locale: c,
          startTime: i,
        });
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        gap: 12,
        xstyle: p.rowContainer,
        children: [
          u.jsx(_, { boostId: t }),
          u.jsx(r("WAWebBizAdManagementThumbnail.react"), {
            thumbnailUrl: l,
            boostingStatus: n,
          }),
          d != null &&
            u.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: p.textContainer,
              children: [
                u.jsx("div", {
                  className: "x193iq5w",
                  children: u.jsx(r("WDSText.react"), {
                    type: "Body1",
                    colorName: "contentDefault",
                    maxLines: 1,
                    children: s._(/*BTDS*/ "Created {date}", [
                      s._param("date", d),
                    ]),
                  }),
                }),
                m != null &&
                  u.jsx("div", {
                    className: "x193iq5w",
                    children: u.jsx(r("WDSText.react"), {
                      type: "Body2",
                      colorName: "contentDeemphasized",
                      maxLines: 1,
                      children: m,
                    }),
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
