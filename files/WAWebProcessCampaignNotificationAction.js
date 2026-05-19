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
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D;
    function x(e) {
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
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o(
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
          var i = yield o("WAWebSchemaPendingBusinessBroadcastMessage")
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
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
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
    function M(e, t, n) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i = yield o(
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
                N(u),
                c,
              );
            (yield o(
              "WAWebBizBroadcastCampaignNotifier",
            ).updateCampaignWithSyncAndNotify(i.campaignId, s, [d]),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-notification] Updated campaign status to SENT",
                  ])),
              ),
              l != null &&
                (yield o("WAWebSchemaPendingBusinessBroadcastMessage")
                  .getPendingBusinessBroadcastMessageTable()
                  .remove(l)));
          }
        })),
        w.apply(this, arguments)
      );
    }
    function A(e, t) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
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
                N(i),
                l,
              );
            (yield o(
              "WAWebBizBroadcastCampaignNotifier",
            ).updateCampaignWithSyncAndNotify(n.campaignId, a, [u]),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-notification] Updated campaign status to FAILED",
                  ])),
              ));
          }
        })),
        F.apply(this, arguments)
      );
    }
    function O(e, t, n, r, o, a) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            var l = o("WAWebWidFactory").createWid(e);
            yield o("WAWebCatalogCollection").CatalogCollection.findProduct({
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
            p != null && (yield p.triggerImageUpdate());
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
            var f = yield o(
                "WAWebBizBroadcastMediaProcessor",
              ).processMediaForBroadcast(_, n.length, r, a),
              g = f.freshMedia,
              h = f.mediaMsgData,
              y = o("WAWebBroadcastMsgDataUtils").createBroadcastProductMsgData(
                h,
                m,
              );
            return o("WAWebSendBroadcastMsgAction").sendBroadcastMsgAction({
              beforeSend: o(
                "WAWebBizBroadcastMediaProcessor",
              ).createBroadcastMediaUploadCallback(g.type),
              businessMetadata: i,
              msgData: y,
              recipients: n,
            });
          },
        )),
        B.apply(this, arguments)
      );
    }
    function W(e, t, n, r, o, a) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            var l = o("WAWebWidFactory").createWid(e);
            yield o("WAWebCatalogCollection").CatalogCollection.find(l);
            var s = o("WAWebCatalogCollection").CatalogCollection.get(l),
              u = s == null ? void 0 : s.getMostRecentlyApprovedProduct(),
              c = u == null ? void 0 : u.getProductImageCollectionHead();
            c != null && (yield c.triggerImageUpdate());
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
                      (u == null
                        ? void 0
                        : u.getProductImageCollectionHead()) != null,
                    ),
                  )
                  .sendLogs("business-broadcast-full-catalog-send-failed"),
                null
              );
            var p = JSON.parse(a),
              _ = yield o(
                "WAWebBizBroadcastMediaProcessor",
              ).processMediaWithCTAForBroadcast(m, t.length, n, r, p),
              f = _.freshMedia,
              g = _.mediaMsgData,
              h = yield o("WAWebSendBroadcastMsgAction").sendBroadcastMsgAction(
                {
                  beforeSend: o(
                    "WAWebBizBroadcastMediaProcessor",
                  ).createBroadcastMediaUploadCallback(f.type),
                  businessMetadata: i,
                  msgData: g,
                  recipients: t,
                },
              );
            return { mediaType: f.type, result: h };
          },
        )),
        q.apply(this, arguments)
      );
    }
    function U(e, t, n) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          (yield o("WAWebPendingBusinessBroadcastAPI").deletePendingBroadcast(
            e,
          ),
            yield A(e, t),
            yield o(
              "WAWebBizBroadcastSystemMessageManager",
            ).updateBizBroadcastSystemMessage(n));
        })),
        V.apply(this, arguments)
      );
    }
    function H(e, t) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.adGroupId,
            r = e.adId,
            a = e.broadcastJid,
            i = e.businessMetadata,
            l = e.catalogWid,
            s = e.ctaButtonJson,
            u = e.productId,
            c = e.recipients;
          if (l == null) return null;
          var d = o("WAWebBizBroadcastMediaProcessor").getAttachmentType(
            l,
            u,
            null,
          );
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
            var f = yield O(l, u, c, a, t, i);
            return f == null
              ? (yield U(n, r, a),
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.sendBroadcastResult(
                  c.length,
                  "failure",
                  null,
                  "Product fetch or image download failed",
                  "unknown",
                  d,
                ),
                null)
              : { mediaType: null, result: f };
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
            var g = yield W(l, c, a, t, s, i);
            return g == null
              ? (yield U(n, r, a),
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.sendBroadcastResult(
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
            yield U(n, r, a),
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.sendBroadcastResult(
              c.length,
              "failure",
              null,
              "Invalid catalog state: missing productId and ctaButtonJson",
              "invalid_catalog_state",
              d,
            ),
            null
          );
        })),
        G.apply(this, arguments)
      );
    }
    function z(e) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              p = yield o(
                "WAWebBizBroadcastMediaProcessor",
              ).processMediaWithCTAForBroadcast(i, s.length, t, u, m),
              _ = p.freshMedia,
              y = p.mediaMsgData;
            ((d = _.type),
              (c = yield o(
                "WAWebSendBroadcastMsgAction",
              ).sendBroadcastMsgAction({
                beforeSend: o(
                  "WAWebBizBroadcastMediaProcessor",
                ).createBroadcastMediaUploadCallback(_.type),
                businessMetadata: n,
                msgData: y,
                recipients: s,
              })));
          } else {
            if (r != null) return H(e, u);
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
              var C = yield o(
                  "WAWebBizBroadcastMediaProcessor",
                ).processMediaForBroadcast(i, s.length, t, u),
                b = C.freshMedia,
                v = C.mediaMsgData;
              ((d = b.type),
                (c = yield o(
                  "WAWebSendBroadcastMsgAction",
                ).sendBroadcastMsgAction({
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
                R = yield o(
                  "WAWebBroadcastMsgDataUtils",
                ).createBroadcastInteractiveMsgData(t, u, S);
              c = yield o("WAWebSendBroadcastMsgAction").sendBroadcastMsgAction(
                { businessMetadata: n, msgData: R, recipients: s },
              );
            } else {
              var L = yield o(
                "WAWebBroadcastMsgDataUtils",
              ).createBroadcastTextMsgData(t, u);
              c = yield o("WAWebSendBroadcastMsgAction").sendBroadcastMsgAction(
                { businessMetadata: n, msgData: L, recipients: s },
              );
            }
          }
          return { mediaType: d, result: c };
        })),
        j.apply(this, arguments)
      );
    }
    function K(e) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.adGroupId,
            n = e.adId;
          if (t == null || n == null)
            return (
              o("WALogger").ERROR(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-notification] Missing required params",
                  ])),
              ),
              !1
            );
          o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:campaign-notification] Retrieving pending broadcast for ad_group_id: ",
                "",
              ])),
            t,
          );
          var a = yield o(
            "WAWebBizBroadcastCampaignAPI",
          ).getBizBroadcastCampaignByAdGroupId(t);
          if (a == null)
            return (
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-notification] Ad Group ID not found, presuming notification was meant for primary device",
                  ])),
              ),
              !1
            );
          var i = o("WAWebUserPrefsMeUser")
            .getMeDevicePnOrThrow_DO_NOT_USE()
            .getDeviceId();
          if (a.deviceId !== i)
            return (
              o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-notification] Campaign was created on device ",
                    ", skipping on current device ",
                    "",
                  ])),
                a.deviceId,
                i,
              ),
              !1
            );
          if (e.status === "INTEGRITY_NOT_CLEARED") {
            (o("WALogger").LOG(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:campaign-notification] Integrity not cleared for campaign, ad_group_id: ",
                  "",
                ])),
              t,
            ),
              yield o(
                "WAWebPendingBusinessBroadcastAPI",
              ).deletePendingBroadcast(t),
              yield A(t, n));
            var l = yield o(
              "WAWebBizBroadcastCampaignAPI",
            ).getBizBroadcastCampaignByAdGroupId(t);
            return (
              (l == null ? void 0 : l.broadcastJid) != null &&
                (yield o(
                  "WAWebBizBroadcastSystemMessageManager",
                ).updateBizBroadcastSystemMessage(l.broadcastJid)),
              o(
                "WAWebBusinessBroadcastUserJourneyLogger",
              ).BusinessBroadcastUserJourneyLogger.sendBroadcastResult(
                0,
                "failure",
                null,
                "integrity_permanent_blocked",
                "integrity_permanent_blocked",
              ),
              !1
            );
          }
          var s = null;
          try {
            var u,
              c = yield $(t);
            if (c == null)
              return (
                o("WALogger").LOG(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:campaign-notification] Pending broadcast data not found for campaign",
                    ])),
                ),
                !1
              );
            var d = c.broadcastJid,
              m = c.catalogWid,
              p = c.ctaButtonJson,
              _ = c.freeReservedMsgs,
              f = c.mediaFile,
              g = c.messageBody,
              h = c.productId;
            s = d;
            var D = babelHelpers.extends(
              { campaign_id: n },
              _ != null ? { free_reserved_msgs: String(_) } : null,
            );
            if (g == null || d == null)
              return (
                o("WALogger").LOG(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:campaign-notification] Message not found for broadcast",
                    ])),
                ),
                d != null && (yield U(t, n, d)),
                !1
              );
            var x = o("WAWebWidFactory").createWid(d),
              P = yield o("WAWebBroadcastDatabaseJob").getBroadcastMetadataJob(
                x,
              ),
              N = (
                (u = P == null ? void 0 : P.recipients) != null ? u : []
              ).map(function (e) {
                return o("WAWebWidFactory").createUserLidOrThrow(e);
              });
            o("WALogger").LOG(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:campaign-notification] retrieved metadata with recipients count: ",
                  " for broadcast list ID: ",
                  "",
                ])),
              N.length,
              d,
            );
            var w = yield z({
              adGroupId: t,
              adId: n,
              broadcastJid: d,
              businessMetadata: D,
              catalogWid: m,
              ctaButtonJson: p,
              freeReservedMsgs: _,
              mediaFile: f,
              messageBody: g,
              productId: h,
              recipients: N,
            });
            if (w == null) return !1;
            var F = w.mediaType,
              O = w.result;
            if (
              O.messageSendResult ===
              o("WAWebSendMsgResultAction").SendMsgResult.OK
            ) {
              var B, W, q;
              return (
                o("WALogger").LOG(
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:campaign-notification] Broadcast sent successfully, recipients count: ",
                      ", broadcast list ID: ",
                      ", campaign_id: ",
                      "",
                    ])),
                  N.length,
                  d,
                  n,
                ),
                yield M(
                  t,
                  n,
                  O.msgId != null
                    ? o("WAWebBizBroadcastCampaignMsgKeyUtils").extractStanzaId(
                        O.msgId,
                      )
                    : null,
                ),
                yield o(
                  "WAWebBizBroadcastSystemMessageManager",
                ).updateBizBroadcastSystemMessage(d),
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.sendCampaignAck({
                  attachment_type:
                    (B = o("WAWebBizBroadcastMediaProcessor").getAttachmentType(
                      m,
                      h,
                      F,
                    )) != null
                      ? B
                      : void 0,
                  campaign_id: n,
                  campaign_send_ts: (W = c.sendTimestamp) != null ? W : void 0,
                  character_cnt: g.length,
                  client_campaign_id: a == null ? void 0 : a.campaignId,
                  has_catalog: m != null,
                  has_document_attachments:
                    F === o("WAWebMsgType").MSG_TYPE.DOCUMENT,
                  has_trackable_link: p != null,
                  integrity_status: e.status,
                  is_web_imported_list:
                    (q = P == null ? void 0 : P.isWebCreatedList) != null
                      ? q
                      : !1,
                  photo_cnt: F === o("WAWebMsgType").MSG_TYPE.IMAGE ? 1 : 0,
                  recipient_cnt: N.length,
                  scheduled: !1,
                  video_cnt: F === o("WAWebMsgType").MSG_TYPE.VIDEO ? 1 : 0,
                }),
                !0
              );
            }
            yield X(O, t, n, d, N, m, h, F, f);
          } catch (e) {
            var V, H;
            if (
              e ===
              o("WAWebPendingBusinessBroadcastAPI").AD_GROUP_NOT_FOUND_ERROR
            )
              return (
                o("WALogger").LOG(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:campaign-notification] Ad Group ID not found, presuming notification was meant for primary device",
                    ])),
                ),
                !1
              );
            (o("WALogger")
              .ERROR(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-notification] Failed to create pending broadcast",
                  ])),
              )
              .catching(r("getErrorSafe")(e)),
              s != null && (yield U(t, n, s)),
              o(
                "WAWebBusinessBroadcastUserJourneyLogger",
              ).BusinessBroadcastUserJourneyLogger.sendBroadcastResult(
                0,
                "failure",
                null,
                String(
                  (V =
                    (H = r("getErrorSafe")(e)) == null ? void 0 : H.message) !=
                    null
                    ? V
                    : e,
                ),
                "unknown",
              ));
          }
          return !1;
        })),
        Q.apply(this, arguments)
      );
    }
    function X(e, t, n, r, o, a, i, l, s) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i, l, s, u) {
            var c = e.ackErrorCode;
            o("WALogger").LOG(
              D ||
                (D = babelHelpers.taggedTemplateLiteralLoose([
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
              var m = yield o(
                "WAWebBizBroadcastCampaignAPI",
              ).getBizBroadcastCampaignByAdGroupId(t);
              m != null &&
                (yield o(
                  "WAWebBizBroadcastCampaignAPI",
                ).updateBizBroadcastCampaignMsgId(
                  m.campaignId,
                  o("WAWebBizBroadcastCampaignMsgKeyUtils").extractStanzaId(d),
                ));
            }
            yield U(t, n, r);
            var p = x(c);
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.sendBroadcastResult(
              a.length,
              "failure",
              u != null ? o("WAWebFileUtils").getFileExtension(u.name) : null,
              "Broadcast message send failed",
              p,
              o("WAWebBizBroadcastMediaProcessor").getAttachmentType(i, l, s),
            );
          },
        )),
        Y.apply(this, arguments)
      );
    }
    l.processCampaignNotification = K;
  },
  98,
);
