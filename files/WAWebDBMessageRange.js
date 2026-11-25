__d(
  "WAWebDBMessageRange",
  [
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
    "WAWebMessageAssociationConfig",
    "WAWebModelStorageUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebProtobufMsgKeyUtils",
    "WAWebSchemaMessage",
    "WAWebViewMode.flow",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 1e3;
    function d(e) {
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
    async function p(e, t) {
      var n,
        a,
        i = o("WAWebSchemaMessage")
          .getMessageTable()
          .between(
            ["messageRangeIndex"],
            (n = o("WAWebDBMessageRangeBounds")).beginningOfMessageRange(
              e,
              (a = o("WAWebDBMessageRangeIndex")).MessagePropertyType.Outgoing,
              t,
            ),
            n.endOfMessageRange(e, a.MessagePropertyType.Outgoing),
            { reverse: !0, shouldDecrypt: !1 },
          ),
        l = o("WAWebSchemaMessage")
          .getMessageTable()
          .anyOf(
            ["messageRangeIndex"],
            [
              n.beginningOfMessageRange(
                e,
                a.MessagePropertyType.IncomingChatMessage,
                t,
              ),
              n.beginningOfMessageRange(e, a.MessagePropertyType.Outgoing, t),
              n.beginningOfMessageRange(e, a.MessagePropertyType.Outgoing),
            ],
            { reverse: !0, shouldDecrypt: !1 },
          ),
        s = await Promise.all([i, l]).then(function (e) {
          var t = e[0],
            n = e[1],
            a = function (t) {
              return !(
                (t.ack === -1 && t.isSendFailure === !0) ||
                t.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE
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
        u = _(s, c),
        d = u.messages,
        m = u.newLastMessageTimestamp;
      return { messages: d, newLastMessageTimestamp: m };
    }
    function _(e, t) {
      var n = [],
        a = [];
      if (
        (e.forEach(function (e) {
          e.timestamp != null ? n.push(e) : a.push(e);
        }),
        n.length < t)
      )
        return { messages: e };
      var i = n.sort(f).slice(0, t),
        l = i[i.length - 1];
      return (
        L(l.timestamp, "smallestTimestampMessage"),
        {
          messages: i.concat(a),
          newLastMessageTimestamp: o("WALongInt").numberOrThrowIfTooLarge(
            r("nullthrows")(l.timestamp),
          ),
        }
      );
    }
    function f(e, t) {
      var n = [e, t].map(function (e) {
          return o("WALongInt").numberOrThrowIfTooLarge(
            r("nullthrows")(e.timestamp),
          );
        }),
        a = n[0],
        i = n[1];
      return i - a;
    }
    async function g(e) {
      var t = e.chatId,
        n = e.lastMessageTimestamp,
        r = e.messagePropertyType,
        a = e.options,
        i = await o("WAWebSchemaMessage")
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
            return !o("WAWebDBMessageStoreUtils").isInitialEncryptionMessage(e);
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
              e.t > o("WATimeUtils").unixTime() - o("WATimeUtils").DAY_SECONDS
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
        r === o("WAWebDBMessageRangeIndex").MessagePropertyType.SystemMessage)
      ) {
        for (var l, s = i.length - 1; s >= 0; s--)
          if (
            o("WAWebDBMessageStoreUtils").isBotSystemMessageToPreserveOnClear(
              i[s],
            )
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
    }
    async function h(e) {
      var t = o("WAWebDBMessageUtils").beginningOfChat(e),
        n = o("WAWebDBMessageUtils").endOfChat(e),
        r = await o("WAWebSchemaMessage")
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
    }
    async function y(e) {
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
      var s = await o("WAWebSchemaMessage")
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
    }
    function C(e) {
      var t = e.chatId,
        n = e.options,
        r = e.range,
        a = r.lastMessageTimestamp,
        i = r.lastSystemMessageTimestamp,
        l = r.messages;
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["message", "message-association"], async function (e) {
          var r,
            s = e[0],
            u = [],
            c = [];
          a != null &&
            (c.push(
              g({
                chatId: t,
                lastMessageTimestamp: a,
                messagePropertyType: o("WAWebDBMessageRangeIndex")
                  .MessagePropertyType.IncomingChatMessage,
                options: n,
              }),
            ),
            c.push(
              g({
                chatId: t,
                lastMessageTimestamp: a,
                messagePropertyType: o("WAWebDBMessageRangeIndex")
                  .MessagePropertyType.Outgoing,
                options: n,
              }),
            ));
          var d = i != null ? i : a;
          (d != null &&
            c.push(
              g({
                chatId: t,
                lastMessageTimestamp: d,
                messagePropertyType: o("WAWebDBMessageRangeIndex")
                  .MessagePropertyType.SystemMessage,
                options: n,
              }),
            ),
            c.push(y({ chatId: t, messages: l, options: n })),
            (n == null ? void 0 : n.deleteAutomatedGreetingMessages) === !0 &&
              c.push(h(t)));
          var m = await Promise.all(c);
          u = (r = u).concat.apply(r, m);
          var p = n == null ? void 0 : n.skipMessages;
          return (
            p &&
              (u = u.filter(function (e) {
                return !p.has(e);
              })),
            (u = await b({ chatId: t, msgKeys: u, options: n })),
            await Promise.all([
              s.bulkRemove(u),
              o(
                "WAWebDBDeleteAssociatedMsgsByMsgKey",
              ).bulkDeleteMessagesByMsgKeys(u),
            ]),
            u
          );
        });
    }
    async function b(e) {
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
      var o = await v(t);
      return o.size === 0
        ? n
        : n.filter(function (e) {
            return !o.has(e);
          });
    }
    async function v(e) {
      var t = await o("WAWebSchemaMessage")
          .getMessageTable()
          .between(
            ["internalId", "isStarred"],
            [o("WAWebDBMessageUtils").beginningOfChat(e), 0],
            [o("WAWebDBMessageUtils").endOfChat(e), 1 / 0],
            { lowerInclusive: !1, upperInclusive: !1, shouldDecrypt: !1 },
          ),
        n = new Map();
      for (var a of t) {
        var i = o(
          "WAWebMessageAssociationConfig",
        ).getStarredMessageAssociationPolicy(a.type);
        i != null && n.set(a.id, i);
      }
      if (n.size === 0) return new Set();
      var l = await o(
          "WAWebDBGetAssociatedMsgsByParentMsgKey",
        ).bulkGetMessagesByParentMsgKey(
          Array.from(n.keys(), function (e) {
            return r("WAWebMsgKey").fromString(e);
          }),
        ),
        s = l
          .filter(function (e) {
            var t;
            return (
              ((t = n.get(e.parentMsgKey)) == null
                ? void 0
                : t.preserveSubtreesFor.has(e.associationType)) === !0
            );
          })
          .map(function (e) {
            return e.msgKey;
          });
      return S(s);
    }
    async function S(e, t) {
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
      var i = await o(
        "WAWebDBGetAssociatedMsgsByParentMsgKey",
      ).bulkGetMessagesByParentMsgKey(
        n.map(function (e) {
          return r("WAWebMsgKey").fromString(e);
        }),
      );
      return S(
        i.map(function (e) {
          return e.msgKey;
        }),
        a,
      );
    }
    function R(t) {
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
        a.length > c)
      ) {
        var l = _(a, c),
          s = l.messages,
          u = l.newLastMessageTimestamp;
        (u != null &&
          ((i.lastMessageTimestamp = u),
          L(i.lastMessageTimestamp, "resultantRange")),
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
    function L(e, t) {
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
    var E = { limitAdditionalMessages: _ };
    ((l.getLastMessageTimestamp = o(
      "WAWebDBMessageRangeBounds",
    ).getLastMessageTimestamp),
      (l.getLastSystemMessageTimestamp = d),
      (l.getFirstSystemMessageTimestamp = m),
      (l.getAdditionalMessages = p),
      (l.timestampComparison = f),
      (l.deleteMessagesInMessageRange = C),
      (l.fixMessageRange = R),
      (l.logMaybeMillisecondTimestamp = L),
      (l._test = E));
  },
  98,
);
