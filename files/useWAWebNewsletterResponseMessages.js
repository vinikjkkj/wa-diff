__d(
  "useWAWebNewsletterResponseMessages",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebFrontendMsgGetters",
    "WAWebNetworkStatus",
    "WAWebNewsletterGetQuestionResponsesAction",
    "WAWebNewsletterQuestionResponseCollection",
    "WAWebNewsletterValidationUtils",
    "WAWebQuestionsGatingUtils",
    "asyncToGeneratorRuntime",
    "err",
    "react",
    "useWAWebEventTargetValue",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = c.useCallback,
      m = c.useEffect,
      p = c.useRef,
      _ = c.useState,
      f = n("$InternalEnum").Mirrored([
        "OFFLINE",
        "FETCHING",
        "FETCHING_MORE",
        "SUCCESS",
        "ERROR",
      ]);
    function g(t, a, i) {
      var l = r("useWAWebUnmountSignal")(),
        u = _(f.FETCHING),
        c = u[0],
        g = u[1],
        h = p(null),
        y = p(!1),
        C = r("useWAWebEventTargetValue")(
          r("WAWebNetworkStatus"),
          "change:online",
          function () {
            return !r("WAWebNetworkStatus").online;
          },
        ),
        b = r("useWAWebEventTargetValue")(
          o("WAWebNewsletterQuestionResponseCollection")
            .QuestionResponseCollection,
          ["add", "remove", "change", "reset"],
          function () {
            return o(
              "WAWebNewsletterQuestionResponseCollection",
            ).QuestionResponseCollection.toArray();
          },
        ),
        v = d(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = t.serverId;
            if (e == null) throw r("err")("question server id is null");
            var n = yield o(
                "WAWebNewsletterGetQuestionResponsesAction",
              ).getNewsletterQuestionResponsesAction(
                {
                  questionResponsesCount: o(
                    "WAWebQuestionsGatingUtils",
                  ).getQuestionResponsesPageSize(),
                  questionResponsesServerId: e,
                  newsletterJid: o(
                    "WAWebNewsletterValidationUtils",
                  ).toNewsletterJidOrThrow(
                    o("WAWebFrontendMsgGetters").getChat(t).id.toJid(),
                  ),
                  filter: a,
                  cursor: h.current,
                  searchQuery: i,
                },
                t.id,
              ),
              l = n.cursor,
              s = n.hasNextPage;
            ((h.current = l), (y.current = s));
          }),
          [a, t, i],
        ),
        S = d(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (!l.aborted) {
              if ((g(f.FETCHING), C)) {
                g(f.OFFLINE);
                return;
              }
              try {
                (yield v(), g(f.SUCCESS));
              } catch (t) {
                (o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletters][fetchQuestionResponses] Failed to get question responses",
                      ])),
                  )
                  .tags("newsletter", "questions")
                  .sendLogs(
                    "newsletter-failed-to-get-newsletter-question-responses",
                  ),
                  g(f.ERROR));
              }
            }
          }),
          [C, v, l.aborted],
        );
      m(
        function () {
          S();
        },
        [S],
      );
      var R = d(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (g(f.FETCHING_MORE),
              v()
                .catch(function (e) {
                  (o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[newsletters][fetchQuestionResponses] Failed to get question responses",
                        ])),
                    )
                    .tags("newsletter", "questions")
                    .sendLogs(
                      "newsletter-failed-to-get-newsletter-question-responses",
                    ),
                    g(f.ERROR));
                })
                .finally(function () {
                  g(f.SUCCESS);
                }));
          }),
          [v],
        ),
        L = d(
          function () {
            return y.current === !0 && c !== f.FETCHING_MORE;
          },
          [c],
        ),
        E = function () {
          h.current = null;
        };
      return [
        b.map(function (e) {
          return { itemKey: e.id.toString(), response: e };
        }),
        c,
        R,
        L,
        E,
        S,
      ];
    }
    ((l.FetchQuestionResponsesStatus = f),
      (l.useNewsletterQuestionResponses = g));
  },
  98,
);
