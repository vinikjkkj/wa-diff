__d(
  "WAWebMexNewsletterQuestionResponseStateUpdateJob",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexNewsletterQuestionResponseStateUpdateJobMutation.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      var r,
        a =
          e !== void 0
            ? e
            : (e = n(
                "WAWebMexNewsletterQuestionResponseStateUpdateJobMutation.graphql",
              )),
        i = t.newsletterId,
        l = t.responseServerId,
        u = t.serverId,
        c = t.state,
        d = { newsletter_id: i, server_id: u, response_server_id: l, state: c },
        m = await o("WAWebMexClient").fetchQuery(a, d);
      if (
        (m == null ||
        (r = m.xwa2_newsletter_question_response_state_update) == null
          ? void 0
          : r.id) == null
      )
        throw (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[MEX][NEWSLETTER] update question response state failed",
                ])),
            )
            .sendLogs("mex-update-question-response-state-failed")
            .tags("GQL", "MEX", "NEWSLETTER", "RESPONSE"),
          new (o("WAWebBackendErrors").ServerStatusCodeError)(
            500,
            "unexpected-null-mex-response",
          )
        );
      return { success: !0 };
    }
    l.mexNewsletterQuestionResponseStateUpdate = u;
  },
  98,
);
