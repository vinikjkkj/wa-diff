__d(
  "WAWebNewsletterDSAReportsFlow.react",
  [
    "$InternalEnum",
    "WAWebCommonNewsletterEnums",
    "WAWebNewsletterCreateReportAppealAction",
    "WAWebNewsletterDSAReportDetailsDrawerLoadable",
    "WAWebNewsletterDSAReportsDrawer.react",
    "WAWebNewsletterDSBFlowStepOneDrawerLoadable",
    "WAWebNewsletterDSBFlowStepThreeDrawerLoadable",
    "WAWebNewsletterDSBFlowStepTwoDrawerLoadable",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterIntegrityUtils",
    "WAWebNewsletterReportsRemediationOptionsDrawerLoadable",
    "WAWebRequestReviewDescriptionScreenDrawerLoadable",
    "WAWebRequestReviewReasonScreenDrawer.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s.useState,
      d = n("$InternalEnum").Mirrored([
        "REPORT_LIST",
        "REPORT_DETAILS",
        "REQUEST_REVIEW_DESCRIPTION_SCREEN",
        "REQUEST_REVIEW_REASON_SCREEN",
        "DSA_REPORT_REMEDIATION_OPTIONS",
        "DSB_STEP1_SCREEN",
        "DSB_STEP2_SCREEN",
        "DSB_STEP3_SCREEN",
      ]);
    function m(t) {
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.onClose,
        s = c(null),
        m = s[0],
        p = s[1],
        _ = c(o("WAWebCommonNewsletterEnums").ReviewType.REPORT),
        f = _[0],
        g = _[1],
        h = c(null),
        y = h[0],
        C = h[1],
        b = o("useWAWebFlow").useFlow(d.REPORT_LIST, {
          transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
        }),
        v = b[0],
        S = b[1],
        R = function (t) {
          (p(t), S.push(d.REPORT_DETAILS));
        },
        L = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            if (m == null) {
              o(
                "WAWebNewsletterIntegrityUtils",
              ).showReviewSubmissionFailureToast();
              return;
            }
            yield o(
              "WAWebNewsletterCreateReportAppealAction",
            ).createNewsletterReportAppealAction({
              reportId: m.id.toString(),
              reason: e,
            });
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        E = function (t) {
          if (t == null) {
            o(
              "WAWebNewsletterIntegrityUtils",
            ).showDsbReferenceNumberFailureToast();
            return;
          }
          (C(t), S.push(d.DSB_STEP3_SCREEN));
        };
      if (S.step == null) return null;
      var k = function () {
          m != null &&
            (g(o("WAWebCommonNewsletterEnums").ReviewType.REPORT),
            m.reportContentData.reportContentType === "status"
              ? g(o("WAWebCommonNewsletterEnums").ReviewType.STATUS_REPORT)
              : m.reportContentData.reportContentType === "response" &&
                o(
                  "WAWebNewsletterGatingUtils",
                ).isNewsletterIntegrityQuestionsM1Enabled() === !0 &&
                g(o("WAWebCommonNewsletterEnums").ReviewType.RESPONSE_REPORT),
            S.push(d.REQUEST_REVIEW_DESCRIPTION_SCREEN));
        },
        I;
      switch (S.step) {
        case d.REPORT_LIST:
          I = u.jsx(r("WAWebNewsletterDSAReportsDrawer.react"), {
            onClose: l,
            onReportClick: R,
          });
          break;
        case d.REPORT_DETAILS:
          if (m == null) return null;
          I = u.jsx(
            o("WAWebNewsletterDSAReportDetailsDrawerLoadable")
              .NewsletterDSAReportDetailsDrawerLoadable,
            {
              onBack: function () {
                return S.pop();
              },
              onRequestReviewClick: k,
              onClickSeeOptions: function () {
                S.push(d.DSA_REPORT_REMEDIATION_OPTIONS);
              },
              report: m,
            },
          );
          break;
        case d.REQUEST_REVIEW_DESCRIPTION_SCREEN:
          I = u.jsx(
            o("WAWebRequestReviewDescriptionScreenDrawerLoadable")
              .RequestReviewDescriptionScreenLoadable,
            {
              reviewType: f,
              onBack: function () {
                return S.pop();
              },
              onNext: function () {
                (S.pop(), S.push(d.REQUEST_REVIEW_REASON_SCREEN));
              },
            },
          );
          break;
        case d.REQUEST_REVIEW_REASON_SCREEN: {
          var T = function () {
            S.pop(
              void 0,
              o("WAWebNewsletterGatingUtils").isDSA21ChannelReportingEnabled()
                ? 2
                : 1,
            );
          };
          I = u.jsx(
            o("WAWebRequestReviewReasonScreenDrawer.react")
              .RequestReviewReasonScreen,
            {
              reviewType: f,
              onBack: function () {
                (S.pop(), S.push(d.REQUEST_REVIEW_DESCRIPTION_SCREEN));
              },
              onSuccess: T,
              onSubmit: L,
            },
          );
          break;
        }
        case d.DSA_REPORT_REMEDIATION_OPTIONS: {
          if (m == null) return null;
          I = u.jsx(
            o("WAWebNewsletterReportsRemediationOptionsDrawerLoadable")
              .NewsletterReportsRemediationOptionsDrawerLoadable,
            {
              onBack: function () {
                return S.pop();
              },
              selectedReport: m,
              onClickRequestReview: k,
              onClickDSBFlow: function () {
                S.push(d.DSB_STEP1_SCREEN);
              },
            },
          );
          break;
        }
        case d.DSB_STEP1_SCREEN: {
          I = u.jsx(
            o("WAWebNewsletterDSBFlowStepOneDrawerLoadable")
              .WAWebNewsletterDSBFlowStepOneDrawerLoadable,
            {
              onBack: function () {
                return S.pop();
              },
              onClickContinue: function () {
                S.push(d.DSB_STEP2_SCREEN);
              },
            },
          );
          break;
        }
        case d.DSB_STEP2_SCREEN: {
          if (m == null) return null;
          I = u.jsx(
            o("WAWebNewsletterDSBFlowStepTwoDrawerLoadable")
              .WAWebNewsletterDSBFlowStepTwoDrawerLoadable,
            {
              onBack: function () {
                return S.pop();
              },
              onClickGetReferenceNumber: E,
              entityId: m.id.toString(),
            },
          );
          break;
        }
        case d.DSB_STEP3_SCREEN: {
          I =
            y != null
              ? u.jsx(
                  o("WAWebNewsletterDSBFlowStepThreeDrawerLoadable")
                    .WAWebNewsletterDSBFlowStepThreeDrawerLoadable,
                  {
                    onBack: function () {
                      return S.pop();
                    },
                    entityId: y,
                  },
                )
              : null;
          break;
        }
      }
      return u.jsx(v, {
        flow: S,
        ref: a,
        displayName: "newsletter-reports-flow",
        children: I,
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
