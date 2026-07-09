__d(
  "WAWebNewsletterRouteBridgeApi",
  [
    "WALogger",
    "WAWebNewsletterAdminInsightsModel",
    "WAWebNewsletterEnforcementAlertCollection",
    "WAWebNewsletterQuestionResponseCollection",
    "WAWebNewsletterReportCollection",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        updateNewsletterReports: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.reports;
            (o(
              "WAWebNewsletterReportCollection",
            ).NewsletterReportCollection.reset(),
              o(
                "WAWebNewsletterReportCollection",
              ).NewsletterReportCollection.add(t));
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        updateNewsletterReport: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.report;
            o("WAWebNewsletterReportCollection").NewsletterReportCollection.add(
              t,
              { merge: !0 },
            );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        updateNewsletterEnforcementAlerts: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.enforcementAlerts;
            (o(
              "WAWebNewsletterEnforcementAlertCollection",
            ).NewsletterEnforcementAlertCollection.reset(),
              o(
                "WAWebNewsletterEnforcementAlertCollection",
              ).NewsletterEnforcementAlertCollection.add(t));
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        updateNewsletterQuestionResponses: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.append,
              n = e.responses;
            (t ||
              o(
                "WAWebNewsletterQuestionResponseCollection",
              ).QuestionResponseCollection.reset(),
              o(
                "WAWebNewsletterQuestionResponseCollection",
              ).QuestionResponseCollection.add(n));
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        hideNewsletterQuestionResponse: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t,
              n = e.questionServerId,
              r = e.responseServerId,
              a = yield (t = o(
                "WAWebNewsletterQuestionResponseCollection",
              ).QuestionResponseCollection.filter(function (e) {
                return e.responseServerId === r && e.questionServerId === n;
              })) == null
                ? void 0
                : t[0];
            a != null &&
              o(
                "WAWebNewsletterQuestionResponseCollection",
              ).QuestionResponseCollection.remove(a);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        updateNewsletterInsights: function (n) {
          var t = n.insights,
            r = n.newsletter,
            a = r.newsletterMetadata;
          if (a == null) {
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[updateNewsletterInsights] newsletterMetadata=null",
                ])),
            );
            return;
          }
          var i = a.adminInsights;
          i == null
            ? (a.adminInsights = new (o(
                "WAWebNewsletterAdminInsightsModel",
              ).NewsletterAdminInsights)(t))
            : i.set(babelHelpers.extends({}, t));
        },
        updateNewsletterQuestionResponseStarredState: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t,
              n = e.questionServerId,
              r = e.responseServerId,
              a = e.starred,
              i = yield (t = o(
                "WAWebNewsletterQuestionResponseCollection",
              ).QuestionResponseCollection.filter(function (e) {
                return e.responseServerId === r && e.questionServerId === n;
              })) == null
                ? void 0
                : t[0];
            i != null && i.set("starred", a);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      };
    l.NewsletterRouteBridgeApi = s;
  },
  98,
);
