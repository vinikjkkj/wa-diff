__d(
  "WAWebCreatePendingBroadcastCampaignAction",
  [
    "Promise",
    "WALogger",
    "WAWebBizBroadcastCampaignStorageUtils",
    "WAWebBizBroadcastSystemMessageManager",
    "WAWebBroadcastCampaignSync",
    "WAWebBroadcastConsts",
    "WAWebCmd",
    "WAWebCreateMarketingCampaignAction",
    "WAWebPendingBusinessBroadcastAPI",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebSchemaBusinessBroadcastCampaign",
    "WAWebSchemaPendingBusinessBroadcastMessage",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(e, t, n, r, o, a) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i, l, s) {
            var u = r("WAWebPonyfillsCryptoRandomUUID")(),
              c = o("WAWebUserPrefsMeUser")
                .getMeDevicePnOrThrow_DO_NOT_USE()
                .getDeviceId(),
              d = r("WAWebPonyfillsCryptoRandomUUID")(),
              m = null,
              p = null,
              _ = a.selectedMediaFile;
            (_ != null &&
              ((m = yield _.arrayBuffer()),
              (p = JSON.stringify({
                lastModified: _.lastModified,
                name: _.name,
                type: _.type,
              }))),
              yield o("WAWebSchemaPendingBusinessBroadcastMessage")
                .getPendingBusinessBroadcastMessageTable()
                .create({
                  ctaButtonJson: a.ctaButtonJson,
                  mediaData: m,
                  mediaMetadata: p,
                  messageBody: a.body,
                  pendingBroadcastMessageId: d,
                }));
            var f = Date.now(),
              g = {
                broadcastJid: t,
                createTimestamp: f,
                deviceId: c,
                name: s,
                reservedQuota: l != null ? l : void 0,
                scheduledTimestamp: i != null ? i : void 0,
                status: o("WAWebSchemaBusinessBroadcastCampaign")
                  .BusinessBroadcastCampaignStatus.PROCESSING,
              },
              h = r("WAWebBroadcastCampaignSync").getCampaignMutation(u, g, f);
            (yield o(
              "WAWebBizBroadcastCampaignStorageUtils",
            ).updateCampaignWithSync(
              u,
              {
                adGroupId: n,
                adId: null,
                broadcastJid: t,
                campaignId: u,
                campaignName: s,
                createdTimestamp: f,
                deviceId: c,
                msgId: null,
                pendingBroadcastMessageId: d,
                reservedQuota: l != null ? l : null,
                scheduledTimestamp: i != null ? i : null,
                status: o("WAWebSchemaBusinessBroadcastCampaign")
                  .BusinessBroadcastCampaignStatus.PROCESSING,
              },
              [h],
            ),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:pending-campaign] Campaign created with SyncD mutation: ",
                    "",
                  ])),
                u,
              ));
          },
        )),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:pending-campaign] Starting campaign creation for ",
                " audience(s)",
              ])),
            e.audiences.length,
          );
          var t = [],
            r = 0,
            a = yield (p || (p = n("Promise"))).all(
              e.audiences.map(function (t) {
                return o("WAWebCreateMarketingCampaignAction")
                  .createMarketingCampaignAction(e.campaignInput)
                  .then(function (e) {
                    return { audience: t, campaignResult: e };
                  });
              }),
            );
          for (var i of a) {
            var l = i.audience,
              f = i.campaignResult,
              g = f == null ? void 0 : f.ad_group_id;
            if (g == null) {
              (r++,
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:pending-campaign] Missing ad_group_id for audience ",
                      ", skipping",
                    ])),
                  l.broadcastJid,
                ));
              continue;
            }
            t.push({
              adGroupId: g,
              broadcastJid: l.broadcastJid,
              freeReservedMsgs: l.freeReservedMsgs,
              sendTimestamp: e.sendTimestamp,
            });
          }
          if (t.length === 0)
            return (
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:pending-campaign] No valid audiences after campaign creation",
                  ])),
              ),
              {
                failedCampaignCount: r,
                pendingBroadcastResult: {
                  message:
                    "No valid ad_group_ids returned from campaign creation",
                  type: o("WAWebPendingBusinessBroadcastAPI")
                    .CreatePendingBroadcastStatus.FAILURE,
                },
              }
            );
          try {
            yield (p || (p = n("Promise"))).all(
              t.map(function (t) {
                return (
                  o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[broadcast:pending-campaign] Creating merged campaign for broadcastJid=",
                        ", adGroupId=",
                        "",
                      ])),
                    t.broadcastJid,
                    t.adGroupId,
                  ),
                  _(
                    t.broadcastJid,
                    t.adGroupId,
                    e.messageContent,
                    e.sendTimestamp,
                    t.freeReservedMsgs,
                    e.campaignInput.campaign_name,
                  )
                );
              }),
            );
            var h = new Set(
              t.map(function (e) {
                return e.broadcastJid;
              }),
            );
            return (
              yield p.all(
                Array.from(h, function (e) {
                  return o(
                    "WAWebBizBroadcastSystemMessageManager",
                  ).updateBizBroadcastSystemMessage(e);
                }),
              ),
              o("WAWebCmd").Cmd.trigger(
                o("WAWebBroadcastConsts").BIZ_BROADCAST_CAMPAIGN_UPDATED_EVENT,
              ),
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:pending-campaign] Completed successfully",
                  ])),
              ),
              {
                failedCampaignCount: r,
                pendingBroadcastResult: {
                  type: o("WAWebPendingBusinessBroadcastAPI")
                    .CreatePendingBroadcastStatus.OK,
                },
              }
            );
          } catch (e) {
            var y = e instanceof Error ? e.message : String(e);
            return (
              (r = t.length),
              {
                failedCampaignCount: r,
                pendingBroadcastResult: {
                  message: y,
                  type: o("WAWebPendingBusinessBroadcastAPI")
                    .CreatePendingBroadcastStatus.FAILURE,
                },
              }
            );
          }
        })),
        h.apply(this, arguments)
      );
    }
    l.createPendingBroadcastCampaignAction = g;
  },
  98,
);
