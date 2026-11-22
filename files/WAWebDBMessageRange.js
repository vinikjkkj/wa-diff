__d(
  "WAWebDBMessageRange",
  [
    "Promise",
    "WALogger",
    "WALongInt",
    "WATimeUtils",
    "WAWebDBDeleteAssociatedMsgsByMsgKey",
    "WAWebDBGetAssociatedMsgsByParentMsgKey",
    "WAWebDBMessageRangeBounds",
    "WAWebDBMessageRangeIndex",
    "WAWebDBMessageStoreUtils",
    "WAWebDBMessageUtils",
    "WAWebLidMigrationUtils",
    "WAWebMessageAssociation.flow",
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
          o("WAWebDBMessageRangeBounds").beginningOfMessageRange(
            e,
            o("WAWebDBMessageRangeIndex").MessagePropertyType.SystemMessage,
          ),
          o("WAWebDBMessageRangeBounds").endOfMessageRange(
            e,
            o("WAWebDBMessageRangeIndex").MessagePropertyType.SystemMessage,
          ),
          { lowerInclusive: !0, reverse: !0, limit: 1, shouldDecrypt: !1 },
        )
        .then(function (e) {
          var t;
          return o(
            "WAWebDBMessageRangeBounds",
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
          o("WAWebDBMessageRangeBounds").beginningOfMessageRange(
            e,
            o("WAWebDBMessageRangeIndex").MessagePropertyType.SystemMessage,
          ),
          o("WAWebDBMessageRangeBounds").endOfMessageRange(
            e,
            o("WAWebDBMessageRangeIndex").MessagePropertyType.SystemMessage,
          ),
          { lowerInclusive: !0, reverse: !1, limit: 1, shouldDecrypt: !1 },
        )
        .then(function (e) {
          var t;
          return o(
            "WAWebDBMessageRangeBounds",
          ).extractC2STimestampFromMessageRangeIndex(
            (t = e[0]) == null ? void 0 : t.messageRangeIndex,
          );
        });
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a,
            i,
            l = o("WAWebSchemaMessage")
              .getMessageTable()
              .between(
                ["messageRangeIndex"],
                (a = o("WAWebDBMessageRangeBounds")).beginningOfMessageRange(
                  e,
                  (i = o("WAWebDBMessageRangeIndex")).MessagePropertyType
                    .Outgoing,
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
                        "WAWebDBMessageRangeBounds",
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
            m = g(u, d),
            p = m.messages,
            _ = m.newLastMessageTimestamp;
          return { messages: p, newLastMessageTimestamp: _ };
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      var n = [],
        a = [];
      if (
        (e.forEach(function (e) {
          e.timestamp != null ? n.push(e) : a.push(e);
        }),
        n.length < t)
      )
        return { messages: e };
      var i = n.sort(h).slice(0, t),
        l = i[i.length - 1];
      return (
        N(l.timestamp, "smallestTimestampMessage"),
        {
          messages: i.concat(a),
          newLastMessageTimestamp: o("WALongInt").numberOrThrowIfTooLarge(
            r("nullthrows")(l.timestamp),
          ),
        }
      );
    }
    function h(e, t) {
      var n = [e, t].map(function (e) {
          return o("WALongInt").numberOrThrowIfTooLarge(
            r("nullthrows")(e.timestamp),
          );
        }),
        a = n[0],
        i = n[1];
      return i - a;
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatId,
            n = e.lastMessageTimestamp,
            r = e.messagePropertyType,
            a = e.options,
            i = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .between(
                ["messageRangeIndex"],
                o("WAWebDBMessageRangeBounds").beginningOfMessageRange(t, r),
                o("WAWebDBMessageRangeBounds").beginningOfMessageRange(
                  t,
                  r,
                  o("WALongInt").numberOrThrowIfTooLarge(n),
                ),
                { lowerInclusive: !0, upperInclusive: !0, shouldDecrypt: !1 },
              );
          if (
            (r ===
              o("WAWebDBMessageRangeIndex").MessagePropertyType.SystemMessage &&
              (i = i.filter(function (e) {
                return !o(
                  "WAWebDBMessageStoreUtils",
                ).isInitialEncryptionMessage(e);
              })),
            (a == null
              ? void 0
              : a.forceDeleteAllMessagesExceptInitialEncryption) === !0)
          )
            return i.map(function (e) {
              return e.id;
            });
          if (
            (r ===
              o("WAWebDBMessageRangeIndex").MessagePropertyType.SystemMessage &&
              (a == null ? void 0 : a.skipRecentSystemMessages) !== !1 &&
              (i = i.filter(function (e) {
                return !(
                  o("WAWebDBMessageStoreUtils").isSecuritySensitiveMessage(e) &&
                  e.t >
                    o("WATimeUtils").unixTime() - o("WATimeUtils").DAY_SECONDS
                );
              })),
            (a == null ? void 0 : a.skipStarred) !== !1 &&
              (i = i.filter(function (e) {
                return e.isStarred === void 0;
              })),
            (a == null ? void 0 : a.skipScheduledMessages) === !0 &&
              (i = i.filter(function (e) {
                return (
                  e.viewMode !==
                  o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE
                );
              })),
            r ===
              o("WAWebDBMessageRangeIndex").MessagePropertyType.SystemMessage)
          ) {
            for (var l, s = i.length - 1; s >= 0; s--)
              if (
                o(
                  "WAWebDBMessageStoreUtils",
                ).isBotSystemMessageToPreserveOnClear(i[s])
              ) {
                l = i[s].id;
                break;
              }
            l != null &&
              (i = i.filter(function (e) {
                return e.id !== l;
              }));
          }
          return i.map(function (e) {
            return e.id;
          });
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        R.apply(this, arguments)
      );
    }
    function L(e) {
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
                    y({
                      chatId: t,
                      lastMessageTimestamp: i,
                      messagePropertyType: o("WAWebDBMessageRangeIndex")
                        .MessagePropertyType.IncomingChatMessage,
                      options: r,
                    }),
                  ),
                  m.push(
                    y({
                      chatId: t,
                      lastMessageTimestamp: i,
                      messagePropertyType: o("WAWebDBMessageRangeIndex")
                        .MessagePropertyType.Outgoing,
                      options: r,
                    }),
                  ));
                var p = l != null ? l : i;
                (p != null &&
                  m.push(
                    y({
                      chatId: t,
                      lastMessageTimestamp: p,
                      messagePropertyType: o("WAWebDBMessageRangeIndex")
                        .MessagePropertyType.SystemMessage,
                      options: r,
                    }),
                  ),
                  m.push(S({ chatId: t, messages: s, options: r })),
                  (r == null ? void 0 : r.deleteAutomatedGreetingMessages) ===
                    !0 && m.push(b(t)));
                var _ = yield (c || (c = n("Promise"))).all(m);
                d = (a = d).concat.apply(a, _);
                var f = r == null ? void 0 : r.skipMessages;
                return (
                  f &&
                    (d = d.filter(function (e) {
                      return !f.has(e);
                    })),
                  (d = yield E({ chatId: t, msgKeys: d, options: r })),
                  yield c.all([
                    u.bulkRemove(d),
                    o(
                      "WAWebDBDeleteAssociatedMsgsByMsgKey",
                    ).bulkDeleteMessagesByMsgKeys(d),
                  ]),
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
    function E(e) {
      return k(e);
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatId,
            n = e.msgKeys,
            r = e.options;
          if (
            (r == null ? void 0 : r.skipStarred) === !1 ||
            (r == null
              ? void 0
              : r.forceDeleteAllMessagesExceptInitialEncryption) === !0
          )
            return n;
          var o = yield T(t);
          return o.size === 0
            ? n
            : n.filter(function (e) {
                return !o.has(e);
              });
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
          var t = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .between(
                ["internalId", "isStarred"],
                [o("WAWebDBMessageUtils").beginningOfChat(e), 0],
                [o("WAWebDBMessageUtils").endOfChat(e), 1 / 0],
                { lowerInclusive: !1, upperInclusive: !1, shouldDecrypt: !1 },
              ),
            n = t
              .filter(function (e) {
                return e.type === o("WAWebMsgType").MSG_TYPE.ALBUM;
              })
              .map(function (e) {
                return r("WAWebMsgKey").fromString(e.id);
              });
          if (n.length === 0) return new Set();
          var a = yield o(
              "WAWebDBGetAssociatedMsgsByParentMsgKey",
            ).bulkGetMessagesByParentMsgKey(n),
            i = a
              .filter(function (e) {
                return (
                  e.associationType ===
                  o("WAWebMessageAssociation.flow").MessageAssociationType
                    .MEDIA_ALBUM
                );
              })
              .map(function (e) {
                return e.msgKey;
              });
          return x(i);
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = new Set());
          var n = e.filter(function (e) {
              return !t.has(e);
            }),
            a = new Set(t);
          if (
            (n.forEach(function (e) {
              return a.add(e);
            }),
            n.length === 0)
          )
            return a;
          var i = yield o(
            "WAWebDBGetAssociatedMsgsByParentMsgKey",
          ).bulkGetMessagesByParentMsgKey(
            n.map(function (e) {
              return r("WAWebMsgKey").fromString(e);
            }),
          );
          return x(
            i.map(function (e) {
              return e.msgKey;
            }),
            a,
          );
        })),
        $.apply(this, arguments)
      );
    }
    function P(t) {
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
        var l = g(a, d),
          s = l.messages,
          u = l.newLastMessageTimestamp;
        (u != null &&
          ((i.lastMessageTimestamp = u),
          N(i.lastMessageTimestamp, "resultantRange")),
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
    function N(e, t) {
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
    var M = { limitAdditionalMessages: g };
    ((l.getLastMessageTimestamp = o(
      "WAWebDBMessageRangeBounds",
    ).getLastMessageTimestamp),
      (l.getLastSystemMessageTimestamp = m),
      (l.getFirstSystemMessageTimestamp = p),
      (l.getAdditionalMessages = _),
      (l.timestampComparison = h),
      (l.deleteMessagesInMessageRange = L),
      (l.fixMessageRange = P),
      (l.logMaybeMillisecondTimestamp = N),
      (l._test = M));
  },
  98,
);
