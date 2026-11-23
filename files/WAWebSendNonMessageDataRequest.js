__d(
  "WAWebSendNonMessageDataRequest",
  [
    "WALogger",
    "WAShiftTimer",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiChatCommon",
    "WAWebApiPeerMessageStore",
    "WAWebCommsWapMd",
    "WAWebCurrentUser",
    "WAWebDBDeviceListFanout",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNonMessageDataRequestHandlerGalaxyFlow",
    "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
    "WAWebNonMessageDataRequestLoggingUtils",
    "WAWebNonMessageDataRequestMediaHandlingUtils",
    "WAWebNonMessageDataRequestPlaceholderMessageResendUtils",
    "WAWebOutgoingPeerMsgKey",
    "WAWebProtobufMsgKeyUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebSendAppStateSyncMsgJob",
    "WAWebSendMsgCreateDeviceStanza",
    "WAWebSyncGatingUtils",
    "WAWebSyncdSnapshotRecoveryGatingUtils",
    "WAWebUserUtils",
    "WAWebWamEnumPeerDataResponseApplyResultType",
    "WAWebWidFactory",
    "cr:19090",
    "cr:19091",
    "err",
    "gkx",
    "justknobx",
    "nullthrows",
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
      S = (e = n("cr:19091")) != null ? e : {},
      R = S.getOmittedMetadataIdentityForChat,
      L = (s = n("cr:19090")) != null ? s : {},
      E = L.getOmittedHistorySyncAnchor,
      k = L.isOmittedHistorySyncOnDemandEnabled,
      I = 3e3;
    async function T(e, t, n) {
      var a = n != null ? n : {},
        i = a.skipStoringMessage,
        l = await D(e, t);
      if (l == null) {
        if (
          (o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[rdu] peer data op request object is null",
              ])),
          ),
          t.omittedHistory === !0)
        )
          throw r("err")("Could not build the omitted-chat ODHS request");
        return;
      }
      var s = await x(l, n);
      if (s == null || s.length === 0) {
        if (
          (o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[rdu] peer data operation request msg is null/empty",
              ])),
          ),
          t.omittedHistory === !0)
        )
          throw r("err")(
            "Could not address the omitted-chat ODHS request to primary",
          );
        return;
      }
      var m = B(e),
        p = W(e);
      await Promise.all(
        s.map(async function (t) {
          (F(e, t),
            o(
              "WAWebNonMessageDataRequestLoggingUtils",
            ).logNonMessagePeerDataRequest(e, t),
            i !== !0 &&
              (await o("WAWebApiPeerMessageStore").storePeerMessages([t])),
            o("WAWebNonMessageDataRequestLoggingUtils").sendTimes.set(
              t.id.id,
              o("WATimeUtils").unixTimeMs(),
            ),
            await o("WAWebSendAppStateSyncMsgJob").encryptAndSendKeyMsg({
              msg: t,
              pushPriority: m != null ? m : void 0,
              privacySensitive: p != null ? p : void 0,
            }));
        }),
      );
      var _ = s.slice(0, 3).map(function (e) {
        return e.id.id;
      });
      o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "[rdu] rdu msgs built type=",
            " cnt=",
            " ids=",
            "",
          ])),
        e,
        s.length,
        _,
      );
    }
    async function D(e, t) {
      o("WALogger").LOG(
        m ||
          (m = babelHelpers.taggedTemplateLiteralLoose([
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
          .CONTACT_REFRESH_REQUEST:
          break;
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .UPLOAD_STICKER: {
          var r = $(t);
          if (r == null) return null;
          n.requestStickerReupload = r;
          break;
        }
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .GENERATE_LINK_PREVIEW: {
          var a = P(t);
          if (a == null) return null;
          n.requestUrlPreview = a;
          break;
        }
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .HISTORY_SYNC_ON_DEMAND: {
          var i = await w(t);
          if (i == null) return null;
          n.historySyncOnDemandRequest = i;
          break;
        }
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .PLACEHOLDER_MESSAGE_RESEND: {
          var l = A(t);
          if (l == null) return null;
          n.placeholderMessageResendRequest = l;
          break;
        }
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .FULL_HISTORY_SYNC_ON_DEMAND: {
          o("WALogger").WARN(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "full history sync on demand not supported in web",
              ])),
          );
          break;
        }
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .COMPANION_META_NONCE_FETCH: {
          o("WALogger").WARN(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
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
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "Syncd Snapshot recovery is not enabled",
                  ])),
              ),
              null
            );
          var s = N(t);
          if (s == null) return null;
          n.syncdCollectionFatalRecoveryRequest = s;
          break;
        }
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .HISTORY_SYNC_CHUNK_RETRY: {
          o("WALogger").WARN(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "history sync chunk retry is not supported in web",
              ])),
          );
          break;
        }
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .RECENT_CONVERSATIONS_ON_DEMAND_REQUEST: {
          var u = M(t);
          if (u == null) return null;
          n.recentConversationsOnDemandRequest = u;
          break;
        }
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .GALAXY_FLOW_ACTION: {
          var c = o(
            "WAWebNonMessageDataRequestHandlerGalaxyFlow",
          ).buildGalaxyFlowDataOperationRequest(t);
          if (c == null) return null;
          n.galaxyFlowAction = c;
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
    async function x(e, t) {
      var n = t != null ? t : {},
        a = n.fanout,
        i = n.msgId;
      if (a) {
        var l = o("WAWebUserUtils").getMeDeviceLidOrThrow(),
          s = { wids: [l] },
          u = await o("WAWebDBDeviceListFanout").getFanOutList(s),
          c = await Promise.all(
            u.map(function (e) {
              return r("WAWebMsgKey").newId();
            }),
          );
        return u.map(function (t, n) {
          return {
            id: o("WAWebOutgoingPeerMsgKey").buildOutgoingPeerMsgKey(c[n]),
            to: t,
            type: "protocol",
            subtype: "peer_data_operation_request_message",
            kind: o("WAWebMsgType").MsgKind.PeerMessage,
            peerDataOperationRequestMessage: e,
          };
        });
      }
      var d = o("WAWebOutgoingPeerMsgKey").buildOutgoingPeerMsgKey(
        i != null ? i : await r("WAWebMsgKey").newId(),
      );
      return [
        {
          id: d,
          to: o("WAWebUserUtils").getMyPrimaryForOutgoingPeerMessage(),
          type: "protocol",
          subtype: "peer_data_operation_request_message",
          kind: o("WAWebMsgType").MsgKind.PeerMessage,
          peerDataOperationRequestMessage: e,
        },
      ];
    }
    function $(e) {
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
                  O({
                    inFlightRequests: o(
                      "WAWebNonMessageDataRequestMediaHandlingUtils",
                    ).inFlightStickerRequests,
                    key: e,
                    requestType: o("WAWebProtobufsE2E.pb")
                      .Message$PeerDataOperationRequestType.UPLOAD_STICKER,
                  }),
                  { fileSha256: e }
                );
              });
      return (r == null ? void 0 : r.length) === 0 ? null : r;
    }
    function P(e) {
      var t = e.urls;
      return t == null
        ? void 0
        : t.map(function (t) {
            return { url: t, includeHqThumbnail: e.includeHqThumbnail };
          });
    }
    function N(e) {
      return {
        collectionName: r("nullthrows")(e.collectionName),
        timestamp: e.timestamp,
      };
    }
    function M(e) {
      var t = e.conversationCount,
        n = e.messagesPerConversation;
      return t == null || n == null || t <= 0 || n <= 0
        ? null
        : { conversationCount: t, messagesPerConversation: n };
    }
    async function w(e) {
      var t,
        n,
        a,
        i,
        l = e.omittedHistory === !0;
      if (
        !(l
          ? (k == null ? void 0 : k()) === !0
          : o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled())
      ) {
        if (l) throw r("err")("Omitted-chat ODHS is disabled or unsupported");
        return null;
      }
      if (
        o("WAWebNonMessageDataRequestHistorySyncOnDemandUtils")
          .historySyncOnDemandRequestsFailureRecord.disableRequestSending
      ) {
        if (
          (o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "[rdu] history sync on demand disabled: too many failures",
              ])),
          ),
          l)
        )
          throw r("err")(
            "ODHS requests are temporarily disabled after failures",
          );
        return null;
      }
      var s = e.chatId;
      if (s == null) return null;
      var u = await o("WAWebApiChatCommon").getChatRecord(s),
        c = l && u != null ? await (R == null ? void 0 : R(u)) : null,
        d = l ? await (E == null ? void 0 : E(s)) : null;
      if (l && (c == null || d == null))
        throw r("err")(
          "Omitted ODHS requires matched metadata and a real local message anchor",
        );
      var m =
          (t = c == null ? void 0 : c.historyId) != null
            ? t
            : u == null
              ? void 0
              : u.historyChatId,
        p =
          m != null
            ? o("WAWebWidFactory").createWid(m).toJid()
            : o("WAWebCommsWapMd").CHAT_JID(s).toString();
      if (
        new Set(
          o(
            "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
          ).inFlightHistorySyncOnDemandRequests.values(),
        ).has(p)
      ) {
        if (
          (o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "[rdu] drop history sync on demand request as it's in flight",
              ])),
          ),
          l)
        )
          throw r("err")("An ODHS request for this chat is already in flight");
        return null;
      }
      var _ = l
          ? null
          : await o(
              "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
            ).getOldestMsgInChatFromDB(s),
        f = await o("WAWebABProps").getABPropConfigValue(
          "history_sync_on_demand_message_count",
        );
      return {
        chatJid: p,
        oldestMsgId:
          (n = d == null ? void 0 : d.id.id) != null
            ? n
            : _ == null
              ? void 0
              : _.id.id,
        oldestMsgFromMe:
          (a = d == null ? void 0 : d.id.fromMe) != null
            ? a
            : _ == null
              ? void 0
              : _.id.fromMe,
        onDemandMsgCount: f,
        oldestMsgTimestampMs:
          (i = d == null ? void 0 : d.timestampMs) != null
            ? i
            : (_ == null ? void 0 : _.t) != null
              ? _.t * 1e3
              : void 0,
        supportInlineResponse: !0,
      };
    }
    function A(e) {
      var t = e.msgKeys;
      return t == null || t.length === 0
        ? null
        : (o("WAWebCurrentUser").isEmployee() &&
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
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
              O({
                inFlightRequests: o(
                  "WAWebNonMessageDataRequestPlaceholderMessageResendUtils",
                ).inFlightPlaceholderResendRequests,
                key: e.id,
                requestType: o("WAWebProtobufsE2E.pb")
                  .Message$PeerDataOperationRequestType
                  .PLACEHOLDER_MESSAGE_RESEND,
              });
              var t = e.remote.isRegularUser()
                  ? o("WAWebLidMigrationUtils").toUserLid(e.remote)
                  : null,
                n = e.remote.isRegularUser()
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
    function F(e, t) {
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
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
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
            O({
              inFlightRequests: o(
                "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
              ).inFlightHistorySyncOnDemandRequests,
              key: t.id.id,
              requestTimeoutMs: c,
              requestType: o("WAWebProtobufsE2E.pb")
                .Message$PeerDataOperationRequestType.HISTORY_SYNC_ON_DEMAND,
              timeoutHandling: d,
            });
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
    function O(e) {
      var t = e.inFlightRequests,
        n = e.key,
        a = e.requestTimeoutMs,
        i = a === void 0 ? I : a,
        l = e.requestType,
        s = e.timeoutHandling;
      new (o("WAShiftTimer").ShiftTimer)(function () {
        if (t.has(n)) {
          var e = r("gkx")("26258") ? "" : n;
          (o("WALogger").LOG(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "[rdu] clean req key=",
                " type=",
                "",
              ])),
            e,
            l,
          ),
            t.delete(n),
            s == null || s());
        }
      }).onOrAfter(i);
    }
    function B(e) {
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
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .RECENT_CONVERSATIONS_ON_DEMAND_REQUEST:
          return "high_force";
        default:
          return null;
      }
    }
    function W(e) {
      if (
        e ===
          o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
            .RECENT_CONVERSATIONS_ON_DEMAND_REQUEST ||
        (!r("justknobx")._("4199") &&
          e ===
            o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
              .HISTORY_SYNC_ON_DEMAND)
      )
        return o("WAWebSendMsgCreateDeviceStanza").PrivacySensitiveType
          .OnDemand;
    }
    l.sendPeerDataOperationRequest = T;
  },
  98,
);
