__d(
  "WAWebMexLogServerSentInviteIntentJob",
  [
    "WALogger",
    "WAWebMexClient",
    "WAWebMexLogServerSentInviteIntentJobMutation.graphql",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t, a) {
      var i =
          e !== void 0
            ? e
            : (e = n("WAWebMexLogServerSentInviteIntentJobMutation.graphql")),
        l = { input: { receiver: t, entry_point: a } };
      o("WAWebMexClient")
        .fetchQuery(i, l)
        .catch(function (e) {
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[out-contact-invite] Could not log server-sent invite intent",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("out-contact-server-sent-invite-intent-log-failed");
        });
    }
    l.mexLogServerSentInviteIntent = u;
  },
  98,
);
