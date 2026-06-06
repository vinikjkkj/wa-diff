__d(
  "WAWebBizBroadcastCampaignInitFromStorage",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebBizBroadcastCampaignAPI",
    "WAWebBizBroadcastInsightsStorageUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    async function p() {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[bb:init-from-storage] restoreBizBroadcastCampaigns start",
          ])),
      );
      try {
        var t = await o(
          "WAWebBizBroadcastCampaignAPI",
        ).getAllRawCampaignsForCurrentDevice();
        (o("WAWebBackendApi").frontendFireAndForget(
          "loadedBizBroadcastCampaigns",
          { rows: t },
        ),
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[bb:init-from-storage] restored ",
                " campaigns",
              ])),
            t.length,
          ));
      } catch (e) {
        (o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[bb:init-from-storage] Failed to restore campaigns",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("bb-restore-campaigns-failure"),
          o("WAWebBackendApi").frontendFireAndForget(
            "loadedBizBroadcastCampaigns",
            { rows: [] },
          ));
      }
    }
    async function _() {
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "[bb:init-from-storage] restoreBizBroadcastCampaignInsights",
          ])),
      );
      try {
        var e = await o(
            "WAWebBizBroadcastInsightsStorageUtils",
          ).getAllInsightsMap(),
          t = Array.from(e.values());
        (o("WAWebBackendApi").frontendFireAndForget(
          "loadedBizBroadcastCampaignInsights",
          { rows: t },
        ),
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[bb:init-from-storage] restored ",
                " insights rows",
              ])),
            t.length,
          ));
      } catch (e) {
        (o("WALogger")
          .ERROR(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[bb:init-from-storage] Failed to restore insights",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("bb-restore-insights-failure"),
          o("WAWebBackendApi").frontendFireAndForget(
            "loadedBizBroadcastCampaignInsights",
            { rows: [] },
          ));
      }
    }
    ((l.restoreBizBroadcastCampaigns = p),
      (l.restoreBizBroadcastCampaignInsights = _));
  },
  98,
);
