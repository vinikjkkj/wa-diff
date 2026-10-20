__d(
  "WAWebHandleVoipTransfer",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebHandleMsgTypes.flow",
    "WAWebVoipHandleIncomingSignalingMessage",
    "WAWebVoipRejectCallWithReasonEnc",
    "WAWebVoipValidateAndDecryptEnc",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (
            o("WAWebABProps").getABPropConfigValue(
              "enable_call_transfer_auto_switch",
            ) !== !0
          ) {
            yield o(
              "WAWebVoipHandleIncomingSignalingMessage",
            ).handleVoipIncomingSignalingMessage(t, n);
            return;
          }
          var r = yield o(
              "WAWebVoipValidateAndDecryptEnc",
            ).validateAndDecryptEnc(n, t),
            a = r.result,
            i = r.retryCount;
          e: {
            if (a === o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS) {
              yield o(
                "WAWebVoipHandleIncomingSignalingMessage",
              ).handleVoipIncomingSignalingMessage(t, n);
              break e;
            }
            if (a === o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY) {
              var l = yield o(
                "WAWebVoipRejectCallWithReasonEnc",
              ).rejectCallWithReasonEnc(t, i != null ? i : 0, !1);
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: transfer reject enc, call=",
                    " count=",
                    "",
                  ])),
                t.call_id,
                l,
              );
              break e;
            }
            {
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: transfer dropped, e2e result=",
                    " call=",
                    "",
                  ])),
                String(a),
                t.call_id,
              );
              break e;
            }
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.handleVoipTransfer = u;
  },
  98,
);
