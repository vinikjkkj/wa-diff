__d(
  "WAWebGroupHistoryBundleProcessor",
  [
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
    "WAWebMsgEphemerality",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebParseWebMessageInfoApi",
    "WAWebProcessBaseMsgInfo",
    "WAWebProtobufMsgKeyUtils",
    "WAWebProtobufsGroupHistory.pb",
    "WAWebSchemaMessage",
    "WAWebSerializeError",
    "WAWebUpdateMessageHistoryBundleState",
    "decodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S;
    async function R(t, n, a) {
      var i = 0,
        l = 0;
      try {
        var p, _;
        await o(
          "WAWebUpdateMessageHistoryBundleState",
        ).updateGroupHistoryBundleState(
          t.id,
          o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
            .PROCESSING,
        );
        var f = await o("WAWebDecompressAndDecodeBundle").decompressBundle(n),
          g = o("decodeProtobuf").decodeProtobuf(
            o("WAWebProtobufsGroupHistory.pb").GroupHistorySpec,
            f,
          );
        ((i = g.messages.length),
          (l =
            (p =
              (_ = g.outOfWindowPinnedMessages) == null ? void 0 : _.length) !=
            null
              ? p
              : 0),
          o("WAWebBackendApi").frontendFireAndForget(
            "logGroupHistoryParseHistoryProtoSucceeded",
            { groupId: a.toJid(), messagesCount: i, oowPinsCount: l },
          ));
        var h = t.unsafe(),
          y = null;
        try {
          var C;
          y = await o(
            "WAWebGroupHistoryReportingTokenValidator",
          ).prepareValidationContext(
            t.id,
            f,
            h.messageSecret,
            h.author,
            a,
            (C = h.t) != null ? C : 0,
          );
        } catch (t) {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history] Failed to prepare validation context: ",
                "",
              ])),
            r("WAWebSerializeError")(t),
          );
        }
        var b = o("WAWebProcessBaseMsgInfo").msgToBaseMsgInfo(h),
          v = await Promise.all([
            L(g.messages, b, a, t.id, y),
            l > 0 &&
            o("WAWebGroupHistoryGating").isOutOfWindowPinsReceiverEnabled()
              ? L(g.outOfWindowPinnedMessages, b, a, t.id, null, !0)
              : {
                  parsedMessages: [],
                  addonPromises: [],
                  reportingInfoRows: [],
                },
          ]),
          S = v[0],
          R = S.addonPromises,
          E = S.parsedMessages,
          k = S.reportingInfoRows,
          I = v[1],
          T = I.addonPromises,
          N = I.parsedMessages,
          M = I.reportingInfoRows,
          w = [].concat(E, N),
          A = [].concat(R, T),
          F = [].concat(k, M);
        if (w.length === 0) {
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history]: No valid messages parsed from bundle",
              ])),
          );
          return;
        }
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[group-history]: parsed ",
              " msgs (",
              " OOW pins), injecting",
            ])),
          w.length,
          N.length,
        );
        var O = await D(w),
          B = await x(O, a),
          W = await $(A, b),
          q =
            B.length < g.messages.length + l
              ? o("WAWebGroupHistoryMsgData.flow")
                  .MessageHistoryBundleProcessState.INJECTED_PARTIAL
              : o("WAWebGroupHistoryMsgData.flow")
                  .MessageHistoryBundleProcessState.INJECTED;
        if ((await P(B, a, t.id, q), F.length > 0))
          try {
            var U = new Set(
                B.flatMap(function (e) {
                  var t = [e.id.toString()];
                  return (
                    e.protocolMessageKey != null &&
                      t.push(e.protocolMessageKey.toString()),
                    t
                  );
                }),
              ),
              V = F.filter(function (e) {
                return U.has(e.msgKey);
              });
            V.length > 0 &&
              (await o("WAWebDBReportingTokenUtils").handleAddReportingInfos(
                V,
              ));
          } catch (e) {
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-history] Failed to persist reporting infos: ",
                  "",
                ])),
              r("WAWebSerializeError")(e),
            );
          }
        (B.length > 0 &&
          (await o("WAWebBackendApi").frontendSendAndReceive(
            "hydrateReactionsForMessages",
            {
              messageIds: B.map(function (e) {
                return e.id.toString();
              }),
            },
          ),
          await Promise.all(
            B.map(function (e) {
              return o("WAWebHandleOrphansForNewMsg").handleOrphansForNewMsg(e);
            }),
          )),
          W.length > 0 &&
            (await o("WAWebAddonProcessMsgs").processMsgsAndGetOrphans(
              W,
              null,
              o("WAWebAddonConstants").AddonProcessMode
                .ProcessGroupHistoryBundle,
            )),
          await o(
            "WAWebUpdateMessageHistoryBundleState",
          ).updateGroupHistoryBundleState(t.id, q));
      } catch (e) {
        if (
          (o("WAWebBackendApi").frontendFireAndForget(
            "logGroupHistoryParseHistoryProtoFailed",
            { groupId: a.toJid(), messagesCount: i + l, oowPinsCount: l },
          ),
          await o(
            "WAWebUpdateMessageHistoryBundleState",
          ).updateGroupHistoryBundleState(
            t.id,
            o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
              .FAILED,
          ),
          e instanceof r("WAWeb-dexie").BulkError)
        )
          return;
        e instanceof Error
          ? o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history]: Failed to process bundle",
                  ])),
              )
              .catching(e)
              .sendLogs("group-history-bundle-processing-failed")
          : o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history]: Failed to process bundle",
                  ])),
              )
              .catching(r("err")(String(e)))
              .sendLogs("group-history-bundle-processing-failed");
      }
    }
    async function L(e, t, n, a, i, l) {
      l === void 0 && (l = !1);
      for (
        var s = [],
          u = [],
          c = [],
          d = o("WATimeUtils").unixTime(),
          m = [],
          y = 0,
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
          var D = E(L, t, a);
          if (D == null) continue;
          if (!k(D, n)) {
            (y++, m.length < 3 && m.push(D.id.toString()));
            continue;
          }
          if (I(D, d)) {
            (b++, C.length < 3 && C.push(D.id.toString()));
            continue;
          }
          if (!l && T(D, d)) {
            (S++, v.length < 3 && v.push(D.id.toString()));
            continue;
          }
          var x = o("WAWebAddonProcessMsgsUtils").parseHistorySyncMsg({
            webMsgInfo: L,
            parsedWebMsgInfo: D,
            isFromCag: !1,
          });
          if (i != null) {
            var $ = i.messageBytesArray[R];
            if ($ != null)
              try {
                var P = await o(
                  "WAWebGroupHistoryReportingTokenValidator",
                ).validateAndBuildReportingInfoRow(D, $, i);
                P != null && c.push(P);
              } catch (e) {
                o("WALogger").WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history] Reporting token validation failed for msg ",
                      ": ",
                      "",
                    ])),
                  D.id.toString(),
                  r("WAWebSerializeError")(e),
                );
              }
          }
          (s.push(D), u.push(x));
        } catch (e) {
          o("WALogger").WARN(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
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
        y > 0 &&
          o("WALogger").WARN(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history]: ",
                " messages do not belong to chat ",
                " => ",
                "",
              ])),
            y,
            n.toLogString(),
            m,
          ),
        b > 0 &&
          o("WALogger").WARN(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history]: ",
                " messages are expired => ",
                "",
              ])),
            b,
            C,
          ),
        S > 0 &&
          o("WALogger").WARN(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history]: ",
                " messages exceed message time limit => ",
                "",
              ])),
            S,
            v,
          ),
        { parsedMessages: s, addonPromises: u, reportingInfoRows: c }
      );
    }
    function E(e, t, n) {
      var r,
        a,
        i,
        l,
        s = o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(
          babelHelpers.extends({}, e.key, { participant: e.participant }),
          t,
        ),
        u =
          ((r = e.message) == null ||
          (r = r.editedMessage) == null ||
          (r = r.message) == null ||
          (r = r.protocolMessage) == null
            ? void 0
            : r.key) != null,
        c = u
          ? (a = e.message) == null ||
            (a = a.editedMessage) == null ||
            (a = a.message) == null ||
            (a = a.protocolMessage) == null
            ? void 0
            : a.key
          : (i = e.message) == null || (i = i.protocolMessage) == null
            ? void 0
            : i.key;
      if (c != null) {
        var d = o(
          "WAWebE2EProtoUtils",
        ).translateRegularMessageKeyToLocalReference(
          babelHelpers.extends({}, c, { participant: e.participant }),
          t,
        );
        if (d != null)
          if (u) {
            var m, p, _;
            e.message = babelHelpers.extends({}, e.message, {
              editedMessage: babelHelpers.extends(
                {},
                (m = e.message) == null ? void 0 : m.editedMessage,
                {
                  message: babelHelpers.extends(
                    {},
                    (p = e.message) == null || (p = p.editedMessage) == null
                      ? void 0
                      : p.message,
                    {
                      protocolMessage: babelHelpers.extends(
                        {},
                        (_ = e.message) == null ||
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
            e.message = babelHelpers.extends({}, e.message, {
              protocolMessage: babelHelpers.extends(
                {},
                (f = e.message) == null ? void 0 : f.protocolMessage,
                { key: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(d) },
              ),
            });
          }
      }
      if (s) {
        var g = o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(s);
        ((e.key = g), g.participant != null && (e.participant = g.participant));
      }
      var h =
        (l = e.message) == null ||
        (l = l.messageContextInfo) == null ||
        (l = l.messageAssociation) == null
          ? void 0
          : l.parentMessageKey;
      if (h != null) {
        var C,
          b = o(
            "WAWebE2EProtoUtils",
          ).translateRegularMessageKeyToLocalReference(
            babelHelpers.extends({}, h, { participant: e.participant }),
            t,
          );
        if (
          b != null &&
          ((C = e.message) == null || (C = C.messageContextInfo) == null
            ? void 0
            : C.messageAssociation) != null
        ) {
          var v, S;
          e.message = babelHelpers.extends({}, e.message, {
            messageContextInfo: babelHelpers.extends(
              {},
              (v = e.message) == null ? void 0 : v.messageContextInfo,
              {
                messageAssociation: babelHelpers.extends(
                  {},
                  (S = e.message) == null || (S = S.messageContextInfo) == null
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
      var R = o("WAWebParseWebMessageInfoApi").parseWebMessageInfo(e);
      if (!R) return null;
      var L = t.author;
      return L == null
        ? (o("WALogger").ERROR(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history] Bundle sender is null",
              ])),
          ),
          null)
        : babelHelpers.extends({}, R, {
            ack:
              s != null && s.fromMe
                ? o("WAWebAck").ACK.RECEIVED
                : o("WAWebAck").ACK.READ,
            groupHistoryIndividualMessageInfo: {
              bundleMessageKey: n,
              bundleSender: L,
              isEditedAfterReceivedAsHistory: !1,
            },
          });
    }
    function k(e, t) {
      return e.id.remote.toString() === t.toString();
    }
    function I(e, t) {
      var n,
        r = e.ephemeralDuration;
      if (r == null || r === 0) return !1;
      var a = (n = e.t) != null ? n : 0,
        i = a + r;
      return !o("WAWebEphemeralKeepInChatUtils").isKept(e.kicState) && i <= t;
    }
    function T(e, t) {
      var n,
        r = (n = e.t) != null ? n : 0;
      if (r === 0) return !1;
      var a = o("WAWebABProps").getABPropConfigValue(
        "group_history_messages_time_limit_receiver_enforcement_secs",
      );
      return r + 2 * a < t;
    }
    async function D(e) {
      for (
        var t = e.map(function (e) {
            return e.id.toString();
          }),
          n = await o("WAWebDBMsgUtils").getMsgsExistByMsgKey(t),
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
          var s = await o("WAWebDBMsgUtils").getMsgsExistByMsgKey(a), u = 0;
          u < r.length;
          u++
        )
          s[u] && (n[r[u]] = !0);
      return e.filter(function (e, t) {
        return !n[t];
      });
    }
    async function x(e, t) {
      var n = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(t);
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
    }
    async function $(e, t) {
      var n,
        r = await Promise.all(e),
        a = (n = []).concat.apply(n, r);
      return a.map(function (e) {
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
    }
    async function P(e, t, n, a) {
      var i = null;
      try {
        var l, s, u, c, d, m;
        i = await o(
          "WAWebGroupHistoryMessageManager",
        ).findGroupHistoryInsertionAnchor(t, n);
        var p = await o(
            "WAWebGroupHistoryMessageManager",
          ).findLastValidMessageBefore(
            t,
            (l = i) == null ? void 0 : l.anchorMessage,
          ),
          _ = await o(
            "WAWebApiFilterAndReplaceMessages",
          ).filterAndReplaceMessages(e),
          f = _.newMsgs,
          g = N(f, p == null ? void 0 : p.t),
          h = await o("WAWebDBEncryptMultipleMsgs").encryptMultipleDBMsgs(
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
          await o("WAWebDBStoreEncryptedMsgs").storeEncryptedDBMessages(
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
          await M(g, t, i));
      } catch (e) {
        if (e instanceof r("WAWeb-dexie").BulkError) {
          var y = i != null ? i.anchorInChatMsgId - 1 : null,
            R = "null";
          if (y != null)
            try {
              var L = o("WAWebDBMessageUtils").craftInternalId(t.toString(), y),
                E = await o("WAWebSchemaMessage")
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
                "[group-history] lookup-failed: " + r("WAWebSerializeError")(e);
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
    }
    function N(e, t) {
      var n = t != null ? t : 0;
      return e.filter(function (e) {
        var t;
        return ((t = e.t) != null ? t : 0) > n;
      });
    }
    async function M(e, t, n) {
      var a,
        i =
          n != null && (a = n.anchorMessage) != null && a.id
            ? r("WAWebMsgKey").fromString(n.anchorMessage.id)
            : null;
      await o("WAWebBackendApi").frontendSendAndReceive(
        "processMultipleMessages",
        {
          chatId: t,
          msgObjs: e.reverse(),
          meta: { add: "before", isHistory: !0, anchorMsgKey: i },
          processMessagesOrigin: "messageHistoryBundleProcess",
        },
      );
    }
    l.processMessageHistoryBundle = R;
  },
  98,
);
