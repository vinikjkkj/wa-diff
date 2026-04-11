__d(
  "WAWebNewsletterQuestionResponseCollection",
  [
    "WAWebBaseCollection",
    "WAWebCollectionUtils",
    "WAWebNewsletterQuestionResponseModel",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.byParent = o("WAWebCollectionUtils").aggregated(function (e) {
            return e.parentMsgKey;
          })),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o(
      "WAWebNewsletterQuestionResponseModel",
    ).NewsletterQuestionResponse;
    var s = new e();
    l.QuestionResponseCollection = s;
  },
  98,
);
