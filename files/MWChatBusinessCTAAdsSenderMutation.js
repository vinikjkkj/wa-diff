__d(
  "MWChatBusinessCTAAdsSenderMutation",
  [
    "CometRelay",
    "MWChatBusinessCTAAdsSenderMutation.graphql",
    "QPLUserFlow",
    "WelcomeMessageSendQPLConstants",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("MWChatBusinessCTAAdsSenderMutation.graphql"));
    function u(e, t) {
      o("CometRelay").commitMutation(e, {
        mutation: s,
        onCompleted: function () {
          (r("QPLUserFlow").addPoint(
            o("WelcomeMessageSendQPLConstants").WELCOME_MESSAGE_SEND_QPL_EVENT,
            o("WelcomeMessageSendQPLConstants").WELCOME_MESSAGE_SEND_SUCCESS,
          ),
            r("QPLUserFlow").endSuccess(
              o("WelcomeMessageSendQPLConstants")
                .WELCOME_MESSAGE_SEND_QPL_EVENT,
            ));
        },
        onError: function (t) {
          r("QPLUserFlow").endFailure(
            o("WelcomeMessageSendQPLConstants").WELCOME_MESSAGE_SEND_QPL_EVENT,
            o("WelcomeMessageSendQPLConstants").WELCOME_MESSAGE_SEND_FAILED,
          );
        },
        variables: { input: t },
      });
    }
    l.sendAds = u;
  },
  98,
);
