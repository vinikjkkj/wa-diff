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
    "WAWebFileUtils",
    "WAWebMsgType",
    "WAWebPendingBusinessBroadcastAPI",
    "WAWebPendingBusinessBroadcastSerialization",
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
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R;
    function L(e) {
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
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        k.apply(this, arguments)
      );
    }
    function I(e) {
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
    function T(e, t, n) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
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
                I(u),
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
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                I(i),
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
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.adGroupId,
            n = e.adId;
          if (t == null || n == null)
            return (
              o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-notification] Missing required params",
                  ])),
              ),
              !1
            );
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
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
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
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
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
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
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:campaign-notification] Integrity not cleared for campaign, ad_group_id: ",
                  "",
                ])),
              t,
            ),
              yield o(
                "WAWebPendingBusinessBroadcastAPI",
              ).deletePendingBroadcast(t),
              yield x(t, n));
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
            var k,
              I,
              D = yield E(t);
            if (D == null)
              return (
                o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:campaign-notification] Pending broadcast data not found for campaign",
                    ])),
                ),
                !1
              );
            var $ = D.broadcastJid,
              P = D.ctaButtonJson,
              N = D.freeReservedMsgs,
              M = D.mediaFile,
              w = D.messageBody;
            s = $;
            var A = babelHelpers.extends(
              { campaign_id: n },
              N != null ? { free_reserved_msgs: String(N) } : null,
            );
            if (w == null || $ == null)
              return (
                o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:campaign-notification] Message not found for broadcast",
                    ])),
                ),
                $ != null &&
                  (yield o(
                    "WAWebPendingBusinessBroadcastAPI",
                  ).deletePendingBroadcast(t),
                  yield x(t, n),
                  yield o(
                    "WAWebBizBroadcastSystemMessageManager",
                  ).updateBizBroadcastSystemMessage($)),
                !1
              );
            var F = o("WAWebWidFactory").createWid($),
              O = yield o("WAWebBroadcastDatabaseJob").getBroadcastMetadataJob(
                F,
              ),
              B = (
                (k = O == null ? void 0 : O.recipients) != null ? k : []
              ).map(function (e) {
                return o("WAWebWidFactory").createUserLidOrThrow(e);
              });
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:campaign-notification] retrieved metadata with recipients count: ",
                  " for broadcast list ID: ",
                  "",
                ])),
              B.length,
              $,
            );
            var W,
              q = null;
            if (M != null && P != null) {
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-notification] Sending interactive broadcast with media + CTA, listId=",
                    ", recipients=",
                    "",
                  ])),
                $,
                B.length,
              );
              var U = JSON.parse(P),
                V = yield o(
                  "WAWebBizBroadcastMediaProcessor",
                ).processMediaWithCTAForBroadcast(M, B.length, $, w, U),
                H = V.freshMedia,
                G = V.mediaMsgData;
              ((q = H.type),
                (W = yield o(
                  "WAWebSendBroadcastMsgAction",
                ).sendBroadcastMsgAction({
                  beforeSend: o(
                    "WAWebBizBroadcastMediaProcessor",
                  ).createBroadcastMediaUploadCallback(H.type),
                  businessMetadata: A,
                  msgData: G,
                  recipients: B,
                })));
            } else if (M != null) {
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-notification] Sending media broadcast with fresh processing, listId=",
                    ", recipients=",
                    "",
                  ])),
                $,
                B.length,
              );
              var z = yield o(
                  "WAWebBizBroadcastMediaProcessor",
                ).processMediaForBroadcast(M, B.length, $, w),
                j = z.freshMedia,
                K = z.mediaMsgData;
              ((q = j.type),
                (W = yield o(
                  "WAWebSendBroadcastMsgAction",
                ).sendBroadcastMsgAction({
                  beforeSend: o(
                    "WAWebBizBroadcastMediaProcessor",
                  ).createBroadcastMediaUploadCallback(j.type),
                  businessMetadata: A,
                  msgData: K,
                  recipients: B,
                })));
            } else if (P != null) {
              o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-notification] Sending interactive broadcast, listId=",
                    ", recipients=",
                    "",
                  ])),
                $,
                B.length,
              );
              var Q = JSON.parse(P),
                X = yield o(
                  "WAWebBroadcastMsgDataUtils",
                ).createBroadcastInteractiveMsgData($, w.trim(), Q);
              W = yield o("WAWebSendBroadcastMsgAction").sendBroadcastMsgAction(
                { businessMetadata: A, msgData: X, recipients: B },
              );
            } else {
              var Y = yield o(
                "WAWebBroadcastMsgDataUtils",
              ).createBroadcastTextMsgData($, w.trim());
              W = yield o("WAWebSendBroadcastMsgAction").sendBroadcastMsgAction(
                { businessMetadata: A, msgData: Y, recipients: B },
              );
            }
            if (
              W.messageSendResult ===
              o("WAWebSendMsgResultAction").SendMsgResult.OK
            ) {
              var J, Z;
              return (
                o("WALogger").LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:campaign-notification] Broadcast sent successfully, recipients count: ",
                      ", broadcast list ID: ",
                      ", campaign_id: ",
                      "",
                    ])),
                  B.length,
                  $,
                  n,
                ),
                yield T(
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
                ).updateBizBroadcastSystemMessage($),
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.sendCampaignAck({
                  campaign_id: n,
                  campaign_send_ts: (J = D.sendTimestamp) != null ? J : void 0,
                  character_cnt: w.length,
                  client_campaign_id: a == null ? void 0 : a.campaignId,
                  has_catalog: !1,
                  has_document_attachments:
                    q === o("WAWebMsgType").MSG_TYPE.DOCUMENT,
                  has_trackable_link: P != null,
                  integrity_status: e.status,
                  is_web_imported_list:
                    (Z = O == null ? void 0 : O.isWebCreatedList) != null
                      ? Z
                      : !1,
                  photo_cnt: q === o("WAWebMsgType").MSG_TYPE.IMAGE ? 1 : 0,
                  recipient_cnt: B.length,
                  scheduled: !1,
                  video_cnt: q === o("WAWebMsgType").MSG_TYPE.VIDEO ? 1 : 0,
                }),
                !0
              );
            }
            var ee = W.ackErrorCode;
            o("WALogger").LOG(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:campaign-notification] Failed to send broadcast, recipients count: ",
                  ", broadcast list ID: ",
                  ", campaign_id: ",
                  ", ackError: ",
                  "",
                ])),
              B.length,
              $,
              n,
              ee,
            );
            var te = (I = W) == null ? void 0 : I.msgId;
            if (te != null) {
              var ne = yield o(
                "WAWebBizBroadcastCampaignAPI",
              ).getBizBroadcastCampaignByAdGroupId(t);
              ne != null &&
                (yield o(
                  "WAWebBizBroadcastCampaignAPI",
                ).updateBizBroadcastCampaignMsgId(
                  ne.campaignId,
                  o("WAWebBizBroadcastCampaignMsgKeyUtils").extractStanzaId(te),
                ));
            }
            (yield o("WAWebPendingBusinessBroadcastAPI").deletePendingBroadcast(
              t,
            ),
              yield x(t, n),
              yield o(
                "WAWebBizBroadcastSystemMessageManager",
              ).updateBizBroadcastSystemMessage($));
            var re = L(ee);
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.sendBroadcastResult(
              B.length,
              "failure",
              M != null ? o("WAWebFileUtils").getFileExtension(M.name) : null,
              "Broadcast message send failed",
              re,
            );
          } catch (e) {
            var oe, ae;
            if (
              e ===
              o("WAWebPendingBusinessBroadcastAPI").AD_GROUP_NOT_FOUND_ERROR
            )
              return (
                o("WALogger").LOG(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:campaign-notification] Ad Group ID not found, presuming notification was meant for primary device",
                    ])),
                ),
                !1
              );
            (o("WALogger")
              .ERROR(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-notification] Failed to create pending broadcast",
                  ])),
              )
              .catching(r("getErrorSafe")(e)),
              s != null &&
                (yield o(
                  "WAWebPendingBusinessBroadcastAPI",
                ).deletePendingBroadcast(t),
                yield x(t, n),
                yield o(
                  "WAWebBizBroadcastSystemMessageManager",
                ).updateBizBroadcastSystemMessage(s)),
              o(
                "WAWebBusinessBroadcastUserJourneyLogger",
              ).BusinessBroadcastUserJourneyLogger.sendBroadcastResult(
                0,
                "failure",
                null,
                String(
                  (oe =
                    (ae = r("getErrorSafe")(e)) == null
                      ? void 0
                      : ae.message) != null
                    ? oe
                    : e,
                ),
                "unknown",
              ));
          }
          return !1;
        })),
        N.apply(this, arguments)
      );
    }
    l.processCampaignNotification = P;
  },
  98,
);
