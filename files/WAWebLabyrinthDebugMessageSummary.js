__d(
  "WAWebLabyrinthDebugMessageSummary",
  [
    "WALongInt",
    "WAWebLabyrinthDebugMessageAddOns",
    "WAWebLabyrinthDebugMessageContentRules",
    "WAWebLabyrinthDebugMessagePlaceholder",
    "WAWebLabyrinthOpaqueTypes",
    "WAWebProtobufsE2E.pb",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "canceled",
        "contextInfo",
        "edit",
        "pollTargetStanzaId",
        "secondaryText",
        "thumbnail",
      ],
      s = [
        "acp2SettingMessage",
        "associatedChildMessage",
        "audioStickerMessage",
        "botForwardedMessage",
        "botGroupParticipantMessage",
        "botInvokeMessage",
        "botPlatformRegistrationSuccessMessage",
        "botTaskMessage",
        "commentMessage",
        "deviceSentMessage",
        "documentWithCaptionMessage",
        "editedMessage",
        "ephemeralMessage",
        "eventCoverImage",
        "groupMentionedMessage",
        "groupStatusMentionMessage",
        "groupStatusMessage",
        "groupStatusMessageV2",
        "limitSharingMessage",
        "lottieStickerMessage",
        "newsletterAdminProfileMessage",
        "newsletterAdminProfileStatusMessage",
        "newsletterScheduledMessage",
        "pollCreationMessageV4",
        "pollCreationOptionImageMessage",
        "questionMessage",
        "questionReplyMessage",
        "spoilerMessage",
        "statusAddYours",
        "statusMentionMessage",
        "viewOnceMessage",
        "viewOnceMessageV2",
        "viewOnceMessageV2Extension",
      ],
      u = new Set(["$$unknownFieldCount", "messageContextInfo"]),
      c = [
        "text",
        "caption",
        "title",
        "name",
        "body",
        "displayName",
        "fileName",
      ],
      d = 5,
      m = new Map([
        ["associatedChildMessage", "mediaPart"],
        ["botInvokeMessage", "toBot"],
        ["commentMessage", "comment"],
        ["groupMentionedMessage", "groupMention"],
      ]);
    function p(t) {
      var n,
        r,
        a,
        i = t.key,
        l = t.message,
        s = t.messageTimestamp,
        u = t.participant,
        c = o("WALongInt").maybeNumber(s),
        d = (n = k(t)) != null ? n : I(l),
        m = d.canceled,
        p = d.contextInfo,
        T = d.edit,
        D = d.pollTargetStanzaId,
        x = d.secondaryText,
        $ = d.thumbnail,
        P = babelHelpers.objectWithoutPropertiesLoose(d, e),
        N = (r = T == null ? void 0 : T.originalStanzaId) != null ? r : i.id;
      return babelHelpers.extends({}, P, {
        badges: [f(m), g(T, i.id)]
          .concat(_(P.contentPath), [
            h(p),
            y(p),
            C(p),
            L(D),
            b(t),
            v(t),
            S(t),
            R(t),
            E(t),
          ])
          .filter(Boolean),
        fromMe: i.fromMe === !0,
        secondaryText: x != null ? x : null,
        thumbnail: $ != null && $.byteLength > 0 ? $ : null,
        senderJid:
          i.fromMe === !0
            ? null
            : (a = u != null ? u : i.participant) != null
              ? a
              : null,
        sentAtSec:
          c == null
            ? c
            : o("WAWebLabyrinthOpaqueTypes").makeTimestampSeconds(c),
        stanzaId:
          N == null ? N : o("WAWebLabyrinthOpaqueTypes").makeStanzaId(N),
      });
    }
    function _(e) {
      return e.flatMap(function (e) {
        var t = m.get(e);
        return t ? [{ kind: t }] : [];
      });
    }
    function f(e) {
      return e === !0 ? { kind: "canceled" } : null;
    }
    function g(e, t) {
      return e != null
        ? {
            editStanzaId:
              t != null ? o("WAWebLabyrinthOpaqueTypes").makeStanzaId(t) : null,
            editedAtMs: e.editedAtMs,
            kind: "edited",
          }
        : null;
    }
    function h(e) {
      var t = e != null ? e : {},
        n = t.participant,
        r = t.quotedMessage,
        a = t.stanzaId;
      if (a == null && r == null) return null;
      var i = r != null ? I(r) : null;
      return {
        kind: "reply",
        quotedKind: i == null ? void 0 : i.kind,
        quotedPreviewText: i == null ? void 0 : i.previewText,
        quotedSender: n,
        quotedStanzaId:
          a != null ? o("WAWebLabyrinthOpaqueTypes").makeStanzaId(a) : null,
      };
    }
    function y(e) {
      return (e == null ? void 0 : e.isForwarded) === !0
        ? { forwardingScore: e.forwardingScore, kind: "forwarded" }
        : null;
    }
    function C(e) {
      var t,
        n = (t = e == null ? void 0 : e.mentionedJid) != null ? t : [];
      return n.length > 0 ? { jids: n, kind: "mentions" } : null;
    }
    function b(e) {
      var t = o("WAWebLabyrinthDebugMessageAddOns").getLabyrinthDebugReactions(
        e,
      );
      return t.length > 0 ? { kind: "reactions", reactions: t } : null;
    }
    function v(e) {
      var t = o("WAWebLabyrinthDebugMessageAddOns").getLabyrinthDebugPollVotes(
        e,
      );
      return t.length > 0 ? { kind: "votes", votes: t } : null;
    }
    function S(e) {
      var t = o("WAWebLabyrinthDebugMessageAddOns").getLabyrinthDebugRsvps(e);
      return t.length > 0 ? { kind: "rsvps", rsvps: t } : null;
    }
    function R(e) {
      var t = o("WAWebLabyrinthDebugMessageAddOns").getLabyrinthDebugPin(e);
      return t != null ? { kind: "pinned", pinnedAtMs: t.pinnedAtMs } : null;
    }
    function L(e) {
      return e != null
        ? {
            kind: "pollTarget",
            pollStanzaId: o("WAWebLabyrinthOpaqueTypes").makeStanzaId(e),
          }
        : null;
    }
    function E(e) {
      var t = e.starred;
      return t === !0 ? { kind: "starred" } : null;
    }
    function k(e) {
      var t = o(
        "WAWebLabyrinthDebugMessagePlaceholder",
      ).summarizeLabyrinthDebugPlaceholder(e);
      return t != null
        ? babelHelpers.extends({}, t, { contentPath: [] })
        : null;
    }
    function I(e, t) {
      if ((t === void 0 && (t = []), e == null || t.length >= d))
        return { contentPath: t, facts: [], kind: "empty", previewText: null };
      var n = T(e);
      if (n != null)
        return babelHelpers.extends({}, n, {
          contentPath: [].concat(t, n.contentPath),
        });
      var r = D(e);
      if (r != null)
        return babelHelpers.extends(
          {},
          I(r.message, [].concat(t, ["protocolMessage", "editedMessage"])),
          { edit: r.edit },
        );
      var o = x(e);
      return o != null ? I(o.message, [].concat(t, [o.field])) : $(e, t);
    }
    function T(e) {
      for (var t of o("WAWebLabyrinthDebugMessageContentRules").CONTENT_RULES) {
        var n = t.field,
          r = t.kind,
          a = t.read,
          i = a(e);
        if (i != null) {
          var l;
          return {
            canceled: i.canceled,
            contentPath: [n],
            contextInfo: i.contextInfo,
            facts: i.facts,
            kind: r,
            previewText: (l = i.texts.find(N)) != null ? l : null,
            secondaryText: N(i.secondaryText) ? i.secondaryText : null,
            pollTargetStanzaId: i.pollTargetStanzaId,
            thumbnail: i.thumbnail,
          };
        }
      }
      return null;
    }
    function D(e) {
      var t,
        n = e.protocolMessage,
        r = n == null ? void 0 : n.editedMessage;
      return n == null ||
        n.type !==
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT ||
        r == null
        ? null
        : {
            edit: {
              editedAtMs: o("WALongInt").maybeNumber(n.timestampMs),
              originalStanzaId: (t = n.key) == null ? void 0 : t.id,
            },
            message: r,
          };
    }
    function x(e) {
      for (var t of s) {
        var n,
          r = (n = e[t]) == null ? void 0 : n.message;
        if (r != null) return { field: t, message: r };
      }
      return null;
    }
    function $(e, t) {
      var n = Object.entries(e).find(function (e) {
        var t = e[0],
          n = e[1];
        return n != null && !u.has(t);
      });
      if (n == null)
        return { contentPath: t, facts: [], kind: "empty", previewText: null };
      var r = n[0],
        o = n[1];
      return {
        contentPath: [].concat(t, [r]),
        facts: [],
        kind: "other",
        previewText: P(o),
      };
    }
    function P(e, t) {
      if ((t === void 0 && (t = 0), typeof e != "object" || e == null || t > 1))
        return null;
      var n = c
        .map(function (t) {
          return e[t];
        })
        .find(N);
      if (typeof n == "string") return n;
      for (var r of Object.values(e)) {
        var o = P(r, t + 1);
        if (o != null) return o;
      }
      return null;
    }
    function N(e) {
      return typeof e == "string" && e !== "";
    }
    l.summarizeLabyrinthDebugMessage = p;
  },
  98,
);
