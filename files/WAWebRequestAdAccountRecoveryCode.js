__d(
  "WAWebRequestAdAccountRecoveryCode",
  [
    "WASmaxBizCtwaAdAccountSendAccountRecoveryNonceRPC",
    "WAWebQplFlowWrapper",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("qpl")._(1029380470, "830");
    function s() {
      return (
        o("WAWebQplFlowWrapper").QPL.markerStart(e),
        o("WAWebQplFlowWrapper").QPL.markerPoint(e, "request_code_start"),
        o("WASmaxBizCtwaAdAccountSendAccountRecoveryNonceRPC")
          .sendSendAccountRecoveryNonceRPC({})
          .then(function (e) {
            return e.name === "SendAccountRecoveryNonceResponseSuccess"
              ? e.value.resultSendAccountRecoveryNonceResponseMixin
                  .statusElementValue === "Success"
                ? (c(), "success")
                : (e.value.resultSendAccountRecoveryNonceResponseMixin
                    .statusElementValue,
                  d("fail"),
                  "fail")
              : (e.name, d("error"), "error");
          })
          .catch(function (e) {
            throw (d("promise-rejected"), e);
          })
      );
    }
    function u(t) {
      (o("WAWebQplFlowWrapper").QPL.markerPoint(e, "request_code_end"),
        o("WAWebQplFlowWrapper").QPL.markerEnd(e, t));
    }
    function c() {
      u(2);
    }
    function d(t) {
      (o("WAWebQplFlowWrapper").QPL.markerAnnotate(e, {
        string: { failureReason: t },
      }),
        u(3));
    }
    l.requestAdAccountRecoveryCode = s;
  },
  98,
);
