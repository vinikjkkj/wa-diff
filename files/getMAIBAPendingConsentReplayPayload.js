__d(
  "getMAIBAPendingConsentReplayPayload",
  ["getMAIBAPendingConsentMessage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return babelHelpers.extends({}, e, {
        message: r("getMAIBAPendingConsentMessage")(
          e.messageForSend,
          e.initialUserMessage,
        ),
      });
    }
    l.default = e;
  },
  98,
);
