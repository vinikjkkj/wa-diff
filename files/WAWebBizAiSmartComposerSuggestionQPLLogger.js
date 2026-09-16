__d(
  "WAWebBizAiSmartComposerSuggestionQPLLogger",
  ["WAWebBizAiSmartComposerErrorMapping", "WAWebQplFlowWrapper", "qpl"],
  function (t, n, r, o, a, i, l) {
    var e = r("qpl")._(217267791, "3641"),
      s = {
        MESSAGE_RECEIVED: "message_received",
        MODE_SWITCH: "mode_switched",
        THREAD_OPEN: "thread_open",
      },
      u = "request_sent",
      c = "response_received",
      d = "retry_attempt_",
      m = "user_exit_chat",
      p = "user_started_typing",
      _ = 1;
    function f(e) {
      return new g(e);
    }
    var g = (function () {
      function t(t) {
        ((this.$1 = 0),
          (this.$2 = null),
          (this.$3 = "active"),
          (this.$2 = o("WAWebQplFlowWrapper").QPL.markerStart(e, {
            annotations: { string: { trigger: s[t] } },
            cancelOnUnload: !0,
            instanceKey: _++,
          })));
      }
      var n = t.prototype;
      return (
        (n.markAttemptStarted = function () {
          var e;
          this.$3 !== "ended" &&
            ((this.$1 += 1),
            (e = this.$2) == null ||
              e.addPoint(this.$1 === 1 ? u : "" + d + this.$1));
        }),
        (n.markResponseReceived = function (t) {
          var e = this.$4();
          e != null &&
            (e.addPoint(c),
            e.annotate({
              int: babelHelpers.extends(
                {},
                t.ok
                  ? {}
                  : {
                      error_code: o(
                        "WAWebBizAiSmartComposerErrorMapping",
                      ).getSuggestedReplyErrorWireValue(t.code),
                    },
                { retry_count: Math.max(0, this.$1 - 1) },
              ),
            }),
            e.end(t.ok ? 2 : 3));
        }),
        (n.markUserExitChat = function () {
          this.$5(m);
        }),
        (n.markUserStartedTyping = function () {
          this.$5(p);
        }),
        (n.cancel = function () {
          var e;
          (e = this.$4()) == null || e.end(4);
        }),
        (n.$5 = function (t) {
          if (this.$3 === "active") {
            var e;
            (e = this.$2) == null || e.addPoint(t);
          }
        }),
        (n.$4 = function () {
          var e = this.$3 === "active" ? this.$2 : null;
          return ((this.$3 = "ended"), (this.$2 = null), e);
        }),
        t
      );
    })();
    l.createSuggestedReplyQplLogger = f;
  },
  98,
);
