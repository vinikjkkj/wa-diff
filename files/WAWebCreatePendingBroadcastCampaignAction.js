__d(
  "WAWebCreatePendingBroadcastCampaignAction",
  [
    "Promise",
    "WALogger",
    "WAWebBizBroadcastCampaignCollection",
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
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.adGroupId,
            a = t.broadcastJid,
            i = t.campaignName,
            l = t.freeReservedMsgs,
            s = t.isDuplicate,
            u = t.messageContent,
            c = t.sendTimestamp,
            d = t.sourceCampaignId,
            m = r("WAWebPonyfillsCryptoRandomUUID")(),
            p = o("WAWebUserPrefsMeUser")
              .getMeDevicePnOrThrow_DO_NOT_USE()
              .getDeviceId(),
            _ = r("WAWebPonyfillsCryptoRandomUUID")(),
            f = null,
            g = null,
            h = u.selectedMediaFile;
          (h != null
            ? ((f = yield h.arrayBuffer()),
              (g = JSON.stringify({
                lastModified: h.lastModified,
                name: h.name,
                type: h.type,
              })))
            : u.catalogWid != null &&
              (g = JSON.stringify({
                catalogWid: u.catalogWid,
                productId: u.productId,
                productImageUrl: u.productImageUrl,
              })),
            yield o("WAWebSchemaPendingBusinessBroadcastMessage")
              .getPendingBusinessBroadcastMessageTable()
              .create({
                ctaButtonJson: u.ctaButtonJson,
                mediaData: f,
                mediaMetadata: g,
                messageBody: u.body,
                pendingBroadcastMessageId: _,
              }));
          var y = Date.now(),
            C = {
              broadcastJid: a,
              createTimestamp: y,
              deviceId: p,
              name: i,
              reservedQuota: l != null ? l : void 0,
              scheduledTimestamp: c != null ? c : void 0,
              status: o("WAWebSchemaBusinessBroadcastCampaign")
                .BusinessBroadcastCampaignStatus.PROCESSING,
            },
            b = r("WAWebBroadcastCampaignSync").getCampaignMutation(m, C, y);
          (yield o(
            "WAWebBizBroadcastCampaignStorageUtils",
          ).updateCampaignWithSync(
            m,
            {
              adGroupId: n,
              adId: null,
              broadcastJid: a,
              campaignId: m,
              campaignName: i,
              createdTimestamp: y,
              deviceId: p,
              isDuplicate: s != null ? s : null,
              msgId: null,
              pendingBroadcastMessageId: _,
              reservedQuota: l != null ? l : null,
              scheduledTimestamp: c != null ? c : null,
              sourceCampaignId: d != null ? d : null,
              status: o("WAWebSchemaBusinessBroadcastCampaign")
                .BusinessBroadcastCampaignStatus.PROCESSING,
            },
            [b],
          ),
            r("WAWebBizBroadcastCampaignCollection").add(
              {
                adGroupId: n,
                adId: null,
                broadcastJid: a,
                campaignName: i,
                createdTimestamp: y,
                deviceId: p,
                id: m,
                isDuplicate: s != null ? s : null,
                msgId: null,
                pendingBroadcastMessageId: _,
                reservedQuota: l != null ? l : null,
                scheduledTimestamp: c != null ? c : null,
                sourceCampaignId: d != null ? d : null,
                status: o("WAWebSchemaBusinessBroadcastCampaign")
                  .BusinessBroadcastCampaignStatus.PROCESSING,
              },
              { merge: !0 },
            ),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:pending-campaign] campaign+ syncD mut ",
                  "",
                ])),
              m,
            ));
        })),
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
                "[broadcast:pending-campaign] start, audiences=",
                "",
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
                      "[broadcast:pending-campaign] no ad_group_id, skip ",
                      "",
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
                    "[broadcast:pending-campaign] no valid audiences",
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
                        "[broadcast:pending-campaign] merged campaign jid=",
                        " ag=",
                        "",
                      ])),
                    t.broadcastJid,
                    t.adGroupId,
                  ),
                  _({
                    adGroupId: t.adGroupId,
                    broadcastJid: t.broadcastJid,
                    campaignName: e.campaignInput.campaign_name,
                    freeReservedMsgs: t.freeReservedMsgs,
                    isDuplicate: e.isDuplicate,
                    messageContent: e.messageContent,
                    sendTimestamp: e.sendTimestamp,
                    sourceCampaignId: e.sourceCampaignId,
                  })
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
