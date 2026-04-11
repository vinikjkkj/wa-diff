__d(
  "WAWebMexNewsletterQuestionResponseStateChangeNotificationHandler",
  ["Promise", "WALogger", "WAWebBackendApi", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t, a) {
      var i = a.xwa2_notify_newsletter_response_state_update;
      if (i == null)
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletter][resp-state] null data in xwa2_notify",
              ])),
          ),
          (u || (u = n("Promise"))).resolve()
        );
      var l = i.response_server_id,
        c = i.response_state,
        d = i.server_id;
      if (c === "UNHIDE") return (u || (u = n("Promise"))).resolve();
      try {
        o("WAWebBackendApi").frontendFireAndForget(
          "hideNewsletterQuestionResponse",
          { questionServerId: Number(d), responseServerId: l },
        );
      } catch (e) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletter][resp-state] question resp state notif failed",
              ])),
          )
          .tags("newsletter")
          .catching(r("getErrorSafe")(e))
          .sendLogs("newsletter-question-resp-state-notif-failed");
      }
      return (u || (u = n("Promise"))).resolve();
    }
    l.mexHandleNewsletterQuestionsResponseStateChange = c;
  },
  98,
);
