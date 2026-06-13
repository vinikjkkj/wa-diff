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
    "WAWebProtobufsGroupHistory.pb",
    "WAWebReportingTokenUtils",
    "WAWebSchemaMessage",
    "WAWebSerializeError",
    "WAWebUpdateMessageHistoryBundleState",
    "asyncToGeneratorRuntime",
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
            var _, f;
            yield o(
              "WAWebUpdateMessageHistoryBundleState",
            ).updateGroupHistoryBundleState(
              e.id,
              o("WAWebGroupHistoryMsgData.flow")
                .MessageHistoryBundleProcessState.PROCESSING,
            );
            var g = yield o("WAWebDecompressAndDecodeBundle").decompressBundle(
                t,
              ),
              h = o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufsGroupHistory.pb").GroupHistorySpec,
                g,
              );
            ((i = h.messages.length),
              (l =
                (_ =
                  (f = h.outOfWindowPinnedMessages) == null
                    ? void 0
                    : f.length) != null
                  ? _
                  : 0),
              o("WAWebBackendApi").frontendFireAndForget(
                "logGroupHistoryParseHistoryProtoSucceeded",
                { groupId: a.toJid(), messagesCount: i, oowPinsCount: l },
              ));
            var y = e.unsafe(),
              C = null;
            try {
              var b;
              C = yield o(
                "WAWebGroupHistoryReportingTokenValidator",
              ).prepareValidationContext(
                e.id,
                g,
                y.messageSecret,
                y.author,
                a,
                (b = y.t) != null ? b : 0,
              );
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
            var v = o("WAWebProcessBaseMsgInfo").msgToBaseMsgInfo(y),
              S = yield (R || (R = n("Promise"))).all([
                k(h.messages, v, a, e.id, C),
                l > 0 &&
                o("WAWebGroupHistoryGating").isOutOfWindowPinsReceiverEnabled()
                  ? k(h.outOfWindowPinnedMessages, v, a, e.id, null, !0)
                  : {
                      parsedMessages: [],
                      addonPromises: [],
                      reportingInfoRows: [],
                    },
              ]),
              L = S[0],
              E = L.addonPromises,
              I = L.parsedMessages,
              T = L.reportingInfoRows,
              D = S[1],
              x = D.addonPromises,
              $ = D.parsedMessages,
              N = D.reportingInfoRows,
              w = [].concat(I, $),
              F = [].concat(E, x),
              B = [].concat(T, N);
            if (w.length === 0) {
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
              w.length,
              $.length,
            );
            var W = yield P(w),
              q = yield M(W, a),
              U = yield A(F, v),
              V =
                q.length < h.messages.length + l
                  ? o("WAWebGroupHistoryMsgData.flow")
                      .MessageHistoryBundleProcessState.INJECTED_PARTIAL
                  : o("WAWebGroupHistoryMsgData.flow")
                      .MessageHistoryBundleProcessState.INJECTED;
            if ((yield O(q, a, e.id, V), B.length > 0))
              try {
                var H = new Set(
                    q.flatMap(function (e) {
                      var t = [e.id.toString()];
                      return (
                        e.protocolMessageKey != null &&
                          t.push(e.protocolMessageKey.toString()),
                        t
                      );
                    }),
                  ),
                  G = B.filter(function (e) {
                    return H.has(e.msgKey);
                  });
                G.length > 0 &&
                  (yield o(
                    "WAWebDBReportingTokenUtils",
                  ).handleAddReportingInfos(G));
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
            (q.length > 0 &&
              (yield o("WAWebBackendApi").frontendSendAndReceive(
                "hydrateReactionsForMessages",
                {
                  messageIds: q.map(function (e) {
                    return e.id.toString();
                  }),
                },
              ),
              yield (R || (R = n("Promise"))).all(
                q.map(function (e) {
                  return o(
                    "WAWebHandleOrphansForNewMsg",
                  ).handleOrphansForNewMsg(e);
                }),
              )),
              U.length > 0 &&
                (yield o("WAWebAddonProcessMsgs").processMsgsAndGetOrphans(
                  U,
                  null,
                  o("WAWebAddonConstants").AddonProcessMode
                    .ProcessGroupHistoryBundle,
                )),
              yield o(
                "WAWebUpdateMessageHistoryBundleState",
              ).updateGroupHistoryBundleState(e.id, V));
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
    function k(e, t, n, r, o, a) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l) {
            l === void 0 && (l = !1);
            for (
              var s = [],
                u = [],
                c = [],
                d = o("WATimeUtils").unixTime(),
                m = [],
                p = 0,
                C = [],
                b = 0,
                v = [],
                S = 0,
                R = 0;
              R < e.length;
              R++
            ) {
              var L = e[R];
              try {
                var E = T(L, t, a);
                if (E == null) continue;
                if (!D(E, n)) {
                  (p++, m.length < 3 && m.push(E.id.toString()));
                  continue;
                }
                if (x(E, d)) {
                  (b++, C.length < 3 && C.push(E.id.toString()));
                  continue;
                }
                if (!l && $(E, d)) {
                  (S++, v.length < 3 && v.push(E.id.toString()));
                  continue;
                }
                var k = o("WAWebAddonProcessMsgsUtils").parseHistorySyncMsg({
                  webMsgInfo: L,
                  parsedWebMsgInfo: E,
                  isFromCag: !1,
                });
                if (i != null) {
                  var I = i.messageBytesArray[R];
                  if (I != null)
                    try {
                      var P = yield o(
                          "WAWebGroupHistoryReportingTokenValidator",
                        ).validateAndBuildReportingInfoRow(E, I, i),
                        N = P.failureReason,
                        M = P.row;
                      if (
                        (M != null && c.push(M),
                        N != null &&
                          o(
                            "WAWebReportingTokenUtils",
                          ).showDebugPlaceholderForReportingTokenMismatch(
                            i.stanzaVersion,
                          ))
                      ) {
                        var w = o("WAWebReportingTokenUtils").genDebugMsgInfo(
                          E,
                        );
                        o(
                          "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
                        ).maybeInsertDebugPlaceholder({
                          externalId: w.externalId,
                          nackReason: o("WAWebCreateNackFromStanza").NackReason
                            .ParsingError,
                          msgInfo: w,
                          offline: !1,
                          additionalInfo:
                            "[ghs] reporting token validation failed (reason " +
                            N +
                            ") for msg " +
                            E.id.toString(),
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
                        E.id.toString(),
                        r("WAWebSerializeError")(e),
                      );
                    }
                }
                (s.push(E), u.push(k));
              } catch (e) {
                o("WALogger").WARN(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history]: Failed to parse message at index ",
                      ": ",
                      "",
                    ])),
                  R,
                  r("WAWebSerializeError")(e),
                );
              }
            }
            return (
              p > 0 &&
                o("WALogger").WARN(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history]: ",
                      " messages do not belong to chat ",
                      " => ",
                      "",
                    ])),
                  p,
                  n.toLogString(),
                  m,
                ),
              b > 0 &&
                o("WALogger").WARN(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history]: ",
                      " messages are expired => ",
                      "",
                    ])),
                  b,
                  C,
                ),
              S > 0 &&
                o("WALogger").WARN(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history]: ",
                      " messages exceed message time limit => ",
                      "",
                    ])),
                  S,
                  v,
                ),
              { parsedMessages: s, addonPromises: u, reportingInfoRows: c }
            );
          },
        )),
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
