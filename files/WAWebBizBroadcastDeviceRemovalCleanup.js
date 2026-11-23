__d(
  "WAWebBizBroadcastDeviceRemovalCleanup",
  [
    "WALogger",
    "WAWebApiDeviceList",
    "WAWebBizBroadcastCampaignAPI",
    "WAWebBusinessBroadcastsGatingUtils",
    "WAWebSchemaBusinessBroadcastCampaign",
    "WAWebUserPrefsMeUser",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y;
    async function C(t) {
      try {
        if (o("WAWebUserPrefsMeUser").getMaybeMeDevicePn() == null) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:device-cleanup] no me identity, skip",
                ])),
            )
            .tags("non-sad")
            .sendLogs("business-broadcast-device-cleanup-skipped-no-me");
          return;
        }
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[broadcast:device-cleanup] Cleanup triggered",
            ])),
        );
        var n;
        if (t != null) {
          n = t;
          var a = Array.from(n).join(", ");
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:device-cleanup] provided ids: ",
                "",
              ])),
            a,
          );
        } else
          try {
            var i = await o("WAWebApiDeviceList").getMyDeviceList();
            n = new Set(
              i.devices.map(function (e) {
                return e.id;
              }),
            );
            var l = Array.from(n).join(", ");
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:device-cleanup] fetched ids: ",
                  "",
                ])),
              l,
            );
          } catch (e) {
            o("WALogger")
              .WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:device-cleanup] device list unavail, skip",
                  ])),
              )
              .tags("non-sad")
              .sendLogs("business-broadcast-device-cleanup-skipped");
            return;
          }
        var C = await o(
            "WAWebBizBroadcastCampaignAPI",
          ).getAllBizBroadcastCampaigns(),
          b = C.filter(function (e) {
            return (
              !n.has(e.deviceId) &&
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
          !o(
            "WAWebBusinessBroadcastsGatingUtils",
          ).isBizBroadcastSendWebEnabledNoExposure()
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
              "[broadcast:device-cleanup] ",
              " orphaned campaign(s)",
            ])),
          b.length,
        );
        var v = [],
          S = 0;
        (await Promise.all(
          b.map(async function (e) {
            try {
              (await o(
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
          }),
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
    }
    l.cleanupCampaignsWithInvalidDevices = C;
  },
  98,
);
