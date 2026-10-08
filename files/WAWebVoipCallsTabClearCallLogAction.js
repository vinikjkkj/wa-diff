__d(
  "WAWebVoipCallsTabClearCallLogAction",
  [
    "Promise",
    "WALogger",
    "WAWebChatSendMessages",
    "WAWebFrontendMsgGetters",
    "WAWebMsgQueryUtils",
    "WAWebVoipCallsTabCallInfoUtils",
    "WAWebVoipCallsTabPanelManager",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = 100,
      p = 200;
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t;
          try {
            t = yield y();
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
          yield g(t);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = S(e);
            yield Array.from(t).reduce(
              function (e, t) {
                var a = t[0],
                  i = t[1];
                return e.then(
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    try {
                      yield o("WAWebChatSendMessages").sendDeleteMsgs({
                        chat_: a,
                        clearMedia: !1,
                        record: { type: "message", list: i },
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
                  }),
                );
              },
              (d || (d = n("Promise"))).resolve(),
            );
          } finally {
            (r("WAWebVoipCallsTabPanelManager").trigger(
              "closeCallLogInfoPanel",
            ),
              r("WAWebVoipCallsTabPanelManager").trigger(
                "onWriteCallLogMessage",
                null,
              ));
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y() {
      return C(void 0, [], new Set(), 0);
    }
    function C(e, t, n, r) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield o("WAWebMsgQueryUtils").getVoipCallLogMsgs(m, e),
              i = a.filter(function (e) {
                return !n.has(e.id.toString());
              });
            return (
              i.forEach(function (e) {
                return n.add(e.id.toString());
              }),
              t.push.apply(t, i.filter(v)),
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
                : r + 1 >= p
                  ? (o("WALogger")
                      .ERROR(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "clearAllCallLogs: call log walk hit the batch cap",
                          ])),
                      )
                      .sendLogs("clear-call-log-walk-capped"),
                    t)
                  : C(a[a.length - 1].id, t, n, r + 1)
            );
          },
        )),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return (
        o("WAWebFrontendMsgGetters").getMaybeChat(e) != null &&
        o("WAWebVoipCallsTabCallInfoUtils").getShouldShowInCallsTabCallLog(e)
      );
    }
    function S(e) {
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
    ((l.clearAllCallLogs = _), (l.deleteCallLogMsgs = g));
  },
  98,
);
