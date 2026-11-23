__d(
  "WAWebHatchPeerConversationDecoder",
  ["WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("WAWebHatchJsonReaders").readArray(e, "chat_events"),
        r = o("WAWebHatchJsonReaders").readString(e, "chat_id");
      if (n == null || (r != null && r !== t)) return null;
      var a = n.flatMap(function (e) {
          var t = o("WAWebHatchJsonReaders").readInteger(e, "seq");
          return t != null && t >= 0 ? [t] : [];
        }),
        i = n.map(m);
      return {
        hasMore: o("WAWebHatchJsonReaders").readField(e, "has_more") === !0,
        messages: g(
          i.flatMap(function (e) {
            return (e == null ? void 0 : e.kind) === "message"
              ? [e.message]
              : [];
          }),
        ),
        oldestSeq: a.length > 0 ? Math.min.apply(Math, a) : null,
        removedIds: _(i, "removed"),
        textlessIds: _(i, "textless"),
      };
    }
    function s(e, t) {
      var n,
        r = o("WAWebHatchJsonReaders").readObject(e, "chat_event"),
        a = o("WAWebHatchJsonReaders").isObject(r) ? r : e,
        i =
          (n = o("WAWebHatchJsonReaders").readString(a, "chat_id")) != null
            ? n
            : o("WAWebHatchJsonReaders").readString(e, "chat_id");
      if (i != null && i !== t) return null;
      var l = m(a);
      return (l == null ? void 0 : l.kind) === "textless" ? null : l;
    }
    function u(e, t) {
      return t.length === 0 ? e : g([].concat(e, t));
    }
    var c = new Set(["message.user", "message.assistant"]),
      d = "DELETED";
    function m(e) {
      var t,
        n = o("WAWebHatchJsonReaders").readNonEmptyString(e, "message_id");
      if (
        !c.has(o("WAWebHatchJsonReaders").readString(e, "event_name")) ||
        n == null
      )
        return null;
      if (
        ((t = o("WAWebHatchJsonReaders").readString(e, "state")) == null
          ? void 0
          : t.toUpperCase()) === d
      )
        return { id: n, kind: "removed" };
      if (p(e)) return { id: n, kind: "textless" };
      var r = o("WAWebHatchJsonReaders").readInteger(e, "seq"),
        a = o("WAWebHatchJsonReaders").readString(e, "display_text"),
        i = f(
          o("WAWebHatchJsonReaders").readString(
            o("WAWebHatchJsonReaders").readObject(e, "author"),
            "kind",
          ),
        );
      return r == null || r < 0 || a == null || a.trim() === "" || i == null
        ? null
        : {
            kind: "message",
            message: {
              author: i,
              id: n,
              occurredAtMs: o("WAWebHatchJsonReaders").readInteger(
                e,
                "occurred_at_ms",
              ),
              seq: r,
              text: a,
            },
          };
    }
    function p(e) {
      var t;
      return (
        ((t = o("WAWebHatchJsonReaders").readString(e, "display_text")) != null
          ? t
          : ""
        ).trim() === "" &&
        o("WAWebHatchJsonReaders").readBool(e, "display_text_ready") !== !1
      );
    }
    function _(e, t) {
      return e.flatMap(function (e) {
        return e != null && e.kind === t && e.kind !== "message" ? [e.id] : [];
      });
    }
    function f(e) {
      return e === "own_agent"
        ? "own_agent"
        : e === "peer_agent"
          ? "peer_agent"
          : e === "peer_human"
            ? "peer_human"
            : null;
    }
    function g(e) {
      var t = new Map();
      for (var n of e) t.set(n.id, n);
      return Array.from(t.values()).sort(function (e, t) {
        return e.seq - t.seq || e.id.localeCompare(t.id);
      });
    }
    ((l.decodeHatchPeerConversationHistory = e),
      (l.decodeHatchPeerConversationEvent = s),
      (l.mergeHatchPeerConversationMessages = u));
  },
  98,
);
