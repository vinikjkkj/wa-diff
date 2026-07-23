__d(
  "WAWebDBMessageRange",
  [
    "Promise",
    "WALogger",
    "WALongInt",
    "WATimeUtils",
    "WAWebDBDeleteAssociatedMsgsByMsgKey",
    "WAWebDBMessageStoreUtils",
    "WAWebDBMessageUtils",
    "WAWebLidMigrationUtils",
    "WAWebMessageAssociationGatingUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebProtobufMsgKeyUtils",
    "WAWebSchemaMessage",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 1e3;
    function m(e) {
      return o("WAWebSchemaMessage")
        .getMessageTable()
        .between(
          ["messageRangeIndex"],
          o("WAWebDBMessageStoreUtils").beginningOfMessageRange(
            e,
            o("WAWebDBMessageUtils").MessagePropertyType.IncomingChatMessage,
          ),
          o("WAWebDBMessageStoreUtils").endOfMessageRange(
            e,
            o("WAWebDBMessageUtils").MessagePropertyType.IncomingChatMessage,
          ),
          { lowerInclusive: !0, reverse: !0, limit: 1, shouldDecrypt: !1 },
        )
        .then(function (e) {
          var t;
          return o(
            "WAWebDBMessageStoreUtils",
          ).extractC2STimestampFromMessageRangeIndex(
            (t = e[0]) == null ? void 0 : t.messageRangeIndex,
          );
        });
    }
    function p(e) {
      return o("WAWebSchemaMessage")
        .getMessageTable()
        .between(
          ["messageRangeIndex"],
          o("WAWebDBMessageStoreUtils").beginningOfMessageRange(
            e,
            o("WAWebDBMessageUtils").MessagePropertyType.SystemMessage,
          ),
          o("WAWebDBMessageStoreUtils").endOfMessageRange(
            e,
            o("WAWebDBMessageUtils").MessagePropertyType.SystemMessage,
          ),
          { lowerInclusive: !0, reverse: !0, limit: 1, shouldDecrypt: !1 },
        )
        .then(function (e) {
          var t;
          return o(
            "WAWebDBMessageStoreUtils",
          ).extractC2STimestampFromMessageRangeIndex(
            (t = e[0]) == null ? void 0 : t.messageRangeIndex,
          );
        });
    }
    function _(e) {
      return o("WAWebSchemaMessage")
        .getMessageTable()
        .between(
          ["messageRangeIndex"],
          o("WAWebDBMessageStoreUtils").beginningOfMessageRange(
            e,
            o("WAWebDBMessageUtils").MessagePropertyType.SystemMessage,
          ),
          o("WAWebDBMessageStoreUtils").endOfMessageRange(
            e,
            o("WAWebDBMessageUtils").MessagePropertyType.SystemMessage,
          ),
          { lowerInclusive: !0, reverse: !1, limit: 1, shouldDecrypt: !1 },
        )
        .then(function (e) {
          var t;
          return o(
            "WAWebDBMessageStoreUtils",
          ).extractC2STimestampFromMessageRangeIndex(
            (t = e[0]) == null ? void 0 : t.messageRangeIndex,
          );
        });
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a,
            i,
            l = o("WAWebSchemaMessage")
              .getMessageTable()
              .between(
                ["messageRangeIndex"],
                (a = o("WAWebDBMessageStoreUtils")).beginningOfMessageRange(
                  e,
                  (i = o("WAWebDBMessageUtils")).MessagePropertyType.Outgoing,
                  t,
                ),
                a.endOfMessageRange(e, i.MessagePropertyType.Outgoing),
                { reverse: !0, shouldDecrypt: !1 },
              ),
            s = o("WAWebSchemaMessage")
              .getMessageTable()
              .anyOf(
                ["messageRangeIndex"],
                [
                  a.beginningOfMessageRange(
                    e,
                    i.MessagePropertyType.IncomingChatMessage,
                    t,
                  ),
                  a.beginningOfMessageRange(
                    e,
                    i.MessagePropertyType.Outgoing,
                    t,
                  ),
                  a.beginningOfMessageRange(e, i.MessagePropertyType.Outgoing),
                ],
                { reverse: !0, shouldDecrypt: !1 },
              ),
            u = yield (c || (c = n("Promise"))).all([l, s]).then(function (e) {
              var t = e[0],
                n = e[1],
                a = function (t) {
                  return !(
                    (t.ack === -1 && t.isSendFailure === !0) ||
                    t.type ===
                      o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE
                  );
                },
                i = t.concat(n).filter(a),
                l = function (t) {
                  var e,
                    n = r("WAWebMsgKey").fromString(t.id),
                    a =
                      (e = o(
                        "WAWebDBMessageStoreUtils",
                      ).extractC2STimestampFromMessageRangeIndex(
                        t.messageRangeIndex,
                      )) != null
                        ? e
                        : void 0,
                    i = {
                      key: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(n),
                      timestamp: a,
                    };
                  return i;
                };
              return i.map(l);
            }),
            m = h(u, d),
            p = m.messages,
            _ = m.newLastMessageTimestamp;
          return { messages: p, newLastMessageTimestamp: _ };
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      var n = [],
        a = [];
      if (
        (e.forEach(function (e) {
          e.timestamp != null ? n.push(e) : a.push(e);
        }),
        n.length < t)
      )
        return { messages: e };
      var i = n.sort(y).slice(0, t),
        l = i[i.length - 1];
      return (
        I(l.timestamp, "smallestTimestampMessage"),
        {
          messages: i.concat(a),
          newLastMessageTimestamp: o("WALongInt").numberOrThrowIfTooLarge(
            r("nullthrows")(l.timestamp),
          ),
        }
      );
    }
    function y(e, t) {
      var n = [e, t].map(function (e) {
          return o("WALongInt").numberOrThrowIfTooLarge(
            r("nullthrows")(e.timestamp),
          );
        }),
        a = n[0],
        i = n[1];
      return i - a;
    }
    function C(e, t, n, r) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .between(
                ["messageRangeIndex"],
                o("WAWebDBMessageStoreUtils").beginningOfMessageRange(e, n),
                o("WAWebDBMessageStoreUtils").beginningOfMessageRange(
                  e,
                  n,
                  o("WALongInt").numberOrThrowIfTooLarge(t),
                ),
                { lowerInclusive: !0, upperInclusive: !0, shouldDecrypt: !1 },
              );
            if (
              (n ===
                o("WAWebDBMessageUtils").MessagePropertyType.SystemMessage &&
                (a = a.filter(function (e) {
                  return !o(
                    "WAWebDBMessageStoreUtils",
                  ).isInitialEncryptionMessage(e);
                })),
              (r == null
                ? void 0
                : r.forceDeleteAllMessagesExceptInitialEncryption) === !0)
            )
              return a.map(function (e) {
                return e.id;
              });
            if (
              (n ===
                o("WAWebDBMessageUtils").MessagePropertyType.SystemMessage &&
                (r == null ? void 0 : r.skipRecentSystemMessages) !== !1 &&
                (a = a.filter(function (e) {
                  return !(
                    o("WAWebDBMessageStoreUtils").isSecuritySensitiveMessage(
                      e,
                    ) &&
                    e.t >
                      o("WATimeUtils").unixTime() - o("WATimeUtils").DAY_SECONDS
                  );
                })),
              (r == null ? void 0 : r.skipStarred) !== !1 &&
                (a = a.filter(function (e) {
                  return e.isStarred === void 0;
                })),
              (r == null ? void 0 : r.skipScheduledMessages) === !0 &&
                (a = a.filter(function (e) {
                  return (
                    e.viewMode !==
                    o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE
                  );
                })),
              n === o("WAWebDBMessageUtils").MessagePropertyType.SystemMessage)
            ) {
              for (var i, l = a.length - 1; l >= 0; l--)
                if (
                  o("WAWebDBMessageStoreUtils").isBizBotDisclosureMessage(a[l])
                ) {
                  i = a[l].id;
                  break;
                }
              i != null &&
                (a = a.filter(function (e) {
                  return e.id !== i;
                }));
            }
            return a.map(function (e) {
              return e.id;
            });
          },
        )),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebDBMessageUtils").beginningOfChat(e),
            n = o("WAWebDBMessageUtils").endOfChat(e),
            r = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .between(["messageRangeIndex"], t, n, {
                lowerInclusive: !0,
                shouldDecrypt: !1,
              });
          return r
            .filter(function (e) {
              return (
                e.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE
              );
            })
            .map(function (e) {
              return e.id;
            });
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatId,
            n = e.messages,
            a = e.options,
            i = n.map(function (e) {
              return o("WAWebProtobufMsgKeyUtils")
                .protobufToMsgKey(r("nullthrows")(e.key))
                .toString();
            }),
            l = [];
          t.isGroup() &&
            i.forEach(function (e) {
              var t = r("WAWebMsgKey").fromString(e);
              if (t.fromMe) {
                var n = o("WAWebLidMigrationUtils").getAlternateMsgKey(t);
                n && l.push(n.toString());
              }
            });
          var s = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .bulkGet(i.concat(l)),
            u = [];
          return (
            s.forEach(function (e) {
              if (e != null) {
                if (
                  ((a == null ? void 0 : a.skipStarred) !== !1 &&
                    e.isStarred != null) ||
                  ((a == null ? void 0 : a.skipScheduledMessages) === !0 &&
                    e.viewMode ===
                      o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE)
                )
                  return;
                u.push(e.id);
              }
            }),
            u
          );
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      var t = e.chatId,
        r = e.options,
        a = e.range,
        i = a.lastMessageTimestamp,
        l = a.lastSystemMessageTimestamp,
        s = a.messages;
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["message", "message-association"],
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var a,
                  u = e[0],
                  d = [],
                  m = [];
                i != null &&
                  (m.push(
                    C(
                      t,
                      i,
                      o("WAWebDBMessageUtils").MessagePropertyType
                        .IncomingChatMessage,
                      r,
                    ),
                  ),
                  m.push(
                    C(
                      t,
                      i,
                      o("WAWebDBMessageUtils").MessagePropertyType.Outgoing,
                      r,
                    ),
                  ));
                var p = l != null ? l : i;
                (p != null &&
                  m.push(
                    C(
                      t,
                      p,
                      o("WAWebDBMessageUtils").MessagePropertyType
                        .SystemMessage,
                      r,
                    ),
                  ),
                  m.push(R({ chatId: t, messages: s, options: r })),
                  (r == null ? void 0 : r.deleteAutomatedGreetingMessages) ===
                    !0 && m.push(v(t)));
                var _ = yield (c || (c = n("Promise"))).all(m);
                d = (a = d).concat.apply(a, _);
                var f = r == null ? void 0 : r.skipMessages;
                f &&
                  (d = d.filter(function (e) {
                    return !f.has(e);
                  }));
                var g = [u.bulkRemove(d)];
                return (
                  o(
                    "WAWebMessageAssociationGatingUtils",
                  ).isMessageAssociationInfraEnabled() &&
                    g.push(
                      o(
                        "WAWebDBDeleteAssociatedMsgsByMsgKey",
                      ).bulkDeleteMessagesByMsgKeys(d),
                    ),
                  yield c.all(g),
                  d
                );
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        );
    }
    function k(t) {
      var n,
        r,
        a = t.messages,
        i = { messages: a, lastMessageTimestamp: t.lastMessageTimestamp };
      if (
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: additionalMessages length: ",
              "",
            ])),
          a.length,
        ),
        a.length > d)
      ) {
        var l = h(a, d),
          s = l.messages,
          u = l.newLastMessageTimestamp;
        (u != null &&
          ((i.lastMessageTimestamp = u),
          I(i.lastMessageTimestamp, "resultantRange")),
          (i.messages = s));
      }
      return (
        o("WALongInt").numberOrThrowIfTooLarge(
          (n = t.lastSystemMessageTimestamp) != null ? n : 0,
        ) >
          o("WALongInt").numberOrThrowIfTooLarge(
            (r = i.lastMessageTimestamp) != null ? r : 0,
          ) && (i.lastSystemMessageTimestamp = t.lastSystemMessageTimestamp),
        i
      );
    }
    function I(e, t) {
      try {
        o("WALongInt").numberOrThrowIfTooLarge(e != null ? e : 0) /
          o("WATimeUtils").unixTime() >
          10 &&
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: large timestamp: ",
                  " returned a large timestamp: ",
                  "",
                ])),
              t,
              e,
            )
            .sendLogs("syncd: " + t + " returned a large timestamp");
      } catch (t) {
        o("WALogger").ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: error reporting logMaybeMillisecondTimestamp for ",
              ": ",
              "",
            ])),
          e,
          t,
        );
      }
    }
    var T = { limitAdditionalMessages: h };
    ((l.getLastMessageTimestamp = m),
      (l.getLastSystemMessageTimestamp = p),
      (l.getFirstSystemMessageTimestamp = _),
      (l.getAdditionalMessages = f),
      (l.timestampComparison = y),
      (l.deleteMessagesInMessageRange = E),
      (l.fixMessageRange = k),
      (l.logMaybeMillisecondTimestamp = I),
      (l._test = T));
  },
  98,
);
