__d(
  "WAWebNewsletterRouteBridgeApi",
  [
    "WALogger",
    "WAWebNewsletterAdminInsightsModel",
    "WAWebNewsletterEnforcementAlertCollection",
    "WAWebNewsletterQuestionResponseCollection",
    "WAWebNewsletterReportCollection",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        updateNewsletterReports: async function (t) {
          var e = t.reports;
          (o(
            "WAWebNewsletterReportCollection",
          ).NewsletterReportCollection.reset(),
            o("WAWebNewsletterReportCollection").NewsletterReportCollection.add(
              e,
            ));
        },
        updateNewsletterReport: async function (t) {
          var e = t.report;
          o("WAWebNewsletterReportCollection").NewsletterReportCollection.add(
            e,
            { merge: !0 },
          );
        },
        updateNewsletterEnforcementAlerts: async function (t) {
          var e = t.enforcementAlerts;
          (o(
            "WAWebNewsletterEnforcementAlertCollection",
          ).NewsletterEnforcementAlertCollection.reset(),
            o(
              "WAWebNewsletterEnforcementAlertCollection",
            ).NewsletterEnforcementAlertCollection.add(e));
        },
        updateNewsletterQuestionResponses: async function (t) {
          var e = t.append,
            n = t.responses;
          (e ||
            o(
              "WAWebNewsletterQuestionResponseCollection",
            ).QuestionResponseCollection.reset(),
            o(
              "WAWebNewsletterQuestionResponseCollection",
            ).QuestionResponseCollection.add(n));
        },
        hideNewsletterQuestionResponse: async function (t) {
          var e,
            n = t.questionServerId,
            r = t.responseServerId,
            a = await ((e = o(
              "WAWebNewsletterQuestionResponseCollection",
            ).QuestionResponseCollection.filter(function (e) {
              return e.responseServerId === r && e.questionServerId === n;
            })) == null
              ? void 0
              : e[0]);
          a != null &&
            o(
              "WAWebNewsletterQuestionResponseCollection",
            ).QuestionResponseCollection.remove(a);
        },
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
        updateNewsletterQuestionResponseStarredState: async function (t) {
          var e,
            n = t.questionServerId,
            r = t.responseServerId,
            a = t.starred,
            i = await ((e = o(
              "WAWebNewsletterQuestionResponseCollection",
            ).QuestionResponseCollection.filter(function (e) {
              return e.responseServerId === r && e.questionServerId === n;
            })) == null
              ? void 0
              : e[0]);
          i != null && i.set("starred", a);
        },
      };
    l.NewsletterRouteBridgeApi = s;
  },
  98,
);
