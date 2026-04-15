__d(
  "WAWebNewsletterEnforcementAlertFlow.react",
  [
    "JSResourceForInteraction",
    "WATimeUtils",
    "WAWebCommonNewsletterEnums",
    "WAWebEnforcementActionLogging",
    "WAWebLazyLoadedRetriable",
    "WAWebNewsletterContactIPReporterStepOneDrawer.react",
    "WAWebNewsletterContactIPReporterStepTwoDrawer.react",
    "WAWebNewsletterDSBFlowStepOneDrawerLoadable",
    "WAWebNewsletterDSBFlowStepThreeDrawerLoadable",
    "WAWebNewsletterDSBFlowStepTwoDrawerLoadable",
    "WAWebNewsletterDeleteDrawer.react",
    "WAWebNewsletterEnforcementAlertDrawerLoadable",
    "WAWebNewsletterGeoSuspendedDetailCountryDrawerLoadable",
    "WAWebNewsletterGeosuspendInformDetailedScreenDrawerLoadable",
    "WAWebNewsletterIntegrityUtils",
    "WAWebNewsletterProfilePictureDeletionDetailScreenDrawerLoadable",
    "WAWebNewsletterRemediationOptionsDrawerLoadable",
    "WAWebNewsletterSuspendInformDetailedScreenDrawerLoadable",
    "WAWebNewsletterSuspendedDetailedScreenDrawerLoadable",
    "WAWebRequestReviewDescriptionScreenDrawerLoadable",
    "WAWebRequestReviewReasonScreenDrawerLoadable",
    "WAWebRightsManagerRequestReviewDescriptionDrawerLoadable",
    "WAWebRightsManagerRequestReviewReasonDrawerLoadable",
    "WAWebRightsManagerRequestReviewTextReasonDrawerLoadable",
    "WAWebSeeReviewDetailScreenDrawerLoadable",
    "WAWebViolatingMessagesScreenDrawerLoadable",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s.useState,
      d = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebNewsletterCreateAppeal",
          )
            .__setRef("WAWebNewsletterEnforcementAlertFlow.react")
            .load();
          return e.createAppeal;
        }),
        "createAppeal",
      );
    function m(t) {
      var a = o("react-compiler-runtime").c(125),
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
        m = s.chat,
        _ = s.onClose,
        f;
      a[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }),
          (a[3] = f))
        : (f = a[3]);
      var g = o("useWAWebFlow").useFlow(
          o("WAWebCommonNewsletterEnums").AlertScreen
            .MULTIPLE_ALERTS_LIST_SCREEN,
          f,
        ),
        h = g[0],
        y = g[1],
        C = c(null),
        b = C[0],
        v = C[1],
        S = c(null),
        R = S[0],
        L = S[1],
        E = c(null),
        k = E[0],
        I = E[1],
        T;
      a[4] !== y
        ? ((T = function (t, n) {
            (v(t),
              L(n),
              n != null
                ? r("WAWebEnforcementActionLogging").updateEnforcementContext(n)
                : r("WAWebEnforcementActionLogging").updateEnforcementContext(
                    t,
                  ),
              r("WAWebEnforcementActionLogging").logSeeOptionsClick(),
              y.push(
                o("WAWebCommonNewsletterEnums").AlertScreen
                  .REMEDIATION_OPTIONS_SCREEN,
              ));
          }),
          (a[4] = y),
          (a[5] = T))
        : (T = a[5]);
      var D = T,
        x;
      a[6] !== y
        ? ((x = function (t) {
            if (
              (r("WAWebEnforcementActionLogging").logGetReferenceNumberClick(),
              t == null)
            ) {
              o(
                "WAWebNewsletterIntegrityUtils",
              ).showDsbReferenceNumberFailureToast();
              return;
            }
            (I(t),
              y.push(
                o("WAWebCommonNewsletterEnums").AlertScreen.DSB_STEP3_SCREEN,
              ));
          }),
          (a[6] = y),
          (a[7] = x))
        : (x = a[7]);
      var $ = x,
        P;
      a[8] !== m || a[9] !== R
        ? ((P = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield d();
              if ((R == null ? void 0 : R.appealReason) != null)
                return e(
                  R == null ? void 0 : R.appealReason,
                  R == null ? void 0 : R.additionalAppealReason,
                  R == null ? void 0 : R.enforcementId,
                  m,
                ).then(function (e) {
                  e != null &&
                    (R == null || R.setAppealState(e.state),
                    R == null ||
                      R.setAppealCreationTime(
                        o("WATimeUtils").castToUnixTime(
                          parseInt(e.creationTimestamp, 10),
                        ),
                      ));
                });
              o(
                "WAWebNewsletterIntegrityUtils",
              ).showReviewSubmissionFailureToast();
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a[8] = m),
          (a[9] = R),
          (a[10] = P))
        : (P = a[10]);
      var N = P,
        M;
      if (y.step == null) return null;
      var w;
      a[11] !== y
        ? ((w = function () {
            (r("WAWebEnforcementActionLogging").logBackClick(), y.pop());
          }),
          (a[11] = y),
          (a[12] = w))
        : (w = a[12]);
      var A = w;
      e: switch (y.step) {
        case o("WAWebCommonNewsletterEnums").AlertScreen
          .MULTIPLE_ALERTS_LIST_SCREEN: {
          var F;
          a[13] !== y
            ? ((F = function (t, n) {
                (v(t),
                  r("WAWebEnforcementActionLogging").updateEnforcementContext(
                    t,
                  ),
                  r(
                    "WAWebEnforcementActionLogging",
                  ).logEnforcementDetailClick(),
                  y.push(n));
              }),
              (a[13] = y),
              (a[14] = F))
            : (F = a[14]);
          var O;
          a[15] !== y
            ? ((O = function (t) {
                (L(t),
                  r("WAWebEnforcementActionLogging").updateEnforcementContext(
                    t,
                  ),
                  r("WAWebEnforcementActionLogging").logSeeReviewDetailsClick(),
                  y.push(
                    o("WAWebCommonNewsletterEnums").AlertScreen
                      .APPEAL_OUTCOME_SCREEN,
                  ));
              }),
              (a[15] = y),
              (a[16] = O))
            : (O = a[16]);
          var B;
          (a[17] !== m ||
          a[18] !== A ||
          a[19] !== _ ||
          a[20] !== F ||
          a[21] !== O
            ? ((B = u.jsx(
                o("WAWebNewsletterEnforcementAlertDrawerLoadable")
                  .WaWebNewsletterEnforcementAlertDrawerLoadable,
                {
                  onClick: F,
                  chat: m,
                  onBack: A,
                  onClose: _,
                  onAppealClick: O,
                },
              )),
              (a[17] = m),
              (a[18] = A),
              (a[19] = _),
              (a[20] = F),
              (a[21] = O),
              (a[22] = B))
            : (B = a[22]),
            (M = B));
          break e;
        }
        case o("WAWebCommonNewsletterEnums").AlertScreen
          .PROFILE_PICTURE_DELETION_SCREEN: {
          var W;
          (a[23] !== m || a[24] !== b || a[25] !== D || a[26] !== A
            ? ((W =
                b != null
                  ? u.jsx(
                      o(
                        "WAWebNewsletterProfilePictureDeletionDetailScreenDrawerLoadable",
                      )
                        .WAWebNewsletterProfilePictureDeletionDetailScreenDrawerLoadable,
                      {
                        chat: m,
                        onBack: A,
                        onClickSeeOptions: D,
                        currentEnforcementAlert: b,
                      },
                    )
                  : null),
              (a[23] = m),
              (a[24] = b),
              (a[25] = D),
              (a[26] = A),
              (a[27] = W))
            : (W = a[27]),
            (M = W));
          break e;
        }
        case o("WAWebCommonNewsletterEnums").AlertScreen
          .SUSPENDED_DETAILED_SCREEN: {
          var q;
          (a[28] !== m || a[29] !== b || a[30] !== D || a[31] !== A
            ? ((q =
                b != null
                  ? u.jsx(
                      o("WAWebNewsletterSuspendedDetailedScreenDrawerLoadable")
                        .NewsletterSuspendedDetailedScreenLoadable,
                      {
                        chat: m,
                        onBack: A,
                        onClickSeeOptions: D,
                        currentEnforcementAlert: b,
                      },
                    )
                  : null),
              (a[28] = m),
              (a[29] = b),
              (a[30] = D),
              (a[31] = A),
              (a[32] = q))
            : (q = a[32]),
            (M = q));
          break e;
        }
        case o("WAWebCommonNewsletterEnums").AlertScreen
          .GEOSUSPENDED_COUNTRY_DETAILED_SCREEN: {
          var U;
          (a[33] !== m || a[34] !== b || a[35] !== D || a[36] !== A
            ? ((U =
                b != null && b.countryCodes != null
                  ? u.jsx(
                      o(
                        "WAWebNewsletterGeoSuspendedDetailCountryDrawerLoadable",
                      ).NewsletterGeoSuspendedDetailCountryScreenLoadable,
                      {
                        onBack: A,
                        chat: m,
                        onClickSeeOptions: D,
                        currentEnforcementAlert: b,
                      },
                    )
                  : null),
              (a[33] = m),
              (a[34] = b),
              (a[35] = D),
              (a[36] = A),
              (a[37] = U))
            : (U = a[37]),
            (M = U));
          break e;
        }
        case o("WAWebCommonNewsletterEnums").AlertScreen
          .REQUEST_REVIEW_DESCRIPTION_SCREEN: {
          var V,
            H,
            G =
              (R == null || (V = R.violatingContentData) == null
                ? void 0
                : V.contentType) ===
                o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS ||
              (R == null ||
              (H = R.enforcementExtraData) == null ||
              (H = H.enforcementTargetData) == null
                ? void 0
                : H.contentType) ===
                o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS,
            z;
          a[38] !== y
            ? ((z = function () {
                (y.pop(),
                  r("WAWebEnforcementActionLogging").logNextClick(),
                  y.push(
                    o("WAWebCommonNewsletterEnums").AlertScreen
                      .REQUEST_REVIEW_REASON_SCREEN,
                  ));
              }),
              (a[38] = y),
              (a[39] = z))
            : (z = a[39]);
          var j;
          (a[40] !== A || a[41] !== G || a[42] !== z
            ? ((j = u.jsx(
                o("WAWebRequestReviewDescriptionScreenDrawerLoadable")
                  .RequestReviewDescriptionScreenLoadable,
                {
                  onBack: A,
                  onNext: z,
                  reviewType: o("WAWebCommonNewsletterEnums").ReviewType
                    .ENFORCEMENT,
                  isStatusContent: G,
                },
              )),
              (a[40] = A),
              (a[41] = G),
              (a[42] = z),
              (a[43] = j))
            : (j = a[43]),
            (M = j));
          break e;
        }
        case o("WAWebCommonNewsletterEnums").AlertScreen
          .REQUEST_REVIEW_REASON_SCREEN: {
          var K,
            Q,
            X =
              (R == null || (K = R.violatingContentData) == null
                ? void 0
                : K.contentType) ===
                o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS ||
              (R == null ||
              (Q = R.enforcementExtraData) == null ||
              (Q = Q.enforcementTargetData) == null
                ? void 0
                : Q.contentType) ===
                o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS,
            Y;
          a[44] !== y
            ? ((Y = function () {
                (r("WAWebEnforcementActionLogging").logBackClick(),
                  y.pop(),
                  y.push(
                    o("WAWebCommonNewsletterEnums").AlertScreen
                      .REQUEST_REVIEW_DESCRIPTION_SCREEN,
                  ));
              }),
              (a[44] = y),
              (a[45] = Y))
            : (Y = a[45]);
          var J;
          a[46] !== R || a[47] !== N
            ? ((J = function (t) {
                return (
                  R == null || R.setAppealReason(t),
                  r(
                    "WAWebEnforcementActionLogging",
                  ).logSubmitRequestReviewClick(),
                  N()
                );
              }),
              (a[46] = R),
              (a[47] = N),
              (a[48] = J))
            : (J = a[48]);
          var Z;
          (a[49] !== A || a[50] !== X || a[51] !== Y || a[52] !== J
            ? ((Z = u.jsx(
                o("WAWebRequestReviewReasonScreenDrawerLoadable")
                  .RequestReviewReasonScreenLoadable,
                {
                  onBack: Y,
                  reviewType: o("WAWebCommonNewsletterEnums").ReviewType
                    .ENFORCEMENT,
                  isStatusContent: X,
                  onSuccess: A,
                  onSubmit: J,
                },
              )),
              (a[49] = A),
              (a[50] = X),
              (a[51] = Y),
              (a[52] = J),
              (a[53] = Z))
            : (Z = a[53]),
            (M = Z));
          break e;
        }
        case o("WAWebCommonNewsletterEnums").AlertScreen
          .RM_REQUEST_REVIEW_SCREEN_STEP1_SCREEN: {
          var ee;
          a[54] !== y
            ? ((ee = function () {
                (y.pop(),
                  r("WAWebEnforcementActionLogging").logNextClick(),
                  y.push(
                    o("WAWebCommonNewsletterEnums").AlertScreen
                      .RM_REQUEST_REVIEW_SCREEN_STEP2_SCREEN,
                  ));
              }),
              (a[54] = y),
              (a[55] = ee))
            : (ee = a[55]);
          var te;
          (a[56] !== A || a[57] !== ee
            ? ((te = u.jsx(
                o("WAWebRightsManagerRequestReviewDescriptionDrawerLoadable")
                  .RightsManagerRequestReviewDescriptionDrawerLoadable,
                { onBack: A, onNext: ee },
              )),
              (a[56] = A),
              (a[57] = ee),
              (a[58] = te))
            : (te = a[58]),
            (M = te));
          break e;
        }
        case o("WAWebCommonNewsletterEnums").AlertScreen
          .RM_REQUEST_REVIEW_SCREEN_STEP2_SCREEN: {
          var ne;
          a[59] !== y
            ? ((ne = function () {
                (y.pop(),
                  y.push(
                    o("WAWebCommonNewsletterEnums").AlertScreen
                      .RM_REQUEST_REVIEW_SCREEN_STEP1_SCREEN,
                  ));
              }),
              (a[59] = y),
              (a[60] = ne))
            : (ne = a[60]);
          var re;
          a[61] !== R || a[62] !== y
            ? ((re = function (t) {
                (y.pop(),
                  R == null || R.setAppealReason(t),
                  r("WAWebEnforcementActionLogging").logNextClick(),
                  y.push(
                    o("WAWebCommonNewsletterEnums").AlertScreen
                      .RM_REQUEST_REVIEW_SCREEN_STEP3_SCREEN,
                  ));
              }),
              (a[61] = R),
              (a[62] = y),
              (a[63] = re))
            : (re = a[63]);
          var oe;
          (a[64] !== ne || a[65] !== re
            ? ((oe = u.jsx(
                o("WAWebRightsManagerRequestReviewReasonDrawerLoadable")
                  .RightsManagerRequestReviewReasonDrawerLoadable,
                { onBack: ne, onNext: re },
              )),
              (a[64] = ne),
              (a[65] = re),
              (a[66] = oe))
            : (oe = a[66]),
            (M = oe));
          break e;
        }
        case o("WAWebCommonNewsletterEnums").AlertScreen
          .RM_REQUEST_REVIEW_SCREEN_STEP3_SCREEN: {
          var ae;
          (a[67] !== R || a[68] !== y || a[69] !== A || a[70] !== N
            ? ((ae =
                R != null
                  ? u.jsx(
                      o(
                        "WAWebRightsManagerRequestReviewTextReasonDrawerLoadable",
                      ).RightsManagerRequestReviewTextReasonDrawerLoadable,
                      {
                        onBack: function () {
                          (R == null || R.setAppealReason(null),
                            r("WAWebEnforcementActionLogging").logBackClick(),
                            y.pop(),
                            y.push(
                              o("WAWebCommonNewsletterEnums").AlertScreen
                                .RM_REQUEST_REVIEW_SCREEN_STEP2_SCREEN,
                            ));
                        },
                        onSuccess: A,
                        onSubmit: function (t) {
                          return (
                            r(
                              "WAWebEnforcementActionLogging",
                            ).logSubmitRequestReviewClick(),
                            R == null || R.setAdditionalAppealReason(t),
                            N()
                          );
                        },
                      },
                    )
                  : null),
              (a[67] = R),
              (a[68] = y),
              (a[69] = A),
              (a[70] = N),
              (a[71] = ae))
            : (ae = a[71]),
            (M = ae));
          break e;
        }
        case o("WAWebCommonNewsletterEnums").AlertScreen
          .APPEAL_OUTCOME_SCREEN: {
          var ie;
          (a[72] !== m || a[73] !== R || a[74] !== A
            ? ((ie =
                R != null
                  ? u.jsx(
                      o("WAWebSeeReviewDetailScreenDrawerLoadable")
                        .NewsletterAppealOutcomeScreenLoadable,
                      { onBack: A, chat: m, currentEnforcementAppeal: R },
                    )
                  : null),
              (a[72] = m),
              (a[73] = R),
              (a[74] = A),
              (a[75] = ie))
            : (ie = a[75]),
            (M = ie));
          break e;
        }
        case o("WAWebCommonNewsletterEnums").AlertScreen
          .REMEDIATION_OPTIONS_SCREEN: {
          var le;
          (a[76] !== m ||
          a[77] !== b ||
          a[78] !== R ||
          a[79] !== y ||
          a[80] !== A
            ? ((le =
                b != null && R != null
                  ? u.jsx(
                      o("WAWebNewsletterRemediationOptionsDrawerLoadable")
                        .NewsletterRemediationOptionsDrawerLoadable,
                      {
                        chat: m,
                        onBack: A,
                        currentEnforcementAlert: b,
                        currentEnforcementAppeal: R,
                        onDeleteNewsletter: function () {
                          (r(
                            "WAWebEnforcementActionLogging",
                          ).logDeleteChannelClick(),
                            y.push(
                              o("WAWebCommonNewsletterEnums").AlertScreen
                                .DELETE_NEWSLETTER,
                            ));
                        },
                        onClickDSBFlow: function () {
                          (r(
                            "WAWebEnforcementActionLogging",
                          ).logReferDsbClick(),
                            y.push(
                              o("WAWebCommonNewsletterEnums").AlertScreen
                                .DSB_STEP1_SCREEN,
                            ));
                        },
                        onClickEmailReporter: function () {
                          (r(
                            "WAWebEnforcementActionLogging",
                          ).logEmailReporterClick(),
                            y.push(
                              o("WAWebCommonNewsletterEnums").AlertScreen
                                .CONTACT_IP_REPORTER_STEP1_SCREEN,
                            ));
                        },
                        onClickRequestReview: function () {
                          (r(
                            "WAWebEnforcementActionLogging",
                          ).logRequestReviewClick(),
                            (R == null ? void 0 : R.enforcementSource) ===
                              "RM" &&
                            ((R == null ? void 0 : R.enforcementType) ===
                              o("WAWebCommonNewsletterEnums").EnforcementType
                                .SUSPEND_INFORM ||
                              (R == null ? void 0 : R.enforcementType) ===
                                o("WAWebCommonNewsletterEnums").EnforcementType
                                  .GEOSUSPEND_INFORM)
                              ? y.push(
                                  o("WAWebCommonNewsletterEnums").AlertScreen
                                    .RM_REQUEST_REVIEW_SCREEN_STEP1_SCREEN,
                                )
                              : y.push(
                                  o("WAWebCommonNewsletterEnums").AlertScreen
                                    .REQUEST_REVIEW_DESCRIPTION_SCREEN,
                                ));
                        },
                        onClickSeeReviewDetails: function () {
                          (r(
                            "WAWebEnforcementActionLogging",
                          ).logSeeReviewDetailsClick(),
                            y.push(
                              o("WAWebCommonNewsletterEnums").AlertScreen
                                .APPEAL_OUTCOME_SCREEN,
                            ));
                        },
                      },
                    )
                  : null),
              (a[76] = m),
              (a[77] = b),
              (a[78] = R),
              (a[79] = y),
              (a[80] = A),
              (a[81] = le))
            : (le = a[81]),
            (M = le));
          break e;
        }
        case o("WAWebCommonNewsletterEnums").AlertScreen
          .SUSPEND_INFORM_SCREEN: {
          var se;
          (a[82] !== m || a[83] !== b || a[84] !== D || a[85] !== A
            ? ((se =
                b != null
                  ? u.jsx(
                      o(
                        "WAWebNewsletterSuspendInformDetailedScreenDrawerLoadable",
                      ).NewsletterSuspendInformDetailedScreenLoadable,
                      {
                        chat: m,
                        currentEnforcementAlert: b,
                        onBack: A,
                        onClickSeeOptions: D,
                      },
                    )
                  : null),
              (a[82] = m),
              (a[83] = b),
              (a[84] = D),
              (a[85] = A),
              (a[86] = se))
            : (se = a[86]),
            (M = se));
          break e;
        }
        case o("WAWebCommonNewsletterEnums").AlertScreen
          .GEOSUSPEND_INFORM_SCREEN: {
          var ue;
          (a[87] !== m || a[88] !== b || a[89] !== D || a[90] !== A
            ? ((ue =
                b != null
                  ? u.jsx(
                      o(
                        "WAWebNewsletterGeosuspendInformDetailedScreenDrawerLoadable",
                      ).NewsletterGeosuspendInformDetailedScreenDrawerLoadable,
                      {
                        chat: m,
                        currentEnforcementAlert: b,
                        onBack: A,
                        onClickSeeOptions: D,
                      },
                    )
                  : null),
              (a[87] = m),
              (a[88] = b),
              (a[89] = D),
              (a[90] = A),
              (a[91] = ue))
            : (ue = a[91]),
            (M = ue));
          break e;
        }
        case o("WAWebCommonNewsletterEnums").AlertScreen
          .VIOLATING_MESSAGES_SCREEN: {
          var ce;
          (a[92] !== m || a[93] !== b || a[94] !== D || a[95] !== A
            ? ((ce =
                b != null
                  ? u.jsx(
                      o("WAWebViolatingMessagesScreenDrawerLoadable")
                        .WAWebViolatingMessagesScreenDrawerLoadable,
                      {
                        chat: m,
                        currentEnforcementAlert: b,
                        onBack: A,
                        onClickSeeOptions: D,
                      },
                    )
                  : null),
              (a[92] = m),
              (a[93] = b),
              (a[94] = D),
              (a[95] = A),
              (a[96] = ce))
            : (ce = a[96]),
            (M = ce));
          break e;
        }
        case o("WAWebCommonNewsletterEnums").AlertScreen.DELETE_NEWSLETTER: {
          var de;
          (a[97] !== m || a[98] !== A
            ? ((de = u.jsx(r("WAWebNewsletterDeleteDrawer.react"), {
                chat: m,
                onBack: A,
                onCancel: A,
              })),
              (a[97] = m),
              (a[98] = A),
              (a[99] = de))
            : (de = a[99]),
            (M = de));
          break e;
        }
        case o("WAWebCommonNewsletterEnums").AlertScreen.DSB_STEP1_SCREEN: {
          var me;
          a[100] !== y
            ? ((me = function () {
                (r("WAWebEnforcementActionLogging").logNextClick(),
                  y.push(
                    o("WAWebCommonNewsletterEnums").AlertScreen
                      .DSB_STEP2_SCREEN,
                  ));
              }),
              (a[100] = y),
              (a[101] = me))
            : (me = a[101]);
          var pe;
          (a[102] !== A || a[103] !== me
            ? ((pe = u.jsx(
                o("WAWebNewsletterDSBFlowStepOneDrawerLoadable")
                  .WAWebNewsletterDSBFlowStepOneDrawerLoadable,
                { onBack: A, onClickContinue: me },
              )),
              (a[102] = A),
              (a[103] = me),
              (a[104] = pe))
            : (pe = a[104]),
            (M = pe));
          break e;
        }
        case o("WAWebCommonNewsletterEnums").AlertScreen.DSB_STEP2_SCREEN: {
          var _e;
          (a[105] !== R || a[106] !== $ || a[107] !== A
            ? ((_e =
                R != null
                  ? u.jsx(
                      o("WAWebNewsletterDSBFlowStepTwoDrawerLoadable")
                        .WAWebNewsletterDSBFlowStepTwoDrawerLoadable,
                      {
                        onBack: A,
                        entityId: R.enforcementId,
                        onClickGetReferenceNumber: $,
                      },
                    )
                  : null),
              (a[105] = R),
              (a[106] = $),
              (a[107] = A),
              (a[108] = _e))
            : (_e = a[108]),
            (M = _e));
          break e;
        }
        case o("WAWebCommonNewsletterEnums").AlertScreen.DSB_STEP3_SCREEN: {
          var fe;
          (a[109] !== k || a[110] !== A
            ? ((fe =
                k != null
                  ? u.jsx(
                      o("WAWebNewsletterDSBFlowStepThreeDrawerLoadable")
                        .WAWebNewsletterDSBFlowStepThreeDrawerLoadable,
                      { onBack: A, entityId: k },
                    )
                  : null),
              (a[109] = k),
              (a[110] = A),
              (a[111] = fe))
            : (fe = a[111]),
            (M = fe));
          break e;
        }
        case o("WAWebCommonNewsletterEnums").AlertScreen
          .CONTACT_IP_REPORTER_STEP2_SCREEN: {
          var ge, he;
          if (
            a[112] !==
              (R == null || (ge = R.enforcementExtraData) == null
                ? void 0
                : ge.ipViolationReportData) ||
            a[113] !== A
          ) {
            var ye, Ce, be;
            ((he =
              (R == null || (ye = R.enforcementExtraData) == null
                ? void 0
                : ye.ipViolationReportData) != null
                ? u.jsx(
                    r("WAWebNewsletterContactIPReporterStepTwoDrawer.react"),
                    {
                      onBack: A,
                      enforcementIpData:
                        R == null || (Ce = R.enforcementExtraData) == null
                          ? void 0
                          : Ce.ipViolationReportData,
                    },
                  )
                : null),
              (a[112] =
                R == null || (be = R.enforcementExtraData) == null
                  ? void 0
                  : be.ipViolationReportData),
              (a[113] = A),
              (a[114] = he));
          } else he = a[114];
          M = he;
          break e;
        }
        case o("WAWebCommonNewsletterEnums").AlertScreen
          .CONTACT_IP_REPORTER_STEP1_SCREEN: {
          var ve;
          a[115] !== y
            ? ((ve = function () {
                (r("WAWebEnforcementActionLogging").logGetReportDetailsClick(),
                  y.push(
                    o("WAWebCommonNewsletterEnums").AlertScreen
                      .CONTACT_IP_REPORTER_STEP2_SCREEN,
                  ));
              }),
              (a[115] = y),
              (a[116] = ve))
            : (ve = a[116]);
          var Se;
          (a[117] !== A || a[118] !== ve
            ? ((Se = u.jsx(
                r("WAWebNewsletterContactIPReporterStepOneDrawer.react"),
                { onBack: A, onClickGetReporterDetails: ve },
              )),
              (a[117] = A),
              (a[118] = ve),
              (a[119] = Se))
            : (Se = a[119]),
            (M = Se));
        }
      }
      var Re;
      return (
        a[120] !== h || a[121] !== M || a[122] !== y || a[123] !== l
          ? ((Re = u.jsx(h, {
              flow: y,
              ref: l,
              displayName: "NewsletterAlertFlow",
              requestDismiss: p,
              children: M,
            })),
            (a[120] = h),
            (a[121] = M),
            (a[122] = y),
            (a[123] = l),
            (a[124] = Re))
          : (Re = a[124]),
        Re
      );
    }
    function p() {
      r("WAWebEnforcementActionLogging").logDismissDrawerClick();
    }
    l.default = m;
  },
  98,
);
