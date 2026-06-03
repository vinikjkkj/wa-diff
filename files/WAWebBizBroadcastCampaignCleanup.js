__d(
  "WAWebBizBroadcastCampaignCleanup",
  [
    "Promise",
    "WALogger",
    "WAWebBizBroadcastCampaignAPI",
    "WAWebBizBroadcastCampaignStorageUtils",
    "WAWebSchemaBusinessBroadcastCampaign",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = o("WAWebUserPrefsMeUser")
              .getMeDevicePnOrThrow_DO_NOT_USE()
              .getDeviceId(),
            r = yield o(
              "WAWebBizBroadcastCampaignAPI",
            ).getBizBroadcastCampaignsByStatuses([
              o("WAWebSchemaBusinessBroadcastCampaign")
                .BusinessBroadcastCampaignStatus.PROCESSING,
            ]),
            a = r.filter(function (e) {
              return (
                e.deviceId === t &&
                e.pendingBroadcastMessageId == null &&
                e.msgId == null
              );
            }),
            i = [],
            l = 0;
          (yield (s || (s = n("Promise"))).all(
            a.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    (yield o(
                      "WAWebBizBroadcastCampaignStorageUtils",
                    ).updateCampaignStatusWithSync(e.campaignId, {
                      status: o("WAWebSchemaBusinessBroadcastCampaign")
                        .BusinessBroadcastCampaignStatus.FAILED,
                    }),
                      yield o(
                        "WAWebBizBroadcastCampaignStorageUtils",
                      ).cleanupPendingCampaignData(e.campaignId),
                      l++,
                      i.length < 3 && i.push(e.campaignId));
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          ),
            l > 0 &&
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[cleanupStaleCampaigns] ",
                    " stuck->FAILED ids=",
                    "",
                  ])),
                l,
                i,
              ));
        })),
        c.apply(this, arguments)
      );
    }
    l.cleanupStaleCampaigns = u;
  },
  98,
);
