__d(
  "WAWebProcessCampaignNotificationAction",
  [
    "WALogger",
    "WAWebBizBroadcastCampaignAPI",
    "WAWebBizBroadcastCampaignMsgKeyUtils",
    "WAWebBizBroadcastCampaignNotifier",
    "WAWebBizBroadcastMediaProcessor",
    "WAWebBizBroadcastSystemMessageManager",
    "WAWebBroadcastCampaignSync",
    "WAWebBroadcastDatabaseJob",
    "WAWebBroadcastMsgDataUtils",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebCatalogCollection",
    "WAWebFileUtils",
    "WAWebMsgType",
    "WAWebPendingBusinessBroadcastAPI",
    "WAWebPendingBusinessBroadcastSerialization",
    "WAWebProductCatalogMessage",
    "WAWebSchemaBusinessBroadcastCampaign",
    "WAWebSchemaPendingBusinessBroadcastMessage",
    "WAWebSendBroadcastMsgAction",
    "WAWebSendMsgResultAction",
    "WAWebUserUtils",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P,
      N = new Map();
    function M(e) {
      switch (e) {
        case 400:
          return "bad_request";
        case 401:
          return "not_authorized";
        case 402:
          return "no_available_funds";
        case 405:
          return "invalid_campaign";
        case 420:
          return "invalid_campaign_for_sending";
        case 429:
          return "insufficient_free_quota";
        case 482:
          return "integrity_permanent_blocked";
        default:
          return "unknown";
      }
    }
    async function w(e) {
      var t,
        n = await o(
          "WAWebBizBroadcastCampaignAPI",
        ).getBizBroadcastCampaignByAdGroupId(e);
      if (n == null) return null;
      var r = n.pendingBroadcastMessageId;
      if (r == null) {
        var a;
        return {
          adGroupId: (a = n.adGroupId) != null ? a : "",
          broadcastJid: n.broadcastJid,
          ctaButtonJson: null,
          mediaFile: null,
          messageBody: null,
          sendTimestamp: n.scheduledTimestamp,
        };
      }
      var i = await o("WAWebSchemaPendingBusinessBroadcastMessage")
        .getPendingBusinessBroadcastMessageTable()
        .get(r);
      if (i == null) {
        var l;
        return {
          adGroupId: (l = n.adGroupId) != null ? l : "",
          broadcastJid: n.broadcastJid,
          ctaButtonJson: null,
          mediaFile: null,
          messageBody: null,
          sendTimestamp: n.scheduledTimestamp,
        };
      }
      var s = {
        adGroupId: (t = n.adGroupId) != null ? t : "",
        broadcastJid: n.broadcastJid,
        freeReservedMsgs: n.reservedQuota,
        pendingBroadcastMessageId: r,
        sendTimestamp: n.scheduledTimestamp,
      };
      return o(
        "WAWebPendingBusinessBroadcastSerialization",
      ).deserializePendingBusinessBroadcast(s, i);
    }
    function A(e) {
      var t, n, r, o, a;
      return {
        adId: (t = e.adId) != null ? t : void 0,
        broadcastJid: e.broadcastJid,
        createTimestamp: e.createdTimestamp,
        deviceId: e.deviceId,
        msgId: (n = e.msgId) != null ? n : void 0,
        name: (r = e.campaignName) != null ? r : void 0,
        reservedQuota: (o = e.reservedQuota) != null ? o : void 0,
        scheduledTimestamp: (a = e.scheduledTimestamp) != null ? a : void 0,
        status: e.status,
      };
    }
    async function F(t, n, a) {
      var i = await o(
        "WAWebBizBroadcastCampaignAPI",
      ).getBizBroadcastCampaignByAdGroupId(t);
      if (i != null) {
        var l = i.pendingBroadcastMessageId,
          s = {
            adId: n,
            msgId: a != null ? a : i.msgId,
            pendingBroadcastMessageId: null,
            status: o("WAWebSchemaBusinessBroadcastCampaign")
              .BusinessBroadcastCampaignStatus.SENT,
          },
          u = babelHelpers.extends({}, i, s),
          c = Date.now(),
          d = r("WAWebBroadcastCampaignSync").getCampaignMutation(
            i.campaignId,
            A(u),
            c,
          );
        (await o(
          "WAWebBizBroadcastCampaignNotifier",
        ).updateCampaignWithSyncAndNotify(i.campaignId, s, [d]),
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:campaign-notification] Updated campaign status to SENT",
              ])),
          ),
          l != null &&
            (await o("WAWebSchemaPendingBusinessBroadcastMessage")
              .getPendingBusinessBroadcastMessageTable()
              .remove(l)));
      }
    }
    async function O(e, t) {
      var n = await o(
        "WAWebBizBroadcastCampaignAPI",
      ).getBizBroadcastCampaignByAdGroupId(e);
      if (n != null) {
        var a = {
            adId: t,
            status: o("WAWebSchemaBusinessBroadcastCampaign")
              .BusinessBroadcastCampaignStatus.FAILED,
          },
          i = babelHelpers.extends({}, n, a),
          l = Date.now(),
          u = r("WAWebBroadcastCampaignSync").getCampaignMutation(
            n.campaignId,
            A(i),
            l,
          );
        (await o(
          "WAWebBizBroadcastCampaignNotifier",
        ).updateCampaignWithSyncAndNotify(n.campaignId, a, [u]),
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:campaign-notification] Updated campaign status to FAILED",
              ])),
          ));
      }
    }
    async function B(e, t, n, r, a, i) {
      var l = o("WAWebWidFactory").createWid(e);
      await o("WAWebCatalogCollection").CatalogCollection.findProduct({
        catalogWid: l,
        productId: t,
      });
      var s = o("WAWebCatalogCollection").CatalogCollection.get(l),
        d = s == null ? void 0 : s.productCollection.get(t);
      if (d == null)
        return (
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:campaign-notification] Product not found in catalog after findProduct",
              ])),
          ),
          null
        );
      var m = o("WAWebProductCatalogMessage").createProductMsgSnapshot(d),
        p = d.getProductImageCollectionHead();
      p != null && (await p.triggerImageUpdate());
      var _ = d.getHeadImageFile();
      if (_ == null)
        return (
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:campaign-notification] Product image not available after triggerImageUpdate",
              ])),
          ),
          null
        );
      var f = await o(
          "WAWebBizBroadcastMediaProcessor",
        ).processMediaForBroadcast(_, n.length, r, a),
        g = f.freshMedia,
        h = f.mediaMsgData,
        y = o("WAWebBroadcastMsgDataUtils").createBroadcastProductMsgData(h, m);
      return o("WAWebSendBroadcastMsgAction").sendBroadcastMsgAction({
        beforeSend: o(
          "WAWebBizBroadcastMediaProcessor",
        ).createBroadcastMediaUploadCallback(g.type),
        businessMetadata: i,
        msgData: y,
        recipients: n,
      });
    }
    async function W(e, t, n, r, a, i) {
      var l = o("WAWebWidFactory").createWid(e);
      await o("WAWebCatalogCollection").CatalogCollection.find(l);
      var s = o("WAWebCatalogCollection").CatalogCollection.get(l),
        u = s == null ? void 0 : s.getMostRecentlyApprovedProduct(),
        c = u == null ? void 0 : u.getProductImageCollectionHead();
      c != null && (await c.triggerImageUpdate());
      var m = u == null ? void 0 : u.getHeadImageFile();
      if (m == null)
        return (
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:campaign-notification] Full catalog send failed: product image unavailable after fetch. catalogWid=",
                  ", hasProduct=",
                  ", hasHeadImage=",
                  "",
                ])),
              e,
              String(u != null),
              String(
                (u == null ? void 0 : u.getProductImageCollectionHead()) !=
                  null,
              ),
            )
            .sendLogs("business-broadcast-full-catalog-send-failed"),
          null
        );
      var p = JSON.parse(a),
        _ = await o(
          "WAWebBizBroadcastMediaProcessor",
        ).processMediaWithCTAForBroadcast(m, t.length, n, r, p),
        f = _.freshMedia,
        g = _.mediaMsgData,
        h = await o("WAWebSendBroadcastMsgAction").sendBroadcastMsgAction({
          beforeSend: o(
            "WAWebBizBroadcastMediaProcessor",
          ).createBroadcastMediaUploadCallback(f.type),
          businessMetadata: i,
          msgData: g,
          recipients: t,
        });
      return { mediaType: f.type, result: h, sentCtaButtonJson: a };
    }
    async function q(e) {
      var t = e.adGroupId,
        n = e.adId,
        r = e.broadcastJid;
      (await o("WAWebPendingBusinessBroadcastAPI").deletePendingBroadcast(t),
        await O(t, n),
        await o(
          "WAWebBizBroadcastSystemMessageManager",
        ).updateBizBroadcastSystemMessage(r));
    }
    async function U(e, t) {
      var n = e.adGroupId,
        r = e.adId,
        a = e.broadcastJid,
        i = e.businessMetadata,
        l = e.catalogWid,
        s = e.ctaButtonJson,
        u = e.productId,
        c = e.recipients;
      if (l == null) return null;
      var d = o("WAWebBizBroadcastMediaProcessor").getAttachmentType({
        catalogWid: l,
        mediaType: null,
        productId: u,
      });
      if (u != null) {
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[broadcast:campaign-notification] Sending single product broadcast, listId=",
              ", catalogWid=",
              ", productId=",
              "",
            ])),
          a,
          l,
          u,
        );
        var f = await B(l, u, c, a, t, i);
        return f == null
          ? (await q({ adGroupId: n, adId: r, broadcastJid: a }),
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.sendBroadcastDeliveryResult(
              c.length,
              "failure",
              null,
              "Product fetch or image download failed",
              "unknown",
              d,
            ),
            null)
          : { mediaType: null, result: f, sentCtaButtonJson: null };
      }
      if (s != null) {
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "[broadcast:campaign-notification] Sending full catalog broadcast, listId=",
              ", catalogWid=",
              "",
            ])),
          a,
          l,
        );
        var g = await W(l, c, a, t, s, i);
        return g == null
          ? (await q({ adGroupId: n, adId: r, broadcastJid: a }),
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.sendBroadcastDeliveryResult(
              c.length,
              "failure",
              null,
              "Catalog product or image not available",
              "unknown",
              d,
            ),
            null)
          : g;
      }
      return (
        o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "[broadcast:campaign-notification] Invalid catalog state: catalogWid=",
              " but no productId or ctaButtonJson",
            ])),
          l,
        ),
        await q({ adGroupId: n, adId: r, broadcastJid: a }),
        o(
          "WAWebBusinessBroadcastUserJourneyLogger",
        ).BusinessBroadcastUserJourneyLogger.sendBroadcastDeliveryResult(
          c.length,
          "failure",
          null,
          "Invalid catalog state: missing productId and ctaButtonJson",
          "invalid_catalog_state",
          d,
        ),
        null
      );
    }
    async function V(e) {
      var t = e.broadcastJid,
        n = e.businessMetadata,
        r = e.catalogWid,
        a = e.ctaButtonJson,
        i = e.mediaFile,
        l = e.messageBody,
        s = e.recipients,
        u = l.trim(),
        c,
        d = null;
      if (i != null && a != null) {
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "[broadcast:campaign-notification] Sending interactive broadcast with media + CTA, listId=",
              ", recipients=",
              "",
            ])),
          t,
          s.length,
        );
        var m = JSON.parse(a),
          p = await o(
            "WAWebBizBroadcastMediaProcessor",
          ).processMediaWithCTAForBroadcast(i, s.length, t, u, m),
          _ = p.freshMedia,
          y = p.mediaMsgData;
        ((d = _.type),
          (c = await o("WAWebSendBroadcastMsgAction").sendBroadcastMsgAction({
            beforeSend: o(
              "WAWebBizBroadcastMediaProcessor",
            ).createBroadcastMediaUploadCallback(_.type),
            businessMetadata: n,
            msgData: y,
            recipients: s,
          })));
      } else {
        if (r != null) return U(e, u);
        if (i != null) {
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:campaign-notification] Sending media broadcast with fresh processing, listId=",
                ", recipients=",
                "",
              ])),
            t,
            s.length,
          );
          var C = await o(
              "WAWebBizBroadcastMediaProcessor",
            ).processMediaForBroadcast(i, s.length, t, u),
            b = C.freshMedia,
            v = C.mediaMsgData;
          ((d = b.type),
            (c = await o("WAWebSendBroadcastMsgAction").sendBroadcastMsgAction({
              beforeSend: o(
                "WAWebBizBroadcastMediaProcessor",
              ).createBroadcastMediaUploadCallback(b.type),
              businessMetadata: n,
              msgData: v,
              recipients: s,
            })));
        } else if (a != null) {
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:campaign-notification] Sending interactive broadcast, listId=",
                ", recipients=",
                "",
              ])),
            t,
            s.length,
          );
          var S = JSON.parse(a),
            R = await o(
              "WAWebBroadcastMsgDataUtils",
            ).createBroadcastInteractiveMsgData(t, u, S);
          c = await o("WAWebSendBroadcastMsgAction").sendBroadcastMsgAction({
            businessMetadata: n,
            msgData: R,
            recipients: s,
          });
        } else {
          var L = await o(
            "WAWebBroadcastMsgDataUtils",
          ).createBroadcastTextMsgData(t, u);
          c = await o("WAWebSendBroadcastMsgAction").sendBroadcastMsgAction({
            businessMetadata: n,
            msgData: L,
            recipients: s,
          });
        }
      }
      return { mediaType: d, result: c, sentCtaButtonJson: a };
    }
    function H(e) {
      var t = e.adGroupId,
        n = N.get(t);
      if (n != null)
        return (
          o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:campaign-notification] Send already in progress for ad_group_id: ",
                "",
              ])),
            t,
          ),
          n
        );
      var r = z(e).finally(function () {
        N.delete(t);
      });
      return (N.set(t, r), r);
    }
    async function G(e) {
      var t = await o(
        "WAWebBizBroadcastCampaignAPI",
      ).getBizBroadcastCampaignByAdGroupId(e);
      if (t == null)
        return (
          o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:campaign-notification] Ad Group ID not found, presuming notification was meant for primary device",
              ])),
          ),
          null
        );
      var n = o("WAWebUserUtils")
        .getMeDevicePnOrThrow_DO_NOT_USE()
        .getDeviceId();
      return t.deviceId !== n
        ? (o("WALogger").LOG(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:campaign-notification] Campaign was created on device ",
                ", skipping on current device ",
                "",
              ])),
            t.deviceId,
            n,
          ),
          null)
        : t.status !==
            o("WAWebSchemaBusinessBroadcastCampaign")
              .BusinessBroadcastCampaignStatus.PROCESSING
          ? (o("WALogger").LOG(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:campaign-notification] Campaign is no longer processing, skipping ad_group_id: ",
                  ", status: ",
                  "",
                ])),
              e,
              t.status,
            ),
            null)
          : t;
    }
    async function z(e) {
      var t = e.adGroupId,
        n = e.adId;
      if (t == null || n == null)
        return (
          o("WALogger").ERROR(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:campaign-notification] Missing required params",
              ])),
          ),
          !1
        );
      o("WALogger").LOG(
        R ||
          (R = babelHelpers.taggedTemplateLiteralLoose([
            "[broadcast:campaign-notification] Retrieving pending broadcast for ad_group_id: ",
            "",
          ])),
        t,
      );
      var a = await G(t);
      if (a == null) return !1;
      if (e.status === "INTEGRITY_NOT_CLEARED") {
        (o("WALogger").LOG(
          L ||
            (L = babelHelpers.taggedTemplateLiteralLoose([
              "[broadcast:campaign-notification] Integrity not cleared for campaign, ad_group_id: ",
              "",
            ])),
          t,
        ),
          await o("WAWebPendingBusinessBroadcastAPI").deletePendingBroadcast(t),
          await O(t, n));
        var i = await o(
          "WAWebBizBroadcastCampaignAPI",
        ).getBizBroadcastCampaignByAdGroupId(t);
        return (
          (i == null ? void 0 : i.broadcastJid) != null &&
            (await o(
              "WAWebBizBroadcastSystemMessageManager",
            ).updateBizBroadcastSystemMessage(i.broadcastJid)),
          o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.sendBroadcastDeliveryResult(
            0,
            "failure",
            null,
            "integrity_permanent_blocked",
            "integrity_permanent_blocked",
          ),
          !1
        );
      }
      var l = null,
        s = 0,
        u = null,
        c = null,
        d = null,
        m = null,
        p = !1;
      try {
        var _,
          f = await w(t);
        if (f == null)
          return (
            o("WALogger").LOG(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:campaign-notification] Pending broadcast data not found for campaign",
                ])),
            ),
            !1
          );
        var g = f.broadcastJid,
          h = f.catalogWid,
          y = f.ctaButtonJson,
          C = f.freeReservedMsgs,
          b = f.mediaFile,
          v = f.messageBody,
          $ = f.productId;
        ((l = g), (u = b), (c = h), (d = $));
        var P = babelHelpers.extends(
          { campaign_id: n },
          C != null ? { free_reserved_msgs: String(C) } : null,
        );
        if (v == null || g == null)
          return (
            o("WALogger").LOG(
              k ||
                (k = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:campaign-notification] Message not found for broadcast",
                ])),
            ),
            g != null && (await q({ adGroupId: t, adId: n, broadcastJid: g })),
            !1
          );
        var N = o("WAWebWidFactory").createWid(g),
          M = await o("WAWebBroadcastDatabaseJob").getBroadcastMetadataJob(N),
          A = ((_ = M == null ? void 0 : M.recipients) != null ? _ : []).map(
            function (e) {
              return o("WAWebWidFactory").createUserLidOrThrow(e);
            },
          );
        ((s = A.length),
          o("WALogger").LOG(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:campaign-notification] retrieved metadata with recipients count: ",
                " for broadcast list ID: ",
                "",
              ])),
            A.length,
            g,
          ));
        var B = await V({
          adGroupId: t,
          adId: n,
          broadcastJid: g,
          businessMetadata: P,
          catalogWid: h,
          ctaButtonJson: y,
          freeReservedMsgs: C,
          mediaFile: b,
          messageBody: v,
          productId: $,
          recipients: A,
        });
        if (B == null) return !1;
        var W = B.mediaType,
          U = B.result,
          H = B.sentCtaButtonJson;
        if (
          ((m = W),
          U.messageSendResult ===
            o("WAWebSendMsgResultAction").SendMsgResult.OK)
        ) {
          var z, Q, X, Y, J;
          return (
            o("WALogger").LOG(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:campaign-notification] Broadcast sent successfully, recipients count: ",
                  ", broadcast list ID: ",
                  ", campaign_id: ",
                  "",
                ])),
              A.length,
              g,
              n,
            ),
            (p = !0),
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.sendBroadcastDeliveryResult(
              A.length,
              "success",
              (b == null ? void 0 : b.name) != null
                ? o("WAWebFileUtils").getFileExtension(b.name)
                : null,
              void 0,
              void 0,
              o("WAWebBizBroadcastMediaProcessor").getAttachmentType({
                catalogWid: h,
                mediaType: W,
                productId: $,
              }),
            ),
            await F(
              t,
              n,
              U.msgId != null
                ? o("WAWebBizBroadcastCampaignMsgKeyUtils").extractStanzaId(
                    U.msgId,
                  )
                : null,
            ),
            await o(
              "WAWebBizBroadcastSystemMessageManager",
            ).updateBizBroadcastSystemMessage(g),
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.sendCampaignAck({
              attachment_type:
                (z = o("WAWebBizBroadcastMediaProcessor").getAttachmentType({
                  catalogWid: h,
                  mediaType: W,
                  productId: $,
                })) != null
                  ? z
                  : void 0,
              campaign_id: n,
              campaign_send_ts: (Q = f.sendTimestamp) != null ? Q : void 0,
              character_cnt: v.length,
              client_campaign_id: a == null ? void 0 : a.campaignId,
              created_from_client_campaign_id:
                (X = a == null ? void 0 : a.sourceCampaignId) != null
                  ? X
                  : void 0,
              has_catalog: h != null,
              has_document_attachments:
                W === o("WAWebMsgType").MSG_TYPE.DOCUMENT,
              has_trackable_link: y != null,
              inserted_buttons: (Y = K(H)) != null ? Y : void 0,
              integrity_status: e.status,
              is_duplicate_bb:
                (a == null ? void 0 : a.isDuplicate) === !0 ? !0 : void 0,
              is_web_imported_list:
                (J = M == null ? void 0 : M.isWebCreatedList) != null ? J : !1,
              photo_cnt: W === o("WAWebMsgType").MSG_TYPE.IMAGE ? 1 : 0,
              recipient_cnt: A.length,
              scheduled: !1,
              video_cnt: W === o("WAWebMsgType").MSG_TYPE.VIDEO ? 1 : 0,
            }),
            !0
          );
        }
        await j(U, t, n, g, A, h, $, W, b);
      } catch (e) {
        if (
          e ===
            o("WAWebPendingBusinessBroadcastAPI").AD_GROUP_NOT_FOUND_ERROR &&
          !p
        )
          return (
            o("WALogger").LOG(
              D ||
                (D = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:campaign-notification] Ad Group ID not found, presuming notification was meant for primary device",
                ])),
            ),
            !1
          );
        if (p) {
          var Z, ee;
          o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.sendBroadcastPostSendError(
            s,
            e === o("WAWebPendingBusinessBroadcastAPI").AD_GROUP_NOT_FOUND_ERROR
              ? o("WAWebPendingBusinessBroadcastAPI").AD_GROUP_NOT_FOUND_ERROR
              : String(
                  (Z =
                    (ee = r("getErrorSafe")(e)) == null
                      ? void 0
                      : ee.message) != null
                    ? Z
                    : e,
                ),
          );
        }
        if (
          e === o("WAWebPendingBusinessBroadcastAPI").AD_GROUP_NOT_FOUND_ERROR
        )
          return !1;
        if (
          (o("WALogger")
            .ERROR(
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:campaign-notification] Failed to create pending broadcast",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          l != null && (await q({ adGroupId: t, adId: n, broadcastJid: l })),
          !p)
        ) {
          var te, ne, re;
          o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.sendBroadcastDeliveryResult(
            s,
            "failure",
            ((te = u) == null ? void 0 : te.name) != null
              ? o("WAWebFileUtils").getFileExtension(u.name)
              : null,
            String(
              (ne =
                (re = r("getErrorSafe")(e)) == null ? void 0 : re.message) !=
                null
                ? ne
                : e,
            ),
            "unknown",
            o("WAWebBizBroadcastMediaProcessor").getAttachmentType({
              catalogWid: c,
              mediaType: m,
              productId: d,
            }),
          );
        }
      }
      return !1;
    }
    async function j(e, t, n, r, a, i, l, s, u) {
      var c = e.ackErrorCode;
      o("WALogger").LOG(
        $ ||
          ($ = babelHelpers.taggedTemplateLiteralLoose([
            "[broadcast:campaign-notification] Failed to send broadcast, recipients count: ",
            ", broadcast list ID: ",
            ", campaign_id: ",
            ", ackError: ",
            "",
          ])),
        a.length,
        r,
        n,
        c,
      );
      var d = e == null ? void 0 : e.msgId;
      if (d != null) {
        var m = await o(
          "WAWebBizBroadcastCampaignAPI",
        ).getBizBroadcastCampaignByAdGroupId(t);
        m != null &&
          (await o(
            "WAWebBizBroadcastCampaignAPI",
          ).updateBizBroadcastCampaignMsgId(
            m.campaignId,
            o("WAWebBizBroadcastCampaignMsgKeyUtils").extractStanzaId(d),
          ));
      }
      await q({ adGroupId: t, adId: n, broadcastJid: r });
      var p = M(c);
      o(
        "WAWebBusinessBroadcastUserJourneyLogger",
      ).BusinessBroadcastUserJourneyLogger.sendBroadcastDeliveryResult(
        a.length,
        "failure",
        (u == null ? void 0 : u.name) != null
          ? o("WAWebFileUtils").getFileExtension(u.name)
          : null,
        "Broadcast message send failed",
        p,
        o("WAWebBizBroadcastMediaProcessor").getAttachmentType({
          catalogWid: i,
          mediaType: s,
          productId: l,
        }),
      );
    }
    function K(e) {
      if (e == null) return "[]";
      try {
        var t = JSON.parse(e);
        if (!Array.isArray(t.buttons)) return null;
        var n = [];
        for (var r of t.buttons) {
          var a =
            r.name === "quick_reply"
              ? "CTA_QUICK_REPLY"
              : r.name === "cta_url"
                ? "CTA_URL"
                : r.name === "cta_call"
                  ? "CTA_CALL"
                  : r.name === "cta_catalog"
                    ? "CTA_CATALOG"
                    : null;
          if (a == null) return null;
          n.push(a);
        }
        return JSON.stringify(n);
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:campaign-notification] Unable to parse sent CTA types for campaign acknowledgement",
                ])),
            )
            .sendLogs("business-broadcast-inserted-buttons-parse-failed"),
          null
        );
      }
    }
    l.processCampaignNotification = H;
  },
  98,
);
