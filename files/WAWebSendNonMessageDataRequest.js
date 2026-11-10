__d(
  "WAWebSendNonMessageDataRequest",
  [
    "Promise",
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
    "WAWebUserPrefsMeUser",
    "WAWebUserUtils",
    "WAWebWamEnumPeerDataResponseApplyResultType",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
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
      S,
      R,
      L = (e = n("cr:19091")) != null ? e : {},
      E = L.getOmittedMetadataIdentityForChat,
      k = (s = n("cr:19090")) != null ? s : {},
      I = k.getOmittedHistorySyncAnchor,
      T = k.isOmittedHistorySyncOnDemandEnabled,
      D = 3e3;
    function x(e, t, n) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i = a != null ? a : {},
            l = i.skipStoringMessage,
            s = yield P(e, t);
          if (s == null) {
            if (
              (o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[rdu] peer data op request object is null",
                  ])),
              ),
              t.omittedHistory === !0)
            )
              throw r("err")("Could not build the omitted-chat ODHS request");
            return;
          }
          var u = yield M(s, a);
          if (u == null || u.length === 0) {
            if (
              (o("WALogger").WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
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
          var c = H(e),
            d = G(e);
          yield (R || (R = n("Promise"))).all(
            u.map(
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    (U(e, t),
                      o(
                        "WAWebNonMessageDataRequestLoggingUtils",
                      ).logNonMessagePeerDataRequest(e, t),
                      l !== !0 &&
                        (yield o("WAWebApiPeerMessageStore").storePeerMessages([
                          t,
                        ])),
                      o("WAWebNonMessageDataRequestLoggingUtils").sendTimes.set(
                        t.id.id,
                        o("WATimeUtils").unixTimeMs(),
                      ),
                      yield o(
                        "WAWebSendAppStateSyncMsgJob",
                      ).encryptAndSendKeyMsg({
                        msg: t,
                        pushPriority: c != null ? c : void 0,
                        privacySensitive: d != null ? d : void 0,
                      }));
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            ),
          );
          var f = u.slice(0, 3).map(function (e) {
            return e.id.id;
          });
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[rdu] rdu msgs built type=",
                " cnt=",
                " ids=",
                "",
              ])),
            e,
            u.length,
            f,
          );
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
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
              var r = A(t);
              if (r == null) return null;
              n.requestStickerReupload = r;
              break;
            }
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
              .GENERATE_LINK_PREVIEW: {
              var a = F(t);
              if (a == null) return null;
              n.requestUrlPreview = a;
              break;
            }
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
              .HISTORY_SYNC_ON_DEMAND: {
              var i = yield B(t);
              if (i == null) return null;
              n.historySyncOnDemandRequest = i;
              break;
            }
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
              .PLACEHOLDER_MESSAGE_RESEND: {
              var l = q(t);
              if (l == null) return null;
              n.placeholderMessageResendRequest = l;
              break;
            }
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
              .FULL_HISTORY_SYNC_ON_DEMAND: {
              o("WALogger").WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "full history sync on demand not supported in web",
                  ])),
              );
              break;
            }
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
              .COMPANION_META_NONCE_FETCH: {
              o("WALogger").WARN(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
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
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "Syncd Snapshot recovery is not enabled",
                      ])),
                  ),
                  null
                );
              var s = O(t);
              if (s == null) return null;
              n.syncdCollectionFatalRecoveryRequest = s;
              break;
            }
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
              .HISTORY_SYNC_CHUNK_RETRY: {
              o("WALogger").WARN(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "history sync chunk retry is not supported in web",
                  ])),
              );
              break;
            }
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
              .RECENT_CONVERSATIONS_ON_DEMAND_REQUEST: {
              o("WALogger").WARN(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "recent conversations on demand request is not supported in web",
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
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = t != null ? t : {},
            i = a.fanout,
            l = a.msgId;
          if (i) {
            var s = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
              u = { wids: [s] },
              c = yield o("WAWebDBDeviceListFanout").getFanOutList(u),
              d = yield (R || (R = n("Promise"))).all(
                c.map(function (e) {
                  return r("WAWebMsgKey").newId();
                }),
              );
            return c.map(function (t, n) {
              return {
                id: o("WAWebOutgoingPeerMsgKey").buildOutgoingPeerMsgKey(d[n]),
                to: t,
                type: "protocol",
                subtype: "peer_data_operation_request_message",
                kind: o("WAWebMsgType").MsgKind.PeerMessage,
                peerDataOperationRequestMessage: e,
              };
            });
          }
          var m = o("WAWebOutgoingPeerMsgKey").buildOutgoingPeerMsgKey(
            l != null ? l : yield r("WAWebMsgKey").newId(),
          );
          return [
            {
              id: m,
              to: o("WAWebUserUtils").getMyPrimaryForOutgoingPeerMessage(),
              type: "protocol",
              subtype: "peer_data_operation_request_message",
              kind: o("WAWebMsgType").MsgKind.PeerMessage,
              peerDataOperationRequestMessage: e,
            },
          ];
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
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
                  V({
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
    function F(e) {
      var t = e.urls;
      return t == null
        ? void 0
        : t.map(function (t) {
            return { url: t, includeHqThumbnail: e.includeHqThumbnail };
          });
    }
    function O(e) {
      return {
        collectionName: r("nullthrows")(e.collectionName),
        timestamp: e.timestamp,
      };
    }
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a,
            i,
            l = e.omittedHistory === !0;
          if (
            !(l
              ? (T == null ? void 0 : T()) === !0
              : o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled())
          ) {
            if (l)
              throw r("err")("Omitted-chat ODHS is disabled or unsupported");
            return null;
          }
          if (
            o("WAWebNonMessageDataRequestHistorySyncOnDemandUtils")
              .historySyncOnDemandRequestsFailureRecord.disableRequestSending
          ) {
            if (
              (o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
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
          var u = yield o("WAWebApiChatCommon").getChatRecord(s),
            c = l && u != null ? yield E == null ? void 0 : E(u) : null,
            d = l ? yield I == null ? void 0 : I(s) : null;
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
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[rdu] drop history sync on demand request as it's in flight",
                  ])),
              ),
              l)
            )
              throw r("err")(
                "An ODHS request for this chat is already in flight",
              );
            return null;
          }
          var _ = l
              ? null
              : yield o(
                  "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
                ).getOldestMsgInChatFromDB(s),
            f = yield o("WAWebABProps").getABPropConfigValue(
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
        })),
        W.apply(this, arguments)
      );
    }
    function q(e) {
      var t = e.msgKeys;
      return t == null || t.length === 0
        ? null
        : (o("WAWebCurrentUser").isEmployee() &&
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
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
              V({
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
    function U(e, t) {
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
            var d = o("WAWebABProps").getABPropConfigValue(
                "history_sync_on_demand_timeout_ms",
              ),
              m = function () {
                var e = r("gkx")("26258") ? "" : t.id.id;
                (o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
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
            V({
              inFlightRequests: o(
                "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
              ).inFlightHistorySyncOnDemandRequests,
              key: t.id.id,
              requestTimeoutMs: d,
              requestType: o("WAWebProtobufsE2E.pb")
                .Message$PeerDataOperationRequestType.HISTORY_SYNC_ON_DEMAND,
              timeoutHandling: m,
            });
          }
          break;
        }
        case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .PLACEHOLDER_MESSAGE_RESEND: {
          var p,
            _ =
              (p = t.peerDataOperationRequestMessage) == null
                ? void 0
                : p.placeholderMessageResendRequest;
          _ != null &&
            _.forEach(function (e) {
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
    function V(e) {
      var t = e.inFlightRequests,
        n = e.key,
        a = e.requestTimeoutMs,
        i = a === void 0 ? D : a,
        l = e.requestType,
        s = e.timeoutHandling;
      new (o("WAShiftTimer").ShiftTimer)(function () {
        if (t.has(n)) {
          var e = r("gkx")("26258") ? "" : n;
          (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
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
    function H(e) {
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
    function G(e) {
      if (
        !r("justknobx")._("4199") &&
        e ===
          o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
            .HISTORY_SYNC_ON_DEMAND
      )
        return o("WAWebSendMsgCreateDeviceStanza").PrivacySensitiveType
          .OnDemand;
    }
    l.sendPeerDataOperationRequest = x;
  },
  98,
);
