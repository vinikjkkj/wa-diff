__d(
  "WAWebBizBroadcastAudienceSectionButtonContextMenu.react",
  [
    "WAWebBizBroadcastsCreationStrings",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WDSIconIcAdd.react",
    "WDSIconIcGroup.react",
    "WDSIconIcUpload.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect;
    function m(e) {
      var t = e.entryPoint,
        n = e.onExistingAudiences,
        a = e.onImportAudience,
        i = e.onNewAudience,
        l = e.showExistingAudienceRow,
        u = e.surface;
      d(
        function () {
          o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.createBroadcastAudienceMenuViewed(
            l,
            t,
          );
        },
        [l, t],
      );
      var m = c(
          function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.createBroadcastAudienceMenuExistingAudiencesClicked(
              t,
            ),
              n == null || n());
          },
          [t, n],
        ),
        p = c(
          function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.createAudienceButtonClicked(
              t,
              u,
            ),
              i == null || i());
          },
          [t, u, i],
        ),
        _ = c(
          function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.importAudienceButtonClicked(
              t,
              u,
            ),
              a == null || a());
          },
          [t, u, a],
        );
      return s.jsxs(r("WDSMenu.react"), {
        children: [
          l &&
            s.jsx(r("WDSMenuItem.react"), {
              Icon: r("WDSIconIcGroup.react"),
              title: o(
                "WAWebBizBroadcastsCreationStrings",
              ).getExistingAudiencesLabel(),
              onPress: m,
              testid: void 0,
            }),
          s.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcAdd.react"),
            title: o(
              "WAWebBizBroadcastsCreationStrings",
            ).getCreateAudienceLabel(),
            onPress: p,
            testid: void 0,
          }),
          s.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcUpload.react"),
            title: o(
              "WAWebBizBroadcastsCreationStrings",
            ).getImportAudienceLabel(),
            onPress: _,
            testid: void 0,
          }),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
