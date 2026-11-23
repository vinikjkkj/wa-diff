__d(
  "MAIBAInteractionLoggerContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useContext,
      m = {
        getInteractionID: function () {
          return null;
        },
        getInteractionIDForMessageOTID: function () {
          return null;
        },
        registerMessageOTID: function () {},
        onSendStart: function () {
          return "";
        },
        onGetClientContextStart: function () {},
        onGetClientContextEnd: function () {},
        onMutationFired: function () {},
        onAsyncSubmitAck: function () {},
        onFirstResponse: function () {},
        onStreamingStateChange: function () {},
        onAnswerContentReceived: function () {},
        onCancel: function () {},
        onComplete: function () {},
        onError: function () {},
        onSubscriptionError: function () {},
        onResponseReceived: function () {},
        onRecoveryOutcome: function () {},
        onErrorNoticeShown: function () {},
      },
      p = c(m);
    function _() {
      return d(p);
    }
    ((l.MAIBAInteractionLoggerContext = p), (l.useInteractionLogger = _));
  },
  98,
);
