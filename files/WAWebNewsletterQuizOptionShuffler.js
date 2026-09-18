__d(
  "WAWebNewsletterQuizOptionShuffler",
  [
    "WACryptoSha256BuilderV2",
    "WAHex",
    "WALogger",
    "WAWebNewsletterGatingUtils",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new TextEncoder();
    function u(t, n) {
      var r,
        a = n.isFromMe,
        i = n.isNewsletter,
        l = n.isQuiz,
        s = n.stanzaId;
      if (
        !c({ isFromMe: a, isNewsletter: i, isQuiz: l }) ||
        !o(
          "WAWebNewsletterGatingUtils",
        ).isQuizOptionReshuffleEnabledWithoutExposure()
      )
        return t;
      var u =
        (r = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
          ? void 0
          : r.user;
      return u == null || u === ""
        ? (o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[quizOptionShuffler] no LID, keeping the authored quiz order",
                ])),
            )
            .sendLogs("quiz-option-order-no-lid"),
          t)
        : d(t, u, s);
    }
    function c(e) {
      var t = e.isFromMe,
        n = e.isNewsletter,
        r = e.isQuiz;
      return r && n && !t;
    }
    function d(e, t, n) {
      var r = t + "|" + n + "|",
        o = e.map(function (e, t) {
          return { index: t, key: m(r + String(t)) };
        });
      return (
        o.sort(function (e, t) {
          return e.key === t.key ? 0 : e.key < t.key ? -1 : 1;
        }),
        o.map(function (t) {
          var n = t.index;
          return e[n];
        })
      );
    }
    function m(e) {
      return o("WAHex").toLowerCaseHex(
        new (o("WACryptoSha256BuilderV2").Sha256BuilderV2)()
          .update(s.encode(e))
          .finish(),
      );
    }
    ((l.applyViewerQuizOptionOrder = u),
      (l.isQuizOptionOrderExperimentEligible = c),
      (l.viewerOptionOrder = d));
  },
  98,
);
