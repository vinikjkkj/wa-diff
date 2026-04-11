__d(
  "WAWebBizBroadcastDeviceRemovalCleanup",
  [
    "Promise",
    "WALogger",
    "WAWebApiDeviceList",
    "WAWebBizBroadcastCampaignAPI",
    "WAWebBizGatingUtils",
    "WAWebSchemaBusinessBroadcastCampaign",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y;
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:device-cleanup] Cleanup triggered",
                ])),
            );
            var a;
            if (t != null)
              ((a = t),
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
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
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[broadcast:device-cleanup] Fetched device IDs from cache: ",
                        "",
                      ])),
                    Array.from(a).join(", "),
                  ));
              } catch (e) {
                o("WALogger")
                  .WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[broadcast:device-cleanup] Device list not available yet \u2014 skipping cleanup (will retry on next DEVICES notification)",
                      ])),
                  )
                  .sendLogs("business-broadcast-device-cleanup-skipped");
                return;
              }
            var l = yield o(
                "WAWebBizBroadcastCampaignAPI",
              ).getAllBizBroadcastCampaigns(),
              C = l.filter(function (e) {
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
            if (C.length === 0) {
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:device-cleanup] No orphaned campaigns found",
                  ])),
              );
              return;
            }
            if (
              !o("WAWebBizGatingUtils").isBizBroadcastSendWebEnabledNoExposure()
            ) {
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:device-cleanup] Skipped \u2014 feature not enabled",
                  ])),
              );
              return;
            }
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:device-cleanup] Found ",
                  " orphaned campaign(s) with invalid device IDs",
                ])),
              C.length,
            );
            var b = [],
              v = 0;
            (yield (y || (y = n("Promise"))).all(
              C.map(
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
                          v++,
                          b.length < 3 && b.push(e.campaignId));
                      } catch (t) {
                        o("WALogger")
                          .ERROR(
                            _ ||
                              (_ = babelHelpers.taggedTemplateLiteralLoose([
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
              v > 0 &&
                o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:device-cleanup] Marked ",
                      " campaign(s) as FAILED => ",
                      "",
                    ])),
                  v,
                  b,
                ),
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:device-cleanup] Cleanup complete",
                  ])),
              ));
          } catch (e) {
            o("WALogger")
              .ERROR(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:device-cleanup] Unexpected error during cleanup",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("business-broadcast-device-cleanup-error");
          }
        })),
        b.apply(this, arguments)
      );
    }
    l.cleanupCampaignsWithInvalidDevices = C;
  },
  98,
);
