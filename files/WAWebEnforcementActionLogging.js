__d(
  "WAWebEnforcementActionLogging",
  [
    "WALogger",
    "WAWebCommonNewsletterEnums",
    "WAWebNewsletterEnforcementEventsWamEvent",
    "WAWebNewsletterGatingUtils",
    "WAWebWamEnumEnforcementInteractionEvent",
    "WAWebWamEnumEnforcementType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (function () {
        function t() {
          ((this.$1 = null),
            (this.$2 = null),
            (this.$3 = null),
            (this.$4 = { enforcementType: null, violationCategory: null }),
            (this.$5 = null));
        }
        var n = t.prototype;
        return (
          (n.$6 = function () {
            return 1 + Math.floor(Number.MAX_SAFE_INTEGER * Math.random());
          }),
          (n.$7 = function (t) {
            return t == null
              ? null
              : t ===
                  o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND_INFORM
                ? o("WAWebWamEnumEnforcementType").ENFORCEMENT_TYPE.CH_SI
                : t === o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND
                  ? o("WAWebWamEnumEnforcementType").ENFORCEMENT_TYPE.CH_S
                  : t ===
                      o("WAWebCommonNewsletterEnums").EnforcementType
                        .GEOSUSPEND_INFORM
                    ? o("WAWebWamEnumEnforcementType").ENFORCEMENT_TYPE.CH_GSI
                    : t ===
                        o("WAWebCommonNewsletterEnums").EnforcementType
                          .GEOSUSPEND
                      ? o("WAWebWamEnumEnforcementType").ENFORCEMENT_TYPE.CH_GS
                      : t ===
                          o("WAWebCommonNewsletterEnums").EnforcementType
                            .PROFILE_PICTURE_DELETION
                        ? o("WAWebWamEnumEnforcementType").ENFORCEMENT_TYPE
                            .CH_PPD
                        : t ===
                            o("WAWebCommonNewsletterEnums").EnforcementType
                              .VIOLATING_MSG
                          ? o("WAWebWamEnumEnforcementType").ENFORCEMENT_TYPE
                              .CH_HCH
                          : (function () {
                              throw Error(
                                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                  t,
                              );
                            })();
          }),
          (n.$8 = function (n) {
            var t = [
              o("WAWebWamEnumEnforcementInteractionEvent")
                .ENFORCEMENT_INTERACTION_EVENT.CLICK_CHANNEL_ALERTS,
              o("WAWebWamEnumEnforcementInteractionEvent")
                .ENFORCEMENT_INTERACTION_EVENT.CLICK_ALERT_BANNER_DISMISS,
            ];
            return t.includes(n)
              ? !0
              : this.$4.enforcementType == null ||
                  this.$4.violationCategory == null
                ? (o("WALogger")
                    .WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[EnforcementCoreEventLogger] missing context for ",
                          "",
                        ])),
                      String(n),
                    )
                    .tags("enforcement-logging")
                    .sendLogs("Missing enforcement context", {
                      sampling: 0.001,
                    }),
                  !1)
                : !0;
          }),
          (n.setSurface = function (t) {
            o(
              "WAWebNewsletterGatingUtils",
            ).isChannelEnforcementLoggingEnabled() && (this.$5 = t);
          }),
          (n.$9 = function (t) {
            try {
              if (
                !o(
                  "WAWebNewsletterGatingUtils",
                ).isChannelEnforcementLoggingEnabled() ||
                !this.$8(t)
              )
                return;
              if (
                this.$2 == null ||
                this.$3 == null ||
                this.$1 == null ||
                this.$5 == null
              ) {
                o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[EnforcementCoreEventLogger] session not started",
                      ])),
                  )
                  .tags("enforcement-logging")
                  .sendLogs("Missing session context");
                return;
              }
              var e = new (o(
                "WAWebNewsletterEnforcementEventsWamEvent",
              ).NewsletterEnforcementEventsWamEvent)({
                cid: this.$3,
                enforcementInteractionEvent: t,
                interactionEntryPoint: this.$2,
                interactionSurface: this.$5,
                newsletterEnforcementSessionId: this.$1,
              });
              (this.$4.violationCategory != null &&
                (e.violationCategory = this.$4.violationCategory),
                this.$4.enforcementType != null &&
                  (e.enforcementType = this.$4.enforcementType),
                e.commit());
            } catch (e) {
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to log enforcement interaction: ",
                      "",
                    ])),
                  String(e),
                )
                .tags("enforcement-logging")
                .sendLogs("Failed to log enforcement interaction");
            }
          }),
          (n.startEnforcementSession = function (t, n, r) {
            o(
              "WAWebNewsletterGatingUtils",
            ).isChannelEnforcementLoggingEnabled() &&
              (this.isSessionStarted() && this.resetSession(),
              (this.$2 = t),
              (this.$3 = n),
              (this.$1 = this.$6()),
              (this.$5 = r),
              (this.$4 = { enforcementType: null, violationCategory: null }));
          }),
          (n.updateEnforcementContext = function (t) {
            o(
              "WAWebNewsletterGatingUtils",
            ).isChannelEnforcementLoggingEnabled() &&
              ((this.$4.enforcementType = this.$7(t.enforcementType)),
              (this.$4.violationCategory = t.enforcementViolationCategory));
          }),
          (n.resetSession = function () {
            ((this.$2 = null),
              (this.$3 = null),
              (this.$1 = null),
              (this.$5 = null),
              (this.$4 = { enforcementType: null, violationCategory: null }));
          }),
          (n.isSessionStarted = function () {
            return this.$1 != null;
          }),
          (n.logChannelAlertsClick = function () {
            this.$9(
              o("WAWebWamEnumEnforcementInteractionEvent")
                .ENFORCEMENT_INTERACTION_EVENT.CLICK_CHANNEL_ALERTS,
            );
          }),
          (n.logEnforcementDetailClick = function () {
            this.$9(
              o("WAWebWamEnumEnforcementInteractionEvent")
                .ENFORCEMENT_INTERACTION_EVENT.CLICK_ENFORCEMENT_DETAIL,
            );
          }),
          (n.logChannelGuidelinesClick = function () {
            this.$9(
              o("WAWebWamEnumEnforcementInteractionEvent")
                .ENFORCEMENT_INTERACTION_EVENT.CLICK_CHANNEL_GUIDELINES,
            );
          }),
          (n.logLearnMoreHowClick = function () {
            this.$9(
              o("WAWebWamEnumEnforcementInteractionEvent")
                .ENFORCEMENT_INTERACTION_EVENT.CLICK_LEARN_MORE_HOW,
            );
          }),
          (n.logLearnMoreWhyClick = function () {
            this.$9(
              o("WAWebWamEnumEnforcementInteractionEvent")
                .ENFORCEMENT_INTERACTION_EVENT.CLICK_LEARN_MORE_WHY,
            );
          }),
          (n.logLearnMoreEuClick = function () {
            this.$9(
              o("WAWebWamEnumEnforcementInteractionEvent")
                .ENFORCEMENT_INTERACTION_EVENT.CLICK_LEARN_MORE_EU,
            );
          }),
          (n.logSeeRuleClick = function () {
            this.$9(
              o("WAWebWamEnumEnforcementInteractionEvent")
                .ENFORCEMENT_INTERACTION_EVENT.CLICK_SEE_RULE,
            );
          }),
          (n.logSeeOptionsClick = function () {
            this.$9(
              o("WAWebWamEnumEnforcementInteractionEvent")
                .ENFORCEMENT_INTERACTION_EVENT.CLICK_SEE_OPTIONS,
            );
          }),
          (n.logRequestReviewClick = function () {
            this.$9(
              o("WAWebWamEnumEnforcementInteractionEvent")
                .ENFORCEMENT_INTERACTION_EVENT.CLICK_REQUEST_REVIEW,
            );
          }),
          (n.logSubmitRequestReviewClick = function () {
            this.$9(
              o("WAWebWamEnumEnforcementInteractionEvent")
                .ENFORCEMENT_INTERACTION_EVENT.CLICK_SUBMIT_REQUEST_REVIEW,
            );
          }),
          (n.logSubmitAppealClick = function () {
            this.$9(
              o("WAWebWamEnumEnforcementInteractionEvent")
                .ENFORCEMENT_INTERACTION_EVENT.CLICK_SUBMIT_APPEAL,
            );
          }),
          (n.logSeeReviewDetailsClick = function () {
            this.$9(
              o("WAWebWamEnumEnforcementInteractionEvent")
                .ENFORCEMENT_INTERACTION_EVENT.CLICK_SEE_REVIEW_DETAILS,
            );
          }),
          (n.logDeleteFromChannelClick = function () {
            this.$9(
              o("WAWebWamEnumEnforcementInteractionEvent")
                .ENFORCEMENT_INTERACTION_EVENT.CLICK_DELETE_FROM_CHANNEL,
            );
          }),
          (n.logDeleteUpdateConfirmClick = function () {
            this.$9(
              o("WAWebWamEnumEnforcementInteractionEvent")
                .ENFORCEMENT_INTERACTION_EVENT.CLICK_DELETE_UPDATE_CONFIRM,
            );
          }),
          (n.logDeleteChannelClick = function () {
            this.$9(
              o("WAWebWamEnumEnforcementInteractionEvent")
                .ENFORCEMENT_INTERACTION_EVENT.CLICK_DELETE_CHANNEL,
            );
          }),
          (n.logDeleteChannelConfirmClick = function () {
            this.$9(
              o("WAWebWamEnumEnforcementInteractionEvent")
                .ENFORCEMENT_INTERACTION_EVENT.CLICK_DELETE_CHANNEL_CONFIRM,
            );
          }),
          (n.logReferDsbClick = function () {
            this.$9(
              o("WAWebWamEnumEnforcementInteractionEvent")
                .ENFORCEMENT_INTERACTION_EVENT.CLICK_REFER_DSB,
            );
          }),
          (n.logGetReferenceNumberClick = function () {
            this.$9(
              o("WAWebWamEnumEnforcementInteractionEvent")
                .ENFORCEMENT_INTERACTION_EVENT.CLICK_GET_REFERENCE_NUMBER,
            );
          }),
          (n.logCopyReferenceNumberClick = function () {
            this.$9(
              o("WAWebWamEnumEnforcementInteractionEvent")
                .ENFORCEMENT_INTERACTION_EVENT.CLICK_COPY_REFERENCE_NUMBER,
            );
          }),
          (n.logChannelDeletePhoneNumberConfirmClick = function () {
            this.$9(
              o("WAWebWamEnumEnforcementInteractionEvent")
                .ENFORCEMENT_INTERACTION_EVENT
                .CLICK_CHANNEL_DELETE_PHONE_NUMBER_CONFIRM,
            );
          }),
          (n.logNextClick = function () {
            this.$9(
              o("WAWebWamEnumEnforcementInteractionEvent")
                .ENFORCEMENT_INTERACTION_EVENT.CLICK_NEXT,
            );
          }),
          (n.logBackClick = function () {
            this.$9(
              o("WAWebWamEnumEnforcementInteractionEvent")
                .ENFORCEMENT_INTERACTION_EVENT.CLICK_BACK,
            );
          }),
          (n.logDismissModalClick = function () {
            this.$9(
              o("WAWebWamEnumEnforcementInteractionEvent")
                .ENFORCEMENT_INTERACTION_EVENT.CLICK_DISMISS_BOTTOM_SHEET,
            );
          }),
          (n.logDismissDrawerClick = function () {
            this.$9(
              o("WAWebWamEnumEnforcementInteractionEvent")
                .ENFORCEMENT_INTERACTION_EVENT.CLICK_DISMISS_DRAWER,
            );
          }),
          (n.logEmailReporterClick = function () {
            this.$9(
              o("WAWebWamEnumEnforcementInteractionEvent")
                .ENFORCEMENT_INTERACTION_EVENT.CLICK_EMAIL_REPORTER,
            );
          }),
          (n.logGetReportDetailsClick = function () {
            this.$9(
              o("WAWebWamEnumEnforcementInteractionEvent")
                .ENFORCEMENT_INTERACTION_EVENT.CLICK_GET_REPORT_DETAILS,
            );
          }),
          (n.logCopyReportNumberClick = function () {
            this.$9(
              o("WAWebWamEnumEnforcementInteractionEvent")
                .ENFORCEMENT_INTERACTION_EVENT.CLICK_COPY_REPORT_NUMBER,
            );
          }),
          (n.logCopyReporterNameClick = function () {
            this.$9(
              o("WAWebWamEnumEnforcementInteractionEvent")
                .ENFORCEMENT_INTERACTION_EVENT.CLICK_COPY_REPORTER_NAME,
            );
          }),
          (n.logCopyReporterEmailClick = function () {
            this.$9(
              o("WAWebWamEnumEnforcementInteractionEvent")
                .ENFORCEMENT_INTERACTION_EVENT.CLICK_COPY_REPORTER_EMAIL,
            );
          }),
          (n.logGoToHelpCentreClick = function () {
            this.$9(
              o("WAWebWamEnumEnforcementInteractionEvent")
                .ENFORCEMENT_INTERACTION_EVENT.CLICK_GO_TO_HELP_CENTRE,
            );
          }),
          (n.logAlertBannerDismissClick = function () {
            this.$9(
              o("WAWebWamEnumEnforcementInteractionEvent")
                .ENFORCEMENT_INTERACTION_EVENT.CLICK_ALERT_BANNER_DISMISS,
            );
          }),
          (n.logClickSeeDetails = function () {
            this.$9(
              o("WAWebWamEnumEnforcementInteractionEvent")
                .ENFORCEMENT_INTERACTION_EVENT
                .CLICK_SEE_ENFORCEMENT_POLICY_DETAIL,
            );
          }),
          t
        );
      })(),
      d = new c();
    l.default = d;
  },
  98,
);
