__d(
  "MAIBAUnreadTaskResults",
  ["stripMAIBAEntityTags"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e
        .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
        .replace(/`{1,3}([^`]+)`{1,3}/g, "$1")
        .replace(/\*\*([^*]+)\*\*/g, "$1")
        .replace(/__([^_]+)__/g, "$1")
        .replace(/~~([^~]+)~~/g, "$1")
        .replace(/\*([^*\n]+)\*/g, "$1")
        .replace(/_([^_\n]+)_/g, "$1")
        .replace(/^[ \t]*(?:>[ \t]*|[-+*][ \t]+|\d+[.)][ \t]+)/gm, "")
        .replace(/\s+/g, " ")
        .trim();
    }
    function s(t) {
      var n = new Map();
      for (var o of t) {
        var a;
        if (o.isUnread) {
          var i =
              o.taskName != null && o.taskName !== ""
                ? o.taskName
                : o.taskPrompt,
            l = e(
              r("stripMAIBAEntityTags")(
                (a = o.lastMessageSnippet) != null ? a : "",
              ),
            );
          if (!(o.taskId === "" || i === "")) {
            var s = n.get(o.taskId);
            if (s == null) {
              n.set(o.taskId, {
                externalConversationId: o.externalConversationId,
                lastSendTimestampMs: o.lastSendTimestampMs,
                linkedAdAccountId: o.linkedAdAccountId,
                snippet: l,
                taskId: o.taskId,
                title: i,
                unreadCount: 1,
              });
              continue;
            }
            var u = o.lastSendTimestampMs > s.lastSendTimestampMs;
            n.set(o.taskId, {
              externalConversationId: u
                ? o.externalConversationId
                : s.externalConversationId,
              lastSendTimestampMs: u
                ? o.lastSendTimestampMs
                : s.lastSendTimestampMs,
              linkedAdAccountId: u ? o.linkedAdAccountId : s.linkedAdAccountId,
              snippet: u ? l : s.snippet,
              taskId: o.taskId,
              title: u ? i : s.title,
              unreadCount: s.unreadCount + 1,
            });
          }
        }
      }
      return Array.from(n.values()).sort(function (e, t) {
        return t.lastSendTimestampMs - e.lastSendTimestampMs;
      });
    }
    l.groupMAIBAUnreadTaskResults = s;
  },
  98,
);
