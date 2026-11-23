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
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    async function p(t) {
      var n = t.adGroupId,
        a = t.broadcastJid,
        i = t.campaignName,
        l = t.freeReservedMsgs,
        s = t.isDuplicate,
        u = t.messageContent,
        c = t.sendTimestamp,
        d = t.sourceCampaignId,
        m = r("WAWebPonyfillsCryptoRandomUUID")(),
        p = o("WAWebUserUtils").getMeDevicePnOrThrow_DO_NOT_USE().getDeviceId(),
        _ = r("WAWebPonyfillsCryptoRandomUUID")(),
        f = null,
        g = null,
        h = u.selectedMediaFile;
      (h != null
        ? ((f = await h.arrayBuffer()),
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
        await o("WAWebSchemaPendingBusinessBroadcastMessage")
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
      (await o("WAWebBizBroadcastCampaignStorageUtils").updateCampaignWithSync(
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
    }
    async function _(e) {
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[broadcast:pending-campaign] start, audiences=",
            "",
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
                  "[broadcast:pending-campaign] no ad_group_id, skip ",
                  "",
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
                "[broadcast:pending-campaign] no valid audiences",
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
                    "[broadcast:pending-campaign] merged campaign jid=",
                    " ag=",
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
                isDuplicate: e.isDuplicate,
                messageContent: e.messageContent,
                sendTimestamp: e.sendTimestamp,
                sourceCampaignId: e.sourceCampaignId,
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
