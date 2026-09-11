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
    "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
    "WAWebMsgEphemerality",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebParseWebMessageInfoApi",
    "WAWebProcessBaseMsgInfo",
    "WAWebProtobufMsgKeyUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsGroupHistory.pb",
    "WAWebReportingTokenUtils",
    "WAWebSchemaMessage",
    "WAWebSerializeError",
    "WAWebUpdateMessageHistoryBundleState",
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
      E = 3;
    function k(e, t, n) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
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
            var E = o("WAWebProcessBaseMsgInfo").msgToBaseMsgInfo(v),
              k = yield (L || (L = n("Promise"))).all([
                T({
                  baseMessage: E,
                  bundleMessageKey: e.id,
                  bundleProtoMessages: y.messages,
                  chatId: a,
                  validationCtx: S,
                }),
                l > 0
                  ? T({
                      baseMessage: E,
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
              ]),
              I = k[0],
              D = I.addonPromises,
              x = I.parsedMessages,
              $ = I.reportingInfoRows,
              P = k[1],
              N = P.addonPromises,
              M = P.parsedMessages,
              w = P.reportingInfoRows,
              A = [].concat(x, M),
              F = [].concat(D, N),
              B = [].concat($, w);
            if (A.length === 0) {
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
              A.length,
              M.length,
            );
            var q = yield O(A),
              V = yield W(q, a),
              G = yield U(F, E),
              z =
                V.length < y.messages.length + l
                  ? o("WAWebGroupHistoryMsgData.flow")
                      .MessageHistoryBundleProcessState.INJECTED_PARTIAL
                  : o("WAWebGroupHistoryMsgData.flow")
                      .MessageHistoryBundleProcessState.INJECTED;
            if ((yield H(V, a, e.id, z), B.length > 0))
              try {
                var j = new Set(
                    V.flatMap(function (e) {
                      var t = [e.id.toString()];
                      return (
                        e.protocolMessageKey != null &&
                          t.push(e.protocolMessageKey.toString()),
                        t
                      );
                    }),
                  ),
                  K = B.filter(function (e) {
                    return j.has(e.msgKey);
                  });
                K.length > 0 &&
                  (yield o(
                    "WAWebDBReportingTokenUtils",
                  ).handleAddReportingInfos(K));
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
            (V.length > 0 &&
              (yield o("WAWebBackendApi").frontendSendAndReceive(
                "hydrateReactionsForMessages",
                {
                  messageIds: V.map(function (e) {
                    return e.id.toString();
                  }),
                },
              ),
              yield (L || (L = n("Promise"))).all(
                V.map(function (e) {
                  return o(
                    "WAWebHandleOrphansForNewMsg",
                  ).handleOrphansForNewMsg(e);
                }),
              )),
              G.length > 0 &&
                (yield o("WAWebAddonProcessMsgs").processMsgsAndGetOrphans(
                  G,
                  null,
                  o("WAWebAddonConstants").AddonProcessMode
                    .ProcessGroupHistoryBundle,
                )),
              yield o(
                "WAWebUpdateMessageHistoryBundleState",
              ).updateGroupHistoryBundleState(e.id, z));
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
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              C = o("WATimeUtils").unixTime(),
              b = { count: 0, ids: [] },
              v = { count: 0, ids: [] },
              S = { count: 0, ids: [] },
              R = { count: 0, ids: [] },
              E = [],
              k = o(
                "WAWebGroupHistoryGating",
              ).shouldSkipUnsupportedMessagesFromBundle(),
              I = 0;
            I < i.length;
            I++
          ) {
            var T = i[I];
            try {
              var D = x(T, t, a, k);
              if (D == null) continue;
              if (k && !P(D)) {
                N(R, D.id);
                continue;
              }
              if (!$(D, l)) {
                N(b, D.id);
                continue;
              }
              if (A(D, C)) {
                N(v, D.id);
                continue;
              }
              if (!u && F(D, C)) {
                N(S, D.id);
                continue;
              }
              (c != null && E.push(M(D, c, I)),
                d.push(D),
                m.push(
                  o("WAWebAddonProcessMsgsUtils").parseHistorySyncMsg({
                    webMsgInfo: T,
                    parsedWebMsgInfo: D,
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
                I,
                r("WAWebSerializeError")(e),
              );
            }
          }
          for (var w of yield (L || (L = n("Promise"))).all(E))
            w != null && p.push(w);
          return (
            R.count > 0 &&
              o("WALogger").WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history]: ",
                    " messages have an unsupported type => ",
                    "",
                  ])),
                R.count,
                R.ids,
              ),
            b.count > 0 &&
              o("WALogger").WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history]: ",
                    " messages do not belong to chat ",
                    " => ",
                    "",
                  ])),
                b.count,
                l.toLogString(),
                b.ids,
              ),
            v.count > 0 &&
              o("WALogger").WARN(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history]: ",
                    " messages are expired => ",
                    "",
                  ])),
                v.count,
                v.ids,
              ),
            S.count > 0 &&
              o("WALogger").WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history]: ",
                    " messages exceed message time limit => ",
                    "",
                  ])),
                S.count,
                S.ids,
              ),
            { parsedMessages: d, addonPromises: m, reportingInfoRows: p }
          );
        })),
        D.apply(this, arguments)
      );
    }
    function x(t, n, r, a) {
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
                        {},
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
                {},
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
        babelHelpers.extends({}, t, {
          is1PBizBotMessage: void 0,
          botMessageInvokerJid: void 0,
        }),
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
            groupHistoryIndividualMessageInfo: {
              bundleMessageKey: r,
              bundleSender: E,
              isEditedAfterReceivedAsHistory: !1,
            },
          });
    }
    function $(e, t) {
      return e.id.remote.toString() === t.toString();
    }
    function P(e) {
      return r("WAWebGroupHistorySupportedMessageTypesUtil")(e.type)
        ? e.isFromTemplate !== !0 && e.isDynamicReplyButtonsMsg !== !0
        : !1;
    }
    function N(e, t) {
      (e.count++, e.ids.length < E && e.ids.push(t.toString()));
    }
    function M(e, t, n) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = t.messageBytesArray[n];
          if (a == null) return null;
          try {
            var i = yield o(
                "WAWebGroupHistoryReportingTokenValidator",
              ).validateAndBuildReportingInfoRow(e, a, t),
              l = i.failureReason,
              s = i.row;
            if (
              l != null &&
              o(
                "WAWebReportingTokenUtils",
              ).showDebugPlaceholderForReportingTokenMismatch(t.stanzaVersion)
            ) {
              var u = o("WAWebReportingTokenUtils").genDebugMsgInfo(e);
              o(
                "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
              ).maybeInsertDebugPlaceholder({
                externalId: u.externalId,
                nackReason: o("WAWebCreateNackFromStanza").NackReason
                  .ParsingError,
                msgInfo: u,
                offline: !1,
                additionalInfo:
                  "[ghs] reporting token validation failed (reason " +
                  l +
                  ") for msg " +
                  e.id.toString(),
              });
            }
            return s;
          } catch (t) {
            return (
              o("WALogger").WARN(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] Reporting token validation failed for msg ",
                    ": ",
                    "",
                  ])),
                e.id.toString(),
                r("WAWebSerializeError")(t),
              ),
              null
            );
          }
        })),
        w.apply(this, arguments)
      );
    }
    function A(e, t) {
      var n,
        r = e.ephemeralDuration;
      if (r == null || r === 0) return !1;
      var a = (n = e.t) != null ? n : 0,
        i = a + r;
      return !o("WAWebEphemeralKeepInChatUtils").isKept(e.kicState) && i <= t;
    }
    function F(e, t) {
      var n,
        r = (n = e.t) != null ? n : 0;
      if (r === 0) return !1;
      var a = o("WAWebABProps").getABPropConfigValue(
        "group_history_messages_time_limit_receiver_enforcement_secs",
      );
      return r + 2 * a < t;
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        B.apply(this, arguments)
      );
    }
    function W(e, t) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        q.apply(this, arguments)
      );
    }
    function U(e, t) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r,
            a = yield (L || (L = n("Promise"))).all(e),
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
        V.apply(this, arguments)
      );
    }
    function H(e, t, n, r) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                g = z(f, p == null ? void 0 : p.t),
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
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
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
                yield j(g, t, i));
            } catch (e) {
              if (e instanceof r("WAWeb-dexie").BulkError) {
                var y = i != null ? i.anchorInChatMsgId - 1 : null,
                  C = "null";
                if (y != null)
                  try {
                    var L = o("WAWebDBMessageUtils").craftInternalId({
                        chatId: t.toString(),
                        inChatMsgId: y,
                      }),
                      E = yield o("WAWebSchemaMessage")
                        .getMessageTable()
                        .between(["internalId"], L, L, {
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
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
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
                        S ||
                          (S = babelHelpers.taggedTemplateLiteralLoose([
                            "[group-history]: Failed to store messages",
                          ])),
                      )
                      .catching(e)
                  : o("WALogger")
                      .ERROR(
                        R ||
                          (R = babelHelpers.taggedTemplateLiteralLoose([
                            "[group-history]: Failed to store messages",
                          ])),
                      )
                      .catching(r("err")(String(e)));
              throw e;
            }
          },
        )),
        G.apply(this, arguments)
      );
    }
    function z(e, t) {
      var n = t != null ? t : 0;
      return e.filter(function (e) {
        var t;
        return ((t = e.t) != null ? t : 0) > n;
      });
    }
    function j(e, t, n) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
        })),
        K.apply(this, arguments)
      );
    }
    l.processMessageHistoryBundle = k;
  },
  98,
);
