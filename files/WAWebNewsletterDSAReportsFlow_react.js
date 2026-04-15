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
    "react-compiler-runtime",
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
      var a = o("react-compiler-runtime").c(68),
        i,
        l;
      a[0] !== t
        ? ((l = t.ref),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l))
        : ((i = a[1]), (l = a[2]));
      var s = i,
        m = s.onClose,
        p = c(null),
        _ = p[0],
        f = p[1],
        g = c(o("WAWebCommonNewsletterEnums").ReviewType.REPORT),
        h = g[0],
        y = g[1],
        C = c(null),
        b = C[0],
        v = C[1],
        S;
      a[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }),
          (a[3] = S))
        : (S = a[3]);
      var R = o("useWAWebFlow").useFlow(d.REPORT_LIST, S),
        L = R[0],
        E = R[1],
        k;
      a[4] !== E
        ? ((k = function (t) {
            (f(t), E.push(d.REPORT_DETAILS));
          }),
          (a[4] = E),
          (a[5] = k))
        : (k = a[5]);
      var I = k,
        T;
      a[6] !== _
        ? ((T = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (_ == null) {
                  o(
                    "WAWebNewsletterIntegrityUtils",
                  ).showReviewSubmissionFailureToast();
                  return;
                }
                yield o(
                  "WAWebNewsletterCreateReportAppealAction",
                ).createNewsletterReportAppealAction({
                  reportId: _.id.toString(),
                  reason: e,
                });
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
          (a[6] = _),
          (a[7] = T))
        : (T = a[7]);
      var D = T,
        x;
      a[8] !== E
        ? ((x = function (t) {
            if (t == null) {
              o(
                "WAWebNewsletterIntegrityUtils",
              ).showDsbReferenceNumberFailureToast();
              return;
            }
            (v(t), E.push(d.DSB_STEP3_SCREEN));
          }),
          (a[8] = E),
          (a[9] = x))
        : (x = a[9]);
      var $ = x;
      if (E.step == null) return null;
      var P;
      a[10] !== E || a[11] !== _
        ? ((P = function () {
            _ != null &&
              (y(o("WAWebCommonNewsletterEnums").ReviewType.REPORT),
              _.reportContentData.reportContentType === "status"
                ? y(o("WAWebCommonNewsletterEnums").ReviewType.STATUS_REPORT)
                : _.reportContentData.reportContentType === "response" &&
                  o(
                    "WAWebNewsletterGatingUtils",
                  ).isNewsletterIntegrityQuestionsM1Enabled() === !0 &&
                  y(o("WAWebCommonNewsletterEnums").ReviewType.RESPONSE_REPORT),
              E.push(d.REQUEST_REVIEW_DESCRIPTION_SCREEN));
          }),
          (a[10] = E),
          (a[11] = _),
          (a[12] = P))
        : (P = a[12]);
      var N = P,
        M;
      e: switch (E.step) {
        case d.REPORT_LIST: {
          var w;
          (a[13] !== I || a[14] !== m
            ? ((w = u.jsx(r("WAWebNewsletterDSAReportsDrawer.react"), {
                onClose: m,
                onReportClick: I,
              })),
              (a[13] = I),
              (a[14] = m),
              (a[15] = w))
            : (w = a[15]),
            (M = w));
          break e;
        }
        case d.REPORT_DETAILS: {
          if (_ == null) return null;
          var A;
          a[16] !== E
            ? ((A = function () {
                return E.pop();
              }),
              (a[16] = E),
              (a[17] = A))
            : (A = a[17]);
          var F;
          a[18] !== E
            ? ((F = function () {
                E.push(d.DSA_REPORT_REMEDIATION_OPTIONS);
              }),
              (a[18] = E),
              (a[19] = F))
            : (F = a[19]);
          var O;
          (a[20] !== N || a[21] !== _ || a[22] !== A || a[23] !== F
            ? ((O = u.jsx(
                o("WAWebNewsletterDSAReportDetailsDrawerLoadable")
                  .NewsletterDSAReportDetailsDrawerLoadable,
                {
                  onBack: A,
                  onRequestReviewClick: N,
                  onClickSeeOptions: F,
                  report: _,
                },
              )),
              (a[20] = N),
              (a[21] = _),
              (a[22] = A),
              (a[23] = F),
              (a[24] = O))
            : (O = a[24]),
            (M = O));
          break e;
        }
        case d.REQUEST_REVIEW_DESCRIPTION_SCREEN: {
          var B, W;
          a[25] !== E
            ? ((B = function () {
                return E.pop();
              }),
              (W = function () {
                (E.pop(), E.push(d.REQUEST_REVIEW_REASON_SCREEN));
              }),
              (a[25] = E),
              (a[26] = B),
              (a[27] = W))
            : ((B = a[26]), (W = a[27]));
          var q;
          (a[28] !== h || a[29] !== B || a[30] !== W
            ? ((q = u.jsx(
                o("WAWebRequestReviewDescriptionScreenDrawerLoadable")
                  .RequestReviewDescriptionScreenLoadable,
                { reviewType: h, onBack: B, onNext: W },
              )),
              (a[28] = h),
              (a[29] = B),
              (a[30] = W),
              (a[31] = q))
            : (q = a[31]),
            (M = q));
          break e;
        }
        case d.REQUEST_REVIEW_REASON_SCREEN: {
          var U;
          a[32] !== E
            ? ((U = function () {
                E.pop(
                  void 0,
                  o(
                    "WAWebNewsletterGatingUtils",
                  ).isDSA21ChannelReportingEnabled()
                    ? 2
                    : 1,
                );
              }),
              (a[32] = E),
              (a[33] = U))
            : (U = a[33]);
          var V = U,
            H;
          a[34] !== E
            ? ((H = function () {
                (E.pop(), E.push(d.REQUEST_REVIEW_DESCRIPTION_SCREEN));
              }),
              (a[34] = E),
              (a[35] = H))
            : (H = a[35]);
          var G;
          (a[36] !== V || a[37] !== D || a[38] !== h || a[39] !== H
            ? ((G = u.jsx(
                o("WAWebRequestReviewReasonScreenDrawer.react")
                  .RequestReviewReasonScreen,
                { reviewType: h, onBack: H, onSuccess: V, onSubmit: D },
              )),
              (a[36] = V),
              (a[37] = D),
              (a[38] = h),
              (a[39] = H),
              (a[40] = G))
            : (G = a[40]),
            (M = G));
          break e;
        }
        case d.DSA_REPORT_REMEDIATION_OPTIONS: {
          if (_ == null) return null;
          var z;
          a[41] !== E
            ? ((z = function () {
                return E.pop();
              }),
              (a[41] = E),
              (a[42] = z))
            : (z = a[42]);
          var j;
          a[43] !== E
            ? ((j = function () {
                E.push(d.DSB_STEP1_SCREEN);
              }),
              (a[43] = E),
              (a[44] = j))
            : (j = a[44]);
          var K;
          (a[45] !== N || a[46] !== _ || a[47] !== z || a[48] !== j
            ? ((K = u.jsx(
                o("WAWebNewsletterReportsRemediationOptionsDrawerLoadable")
                  .NewsletterReportsRemediationOptionsDrawerLoadable,
                {
                  onBack: z,
                  selectedReport: _,
                  onClickRequestReview: N,
                  onClickDSBFlow: j,
                },
              )),
              (a[45] = N),
              (a[46] = _),
              (a[47] = z),
              (a[48] = j),
              (a[49] = K))
            : (K = a[49]),
            (M = K));
          break e;
        }
        case d.DSB_STEP1_SCREEN: {
          var Q;
          (a[50] !== E
            ? ((Q = u.jsx(
                o("WAWebNewsletterDSBFlowStepOneDrawerLoadable")
                  .WAWebNewsletterDSBFlowStepOneDrawerLoadable,
                {
                  onBack: function () {
                    return E.pop();
                  },
                  onClickContinue: function () {
                    E.push(d.DSB_STEP2_SCREEN);
                  },
                },
              )),
              (a[50] = E),
              (a[51] = Q))
            : (Q = a[51]),
            (M = Q));
          break e;
        }
        case d.DSB_STEP2_SCREEN: {
          if (_ == null) return null;
          var X;
          a[52] !== E
            ? ((X = function () {
                return E.pop();
              }),
              (a[52] = E),
              (a[53] = X))
            : (X = a[53]);
          var Y;
          a[54] !== _.id
            ? ((Y = _.id.toString()), (a[54] = _.id), (a[55] = Y))
            : (Y = a[55]);
          var J;
          (a[56] !== $ || a[57] !== X || a[58] !== Y
            ? ((J = u.jsx(
                o("WAWebNewsletterDSBFlowStepTwoDrawerLoadable")
                  .WAWebNewsletterDSBFlowStepTwoDrawerLoadable,
                { onBack: X, onClickGetReferenceNumber: $, entityId: Y },
              )),
              (a[56] = $),
              (a[57] = X),
              (a[58] = Y),
              (a[59] = J))
            : (J = a[59]),
            (M = J));
          break e;
        }
        case d.DSB_STEP3_SCREEN: {
          var Z;
          (a[60] !== b || a[61] !== E
            ? ((Z =
                b != null
                  ? u.jsx(
                      o("WAWebNewsletterDSBFlowStepThreeDrawerLoadable")
                        .WAWebNewsletterDSBFlowStepThreeDrawerLoadable,
                      {
                        onBack: function () {
                          return E.pop();
                        },
                        entityId: b,
                      },
                    )
                  : null),
              (a[60] = b),
              (a[61] = E),
              (a[62] = Z))
            : (Z = a[62]),
            (M = Z));
        }
      }
      var ee;
      return (
        a[63] !== L || a[64] !== M || a[65] !== E || a[66] !== l
          ? ((ee = u.jsx(L, {
              flow: E,
              ref: l,
              displayName: "newsletter-reports-flow",
              children: M,
            })),
            (a[63] = L),
            (a[64] = M),
            (a[65] = E),
            (a[66] = l),
            (a[67] = ee))
          : (ee = a[67]),
        ee
      );
    }
    l.default = m;
  },
  98,
);
