__d(
  "WAWebGroupHistoryBundleProcessor",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWeb-dexie",
    "WAWebABProps",
    "WAWebAck",
    "WAWebAddonConstants",
    "WAWebAddonProcessMsgs",
    "WAWebAddonProcessMsgsUtils",
    "WAWebApiFilterAndReplaceMessages",
    "WAWebAssociationProcessor",
    "WAWebBackendApi",
    "WAWebCreateNackFromStanza",
    "WAWebDBEncryptMultipleMsgs",
    "WAWebDBGroupsGroupMetadata",
    "WAWebDBMessageUtils",
    "WAWebDBMsgUtils",
    "WAWebDBReportingTokenUtils",
    "WAWebDBStoreEncryptedMsgs",
    "WAWebDecompressAndDecodeBundle",
    "WAWebE2EProtoUtils",
    "WAWebEphemeralKeepInChatUtils",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryMessageManager",
    "WAWebGroupHistoryMsgData.flow",
    "WAWebGroupHistoryReportingTokenValidator",
    "WAWebGroupHistorySupportedMessageTypesUtil",
    "WAWebHandleOrphansForNewMsg",
    "WAWebLidMigrationUtils",
    "WAWebMessageAssociation.flow",
    "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
    "WAWebMessagingGatingUtils",
    "WAWebMsgEphemerality",
    "WAWebMsgHistorySyncExtensions",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgStoreExtensions",
    "WAWebMsgType",
    "WAWebParseWebMessageInfoApi",
    "WAWebProcessBaseMsgInfo",
    "WAWebProtobufMsgKeyUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsGroupHistory.pb",
    "WAWebReportingTokenUtils",
    "WAWebSchemaMessage",
    "WAWebSerializeError",
    "WAWebUpdateMessageHistoryBundleState",
    "WAWebWamEnumReportingTokenValidationFailureReason",
    "asyncToGeneratorRuntime",
    "countWhere",
    "decodeProtobuf",
    "err",
    "sumBy",
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
      k = 3,
      I = new Map([
        [
          o("WAWebProtobufsE2E.pb").MessageAssociation$AssociationType
            .POLL_ADD_OPTION,
          function (e) {
            var t;
            return (
              ((t = e.message) == null ? void 0 : t.pollAddOptionMessage) !=
              null
            );
          },
        ],
      ]);
    function T(e, t, n) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i = 0,
            l = 0;
          try {
            var _, f, g;
            yield o(
              "WAWebUpdateMessageHistoryBundleState",
            ).updateGroupHistoryBundleState(
              e.id,
              o("WAWebGroupHistoryMsgData.flow")
                .MessageHistoryBundleProcessState.PROCESSING,
            );
            var h = yield o("WAWebDecompressAndDecodeBundle").decompressBundle(
                t,
              ),
              y = o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufsGroupHistory.pb").GroupHistorySpec,
                h,
              );
            ((i = y.messages.length),
              (l =
                (_ =
                  (f = y.outOfWindowPinnedMessages) == null
                    ? void 0
                    : f.length) != null
                  ? _
                  : 0));
            var C = r("countWhere")(y.messages, function (e) {
                var t;
                return (
                  ((t = e.message) == null || (t = t.pinInChatMessage) == null
                    ? void 0
                    : t.type) ===
                  o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type
                    .PIN_FOR_ALL
                );
              }),
              b = r("sumBy")(
                (g = y.uncountedAssociatedMessageLists) != null ? g : [],
                function (e) {
                  var t, n;
                  return (t = (n = e.messages) == null ? void 0 : n.length) !=
                    null
                    ? t
                    : 0;
                },
              );
            o("WAWebBackendApi").frontendFireAndForget(
              "logGroupHistoryParseHistoryProtoSucceeded",
              {
                groupId: a.toJid(),
                messagesCount: i,
                oowPinsCount: l,
                pinsCount: C,
                uncountedCount: b,
              },
            );
            var v = e.unsafe(),
              S = null;
            try {
              var R;
              S = yield o(
                "WAWebGroupHistoryReportingTokenValidator",
              ).prepareValidationContext({
                bundleMessageSecret: v.messageSecret,
                bundleMsgId: e.id,
                bundleMsgTimestamp: (R = v.t) != null ? R : 0,
                bundleSenderWid: v.author,
                groupWid: a,
                inflatedBytes: h,
              });
            } catch (e) {
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] Failed to prepare validation context: ",
                    "",
                  ])),
                r("WAWebSerializeError")(e),
              );
            }
            var L = o("WAWebProcessBaseMsgInfo").msgToBaseMsgInfo(v),
              k = A(y),
              I = yield (E || (E = n("Promise"))).all([
                x({
                  baseMessage: L,
                  bundleMessageKey: e.id,
                  bundleProtoMessages: y.messages,
                  chatId: a,
                  validationCtx: S,
                }),
                l > 0
                  ? x({
                      baseMessage: L,
                      bundleMessageKey: e.id,
                      bundleProtoMessages: y.outOfWindowPinnedMessages,
                      chatId: a,
                      skipMessageTooOldCheck: !0,
                      validationCtx: null,
                    })
                  : {
                      parsedMessages: [],
                      addonPromises: [],
                      reportingInfoRows: [],
                    },
                k.length > 0
                  ? x({
                      baseMessage: L,
                      bundleMessageKey: e.id,
                      bundleProtoMessages: k,
                      chatId: a,
                      validationCtx: null,
                    })
                  : {
                      parsedMessages: [],
                      addonPromises: [],
                      reportingInfoRows: [],
                    },
              ]),
              T = I[0],
              D = T.addonPromises,
              $ = T.parsedMessages,
              P = T.reportingInfoRows,
              N = I[1],
              w = N.addonPromises,
              F = N.parsedMessages,
              O = N.reportingInfoRows,
              B = I[2],
              W = B.addonPromises,
              q = B.parsedMessages,
              U = B.reportingInfoRows,
              V = [].concat($, F, q),
              H = [].concat(D, w, W),
              G = [].concat(P, O, U);
            if (V.length === 0) {
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history]: No valid messages parsed from bundle",
                  ])),
              );
              return;
            }
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-history]: parsed ",
                  " msgs (",
                  " OOW pins), injecting",
                ])),
              V.length,
              F.length,
            );
            var j = yield z(V),
              Q = new Set(
                q.map(function (e) {
                  return e.id.toString();
                }),
              ),
              Y = M(yield K(j, a), Q),
              Z = yield X(H, L),
              ee =
                Y.filter(function (e) {
                  return !Q.has(e.id.toString());
                }).length <
                y.messages.length + l
                  ? o("WAWebGroupHistoryMsgData.flow")
                      .MessageHistoryBundleProcessState.INJECTED_PARTIAL
                  : o("WAWebGroupHistoryMsgData.flow")
                      .MessageHistoryBundleProcessState.INJECTED;
            if ((yield J(Y, a, e.id, ee), G.length > 0))
              try {
                var te = new Set(
                    Y.flatMap(function (e) {
                      var t = [e.id.toString()];
                      return (
                        e.protocolMessageKey != null &&
                          t.push(e.protocolMessageKey.toString()),
                        t
                      );
                    }),
                  ),
                  ne = G.filter(function (e) {
                    return te.has(e.msgKey);
                  });
                ne.length > 0 &&
                  (yield o(
                    "WAWebDBReportingTokenUtils",
                  ).handleAddReportingInfos(ne));
              } catch (e) {
                o("WALogger").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history] Failed to persist reporting infos: ",
                      "",
                    ])),
                  r("WAWebSerializeError")(e),
                );
              }
            (yield o("WAWebMsgStoreExtensions").handleStoredSyncedMsgs(Y),
              Y.length > 0 &&
                (yield o("WAWebBackendApi").frontendSendAndReceive(
                  "hydrateReactionsForMessages",
                  {
                    messageIds: Y.map(function (e) {
                      return e.id.toString();
                    }),
                  },
                ),
                yield (E || (E = n("Promise"))).all(
                  Y.map(function (e) {
                    return o(
                      "WAWebHandleOrphansForNewMsg",
                    ).handleOrphansForNewMsg(e);
                  }),
                )),
              Z.length > 0 &&
                (yield o("WAWebAddonProcessMsgs").processMsgsAndGetOrphans(
                  Z,
                  null,
                  o("WAWebAddonConstants").AddonProcessMode
                    .ProcessGroupHistoryBundle,
                )),
              yield o(
                "WAWebUpdateMessageHistoryBundleState",
              ).updateGroupHistoryBundleState(e.id, ee));
          } catch (t) {
            if (
              (o("WAWebBackendApi").frontendFireAndForget(
                "logGroupHistoryParseHistoryProtoFailed",
                { groupId: a.toJid(), messagesCount: i + l, oowPinsCount: l },
              ),
              t instanceof r("WAWeb-dexie").BulkError)
            ) {
              yield o(
                "WAWebUpdateMessageHistoryBundleState",
              ).updateGroupHistoryBundleState(
                e.id,
                o("WAWebGroupHistoryMsgData.flow")
                  .MessageHistoryBundleProcessState.FAILED_NO_RETRY,
              );
              return;
            }
            (yield o(
              "WAWebUpdateMessageHistoryBundleState",
            ).updateGroupHistoryBundleState(
              e.id,
              o("WAWebGroupHistoryMsgData.flow")
                .MessageHistoryBundleProcessState.FAILED,
            ),
              t instanceof Error
                ? o("WALogger")
                    .ERROR(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "[group-history]: Failed to process bundle",
                        ])),
                    )
                    .catching(t)
                    .sendLogs("group-history-bundle-processing-failed")
                : o("WALogger")
                    .ERROR(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "[group-history]: Failed to process bundle",
                        ])),
                    )
                    .catching(r("err")(String(t)))
                    .sendLogs("group-history-bundle-processing-failed"));
          }
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          for (
            var t = e.baseMessage,
              a = e.bundleMessageKey,
              i = e.bundleProtoMessages,
              l = e.chatId,
              s = e.skipMessageTooOldCheck,
              u = s === void 0 ? !1 : s,
              c = e.validationCtx,
              d = [],
              m = [],
              p = [],
              b = o("WATimeUtils").unixTime(),
              v = { count: 0, ids: [] },
              S = { count: 0, ids: [] },
              R = { count: 0, ids: [] },
              L = { count: 0, ids: [] },
              k = { count: 0, ids: [] },
              I = [],
              T = o(
                "WAWebGroupHistoryGating",
              ).shouldSkipUnsupportedMessagesFromBundle(),
              D = 0;
            D < i.length;
            D++
          ) {
            var x = i[D];
            try {
              if (T && B(x)) {
                var $, N;
                W(
                  k,
                  ($ = (N = x.key) == null ? void 0 : N.id) != null
                    ? $
                    : "unknown",
                );
                continue;
              }
              var M = P(x, t, a, T);
              if (M == null) continue;
              if (T && !O(M)) {
                W(L, M.id);
                continue;
              }
              if (!F(M, l)) {
                W(v, M.id);
                continue;
              }
              if (H(M, b)) {
                W(S, M.id);
                continue;
              }
              if (!u && G(M, b)) {
                W(R, M.id);
                continue;
              }
              (c != null &&
                I.push(q({ index: D, parsedMsg: M, validationCtx: c })),
                d.push(M),
                m.push(
                  o("WAWebAddonProcessMsgsUtils").parseHistorySyncMsg({
                    webMsgInfo: x,
                    parsedWebMsgInfo: M,
                    isFromCag: !1,
                  }),
                ));
            } catch (e) {
              o("WALogger").WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history]: Failed to parse message at index ",
                    ": ",
                    "",
                  ])),
                D,
                r("WAWebSerializeError")(e),
              );
            }
          }
          for (var w of yield (E || (E = n("Promise"))).all(I))
            w != null && p.push(w);
          return (
            L.count > 0 &&
              o("WALogger").WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history]: ",
                    " messages have an unsupported type => ",
                    "",
                  ])),
                L.count,
                L.ids,
              ),
            k.count > 0 &&
              o("WALogger")
                .WARN(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history]: ",
                      " messages are scheduled or reveal-pending => ",
                      "",
                    ])),
                  k.count,
                  k.ids,
                )
                .sendLogs("group-history-bundle-scheduled-or-reveal-pending"),
            v.count > 0 &&
              o("WALogger").WARN(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history]: ",
                    " messages do not belong to chat ",
                    " => ",
                    "",
                  ])),
                v.count,
                l.toLogString(),
                v.ids,
              ),
            S.count > 0 &&
              o("WALogger").WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history]: ",
                    " messages are expired => ",
                    "",
                  ])),
                S.count,
                S.ids,
              ),
            R.count > 0 &&
              o("WALogger").WARN(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history]: ",
                    " messages exceed message time limit => ",
                    "",
                  ])),
                R.count,
                R.ids,
              ),
            { parsedMessages: d, addonPromises: m, reportingInfoRows: p }
          );
        })),
        $.apply(this, arguments)
      );
    }
    function P(t, n, r, a) {
      var i,
        l,
        s,
        u,
        c = o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(
          babelHelpers.extends({}, t.key, { participant: t.participant }),
          n,
        ),
        d =
          ((i = t.message) == null ||
          (i = i.editedMessage) == null ||
          (i = i.message) == null ||
          (i = i.protocolMessage) == null
            ? void 0
            : i.key) != null,
        m = d
          ? (l = t.message) == null ||
            (l = l.editedMessage) == null ||
            (l = l.message) == null ||
            (l = l.protocolMessage) == null
            ? void 0
            : l.key
          : (s = t.message) == null || (s = s.protocolMessage) == null
            ? void 0
            : s.key;
      if (m != null) {
        var p = o(
          "WAWebE2EProtoUtils",
        ).translateRegularMessageKeyToLocalReference(
          babelHelpers.extends({}, m, { participant: t.participant }),
          n,
        );
        if (p != null)
          if (d) {
            var _, f, g;
            t.message = babelHelpers.extends({}, t.message, {
              editedMessage: babelHelpers.extends(
                {},
                (_ = t.message) == null ? void 0 : _.editedMessage,
                {
                  message: babelHelpers.extends(
                    {},
                    (f = t.message) == null || (f = f.editedMessage) == null
                      ? void 0
                      : f.message,
                    {
                      protocolMessage: babelHelpers.extends(
                        { additionalPromptIds: [] },
                        (g = t.message) == null ||
                          (g = g.editedMessage) == null ||
                          (g = g.message) == null
                          ? void 0
                          : g.protocolMessage,
                        {
                          key: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(
                            p,
                          ),
                        },
                      ),
                    },
                  ),
                },
              ),
            });
          } else {
            var h;
            t.message = babelHelpers.extends({}, t.message, {
              protocolMessage: babelHelpers.extends(
                { additionalPromptIds: [] },
                (h = t.message) == null ? void 0 : h.protocolMessage,
                { key: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(p) },
              ),
            });
          }
      }
      if (c) {
        var y = o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(c);
        ((t.key = y), y.participant != null && (t.participant = y.participant));
      }
      var C =
        (u = t.message) == null ||
        (u = u.messageContextInfo) == null ||
        (u = u.messageAssociation) == null
          ? void 0
          : u.parentMessageKey;
      if (C != null) {
        var b,
          v = o(
            "WAWebE2EProtoUtils",
          ).translateRegularMessageKeyToLocalReference(
            babelHelpers.extends({}, C, { participant: t.participant }),
            n,
          );
        if (
          v != null &&
          ((b = t.message) == null || (b = b.messageContextInfo) == null
            ? void 0
            : b.messageAssociation) != null
        ) {
          var S, R;
          t.message = babelHelpers.extends({}, t.message, {
            messageContextInfo: babelHelpers.extends(
              {},
              (S = t.message) == null ? void 0 : S.messageContextInfo,
              {
                messageAssociation: babelHelpers.extends(
                  {},
                  (R = t.message) == null || (R = R.messageContextInfo) == null
                    ? void 0
                    : R.messageAssociation,
                  {
                    parentMessageKey: o(
                      "WAWebProtobufMsgKeyUtils",
                    ).msgKeyToProtobuf(v),
                  },
                ),
              },
            ),
          });
        }
      }
      var L = o("WAWebParseWebMessageInfoApi").parseWebMessageInfo(
        o("WAWebMsgHistorySyncExtensions").omitPrimaryOnlyHistorySyncFields(
          babelHelpers.extends({}, t, {
            is1PBizBotMessage: void 0,
            botMessageInvokerJid: void 0,
          }),
        ),
      );
      if (!L) return null;
      var E = n.author;
      return E == null
        ? (o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history] Bundle sender is null",
              ])),
          ),
          null)
        : babelHelpers.extends({}, L, {
            ack:
              c != null && c.fromMe
                ? o("WAWebAck").ACK.RECEIVED
                : o("WAWebAck").ACK.READ,
            hsmTag: a ? void 0 : L.hsmTag,
            viewMode: N(L),
            groupHistoryIndividualMessageInfo: {
              bundleMessageKey: r,
              bundleSender: E,
              isEditedAfterReceivedAsHistory: !1,
            },
          });
    }
    function N(e) {
      var t, n;
      return o("WAWebMessageAssociation.flow").isAssociatedMsg(e) &&
        (t =
          (n = o(
            "WAWebAssociationProcessor",
          ).getAssociationProcessorByAssociationType(e.associationType)) == null
            ? void 0
            : n.groupHistoryViewMode) != null
        ? t
        : e.viewMode;
    }
    function M(e, t) {
      var n = new Set(
        e
          .filter(function (e) {
            return !w(e, t);
          })
          .map(function (e) {
            return e.id.toString();
          }),
      );
      return e.filter(function (e) {
        return (
          !w(e, t) ||
          (t.has(e.id.toString()) &&
            e.parentMsgKey != null &&
            n.has(e.parentMsgKey.toString()))
        );
      });
    }
    function w(e, t) {
      return (
        t.has(e.id.toString()) ||
        e.type === o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_DECRYPTED
      );
    }
    function A(e) {
      var t;
      return ((t = e.uncountedAssociatedMessageLists) != null ? t : []).flatMap(
        function (e) {
          var t,
            n = e.associationType != null ? I.get(e.associationType) : null;
          return n != null ? ((t = e.messages) != null ? t : []).filter(n) : [];
        },
      );
    }
    function F(e, t) {
      return e.id.remote.toString() === t.toString();
    }
    function O(e) {
      return r("WAWebGroupHistorySupportedMessageTypesUtil")(e.type)
        ? e.isFromTemplate !== !0 && e.isDynamicReplyButtonsMsg !== !0
        : !1;
    }
    function B(e) {
      var t;
      return (
        ((t = e.message) == null ? void 0 : t.conditionalRevealMessage) != null
      );
    }
    function W(e, t) {
      (e.count++, e.ids.length < k && e.ids.push(t.toString()));
    }
    function q(e) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.index,
            n = e.parsedMsg,
            a = e.validationCtx,
            i = a.messageBytesArray[t];
          if (i == null) return null;
          try {
            var l = yield o(
                "WAWebGroupHistoryReportingTokenValidator",
              ).validateAndBuildReportingInfoRow(n, i, a),
              s = l.failureReason,
              u = l.row;
            if (s != null && V(s)) {
              var c = o("WAWebReportingTokenUtils").genDebugMsgInfo(n);
              o(
                "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
              ).maybeInsertDebugPlaceholder({
                externalId: c.externalId,
                nackReason: o("WAWebCreateNackFromStanza").NackReason
                  .ParsingError,
                msgInfo: c,
                offline: !1,
                additionalInfo:
                  "[ghs] reporting token validation failed (reason " +
                  s +
                  ") for msg " +
                  n.id.toString(),
              });
            }
            return u;
          } catch (e) {
            return (
              o("WALogger").WARN(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] Reporting token validation failed for msg ",
                    ": ",
                    "",
                  ])),
                n.id.toString(),
                r("WAWebSerializeError")(e),
              ),
              null
            );
          }
        })),
        U.apply(this, arguments)
      );
    }
    function V(e) {
      return (
        e !==
          o("WAWebWamEnumReportingTokenValidationFailureReason")
            .REPORTING_TOKEN_VALIDATION_FAILURE_REASON.UNSUPPORTED_VERSION &&
        e !==
          o("WAWebWamEnumReportingTokenValidationFailureReason")
            .REPORTING_TOKEN_VALIDATION_FAILURE_REASON
            .GROUP_HISTORY_MESSAGE_MISSING_FROM_PUBLIC_STANZA &&
        o(
          "WAWebMessagingGatingUtils",
        ).isReportingTokenValidationFailureDebugPlaceholderEnabled()
      );
    }
    function H(e, t) {
      var n,
        r = e.ephemeralDuration;
      if (r == null || r === 0) return !1;
      var a = (n = e.t) != null ? n : 0,
        i = a + r;
      return !o("WAWebEphemeralKeepInChatUtils").isKept(e.kicState) && i <= t;
    }
    function G(e, t) {
      var n,
        r = (n = e.t) != null ? n : 0;
      if (r === 0) return !1;
      var a = o("WAWebABProps").getABPropConfigValue(
        "group_history_messages_time_limit_receiver_enforcement_secs",
      );
      return r + 2 * a < t;
    }
    function z(e) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          for (
            var t = e.map(function (e) {
                return e.id.toString();
              }),
              n = yield o("WAWebDBMsgUtils").getMsgsExistByMsgKey(t),
              r = [],
              a = [],
              i = 0;
            i < e.length;
            i++
          )
            if (!n[i]) {
              var l = o("WAWebLidMigrationUtils").getAlternateMsgKey(e[i].id);
              l != null && (r.push(i), a.push(l.toString()));
            }
          if (a.length > 0)
            for (
              var s = yield o("WAWebDBMsgUtils").getMsgsExistByMsgKey(a), u = 0;
              u < r.length;
              u++
            )
              s[u] && (n[r[u]] = !0);
          return e.filter(function (e, t) {
            return !n[t];
          });
        })),
        j.apply(this, arguments)
      );
    }
    function K(e, t) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(t);
          if (n == null) return e;
          var r = n.ephemeralDuration;
          return e.map(function (e) {
            var t,
              n = (t = e.ephemeralDuration) != null ? t : 0;
            return n !== r &&
              o("WAWebMsgEphemerality").messageSupportsEphemerality(e.type)
              ? babelHelpers.extends({}, e, { ephemeralOutOfSync: !0 })
              : e;
          });
        })),
        Q.apply(this, arguments)
      );
    }
    function X(e, t) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r,
            a = yield (E || (E = n("Promise"))).all(e),
            i = (r = []).concat.apply(r, a);
          return i.map(function (e) {
            var n = o(
              "WAWebE2EProtoUtils",
            ).translateAddonMessageKeyToLocalReference(
              o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(e.id),
              t,
            );
            if (n == null) return e;
            var r = o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
              n,
              o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
            );
            return babelHelpers.extends({}, e, r, { id: n });
          });
        })),
        Y.apply(this, arguments)
      );
    }
    function J(e, t, n, r) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i = null;
            try {
              var l,
                s,
                u,
                c,
                d,
                m = yield o(
                  "WAWebGroupHistoryMessageManager",
                ).findGroupHistoryInsertionAnchor(t, n),
                p = yield o(
                  "WAWebGroupHistoryMessageManager",
                ).findLastValidMessageBefore(
                  t,
                  m == null ? void 0 : m.anchorMessage,
                ),
                _ = yield o(
                  "WAWebApiFilterAndReplaceMessages",
                ).filterAndReplaceMessages(e),
                f = _.newMsgs,
                g = ee(f, p == null ? void 0 : p.t),
                h = yield o("WAWebDBEncryptMultipleMsgs").encryptMultipleDBMsgs(
                  g,
                  !1,
                );
              ((i =
                m != null
                  ? yield o(
                      "WAWebGroupHistoryMessageManager",
                    ).ensureAnchorHasRoomForHistory(m, h.length)
                  : m),
                o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history]: anchorType=",
                      " anchorInChatMsgId=",
                      " hasAnchorMessage=",
                      " chatId=",
                      " msgCount=",
                      " messagesAfterJoinTime=",
                      " bundleMsgKey=",
                      "",
                    ])),
                  (l =
                    (s = i) == null || (s = s.anchorMessage) == null
                      ? void 0
                      : s.type) != null
                    ? l
                    : "null",
                  (u = (c = i) == null ? void 0 : c.anchorInChatMsgId) != null
                    ? u
                    : "null",
                  ((d = i) == null ? void 0 : d.anchorMessage) != null,
                  t.toLogString(),
                  h.length,
                  g.length,
                  n.toString(),
                ),
                yield o("WAWebDBStoreEncryptedMsgs").storeEncryptedDBMessages(
                  h,
                  [t.toString()],
                  !1,
                  !1,
                  i,
                ),
                o("WAWebBackendApi").frontendFireAndForget(
                  "logGroupHistoryDbInserted",
                  {
                    groupId: t.toJid(),
                    messagesCount: e.length,
                    dbIgnoredOlderMessages:
                      a ===
                      o("WAWebGroupHistoryMsgData.flow")
                        .MessageHistoryBundleProcessState.INJECTED_PARTIAL,
                  },
                ),
                yield te(g, t, i));
            } catch (e) {
              if (e instanceof r("WAWeb-dexie").BulkError) {
                var y = i != null ? i.anchorInChatMsgId - 1 : null,
                  C = "null";
                if (y != null)
                  try {
                    var b = o("WAWebDBMessageUtils").craftInternalId({
                        chatId: t.toString(),
                        inChatMsgId: y,
                      }),
                      E = yield o("WAWebSchemaMessage")
                        .getMessageTable()
                        .between(["internalId"], b, b, {
                          lowerInclusive: !0,
                          upperInclusive: !0,
                          limit: 1,
                        });
                    if (E.length > 0) {
                      var k,
                        I,
                        T = E[0];
                      C =
                        "id=" +
                        String(T.id) +
                        " t=" +
                        String(T.t) +
                        " type=" +
                        String(T.type) +
                        " subtype=" +
                        String(T.subtype) +
                        " isGroupHistoryMsg=" +
                        String(T.groupHistoryIndividualMessageInfo != null) +
                        " groupHistoryBundleKey=" +
                        ((k =
                          T == null ||
                          (I = T.groupHistoryIndividualMessageInfo) == null ||
                          (I = I.bundleMessageKey) == null
                            ? void 0
                            : I.toString()) != null
                          ? k
                          : "null");
                    }
                  } catch (e) {
                    C =
                      "[group-history] lookup-failed: " +
                      r("WAWebSerializeError")(e);
                  }
                o("WALogger")
                  .ERROR(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "[group-history]: db insert failed firstCollidingMsg=",
                        "",
                      ])),
                    C,
                  )
                  .catching(e)
                  .sendLogs("group-history-bundle-db-insertion-failed");
              } else
                e instanceof Error
                  ? o("WALogger")
                      .ERROR(
                        R ||
                          (R = babelHelpers.taggedTemplateLiteralLoose([
                            "[group-history]: Failed to store messages",
                          ])),
                      )
                      .catching(e)
                  : o("WALogger")
                      .ERROR(
                        L ||
                          (L = babelHelpers.taggedTemplateLiteralLoose([
                            "[group-history]: Failed to store messages",
                          ])),
                      )
                      .catching(r("err")(String(e)));
              throw e;
            }
          },
        )),
        Z.apply(this, arguments)
      );
    }
    function ee(e, t) {
      var n = t != null ? t : 0;
      return e.filter(function (e) {
        var t;
        return ((t = e.t) != null ? t : 0) > n;
      });
    }
    function te(e, t, n) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var a,
              i =
                n != null && (a = n.anchorMessage) != null && a.id
                  ? r("WAWebMsgKey").fromString(n.anchorMessage.id)
                  : null;
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "processMultipleMessages",
              {
                chatId: t,
                msgObjs: e.reverse(),
                meta: { add: "before", isHistory: !0, anchorMsgKey: i },
                processMessagesOrigin: "messageHistoryBundleProcess",
              },
            );
          },
        )),
        ne.apply(this, arguments)
      );
    }
    l.processMessageHistoryBundle = T;
  },
  98,
);
