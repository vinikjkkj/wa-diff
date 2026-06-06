__d(
  "WAWebCreatePendingBroadcastCampaignAction",
  [
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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    async function p(t) {
      var n = t.adGroupId,
        a = t.broadcastJid,
        i = t.campaignName,
        l = t.freeReservedMsgs,
        s = t.messageContent,
        u = t.sendTimestamp,
        c = r("WAWebPonyfillsCryptoRandomUUID")(),
        d = o("WAWebUserPrefsMeUser")
          .getMeDevicePnOrThrow_DO_NOT_USE()
          .getDeviceId(),
        m = r("WAWebPonyfillsCryptoRandomUUID")(),
        p = null,
        _ = null,
        f = s.selectedMediaFile;
      (f != null
        ? ((p = await f.arrayBuffer()),
          (_ = JSON.stringify({
            lastModified: f.lastModified,
            name: f.name,
            type: f.type,
          })))
        : s.catalogWid != null &&
          (_ = JSON.stringify({
            catalogWid: s.catalogWid,
            productId: s.productId,
            productImageUrl: s.productImageUrl,
          })),
        await o("WAWebSchemaPendingBusinessBroadcastMessage")
          .getPendingBusinessBroadcastMessageTable()
          .create({
            ctaButtonJson: s.ctaButtonJson,
            mediaData: p,
            mediaMetadata: _,
            messageBody: s.body,
            pendingBroadcastMessageId: m,
          }));
      var g = Date.now(),
        h = {
          broadcastJid: a,
          createTimestamp: g,
          deviceId: d,
          name: i,
          reservedQuota: l != null ? l : void 0,
          scheduledTimestamp: u != null ? u : void 0,
          status: o("WAWebSchemaBusinessBroadcastCampaign")
            .BusinessBroadcastCampaignStatus.PROCESSING,
        },
        y = r("WAWebBroadcastCampaignSync").getCampaignMutation(c, h, g);
      (await o("WAWebBizBroadcastCampaignStorageUtils").updateCampaignWithSync(
        c,
        {
          adGroupId: n,
          adId: null,
          broadcastJid: a,
          campaignId: c,
          campaignName: i,
          createdTimestamp: g,
          deviceId: d,
          msgId: null,
          pendingBroadcastMessageId: m,
          reservedQuota: l != null ? l : null,
          scheduledTimestamp: u != null ? u : null,
          status: o("WAWebSchemaBusinessBroadcastCampaign")
            .BusinessBroadcastCampaignStatus.PROCESSING,
        },
        [y],
      ),
        r("WAWebBizBroadcastCampaignCollection").add(
          {
            adGroupId: n,
            adId: null,
            broadcastJid: a,
            campaignName: i,
            createdTimestamp: g,
            deviceId: d,
            id: c,
            msgId: null,
            pendingBroadcastMessageId: m,
            reservedQuota: l != null ? l : null,
            scheduledTimestamp: u != null ? u : null,
            status: o("WAWebSchemaBusinessBroadcastCampaign")
              .BusinessBroadcastCampaignStatus.PROCESSING,
          },
          { merge: !0 },
        ),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[broadcast:pending-campaign] Campaign created with SyncD mutation: ",
              "",
            ])),
          c,
        ));
    }
    async function _(e) {
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[broadcast:pending-campaign] Starting campaign creation for ",
            " audience(s)",
          ])),
        e.audiences.length,
      );
      var t = [],
        n = 0,
        r = await Promise.all(
          e.audiences.map(function (t) {
            return o("WAWebCreateMarketingCampaignAction")
              .createMarketingCampaignAction(e.campaignInput)
              .then(function (e) {
                return { audience: t, campaignResult: e };
              });
          }),
        );
      for (var a of r) {
        var i = a.audience,
          l = a.campaignResult,
          _ = l == null ? void 0 : l.ad_group_id;
        if (_ == null) {
          (n++,
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:pending-campaign] Missing ad_group_id for audience ",
                  ", skipping",
                ])),
              i.broadcastJid,
            ));
          continue;
        }
        t.push({
          adGroupId: _,
          broadcastJid: i.broadcastJid,
          freeReservedMsgs: i.freeReservedMsgs,
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
            failedCampaignCount: n,
            pendingBroadcastResult: {
              message: "No valid ad_group_ids returned from campaign creation",
              type: o("WAWebPendingBusinessBroadcastAPI")
                .CreatePendingBroadcastStatus.FAILURE,
            },
          }
        );
      try {
        await Promise.all(
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
              p({
                adGroupId: t.adGroupId,
                broadcastJid: t.broadcastJid,
                campaignName: e.campaignInput.campaign_name,
                freeReservedMsgs: t.freeReservedMsgs,
                messageContent: e.messageContent,
                sendTimestamp: e.sendTimestamp,
              })
            );
          }),
        );
        var f = new Set(
          t.map(function (e) {
            return e.broadcastJid;
          }),
        );
        return (
          await Promise.all(
            Array.from(f, function (e) {
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
            failedCampaignCount: n,
            pendingBroadcastResult: {
              type: o("WAWebPendingBusinessBroadcastAPI")
                .CreatePendingBroadcastStatus.OK,
            },
          }
        );
      } catch (e) {
        var g = e instanceof Error ? e.message : String(e);
        return (
          (n = t.length),
          {
            failedCampaignCount: n,
            pendingBroadcastResult: {
              message: g,
              type: o("WAWebPendingBusinessBroadcastAPI")
                .CreatePendingBroadcastStatus.FAILURE,
            },
          }
        );
      }
    }
    l.createPendingBroadcastCampaignAction = _;
  },
  98,
);
