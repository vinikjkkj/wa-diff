__d(
  "useWAWebAppRatingSubmitter",
  [
    "WALogger",
    "WASmaxBugReportingReportBugRPC",
    "WAWebLoggerDebugInfo",
    "WAWebModalManager",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      var t = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a, i) {
            if (!n.aborted) {
              var l = t.feedback,
                u = t.rating;
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "AppRating: Submitting app user_review_score with user_review_score=",
                    " and feedback=",
                    "",
                  ])),
                u,
                l,
              ),
                o("WAWebModalManager").ModalManager.close());
              try {
                var c = JSON.stringify(
                    yield o("WAWebLoggerDebugInfo").getDebugInfo({
                      supportTag: "InAppFeedback",
                      convertFields: !0,
                      addUserAgentDetails: !0,
                      user_review_score: u,
                    }),
                    null,
                    2,
                  ),
                  d = yield o(
                    "WASmaxBugReportingReportBugRPC",
                  ).sendReportBugRPC(
                    {
                      descriptionElementValue: l,
                      debugInformationJsonElementValue: c,
                      mediaArgs: [],
                      titleArgs: {
                        titleElementValue:
                          i != null
                            ? i
                            : "WhatsApp Web Feedback - " + u + "/5 stars",
                      },
                      categoryArgs: void 0,
                    },
                    { withoutRetry: !0 },
                  );
                switch (d.name) {
                  case "ReportBugResponseSuccess": {
                    r == null || r();
                    break;
                  }
                  case "ReportBugResponseError":
                  default: {
                    a == null || a();
                    break;
                  }
                }
              } catch (e) {
                (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "AppRating: Error submitting feedback: ",
                      "",
                    ])),
                  String(e),
                ),
                  a == null || a());
              }
            }
          },
        );
        return function (n, r, o, a, i) {
          return t.apply(this, arguments);
        };
      })();
      return t;
    }
    l.default = u;
  },
  98,
);
