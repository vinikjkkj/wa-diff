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
                  "[broadcast:device-cleanup] User identity not available yet \u2014 skipping cleanup",
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
        if (t != null)
          ((n = t),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:device-cleanup] Using provided device IDs: ",
                  "",
                ])),
              Array.from(n).join(", "),
            ));
        else
          try {
            var a = await o("WAWebApiDeviceList").getMyDeviceList();
            ((n = new Set(
              a.devices.map(function (e) {
                return e.id;
              }),
            )),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:device-cleanup] Fetched device IDs from cache: ",
                    "",
                  ])),
                Array.from(n).join(", "),
              ));
          } catch (e) {
            o("WALogger")
              .WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:device-cleanup] Device list not available yet \u2014 skipping cleanup (will retry on next DEVICES notification)",
                  ])),
              )
              .tags("non-sad")
              .sendLogs("business-broadcast-device-cleanup-skipped");
            return;
          }
        var i = await o(
            "WAWebBizBroadcastCampaignAPI",
          ).getAllBizBroadcastCampaigns(),
          l = i.filter(function (e) {
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
        if (l.length === 0) {
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
              "[broadcast:device-cleanup] Found ",
              " orphaned campaign(s) with invalid device IDs",
            ])),
          l.length,
        );
        var C = [],
          b = 0;
        (await Promise.all(
          l.map(async function (e) {
            try {
              (await o(
                "WAWebBizBroadcastCampaignAPI",
              ).updateBizBroadcastCampaign(e.campaignId, {
                pendingBroadcastMessageId: null,
                status: o("WAWebSchemaBusinessBroadcastCampaign")
                  .BusinessBroadcastCampaignStatus.FAILED,
              }),
                b++,
                C.length < 3 && C.push(e.campaignId));
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
          b > 0 &&
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:device-cleanup] Marked ",
                  " campaign(s) as FAILED => ",
                  "",
                ])),
              b,
              C,
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
