__d(
  "WAWebBizBroadcastDeviceRemovalCleanup",
  [
    "Promise",
    "WALogger",
    "WAWebApiDeviceList",
    "WAWebBizBroadcastCampaignAPI",
    "WAWebBizGatingUtils",
    "WAWebSchemaBusinessBroadcastCampaign",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C;
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            if (o("WAWebUserPrefsMeUser").getMaybeMeDevicePn() == null) {
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:device-cleanup] User identity not available yet \u2014 skipping cleanup",
                    ])),
                )
                .sendLogs("business-broadcast-device-cleanup-skipped-no-me");
              return;
            }
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:device-cleanup] Cleanup triggered",
                ])),
            );
            var a;
            if (t != null)
              ((a = t),
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:device-cleanup] Using provided device IDs: ",
                      "",
                    ])),
                  Array.from(a).join(", "),
                ));
            else
              try {
                var i = yield o("WAWebApiDeviceList").getMyDeviceList();
                ((a = new Set(
                  i.devices.map(function (e) {
                    return e.id;
                  }),
                )),
                  o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[broadcast:device-cleanup] Fetched device IDs from cache: ",
                        "",
                      ])),
                    Array.from(a).join(", "),
                  ));
              } catch (e) {
                o("WALogger")
                  .WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[broadcast:device-cleanup] Device list not available yet \u2014 skipping cleanup (will retry on next DEVICES notification)",
                      ])),
                  )
                  .sendLogs("business-broadcast-device-cleanup-skipped");
                return;
              }
            var l = yield o(
                "WAWebBizBroadcastCampaignAPI",
              ).getAllBizBroadcastCampaigns(),
              b = l.filter(function (e) {
                return (
                  !a.has(e.deviceId) &&
                  (e.status ===
                    o("WAWebSchemaBusinessBroadcastCampaign")
                      .BusinessBroadcastCampaignStatus.PROCESSING ||
                    e.status ===
                      o("WAWebSchemaBusinessBroadcastCampaign")
                        .BusinessBroadcastCampaignStatus.SCHEDULED)
                );
              });
            if (b.length === 0) {
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:device-cleanup] No orphaned campaigns found",
                  ])),
              );
              return;
            }
            if (
              !o("WAWebBizGatingUtils").isBizBroadcastSendWebEnabledNoExposure()
            ) {
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:device-cleanup] Skipped \u2014 feature not enabled",
                  ])),
              );
              return;
            }
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:device-cleanup] Found ",
                  " orphaned campaign(s) with invalid device IDs",
                ])),
              b.length,
            );
            var v = [],
              S = 0;
            (yield (C || (C = n("Promise"))).all(
              b.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      try {
                        (yield o(
                          "WAWebBizBroadcastCampaignAPI",
                        ).updateBizBroadcastCampaign(e.campaignId, {
                          pendingBroadcastMessageId: null,
                          status: o("WAWebSchemaBusinessBroadcastCampaign")
                            .BusinessBroadcastCampaignStatus.FAILED,
                        }),
                          S++,
                          v.length < 3 && v.push(e.campaignId));
                      } catch (t) {
                        o("WALogger")
                          .ERROR(
                            f ||
                              (f = babelHelpers.taggedTemplateLiteralLoose([
                                "[broadcast:device-cleanup] Failed to clean up campaign ",
                                "",
                              ])),
                            e.campaignId,
                          )
                          .catching(r("getErrorSafe")(t))
                          .sendLogs("business-broadcast-device-cleanup-failed");
                      }
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
              S > 0 &&
                o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:device-cleanup] Marked ",
                      " campaign(s) as FAILED => ",
                      "",
                    ])),
                  S,
                  v,
                ),
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:device-cleanup] Cleanup complete",
                  ])),
              ));
          } catch (e) {
            o("WALogger")
              .ERROR(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:device-cleanup] Unexpected error during cleanup",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("business-broadcast-device-cleanup-error");
          }
        })),
        v.apply(this, arguments)
      );
    }
    l.cleanupCampaignsWithInvalidDevices = b;
  },
  98,
);
