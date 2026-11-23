__d(
  "WAWebLabyrinthDebugMessageAddOns",
  ["WABase64", "WALongInt", "WAWebProtobufsE2E.pb", "WAWebProtobufsWeb.pb"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "self",
      s = new Map([
        [
          o("WAWebProtobufsE2E.pb")
            .Message$EventResponseMessage$EventResponseType.GOING,
          "going",
        ],
        [
          o("WAWebProtobufsE2E.pb")
            .Message$EventResponseMessage$EventResponseType.MAYBE,
          "maybe",
        ],
        [
          o("WAWebProtobufsE2E.pb")
            .Message$EventResponseMessage$EventResponseType.NOT_GOING,
          "notGoing",
        ],
      ]);
    function u(e) {
      var t;
      return (t = g(e)) != null ? t : h(e);
    }
    function c(e) {
      var t = e.messageAddOns,
        n = e.reactions,
        r = t
          .filter(function (e) {
            return (
              e.messageAddOnType ===
              o("WAWebProtobufsWeb.pb").MessageAddOn$MessageAddOnType.REACTION
            );
          })
          .map(function (e) {
            var t;
            return {
              emoji:
                (t = e.messageAddOn) == null || (t = t.reactionMessage) == null
                  ? void 0
                  : t.text,
              key: e.messageAddOnKey,
              reactedAtMs: o("WALongInt").maybeNumber(e.senderTimestampMs),
            };
          }),
        a = n.map(function (e) {
          return {
            emoji: e.text,
            key: e.key,
            reactedAtMs: o("WALongInt").maybeNumber(e.senderTimestampMs),
          };
        });
      return _(r.length > 0 ? r : a);
    }
    function d(e) {
      var t = e.messageAddOns,
        n = e.pollUpdates,
        r = t
          .filter(function (e) {
            return (
              e.messageAddOnType ===
              o("WAWebProtobufsWeb.pb").MessageAddOn$MessageAddOnType
                .POLL_UPDATE
            );
          })
          .map(function (e) {
            var t;
            return {
              key: e.messageAddOnKey,
              selectedOptions:
                (t = e.legacyMessage) == null || (t = t.pollVote) == null
                  ? void 0
                  : t.selectedOptions,
              votedAtMs: o("WALongInt").maybeNumber(e.senderTimestampMs),
            };
          }),
        a = n.map(function (e) {
          var t;
          return {
            key: e.pollUpdateMessageKey,
            selectedOptions: (t = e.vote) == null ? void 0 : t.selectedOptions,
            votedAtMs: o("WALongInt").maybeNumber(e.senderTimestampMs),
          };
        });
      return p([].concat(r, a), function (e) {
        return e.votedAtMs;
      }).flatMap(function (e) {
        var t = e.key,
          n = e.selectedOptions,
          r = e.votedAtMs;
        return n != null
          ? [
              {
                optionNames: null,
                selectedOptionHashes: n.map(function (e) {
                  return o("WABase64").encodeB64(e);
                }),
                senderJid: f(t),
                votedAtMs: r,
              },
            ]
          : [];
      });
    }
    function m(e) {
      var t = e.messageAddOns,
        n = t
          .filter(function (e) {
            return (
              e.messageAddOnType ===
              o("WAWebProtobufsWeb.pb").MessageAddOn$MessageAddOnType
                .EVENT_RESPONSE
            );
          })
          .map(function (e) {
            var t;
            return {
              key: e.messageAddOnKey,
              respondedAtMs: o("WALongInt").maybeNumber(e.senderTimestampMs),
              response:
                (t = e.legacyMessage) == null ||
                (t = t.eventResponseMessage) == null
                  ? void 0
                  : t.response,
            };
          });
      return p(n, function (e) {
        return e.respondedAtMs;
      }).flatMap(function (e) {
        var t = e.key,
          n = e.respondedAtMs,
          r = e.response,
          o = r != null ? s.get(r) : null;
        return o != null
          ? [{ respondedAtMs: n, response: o, senderJid: f(t) }]
          : [];
      });
    }
    function p(t, n) {
      var r = new Map();
      for (var o of t) {
        var a,
          i,
          l,
          s = (a = f(o.key)) != null ? a : e,
          u = r.get(s);
        (u == null ||
          ((i = n(o)) != null ? i : 0) >= ((l = n(u)) != null ? l : 0)) &&
          r.set(s, o);
      }
      return Array.from(r.values());
    }
    function _(e) {
      return p(e, function (e) {
        return e.reactedAtMs;
      }).flatMap(function (e) {
        var t = e.emoji,
          n = e.key,
          r = e.reactedAtMs;
        return t != null && t !== ""
          ? [{ emoji: t, reactedAtMs: r, senderJid: f(n) }]
          : [];
      });
    }
    function f(e) {
      var t;
      return e == null || e.fromMe === !0
        ? null
        : (t = e.participant) != null
          ? t
          : e.remoteJid;
    }
    function g(e) {
      var t = e.pinInChat;
      return t == null ||
        t.type !== o("WAWebProtobufsWeb.pb").PinInChat$Type.PIN_FOR_ALL
        ? null
        : { pinnedAtMs: o("WALongInt").maybeNumber(t.senderTimestampMs) };
    }
    function h(e) {
      var t,
        n = e.messageAddOns,
        r = y(
          n,
          o("WAWebProtobufsWeb.pb").MessageAddOn$MessageAddOnType.PIN_IN_CHAT,
        );
      return r == null ||
        ((t = r.messageAddOn) == null || (t = t.pinInChatMessage) == null
          ? void 0
          : t.type) !==
          o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.PIN_FOR_ALL
        ? null
        : { pinnedAtMs: o("WALongInt").maybeNumber(r.senderTimestampMs) };
    }
    function y(e, t) {
      var n = null;
      for (var r of e)
        r.messageAddOnType === t && (n == null || C(r) >= C(n)) && (n = r);
      return n;
    }
    function C(e) {
      var t;
      return (t = o("WALongInt").maybeNumber(e.senderTimestampMs)) != null
        ? t
        : 0;
    }
    ((l.getLabyrinthDebugPin = u),
      (l.getLabyrinthDebugReactions = c),
      (l.getLabyrinthDebugPollVotes = d),
      (l.getLabyrinthDebugRsvps = m));
  },
  98,
);
