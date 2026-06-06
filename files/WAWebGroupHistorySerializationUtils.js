__d(
  "WAWebGroupHistorySerializationUtils",
  [
    "Promise",
    "WAWebDBGetReactions",
    "WAWebEphemeralKeepInChatUtils",
    "WAWebEventResponseDBSerialization",
    "WAWebEventResponsesSchema",
    "WAWebMessagePluginGenerateWebMessageInfo",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebPinInChatSchema",
    "WAWebPollsCreateOptionLocalIdMap",
    "WAWebPollsVotesSchema",
    "WAWebProtobufMsgKeyUtils",
    "WAWebProtobufsWeb.pb",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return e.reduce(function (e, t) {
        var n,
          r = t.parentMsgKey;
        if (r == null) return e;
        var o = r.toString();
        return (
          e.has(o) || e.set(o, []),
          (n = e.get(o)) == null || n.push(t),
          e
        );
      }, new Map());
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = o("WAWebDBGetReactions").getAllReactionsFromParentMsgs(
              t
                .filter(function (e) {
                  return e.hasReaction;
                })
                .map(function (e) {
                  return e.id.toString();
                }),
            ),
            a = f(
              t
                .filter(function (e) {
                  return e.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION;
                })
                .map(function (e) {
                  return e.id.toString();
                }),
            ),
            i = g(
              t.map(function (e) {
                return e.id.toString();
              }),
            ),
            l = h(
              t
                .filter(function (e) {
                  return e.type === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION;
                })
                .map(function (e) {
                  return e.id.toString();
                }),
            ),
            u = yield (e || (e = n("Promise"))).allSettled([r, a, i, l]),
            c = u[0],
            d = u[1],
            m = u[2],
            _ = u[3],
            y = c.status === "fulfilled" ? s(c.value) : new Map(),
            C = d.status === "fulfilled" ? s(d.value) : new Map(),
            b =
              m.status === "fulfilled"
                ? new Map(
                    m.value.map(function (e) {
                      return [e.parentMsgKey, e];
                    }),
                  )
                : new Map(),
            v = _.status === "fulfilled" ? s(_.value) : new Map(),
            S = t.filter(function (e) {
              return e.kicKey != null;
            }),
            R =
              S.length > 0
                ? new Map(
                    S.map(function (e) {
                      return [e.id.toString(), p(e)];
                    }),
                  )
                : new Map();
          return {
            reactions: y,
            pollVotes: C,
            pinInChat: b,
            eventResponses: v,
            keepInChat: R,
          };
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return {
        key: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(
          r("WAWebMsgKey").fromString(e.msgKey),
        ),
        text: e.reactionText,
        senderTimestampMs: e.timestamp,
        unread: !1,
      };
    }
    function m(e) {
      return {
        type: o("WAWebProtobufsWeb.pb").PinInChat$Type.cast(e.pinType),
        key: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(
          r("WAWebMsgKey").fromString(e.parentMsgKey),
        ),
        senderTimestampMs: e.senderTimestampMs,
        serverTimestampMs: e.t != null ? e.t * 1e3 : null,
        messageAddOnContextInfo: {
          messageAddOnDurationInSecs: e.pinExpiryDuration,
        },
      };
    }
    function p(e) {
      return {
        keepType: o("WAWebEphemeralKeepInChatUtils").kicStateToKeepType(
          e.kicState,
        ),
        key: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(
          r("nullthrows")(e.kicKey, "[group-history] kicKey is null"),
        ),
        clientTimestampMs: e.kicTimestampMs,
        serverTimestampMs: e.t != null ? e.t * 1e3 : null,
      };
    }
    function _(e) {
      return {
        eventResponseMessageKey: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(
          r("WAWebMsgKey").fromString(e.msgKey),
        ),
        timestampMs: e.senderTimestampMs,
        eventResponseMessage: {
          response: o(
            "WAWebEventResponseDBSerialization",
          ).decodeEventResponseFromDBRow(e.eventResponse),
          timestampMs: e.senderTimestampMs,
        },
        unread: !1,
      };
    }
    function f(e) {
      return o("WAWebPollsVotesSchema").getTable().anyOf(["parentMsgKey"], e);
    }
    function g(e) {
      return o("WAWebPinInChatSchema").getTable().anyOf(["parentMsgKey"], e);
    }
    function h(e) {
      return o("WAWebEventResponsesSchema")
        .getTable()
        .anyOf(["parentMsgKey"], e);
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!e || !t.pollOptions) return null;
          var n = yield o(
              "WAWebPollsCreateOptionLocalIdMap",
            ).createOptionLocalIdMap(t.pollOptions),
            a = e.map(function (e) {
              var t = Array.from(new Uint8Array(e.selectedOptionLocalIds)),
                a = t.map(n.getHashForLocalId);
              return {
                pollUpdateMessageKey: o(
                  "WAWebProtobufMsgKeyUtils",
                ).msgKeyToProtobuf(r("WAWebMsgKey").fromString(e.msgKey)),
                senderTimestampMs: e.senderTimestampMs,
                unread: !1,
                vote: { selectedOptions: a.length === 0 ? null : a },
              };
            });
          return a;
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
          var t,
            n,
            r,
            a = e.eventResponses,
            i = e.keepInChat,
            l = e.msgData,
            s = e.pinInChat,
            u = e.pollVotes,
            c = e.reactions,
            p = l.id.toString(),
            f = yield y(u.get(p), l),
            g = s.get(p);
          return o(
            "WAWebMessagePluginGenerateWebMessageInfo",
          ).generateWebMessageInfo(l, {
            reactions:
              (t = (n = c.get(p)) == null ? void 0 : n.map(d)) != null ? t : [],
            pollUpdates: f,
            pinInChat: g ? m(g) : void 0,
            eventResponses: (r = a.get(p)) == null ? void 0 : r.map(_),
            keepInChat: i.get(p),
          });
        })),
        v.apply(this, arguments)
      );
    }
    ((l.getAddonsDBRowFromParentMsgs = u), (l.serializeSingleMessage = b));
  },
  98,
);
