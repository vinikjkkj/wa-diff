__d(
  "WAWebVoipCallsTabClearCallLogAction",
  [
    "WALogger",
    "WAWebChatSendMessages",
    "WAWebFrontendMsgGetters",
    "WAWebMsgQueryUtils",
    "WAWebVoipCallsTabCallInfoUtils",
    "WAWebVoipCallsTabPanelManager",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 100,
      m = 200;
    async function p() {
      var t;
      try {
        t = await f();
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "clearAllCallLogs: could not read the call log",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("clear-call-log-collect-failed");
        return;
      }
      await _(t);
    }
    async function _(e) {
      try {
        var t = y(e);
        await Array.from(t).reduce(function (e, t) {
          var n = t[0],
            a = t[1];
          return e.then(async function () {
            try {
              await o("WAWebChatSendMessages").sendDeleteMsgs({
                chat_: n,
                clearMedia: !1,
                record: { type: "message", list: a },
              });
            } catch (e) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "deleteCallLogMsgs: could not delete a chat's call log entries",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("delete-call-log-chat-failed");
            }
          });
        }, Promise.resolve());
      } finally {
        (r("WAWebVoipCallsTabPanelManager").trigger("closeCallLogInfoPanel"),
          r("WAWebVoipCallsTabPanelManager").trigger(
            "onWriteCallLogMessage",
            null,
          ));
      }
    }
    function f() {
      return g(void 0, [], new Set(), 0);
    }
    async function g(e, t, n, r) {
      var a = await o("WAWebMsgQueryUtils").getVoipCallLogMsgs(d, e),
        i = a.filter(function (e) {
          return !n.has(e.id.toString());
        });
      return (
        i.forEach(function (e) {
          return n.add(e.id.toString());
        }),
        t.push.apply(t, i.filter(h)),
        i.length === 0
          ? (e != null &&
              !a.some(function (t) {
                return t.id.equals(e);
              }) &&
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "clearAllCallLogs: call log walk lost its anchor",
                    ])),
                )
                .sendLogs("clear-call-log-walk-truncated"),
            t)
          : r + 1 >= m
            ? (o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "clearAllCallLogs: call log walk hit the batch cap",
                    ])),
                )
                .sendLogs("clear-call-log-walk-capped"),
              t)
            : g(a[a.length - 1].id, t, n, r + 1)
      );
    }
    function h(e) {
      return (
        o("WAWebFrontendMsgGetters").getMaybeChat(e) != null &&
        o("WAWebVoipCallsTabCallInfoUtils").getShouldShowInCallsTabCallLog(e)
      );
    }
    function y(e) {
      var t = new Map();
      for (var n of e) {
        var r = o("WAWebFrontendMsgGetters").getMaybeChat(n);
        if (r != null) {
          var a = t.get(r);
          a == null ? t.set(r, [n]) : a.push(n);
        }
      }
      return t;
    }
    ((l.clearAllCallLogs = p), (l.deleteCallLogMsgs = _));
  },
  98,
);
