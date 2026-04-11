__d(
  "WAWebThreadMsgUtils",
  ["WALogger", "WAWebThreadUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      return e.threadIds == null
        ? !1
        : e.threadIds.some(function (e) {
            return e.equals(t);
          });
    }
    function u(e) {
      return e.threadIds != null && e.threadIds.length > 0;
    }
    function c(t) {
      var n;
      if (!t.id.remote.isBot()) return null;
      var r =
        (n = t.threadIds) == null
          ? void 0
          : n.filter(function (e) {
              return e.type === o("WAWebThreadUtils").ThreadType.AiThread;
            });
      return r == null || r.length === 0
        ? null
        : (r.length > 1 &&
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "getMsgAiThread: multiple ai threads found for msg",
                  ])),
              )
              .sendLogs(
                "getMsgAiThread: more than one ai thread found for msg",
              ),
          r[0]);
    }
    function d(e) {
      return m(e.threadIds);
    }
    function m(e) {
      return (
        (e == null
          ? void 0
          : e.some(function (e) {
              return e.type === o("WAWebThreadUtils").ThreadType.AiThread;
            })) === !0
      );
    }
    function p(e) {
      var t, n;
      return (t =
        (n = e.threadIds) == null
          ? void 0
          : n.find(function (e) {
              return e.type === o("WAWebThreadUtils").ThreadType.ViewAllReplies;
            })) != null
        ? t
        : null;
    }
    function _(e, t) {
      return t.key.equals(e.id);
    }
    ((l.isMsgInThread = s),
      (l.isThreadMsg = u),
      (l.getMsgAiThread = c),
      (l.msgHasAiThread = d),
      (l.threadsContainAiThread = m),
      (l.getMsgViewAllRepliesThread = p),
      (l.isMsgRootOfThread = _));
  },
  98,
);
