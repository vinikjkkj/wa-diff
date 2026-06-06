__d(
  "WAWebBizBroadcastCampaignInitFromStorage",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebBizBroadcastCampaignAPI",
    "WAWebBizBroadcastInsightsStorageUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[bb:init-from-storage] restoreBizBroadcastCampaigns start",
              ])),
          );
          try {
            var t = yield o(
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
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[bb:init-from-storage] restoreBizBroadcastCampaignInsights",
              ])),
          );
          try {
            var e = yield o(
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
        })),
        g.apply(this, arguments)
      );
    }
    ((l.restoreBizBroadcastCampaigns = p),
      (l.restoreBizBroadcastCampaignInsights = f));
  },
  98,
);
