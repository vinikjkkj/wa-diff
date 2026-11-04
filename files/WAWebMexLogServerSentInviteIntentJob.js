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
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[out-contact-invite][ssi] could not log invite intent",
                ])),
            )
            .catching(r("getErrorSafe")(e));
        });
    }
    l.mexLogServerSentInviteIntent = u;
  },
  98,
);
