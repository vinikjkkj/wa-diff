__d(
  "WAWebGroupHistorySerializationUtils",
  [
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
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
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
    async function s(t) {
      var n = o("WAWebDBGetReactions").getAllReactionsFromParentMsgs(
          t
            .filter(function (e) {
              return e.hasReaction;
            })
            .map(function (e) {
              return e.id.toString();
            }),
        ),
        r = p(
          t
            .filter(function (e) {
              return e.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION;
            })
            .map(function (e) {
              return e.id.toString();
            }),
        ),
        a = _(
          t.map(function (e) {
            return e.id.toString();
          }),
        ),
        i = f(
          t
            .filter(function (e) {
              return e.type === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION;
            })
            .map(function (e) {
              return e.id.toString();
            }),
        ),
        l = await Promise.allSettled([n, r, a, i]),
        s = l[0],
        u = l[1],
        c = l[2],
        m = l[3],
        g = s.status === "fulfilled" ? e(s.value) : new Map(),
        h = u.status === "fulfilled" ? e(u.value) : new Map(),
        y =
          c.status === "fulfilled"
            ? new Map(
                c.value.map(function (e) {
                  return [e.parentMsgKey, e];
                }),
              )
            : new Map(),
        C = m.status === "fulfilled" ? e(m.value) : new Map(),
        b = t.filter(function (e) {
          return e.kicKey != null;
        }),
        v =
          b.length > 0
            ? new Map(
                b.map(function (e) {
                  return [e.id.toString(), d(e)];
                }),
              )
            : new Map();
      return {
        reactions: g,
        pollVotes: h,
        pinInChat: y,
        eventResponses: C,
        keepInChat: v,
      };
    }
    function u(e) {
      return {
        key: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(
          r("WAWebMsgKey").fromString(e.msgKey),
        ),
        text: e.reactionText,
        senderTimestampMs: e.timestamp,
        unread: !1,
      };
    }
    function c(e) {
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
    function d(e) {
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
    function m(e) {
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
    function p(e) {
      return o("WAWebPollsVotesSchema").getTable().anyOf(["parentMsgKey"], e);
    }
    function _(e) {
      return o("WAWebPinInChatSchema").getTable().anyOf(["parentMsgKey"], e);
    }
    function f(e) {
      return o("WAWebEventResponsesSchema")
        .getTable()
        .anyOf(["parentMsgKey"], e);
    }
    async function g(e, t) {
      if (!e || !t.pollOptions) return null;
      var n = await o(
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
    }
    async function h(e) {
      var t,
        n,
        r,
        a = e.eventResponses,
        i = e.keepInChat,
        l = e.msgData,
        s = e.pinInChat,
        d = e.pollVotes,
        p = e.reactions,
        _ = l.id.toString(),
        f = await g(d.get(_), l),
        h = s.get(_);
      return o(
        "WAWebMessagePluginGenerateWebMessageInfo",
      ).generateWebMessageInfo(l, {
        reactions:
          (t = (n = p.get(_)) == null ? void 0 : n.map(u)) != null ? t : [],
        pollUpdates: f,
        pinInChat: h ? c(h) : void 0,
        eventResponses: (r = a.get(_)) == null ? void 0 : r.map(m),
        keepInChat: i.get(_),
      });
    }
    ((l.getAddonsDBRowFromParentMsgs = s), (l.serializeSingleMessage = h));
  },
  98,
);
