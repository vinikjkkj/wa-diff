__d(
  "WAWebThreadCommonModelUtils",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAiThreadCreationUtils",
    "WAWebMsgKey",
    "WAWebThreadUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var n = t.threadIds;
      if (n == null) return [];
      var a = t.t;
      if (a == null)
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "getThreadDetailUpdatesFromMessage: message has no timestamp",
              ])),
          ),
          []
        );
      var i = r("WAWebMsgKey").from(t.id),
        l = i.remote,
        s = o("WATimeUtils").castToUnixTime(a);
      return n.map(function (e) {
        return {
          threadId: e,
          chatId: l,
          lastMessageTimestamp: s,
          creationTimestamp: s,
          aiThreadInfo: t.aiThreadInfo,
          botModeSelection: t.botModeSelection,
          botModeOverride: t.botModeOverride,
          lastMsgKey: i.toString(),
        };
      });
    }
    function u(e) {
      var t = new Map();
      for (var n of e) {
        var r = s(n);
        for (var o of r) {
          var a = o.threadId.toString(),
            i = t.get(a);
          if (i == null) t.set(a, o);
          else {
            var l =
                o.lastMessageTimestamp >= i.lastMessageTimestamp
                  ? [i, o]
                  : [o, i],
              u = l[0],
              d = l[1],
              m = c(u, d);
            t.set(a, m);
          }
        }
      }
      return Array.from(t.values());
    }
    function c(e, t) {
      var n,
        r,
        o,
        a = {
          threadId: t.threadId,
          chatId: t.chatId,
          creationTimestamp: e.creationTimestamp,
          lastMessageTimestamp: t.lastMessageTimestamp,
        };
      if (t.aiThreadInfo != null) {
        var i,
          l,
          s =
            (i = t.aiThreadInfo.title) != null
              ? i
              : (l = e.aiThreadInfo) == null
                ? void 0
                : l.title;
        a.aiThreadInfo = babelHelpers.extends({}, t.aiThreadInfo, { title: s });
      } else a.aiThreadInfo = e.aiThreadInfo;
      return (
        (a.botModeOverride =
          (n = t.botModeOverride) != null ? n : e.botModeOverride),
        (a.botModeSelection =
          (r = t.botModeSelection) != null ? r : e.botModeSelection),
        (a.lastMsgKey = (o = t.lastMsgKey) != null ? o : e.lastMsgKey),
        a
      );
    }
    function d(e) {
      var t = e.threadId;
      if (t.type !== o("WAWebThreadUtils").ThreadType.AiThread) return !1;
      var n = o("WAWebAiThreadCreationUtils").getHistoricalMetaAiThreadId();
      return !t.equals(n);
    }
    ((l.getThreadDetailUpdatesFromMessage = s),
      (l.getAggregatedThreadDetailUpdatesFromMessages = u),
      (l.isAiThreadNonHistoricalMetaAiThread = d));
  },
  98,
);
