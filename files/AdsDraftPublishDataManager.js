__d(
  "AdsDraftPublishDataManager",
  [
    "errorCode",
    "fbt",
    "AdAsyncRequestStatus",
    "AdDraftFragmentSource",
    "AdDraftPublishStatuses",
    "AdFLEXConfig",
    "AdsAccountStore",
    "AdsApplicationIDs",
    "AdsApplicationUtils",
    "AdsBusinessIntegrityReviewStatusAfterAPFChallengeDataProvider",
    "AdsCampaignBudgetSeasonalGuidanceExperimentUtils",
    "AdsDataAtom",
    "AdsDraftAppendPublishErrorDataAction",
    "AdsDraftDraftCloseDataAction",
    "AdsDraftDraftClosedDataAction",
    "AdsDraftDraftPublishCompletedDataAction",
    "AdsDraftDraftPublishFailedErrorDataAction",
    "AdsDraftDraftPublishInProgressDataAction",
    "AdsDraftDraftPublishWillCompleteDataAction",
    "AdsDraftFragmentDataManager",
    "AdsDraftFragmentStore",
    "AdsDraftPublishQPLUserFlowLogging",
    "AdsDraftPublishRealtimeClient",
    "AdsDraftPublishTypes",
    "AdsExperiments2026QEUtils",
    "AdsFragmentsPostPublishMonitoringAction",
    "AdsFragmentsPostPublishMonitoringUtils",
    "AdsGraphAPI",
    "AdsGuidanceAccountSpendLimitPostPublishAction",
    "AdsGuidanceBudgetSeasonalRecommendationPostPublishAction",
    "AdsGuidanceCTXCBOZeroOutcomeBudgetPostPublishAction",
    "AdsGuidanceCTXZeroOutcomeBudgetPostPublishAction",
    "AdsGuidanceNarrowWebsiteCustomAudiencePostPublishAction",
    "AdsGuidanceOutcomeForecasterPFRBudgetPostPublishAction",
    "AdsGuidanceUnderpoweredExperimentPostPublishAction",
    "AdsGuidanceZeroOutcomeBudgetPostPublishAction",
    "AdsMarkRecommendationAppliedAction",
    "AdsPEPublishStartedAction",
    "AdsPERemoveFakePublishIDAction",
    "AdsPPPReliabilityExperimentUtils",
    "AdsPerfInteractionsController",
    "AdsPostPublishGuidanceActivateAction",
    "AdsPostPublishGuidanceCoordinatorUtils",
    "AdsPreflightHVSGuidanceRecommendationPostPublishAction",
    "AdsRecommendationsClearPendingPublishAction",
    "AdsRecommendationsUtils",
    "ClickToWhatsAppFeatureGating",
    "GraphAPIRetry",
    "JSResource",
    "QPLSharing",
    "adsDraftGetFragmentStatusesFromPublishResponse",
    "adsDraftGetPublishSuccessInfo",
    "adsDraftIsSystemError",
    "adsFormatErrorMessage",
    "adsLogSourceAdObjectIDsForDuplication",
    "adsPELockedAndPublishingSelectors",
    "asyncToGeneratorRuntime",
    "err",
    "getByPath",
    "isTruthy",
    "justknobx",
    "promiseDone",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = ["publish_status"],
      c = ["fragment_statuses"],
      d,
      m = r("requireDeferred")("AdsResolutionFlowLoggingUtils").__setRef(
        "AdsDraftPublishDataManager",
      ),
      p = 3,
      _ = 3,
      f = !1,
      g = new Map(),
      h = (function () {
        function t() {
          var e = this;
          ((this.$6 = function (t) {
            var n = t.draftID,
              a = t.isInitialRequestFailure,
              l = t.response;
            r("AdsDraftDraftPublishWillCompleteDataAction").dispatch(
              { draftID: n, response: l },
              {
                line: "781",
                module: "AdsDraftPublishDataManager.js",
                moduleID: i.id,
              },
            );
            var s = r("adsDraftGetFragmentStatusesFromPublishResponse")(l),
              u = s.map(function (e) {
                return r("AdsDraftFragmentStore").getCached(e.fragment_id);
              }),
              c = s.map(function (e) {
                return r("AdsDraftFragmentStore").getCached(e.fragment_id);
              });
            (o(
              "AdsDraftPublishQPLUserFlowLogging",
            ).appendInferredProductTypeAnnotations(s),
              r("adsLogSourceAdObjectIDsForDuplication")(s),
              r("AdsDraftDraftPublishCompletedDataAction").dispatch(t, {
                line: "800",
                module: "AdsDraftPublishDataManager.js",
                moduleID: i.id,
              }));
            var m = r("AdsAccountStore").getSelectedAccount().getValue();
            if (o("AdsApplicationUtils").isPowerEditor()) {
              if (
                (r("JSResource").loadAll(
                  [
                    r("JSResource")("AdsPEUploadStore").__setRef(
                      "AdsDraftPublishDataManager",
                    ),
                    r("JSResource")(
                      "adsDraftCreateToastCardForPublishComplete",
                    ).__setRef("AdsDraftPublishDataManager"),
                  ],
                  function (s, p) {
                    var _,
                      g,
                      h,
                      y,
                      C,
                      b,
                      v = r("adsDraftGetFragmentStatusesFromPublishResponse")(
                        l,
                      ),
                      S =
                        t.publishRequestError != null
                          ? t.publishRequestError
                          : null,
                      R =
                        S == null || (_ = S.code) == null
                          ? void 0
                          : _.toString(),
                      L =
                        S == null || (g = S.error_subcode) == null
                          ? void 0
                          : g.toString(),
                      E =
                        r("adsDraftIsSystemError")(R) ||
                        r("adsDraftIsSystemError")(L),
                      k = (h = l.publish_error) == null ? void 0 : h.error_code,
                      I =
                        (y = v.find(function (e) {
                          return (
                            e.status !== r("AdAsyncRequestStatus").SUCCESS &&
                            r("adsDraftIsSystemError")(e.error_code)
                          );
                        })) == null
                          ? void 0
                          : y.error_code,
                      T =
                        l == null ||
                        E ||
                        r("adsDraftIsSystemError")(k) ||
                        I != null,
                      D = l == null ? void 0 : l.async_request_set_id,
                      x = T || f,
                      $ = s.getRecommendationData(),
                      P = p(
                        s.getSessionID(),
                        v,
                        D,
                        u,
                        x,
                        m == null ? void 0 : m.account_id,
                        s.getUpdatedAdObjectIds(),
                        !0,
                        t.hasOnsiteEligibleCampaign,
                        $,
                        t.publishRequestError,
                      ),
                      N = v.every(function (e) {
                        var t = e.action;
                        return t === "add";
                      });
                    ($ != null && e.$12($, !x),
                      o(
                        "AdsRecommendationsUtils",
                      ).getIsASLPostPublishModalEnabled() &&
                        (P == null ? void 0 : P.cardType) === "success" &&
                        r(
                          "AdsGuidanceAccountSpendLimitPostPublishAction",
                        ).dispatch(
                          { showPostPublishAccountSpendLimitDialog: !0 },
                          {
                            line: "887",
                            module: "AdsDraftPublishDataManager.js",
                            moduleID: i.id,
                          },
                        ));
                    var M = c.some(function (e) {
                        return e.ad_object_id == null;
                      }),
                      w = M;
                    (M &&
                      o(
                        "AdsPPPReliabilityExperimentUtils",
                      ).isExperimentEnabled() &&
                      !o("AdsPPPReliabilityExperimentUtils").isTest() &&
                      (w = !1),
                      w ||
                        ((P == null ? void 0 : P.cardType) === "success" && N
                          ? (
                              d || (d = r("AdsDataAtom"))
                            ).addPostDispatchCallback(function () {
                              r(
                                "AdsPostPublishGuidanceActivateAction",
                              ).dispatch(
                                {
                                  active: !0,
                                  enabledCards: o(
                                    "AdsPostPublishGuidanceCoordinatorUtils",
                                  ).getEnabledPostPublishCards(),
                                  fragmentSpec: c,
                                  hasFragments: c.length > 0,
                                },
                                {
                                  line: "910",
                                  module: "AdsDraftPublishDataManager.js",
                                  moduleID: i.id,
                                },
                              );
                            })
                          : (P == null ? void 0 : P.cardType) === "success" &&
                            o(
                              "ClickToWhatsAppFeatureGating",
                            ).isInCTXEditFlowZOExperiment() &&
                            ((
                              d || (d = r("AdsDataAtom"))
                            ).addPostDispatchCallback(function () {
                              r(
                                "AdsGuidanceCTXZeroOutcomeBudgetPostPublishAction",
                              ).dispatch(
                                {
                                  showCTXPostPublishZeroOutcomeBudgetDialog: !1,
                                  fragmentSpec: c,
                                },
                                {
                                  line: "951",
                                  module: "AdsDraftPublishDataManager.js",
                                  moduleID: i.id,
                                },
                              );
                            }),
                            d.addPostDispatchCallback(function () {
                              r(
                                "AdsGuidanceCTXCBOZeroOutcomeBudgetPostPublishAction",
                              ).dispatch(
                                {
                                  showCTXCBOPostPublishZeroOutcomeBudgetDialog:
                                    !1,
                                  fragmentSpec: c,
                                },
                                {
                                  line: "957",
                                  module: "AdsDraftPublishDataManager.js",
                                  moduleID: i.id,
                                },
                              );
                            }),
                            d.addPostDispatchCallback(function () {
                              r(
                                "AdsPostPublishGuidanceActivateAction",
                              ).dispatch(
                                {
                                  active: !0,
                                  enabledCards: o(
                                    "AdsPostPublishGuidanceCoordinatorUtils",
                                  ).getEnabledEditFlowPostPublishCards(),
                                  fragmentSpec: c,
                                  hasFragments: c.length > 0,
                                },
                                {
                                  line: "963",
                                  module: "AdsDraftPublishDataManager.js",
                                  moduleID: i.id,
                                },
                              );
                            })),
                        o(
                          "AdsFragmentsPostPublishMonitoringUtils",
                        ).getIsFragmentsPostPublishMonitoringEnabled() &&
                          (P == null ? void 0 : P.cardType) === "success" &&
                          (d || (d = r("AdsDataAtom"))).addPostDispatchCallback(
                            function () {
                              r(
                                "AdsFragmentsPostPublishMonitoringAction",
                              ).dispatch(
                                { fragments: c },
                                {
                                  line: "976",
                                  module: "AdsDraftPublishDataManager.js",
                                  moduleID: i.id,
                                },
                              );
                            },
                          ),
                        o(
                          "AdsRecommendationsUtils",
                        ).getIsCTXZeroOutcomeBudgetPostPublishModalEnabled() &&
                          (P == null ? void 0 : P.cardType) === "success" &&
                          N &&
                          (d || (d = r("AdsDataAtom"))).addPostDispatchCallback(
                            function () {
                              r(
                                "AdsGuidanceCTXZeroOutcomeBudgetPostPublishAction",
                              ).dispatch(
                                {
                                  showCTXPostPublishZeroOutcomeBudgetDialog: !0,
                                  fragmentSpec: c,
                                },
                                {
                                  line: "989",
                                  module: "AdsDraftPublishDataManager.js",
                                  moduleID: i.id,
                                },
                              );
                            },
                          ),
                        o(
                          "ClickToWhatsAppFeatureGating",
                        ).isInCTXCBOPostPublishExperiment() &&
                          (P == null ? void 0 : P.cardType) === "success" &&
                          N &&
                          (d || (d = r("AdsDataAtom"))).addPostDispatchCallback(
                            function () {
                              r(
                                "AdsGuidanceCTXCBOZeroOutcomeBudgetPostPublishAction",
                              ).dispatch(
                                {
                                  showCTXCBOPostPublishZeroOutcomeBudgetDialog:
                                    !0,
                                  fragmentSpec: c,
                                },
                                {
                                  line: "1003",
                                  module: "AdsDraftPublishDataManager.js",
                                  moduleID: i.id,
                                },
                              );
                            },
                          ),
                        o(
                          "AdsRecommendationsUtils",
                        ).getIsZeroOutcomeBudgetPostPublishModalEnabled() &&
                          (P == null ? void 0 : P.cardType) === "success" &&
                          N &&
                          (d || (d = r("AdsDataAtom"))).addPostDispatchCallback(
                            function () {
                              r(
                                "AdsGuidanceZeroOutcomeBudgetPostPublishAction",
                              ).dispatch(
                                {
                                  showPostPublishZeroOutcomeBudgetDialog: !0,
                                  fragmentSpec: c,
                                },
                                {
                                  line: "1017",
                                  module: "AdsDraftPublishDataManager.js",
                                  moduleID: i.id,
                                },
                              );
                            },
                          ),
                        o(
                          "AdsCampaignBudgetSeasonalGuidanceExperimentUtils",
                        ).isLowCostBudgetSeasonalRecommendationPPPContainerEnabled() &&
                          (P == null ? void 0 : P.cardType) === "success" &&
                          N &&
                          (d || (d = r("AdsDataAtom"))).addPostDispatchCallback(
                            function () {
                              r(
                                "AdsGuidanceBudgetSeasonalRecommendationPostPublishAction",
                              ).dispatch(
                                {
                                  showPostPublishBudgetSeasonalRecommendationDialog:
                                    !0,
                                  fragmentSpec: c,
                                },
                                {
                                  line: "1031",
                                  module: "AdsDraftPublishDataManager.js",
                                  moduleID: i.id,
                                },
                              );
                            },
                          ),
                        o(
                          "AdsRecommendationsUtils",
                        ).getIsUnderpoweredExperimentPostPublishModalEnabled() &&
                          (P == null ? void 0 : P.cardType) === "success" &&
                          N &&
                          (d || (d = r("AdsDataAtom"))).addPostDispatchCallback(
                            function () {
                              r(
                                "AdsGuidanceUnderpoweredExperimentPostPublishAction",
                              ).dispatch(
                                {
                                  showPostPublishUnderpoweredExperimentDialog:
                                    !0,
                                  fragmentSpec: c,
                                },
                                {
                                  line: "1047",
                                  module: "AdsDraftPublishDataManager.js",
                                  moduleID: i.id,
                                },
                              );
                            },
                          ),
                        o(
                          "AdsRecommendationsUtils",
                        ).getIsNarrowWebsiteCustomAudiencePostPublishModalEnabled() &&
                          (P == null ? void 0 : P.cardType) === "success" &&
                          N &&
                          (d || (d = r("AdsDataAtom"))).addPostDispatchCallback(
                            function () {
                              r(
                                "AdsGuidanceNarrowWebsiteCustomAudiencePostPublishAction",
                              ).dispatch(
                                {
                                  showPostPublishNarrowWebsiteCustomAudienceDialog:
                                    !0,
                                  fragmentSpec: c,
                                },
                                {
                                  line: "1061",
                                  module: "AdsDraftPublishDataManager.js",
                                  moduleID: i.id,
                                },
                              );
                            },
                          ),
                        o(
                          "AdsRecommendationsUtils",
                        ).getIsOutcomeForecasterBudgetPostPublishModalEnabled() &&
                          (P == null ? void 0 : P.cardType) === "success" &&
                          N &&
                          (d || (d = r("AdsDataAtom"))).addPostDispatchCallback(
                            function () {
                              r(
                                "AdsGuidanceOutcomeForecasterPFRBudgetPostPublishAction",
                              ).dispatch(
                                {
                                  showPostPublishBudgetDialog: !0,
                                  fragmentSpec: c,
                                },
                                {
                                  line: "1077",
                                  module: "AdsDraftPublishDataManager.js",
                                  moduleID: i.id,
                                },
                              );
                            },
                          )),
                      o(
                        "AdsRecommendationsUtils",
                      ).getIsHVSPostPublishRecommendationEnabled() &&
                        (P == null ? void 0 : P.cardType) === "success" &&
                        r(
                          "AdsPreflightHVSGuidanceRecommendationPostPublishAction",
                        ).dispatch(
                          { shouldShowPostPublishRecommendation: !0 },
                          {
                            line: "1090",
                            module: "AdsDraftPublishDataManager.js",
                            moduleID: i.id,
                          },
                        ));
                    {
                      var A =
                        v.length === 3 &&
                        v.every(function (e) {
                          return (
                            e.action === "add" &&
                            e.status === r("AdAsyncRequestStatus").SUCCESS &&
                            (e.source ===
                              r("AdDraftFragmentSource")
                                .LWI_GRADUATION_ITERATION_CREATION_PACKAGE ||
                              e.source ===
                                r("AdDraftFragmentSource")
                                  .IGFA_GRADUATION_CREATION_PACKAGE ||
                              e.source ===
                                r("AdDraftFragmentSource").IGFA_ONBOARDING)
                          );
                        });
                      A &&
                        r("JSResource").loadAll(
                          [
                            r("JSResource")(
                              "AdsLWIGraduationSuccessfulCompletionAction",
                            ).__setRef("AdsDraftPublishDataManager"),
                          ],
                          function (e) {
                            e.dispatch(
                              { shouldShowSuccessfulCompletionDialog: !0 },
                              {
                                line: "1113",
                                module: "AdsDraftPublishDataManager.js",
                                moduleID: i.id,
                              },
                            );
                          },
                        );
                    }
                    f = !1;
                    var F = babelHelpers.extends(
                      {
                        error_code: R,
                        error_subcode: (C = L != null ? L : k) != null ? C : I,
                        error_type: a
                          ? o("AdsDraftPublishTypes").PUBLISH_FAILED_REASONS
                              .INITIAL_REQUEST_FAILURE
                          : o("AdsDraftPublishTypes").PUBLISH_FAILED_REASONS
                              .UNKNOWN,
                        publish_ids: D != null ? [D] : void 0,
                      },
                      r("adsDraftGetPublishSuccessInfo")(v),
                      { fragment_count: v.length },
                    );
                    r(
                      "AdsPerfInteractionsController",
                    ).addCustomInteractionAnnotation(
                      "am.toast_card.publish",
                      F,
                    );
                    var O;
                    if (
                      ((b = t.publishRequestError) == null
                        ? void 0
                        : b.opes_mids) != null
                    ) {
                      var B = t.publishRequestError;
                      Array.isArray(B.opes_mids) && (O = B.opes_mids);
                    }
                    r("QPLSharing").emitPoint("PUBLISH", "PUBLISH_COMPLETED", {
                      data: {
                        bool: {
                          had_system_error: T,
                          had_validation_error: o(
                            "AdsDraftPublishQPLUserFlowLogging",
                          ).includesValidationError(
                            v.map(function (e) {
                              return e.error_code;
                            }),
                          ),
                        },
                        string: {
                          draft_id: n,
                          overall_publish_error_code: k,
                          publish_request_error_code: R,
                          publish_request_error_subcode: L,
                        },
                        string_array: {
                          fragment_ids: v.map(function (e) {
                            return e.fragment_id;
                          }),
                          fragment_ids_to_ad_object_ids: v.map(function (e) {
                            return e.fragment_id + "_" + e.ad_object_id;
                          }),
                          fragment_ids_to_error_codes: v.map(function (e) {
                            var t;
                            return (
                              e.fragment_id +
                              "_" +
                              ((t = e.error_code) != null ? t : "none")
                            );
                          }),
                          fragment_ids_to_opes_mids: v.map(function (e) {
                            var t;
                            return (
                              e.fragment_id +
                              "_" +
                              ((t = e.opes_mid) != null ? t : "none")
                            );
                          }),
                          opes_mids: O,
                        },
                      },
                    });
                  },
                ),
                r("promiseDone")(
                  r("JSResource")(
                    "adsDraftCreateToastCardForStoppingCellInStudy",
                  )
                    .__setRef("AdsDraftPublishDataManager")
                    .load()
                    .then(function (e) {
                      e(c);
                    }),
                ),
                o(
                  "AdsExperiments2026QEUtils",
                ).getCanSeeVersionControlTestSilent())
              ) {
                var p = [];
                (s.forEach(function (e) {
                  if (e.status === r("AdAsyncRequestStatus").SUCCESS) {
                    var t = r("AdsDraftFragmentStore").getCached(e.fragment_id);
                    t != null && p.push(t);
                  }
                }),
                  p.length > 0 &&
                    r("promiseDone")(
                      r("JSResource")(
                        "adsExperimentsCancelVersionControlTestOnTestedSettingEditPostPublish",
                      )
                        .__setRef("AdsDraftPublishDataManager")
                        .load()
                        .then(function (e) {
                          e(p, m == null ? void 0 : m.account_id);
                        }),
                    ));
              }
              if (r("justknobx")._("1514")) {
                var _ = s
                  .filter(function (e) {
                    return e.status === r("AdAsyncRequestStatus").SUCCESS;
                  })
                  .map(function (e) {
                    return e.ad_object_id;
                  });
                _.length > 0 &&
                  r("promiseDone")(
                    r("JSResource")("CallExtensionDefaultingOptOutHandler")
                      .__setRef("AdsDraftPublishDataManager")
                      .load()
                      .then(function (e) {
                        e(_);
                      }),
                  );
              }
            }
          }),
            (this.__debug = { dispatchPublishCompletedAction: this.$6 }));
        }
        var a = t.prototype;
        return (
          (a.startPublish = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, a, l, s, u, c) {
                o(
                  "AdsDraftPublishQPLUserFlowLogging",
                ).registerSharedPointCallbacks();
                var d,
                  m = null,
                  p = null;
                f = c;
                try {
                  var g, h;
                  r("QPLSharing").emitPoint(
                    "PUBLISH_REQUEST",
                    "PUBLISH_DRAFT_API_START",
                    {
                      data: {
                        bool: {
                          is_currently_publishing: n,
                          should_publish_immediately: u,
                        },
                        string: { creation_source: s },
                        string_array: { fragment_ids: t },
                      },
                    },
                  );
                  var y =
                    (g =
                      r("AdFLEXConfig") == null ||
                      (h = r("AdFLEXConfig").get()) == null ||
                      h.canPublishFragments == null
                        ? void 0
                        : h.canPublishFragments(t)) != null
                      ? g
                      : !0;
                  if (!y) {
                    this.$1(
                      e,
                      null,
                      null,
                      t,
                      o("AdsDraftPublishTypes").PUBLISH_FAILED_REASONS
                        .INITIAL_REQUEST_FAILURE,
                    );
                    return;
                  }
                  var C = yield o(
                    "GraphAPIRetry",
                  ).postWithRetries_UNSAFE_IDEMPOTENT_ONLY(
                    o("AdsGraphAPI")
                      .get(i.id)
                      .object("draft_id", e)
                      .edge("publish"),
                    babelHelpers.extends({ fragments: t }, a),
                    _,
                    function (e) {
                      var t = e.code === 1 && e.error_subcode === 1357045;
                      return (t && (p = !0), t);
                    },
                  );
                  if (((d = this.$2(C)), C.success)) {
                    if (C.async_request_set_id == null)
                      throw r("err")("failed to get async publish id.");
                  } else throw r("err")("publish failed to start on backend.");
                  if (((m = C.async_request_set_id), m != null)) {
                    var b;
                    o("AdsDraftPublishRealtimeClient").updatePublishStatus(
                      m,
                      (b = C.publish_status) == null ? void 0 : b.status,
                      !0,
                    );
                  }
                  if (
                    (r("AdsPEPublishStartedAction").dispatch(
                      {
                        asyncRequestSetID: m,
                        fakePublishID: l,
                        fragmentIDs: t,
                        object_creation_source: s,
                        immediate: u,
                      },
                      {
                        line: "229",
                        module: "AdsDraftPublishDataManager.js",
                        moduleID: i.id,
                      },
                    ),
                    !n)
                  ) {
                    var v;
                    r("AdsDraftDraftPublishInProgressDataAction").dispatch(
                      {
                        adsApplicationID:
                          r("AdsApplicationIDs").ADS_POWER_EDITOR,
                        draftID: e,
                        response: (v = d) == null ? void 0 : v.publish_status,
                      },
                      {
                        line: "237",
                        module: "AdsDraftPublishDataManager.js",
                        moduleID: i.id,
                      },
                    );
                  }
                  r("QPLSharing").emitPoint(
                    "PUBLISH_REQUEST",
                    "PUBLISH_DRAFT_API_END",
                    {
                      data: {
                        string: { async_request_set_id: m, creation_source: s },
                        bool: {
                          has_retried_after_empty_response: p,
                          is_currently_publishing: n,
                          should_publish_immediately: u,
                        },
                        string_array: { fragment_ids: t },
                      },
                    },
                  );
                } catch (o) {
                  if (
                    (r("QPLSharing").emitPoint(
                      "PUBLISH_REQUEST",
                      "PUBLISH_DRAFT_API_ERROR",
                      {
                        data: {
                          string: {
                            creation_source: s,
                            error_message: o.message,
                          },
                          bool: {
                            has_retried_after_empty_response: p,
                            is_currently_publishing: n,
                            should_publish_immediately: u,
                          },
                          string_array: { fragment_ids: t },
                        },
                      },
                    ),
                    r("AdsPERemoveFakePublishIDAction").dispatch(
                      { fakePublishID: l },
                      {
                        line: "278",
                        module: "AdsDraftPublishDataManager.js",
                        moduleID: i.id,
                      },
                    ),
                    n)
                  ) {
                    if (
                      r(
                        "AdsBusinessIntegrityReviewStatusAfterAPFChallengeDataProvider",
                      )().isApprovedByReviewer &&
                      (o == null ? void 0 : o.error_subcode) === 1945012
                    )
                      return;
                    r("AdsDraftAppendPublishErrorDataAction").dispatch(
                      { error: o },
                      {
                        line: "290",
                        module: "AdsDraftPublishDataManager.js",
                        moduleID: i.id,
                      },
                    );
                  } else this.$3(e, m, o, t);
                  return;
                }
                if (!(n || d.publish_status != null))
                  try {
                    o(
                      "AdsDraftPublishRealtimeClient",
                    ).bufferUntilPublishStatusFetched();
                    var S = (yield this.$4(e, [m]))[0];
                    r("AdsDraftDraftPublishInProgressDataAction").dispatch(
                      {
                        adsApplicationID:
                          r("AdsApplicationIDs").ADS_POWER_EDITOR,
                        draftID: e,
                        response: S,
                      },
                      {
                        line: "316",
                        module: "AdsDraftPublishDataManager.js",
                        moduleID: i.id,
                      },
                    );
                  } catch (n) {
                    this.$1(
                      e,
                      n,
                      { async_request_set_id: d.async_request_set_id },
                      t,
                      o("AdsDraftPublishTypes").PUBLISH_FAILED_REASONS
                        .FETCH_PUBLISH_STATUS_FAILURE,
                    );
                  }
              },
            );
            function t(t, n, r, o, a, i, l, s) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$5 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (!r("isTruthy")(e) || e.length === 0) return !1;
                var t = r("AdsAccountStore").getSelectedAccount().getValue();
                if (!r("isTruthy")(t)) return !1;
                var n = yield o("AdsGraphAPI")
                  .get(i.id)
                  .objects("campaign", e)
                  .get({ fields: ["promoted_object"] })
                  .then(function (t) {
                    return e.reduce(function (e, n) {
                      var r;
                      return (
                        e ||
                        (t != null
                          ? ((r = t[n]) == null ||
                            (r = r.promoted_object) == null ||
                            (r = r.omnichannel_object) == null ||
                            (r = r.onsite) == null ||
                            (r = r.at(0)) == null
                              ? void 0
                              : r.onboarding_state) != null
                          : !1)
                      );
                    }, !1);
                  })
                  .catch(function (e) {
                    return !1;
                  });
                return n;
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$3 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, a) {
                var i = null;
                try {
                  var l;
                  i = t != null ? (yield this.$4(e, [t]))[0] : null;
                  var s = (l = i) == null ? void 0 : l.status;
                  i != null && s === r("AdDraftPublishStatuses").FAILED
                    ? this.$6({
                        adsApplicationID:
                          r("AdsApplicationIDs").ADS_POWER_EDITOR,
                        ancestorIDs: null,
                        draftID: e,
                        fragmentIDs: a,
                        isInitialRequestFailure: !0,
                        publishRequestError: n,
                        response: i,
                        willCloseDraft: !1,
                      })
                    : this.$1(
                        e,
                        n,
                        i,
                        a,
                        o("AdsDraftPublishTypes").PUBLISH_FAILED_REASONS
                          .INITIAL_REQUEST_FAILURE,
                      );
                } catch (t) {
                  this.$1(
                    e,
                    t,
                    i,
                    a,
                    o("AdsDraftPublishTypes").PUBLISH_FAILED_REASONS
                      .FETCH_PUBLISH_STATUS_FAILURE,
                  );
                }
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.startCreateFragmentAndPublish = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, a, l, s, u, c) {
                (o(
                  "AdsDraftPublishQPLUserFlowLogging",
                ).registerSharedPointCallbacks(),
                  r("QPLSharing").emitPoint(
                    "PUBLISH_REQUEST",
                    "CREATE_AND_PUBLISH_DRAFT_API_START",
                    {
                      data: {
                        bool: {
                          is_currently_publishing: a,
                          should_publish_immediately: u,
                        },
                        string: { creation_source: s },
                      },
                    },
                  ));
                var d = [n],
                  m = null;
                f = c;
                try {
                  var p = yield r(
                    "AdsDraftFragmentDataManager",
                  ).createAndPublish(
                    e,
                    t,
                    n,
                    r("AdsApplicationIDs").ADS_POWER_EDITOR,
                  );
                  return (
                    (m = p.async_request_set_id),
                    r("QPLSharing").emitPoint(
                      "PUBLISH_REQUEST",
                      "CREATE_AND_PUBLISH_DRAFT_API_END",
                      {
                        data: {
                          string: {
                            async_request_set_id: m,
                            creation_source: s,
                          },
                          bool: {
                            is_currently_publishing: a,
                            should_publish_immediately: u,
                          },
                        },
                      },
                    ),
                    this.$7(e, d, a, l, s, u, p)
                  );
                } catch (t) {
                  return (
                    r("QPLSharing").emitPoint(
                      "PUBLISH_REQUEST",
                      "CREATE_AND_PUBLISH_DRAFT_API_ERROR",
                      {
                        data: {
                          string: {
                            creation_source: s,
                            error_message: t.message,
                          },
                          bool: {
                            is_currently_publishing: a,
                            should_publish_immediately: u,
                          },
                        },
                      },
                    ),
                    r("AdsPERemoveFakePublishIDAction").dispatch(
                      { fakePublishID: l },
                      {
                        line: "520",
                        module: "AdsDraftPublishDataManager.js",
                        moduleID: i.id,
                      },
                    ),
                    a
                      ? r("AdsDraftAppendPublishErrorDataAction").dispatch(
                          { error: t },
                          {
                            line: "522",
                            module: "AdsDraftPublishDataManager.js",
                            moduleID: i.id,
                          },
                        )
                      : this.$3(e, m, t, d),
                    t
                  );
                }
              },
            );
            function t(t, n, r, o, a, i, l, s) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$7 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, a, l, s, u) {
                var c = this.$2(u),
                  d = u.async_request_set_id;
                if (u.success && d != null)
                  (r("AdsPEPublishStartedAction").dispatch(
                    {
                      asyncRequestSetID: d,
                      fakePublishID: a,
                      fragmentIDs: t,
                      object_creation_source: l,
                      immediate: s,
                    },
                    {
                      line: "553",
                      module: "AdsDraftPublishDataManager.js",
                      moduleID: i.id,
                    },
                  ),
                    n ||
                      r("AdsDraftDraftPublishInProgressDataAction").dispatch(
                        {
                          adsApplicationID:
                            r("AdsApplicationIDs").ADS_POWER_EDITOR,
                          draftID: e,
                          response: c.publish_status,
                        },
                        {
                          line: "561",
                          module: "AdsDraftPublishDataManager.js",
                          moduleID: i.id,
                        },
                      ));
                else if (u.success) {
                  if (d == null)
                    throw r("err")("failed to get async publish id.");
                } else throw r("err")("publish failed to start on backend.");
                if (!n && c.publish_status != null)
                  try {
                    o(
                      "AdsDraftPublishRealtimeClient",
                    ).bufferUntilPublishStatusFetched();
                    var m = (yield this.$4(e, [d]))[0];
                    r("AdsDraftDraftPublishInProgressDataAction").dispatch(
                      {
                        adsApplicationID:
                          r("AdsApplicationIDs").ADS_POWER_EDITOR,
                        draftID: e,
                        response: m,
                      },
                      {
                        line: "585",
                        module: "AdsDraftPublishDataManager.js",
                        moduleID: i.id,
                      },
                    );
                  } catch (n) {
                    this.$1(
                      e,
                      n,
                      { async_request_set_id: c.async_request_set_id },
                      t,
                      o("AdsDraftPublishTypes").PUBLISH_FAILED_REASONS
                        .FETCH_PUBLISH_STATUS_FAILURE,
                    );
                  }
                return u;
              },
            );
            function t(t, n, r, o, a, i, l) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.fetchAndDispatchPublishStatus = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = this,
                  r;
                try {
                  var a = o(
                      "adsPELockedAndPublishingSelectors",
                    ).adsPELockedIDsSelector(),
                    i = yield this.$5(a == null ? void 0 : a.toArray());
                  if (t.length > 0) {
                    var l = yield this.$4(e, t);
                    return (
                      (r = l.filter(Boolean)),
                      l
                        .map(function (t) {
                          return n.$8(e, t, a, i);
                        })
                        .every(function (e) {
                          return e;
                        })
                    );
                  } else return !0;
                } catch (t) {
                  if (r != null) for (var s of r) this.$9(e, t, s);
                  else yield this.$9(e, t, null);
                  return !0;
                }
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$2 = function (n) {
            var t = n.publish_status,
              r = babelHelpers.objectWithoutPropertiesLoose(n, e),
              o = r,
              a = this.$10(t);
            return (a != null && (o.publish_status = a), o);
          }),
          (a.$10 = function (t) {
            if (t == null) return t;
            var e = t.fragment_statuses,
              n = babelHelpers.objectWithoutPropertiesLoose(t, c),
              r = n;
            return (e != null && (r.fragment_statuses = { data: e }), r);
          }),
          (a.$8 = function (t, n, a, l) {
            if (!n) return !1;
            r("AdsDraftDraftPublishInProgressDataAction").dispatch(
              {
                adsApplicationID: r("AdsApplicationIDs").ADS_POWER_EDITOR,
                draftID: t,
                response: n,
              },
              {
                line: "687",
                module: "AdsDraftPublishDataManager.js",
                moduleID: i.id,
              },
            );
            var e = n.status,
              s = o("AdsDraftPublishRealtimeClient").isPublishStatusFinished(e);
            return (
              o("AdsDraftPublishQPLUserFlowLogging").logToAllPublishUserFlows({
                bool: { has_used_polling: !0 },
                string: { last_polling_response_status: e },
              }),
              r("AdsPerfInteractionsController").addCustomInteractionAnnotation(
                "am.toast_card.publish",
                { has_used_polling: !0, last_polling_response_status: e },
              ),
              s &&
                this.handlePublishCompleted(
                  t,
                  n,
                  a,
                  e !== r("AdDraftPublishStatuses").PRE_PUBLISH,
                  l,
                ),
              s
            );
          }),
          (a.handlePublishCompleted = function (t, n, o, a, i) {
            (this.$6({
              adsApplicationID: r("AdsApplicationIDs").ADS_POWER_EDITOR,
              ancestorIDs: o,
              draftID: t,
              isInitialRequestFailure: !1,
              response: n,
              willCloseDraft: !0,
              hasOnsiteEligibleCampaign: i,
            }),
              a && this.$11(t, n, o));
          }),
          (a.$11 = function (t, n, o) {
            var e = r("adsDraftGetFragmentStatusesFromPublishResponse")(
                n,
              ).filter(function (e) {
                return e.status === r("AdAsyncRequestStatus").SUCCESS;
              }),
              a = e.map(function (e) {
                return e.fragment_id;
              }),
              l = e.map(function (e) {
                return e.ad_object_id;
              });
            r("AdsDraftDraftCloseDataAction").dispatch(
              {
                adsApplicationID: r("AdsApplicationIDs").ADS_POWER_EDITOR,
                ancestorIDs: o,
                draftID: t,
                fragmentIDs: a,
                publishedObjectIDs: l,
              },
              {
                line: "769",
                module: "AdsDraftPublishDataManager.js",
                moduleID: i.id,
              },
            );
          }),
          (a.$1 = function (t, n, a, l, s) {
            var e = this;
            r("AdsDraftDraftPublishFailedErrorDataAction").dispatch(
              {
                draftID: t,
                error: n,
                failureReason: s,
                fragmentIDs: l,
                response: a,
              },
              {
                line: "1294",
                module: "AdsDraftPublishDataManager.js",
                moduleID: i.id,
              },
            );
            var u = r("AdsAccountStore").getSelectedAccount().getValue();
            o("AdsApplicationUtils").isPowerEditor() &&
              r("JSResource").loadAll(
                [
                  r("JSResource")("AdsPEUploadStore").__setRef(
                    "AdsDraftPublishDataManager",
                  ),
                  r("JSResource")(
                    "adsDraftCreateToastCardForPublishFailure",
                  ).__setRef("AdsDraftPublishDataManager"),
                ],
                function (o, i) {
                  var c = n == null ? void 0 : n.code,
                    d = n == null ? void 0 : n.error_subcode,
                    m =
                      r("adsDraftIsSystemError")(c) ||
                      r("adsDraftIsSystemError")(d);
                  (i(o.getSessionID(), a, m || f, n, u), (f = !1));
                  var p = o.getRecommendationData();
                  p != null && e.$12(p, !1);
                  var _ = { error_code: String(c), error_subcode: String(d) },
                    g = babelHelpers.extends({}, _, { error_type: s });
                  r(
                    "AdsPerfInteractionsController",
                  ).addCustomInteractionAnnotation("am.toast_card.publish", g);
                  var h;
                  if ((n == null ? void 0 : n.opes_mids) != null) {
                    var y = n;
                    Array.isArray(y.opes_mids) && (h = y.opes_mids);
                  }
                  r("QPLSharing").emitPoint("PUBLISH", "PUBLISH_FAILED", {
                    data: {
                      bool: {
                        had_system_error: m,
                        had_validation_error: n != null && !m,
                      },
                      string: babelHelpers.extends({}, _, { draft_id: t }),
                      string_array: { fragment_ids: l, opes_mids: h },
                    },
                  });
                },
              );
          }),
          (a.$4 = function (t, n) {
            var e = [
                "async_request_set_id",
                "canceled_count",
                "error_count",
                "in_progress_count",
                "initial_count",
                "publish_error",
                "status",
                "success_count",
                "total_count",
                "fragment_statuses",
              ],
              a = "U",
              l = o("GraphAPIRetry").getWithRetries(
                o("AdsGraphAPI")
                  .get(i.id)
                  .root("addraft_" + t)
                  .edge("addraft_publish_statuses"),
                { async_request_set_ids: n, fields: e, date_format: a },
                p,
              );
            return l
              .then(function (e) {
                return r("getByPath")(e, ["data"]);
              })
              .then(function (e) {
                if (Array.isArray(e))
                  for (var t of e) {
                    var n = t == null ? void 0 : t.async_request_set_id;
                    n != null &&
                      o("AdsDraftPublishRealtimeClient").updatePublishStatus(
                        n,
                        t == null ? void 0 : t.status,
                      );
                  }
                return e;
              });
          }),
          (a.$9 = function (t, n, a) {
            ((n.message = u._(
              /*BTDS*/ "Cannot determine the status of your upload at this time. Please try again later. {original error message}",
              [
                u._param(
                  "original error message",
                  "[" + r("adsFormatErrorMessage")(n) + "]",
                ),
              ],
            )),
              (n.error_subcode = 1792080),
              this.$1(
                t,
                n,
                a,
                null,
                o("AdsDraftPublishTypes").PUBLISH_FAILED_REASONS
                  .FETCH_PUBLISH_STATUS_FAILURE,
              ));
          }),
          (a.$12 = function (t, n) {
            var e,
              o,
              a = t.isOneClickApply,
              l = t.recommendationId,
              s = t.recommendationSource;
            if (l != null) {
              n &&
                r("AdsMarkRecommendationAppliedAction").dispatch(
                  {
                    recommendationId: l,
                    isOneClickApplyOnSYD: a === !0 && s === "guidance_hub_v3",
                  },
                  {
                    line: "1469",
                    module: "AdsDraftPublishDataManager.js",
                    moduleID: i.id,
                  },
                );
              var u =
                (e =
                  (o = r("AdsAccountStore").getSelectedAccount().getValue()) ==
                  null
                    ? void 0
                    : o.account_id) != null
                  ? e
                  : "0";
              (m.onReadyImmediately(function (e) {
                new e().logPublishSuccessOrFailure(
                  t.adObjectIDs,
                  t.recommendationHash,
                  s,
                  t.recommendationType,
                  n,
                  u,
                  a === !0 ? "one_click_apply" : null,
                  t.resolutionSubtype,
                );
              }),
                r("AdsRecommendationsClearPendingPublishAction").dispatch(
                  {},
                  {
                    line: "1496",
                    module: "AdsDraftPublishDataManager.js",
                    moduleID: i.id,
                  },
                ));
            }
          }),
          (a.close = function (t, n, a, l) {
            if (!g.get(t)) {
              g.set(t, !0);
              var e = o("AdsGraphAPI")
                .get(i.id)
                .object("draft_id", t)
                .edge("close")
                .post({ source: l });
              r("promiseDone")(
                e,
                function (e) {
                  (g.set(t, !1),
                    r("AdsDraftDraftClosedDataAction").dispatch(
                      {
                        adsApplicationID:
                          r("AdsApplicationIDs").ADS_POWER_EDITOR,
                        draftID: t,
                        publishedObjectIDs: n,
                        fragmentIDs: a,
                      },
                      {
                        line: "1525",
                        module: "AdsDraftPublishDataManager.js",
                        moduleID: i.id,
                      },
                    ));
                },
                function (e) {
                  g.set(t, !1);
                },
              );
            }
          }),
          t
        );
      })(),
      y = new h();
    l.default = y;
  },
  226,
);
