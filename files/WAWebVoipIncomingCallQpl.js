__d(
  "WAWebVoipIncomingCallQpl",
  ["$InternalEnum", "WAWebQplFlow", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("qpl")._(891433714, "3401"),
      s = 12e4,
      u = n("$InternalEnum")({
        E2E_DECRYPT_START: "e2e_decrypt_start",
        E2E_DECRYPT_END: "e2e_decrypt_end",
        TC_TOKEN_START: "tc_token_start",
        TC_TOKEN_END: "tc_token_end",
        STACK_RESOLVE_START: "stack_resolve_start",
        STACK_RESOLVE_END: "stack_resolve_end",
        NATIVE_PROCESS_START: "native_process_start",
        NATIVE_PROCESS_END: "native_process_end",
      });
    function c(t) {
      return o("WAWebQplFlow").startQplFlow(e, {
        timeoutInMs: s,
        annotations: t,
      });
    }
    function d(e, t) {
      e.addPoint(t);
    }
    function m(e) {
      e.endSuccess();
    }
    function p(e, t) {
      e.endCancel(void 0, { string: { cancel_reason: t } });
    }
    function _(e, t) {
      e.endFail(t);
    }
    ((l.VoipIncomingCallQplPoint = u),
      (l.startVoipIncomingCallQpl = c),
      (l.voipIncomingCallQplAddPoint = d),
      (l.endVoipIncomingCallQplSuccess = m),
      (l.endVoipIncomingCallQplCancel = p),
      (l.endVoipIncomingCallQplFail = _));
  },
  98,
);
