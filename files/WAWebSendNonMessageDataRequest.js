__d(
  "WAWebSendNonMessageDataRequest",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
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
      b,
      v = 3e3;
    function S(e, t, n) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = r != null ? r : {},
            i = a.skipStoringMessage,
            l = yield L(e, t);
          if (l == null) {
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[rdu] peer data op request object is null",
                ])),
            );
            return;
          }
          var s = yield k(l, r);
          if (s == null || s.length === 0) {
            o("WALogger").WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[rdu] peer data operation request msg is null/empty",
                ])),
            );
            return;
          }
          var u = A(e),
            p = F(e);
          yield (b || (b = n("Promise"))).all(
            s.map(
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    (M(e, t),
                      o(
                        "WAWebNonMessageDataRequestLoggingUtils",
                      ).logNonMessagePeerDataRequest(e, t),
                      i !== !0 &&
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
                        pushPriority: u != null ? u : void 0,
                        privacySensitive: p != null ? p : void 0,
                      }));
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            ),
          );
          var _ = s.slice(0, 3).map(function (e) {
            return e.id.id;
          });
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[rdu] rdu msgs built type=",
                " cnt=",
                " ids=",
                "",
              ])),
            e,
            s.length,
            _,
          );
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
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
              var r = T(t);
              if (r == null) return null;
              n.requestStickerReupload = r;
              break;
            }
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
              .GENERATE_LINK_PREVIEW: {
              var a = D(t);
              if (a == null) return null;
              n.requestUrlPreview = a;
              break;
            }
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
              .HISTORY_SYNC_ON_DEMAND: {
              var i = yield $(t);
              if (i == null) return null;
              n.historySyncOnDemandRequest = i;
              break;
            }
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
              .PLACEHOLDER_MESSAGE_RESEND: {
              var l = N(t);
              if (l == null) return null;
              n.placeholderMessageResendRequest = l;
              break;
            }
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
              .FULL_HISTORY_SYNC_ON_DEMAND: {
              o("WALogger").WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "full history sync on demand not supported in web",
                  ])),
              );
              break;
            }
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
              .COMPANION_META_NONCE_FETCH: {
              o("WALogger").WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
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
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "Syncd Snapshot recovery is not enabled",
                      ])),
                  ),
                  null
                );
              var s = x(t);
              if (s == null) return null;
              n.syncdCollectionFatalRecoveryRequest = s;
              break;
            }
            case o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
              .HISTORY_SYNC_CHUNK_RETRY: {
              o("WALogger").WARN(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
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
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = t != null ? t : {},
            i = a.fanout,
            l = a.msgId;
          if (i) {
            var s,
              u = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              c =
                u.isLid() &&
                (s = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid()) != null
                  ? s
                  : o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
              d = { wids: [c] },
              m = yield o("WAWebDBDeviceListFanout").getFanOutList(d),
              p = yield (b || (b = n("Promise"))).all(
                m.map(function (e) {
                  return r("WAWebMsgKey").newId();
                }),
              );
            return m.map(function (t, n) {
              return {
                id: new (r("WAWebMsgKey"))({
                  fromMe: !0,
                  remote: o(
                    "WAWebUserPrefsMeUser",
                  ).getMePnUserOrThrow_DO_NOT_USE(),
                  id: p[n],
                }),
                to: t,
                type: "protocol",
                subtype: "peer_data_operation_request_message",
                kind: o("WAWebMsgType").MsgKind.PeerMessage,
                peerDataOperationRequestMessage: e,
              };
            });
          }
          var _ = new (r("WAWebMsgKey"))({
            fromMe: !0,
            remote: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            id: l != null ? l : yield r("WAWebMsgKey").newId(),
          });
          return [
            {
              id: _,
              to: o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
                o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE()
                  .user,
                o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE()
                  .server,
                0,
              ),
              type: "protocol",
              subtype: "peer_data_operation_request_message",
              kind: o("WAWebMsgType").MsgKind.PeerMessage,
              peerDataOperationRequestMessage: e,
            },
          ];
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
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
                  w(
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
    function D(e) {
      var t = e.urls;
      return t == null
        ? void 0
        : t.map(function (t) {
            return { url: t, includeHqThumbnail: e.includeHqThumbnail };
          });
    }
    function x(e) {
      return {
        collectionName: r("WANullthrows")(e.collectionName),
        timestamp: e.timestamp,
      };
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!o("WAWebSyncGatingUtils").isHistorySyncOnDemandEnabled())
            return null;
          if (
            o("WAWebNonMessageDataRequestHistorySyncOnDemandUtils")
              .historySyncOnDemandRequestsFailureRecord.disableRequestSending
          )
            return (
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[rdu] history sync on demand disabled: too many failures",
                  ])),
              ),
              null
            );
          var t = e.chatId;
          if (t == null) return null;
          var n = yield o("WAWebApiChatCommon").getChatRecord(t),
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
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[rdu] drop history sync on demand request as it's in flight",
                  ])),
              ),
              null
            );
          var a = yield o(
              "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
            ).getOldestMsgInChatFromDB(t),
            i = yield o("WAWebABProps").getABPropConfigValue(
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
        })),
        P.apply(this, arguments)
      );
    }
    function N(t) {
      if (!o("WAWebSyncGatingUtils").isPlaceholderMessageResendEnabled())
        return null;
      var n = t.msgKeys;
      return n == null || n.length === 0
        ? null
        : (o("WAWebCurrentUser").isEmployee() &&
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[rdu] send placeholder message backfill request for ",
                  "",
                ])),
              n.map(function (e) {
                return e.toString();
              }),
            ),
          n
            .filter(function (e) {
              return !o(
                "WAWebNonMessageDataRequestPlaceholderMessageResendUtils",
              ).inFlightPlaceholderResendRequests.has(e.id);
            })
            .map(function (e) {
              w(
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
    function M(e, t) {
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
            var u,
              c = (u = l.chatJid) != null ? u : "";
            o(
              "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
            ).inFlightHistorySyncOnDemandRequests.set(t.id.id, c);
            var d = o("WAWebABProps").getABPropConfigValue(
                "history_sync_on_demand_timeout_ms",
              ),
              m = function () {
                var e = r("gkx")("26258") ? "" : t.id.id;
                (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[rdu] history sync on demand timeout key=",
                      "",
                    ])),
                  e,
                ),
                  o(
                    "WAWebNonMessageDataRequestHistorySyncOnDemandUtils",
                  ).handleHistorySyncOnDemandFailure(c),
                  o(
                    "WAWebNonMessageDataRequestLoggingUtils",
                  ).logHistorySyncOnDemandResponse(
                    o("WAWebWamEnumPeerDataResponseApplyResultType")
                      .PEER_DATA_RESPONSE_APPLY_RESULT_TYPE.REQUEST_TIMEOUT,
                    t.id.id,
                  ));
              };
            w(
              o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                .HISTORY_SYNC_ON_DEMAND,
              o("WAWebNonMessageDataRequestHistorySyncOnDemandUtils")
                .inFlightHistorySyncOnDemandRequests,
              t.id.id,
              d,
              m,
            );
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
    function w(e, t, n, a, i) {
      (a === void 0 && (a = v),
        new (o("WAShiftTimer").ShiftTimer)(function () {
          if (t.has(n)) {
            var a = r("gkx")("26258") ? "" : n;
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
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
    function A(e) {
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
    function F(e) {
      if (
        !r("justknobx")._("4199") &&
        e ===
          o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
            .HISTORY_SYNC_ON_DEMAND
      )
        return o("WAWebSendMsgCreateDeviceStanza").PrivacySensitiveType
          .OnDemand;
    }
    l.sendPeerDataOperationRequest = S;
  },
  98,
);
