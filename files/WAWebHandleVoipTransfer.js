__d(
  "WAWebHandleVoipTransfer",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebHandleMsgTypes",
    "WAWebVoipHandleIncomingSignalingMessage",
    "WAWebVoipRejectCallWithReasonEnc",
    "WAWebVoipValidateAndDecryptEnc",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    async function u(t, n) {
      if (
        o("WAWebABProps").getABPropConfigValue(
          "enable_call_transfer_auto_switch",
        ) !== !0
      ) {
        await o(
          "WAWebVoipHandleIncomingSignalingMessage",
        ).handleVoipIncomingSignalingMessage(t, n);
        return;
      }
      var r = await o("WAWebVoipValidateAndDecryptEnc").validateAndDecryptEnc(
          n,
          t,
        ),
        a = r.result,
        i = r.retryCount;
      e: {
        if (a === o("WAWebHandleMsgTypes").E2EProcessResult.SUCCESS) {
          await o(
            "WAWebVoipHandleIncomingSignalingMessage",
          ).handleVoipIncomingSignalingMessage(t, n);
          break e;
        }
        if (a === o("WAWebHandleMsgTypes").E2EProcessResult.RETRY) {
          var l = await o(
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
    }
    l.handleVoipTransfer = u;
  },
  98,
);
