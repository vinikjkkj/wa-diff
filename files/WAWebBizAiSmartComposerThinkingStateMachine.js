__d(
  "WAWebBizAiSmartComposerThinkingStateMachine",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    var e = 800,
      u = 3e3,
      c = 3e4,
      d = c / u;
    function m(e, t) {
      return t.isAgentOrBusinessReply
        ? "waiting_for_reply"
        : t.isInboundConsumer
          ? "processing"
          : e === "idle" || e === "spinning_up"
            ? "waiting_for_customer"
            : e === "waiting_for_customer" ||
                e === "processing" ||
                e === "waiting_for_reply"
              ? e
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function p(e) {
      var t = f();
      return t[Math.min(Math.max(e, 0), t.length - 1)];
    }
    function _(e) {
      return e >= f().length - 1;
    }
    function f() {
      return [
        s._(/*BTDS*/ "Thinking\u2026"),
        s._(/*BTDS*/ "Reviewing information\u2026"),
        s._(/*BTDS*/ "Processing\u2026"),
        s._(/*BTDS*/ "Checking details\u2026"),
      ];
    }
    function g(e, t) {
      return e === "processing"
        ? p(t)
        : e === "spinning_up"
          ? s._(/*BTDS*/ "Getting ready\u2026")
          : e === "waiting_for_reply"
            ? s._(/*BTDS*/ "Waiting for reply\u2026")
            : e === "idle" || e === "waiting_for_customer"
              ? s._(/*BTDS*/ "AI will respond to the next message\u2026")
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    ((l.SPINNING_UP_DURATION_MS = e),
      (l.PROCESSING_CYCLE_INTERVAL_MS = u),
      (l.PROCESSING_WINDOW_MS = c),
      (l.PROCESSING_MAX_TICKS = d),
      (l.nextThinkingState = m),
      (l.getProcessingLabel = p),
      (l.isLastProcessingLabel = _),
      (l.getThinkingStateLabel = g));
  },
  226,
);
