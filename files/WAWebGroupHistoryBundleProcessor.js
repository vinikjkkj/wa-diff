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
    "WAWebDBEncryptMultipleMsgs",
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
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebParseWebMessageInfoApi",
    "WAWebProcessBaseMsgInfo",
    "WAWebProtobufMsgKeyUtils",
    "WAWebProtobufsGroupHistory.pb",
    "WAWebSerializeError",
    "WAWebUpdateMessageHistoryBundleState",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S;
    function R(e, t, n) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i = 0,
            l = 0;
          try {
            var f, g;
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
                (f =
                  (g = y.outOfWindowPinnedMessages) == null
                    ? void 0
                    : g.length) != null
                  ? f
                  : 0),
              o("WAWebBackendApi").frontendFireAndForget(
                "logGroupHistoryParseHistoryProtoSucceeded",
                { groupId: a.toJid(), messagesCount: i, oowPinsCount: l },
              ));
            var C = e.unsafe(),
              b = null;
            try {
              var v;
              b = yield o(
                "WAWebGroupHistoryReportingTokenValidator",
              ).prepareValidationContext(
                e.id.toString(),
                h,
                C.messageSecret,
                C.author,
                a,
                (v = C.t) != null ? v : 0,
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
            var R = o("WAWebProcessBaseMsgInfo").msgToBaseMsgInfo(C),
              L = yield (S || (S = n("Promise"))).all([
                E(y.messages, R, a, e.id, b),
                l > 0 &&
                o("WAWebGroupHistoryGating").isOutOfWindowPinsReceiverEnabled()
                  ? E(y.outOfWindowPinnedMessages, R, a, e.id, null, !0)
                  : {
                      parsedMessages: [],
                      addonPromises: [],
                      reportingInfoRows: [],
                    },
              ]),
              k = L[0],
              I = k.addonPromises,
              T = k.parsedMessages,
              D = k.reportingInfoRows,
              x = L[1],
              P = x.addonPromises,
              M = x.parsedMessages,
              A = x.reportingInfoRows,
              F = [].concat(T, M),
              O = [].concat(I, P),
              B = [].concat(D, A);
            if (F.length === 0) {
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
              F.length,
              M.length,
            );
            var W = yield $(F),
              q = yield N(O, R),
              U =
                W.length < y.messages.length + l
                  ? o("WAWebGroupHistoryMsgData.flow")
                      .MessageHistoryBundleProcessState.INJECTED_PARTIAL
                  : o("WAWebGroupHistoryMsgData.flow")
                      .MessageHistoryBundleProcessState.INJECTED;
            if ((yield w(W, a, e.id, U), B.length > 0))
              try {
                var V = new Set(
                    W.map(function (e) {
                      return e.id.toString();
                    }),
                  ),
                  H = B.filter(function (e) {
                    return V.has(e.msgKey);
                  });
                H.length > 0 &&
                  (yield o(
                    "WAWebDBReportingTokenUtils",
                  ).handleAddReportingInfos(H));
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
            (W.length > 0 &&
              (yield o("WAWebBackendApi").frontendSendAndReceive(
                "hydrateReactionsForMessages",
                {
                  messageIds: W.map(function (e) {
                    return e.id.toString();
                  }),
                },
              ),
              yield (S || (S = n("Promise"))).all(
                W.map(function (e) {
                  return o(
                    "WAWebHandleOrphansForNewMsg",
                  ).handleOrphansForNewMsg(e);
                }),
              )),
              q.length > 0 &&
                (yield o("WAWebAddonProcessMsgs").processMsgsAndGetOrphans(
                  q,
                  null,
                  o("WAWebAddonConstants").AddonProcessMode
                    .ProcessGroupHistoryBundle,
                )),
              yield o(
                "WAWebUpdateMessageHistoryBundleState",
              ).updateGroupHistoryBundleState(e.id, U));
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
            ) {
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history]: db insert failed",
                    ])),
                )
                .catching(t)
                .sendLogs("group-history-bundle-db-insertion-failed");
              return;
            } else
              t instanceof Error
                ? o("WALogger")
                    .ERROR(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "[group-history]: Failed to process bundle",
                        ])),
                    )
                    .catching(t)
                    .sendLogs("group-history-bundle-processing-failed")
                : o("WALogger")
                    .ERROR(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "[group-history]: Failed to process bundle",
                        ])),
                    )
                    .catching(r("err")(String(t)))
                    .sendLogs("group-history-bundle-processing-failed");
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t, n, r, o, a) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l) {
            l === void 0 && (l = !1);
            for (
              var s = [],
                u = [],
                c = [],
                d = o("WATimeUtils").unixTime(),
                m = [],
                p = 0,
                _ = [],
                b = 0,
                v = [],
                S = 0,
                R = 0;
              R < e.length;
              R++
            ) {
              var L = e[R];
              try {
                var E = I(L, t, a);
                if (E == null) continue;
                if (!T(E, n)) {
                  (p++, m.length < 3 && m.push(E.id.toString()));
                  continue;
                }
                if (D(E, d)) {
                  (b++, _.length < 3 && _.push(E.id.toString()));
                  continue;
                }
                if (!l && x(E, d)) {
                  (S++, v.length < 3 && v.push(E.id.toString()));
                  continue;
                }
                var k = o("WAWebAddonProcessMsgsUtils").parseHistorySyncMsg({
                  webMsgInfo: L,
                  parsedWebMsgInfo: E,
                  isFromCag: !1,
                });
                if (i != null) {
                  var $ = i.messageBytesArray[R];
                  if ($ != null)
                    try {
                      var P = yield o(
                        "WAWebGroupHistoryReportingTokenValidator",
                      ).validateAndBuildReportingInfoRow(E, $, i);
                      P != null && c.push(P);
                    } catch (e) {
                      o("WALogger").WARN(
                        f ||
                          (f = babelHelpers.taggedTemplateLiteralLoose([
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
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
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
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
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
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history]: ",
                      " messages are expired => ",
                      "",
                    ])),
                  b,
                  _,
                ),
              S > 0 &&
                o("WALogger").WARN(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
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
        k.apply(this, arguments)
      );
    }
    function I(t, n, r) {
      var a,
        i,
        l,
        s = o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(
          babelHelpers.extends({}, t.key, { participant: t.participant }),
          n,
        ),
        u =
          ((a = t.message) == null ||
          (a = a.editedMessage) == null ||
          (a = a.message) == null ||
          (a = a.protocolMessage) == null
            ? void 0
            : a.key) != null,
        c = u
          ? (i = t.message) == null ||
            (i = i.editedMessage) == null ||
            (i = i.message) == null ||
            (i = i.protocolMessage) == null
            ? void 0
            : i.key
          : (l = t.message) == null || (l = l.protocolMessage) == null
            ? void 0
            : l.key;
      if (c != null) {
        var d = o(
          "WAWebE2EProtoUtils",
        ).translateRegularMessageKeyToLocalReference(
          babelHelpers.extends({}, c, { participant: t.participant }),
          n,
        );
        if (d != null)
          if (u) {
            var m, p, _;
            t.message = babelHelpers.extends({}, t.message, {
              editedMessage: babelHelpers.extends(
                {},
                (m = t.message) == null ? void 0 : m.editedMessage,
                {
                  message: babelHelpers.extends(
                    {},
                    (p = t.message) == null || (p = p.editedMessage) == null
                      ? void 0
                      : p.message,
                    {
                      protocolMessage: babelHelpers.extends(
                        {},
                        (_ = t.message) == null ||
                          (_ = _.editedMessage) == null ||
                          (_ = _.message) == null
                          ? void 0
                          : _.protocolMessage,
                        {
                          key: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(
                            d,
                          ),
                        },
                      ),
                    },
                  ),
                },
              ),
            });
          } else {
            var f;
            t.message = babelHelpers.extends({}, t.message, {
              protocolMessage: babelHelpers.extends(
                {},
                (f = t.message) == null ? void 0 : f.protocolMessage,
                { key: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(d) },
              ),
            });
          }
      }
      if (s) {
        var g = o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(s);
        ((t.key = g), g.participant != null && (t.participant = g.participant));
      }
      var h = o("WAWebParseWebMessageInfoApi").parseWebMessageInfo(t);
      if (!h) return null;
      var y = n.author;
      return y == null
        ? (o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history] Bundle sender is null",
              ])),
          ),
          null)
        : babelHelpers.extends({}, h, {
            ack:
              s != null && s.fromMe
                ? o("WAWebAck").ACK.RECEIVED
                : o("WAWebAck").ACK.READ,
            groupHistoryIndividualMessageInfo: {
              bundleMessageKey: r,
              bundleSender: y,
              isEditedAfterReceivedAsHistory: !1,
            },
          });
    }
    function T(e, t) {
      return e.id.remote.toString() === t.toString();
    }
    function D(e, t) {
      var n,
        r = e.ephemeralDuration;
      if (r == null || r === 0) return !1;
      var a = (n = e.t) != null ? n : 0,
        i = a + r;
      return !o("WAWebEphemeralKeepInChatUtils").isKept(e.kicState) && i <= t;
    }
    function x(e, t) {
      var n,
        r = (n = e.t) != null ? n : 0;
      if (r === 0) return !1;
      var a = o("WAWebABProps").getABPropConfigValue(
        "group_history_messages_time_limit_receiver_enforcement_secs",
      );
      return r + 2 * a < t;
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(function (e) {
              return e.id.toString();
            }),
            n = yield o("WAWebDBMsgUtils").getMsgsExistByMsgKey(t);
          return e.filter(function (e, t) {
            return !n[t];
          });
        })),
        P.apply(this, arguments)
      );
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r,
            a = yield (S || (S = n("Promise"))).all(e),
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
        M.apply(this, arguments)
      );
    }
    function w(e, t, n, r) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            try {
              var i = yield o(
                  "WAWebGroupHistoryMessageManager",
                ).findGroupHistoryInsertionAnchor(t, n),
                l = yield o(
                  "WAWebGroupHistoryMessageManager",
                ).findLastValidMessageBefore(
                  t,
                  i == null ? void 0 : i.anchorMessage,
                ),
                s = yield o(
                  "WAWebApiFilterAndReplaceMessages",
                ).filterAndReplaceMessages(e),
                u = s.newMsgs,
                c = F(u, l == null ? void 0 : l.t),
                d = yield o("WAWebDBEncryptMultipleMsgs").encryptMultipleDBMsgs(
                  c,
                  !1,
                );
              (yield o("WAWebDBStoreEncryptedMsgs").storeEncryptedDBMessages(
                d,
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
                yield O(c, t, i));
            } catch (e) {
              throw (
                e instanceof Error
                  ? o("WALogger")
                      .ERROR(
                        b ||
                          (b = babelHelpers.taggedTemplateLiteralLoose([
                            "[group-history]: Failed to store messages",
                          ])),
                      )
                      .catching(e)
                  : o("WALogger")
                      .ERROR(
                        v ||
                          (v = babelHelpers.taggedTemplateLiteralLoose([
                            "[group-history]: Failed to store messages",
                          ])),
                      )
                      .catching(r("err")(String(e))),
                e
              );
            }
          },
        )),
        A.apply(this, arguments)
      );
    }
    function F(e, t) {
      var n = t != null ? t : 0;
      return e.filter(function (e) {
        var t;
        return ((t = e.t) != null ? t : 0) > n;
      });
    }
    function O(e, t, n) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
        B.apply(this, arguments)
      );
    }
    l.processMessageHistoryBundle = R;
  },
  98,
);
