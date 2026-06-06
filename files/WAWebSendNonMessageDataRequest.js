__d(
  "WAWebSendNonMessageDataRequest",
  [
    "WALogger",
    "WANullthrows",
    "WAShiftTimer",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiChatCommon",
    "WAWebApiPeerMessageStore",
    "WAWebCommsWapMd",
    "WAWebCurrentUser",
    "WAWebDBDeviceListFanout",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNonMessageDataRequestHandlerGalaxyFlow",
    "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
    "WAWebNonMessageDataRequestLoggingUtils",
    "WAWebNonMessageDataRequestMediaHandlingUtils",
    "WAWebNonMessageDataRequestPlaceholderMessageResendUtils",
    "WAWebProtobufMsgKeyUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebSendAppStateSyncMsgJob",
    "WAWebSendMsgCreateDeviceStanza",
    "WAWebSyncGatingUtils",
    "WAWebSyncdSnapshotRecoveryGatingUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumPeerDataResponseApplyResultType",
    "WAWebWidFactory",
    "gkx",
    "justknobx",
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
      b = 3e3;
    async function v(t, n, r) {
      var a = r != null ? r : {},
        i = a.skipStoringMessage,
        l = await S(t, n);
      if (l == null) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[rdu] peer data op request object is null",
            ])),
        );
        return;
      }
      var c = await R(l, r);
      if (c == null || c.length === 0) {
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[rdu] peer data operation request msg is null/empty",
            ])),
        );
        return;
      }
      var d = $(t),
        m = P(t);
      await Promise.all(
        c.map(async function (e) {
          (D(t, e),
            o(
              "WAWebNonMessageDataRequestLoggingUtils",
            ).logNonMessagePeerDataRequest(t, e),
            i !== !0 &&
              (await o("WAWebApiPeerMessageStore").storePeerMessages([e])),
            o("WAWebNonMessageDataRequestLoggingUtils").sendTimes.set(
              e.id.id,
              o("WATimeUtils").unixTimeMs(),
            ),
            await o("WAWebSendAppStateSyncMsgJob").encryptAndSendKeyMsg({
              msg: e,
              pushPriority: d != null ? d : void 0,
              privacySensitive: m != null ? m : void 0,
            }));
        }),
      );
      var p = c.slice(0, 3).map(function (e) {
        return e.id.id;
      });
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[rdu] rdu msgs built type=",
            " cnt=",
            " ids=",
            "",
          ])),
        t,
        c.length,
        p,
      );
    }
    async function S(e, t) {
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "[rdu] start building rdu request object, ## type: ",
            "",
          ])),
        e,
      );
      var n = {
        peerDataOperationRequestType: e,
        requestUrlPreview: [],
        requestStickerReupload: [],
        placeholderMessageResendRequest: [],
      };
      switch (e) {
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .SEND_RECENT_STICKER_BOOTSTRAP:
          break;
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .WAFFLE_LINKING_NONCE_FETCH:
          break;
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .UPLOAD_STICKER: {
          var r = L(t);
          if (r == null) return null;
          n.requestStickerReupload = r;
          break;
        }
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .GENERATE_LINK_PREVIEW: {
          var a = E(t);
          if (a == null) return null;
          n.requestUrlPreview = a;
          break;
        }
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .HISTORY_SYNC_ON_DEMAND: {
          var i = await I(t);
          if (i == null) return null;
          n.historySyncOnDemandRequest = i;
          break;
        }
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .PLACEHOLDER_MESSAGE_RESEND: {
          var l = T(t);
          if (l == null) return null;
          n.placeholderMessageResendRequest = l;
          break;
        }
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .FULL_HISTORY_SYNC_ON_DEMAND: {
          o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "full history sync on demand not supported in web",
              ])),
          );
          break;
        }
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .COMPANION_META_NONCE_FETCH: {
          o("WALogger").WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "companion meta nonce fetch is not supported in web",
              ])),
          );
          break;
        }
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .COMPANION_CANONICAL_USER_NONCE_FETCH:
          break;
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .COMPANION_SYNCD_SNAPSHOT_FATAL_RECOVERY: {
          if (
            o(
              "WAWebSyncdSnapshotRecoveryGatingUtils",
            ).syncdSnapshotRecoveryEnabled() === !1
          )
            return (
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "Syncd Snapshot recovery is not enabled",
                  ])),
              ),
              null
            );
          var s = k(t);
          if (s == null) return null;
          n.syncdCollectionFatalRecoveryRequest = s;
          break;
        }
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .HISTORY_SYNC_CHUNK_RETRY: {
          o("WALogger").WARN(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "history sync chunk retry is not supported in web",
              ])),
          );
          break;
        }
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .GALAXY_FLOW_ACTION: {
          var u = o(
            "WAWebNonMessageDataRequestHandlerGalaxyFlow",
          ).buildGalaxyFlowDataOperationRequest(t);
          if (u == null) return null;
          n.galaxyFlowAction = u;
          break;
        }
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .BUSINESS_BROADCAST_INSIGHTS_DELIVERED_TO: {
          t.bizBroadcastInsightsContactListRequest != null &&
            (n.bizBroadcastInsightsContactListRequest =
              t.bizBroadcastInsightsContactListRequest);
          break;
        }
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .BUSINESS_BROADCAST_INSIGHTS_REFRESH: {
          t.bizBroadcastInsightsRefreshRequest != null &&
            (n.bizBroadcastInsightsRefreshRequest =
              t.bizBroadcastInsightsRefreshRequest);
          break;
        }
      }
      return n;
    }
    async function R(e, t) {
      var n = t != null ? t : {},
        a = n.fanout,
        i = n.msgId;
      if (a) {
        var l = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
          s = { wids: [l] },
          u = await o("WAWebDBDeviceListFanout").getFanOutList(s),
          c = await Promise.all(
            u.map(function (e) {
              return r("WAWebMsgKey").newId();
            }),
          );
        return u.map(function (t, n) {
          return {
            id: new (r("WAWebMsgKey"))({
              fromMe: !0,
              remote: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              id: c[n],
            }),
            to: t,
            type: "protocol",
            subtype: "peer_data_operation_request_message",
            kind: o("WAWebMsgType").MsgKind.PeerMessage,
            peerDataOperationRequestMessage: e,
          };
        });
      }
      var d = new (r("WAWebMsgKey"))({
        fromMe: !0,
        remote: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        id: i != null ? i : await r("WAWebMsgKey").newId(),
      });
      return [
        {
          id: d,
          to: o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
            o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().user,
            o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().server,
            0,
          ),
          type: "protocol",
          subtype: "peer_data_operation_request_message",
          kind: o("WAWebMsgType").MsgKind.PeerMessage,
          peerDataOperationRequestMessage: e,
        },
      ];
    }
    function L(e) {
      var t,
        n = e.fileSha256Arr,
        r =
          n == null ||
          (t = n.filter(function (e) {
            return !o(
              "WAWebNonMessageDataRequestMediaHandlingUtils",
            ).inFlightStickerRequests.has(e);
          })) == null
            ? void 0
            : t.map(function (e) {
                return (
                  x(
                    o("WAWebProtobufsE2E.pb")
                      .Message$PeerDataOperationRequestType.UPLOAD_STICKER,
                    o("WAWebNonMessageDataRequestMediaHandlingUtils")
                      .inFlightStickerRequests,
                    e,
                  ),
                  { fileSha256: e }
                );
              });
      return (r == null ? void 0 : r.length) === 0 ? null : r;
    }
    function E(e) {
      var t = e.urls;
      return t == null
        ? void 0
        : t.map(function (t) {
            return { url: t, includeHqThumbnail: e.includeHqThumbnail };
          });
    }
    function k(e) {
      return {
        collectionName: r("WANullthrows")(e.collectionName),
        timestamp: e.timestamp,
      };
    }
    async function I(e) {
      if (!o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled())
        return null;
      if (
        o("WAWebNonMessageDataRequestHistorySyncOnDemandUtils")
          .historySyncOnDemandRequestsFailureRecord.disableRequestSending
      )
        return (
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[rdu] history sync on demand disabled: too many failures",
              ])),
          ),
          null
        );
      var t = e.chatId;
      if (t == null) return null;
      var n = await o("WAWebApiChatCommon").getChatRecord(t),
        r =
          (n == null ? void 0 : n.historyChatId) != null
            ? o("WAWebWidFactory").createWid(n.historyChatId).toJid()
            : o("WAWebCommsWapMd").CHAT_JID(t).toString();
      if (
        new Set(
          o(
            "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
          ).inFlightHistorySyncOnDemandRequests.values(),
        ).has(r)
      )
        return (
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "[rdu] drop history sync on demand request as it's in flight",
              ])),
          ),
          null
        );
      var a = await o(
          "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
        ).getOldestMsgInChatFromDB(t),
        i = await o("WAWebABProps").getABPropConfigValue(
          "history_sync_on_demand_message_count",
        );
      return {
        chatJid: r,
        oldestMsgId: a == null ? void 0 : a.id.id,
        oldestMsgFromMe: a == null ? void 0 : a.id.fromMe,
        onDemandMsgCount: i,
        oldestMsgTimestampMs: a == null ? void 0 : a.t,
        supportInlineResponse: !0,
      };
    }
    function T(e) {
      var t = e.msgKeys;
      return t == null || t.length === 0
        ? null
        : (o("WAWebCurrentUser").isEmployee() &&
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[rdu] send placeholder message backfill request for ",
                  "",
                ])),
              t.map(function (e) {
                return e.toString();
              }),
            ),
          t
            .filter(function (e) {
              return !o(
                "WAWebNonMessageDataRequestPlaceholderMessageResendUtils",
              ).inFlightPlaceholderResendRequests.has(e.id);
            })
            .map(function (e) {
              x(
                o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                  .PLACEHOLDER_MESSAGE_RESEND,
                o("WAWebNonMessageDataRequestPlaceholderMessageResendUtils")
                  .inFlightPlaceholderResendRequests,
                e.id,
              );
              var t = e.remote.isRegularUser()
                  ? o("WAWebLidMigrationUtils").toUserLid(e.remote)
                  : null,
                n =
                  e.remote.isRegularUser() &&
                  o(
                    "WAWebLid1X1MigrationGating",
                  ).Lid1X1MigrationUtils.isLidMigrated()
                    ? new (r("WAWebMsgKey"))({
                        id: e.id,
                        fromMe: e.fromMe,
                        remote: t != null ? t : e.remote,
                      })
                    : e;
              return {
                messageKey: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(n),
              };
            }));
    }
    function D(e, t) {
      switch (e) {
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .UPLOAD_STICKER: {
          var n,
            a =
              (n = t.peerDataOperationRequestMessage) == null
                ? void 0
                : n.requestStickerReupload;
          a != null &&
            a.forEach(function (e) {
              var t = e.fileSha256;
              if (t != null) {
                var n;
                (o(
                  "WAWebNonMessageDataRequestMediaHandlingUtils",
                ).inFlightStickerRequests.add(t),
                  o(
                    "WAWebNonMessageDataRequestMediaHandlingUtils",
                  ).mediaReuploadRequestCountMap.set(
                    t,
                    ((n = o(
                      "WAWebNonMessageDataRequestMediaHandlingUtils",
                    ).mediaReuploadRequestCountMap.get(t)) != null
                      ? n
                      : 0) + 1,
                  ));
              }
            });
          break;
        }
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .HISTORY_SYNC_ON_DEMAND: {
          var i,
            l =
              (i = t.peerDataOperationRequestMessage) == null
                ? void 0
                : i.historySyncOnDemandRequest;
          if (l != null) {
            var s,
              u = (s = l.chatJid) != null ? s : "";
            o(
              "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
            ).inFlightHistorySyncOnDemandRequests.set(t.id.id, u);
            var c = o("WAWebABProps").getABPropConfigValue(
                "history_sync_on_demand_timeout_ms",
              ),
              d = function () {
                var e = r("gkx")("26258") ? "" : t.id.id;
                (o("WALogger").LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "[rdu] history sync on demand timeout key=",
                      "",
                    ])),
                  e,
                ),
                  o(
                    "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
                  ).handleHistorySyncOnDemandFailure(u),
                  o(
                    "WAWebNonMessageDataRequestLoggingUtils",
                  ).logHistorySyncOnDemandResponse(
                    o("WAWebWamEnumPeerDataResponseApplyResultType")
                      .PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.REQUEST_TIMEOUT,
                    t.id.id,
                  ));
              };
            x(
              o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                .HISTORY_SYNC_ON_DEMAND,
              o("WAWebNonMessageDataRequestHistorySyncOnDemandUtils")
                .inFlightHistorySyncOnDemandRequests,
              t.id.id,
              c,
              d,
            );
          }
          break;
        }
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .PLACEHOLDER_MESSAGE_RESEND: {
          var m,
            p =
              (m = t.peerDataOperationRequestMessage) == null
                ? void 0
                : m.placeholderMessageResendRequest;
          p != null &&
            p.forEach(function (e) {
              var t,
                n = (t = e.messageKey) == null ? void 0 : t.id;
              n != null &&
                o(
                  "WAWebNonMessageDataRequestPlaceholderMessageResendUtils",
                ).inFlightPlaceholderResendRequests.add(n);
            });
          break;
        }
        default:
          break;
      }
    }
    function x(e, t, n, a, i) {
      (a === void 0 && (a = b),
        new (o("WAShiftTimer").ShiftTimer)(function () {
          if (t.has(n)) {
            var a = r("gkx")("26258") ? "" : n;
            (o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "[rdu] clean req key=",
                  " type=",
                  "",
                ])),
              a,
              e,
            ),
              t.delete(n),
              i == null || i());
          }
        }).onOrAfter(a));
    }
    function $(e) {
      switch (e) {
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .GENERATE_LINK_PREVIEW:
          return o("WAWebSyncGatingUtils").isWebLinkPreviewNseSupportEnabled()
            ? "high_force"
            : null;
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .PLACEHOLDER_MESSAGE_RESEND:
          return o(
            "WAWebSyncGatingUtils",
          ).isMessagePlaceholderResendNseSupportEnabled()
            ? "high_force"
            : null;
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .HISTORY_SYNC_ON_DEMAND:
          return o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled()
            ? "high_force"
            : null;
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .COMPANION_CANONICAL_USER_NONCE_FETCH:
          return "high_force";
        default:
          return null;
      }
    }
    function P(e) {
      if (
        !r("justknobx")._("4199") &&
        e ===
          o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
            .HISTORY_SYNC_ON_DEMAND
      )
        return o("WAWebSendMsgCreateDeviceStanza").PrivacySensitiveType
          .OnDemand;
    }
    l.sendPeerDataOperationRequest = v;
  },
  98,
);
