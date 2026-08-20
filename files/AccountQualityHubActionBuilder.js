__d(
  "AccountQualityHubActionBuilder",
  [
    "fbt",
    "$InternalEnum",
    "AQUnifiedRemediationTypes",
    "AccountQualityLogger",
    "AccountQualityWhatsAppBusinessStrings",
    "FXAccountsCenterMetaSecurityCheckupRouteBuilder",
    "FXAccountsCenterTwoFactorStartRouteBuilder",
    "GeoLink.react",
    "SignalsHomeHelpContent",
    "URI",
    "XBizWebCometBizSuiteSettingsSecurityCenterControllerRouteBuilder",
    "meta-brand-alarm-clock-outline-20",
    "meta-brand-arrow-up-diagonal-right-square-outline-20",
    "meta-brand-chain-outline-20",
    "meta-brand-chart-bar-outline-20",
    "meta-brand-checkmark-shield-outline-20",
    "meta-brand-circle-slash-filled-16",
    "meta-brand-code-filled-12",
    "meta-brand-credit-card-outline-20",
    "meta-brand-dashed-arc-pointer-outline-20",
    "meta-brand-exclamation-point-speech-bubble-filled-12",
    "meta-brand-exclamation-triangle-outline-16",
    "meta-brand-exclamation-triangle-outline-20",
    "meta-brand-eye-outline-20",
    "meta-brand-four-dots-three-lines-connected-outline-20",
    "meta-brand-gavel-outline-20",
    "meta-brand-heart-clipboard-outline-20",
    "meta-brand-i-circle-outline-20",
    "meta-brand-laptop-phone-outline-20",
    "meta-brand-lines-rectangle-checkmark-filled-12",
    "meta-brand-lines-rectangle-outline-20",
    "meta-brand-lines-rectangle-square-dashes-right-outline-20",
    "meta-brand-magnifying-glass-frame-outline-20",
    "meta-brand-padlock-open-outline-20",
    "meta-brand-question-circle-outline-20",
    "meta-brand-rectangle-handle-outline-20",
    "meta-brand-shield-outline-20",
    "meta-brand-square-over-dash-dot-square-outline-20",
    "meta-brand-star-shield-outline-20",
    "meta-brand-torso-rectangle-dots-right-edge-outline-20",
    "react",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        defaultAdvertisingOverview: function () {
          return s._(
            /*BTDS*/ "Review the advertising status of your other accounts.",
          );
        },
        userAdvertisingOverview: function () {
          return s._(
            /*BTDS*/ "Review the advertising status of your business portfolios.",
          );
        },
        commerceOverview: function () {
          return s._(/*BTDS*/ "Review the status of your other accounts.");
        },
        otherActions: function () {
          return s._(
            /*BTDS*/ "You may have the right to challenge our decision in your country's courts.",
          );
        },
        otherActionsV2: function () {
          return s._(
            /*BTDS*/ "You also may have the right to challenge our decision in court.",
          );
        },
        accountHealth: function () {
          var t = c.jsx(r("GeoLink.react"), {
              href: new (e || (e = r("URI")))(
                "https://www.facebook.com/legal/merchant_policies",
              ),
              target: "_blank",
              children: s._(/*BTDS*/ "Seller Performance Standards"),
            }),
            n = c.jsx(r("GeoLink.react"), {
              href: "https://www.facebook.com/business/help/2347002662267537",
              target: "_blank",
              children: s._(/*BTDS*/ "Commerce Eligibility Requirements"),
            });
          return s._(
            /*BTDS*/ "Review your shop's performance based on Meta's {seller_performance_standards_link} and {commerce_eligibility_requirements_link} on Account Health.",
            [
              s._param("seller_performance_standards_link", t),
              s._param("commerce_eligibility_requirements_link", n),
            ],
          );
        },
        adminBusinessReview: function () {
          return s._(
            /*BTDS*/ "Request a review of this business portfolio if you believe it shouldn't be restricted from advertising.",
          );
        },
        waBusinessVerificationRequired: function () {
          return s._(
            /*BTDS*/ "Before you can begin messaging, you will need to verify your business.",
          );
        },
        nonAdminBusinessReview: function () {
          return s._(
            /*BTDS*/ "Ask an admin for this business portfolio to request a review if you believe it shouldn't be restricted from advertising.",
          );
        },
        nonAdminBusinessReviewACE: function () {
          return s._(
            /*BTDS*/ "Ask an admin for this business portfolio to request a review if you believe it shouldn't be restricted.",
          );
        },
        userReviewALE: function (t) {
          return t === !0
            ? s._(
                /*BTDS*/ "Request a review of your Meta Account if you believe it shouldn't be restricted from advertising.",
              )
            : s._(
                /*BTDS*/ "Request a review of your Facebook account if you believe it shouldn't be restricted from advertising.",
              );
        },
        userReviewOrganicFeatureLimit: function () {
          return s._(
            /*BTDS*/ "Your Facebook profile was suspended which caused the restriction on this ad account. Request a review of your Facebook profile to resolve this issue.",
          );
        },
        userViewTPIInstallerFeatureLimit: function () {
          return s._(
            /*BTDS*/ "To remove this restriction from your account, you'll need to confirm your identity.",
          );
        },
        userPaidActorStrikeNeedsAttention: function () {
          return s._(
            /*BTDS*/ "Your account needs attention because of activity that may not follow our policies. You'll be able to request a review here soon.",
          );
        },
        userPoliticalAuthorization: function () {
          return s._(
            /*BTDS*/ "Confirm your identity to remove your account restrictions and get authorized to run ads about social issues, elections or politics.",
          );
        },
        userWarningPoliticalAuthorization: function () {
          return s._(
            /*BTDS*/ "Confirm your identity and get authorized to run ads about social issues, elections or politics to prevent your account from being restricted.",
          );
        },
        userPreharm: function () {
          return s._(
            /*BTDS*/ "Once you start this process, you have 30 days to finish before your advertising access is permanently disabled.",
          );
        },
        userPreharmDetails: function () {
          return s._(
            /*BTDS*/ "This process can take up to 48 hours after you submit it.",
          );
        },
        userPreharmHeader: function () {
          return s._(/*BTDS*/ "Confirm your identity");
        },
        userPreharmIncomplete: function (t) {
          return s._(
            /*BTDS*/ '_j{"*":"You started a request for review of your advertising access but didn\'t finish. You have {number} days to complete your request before advertising access is permanently restricted.","_1":"You started a request for review of your advertising access but didn\'t finish. You have 1 day to complete your request before advertising access is permanently restricted."}',
            [s._plural(t, "number")],
          );
        },
        adminPageImpersonationHeader: function () {
          return s._(/*BTDS*/ "Confirm Your identity");
        },
        adminPageImpersonationDescription: function () {
          return s._(
            /*BTDS*/ "Confirm your identity to remove your Page restrictions.",
          );
        },
        adminPageImpersonationDescriptionIncomplete: function () {
          return s._(/*BTDS*/ "Your identity confirmation request is pending.");
        },
        nonAdminPageImpersonationReview: function () {
          return s._(
            /*BTDS*/ "Ask a Page admin to confirm their identity if you believe the Page shouldn't have features restricted.",
          );
        },
        userRiskReviewHeader: function () {
          return s._(/*BTDS*/ "Verification required");
        },
        userRiskReviewDescription: function () {
          return s._(/*BTDS*/ "{=m0}{=m1}", [
            s._implicitParam(
              "=m0",
              c.jsx("p", {
                children: s._(
                  /*BTDS*/ "Please complete verification to remove the current restrictions on your account.",
                ),
              }),
            ),
            s._implicitParam(
              "=m1",
              c.jsx("div", {
                children: s._(
                  /*BTDS*/ "After completing verification, you may need to log back into your Facebook account.",
                ),
              }),
            ),
          ]);
        },
        userRiskReviewWithMalwareCleanupHeader: function () {
          return s._(/*BTDS*/ "Find and remove malicious software");
        },
        userRiskReviewWithMalwareCleanupDescription: function () {
          return s._(/*BTDS*/ "{=m0}{=m1}", [
            s._implicitParam(
              "=m0",
              c.jsx("p", {
                children: s._(
                  /*BTDS*/ "We believe you may have malicious software on your device, which could lead to harmful activity across your online accounts.",
                ),
              }),
            ),
            s._implicitParam(
              "=m1",
              c.jsx("div", {
                children: s._(
                  /*BTDS*/ "Please complete the steps to check for and remove potentially malicious software from your devices and browsers.",
                ),
              }),
            ),
          ]);
        },
        userRiskReviewPostMalwareCleanupDescription: function () {
          return s._(/*BTDS*/ "{=m0}{=m1}", [
            s._implicitParam(
              "=m0",
              c.jsx("p", {
                children: s._(
                  /*BTDS*/ "Thank you for completing the steps to remove malicious software from your devices and browsers.",
                ),
              }),
            ),
            s._implicitParam(
              "=m1",
              c.jsx("div", {
                children: s._(
                  /*BTDS*/ "Over the next few days, we will continue to monitor your account for unusual activity. During this period, you may see additional security measures put in place to confirm it's really you using the account.",
                ),
              }),
            ),
          ]);
        },
        businessAdsActorScriptingActionDescriptionForNonAdmin: function () {
          return s._(
            /*BTDS*/ "Ask an admin for this business to request a review.",
          );
        },
        businessAdsActorScriptingActionDescriptionForAppealTimeoutOrRejected:
          function () {
            return s._(
              /*BTDS*/ "Ask another admin for this business to request a review.",
            );
          },
        getWYCDContentForScriptingRemediation: function () {
          return s._(
            /*BTDS*/ "If you believe your account was incorrectly restricted, we can take you through a few steps to verify your account and request a review.",
          );
        },
        businessAdsActorScriptingActionDescriptionForIncompleteAppeal:
          function (t) {
            return s._(
              /*BTDS*/ '_j{"*":"You started a request for review of this business\'s advertising access but didn\'t finish. You have {number} days remaining to finish your request. If you\'re unable to complete this process, another admin for this business will need to request a review.","_1":"You started a request for review of this business\'s advertising access but didn\'t finish. You have 1 day remaining to finish your request. If you\'re unable to complete this process, another admin for this business will need to request a review."}',
              [s._plural(t, "number")],
            );
          },
        businessPreharmAdmin: function () {
          return s._(
            /*BTDS*/ "As an admin of this business, we can take you through a few steps to request a review of its advertising access by confirming your identity.",
          );
        },
        businessPreharmNonAdmin: function () {
          return s._(
            /*BTDS*/ "Ask an admin for this business to request a review.",
          );
        },
        businessPreharmAdminToOtherAdmins: function () {
          return s._(
            /*BTDS*/ "Ask another admin for this business to request a review.",
          );
        },
        businessPreharmIncomplete: function (t) {
          return s._(
            /*BTDS*/ '_j{"*":"You started a request for review of this business\'s advertising access but didn\'t finish. You have {number} days remaining to finish your request. If you\'re unable to complete this process, another admin for this business will need to request a review.","_1":"You started a request for review of this business\'s advertising access but didn\'t finish. You have 1 day remaining to finish your request. If you\'re unable to complete this process, another admin for this business will need to request a review."}',
            [s._plural(t, "number")],
          );
        },
        adAccountPreharmAdmin: function () {
          return s._(/*BTDS*/ "{=m0}{=m1}{=m2}", [
            s._implicitParam(
              "=m0",
              c.jsx("div", {
                children: s._(/*BTDS*/ "{=m1}", [
                  s._implicitParam(
                    "=m1",
                    c.jsx("b", {
                      children: s._(/*BTDS*/ "Confirm Your Identity"),
                    }),
                  ),
                ]),
              }),
            ),
            s._implicitParam(
              "=m1",
              c.jsx("div", {
                children: s._(
                  /*BTDS*/ "Once you start this process, you have 30 days to finish before your ad account gets permanently disabled.",
                ),
              }),
            ),
            s._implicitParam(
              "=m2",
              c.jsx("p", {
                children: s._(
                  /*BTDS*/ "This process can take up to 48 hours after you submit it.",
                ),
              }),
            ),
          ]);
        },
        adAccountPreharmNonAdmin: function () {
          return s._(/*BTDS*/ "{=m0}{=m1}", [
            s._implicitParam(
              "=m0",
              c.jsx("div", {
                children: s._(/*BTDS*/ "{=m1}", [
                  s._implicitParam(
                    "=m1",
                    c.jsx("b", { children: s._(/*BTDS*/ "Contact an Admin") }),
                  ),
                ]),
              }),
            ),
            s._implicitParam(
              "=m1",
              c.jsx("div", {
                children: s._(
                  /*BTDS*/ "To reinstate your advertising access, ask an admin of this ad account to confirm their identity with Facebook. Find out who is an admin is by going to Business Settings.",
                ),
              }),
            ),
          ]);
        },
        adAccountReview: function () {
          return s._(
            /*BTDS*/ "Request a review of this ad account if you believe it shouldn't be disabled.",
          );
        },
        adAccountReviewWithDeadline: function (t) {
          return s._(
            /*BTDS*/ "Request a review of this ad account if you believe it shouldn't be disabled. You have until {deadline date}, to request a review before the account is permanently disabled.",
            [s._param("deadline date", t)],
          );
        },
        adAccountReviewWithDelay: function () {
          return s._(
            /*BTDS*/ "Request a review of this ad account if you believe it shouldn't be disabled. You will need to wait for 24 hours before you are able to request another review for this account.",
          );
        },
        seeRestrictionsPage: function () {
          return s._(
            /*BTDS*/ "See Page restrictions and learn more about how to request a review.",
          );
        },
        seeRestrictionsBusiness: function () {
          return s._(
            /*BTDS*/ "See all advertising restrictions for the business that owns this ad account and learn more about how to request a review.",
          );
        },
        seeRestrictionsUser: function (t) {
          return t === !0
            ? s._(
                /*BTDS*/ "See all advertising restrictions for your Meta Account and learn more about how to request a review.",
              )
            : s._(
                /*BTDS*/ "See all advertising restrictions for your Facebook account and learn more about how to request a review.",
              );
        },
        getUseAnotherAdAccount: function () {
          return s._(
            /*BTDS*/ "To continue advertising, use another ad account. You can add new ad accounts in Business Settings.",
          );
        },
        goToPaymentSettings: function () {
          return s._(
            /*BTDS*/ "Go to payment settings to learn more about this issue.",
          );
        },
        contactSupport: function (t) {
          switch (t) {
            case "RISK_PAYMENT":
              return s._(
                /*BTDS*/ "Contact support to verify your information.",
              );
            case "DSL_REACHED":
              return s._(
                /*BTDS*/ "Contact a support agent to check if you\u2019re eligible to update your daily spend limit.",
              );
            case "HIT_ACCOUNT_CREDIT_LIMIT":
              return s._(
                /*BTDS*/ "Contact a support agent to check if you\u2019re eligible to update your account credit limit.",
              );
            case "UNSETTLED":
            default:
              return s._(
                /*BTDS*/ "Contact a support agent if you still need help.",
              );
          }
        },
        nonRecommendable: function () {
          return s._(
            /*BTDS*/ "Review your Page recommendations status and address open issues within the recommendations transparency screen.",
          );
        },
        nonAdminOwnerDisabled: function () {
          return s._(
            /*BTDS*/ "Contact your admin for this ad account to find out why it was restricted and request a review on your behalf.",
          );
        },
        adminPageReview: function () {
          return s._(
            /*BTDS*/ "Request a review of this Page if you believe it shouldn't be restricted from advertising.",
          );
        },
        adminPageMessagingReview: function () {
          return s._(
            /*BTDS*/ "You can request a review if you believe this Page shouldn't be restricted from messaging.",
          );
        },
        adminPageReviewMistake: function () {
          return s._(
            /*BTDS*/ "Request a review if you think we made a mistake.",
          );
        },
        unifiedRemediationAdminPageAfterReview: function () {
          return s._(
            /*BTDS*/ "We\u2019re currently reviewing the identity information you submitted and your request for a review. We\u2019ll notify you within 48 hours of the time you submitted.",
          );
        },
        unifiedRemediationAdminPageReview: function () {
          return s._(
            /*BTDS*/ "You\u2019ll need to confirm your identity with us for security purposes. Then you can let us know if you want to request a review of your account restriction.",
          );
        },
        unifiedRemediationAdminPageAfterReviewTitle: function () {
          return s._(/*BTDS*/ "ID verification and account review requested");
        },
        unifiedRemediationAdminPageReviewTitle: function () {
          return s._(/*BTDS*/ "Confirm your identity and request a review");
        },
        requestReviewDescription: function (t) {
          switch (t) {
            case "Page":
              return s._(
                /*BTDS*/ "You can request a review of your page if you believe that it shouldn't be restricted.",
              );
            case "AdAccount":
              return s._(
                /*BTDS*/ "You can request a review of your ad account if you believe that it shouldn't be restricted.",
              );
            case "AdBusiness":
              return s._(
                /*BTDS*/ "You can request a review of your Business portfolio if you believe that it shouldn't be restricted.",
              );
            case "User":
            default:
              return s._(
                /*BTDS*/ "You can request a review of your Meta account if you believe that it shouldn't be restricted.",
              );
          }
        },
        requestReviewDescriptionForStrikes: function (t) {
          switch (t) {
            case "Page":
              return s._(
                /*BTDS*/ "We'll use technology or our review team to take another look at any ads that are available for review, and get back to you in a few days. If we find we made a mistake, we'll restore these ads and your Page.",
              );
            case "AdAccount":
              return s._(
                /*BTDS*/ "We'll use technology or our review team to take another look at any ads that are available for review, and get back to you in a few days. If we find we made a mistake, we'll restore these ads and your ad account.",
              );
            case "User":
            default:
              return s._(
                /*BTDS*/ "We'll use technology or our review team to take another look at any ads that are available for review, and get back to you in a few days. If we find we made a mistake, we'll restore these ads and your advertising privileges.",
              );
          }
        },
        reviewRequestedDescription: function (t) {
          switch (t) {
            case "Page":
              return s._(
                /*BTDS*/ "Thank you for submitting your account for review. We're always looking out for the security of our community, so while we're reviewing your information, your page won't be able to advertise.",
              );
            case "AdAccount":
              return s._(
                /*BTDS*/ "Thank you for submitting your account for review. We're always looking out for the security of our community, so while we're reviewing your information, your ad account won't be able to advertise.",
              );
            case "AdBusiness":
              return s._(
                /*BTDS*/ "Thank you for submitting your account for review. We're always looking out for the security of our community, so while we're reviewing your information, your business portfolio won't be able to advertise.",
              );
            case "User":
            default:
              return s._(
                /*BTDS*/ "Thank you for submitting your account for review. We're always looking out for the security of our community, so while we're reviewing your information, your Meta account won't be able to advertise.",
              );
          }
        },
        getWYCDContentForUnifiedRemediation: function (t, n, r) {
          switch (t) {
            case o("AQUnifiedRemediationTypes").AQUnifiedRemediationTypes
              .APPEAL:
              return n
                ? {
                    actionHeader: s._(/*BTDS*/ "Review requested"),
                    actionDescription: d.reviewRequestedDescription(r),
                  }
                : {
                    actionHeader: s._(/*BTDS*/ "Request a review"),
                    actionDescription: d.requestReviewDescription(r),
                  };
            case o("AQUnifiedRemediationTypes").AQUnifiedRemediationTypes.UFAC:
              return n
                ? {
                    actionHeader: s._(/*BTDS*/ "ID verification in review"),
                    actionDescription: s._(
                      /*BTDS*/ "We're currently reviewing the identity information that you submitted. We'll notify you within 48 hours of the time you submitted.",
                    ),
                  }
                : {
                    actionHeader: s._(/*BTDS*/ "Confirm your identity"),
                    actionDescription: s._(
                      /*BTDS*/ "You'll need to confirm your identity with us for security purposes.",
                    ),
                  };
            case o("AQUnifiedRemediationTypes").AQUnifiedRemediationTypes
              .UFAC_APPEAL:
              return n
                ? {
                    actionHeader: s._(
                      /*BTDS*/ "ID verification and account review requested",
                    ),
                    actionDescription: s._(
                      /*BTDS*/ "We're currently reviewing the identity information you submitted and your request for a review. We'll notify you within 48 hours of the time you submitted.",
                    ),
                  }
                : {
                    actionHeader: s._(
                      /*BTDS*/ "Confirm your identity and request a review",
                    ),
                    actionDescription: s._(
                      /*BTDS*/ "You'll need to confirm your identity with us for security purposes. Then you can let us know if you want to request a review of your account restriction.",
                    ),
                  };
          }
        },
        getWYCDContentForMessagingRestrictionOnPage: function (t, n) {
          return t
            ? {
                actionHeader: s._(/*BTDS*/ "Review requested"),
                actionDescription: s._(
                  /*BTDS*/ "Thank you for submitting your account for review. We're always looking out for the security of our community, so while we're reviewing your information, you can't send messages for {remaing days} day(s).",
                  [s._param("remaing days", n)],
                ),
              }
            : {
                actionHeader: s._(/*BTDS*/ "Request a review"),
                actionDescription: s._(
                  /*BTDS*/ "We'll use technology or our review team to take another look, and get back to you in a few days. If we find we made a mistake, we'll remove the restriction.",
                ),
              };
        },
        getWYCDContentForStrikes: function (t, n, r) {
          switch (t) {
            case o("AQUnifiedRemediationTypes").AQUnifiedRemediationTypes
              .APPEAL:
              return n
                ? {
                    actionHeader: s._(/*BTDS*/ "Review requested"),
                    actionDescription: d.reviewRequestedDescription(r),
                  }
                : {
                    actionHeader: s._(/*BTDS*/ "Request a review"),
                    actionDescription: d.requestReviewDescriptionForStrikes(r),
                  };
            case o("AQUnifiedRemediationTypes").AQUnifiedRemediationTypes
              .UFAC_APPEAL:
              return n
                ? d.getWYCDContentForUnifiedRemediation(t, n, r)
                : {
                    actionHeader: s._(
                      /*BTDS*/ "Confirm your identity and request a review",
                    ),
                    actionDescription: d.requestReviewDescriptionForStrikes(r),
                  };
            default:
              return d.getWYCDContentForUnifiedRemediation(t, n, r);
          }
        },
        nonAdminPageReview: function () {
          return s._(
            /*BTDS*/ "Ask an admin or advertiser for this Page to request a review if you believe it shouldn't be restricted from advertising.",
          );
        },
        policyCourse: function () {
          return s._(
            /*BTDS*/ "To help ensure your ads follow our policies, take our Meta Blueprint course on Advertising Standards for ad content, creative and targeting.",
          );
        },
        complyWithPoliciesBusiness: function () {
          return s._(
            /*BTDS*/ "To regain access to these features, this business and the assets it owns will need to consistently comply with our policies when running ads.",
          );
        },
        complyWithPoliciesPersonal: function () {
          return s._(
            /*BTDS*/ "To regain access to these features, you will need to consistently comply with our policies when running ads.",
          );
        },
        getFewerAdReports: function () {
          return s._(
            /*BTDS*/ "To regain access to these advertising features, you will need to run fewer ads that get hidden or reported.",
          );
        },
        reviewLowQualityAds: function () {
          return s._(
            /*BTDS*/ 'Check for ads that are marked as "low quality" in the delivery column of Ads Manager, which means they might be using low-quality attributes that diminish their value for people.',
          );
        },
        getUseAdRelevanceDiagnostics: function () {
          return s._(
            /*BTDS*/ "Use ad relevance diagnostics to help diagnose if your recent ads are relevant to the audiences reached.",
          );
        },
        pageDSLRegainAccess: function () {
          return s._(
            /*BTDS*/ "To regain access to higher spending limits, ads associated with this page need to consistently comply with our Advertising Standards.",
          );
        },
        appDSLRegainAccess: function () {
          return s._(
            /*BTDS*/ "To regain access to higher spending limits, ads associated with this app need to consistently comply with our Advertising Standards.",
          );
        },
        businessAdAccountsStatusReview: function () {
          return s._(
            /*BTDS*/ "Review business for any rejected ads or restricted ad accounts and take action to resolve.",
          );
        },
        businessVerificationStatusReviewOwner: function () {
          return s._(
            /*BTDS*/ "To regain access to these advertising features, you can request a review of your business verification.",
          );
        },
        businessVerificationStatusReviewAdmin: function () {
          return s._(
            /*BTDS*/ "Contact an admin to have them request an appeal to reinstate their business verification. If it's restored, you'll have the same spend amounts and advertising features you had previously.",
          );
        },
        fixAdsPolicyIssues: function () {
          return s._(
            /*BTDS*/ "Learn about the policy issues with your rejected ads here. Then use Ads Manager to fix those issues before requesting another review.",
          );
        },
        userEnableTwoFac: function () {
          return s._(
            /*BTDS*/ "Turn on two-factor authentication to gain access to your business accounts and assets.",
          );
        },
        requestReviewACEBanhammerBody: function () {
          return s._(
            /*BTDS*/ "Request a review of this business portfolio if you believe it shouldn't be restricted.",
          );
        },
        requestReviewAppealCountBody: function (t, n) {
          return s._(
            /*BTDS*/ "You have requested {appeal_count} out of {appeal_limit} available reviews.",
            [s._param("appeal_count", t), s._param("appeal_limit", n)],
          );
        },
        getLearnAboutBusinessRestrictionsMessage: function () {
          return s._(
            /*BTDS*/ "See all restrictions for the business portfolio that owns this commerce account and learn more about how to request a review.",
          );
        },
        getLearnAboutBusinessRestrictionsNoAppealMessage: function () {
          return s._(
            /*BTDS*/ "See all restrictions for the business portfolio that owns this commerce account.",
          );
        },
        userEnableTwoFacDuringWarning: function () {
          return s._(
            /*BTDS*/ "We'll take you through a few steps to turn on two-factor authentication to prevent restrictions to your business portfolios and assets.",
          );
        },
        reviewMisinfoViolations: function () {
          return s._(
            /*BTDS*/ "Review the violations from your recent posts in Page Quality.",
          );
        },
        learnAboutFactChecking: function () {
          return s._(
            /*BTDS*/ "Learn about fact-checking across Meta technologies and how to issue corrections or dispute a rating.",
          );
        },
        learnAboutFactCheckingMisinfoRepeatOffender: function () {
          return s._(
            /*BTDS*/ "Learn about fact-checking across Facebook and Instagram and how to disagree with a decision.",
          );
        },
        stopSendingDataFromProhibitedDomains: function () {
          return s._(/*BTDS*/ "Stop sending data from the domain");
        },
        complyWithProhibitedDomainPolicies: function () {
          return s._(
            /*BTDS*/ "If you own the domains sending data, you can stop sending data from them. You can do this by removing the pixel, or updating your API to no longer include those domains",
          );
        },
        requestReviewForProhibitedDomainTitle: function () {
          return s._(/*BTDS*/ "Request a review");
        },
        requestReviewForProhibitedDomainDetails: function () {
          return s._(
            /*BTDS*/ "Request a review if you believe the domain doesn't violate our terms and policies. You can request a review for each domain flagged as violating.",
          );
        },
        allowlistForProhibitedDomainDetails: function () {
          var e = c.jsx(r("GeoLink.react"), {
            display: "inline",
            href: o("SignalsHomeHelpContent").getHelpContentURL(
              o("SignalsHomeHelpContent").Entries.PIXEL_TRAFFIC_PERMISSIONS,
            ),
            showUnderline: "always",
            target: "_blank",
            children: s._(/*BTDS*/ "Learn more"),
          });
          return s._(
            /*BTDS*/ "Set up an allow list so that only certain domains can send activity using your pixel. This is useful if you're seeing data from a domain you don't own. {learn_more_traffic_permissions}",
            [s._param("learn_more_traffic_permissions", e)],
          );
        },
        getUseAllowlistForProhibitedDomainTitle: function () {
          return s._(/*BTDS*/ "Use an allow list");
        },
        reviewCommerceAccount: function () {
          return s._(
            /*BTDS*/ "Request a review of this commerce account if you believe its shop should be published.",
          );
        },
        reviewCommunityGroup: function () {
          return s._(
            /*BTDS*/ "Request a review of the demonetized group if you believe it shouldn't be restricted.",
          );
        },
        unusualActivityContactFBRep: function () {
          return s._(
            /*BTDS*/ "We\u2019re investigating unusual activity on your business portfolio. Please contact your Meta sales representative to learn more.",
          );
        },
        reviewSecurityAlertsNoSales: function () {
          return s._(
            /*BTDS*/ "We noticed unusual activity on your business portfolio. While we investigate, please review and respond to security alerts on this page.",
          );
        },
        reviewSecurityAlertsWithSales: function () {
          return s._(
            /*BTDS*/ "While we investigate, please review and respond to security alerts on this page.",
          );
        },
        authenticityVerification: function () {
          return s._(
            /*BTDS*/ "To prevent issues such as fraud and impersonation, we now require advertisers to confirm their identity to keep running ads on this account",
          );
        },
        addInformationForAccount: function () {
          return s._(
            /*BTDS*/ "We need more information to review your account. Add information to complete your review request.",
          );
        },
        onlineGamblingRequestPermission: function () {
          return s._(
            /*BTDS*/ "Request permission to message about Online Gambling and Gaming.",
          );
        },
        commerceCheckRequestReviewCommercePolicy: function () {
          return s._(
            /*BTDS*/ "If you believe your business complies with WhatsApp\u2019s Commerce Policy, you can request a review.",
          );
        },
        commerceCheckRequestReviewBusinessPolicy: function () {
          return s._(
            /*BTDS*/ "If you believe your business complies with WhatsApp\u2019s Business Policy, you can request a review.",
          );
        },
        commerceCheckUpdateWebsite: function () {
          return s._(
            /*BTDS*/ "Update the business profile with a valid website",
          );
        },
        commerceCheckUpdateWebsiteWithMoreInfo: function () {
          return s._(
            /*BTDS*/ "Update the business profile with a website that clearly describes your business",
          );
        },
        commerceCheckRequestAnotherReview: function () {
          return s._(
            /*BTDS*/ "Once you\u2019ve updated the business profile, request another review",
          );
        },
        payNow: function () {
          return s._(/*BTDS*/ "Pay the amount due to continue running ads.");
        },
        resolveSDCFriction: function () {
          return s._(
            /*BTDS*/ "Verify at least one payment method or add a new payment method in order to run ads again.",
          );
        },
        approvePreauthHold: function () {
          return s._(
            /*BTDS*/ "To continue running ads, approve a temporary hold of funds on your payment method.",
          );
        },
        editPrimaryPaymentMethod: function () {
          return s._(/*BTDS*/ "You can add a new primary payment method.");
        },
        tryAuthAgain: function () {
          return s._(
            /*BTDS*/ "You can try to place a temporary hold on your card again.",
          );
        },
        editCampaignBudget: function () {
          return s._(/*BTDS*/ "You can lower your campaign budgets.");
        },
        whatsappBusinessXfacAppealPending: function () {
          return s._(
            /*BTDS*/ "Thank you for submitting your account for review. We'll notify you within 48 hours of the time you submitted.",
          );
        },
        acknowledgeSpamStrike: function () {
          return s._(
            /*BTDS*/ "Lift the restrictions by acknowledging you've read WhatsApp's Best practices for sending high quality messages",
          );
        },
        businessMessagingPolicyTermsAndServiceInDays: function (n) {
          var t = c.jsx(r("GeoLink.react"), {
            href: new (e || (e = r("URI")))(
              o("AccountQualityWhatsAppBusinessStrings").BUSINESS_TOS_URL,
            ),
            target: "_blank",
            children: s._(/*BTDS*/ "Terms of Service"),
          });
          return s._(
            /*BTDS*/ '_j{"*":"If you believe the business was complying with WhatsApp\\u2019s Business {Link to WhatsApp\'s Business Terms of Service}. You have {number} days remaining to finish your request. If you\'re unable to complete this process, another admin for this business will need to request a review.","_1":"If you believe the business was complying with WhatsApp\\u2019s Business {Link to WhatsApp\'s Business Terms of Service}. You have 1 day remaining to finish your request. If you\'re unable to complete this process, another admin for this business will need to request a review."}',
            [
              s._plural(n, "number"),
              s._param("Link to WhatsApp's Business Terms of Service", t),
            ],
          );
        },
        businessMessagingPolicyTermsAndService: function () {
          var t = c.jsx(r("GeoLink.react"), {
            href: new (e || (e = r("URI")))(
              o("AccountQualityWhatsAppBusinessStrings").BUSINESS_TOS_URL,
            ),
            target: "_blank",
            children: s._(/*BTDS*/ "Terms of Service"),
          });
          return s._(
            /*BTDS*/ "If you believe the business was complying with WhatsApp\u2019s Business {Link to WhatsApp's Business Terms of Service}, you can request a review.",
            [s._param("Link to WhatsApp's Business Terms of Service", t)],
          );
        },
        civicPolicyTermsAndService: function () {
          var t = c.jsx(r("GeoLink.react"), {
            href: new (e || (e = r("URI")))(
              o("AccountQualityWhatsAppBusinessStrings").CIVIC_TOS_URL,
            ),
            target: "_blank",
            children: s._(/*BTDS*/ "Terms of Service"),
          });
          return s._(
            /*BTDS*/ "If you believe the business was complying with WhatsApp\u2019s Business {Link to WhatsApp's Business Terms of Service}, you can request a review.",
            [s._param("Link to WhatsApp's Business Terms of Service", t)],
          );
        },
        businessAppealInReview: function (t) {
          return s._(
            /*BTDS*/ "We are reviewing {end_client_business_name} at your request. You\u2019ll be notified when the review is completed. Reviews typically take 24 to 48 hours.",
            [s._param("end_client_business_name", t)],
          );
        },
        businessAppealRejected: function (t) {
          return s._(
            /*BTDS*/ "The review you requested confirmed that {end_client_business_name} was violating WhatsApp\u2019s Business Terms of Service.",
            [s._param("end_client_business_name", t)],
          );
        },
        businessAppealWYCDInReview: function () {
          return s._(
            /*BTDS*/ "We are reviewing your business's accounts at your request.",
          );
        },
        waBusinessPolicyWYCDLearnMore: function () {
          return s._(
            /*BTDS*/ "Learn about our policies and how we evaluate activity that may not follow our policies.",
          );
        },
        waBusinessPolicyWYCDDirectSupport: function () {
          return s._(
            /*BTDS*/ "If you believe the business was complying with WhatsApp\u2019s Business Terms of Service and Policies, you can request a review through Direct Support.",
          );
        },
        acePolicyWYCDLearnMore: function () {
          return s._(
            /*BTDS*/ "Learn about about feedback scores and our policies around product and delivery expectations.",
          );
        },
        acePolicyAppealInfo: function () {
          return s._(
            /*BTDS*/ "Request a review if you have resolved an issue that was affecting your business or you think we got it wrong.",
          );
        },
        aceAppealUploadDocuments: function () {
          return s._(
            /*BTDS*/ "Upload additional documents so we can complete your review request.",
          );
        },
        aceSetYourDeliverySpeed: function () {
          return s._(
            /*BTDS*/ "Set your order delivery speed so we send feedback surveys to your customers once they're likely to have received their item.",
          );
        },
        aceNotEcommerceAppeals: function () {
          return s._(
            /*BTDS*/ "This Page is categorized as one that sells products online. If this isn\u2019t right, request a review.",
          );
        },
        businessCompromiseTopActionDescription: function (t, n) {
          switch (t) {
            case "NO_COMPROMISE":
              return s._(
                /*BTDS*/ "If you notice continued evidence of compromise, visit Help Center for more support.",
              );
            case "COMPROMISE_RECOVERY_COMPLETE":
            case "COMPROMISE_REFUND_COMPLETE":
              return n === "refund"
                ? s._(
                    /*BTDS*/ "If you're unhappy with your account recovery or notice continued evidence of compromise, you can request another review.",
                  )
                : s._(
                    /*BTDS*/ "If you're unhappy with your account recovery or notice continued evidence of compromise, visit Help Center for more support.",
                  );
            case "COMPROMISE_REACTIVE_DETECTION":
            case "COMPROMISE_PROACTIVE_DETECTION":
              return s._(
                /*BTDS*/ "Review the security of your other accounts.",
              );
            default:
              return s._(
                /*BTDS*/ "Contact a support agent if you still need help.",
              );
          }
        },
        goToBusinessSettingsForCompromise: function (t, n, o, a) {
          r("vulture")("KxYRXTG7EOiZGWOzLr1ozJpT8Dw=");
          var e = k(n, t, o, a);
          return e.length === 0
            ? o
              ? [
                  s._(
                    /*BTDS*/ "Review suggestions in Security Center to improve the security of your business.",
                  ),
                ]
              : [
                  s._(
                    /*BTDS*/ "Review Pages, accounts and people linked to your business and their access levels. Also confirm there are no unauthorized pending invitations.",
                  ),
                ]
            : e;
        },
        checkAccountSecurityForCompromise: function (t, n) {
          var e,
            a,
            i = function () {
              o("AccountQualityLogger").logButtonClickAction(
                "aq.l3.bsh_go_to_personal_2fa_set_up_click",
                { entity_type: "AdBusiness", entity_id: n },
              );
            },
            l = function () {
              o("AccountQualityLogger").logButtonClickAction(
                "aq.l3.bsh_go_to_personal_security_checkup_click",
                { entity_type: "AdBusiness", entity_id: n },
              );
            },
            u = c.jsx(r("GeoLink.react"), {
              href:
                (e = r("FXAccountsCenterMetaSecurityCheckupRouteBuilder")
                  .buildUri({})
                  .getQualifiedUri()) == null ||
                (e = e.setSubDomain("accountscenter")) == null
                  ? void 0
                  : e.toString(),
              onClick: l,
              target: "_blank",
              children: s._(/*BTDS*/ "security of your personal account"),
            });
          if (t === !0)
            return s._(/*BTDS*/ "Check {security_checkup_link}.", [
              s._param("security_checkup_link", u),
            ]);
          var d = c.jsx(r("GeoLink.react"), {
            href:
              (a = r("FXAccountsCenterTwoFactorStartRouteBuilder")
                .buildUri({})
                .getQualifiedUri()) == null ||
              (a = a.setSubDomain("accountscenter")) == null ||
              (a = a.setPath("/password_and_security/two_factor/")) == null
                ? void 0
                : a.toString(),
            onClick: i,
            target: "_blank",
            children: s._(/*BTDS*/ "two-factor authentication"),
          });
          return s._(
            /*BTDS*/ "Check {security_checkup_link} and turn on {two_factor_link}.",
            [
              s._param("security_checkup_link", u),
              s._param("two_factor_link", d),
            ],
          );
        },
        AccountSecurityForCompromiseHeader: function () {
          return s._(/*BTDS*/ "Secure your personal account");
        },
        BusinssSecurityForCompromiseHeader: function () {
          return s._(/*BTDS*/ "Keep your business secure");
        },
        nonAdminWycdIntro: function () {
          return s._(
            /*BTDS*/ "You do not have permission to request a review on this account. Ask an admin to request a review on your behalf.",
          );
        },
      },
      m = {
        accountHealth: function () {
          return {
            icon: o("meta-brand-heart-clipboard-outline-20")
              .metaBrandHeartClipboardOutline20,
          };
        },
        requestReview: function () {
          return { icon: o("meta-brand-eye-outline-20").metaBrandEyeOutline20 };
        },
        atRisk: function () {
          return {
            icon: o("meta-brand-exclamation-triangle-outline-16")
              .metaBrandExclamationTriangleCautionTriangleOutline16,
            color: "error",
          };
        },
        someIssues: function () {
          return {
            icon: o("meta-brand-circle-slash-filled-16")
              .metaBrandCircleSlashSlashCircleFilled16,
            color: "warning",
          };
        },
        submitDocuments: function () {
          return {
            icon: o("meta-brand-lines-rectangle-outline-20")
              .metaBrandLinesRectangleOutline20,
          };
        },
        findAction: function () {
          return {
            icon: o("meta-brand-magnifying-glass-frame-outline-20")
              .metaBrandMagnifyingGlassFrameOutline20,
          };
        },
        otherActions: function () {
          return {
            icon: o("meta-brand-gavel-outline-20").metaBrandGavelOutline20,
          };
        },
        advertisingOverview: function () {
          return {
            icon: o("meta-brand-dashed-arc-pointer-outline-20")
              .metaBrandDashedArcPointerOutline20,
          };
        },
        adAccount: function () {
          return {
            icon: o("meta-brand-lines-rectangle-square-dashes-right-outline-20")
              .metaBrandLinesRectangleSquareDashesRightOutline20,
          };
        },
        adPolicy: function () {
          return {
            icon: o("meta-brand-square-over-dash-dot-square-outline-20")
              .metaBrandSquareOverDashDotSquareOutline20,
          };
        },
        seeAdmins: function () {
          return {
            icon: o("meta-brand-star-shield-outline-20")
              .metaBrandStarShieldOutline20,
          };
        },
        badgeModerator: function () {
          return {
            icon: o("meta-brand-checkmark-shield-outline-20")
              .metaBrandCheckmarkShieldOutline20,
          };
        },
        pageQuality: function () {
          return {
            icon: o("meta-brand-shield-outline-20")
              .metaBrandShieldShieldOutline20,
          };
        },
        seeRestrictions: function () {
          return {
            icon: o("meta-brand-rectangle-handle-outline-20")
              .metaBrandRectangleHandleBusinessBriefcaseOutline20,
          };
        },
        enableTwoFac: function () {
          return {
            icon: o("meta-brand-padlock-open-outline-20")
              .metaBrandPadlockOpenPrivacyUnlockedOutline20,
          };
        },
        adIssues: function () {
          return {
            icon: o("meta-brand-exclamation-triangle-outline-20")
              .metaBrandExclamationTriangleCautionTriangleOutline20,
          };
        },
        securityRisks: function () {
          return {
            icon: o("meta-brand-exclamation-triangle-outline-20")
              .metaBrandExclamationTriangleCautionTriangleOutline20,
          };
        },
        diagnostics: function () {
          return {
            icon: o("meta-brand-four-dots-three-lines-connected-outline-20")
              .metaBrandFourDotsThreeLinesConnectedOutline20,
          };
        },
        policyCourse: function () {
          return {
            icon: o("meta-brand-laptop-phone-outline-20")
              .metaBrandLaptopPhoneOutline20,
          };
        },
        information: function () {
          return {
            icon: o("meta-brand-i-circle-outline-20")
              .metaBrandICircleInfoCircleOutline20,
          };
        },
        contactSales: function () {
          return {
            icon: o("meta-brand-torso-rectangle-dots-right-edge-outline-20")
              .metaBrandTorsoRectangleDotsRightEdgeOutline20,
          };
        },
        verificationRequired: function () {
          return {
            icon: o("meta-brand-exclamation-triangle-outline-20")
              .metaBrandExclamationTriangleCautionTriangleOutline20,
          };
        },
        link: function () {
          return {
            icon: o("meta-brand-chain-outline-20").metaBrandChainOutline20,
          };
        },
        paymentCard: function () {
          return {
            icon: o("meta-brand-credit-card-outline-20")
              .metaBrandCreditCardCardHorizontalOutline20,
          };
        },
        support: function () {
          return {
            icon: o("meta-brand-question-circle-outline-20")
              .metaBrandQuestionCircleQuestionCircleOutline20,
          };
        },
        paymentSettings: function () {
          return {
            icon: o("meta-brand-arrow-up-diagonal-right-square-outline-20")
              .metaBrandArrowUpDiagonalRightSquareShareExternalOutline20,
          };
        },
        increaseDSL: function () {
          return {
            icon: o("meta-brand-dashed-arc-pointer-outline-20")
              .metaBrandDashedArcPointerOutline20,
          };
        },
        fixIssue: function () {
          return { icon: o("meta-brand-code-filled-12").metaBrandCodeFilled12 };
        },
        allowlist: function () {
          return {
            icon: o("meta-brand-lines-rectangle-checkmark-filled-12")
              .metaBrandLinesRectangleCheckmarkFilled12,
          };
        },
        dataSourceRequestReview: function () {
          return {
            icon: o("meta-brand-exclamation-point-speech-bubble-filled-12")
              .metaBrandExclamationPointSpeechBubbleFilled12,
          };
        },
        aboutOurPolicies: function () {
          return { icon: o("meta-brand-eye-outline-20").metaBrandEyeOutline20 };
        },
        learnMoreAboutPolicies: function () {
          return {
            icon: o("meta-brand-chart-bar-outline-20")
              .metaBrandChartBarOutline20,
          };
        },
        setDeliverySpeed: function () {
          return {
            icon: o("meta-brand-alarm-clock-outline-20")
              .metaBrandAlarmClockOutline20,
          };
        },
        nonRecommendable: function () {
          return {
            icon: o("meta-brand-dashed-arc-pointer-outline-20")
              .metaBrandDashedArcPointerOutline20,
          };
        },
        dashboard: function () {
          return {
            icon: o("meta-brand-dashed-arc-pointer-outline-20")
              .metaBrandDashedArcPointerOutline20,
          };
        },
      },
      p = {
        accountOverview: function () {
          return s._(/*BTDS*/ "See Accounts");
        },
        otherActions: function () {
          return s._(/*BTDS*/ "Other actions you can take");
        },
        accountHealth: function () {
          return s._(/*BTDS*/ "Go to Account Health");
        },
        requestReview: function () {
          return s._(/*BTDS*/ "Request review");
        },
        takeAction: function () {
          return s._(/*BTDS*/ "Take action");
        },
        viewPageStatus: function () {
          return s._(/*BTDS*/ "View Page status");
        },
        requestPermission: function () {
          return s._(/*BTDS*/ "Request permission");
        },
        uploadDocuments: function () {
          return s._(/*BTDS*/ "Upload documents");
        },
        aboutOurPolicies: function () {
          return s._(/*BTDS*/ "About our Policies");
        },
        goToGroupHealth: function () {
          return s._(/*BTDS*/ "Go to Group Health");
        },
        contactSupport: function () {
          return s._(/*BTDS*/ "Contact support");
        },
        addInformation: function () {
          return s._(/*BTDS*/ "Add information");
        },
        continue: function () {
          return s._(/*BTDS*/ "Continue request");
        },
        seeAdmins: function () {
          return s._(/*BTDS*/ "See admins");
        },
        seeRestrictions: function () {
          return s._(/*BTDS*/ "See restrictions");
        },
        startAuthorization: function () {
          return s._(/*BTDS*/ "Confirm identity");
        },
        startConfirmation: function () {
          return s._(/*BTDS*/ "Start Confirmation");
        },
        startVerification: function () {
          return s._(/*BTDS*/ "Start verification");
        },
        getStarted: function () {
          return s._(/*BTDS*/ "Start now");
        },
        confirmIdentity: function () {
          return s._(/*BTDS*/ "Confirm Identity");
        },
        toBusinessSettings: function () {
          return s._(/*BTDS*/ "Go to Business Settings");
        },
        toSecurityCenter: function () {
          return s._(/*BTDS*/ "Go to Security Center");
        },
        toBusinessVerification: function () {
          return s._(/*BTDS*/ "Go to Business Verification");
        },
        toAdsManager: function () {
          return s._(/*BTDS*/ "Go to Ads Manager");
        },
        toPageRoles: function () {
          return s._(/*BTDS*/ "Go to Page roles");
        },
        toPaymentSettings: function () {
          return s._(/*BTDS*/ "Payment settings");
        },
        policyCourse: function () {
          return s._(/*BTDS*/ "Take ads policy course");
        },
        learnMore: function () {
          return s._(/*BTDS*/ "Learn more");
        },
        toTwoFacSettings: function () {
          return s._(/*BTDS*/ "Secure your account");
        },
        reviewPagePostViolations: function () {
          return s._(/*BTDS*/ "Review violations");
        },
        aboutFactChecking: function () {
          return s._(/*BTDS*/ "About fact-checking");
        },
        updateBusinessProfile: function () {
          return s._(/*BTDS*/ "Update business profile");
        },
        payNow: function () {
          return (
            r("vulture")("EhsQECFecC-epRH_PdiZPFGoOA4="),
            s._(/*BTDS*/ "Pay now")
          );
        },
        resolveSDCFriction: function () {
          return s._(/*BTDS*/ "Verify payment method");
        },
        approvePreauthHold: function () {
          return s._(/*BTDS*/ "Approve hold");
        },
        editPrimaryPaymentMethod: function () {
          return s._(/*BTDS*/ "Add payment method");
        },
        tryAuthAgain: function () {
          return s._(/*BTDS*/ "Try again");
        },
        editCampaignBudget: function () {
          return s._(/*BTDS*/ "Edit budgets");
        },
        setDeliverySpeed: function () {
          return s._(/*BTDS*/ "Set Delivery Speed");
        },
        nonRecommendable: function () {
          return s._(/*BTDS*/ "Visit Page Recommendations");
        },
        viewAccount: function () {
          return s._(/*BTDS*/ "View account");
        },
        reviewFacebookAccount: function () {
          return s._(/*BTDS*/ "Review Facebook profile");
        },
        viewDetails: function () {
          return s._(/*BTDS*/ "View Details");
        },
        businessCompromiseTopActionButtonLabel: function (t, n) {
          switch (t) {
            case "COMPROMISE_REACTIVE_DETECTION":
            case "COMPROMISE_PROACTIVE_DETECTION":
              return s._(/*BTDS*/ "See Accounts");
            case "COMPROMISE_RECOVERY_COMPLETE":
            case "COMPROMISE_REFUND_COMPLETE":
              return n === "refund"
                ? s._(/*BTDS*/ "Contact Support")
                : s._(/*BTDS*/ "Go to Help Center");
            default:
              return s._(/*BTDS*/ "Go to Help Center");
          }
        },
      },
      _ = {
        businessReviewRequested: function () {
          return s._(
            /*BTDS*/ "A review was already requested for this account.",
          );
        },
        businessReviewRequestedFromUser: function () {
          return s._(/*BTDS*/ "You already requested a review.");
        },
        businessReviewLimitReached: function () {
          return s._(/*BTDS*/ "You've reached your review limit.");
        },
        userReviewRequested: function () {
          return s._(
            /*BTDS*/ "You already requested a review for your account.",
          );
        },
        reviewNotYetAvailable: function () {
          return s._(
            /*BTDS*/ "Requesting a review isn't available yet. Check back later.",
          );
        },
        pageReviewRequested: function () {
          return s._(/*BTDS*/ "A review was already requested for this Page.");
        },
        adminPageImpersonationConfirmIdentity: function () {
          return s._(
            /*BTDS*/ "We weren't able to confirm your identity. Ask another admin to confirm their identity if you believe the Page shouldn\u2019t have features restricted.",
          );
        },
        businessVerificationRequired: function () {
          return s._(
            /*BTDS*/ "You must verify your business before requesting a review.",
          );
        },
        identityConfirmationRequired: function () {
          return s._(
            /*BTDS*/ "You must confirm your identity before requesting a review.",
          );
        },
        adminAdAccountOwnerBusinessDisabled: function () {
          return s._(
            /*BTDS*/ "You can't request a review because the business that owns this ad account is restricted from advertising.",
          );
        },
        adminAdAccountOwnerUserDisabled: function (t) {
          return t === !0
            ? s._(
                /*BTDS*/ "You can't request a review because your Meta Account is restricted from advertising.",
              )
            : s._(
                /*BTDS*/ "You can't request a review because your Facebook account is restricted from advertising.",
              );
        },
        adminPageOwnerUserDisabled: function (t) {
          return t === !0
            ? s._(
                /*BTDS*/ "You can't request a review because your Meta Account is restricted from advertising.",
              )
            : s._(
                /*BTDS*/ "You can't request a review because your Facebook account is restricted from advertising.",
              );
        },
        adminPageOwnerUserRestricted: function (t) {
          return t === !0
            ? s._(
                /*BTDS*/ "You can't request a review because your Meta Account is restricted.",
              )
            : s._(
                /*BTDS*/ "You can't request a review because your Facebook account is restricted.",
              );
        },
        adminBusinessUserDisabled: function (t) {
          return t === !0
            ? s._(
                /*BTDS*/ "You can't request a review because your Meta Account is restricted from advertising.",
              )
            : s._(
                /*BTDS*/ "You can't request a review because your Facebook account is restricted from advertising.",
              );
        },
        nonAdminAdAccountReviewDisabled: function () {
          return s._(
            /*BTDS*/ "You can't request a review of this ad account. Contact an admin of the account for more information.",
          );
        },
        adAccountReviewRequested: function () {
          return s._(
            /*BTDS*/ "A review was already requested for this account.",
          );
        },
        adAccountReviewDelay: function () {
          return s._(
            /*BTDS*/ "You can't request a review of this ad account at this time.",
          );
        },
      },
      f = {
        render: function (t) {
          switch (t) {
            case "NO_APPEAL_PERMISSION_FOR_USER":
              return s._(/*BTDS*/ "Ask an admin to request a review");
            case "ENTITY_APPEAL_LIMIT_REACHED":
              return s._(/*BTDS*/ "You\u2019ve reached your review limit");
            case "ENTITY_HAS_PENDING_APPEAL":
              return s._(/*BTDS*/ "Wait for the results of your review");
            default:
              return null;
          }
        },
      },
      g = {
        render: function (t, n, r) {
          if (t) return d.addInformationForAccount();
          switch (r) {
            case "NO_APPEAL_PERMISSION_FOR_USER":
              return s._(
                /*BTDS*/ "You don\u2019t have permission to request a review from this account.",
              );
            case "ENTITY_APPEAL_LIMIT_REACHED":
              return s._(
                /*BTDS*/ "You can\u2019t request any more reviews on this account.",
              );
            case "ENTITY_HAS_PENDING_APPEAL":
              return s._(
                /*BTDS*/ "Our team is currently reviewing your account and aims to get back to you within 48 hours.",
              );
          }
          return n === "CommerceMerchantSettings"
            ? d.reviewCommerceAccount()
            : d.requestReviewACEBanhammerBody();
        },
      },
      h = {
        render: function (t, n) {
          var e = [
            "NO_APPEAL_PERMISSION_FOR_USER",
            "ENTITY_APPEAL_LIMIT_REACHED",
          ];
          return n != null && e.includes(n)
            ? null
            : t
              ? p.addInformation()
              : p.requestReview();
        },
      };
    function y(e) {
      return c.jsxs(c.Fragment, {
        children: [
          c.jsx("strong", {
            children: s._(/*BTDS*/ '_j{"*":"{number} users","_1":"1 user"}', [
              s._plural(e, "number"),
            ]),
          }),
          " ",
          s._(
            /*BTDS*/ '_j{"*":"have malware running and need to be removed.","_1":"has malware running and need to be removed."}',
            [s._plural(e)],
          ),
        ],
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e, t, n, o) {
      if (t === "none" || t === null) {
        if (!n) {
          var a,
            i =
              (a = r(
                "XBizWebCometBizSuiteSettingsSecurityCenterControllerRouteBuilder",
              ).buildUri({
                business_id: o,
                nav_ref: "bm_settings_redirect_migration",
              })) == null ||
              (a = a.getQualifiedUri()) == null ||
              (a = a.setSubDomain("business")) == null
                ? void 0
                : a.toString(),
            l = c.jsx(r("GeoLink.react"), {
              href: i,
              target: "_blank",
              children: s._(/*BTDS*/ "two-factor Authentication"),
            });
          return c.jsxs(c.Fragment, {
            children: [
              s._(/*BTDS*/ "Require"),
              " ",
              l,
              " ",
              s._(/*BTDS*/ "for everyone in your business."),
            ],
          });
        }
        return c.jsxs(c.Fragment, {
          children: [
            s._(/*BTDS*/ "Require"),
            " ",
            c.jsx("strong", {
              children: s._(/*BTDS*/ "two-factor authentication"),
            }),
            " ",
            s._(/*BTDS*/ "for everyone in your business."),
          ],
        });
      }
      return c.jsxs(c.Fragment, {
        children: [
          c.jsx("strong", {
            children: s._(
              /*BTDS*/ '_j{"*":"{number} people","_1":"1 person"}',
              [s._plural(e, "number")],
            ),
          }),
          " ",
          s._(
            /*BTDS*/ '_j{"*":"need to turn on two-factor authentication.","_1":"needs to turn on two-factor authentication."}',
            [s._plural(e)],
          ),
        ],
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      return c.jsxs(c.Fragment, {
        children: [
          c.jsx("strong", {
            children: s._(
              /*BTDS*/ '_j{"*":"{number} people","_1":"1 person"}',
              [s._plural(e, "number")],
            ),
          }),
          " ",
          s._(
            /*BTDS*/ '_j{"*":{"*":"are using personal email addresses and need to be removed."},"_1":{"_1":"is using personal email address and need to be removed."}}',
            [s._plural(e), s._plural(e)],
          ),
        ],
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      return c.jsxs(c.Fragment, {
        children: [
          c.jsx("strong", {
            children: s._(/*BTDS*/ '_j{"*":"{number} users","_1":"1 user"}', [
              s._plural(e, "number"),
            ]),
          }),
          " ",
          s._(
            /*BTDS*/ '_j{"*":"are inactive and need to be removed.","_1":"is inactive and need to be removed."}',
            [s._plural(e)],
          ),
        ],
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      return c.jsxs(c.Fragment, {
        children: [
          c.jsx("strong", {
            children: s._(
              /*BTDS*/ '_j{"*":"{number} Ad Accounts","_1":"1 Ad Account"}',
              [s._plural(e, "number")],
            ),
          }),
          " ",
          s._(
            /*BTDS*/ '_j{"*":"are inactive and need to be removed.","_1":"is inactive and need to be removed."}',
            [s._plural(e)],
          ),
        ],
      });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      return c.jsxs(c.Fragment, {
        children: [
          c.jsx("strong", {
            children: s._(
              /*BTDS*/ '_j{"*":"{number} Ad Accounts","_1":"1 Ad Account"}',
              [s._plural(e, "number")],
            ),
          }),
          " ",
          s._(
            /*BTDS*/ '_j{"*":"owned by another business are inactive and need to be removed.","_1":"owned by another business is inactive and need to be removed."}',
            [s._plural(e)],
          ),
        ],
      });
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
      return c.jsxs(c.Fragment, {
        children: [
          c.jsx("strong", {
            children: s._(
              /*BTDS*/ '_j{"*":"{number} Ad Accounts","_1":"1 Ad Account"}',
              [s._plural(e, "number")],
            ),
          }),
          " ",
          s._(
            /*BTDS*/ '_j{"*":{"*":"don\'t have peer approval set-up, review it and set it up to keep your Ad Accounts secure."},"_1":{"_1":"doesn\'t have peer approval set-up, review it and set it up to keep your Ad Account secure."}}',
            [s._plural(e), s._plural(e)],
          ),
        ],
      });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e) {
      return c.jsxs(c.Fragment, {
        children: [
          c.jsx("strong", {
            children: s._(
              /*BTDS*/ '_j{"*":"{number} shared credit lines","_1":"1 shared credit line"}',
              [s._plural(e, "number")],
            ),
          }),
          " ",
          s._(
            /*BTDS*/ '_j{"*":{"*":"show suspicious activity and need to be removed."},"_1":{"_1":"shows suspicious activity and needs to be removed."}}',
            [s._plural(e), s._plural(e)],
          ),
        ],
      });
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e, t, n, r) {
      if (e == null) return [];
      var o = [],
        a = e.inactive_users_count;
      a != null && a > 0 && o.push({ priority: 1, text: v(a) });
      var i = e.inactive_owned_ad_accounts_count;
      i != null && i > 0 && o.push({ priority: 2, text: S(i) });
      var l = e.inactive_shared_ad_accounts_count;
      l != null && l > 0 && o.push({ priority: 3, text: R(l) });
      var s = e.non_twofac_users_count;
      (t === "none" || t === null || (s != null && s > 0)) &&
        o.push({ priority: 4, text: C(s, t, n, r) });
      var u = e.public_email_users_count;
      u != null && u > 0 && o.push({ priority: 5, text: b(u) });
      var c = e.peer_approval_ad_accounts_count;
      c != null && c > 0 && o.push({ priority: 7, text: L(c) });
      var d = e.malware_compromised_users_count;
      d != null && d > 0 && o.push({ priority: 8, text: y(d) });
      var m = e.risky_credit_lines_count;
      return (
        m != null && m > 0 && o.push({ priority: 9, text: E(m) }),
        o.sort(function (e, t) {
          return e.priority - t.priority;
        }),
        o.slice(0, 3).map(function (e) {
          return e.text;
        })
      );
    }
    var I = n("$InternalEnum")({ Political: "restricted_content/political" });
    ((l.actionDescriptions = d),
      (l.actionAssets = m),
      (l.buttonLabels = p),
      (l.disabledTexts = _),
      (l.aepActionHeaders = f),
      (l.aepActionDescriptions = g),
      (l.aepButtonLabels = h),
      (l.AdvertisingPolicies = I));
  },
  226,
);
