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
      P = new Map();
    function N(e) {
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
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        w.apply(this, arguments)
      );
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
    function F(e, t, n) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = yield o(
            "WAWebBizBroadcastCampaignAPI",
          ).getBizBroadcastCampaignByAdGroupId(e);
          if (a != null) {
            var i = a.pendingBroadcastMessageId,
              l = {
                adId: t,
                msgId: n != null ? n : a.msgId,
                pendingBroadcastMessageId: null,
                status: o("WAWebSchemaBusinessBroadcastCampaign")
                  .BusinessBroadcastCampaignStatus.SENT,
              },
              u = babelHelpers.extends({}, a, l),
              c = Date.now(),
              d = r("WAWebBroadcastCampaignSync").getCampaignMutation(
                a.campaignId,
                A(u),
                c,
              );
            (yield o(
              "WAWebBizBroadcastCampaignNotifier",
            ).updateCampaignWithSyncAndNotify(a.campaignId, l, [d]),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-notification] Updated campaign status to SENT",
                  ])),
              ),
              i != null &&
                (yield o("WAWebSchemaPendingBusinessBroadcastMessage")
                  .getPendingBusinessBroadcastMessageTable()
                  .remove(i)));
          }
        })),
        O.apply(this, arguments)
      );
    }
    function B(e, t) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
              s = r("WAWebBroadcastCampaignSync").getCampaignMutation(
                n.campaignId,
                A(i),
                l,
              );
            (yield o(
              "WAWebBizBroadcastCampaignNotifier",
            ).updateCampaignWithSyncAndNotify(n.campaignId, a, [s]),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-notification] Updated campaign status to FAILED",
                  ])),
              ));
          }
        })),
        W.apply(this, arguments)
      );
    }
    function q(e, t, n, r, o, a) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            var l = o("WAWebWidFactory").createWid(e);
            yield o("WAWebCatalogCollection").CatalogCollection.findProduct({
              catalogWid: l,
              productId: t,
            });
            var s = o("WAWebCatalogCollection").CatalogCollection.get(l),
              u = s == null ? void 0 : s.productCollection.get(t);
            if (u == null)
              return (
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:campaign-notification] Product not found in catalog after findProduct",
                    ])),
                ),
                null
              );
            var m = o("WAWebProductCatalogMessage").createProductMsgSnapshot(u),
              p = u.getProductImageCollectionHead();
            p != null && (yield p.triggerImageUpdate());
            var _ = u.getHeadImageFile();
            if (_ == null)
              return (
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
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
        U.apply(this, arguments)
      );
    }
    function V(e, t, n, r, o, a) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            var l = o("WAWebWidFactory").createWid(e);
            yield o("WAWebCatalogCollection").CatalogCollection.find(l);
            var s = o("WAWebCatalogCollection").CatalogCollection.get(l),
              u = s == null ? void 0 : s.getMostRecentlyApprovedProduct(),
              c = u == null ? void 0 : u.getProductImageCollectionHead();
            c != null && (yield c.triggerImageUpdate());
            var d = u == null ? void 0 : u.getHeadImageFile();
            if (d == null)
              return (
                o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
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
              ).processMediaWithCTAForBroadcast(d, t.length, n, r, p),
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
        H.apply(this, arguments)
      );
    }
    function G(e) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.adGroupId,
            n = e.adId,
            r = e.broadcastJid;
          (yield o("WAWebPendingBusinessBroadcastAPI").deletePendingBroadcast(
            t,
          ),
            yield B(t, n),
            yield o(
              "WAWebBizBroadcastSystemMessageManager",
            ).updateBizBroadcastSystemMessage(r));
        })),
        z.apply(this, arguments)
      );
    }
    function j(e, t) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:campaign-notification] Sending single product broadcast, listId=",
                  ", catalogWid=",
                  ", productId=",
                  "",
                ])),
              a,
              l,
              u,
            );
            var m = yield q(l, u, c, a, t, i);
            return m == null
              ? (yield G({ adGroupId: n, adId: r, broadcastJid: a }),
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
              : { mediaType: null, result: m };
          }
          if (s != null) {
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:campaign-notification] Sending full catalog broadcast, listId=",
                  ", catalogWid=",
                  "",
                ])),
              a,
              l,
            );
            var g = yield V(l, c, a, t, s, i);
            return g == null
              ? (yield G({ adGroupId: n, adId: r, broadcastJid: a }),
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
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:campaign-notification] Invalid catalog state: catalogWid=",
                  " but no productId or ctaButtonJson",
                ])),
              l,
            ),
            yield G({ adGroupId: n, adId: r, broadcastJid: a }),
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
        K.apply(this, arguments)
      );
    }
    function Q(e) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
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
              f = p.mediaMsgData;
            ((d = _.type),
              (c = yield o(
                "WAWebSendBroadcastMsgAction",
              ).sendBroadcastMsgAction({
                beforeSend: o(
                  "WAWebBizBroadcastMediaProcessor",
                ).createBroadcastMediaUploadCallback(_.type),
                businessMetadata: n,
                msgData: f,
                recipients: s,
              })));
          } else {
            if (r != null) return j(e, u);
            if (i != null) {
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
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
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
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
        X.apply(this, arguments)
      );
    }
    function Y(t) {
      var n = t.adGroupId,
        r = P.get(n);
      if (r != null)
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:campaign-notification] Send already in progress for ad_group_id: ",
                "",
              ])),
            n,
          ),
          r
        );
      var a = ee(t).finally(function () {
        P.delete(n);
      });
      return (P.set(n, a), a);
    }
    function J(e) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
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
          var n = o("WAWebUserPrefsMeUser")
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
        })),
        Z.apply(this, arguments)
      );
    }
    function ee(e) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          var a = yield J(t);
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
              yield o(
                "WAWebPendingBusinessBroadcastAPI",
              ).deletePendingBroadcast(t),
              yield B(t, n));
            var i = yield o(
              "WAWebBizBroadcastCampaignAPI",
            ).getBizBroadcastCampaignByAdGroupId(t);
            return (
              (i == null ? void 0 : i.broadcastJid) != null &&
                (yield o(
                  "WAWebBizBroadcastSystemMessageManager",
                ).updateBizBroadcastSystemMessage(i.broadcastJid)),
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
          var l = null,
            s = 0,
            u = null,
            c = null,
            d = null,
            m = null;
          try {
            var p,
              _ = yield M(t);
            if (_ == null)
              return (
                o("WALogger").LOG(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:campaign-notification] Pending broadcast data not found for campaign",
                    ])),
                ),
                !1
              );
            var f = _.broadcastJid,
              g = _.catalogWid,
              h = _.ctaButtonJson,
              y = _.freeReservedMsgs,
              C = _.mediaFile,
              b = _.messageBody,
              v = _.productId;
            ((l = f), (u = C), (c = g), (d = v));
            var $ = babelHelpers.extends(
              { campaign_id: n },
              y != null ? { free_reserved_msgs: String(y) } : null,
            );
            if (b == null || f == null)
              return (
                o("WALogger").LOG(
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:campaign-notification] Message not found for broadcast",
                    ])),
                ),
                f != null &&
                  (yield G({ adGroupId: t, adId: n, broadcastJid: f })),
                !1
              );
            var P = o("WAWebWidFactory").createWid(f),
              N = yield o("WAWebBroadcastDatabaseJob").getBroadcastMetadataJob(
                P,
              ),
              w = (
                (p = N == null ? void 0 : N.recipients) != null ? p : []
              ).map(function (e) {
                return o("WAWebWidFactory").createUserLidOrThrow(e);
              });
            ((s = w.length),
              o("WALogger").LOG(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-notification] retrieved metadata with recipients count: ",
                    " for broadcast list ID: ",
                    "",
                  ])),
                w.length,
                f,
              ));
            var A = yield Q({
              adGroupId: t,
              adId: n,
              broadcastJid: f,
              businessMetadata: $,
              catalogWid: g,
              ctaButtonJson: h,
              freeReservedMsgs: y,
              mediaFile: C,
              messageBody: b,
              productId: v,
              recipients: w,
            });
            if (A == null) return !1;
            var O = A.mediaType,
              W = A.result;
            if (
              ((m = O),
              W.messageSendResult ===
                o("WAWebSendMsgResultAction").SendMsgResult.OK)
            ) {
              var q, U, V, H;
              return (
                o("WALogger").LOG(
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:campaign-notification] Broadcast sent successfully, recipients count: ",
                      ", broadcast list ID: ",
                      ", campaign_id: ",
                      "",
                    ])),
                  w.length,
                  f,
                  n,
                ),
                yield F(
                  t,
                  n,
                  W.msgId != null
                    ? o("WAWebBizBroadcastCampaignMsgKeyUtils").extractStanzaId(
                        W.msgId,
                      )
                    : null,
                ),
                yield o(
                  "WAWebBizBroadcastSystemMessageManager",
                ).updateBizBroadcastSystemMessage(f),
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.sendCampaignAck({
                  attachment_type:
                    (q = o("WAWebBizBroadcastMediaProcessor").getAttachmentType(
                      { catalogWid: g, mediaType: O, productId: v },
                    )) != null
                      ? q
                      : void 0,
                  campaign_id: n,
                  campaign_send_ts: (U = _.sendTimestamp) != null ? U : void 0,
                  character_cnt: b.length,
                  client_campaign_id: a == null ? void 0 : a.campaignId,
                  created_from_client_campaign_id:
                    (V = a == null ? void 0 : a.sourceCampaignId) != null
                      ? V
                      : void 0,
                  has_catalog: g != null,
                  has_document_attachments:
                    O === o("WAWebMsgType").MSG_TYPE.DOCUMENT,
                  has_trackable_link: h != null,
                  integrity_status: e.status,
                  is_duplicate_bb:
                    (a == null ? void 0 : a.isDuplicate) === !0 ? !0 : void 0,
                  is_web_imported_list:
                    (H = N == null ? void 0 : N.isWebCreatedList) != null
                      ? H
                      : !1,
                  photo_cnt: O === o("WAWebMsgType").MSG_TYPE.IMAGE ? 1 : 0,
                  recipient_cnt: w.length,
                  scheduled: !1,
                  video_cnt: O === o("WAWebMsgType").MSG_TYPE.VIDEO ? 1 : 0,
                }),
                !0
              );
            }
            yield ne(W, t, n, f, w, g, v, O, C);
          } catch (e) {
            var z, j, K;
            if (
              e ===
              o("WAWebPendingBusinessBroadcastAPI").AD_GROUP_NOT_FOUND_ERROR
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
            (o("WALogger")
              .ERROR(
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-notification] Failed to create pending broadcast",
                  ])),
              )
              .catching(r("getErrorSafe")(e)),
              l != null &&
                (yield G({ adGroupId: t, adId: n, broadcastJid: l })),
              o(
                "WAWebBusinessBroadcastUserJourneyLogger",
              ).BusinessBroadcastUserJourneyLogger.sendBroadcastResult(
                s,
                "failure",
                ((z = u) == null ? void 0 : z.name) != null
                  ? o("WAWebFileUtils").getFileExtension(u.name)
                  : null,
                String(
                  (j =
                    (K = r("getErrorSafe")(e)) == null ? void 0 : K.message) !=
                    null
                    ? j
                    : e,
                ),
                "unknown",
                o("WAWebBizBroadcastMediaProcessor").getAttachmentType({
                  catalogWid: c,
                  mediaType: m,
                  productId: d,
                }),
              ));
          }
          return !1;
        })),
        te.apply(this, arguments)
      );
    }
    function ne(e, t, n, r, o, a, i, l, s) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i, l, s, u) {
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
            yield G({ adGroupId: t, adId: n, broadcastJid: r });
            var p = N(c);
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.sendBroadcastResult(
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
          },
        )),
        re.apply(this, arguments)
      );
    }
    l.processCampaignNotification = Y;
  },
  98,
);
