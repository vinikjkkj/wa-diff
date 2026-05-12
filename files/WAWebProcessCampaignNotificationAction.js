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
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T;
    function D(e) {
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
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        $.apply(this, arguments)
      );
    }
    function P(e) {
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
    function N(e, t, n) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
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
                P(u),
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
        M.apply(this, arguments)
      );
    }
    function w(e, t) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                P(i),
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
        A.apply(this, arguments)
      );
    }
    function F(e, t, n, r, o, a) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(
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
        O.apply(this, arguments)
      );
    }
    function B(e, t, n, r, o, a) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            var l = o("WAWebWidFactory").createWid(e);
            yield o("WAWebCatalogCollection").CatalogCollection.find(l);
            var s = o("WAWebCatalogCollection").CatalogCollection.get(l),
              u = s == null ? void 0 : s.getMostRecentlyApprovedProduct(),
              c = u == null ? void 0 : u.getProductImageCollectionHead();
            c != null && (yield c.triggerImageUpdate());
            var d = u == null ? void 0 : u.getHeadImageFile();
            if (d == null) return null;
            var m = JSON.parse(a),
              p = yield o(
                "WAWebBizBroadcastMediaProcessor",
              ).processMediaWithCTAForBroadcast(d, t.length, n, r, m),
              _ = p.freshMedia,
              f = p.mediaMsgData,
              g = yield o("WAWebSendBroadcastMsgAction").sendBroadcastMsgAction(
                {
                  beforeSend: o(
                    "WAWebBizBroadcastMediaProcessor",
                  ).createBroadcastMediaUploadCallback(_.type),
                  businessMetadata: i,
                  msgData: f,
                  recipients: t,
                },
              );
            return { mediaType: _.type, result: g };
          },
        )),
        W.apply(this, arguments)
      );
    }
    function q(e, t, n) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          (yield o("WAWebPendingBusinessBroadcastAPI").deletePendingBroadcast(
            e,
          ),
            yield w(e, t),
            yield o(
              "WAWebBizBroadcastSystemMessageManager",
            ).updateBizBroadcastSystemMessage(n));
        })),
        U.apply(this, arguments)
      );
    }
    function V(e, t) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.adGroupId,
            r = e.adId,
            a = e.broadcastJid,
            i = e.businessMetadata,
            l = e.catalogWid,
            s = e.ctaButtonJson,
            u = e.productId,
            c = e.recipients;
          if (l == null) return null;
          if (u != null) {
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:campaign-notification] Sending single product broadcast, listId=",
                  ", catalogWid=",
                  ", productId=",
                  "",
                ])),
              a,
              l,
              u,
            );
            var _ = yield F(l, u, c, a, t, i);
            return _ == null
              ? (yield q(n, r, a),
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.sendBroadcastResult(
                  c.length,
                  "failure",
                  null,
                  "Product fetch or image download failed",
                  "unknown",
                ),
                null)
              : { mediaType: null, result: _ };
          }
          if (s != null) {
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:campaign-notification] Sending full catalog broadcast, listId=",
                  ", catalogWid=",
                  "",
                ])),
              a,
              l,
            );
            var f = yield B(l, c, a, t, s, i);
            return f == null
              ? (yield q(n, r, a),
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.sendBroadcastResult(
                  c.length,
                  "failure",
                  null,
                  "Catalog product or image not available",
                  "unknown",
                ),
                null)
              : f;
          }
          return (
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:campaign-notification] Invalid catalog state: catalogWid=",
                  " but no productId or ctaButtonJson",
                ])),
              l,
            ),
            yield q(n, r, a),
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.sendBroadcastResult(
              c.length,
              "failure",
              null,
              "Invalid catalog state: missing productId and ctaButtonJson",
              "invalid_catalog_state",
            ),
            null
          );
        })),
        H.apply(this, arguments)
      );
    }
    function G(e) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
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
              h = p.freshMedia,
              y = p.mediaMsgData;
            ((d = h.type),
              (c = yield o(
                "WAWebSendBroadcastMsgAction",
              ).sendBroadcastMsgAction({
                beforeSend: o(
                  "WAWebBizBroadcastMediaProcessor",
                ).createBroadcastMediaUploadCallback(h.type),
                businessMetadata: n,
                msgData: y,
                recipients: s,
              })));
          } else {
            if (r != null) return V(e, u);
            if (i != null) {
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
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
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
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
        z.apply(this, arguments)
      );
    }
    function j(e) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.adGroupId,
            n = e.adId;
          if (t == null || n == null)
            return (
              o("WALogger").ERROR(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-notification] Missing required params",
                  ])),
              ),
              !1
            );
          o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
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
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
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
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
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
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:campaign-notification] Integrity not cleared for campaign, ad_group_id: ",
                  "",
                ])),
              t,
            ),
              yield o(
                "WAWebPendingBusinessBroadcastAPI",
              ).deletePendingBroadcast(t),
              yield w(t, n));
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
              c = yield x(t);
            if (c == null)
              return (
                o("WALogger").LOG(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
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
              $ = c.productId;
            s = d;
            var P = babelHelpers.extends(
              { campaign_id: n },
              _ != null ? { free_reserved_msgs: String(_) } : null,
            );
            if (g == null || d == null)
              return (
                o("WALogger").LOG(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:campaign-notification] Message not found for broadcast",
                    ])),
                ),
                d != null && (yield q(t, n, d)),
                !1
              );
            var M = o("WAWebWidFactory").createWid(d),
              A = yield o("WAWebBroadcastDatabaseJob").getBroadcastMetadataJob(
                M,
              ),
              F = (
                (u = A == null ? void 0 : A.recipients) != null ? u : []
              ).map(function (e) {
                return o("WAWebWidFactory").createUserLidOrThrow(e);
              });
            o("WALogger").LOG(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:campaign-notification] retrieved metadata with recipients count: ",
                  " for broadcast list ID: ",
                  "",
                ])),
              F.length,
              d,
            );
            var O = yield G({
              adGroupId: t,
              adId: n,
              broadcastJid: d,
              businessMetadata: P,
              catalogWid: m,
              ctaButtonJson: p,
              freeReservedMsgs: _,
              mediaFile: f,
              messageBody: g,
              productId: $,
              recipients: F,
            });
            if (O == null) return !1;
            var B = O.mediaType,
              W = O.result;
            if (
              W.messageSendResult ===
              o("WAWebSendMsgResultAction").SendMsgResult.OK
            ) {
              var U, V;
              return (
                o("WALogger").LOG(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:campaign-notification] Broadcast sent successfully, recipients count: ",
                      ", broadcast list ID: ",
                      ", campaign_id: ",
                      "",
                    ])),
                  F.length,
                  d,
                  n,
                ),
                yield N(
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
                ).updateBizBroadcastSystemMessage(d),
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.sendCampaignAck({
                  campaign_id: n,
                  campaign_send_ts: (U = c.sendTimestamp) != null ? U : void 0,
                  character_cnt: g.length,
                  client_campaign_id: a == null ? void 0 : a.campaignId,
                  has_catalog: m != null,
                  has_document_attachments:
                    B === o("WAWebMsgType").MSG_TYPE.DOCUMENT,
                  has_trackable_link: p != null,
                  integrity_status: e.status,
                  is_web_imported_list:
                    (V = A == null ? void 0 : A.isWebCreatedList) != null
                      ? V
                      : !1,
                  photo_cnt: B === o("WAWebMsgType").MSG_TYPE.IMAGE ? 1 : 0,
                  recipient_cnt: F.length,
                  scheduled: !1,
                  video_cnt: B === o("WAWebMsgType").MSG_TYPE.VIDEO ? 1 : 0,
                }),
                !0
              );
            }
            var H = W.ackErrorCode;
            o("WALogger").LOG(
              k ||
                (k = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:campaign-notification] Failed to send broadcast, recipients count: ",
                  ", broadcast list ID: ",
                  ", campaign_id: ",
                  ", ackError: ",
                  "",
                ])),
              F.length,
              d,
              n,
              H,
            );
            var z = W == null ? void 0 : W.msgId;
            if (z != null) {
              var j = yield o(
                "WAWebBizBroadcastCampaignAPI",
              ).getBizBroadcastCampaignByAdGroupId(t);
              j != null &&
                (yield o(
                  "WAWebBizBroadcastCampaignAPI",
                ).updateBizBroadcastCampaignMsgId(
                  j.campaignId,
                  o("WAWebBizBroadcastCampaignMsgKeyUtils").extractStanzaId(z),
                ));
            }
            yield q(t, n, d);
            var K = D(H);
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.sendBroadcastResult(
              F.length,
              "failure",
              f != null ? o("WAWebFileUtils").getFileExtension(f.name) : null,
              "Broadcast message send failed",
              K,
            );
          } catch (e) {
            var Q, X;
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
              s != null && (yield q(t, n, s)),
              o(
                "WAWebBusinessBroadcastUserJourneyLogger",
              ).BusinessBroadcastUserJourneyLogger.sendBroadcastResult(
                0,
                "failure",
                null,
                String(
                  (Q =
                    (X = r("getErrorSafe")(e)) == null ? void 0 : X.message) !=
                    null
                    ? Q
                    : e,
                ),
                "unknown",
              ));
          }
          return !1;
        })),
        K.apply(this, arguments)
      );
    }
    l.processCampaignNotification = j;
  },
  98,
);
