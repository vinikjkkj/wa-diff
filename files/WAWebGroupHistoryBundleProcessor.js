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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R;
    function L(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
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
              b = (
                (g = y.uncountedAssociatedMessageLists) != null ? g : []
              ).reduce(function (e, t) {
                var n, r;
                return (
                  e +
                  ((n = (r = t.messages) == null ? void 0 : r.length) != null
                    ? n
                    : 0)
                );
              }, 0);
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
              var L;
              S = yield o(
                "WAWebGroupHistoryReportingTokenValidator",
              ).prepareValidationContext({
                bundleMessageSecret: v.messageSecret,
                bundleMsgId: e.id,
                bundleMsgTimestamp: (L = v.t) != null ? L : 0,
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
              I = yield (R || (R = n("Promise"))).all([
                k({
                  baseMessage: E,
                  bundleMessageKey: e.id,
                  bundleProtoMessages: y.messages,
                  chatId: a,
                  validationCtx: S,
                }),
                l > 0 &&
                o("WAWebGroupHistoryGating").isOutOfWindowPinsReceiverEnabled()
                  ? k({
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
              T = I[0],
              D = T.addonPromises,
              x = T.parsedMessages,
              $ = T.reportingInfoRows,
              N = I[1],
              w = N.addonPromises,
              F = N.parsedMessages,
              B = N.reportingInfoRows,
              W = [].concat(x, F),
              q = [].concat(D, w),
              U = [].concat($, B);
            if (W.length === 0) {
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
              W.length,
              F.length,
            );
            var V = yield P(W),
              H = yield M(V, a),
              G = yield A(q, E),
              z =
                H.length < y.messages.length + l
                  ? o("WAWebGroupHistoryMsgData.flow")
                      .MessageHistoryBundleProcessState.INJECTED_PARTIAL
                  : o("WAWebGroupHistoryMsgData.flow")
                      .MessageHistoryBundleProcessState.INJECTED;
            if ((yield O(H, a, e.id, z), U.length > 0))
              try {
                var j = new Set(
                    H.flatMap(function (e) {
                      var t = [e.id.toString()];
                      return (
                        e.protocolMessageKey != null &&
                          t.push(e.protocolMessageKey.toString()),
                        t
                      );
                    }),
                  ),
                  K = U.filter(function (e) {
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
            (H.length > 0 &&
              (yield o("WAWebBackendApi").frontendSendAndReceive(
                "hydrateReactionsForMessages",
                {
                  messageIds: H.map(function (e) {
                    return e.id.toString();
                  }),
                },
              ),
              yield (R || (R = n("Promise"))).all(
                H.map(function (e) {
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
              yield o(
                "WAWebUpdateMessageHistoryBundleState",
              ).updateGroupHistoryBundleState(
                e.id,
                o("WAWebGroupHistoryMsgData.flow")
                  .MessageHistoryBundleProcessState.FAILED,
              ),
              t instanceof r("WAWeb-dexie").BulkError)
            )
              return;
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
                  .sendLogs("group-history-bundle-processing-failed");
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          for (
            var t = e.baseMessage,
              n = e.bundleMessageKey,
              a = e.bundleProtoMessages,
              i = e.chatId,
              l = e.skipMessageTooOldCheck,
              s = l === void 0 ? !1 : l,
              u = e.validationCtx,
              c = [],
              d = [],
              m = [],
              p = o("WATimeUtils").unixTime(),
              C = [],
              b = 0,
              v = [],
              S = 0,
              R = [],
              L = 0,
              E = 0;
            E < a.length;
            E++
          ) {
            var k = a[E];
            try {
              var I = T(k, t, n);
              if (I == null) continue;
              if (!D(I, i)) {
                (b++, C.length < 3 && C.push(I.id.toString()));
                continue;
              }
              if (x(I, p)) {
                (S++, v.length < 3 && v.push(I.id.toString()));
                continue;
              }
              if (!s && $(I, p)) {
                (L++, R.length < 3 && R.push(I.id.toString()));
                continue;
              }
              var P = o("WAWebAddonProcessMsgsUtils").parseHistorySyncMsg({
                webMsgInfo: k,
                parsedWebMsgInfo: I,
                isFromCag: !1,
              });
              if (u != null) {
                var N = u.messageBytesArray[E];
                if (N != null)
                  try {
                    var M = yield o(
                        "WAWebGroupHistoryReportingTokenValidator",
                      ).validateAndBuildReportingInfoRow(I, N, u),
                      w = M.failureReason,
                      A = M.row;
                    if (
                      (A != null && m.push(A),
                      w != null &&
                        o(
                          "WAWebReportingTokenUtils",
                        ).showDebugPlaceholderForReportingTokenMismatch(
                          u.stanzaVersion,
                        ))
                    ) {
                      var F = o("WAWebReportingTokenUtils").genDebugMsgInfo(I);
                      o(
                        "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
                      ).maybeInsertDebugPlaceholder({
                        externalId: F.externalId,
                        nackReason: o("WAWebCreateNackFromStanza").NackReason
                          .ParsingError,
                        msgInfo: F,
                        offline: !1,
                        additionalInfo:
                          "[ghs] reporting token validation failed (reason " +
                          w +
                          ") for msg " +
                          I.id.toString(),
                      });
                    }
                  } catch (e) {
                    o("WALogger").WARN(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "[group-history] Reporting token validation failed for msg ",
                          ": ",
                          "",
                        ])),
                      I.id.toString(),
                      r("WAWebSerializeError")(e),
                    );
                  }
              }
              (c.push(I), d.push(P));
            } catch (e) {
              o("WALogger").WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history]: Failed to parse message at index ",
                    ": ",
                    "",
                  ])),
                E,
                r("WAWebSerializeError")(e),
              );
            }
          }
          return (
            b > 0 &&
              o("WALogger").WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history]: ",
                    " messages do not belong to chat ",
                    " => ",
                    "",
                  ])),
                b,
                i.toLogString(),
                C,
              ),
            S > 0 &&
              o("WALogger").WARN(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history]: ",
                    " messages are expired => ",
                    "",
                  ])),
                S,
                v,
              ),
            L > 0 &&
              o("WALogger").WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history]: ",
                    " messages exceed message time limit => ",
                    "",
                  ])),
                L,
                R,
              ),
            { parsedMessages: c, addonPromises: d, reportingInfoRows: m }
          );
        })),
        I.apply(this, arguments)
      );
    }
    function T(t, n, r) {
      var a,
        i,
        l,
        s,
        u = o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(
          babelHelpers.extends({}, t.key, { participant: t.participant }),
          n,
        ),
        c =
          ((a = t.message) == null ||
          (a = a.editedMessage) == null ||
          (a = a.message) == null ||
          (a = a.protocolMessage) == null
            ? void 0
            : a.key) != null,
        d = c
          ? (i = t.message) == null ||
            (i = i.editedMessage) == null ||
            (i = i.message) == null ||
            (i = i.protocolMessage) == null
            ? void 0
            : i.key
          : (l = t.message) == null || (l = l.protocolMessage) == null
            ? void 0
            : l.key;
      if (d != null) {
        var m = o(
          "WAWebE2EProtoUtils",
        ).translateRegularMessageKeyToLocalReference(
          babelHelpers.extends({}, d, { participant: t.participant }),
          n,
        );
        if (m != null)
          if (c) {
            var p, _, f;
            t.message = babelHelpers.extends({}, t.message, {
              editedMessage: babelHelpers.extends(
                {},
                (p = t.message) == null ? void 0 : p.editedMessage,
                {
                  message: babelHelpers.extends(
                    {},
                    (_ = t.message) == null || (_ = _.editedMessage) == null
                      ? void 0
                      : _.message,
                    {
                      protocolMessage: babelHelpers.extends(
                        {},
                        (f = t.message) == null ||
                          (f = f.editedMessage) == null ||
                          (f = f.message) == null
                          ? void 0
                          : f.protocolMessage,
                        {
                          key: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(
                            m,
                          ),
                        },
                      ),
                    },
                  ),
                },
              ),
            });
          } else {
            var g;
            t.message = babelHelpers.extends({}, t.message, {
              protocolMessage: babelHelpers.extends(
                {},
                (g = t.message) == null ? void 0 : g.protocolMessage,
                { key: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(m) },
              ),
            });
          }
      }
      if (u) {
        var h = o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(u);
        ((t.key = h), h.participant != null && (t.participant = h.participant));
      }
      var y =
        (s = t.message) == null ||
        (s = s.messageContextInfo) == null ||
        (s = s.messageAssociation) == null
          ? void 0
          : s.parentMessageKey;
      if (y != null) {
        var C,
          b = o(
            "WAWebE2EProtoUtils",
          ).translateRegularMessageKeyToLocalReference(
            babelHelpers.extends({}, y, { participant: t.participant }),
            n,
          );
        if (
          b != null &&
          ((C = t.message) == null || (C = C.messageContextInfo) == null
            ? void 0
            : C.messageAssociation) != null
        ) {
          var v, S;
          t.message = babelHelpers.extends({}, t.message, {
            messageContextInfo: babelHelpers.extends(
              {},
              (v = t.message) == null ? void 0 : v.messageContextInfo,
              {
                messageAssociation: babelHelpers.extends(
                  {},
                  (S = t.message) == null || (S = S.messageContextInfo) == null
                    ? void 0
                    : S.messageAssociation,
                  {
                    parentMessageKey: o(
                      "WAWebProtobufMsgKeyUtils",
                    ).msgKeyToProtobuf(b),
                  },
                ),
              },
            ),
          });
        }
      }
      var R = o("WAWebParseWebMessageInfoApi").parseWebMessageInfo(t);
      if (!R) return null;
      var L = n.author;
      return L == null
        ? (o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history] Bundle sender is null",
              ])),
          ),
          null)
        : babelHelpers.extends({}, R, {
            ack:
              u != null && u.fromMe
                ? o("WAWebAck").ACK.RECEIVED
                : o("WAWebAck").ACK.READ,
            groupHistoryIndividualMessageInfo: {
              bundleMessageKey: r,
              bundleSender: L,
              isEditedAfterReceivedAsHistory: !1,
            },
          });
    }
    function D(e, t) {
      return e.id.remote.toString() === t.toString();
    }
    function x(e, t) {
      var n,
        r = e.ephemeralDuration;
      if (r == null || r === 0) return !1;
      var a = (n = e.t) != null ? n : 0,
        i = a + r;
      return !o("WAWebEphemeralKeepInChatUtils").isKept(e.kicState) && i <= t;
    }
    function $(e, t) {
      var n,
        r = (n = e.t) != null ? n : 0;
      if (r === 0) return !1;
      var a = o("WAWebABProps").getABPropConfigValue(
        "group_history_messages_time_limit_receiver_enforcement_secs",
      );
      return r + 2 * a < t;
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        N.apply(this, arguments)
      );
    }
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        w.apply(this, arguments)
      );
    }
    function A(e, t) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r,
            a = yield (R || (R = n("Promise"))).all(e),
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
        F.apply(this, arguments)
      );
    }
    function O(e, t, n, r) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i = null;
            try {
              var l, s, u, c, d, m;
              i = yield o(
                "WAWebGroupHistoryMessageManager",
              ).findGroupHistoryInsertionAnchor(t, n);
              var p = yield o(
                  "WAWebGroupHistoryMessageManager",
                ).findLastValidMessageBefore(
                  t,
                  (l = i) == null ? void 0 : l.anchorMessage,
                ),
                _ = yield o(
                  "WAWebApiFilterAndReplaceMessages",
                ).filterAndReplaceMessages(e),
                f = _.newMsgs,
                g = W(f, p == null ? void 0 : p.t),
                h = yield o("WAWebDBEncryptMultipleMsgs").encryptMultipleDBMsgs(
                  g,
                  !1,
                );
              (o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history]: anchorType=",
                    " anchorInChatMsgId=",
                    " hasAnchorMessage=",
                    " chatId=",
                    " msgCount=",
                    " messagesAfterJoinTime=",
                    " bundleMsgKey=",
                    "",
                  ])),
                (s =
                  (u = i) == null || (u = u.anchorMessage) == null
                    ? void 0
                    : u.type) != null
                  ? s
                  : "null",
                (c = (d = i) == null ? void 0 : d.anchorInChatMsgId) != null
                  ? c
                  : "null",
                ((m = i) == null ? void 0 : m.anchorMessage) != null,
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
                yield q(g, t, i));
            } catch (e) {
              if (e instanceof r("WAWeb-dexie").BulkError) {
                var y = i != null ? i.anchorInChatMsgId - 1 : null,
                  R = "null";
                if (y != null)
                  try {
                    var L = o("WAWebDBMessageUtils").craftInternalId(
                        t.toString(),
                        y,
                      ),
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
                      R =
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
                    R =
                      "[group-history] lookup-failed: " +
                      r("WAWebSerializeError")(e);
                  }
                o("WALogger")
                  .ERROR(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "[group-history]: db insert failed firstCollidingMsg=",
                        "",
                      ])),
                    R,
                  )
                  .catching(e)
                  .sendLogs("group-history-bundle-db-insertion-failed");
              } else
                e instanceof Error
                  ? o("WALogger")
                      .ERROR(
                        v ||
                          (v = babelHelpers.taggedTemplateLiteralLoose([
                            "[group-history]: Failed to store messages",
                          ])),
                      )
                      .catching(e)
                  : o("WALogger")
                      .ERROR(
                        S ||
                          (S = babelHelpers.taggedTemplateLiteralLoose([
                            "[group-history]: Failed to store messages",
                          ])),
                      )
                      .catching(r("err")(String(e)));
              throw e;
            }
          },
        )),
        B.apply(this, arguments)
      );
    }
    function W(e, t) {
      var n = t != null ? t : 0;
      return e.filter(function (e) {
        var t;
        return ((t = e.t) != null ? t : 0) > n;
      });
    }
    function q(e, t, n) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
        U.apply(this, arguments)
      );
    }
    l.processMessageHistoryBundle = L;
  },
  98,
);
