__d(
  "CometAdPrefsWAIST26Content",
  [
    "fbt",
    "AdsPrefsEduStatus$FbtEnum",
    "CometAdPrefsWAIST26ContentActions",
    "CometAdPrefsWAIST26ContentAdvertiser",
    "CometAdPrefsWAIST26ContentAgeGender",
    "CometAdPrefsWAIST26ContentEngagement",
    "CometAdPrefsWAIST26ContentUtils",
    "FDSLink.react",
    "FDSText.react",
    "FXAccountsCenterAdSettingsRouteBuilder",
    "intlList",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = function () {
        return s._(/*BTDS*/ "");
      },
      d = function () {
        return s._(/*BTDS*/ "");
      },
      m = function () {
        return s._(/*BTDS*/ "");
      },
      p = function (t) {
        return t === "BASIC_ADS_TIER_C"
          ? s._(/*BTDS*/ "", [
              s._implicitParam(
                "=m1",
                u.jsx(r("FDSLink.react"), {
                  href: o("CometAdPrefsWAIST26ContentUtils").HELP_CENTER_PATH,
                  target: "_blank",
                  children: s._(/*BTDS*/ "", [
                    s._implicitParam(
                      "=m1",
                      u.jsx(r("FDSText.react"), {
                        color: "blueLink",
                        type: "body3",
                        children: s._(/*BTDS*/ "", [
                          s._param(
                            "learn more about how ads work",
                            s._(/*BTDS*/ ""),
                          ),
                        ]),
                      }),
                    ),
                  ]),
                }),
              ),
            ])
          : s._(/*BTDS*/ "", [
              s._implicitParam(
                "=m1",
                u.jsx(r("FDSLink.react"), {
                  href: o("CometAdPrefsWAIST26ContentUtils").HELP_CENTER_PATH,
                  target: "_blank",
                  children: s._(/*BTDS*/ "", [
                    s._implicitParam(
                      "=m1",
                      u.jsx(r("FDSText.react"), {
                        color: "blueLink",
                        type: "body3",
                        children: s._(/*BTDS*/ "", [
                          s._param(
                            "learn more about how ads work",
                            s._(/*BTDS*/ ""),
                          ),
                        ]),
                      }),
                    ),
                  ]),
                }),
              ),
            ]);
      },
      _ = function (t) {
        return t === "BASIC_ADS_TIER_C"
          ? s._(/*BTDS*/ "", [
              s._implicitParam(
                "=m1",
                u.jsx(r("FDSLink.react"), {
                  href: o("CometAdPrefsWAIST26ContentUtils").HELP_CENTER_PATH,
                  target: "_blank",
                  children: s._(/*BTDS*/ "", [
                    s._implicitParam(
                      "=m1",
                      u.jsx(r("FDSText.react"), {
                        color: "blueLink",
                        type: "body3",
                        children: s._(/*BTDS*/ "", [
                          s._param(
                            "learn more about how ads work",
                            s._(/*BTDS*/ ""),
                          ),
                        ]),
                      }),
                    ),
                  ]),
                }),
              ),
            ])
          : s._(/*BTDS*/ "", [
              s._implicitParam(
                "=m1",
                u.jsx(r("FDSLink.react"), {
                  href: o("CometAdPrefsWAIST26ContentUtils").HELP_CENTER_PATH,
                  target: "_blank",
                  children: s._(/*BTDS*/ "", [
                    s._implicitParam(
                      "=m1",
                      u.jsx(r("FDSText.react"), {
                        color: "blueLink",
                        type: "body3",
                        children: s._(/*BTDS*/ "", [
                          s._param(
                            "learn more about how ads work",
                            s._(/*BTDS*/ ""),
                          ),
                        ]),
                      }),
                    ),
                  ]),
                }),
              ),
            ]);
      },
      f = function (t) {
        var e,
          n =
            (e = r("FXAccountsCenterAdSettingsRouteBuilder")
              .buildUri({})
              .getQualifiedUri()) == null ||
            (e = e.setSubDomain("accountscenter")) == null
              ? void 0
              : e.toString();
        return t === "BASIC_ADS_TIER_C"
          ? s._(/*BTDS*/ "", [
              s._implicitParam(
                "=m1",
                u.jsx(r("FDSLink.react"), {
                  href: n,
                  target: "_blank",
                  children: s._(/*BTDS*/ "", [
                    s._implicitParam(
                      "=m1",
                      u.jsx(r("FDSText.react"), {
                        color: "blueLink",
                        type: "body3",
                        children: s._(/*BTDS*/ "", [
                          s._param(
                            "review ad experience chioce",
                            s._(/*BTDS*/ ""),
                          ),
                        ]),
                      }),
                    ),
                  ]),
                }),
              ),
            ])
          : null;
      },
      g = function (t) {
        return s._(/*BTDS*/ "", [
          s._param("education school", r("intlList")(t)),
        ]);
      },
      h = function (t) {
        return s._(/*BTDS*/ "", [
          s._param("education school label", r("intlList")(t)),
          s._param(
            "learn more link",
            o("CometAdPrefsWAIST26ContentUtils").getLearnMoreLinkInFbt(
              "learn_more_edu_schools",
            ),
          ),
        ]);
      },
      y = function (t) {
        var e = o("CometAdPrefsWAIST26ContentUtils").EDUSTATUS_TYPE_MAPPING[t];
        return s._(/*BTDS*/ "", [s._enum(e, r("AdsPrefsEduStatus$FbtEnum"))]);
      },
      C = function (t) {
        var e = o("CometAdPrefsWAIST26ContentUtils").EDUSTATUS_TYPE_MAPPING[t];
        return s._(/*BTDS*/ "", [
          s._enum(e, r("AdsPrefsEduStatus$FbtEnum")),
          s._param(
            "learn more link",
            o("CometAdPrefsWAIST26ContentUtils").getLearnMoreLinkInFbt(
              "learn_more_edu_status",
            ),
          ),
        ]);
      },
      b = function (t) {
        var e = o("CometAdPrefsWAIST26ContentUtils").EDUSTATUS_TYPE_MAPPING[t];
        return s._(/*BTDS*/ "", [s._enum(e, r("AdsPrefsEduStatus$FbtEnum"))]);
      },
      v = function (t) {
        var e = o("CometAdPrefsWAIST26ContentUtils").EDUSTATUS_TYPE_MAPPING[t];
        return s._(/*BTDS*/ "", [
          s._enum(e, r("AdsPrefsEduStatus$FbtEnum")),
          s._param(
            "learn more link",
            o("CometAdPrefsWAIST26ContentUtils").getLearnMoreLinkInFbt(
              "learn_more_edu_status",
            ),
          ),
        ]);
      },
      S = function (t) {
        return s._(/*BTDS*/ "", [
          s._param("locales", r("intlList")(t, r("intlList").CONJUNCTIONS.OR)),
        ]);
      },
      R = function (t) {
        return s._(/*BTDS*/ "", [
          s._plural(t.length),
          s._param("locales", r("intlList")(t)),
          s._param(
            "learn more link",
            o("CometAdPrefsWAIST26ContentUtils").getLearnMoreLinkInFbt(
              "learn_more_locales",
            ),
          ),
        ]);
      },
      L = function (t) {
        return s._(/*BTDS*/ "", [
          s._param(
            "advertiser name",
            o("CometAdPrefsWAIST26ContentUtils").getTruncatedAdvertiserName(t),
          ),
        ]);
      },
      E = function (t) {
        return s._(/*BTDS*/ "", [
          s._param("advertiser name", t),
          s._param(
            "learn more link",
            o("CometAdPrefsWAIST26ContentUtils").getLearnMoreLinkInFbt(
              "learn_more_local_reach",
            ),
          ),
        ]);
      },
      k = function (t) {
        return s._(/*BTDS*/ "", [s._param("location name", t)]);
      },
      I = function (t) {
        return s._(/*BTDS*/ "", [s._param("location name", t)]);
      },
      T = function (t) {
        return s._(/*BTDS*/ "", [s._param("location name", t)]);
      },
      D = function (t) {
        return s._(/*BTDS*/ "", [s._param("relationship status", t)]);
      },
      x = function (t) {
        return s._(/*BTDS*/ "", [s._param("relationship status", t)]);
      },
      $ = function (t) {
        return s._(/*BTDS*/ "", [s._param("relationship status", t)]);
      },
      P = function (t) {
        return s._(/*BTDS*/ "", [s._param("relationship status", t)]);
      };
    ((l.getAgeGenderDetailsParagraph = o(
      "CometAdPrefsWAIST26ContentAgeGender",
    ).getAgeGenderDetailsParagraph),
      (l.getLandingPageAgeOrAgeRangeGenderTitle = o(
        "CometAdPrefsWAIST26ContentAgeGender",
      ).getLandingPageAgeOrAgeRangeGenderTitle),
      (l.getDetailInterestPageActionParagraph = o(
        "CometAdPrefsWAIST26ContentEngagement",
      ).getDetailInterestPageActionParagraph),
      (l.getDetailInterestPageActionParagraphForUTC = o(
        "CometAdPrefsWAIST26ContentEngagement",
      ).getDetailInterestPageActionParagraphForUTC),
      (l.getDetailInterestPageActionSubParagraph = o(
        "CometAdPrefsWAIST26ContentEngagement",
      ).getDetailInterestPageActionSubParagraph),
      (l.getDetailInterestPageActionSubParagraphForUTC = o(
        "CometAdPrefsWAIST26ContentEngagement",
      ).getDetailInterestPageActionSubParagraphForUTC),
      (l.getDetailInterestPageParagraph = o(
        "CometAdPrefsWAIST26ContentEngagement",
      ).getDetailInterestPageParagraph),
      (l.getDetailInterestPageParagraphForUTC = o(
        "CometAdPrefsWAIST26ContentEngagement",
      ).getDetailInterestPageParagraphForUTC),
      (l.getDetailPageEngagementCAEventTitle = o(
        "CometAdPrefsWAIST26ContentEngagement",
      ).getDetailPageEngagementCAEventTitle),
      (l.getDetailPageEngagementCAHowLearnParagraph = o(
        "CometAdPrefsWAIST26ContentEngagement",
      ).getDetailPageEngagementCAHowLearnParagraph),
      (l.getDetailPageEngagementCAIGProfileTitle = o(
        "CometAdPrefsWAIST26ContentEngagement",
      ).getDetailPageEngagementCAIGProfileTitle),
      (l.getDetailPageEngagementCALeadGenTitle = o(
        "CometAdPrefsWAIST26ContentEngagement",
      ).getDetailPageEngagementCALeadGenTitle),
      (l.getDetailPageEngagementCAPageTitle = o(
        "CometAdPrefsWAIST26ContentEngagement",
      ).getDetailPageEngagementCAPageTitle),
      (l.getDetailPageEngagementCAVideoTitle = o(
        "CometAdPrefsWAIST26ContentEngagement",
      ).getDetailPageEngagementCAVideoTitle),
      (l.getDetailPageFacebookWifiCATitle = o(
        "CometAdPrefsWAIST26ContentEngagement",
      ).getDetailPageFacebookWifiCATitle),
      (l.getDetailPageReviewInterestTitle = o(
        "CometAdPrefsWAIST26ContentEngagement",
      ).getDetailPageReviewInterestTitle),
      (l.getDetailPageReviewInterestTitleForUTC = o(
        "CometAdPrefsWAIST26ContentEngagement",
      ).getDetailPageReviewInterestTitleForUTC),
      (l.getLandingPageConnectionTitle = o(
        "CometAdPrefsWAIST26ContentEngagement",
      ).getLandingPageConnectionTitle),
      (l.getLandingPageEngagementCAEventTitle = o(
        "CometAdPrefsWAIST26ContentEngagement",
      ).getLandingPageEngagementCAEventTitle),
      (l.getLandingPageEngagementCAIGProfileTitle = o(
        "CometAdPrefsWAIST26ContentEngagement",
      ).getLandingPageEngagementCAIGProfileTitle),
      (l.getLandingPageEngagementCALeadGenTitle = o(
        "CometAdPrefsWAIST26ContentEngagement",
      ).getLandingPageEngagementCALeadGenTitle),
      (l.getLandingPageEngagementCAPageTitle = o(
        "CometAdPrefsWAIST26ContentEngagement",
      ).getLandingPageEngagementCAPageTitle),
      (l.getLandingPageEngagementCAVideoTitle = o(
        "CometAdPrefsWAIST26ContentEngagement",
      ).getLandingPageEngagementCAVideoTitle),
      (l.getLandingPageFacebookWifiCATitle = o(
        "CometAdPrefsWAIST26ContentEngagement",
      ).getLandingPageFacebookWifiCATitle),
      (l.getLandingPageFriendsOfConnectionTitle = o(
        "CometAdPrefsWAIST26ContentEngagement",
      ).getLandingPageFriendsOfConnectionTitle),
      (l.getLandingPageInterestsTitle = o(
        "CometAdPrefsWAIST26ContentEngagement",
      ).getLandingPageInterestsTitle),
      (l.getAllowAdvertisingFromListSubtitle = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getAllowAdvertisingFromListSubtitle),
      (l.getAllowAdvertisingFromListTitle = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getAllowAdvertisingFromListTitle),
      (l.getDetailPageBCTParagraph = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getDetailPageBCTParagraph),
      (l.getDetailPageBCTSubParagraph = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getDetailPageBCTSubParagraph),
      (l.getDetailPageDFCAExplainParagraph = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getDetailPageDFCAExplainParagraph),
      (l.getDetailPageDFCAShareParagraph = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getDetailPageDFCAShareParagraph),
      (l.getDetailPageDFCATitle = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getDetailPageDFCATitle),
      (l.getDetailPageDFCAUploadParagraph = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getDetailPageDFCAUploadParagraph),
      (l.getDetailPageDPAExplainParagraph = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getDetailPageDPAExplainParagraph),
      (l.getDetailPageDPATitle = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getDetailPageDPATitle),
      (l.getDetailPageLookalikeParagraph = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getDetailPageLookalikeParagraph),
      (l.getDetailPageLookalikeTitle = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getDetailPageLookalikeTitle),
      (l.getDetailPageMACAExplainParagraph = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getDetailPageMACAExplainParagraph),
      (l.getDetailPageMACATitle = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getDetailPageMACATitle),
      (l.getDetailPageOfflineConversionTitle = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getDetailPageOfflineConversionTitle),
      (l.getDetailPageQRCodeCATitle = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getDetailPageQRCodeCATitle),
      (l.getDetailPageWCAExplainParagraph = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getDetailPageWCAExplainParagraph),
      (l.getDetailPageWCAExplainParagraphUpdated = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getDetailPageWCAExplainParagraphUpdated),
      (l.getDetailPageWCATitle = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getDetailPageWCATitle),
      (l.getDetailPageWCATitleUpdated = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getDetailPageWCATitleUpdated),
      (l.getDisallowAdvertisingFromListSubtitle = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getDisallowAdvertisingFromListSubtitle),
      (l.getDisallowAdvertisingFromListTitle = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getDisallowAdvertisingFromListTitle),
      (l.getLandingPageBCTTitle = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getLandingPageBCTTitle),
      (l.getLandingPageBrandedContentWithPageTitle = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getLandingPageBrandedContentWithPageTitle),
      (l.getLandingPageCollaborativeAdTitle = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getLandingPageCollaborativeAdTitle),
      (l.getLandingPageCollaborativeAdsCategoryTargetingTitle = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getLandingPageCollaborativeAdsCategoryTargetingTitle),
      (l.getLandingPageDFCATitle = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getLandingPageDFCATitle),
      (l.getLandingPageDPATitle = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getLandingPageDPATitle),
      (l.getLandingPageLookalikeTitle = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getLandingPageLookalikeTitle),
      (l.getLandingPageMACATitle = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getLandingPageMACATitle),
      (l.getLandingPageOfflineConversionTitle = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getLandingPageOfflineConversionTitle),
      (l.getLandingPageQRCodeCATitle = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getLandingPageQRCodeCATitle),
      (l.getLandingPageSearchAdTitle = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getLandingPageSearchAdTitle),
      (l.getLandingPageStoreVisitOrSalesTitle = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getLandingPageStoreVisitOrSalesTitle),
      (l.getLandingPageUnresolvedCATitle = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getLandingPageUnresolvedCATitle),
      (l.getLandingPageWCATitle = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getLandingPageWCATitle),
      (l.getOfflineConversionDetails = o(
        "CometAdPrefsWAIST26ContentAdvertiser",
      ).getOfflineConversionDetails),
      (l.getActionSectionTitle = o(
        "CometAdPrefsWAIST26ContentActions",
      ).getActionSectionTitle),
      (l.getAdPreferencesTitle = o(
        "CometAdPrefsWAIST26ContentActions",
      ).getAdPreferencesTitle),
      (l.getClearHistoryTitle = o(
        "CometAdPrefsWAIST26ContentActions",
      ).getClearHistoryTitle),
      (l.getControlAdsUsingProfileInfoSubtitle = o(
        "CometAdPrefsWAIST26ContentActions",
      ).getControlAdsUsingProfileInfoSubtitle),
      (l.getControlAdsUsingProfileInfoTitle = o(
        "CometAdPrefsWAIST26ContentActions",
      ).getControlAdsUsingProfileInfoTitle),
      (l.getControlProfileInformationTitle = o(
        "CometAdPrefsWAIST26ContentActions",
      ).getControlProfileInformationTitle),
      (l.getControlThirdPartySubtitle = o(
        "CometAdPrefsWAIST26ContentActions",
      ).getControlThirdPartySubtitle),
      (l.getControlThirdPartyTitle = o(
        "CometAdPrefsWAIST26ContentActions",
      ).getControlThirdPartyTitle),
      (l.getDetailPageWorkJobTitleParagraph = o(
        "CometAdPrefsWAIST26ContentActions",
      ).getDetailPageWorkJobTitleParagraph),
      (l.getDetailSignalsLocationParagraph = o(
        "CometAdPrefsWAIST26ContentActions",
      ).getDetailSignalsLocationParagraph),
      (l.getDetailSignalsPinCheckmarkParagraph = o(
        "CometAdPrefsWAIST26ContentActions",
      ).getDetailSignalsPinCheckmarkParagraph),
      (l.getDetailSignalsProfileParagraph = o(
        "CometAdPrefsWAIST26ContentActions",
      ).getDetailSignalsProfileParagraph),
      (l.getDetailSignalsSettingsParagraph = o(
        "CometAdPrefsWAIST26ContentActions",
      ).getDetailSignalsSettingsParagraph),
      (l.getHideAdvertiserSubtitle = o(
        "CometAdPrefsWAIST26ContentActions",
      ).getHideAdvertiserSubtitle),
      (l.getHideAdvertiserTitle = o(
        "CometAdPrefsWAIST26ContentActions",
      ).getHideAdvertiserTitle),
      (l.getLandingPageWorkEmployerTitle = o(
        "CometAdPrefsWAIST26ContentActions",
      ).getLandingPageWorkEmployerTitle),
      (l.getLandingPageWorkJobTitleTitle = o(
        "CometAdPrefsWAIST26ContentActions",
      ).getLandingPageWorkJobTitleTitle),
      (l.getLearnAboutPrivacyDescription = o(
        "CometAdPrefsWAIST26ContentActions",
      ).getLearnAboutPrivacyDescription),
      (l.getLearnAboutPrivacyTitle = o(
        "CometAdPrefsWAIST26ContentActions",
      ).getLearnAboutPrivacyTitle),
      (l.getLearnMoreText = o(
        "CometAdPrefsWAIST26ContentActions",
      ).getLearnMoreText),
      (l.getRemoveBCTSubtitle = o(
        "CometAdPrefsWAIST26ContentActions",
      ).getRemoveBCTSubtitle),
      (l.getRemoveBCTTitle = o(
        "CometAdPrefsWAIST26ContentActions",
      ).getRemoveBCTTitle),
      (l.getUndoHideAdvertiserSubtitle = o(
        "CometAdPrefsWAIST26ContentActions",
      ).getUndoHideAdvertiserSubtitle),
      (l.getUndoHideAdvertiserTitle = o(
        "CometAdPrefsWAIST26ContentActions",
      ).getUndoHideAdvertiserTitle),
      (l.getUndoRemoveBCTSubtitle = o(
        "CometAdPrefsWAIST26ContentActions",
      ).getUndoRemoveBCTSubtitle),
      (l.getUndoRemoveBCTTitle = o(
        "CometAdPrefsWAIST26ContentActions",
      ).getUndoRemoveBCTTitle),
      (l.getUpdateLanguageSettingsTitle = o(
        "CometAdPrefsWAIST26ContentActions",
      ).getUpdateLanguageSettingsTitle),
      (l.getUpdateLocationSettingsTitle = o(
        "CometAdPrefsWAIST26ContentActions",
      ).getUpdateLocationSettingsTitle),
      (l.getUpdateProfileInformationTitle = o(
        "CometAdPrefsWAIST26ContentActions",
      ).getUpdateProfileInformationTitle),
      (l.getWhatToDoWithUpsettingAdText = o(
        "CometAdPrefsWAIST26ContentActions",
      ).getWhatToDoWithUpsettingAdText),
      (l.getWhatToDoWithUpsettingAdTitle = o(
        "CometAdPrefsWAIST26ContentActions",
      ).getWhatToDoWithUpsettingAdTitle),
      (l.getWorkEmployerDetailsParagraph = o(
        "CometAdPrefsWAIST26ContentActions",
      ).getWorkEmployerDetailsParagraph),
      (l.getYouHaveOptionsToManageAdsText = o(
        "CometAdPrefsWAIST26ContentActions",
      ).getYouHaveOptionsToManageAdsText),
      (l.getYouHaveOptionsToManageAdsTitle = o(
        "CometAdPrefsWAIST26ContentActions",
      ).getYouHaveOptionsToManageAdsTitle),
      (l.getDialogTitle = c),
      (l.getPrivacyPill = d),
      (l.getLandingPageEDPBTitle = m),
      (l.getLandingPageEDPBBodyText = p),
      (l.getDSALandingPageEDPBBodyText = _),
      (l.getAdExperienceEDPBBodyText = f),
      (l.getLandingPageEduSchoolsTitle = g),
      (l.getEduSchoolDetailsParagraph = h),
      (l.getLandingPageEduStatusTitle = y),
      (l.getDetailPageEduStatusParagraph = C),
      (l.getLandingPagePredictedEduStatusTitle = b),
      (l.getDetailPagePredictedEduStatusParagraph = v),
      (l.getLandingPageLocaleTitle = S),
      (l.getDetailPageLocaleParagraph = R),
      (l.getLandingPageLocalReachTitle = L),
      (l.getDetailPageLocalReachParagraph = E),
      (l.getLandingPageLocationTitle = k),
      (l.getDetailPageLocationTitle = I),
      (l.getDetailPageLocationParagraph = T),
      (l.getLandingPageRelationshipStatusTitle = D),
      (l.getDetailPageRelationshipStatusParagraph = x),
      (l.getLandingPagePredictedRelationshipStatusTitle = $),
      (l.getDetailPagePredictedRelationshipStatusParagraph = P));
  },
  226,
);
