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
    "react-compiler-runtime",
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
      var l = o("react-compiler-runtime").c(25),
        u = r("useWAWebUnmountSignal")(),
        c = _(f.FETCHING),
        d = c[0],
        g = c[1],
        b = p(null),
        v = p(!1),
        S = r("useWAWebEventTargetValue")(
          r("WAWebNetworkStatus"),
          "change:online",
          C,
        ),
        R;
      l[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = ["add", "remove", "change", "reset"]), (l[0] = R))
        : (R = l[0]);
      var L = r("useWAWebEventTargetValue")(
          o("WAWebNewsletterQuestionResponseCollection")
            .QuestionResponseCollection,
          R,
          y,
        ),
        E;
      l[1] !== a || l[2] !== t || l[3] !== i
        ? ((E = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                    cursor: b.current,
                    searchQuery: i,
                  },
                  t.id,
                ),
                l = n.cursor,
                s = n.hasNextPage;
              ((b.current = l), (v.current = s));
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (l[1] = a),
          (l[2] = t),
          (l[3] = i),
          (l[4] = E))
        : (E = l[4]);
      var k = E,
        I;
      l[5] !== S || l[6] !== k || l[7] !== u.aborted
        ? ((I = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (!u.aborted) {
                if ((g(f.FETCHING), S)) {
                  g(f.OFFLINE);
                  return;
                }
                try {
                  (yield k(), g(f.SUCCESS));
                } catch (n) {
                  var t = n;
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
            });
            return function () {
              return t.apply(this, arguments);
            };
          })()),
          (l[5] = S),
          (l[6] = k),
          (l[7] = u.aborted),
          (l[8] = I))
        : (I = l[8]);
      var T = I,
        D,
        x;
      (l[9] !== T
        ? ((D = function () {
            T();
          }),
          (x = [T]),
          (l[9] = T),
          (l[10] = D),
          (l[11] = x))
        : ((D = l[10]), (x = l[11])),
        m(D, x));
      var $;
      l[12] !== k
        ? (($ = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (g(f.FETCHING_MORE),
                k()
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
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (l[12] = k),
          (l[13] = $))
        : ($ = l[13]);
      var P = $,
        N;
      l[14] !== d
        ? ((N = function () {
            return v.current === !0 && d !== f.FETCHING_MORE;
          }),
          (l[14] = d),
          (l[15] = N))
        : (N = l[15]);
      var M = N,
        w;
      l[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = function () {
            b.current = null;
          }),
          (l[16] = w))
        : (w = l[16]);
      var A = w,
        F;
      l[17] !== L ? ((F = L.map(h)), (l[17] = L), (l[18] = F)) : (F = l[18]);
      var O;
      return (
        l[19] !== T || l[20] !== d || l[21] !== P || l[22] !== M || l[23] !== F
          ? ((O = [F, d, P, M, A, T]),
            (l[19] = T),
            (l[20] = d),
            (l[21] = P),
            (l[22] = M),
            (l[23] = F),
            (l[24] = O))
          : (O = l[24]),
        O
      );
    }
    function h(e) {
      return { itemKey: e.id.toString(), response: e };
    }
    function y() {
      return o(
        "WAWebNewsletterQuestionResponseCollection",
      ).QuestionResponseCollection.toArray();
    }
    function C() {
      return !r("WAWebNetworkStatus").online;
    }
    ((l.FetchQuestionResponsesStatus = f),
      (l.useNewsletterQuestionResponses = g));
  },
  98,
);
