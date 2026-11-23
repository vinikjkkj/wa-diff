__d(
  "adsUEditorMessengerVisualEditorSelector",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAdgroupSemanticFields",
    "AdsBulkValueUtils",
    "AdsCallToActionTypesUtils",
    "AdsDestinationUtils",
    "AdsEmptyValue",
    "AdsGetStandardTemplateDefaultJSONHelperForWhatsAppAutofillMessage",
    "AdsMessengerCTMAdsAPI",
    "AdsMessengerJSONMediaFormatType",
    "AdsMessengerJSONPaths",
    "AdsMessengerOrdersDataProvider",
    "AdsMessengerPartialAutomatedCreationStateDataProvider",
    "AdsMessengerVideoPreviewStore",
    "AdsMessengerVideoStore",
    "AdsMessengerVisualEditorLandingScreenType",
    "AdsMessengerVisualEditorUtils",
    "AdsUEditorAdgroupBulkSelectors",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUEditorMessengerVisualContentEditorStoreUtils",
    "AdsUEditorSelectors",
    "AdsWhatsAppFeatureGating",
    "ClickToMessageCTWAFeatureGating",
    "adsAdgroupMessageTypeSelector",
    "adsAdgroupMessagesDestinationSectionContainerSelector",
    "adsCreateSelector",
    "adsMessengerDataModelGetLandingScreenType",
    "adsStoreToSelector",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupExistingPostCTAFieldSelector",
    "adsUEditorContentBulkPageIDSelector",
    "adsUEditorErrorSpecSelector",
    "adsUEditorExistingPostErrorSpecSelector",
    "adsUEditorHostIDSelector_ASK_AFEI_BEFORE_USING",
    "adsUEditorPhoneNumberSectionSelector",
    "adsUeditorMessagesAIGenIcebreakersParamSelectors",
    "getByPath",
    "maybeConvertGetCallsTemplateToStartConversations",
    "useAdsMessengerIsExistingPostSelector",
    "useAdsMessengerPageWelcomeMessageSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s = r("adsCreateSelector"))(
        [
          (e = o("AdsUEditorSelectors")).campaign.bulkByAccessorToJS(
            function (e) {
              return e.targeting.facebook_positions;
            },
          ),
        ],
        function (t) {
          var e = o("AdsBulkValueUtils").getUniformValueOrDefault(t, null);
          return e != null && e.includes("feed");
        },
        { name: i.id + ".isFBFeedEnabledSelector" },
      ),
      c = s(
        [
          e.campaign.bulkByAccessorToJS(function (e) {
            return e.targeting.instagram_positions;
          }),
        ],
        function (t) {
          var e = o("AdsBulkValueUtils").getUniformValueOrDefault(t, null);
          return e == null;
        },
        { name: i.id + ".noIGPlacementSelector" },
      ),
      d = s(
        [
          o("AdsUEditorAdgroupBulkSelectors").pageID,
          e.adgroup.bulkBySemanticField(
            r("AdsAdgroupSemanticFields").pageWelcomeMessage.get,
          ),
          e.campaign.bulkByAccessorToJS(function (e) {
            return e.destination_type;
          }),
          e.campaignGroup.bulkByAccessorToJS(function (e) {
            return e.objective;
          }),
          o("adsAdgroupMessageTypeSelector").adsAdgroupMessageTypeSelector,
          o("adsUeditorMessagesAIGenIcebreakersParamSelectors")
            .adsUEditorAdgroupBodyTextSelector,
          o("adsAdgroupMessagesDestinationSectionContainerSelector")
            .optimizationGoalSelector,
        ],
        function (t, n, a, i, l, s, u) {
          var e,
            c = o("AdsBulkValueUtils").getUniformValueOrDefault(n, null),
            d = r("AdsMessengerJSONMediaFormatType").TEXT,
            m = o("AdsBulkValueUtils").getUniformValueOrDefault(t, null),
            p = o("AdsBulkValueUtils").getUniformValue(
              i,
              r("AdsAPIObjectives").NONE,
            ),
            _ = (
              (e = o("AdsBulkValueUtils").getUniformValue(a)) != null
                ? e
                : o(
                    "AdsCallToActionTypesUtils",
                  ).isWhatsAppDestinationTypeForAwareness(null, p, l)
            )
              ? r("AdCampaignDestination").WHATSAPP
              : void 0;
          if (c == null || c === "") {
            var f =
                _ != null
                  ? o(
                      "AdsUEditorMessagingDestinationUtils",
                    ).getPromotedObjectTypeForDestination(_)
                  : null,
              g = o("AdsBulkValueUtils").getUniformValueOrDefault(u, null);
            return o("AdsWhatsAppFeatureGating").isAutofillEligible(
              _,
              p,
              o(
                "ClickToMessageCTWAFeatureGating",
              ).shouldEnableCTWAAIGenIcebreakers(_, s, p),
              f,
              g,
            )
              ? r(
                  "AdsGetStandardTemplateDefaultJSONHelperForWhatsAppAutofillMessage",
                )(m)
              : o("AdsMessengerVisualEditorUtils").getVisualEditorDefaultJSON(
                  m,
                  "visual_editor",
                  d,
                  _,
                );
          } else
            try {
              return JSON.parse(c);
            } catch (e) {
              return o(
                "AdsMessengerVisualEditorUtils",
              ).getVisualEditorDefaultJSON(m, "visual_editor", d, _);
            }
        },
        {
          name:
            i.id + ".adsUEditorExistingPostPageWelcomeMessageMessageSelector",
        },
      ),
      m = s(
        [
          o("useAdsMessengerPageWelcomeMessageSelector")
            .adsUEditorPageWelcomeMessageSelector,
          d,
          o("AdsUEditorAdgroupBulkSelectors").pageID,
          o("adsUEditorAdgroupExistingPostCTAFieldSelector")
            .adsUEditorAdgroupExistingPostCTAFieldSelector,
          r("adsUEditorContentBulkPageIDSelector"),
          r("adsUEditorAccountSelector"),
          r("adsUEditorErrorSpecSelector"),
          r("adsUEditorExistingPostErrorSpecSelector"),
          o("useAdsMessengerIsExistingPostSelector")
            .adsUEditorUseExistingPostSelector,
          r("adsStoreToSelector")(r("AdsMessengerVideoStore")),
          r("adsStoreToSelector")(r("AdsMessengerVideoPreviewStore")),
          r(
            "AdsMessengerPartialAutomatedCreationStateDataProvider",
          ).toFluxSelector(),
          e.campaign.bulkByAccessorToJS(function (e) {
            return e.destination_type;
          }),
          r("adsUEditorHostIDSelector_ASK_AFEI_BEFORE_USING"),
          u,
          c,
          o("adsUEditorPhoneNumberSectionSelector")
            .adsUEditorPhoneNumberSectionSelector,
          r("AdsMessengerOrdersDataProvider").toFluxSelector(),
          o("adsAdgroupMessageTypeSelector").adsAdgroupMessageTypeSelector,
          e.campaignGroup.bulkByAccessorToJS(function (e) {
            return e.is_odax_campaign_group;
          }),
          e.campaignGroup.bulkByAccessorToJS(function (e) {
            return e.objective;
          }),
          e.adgroup.bulkByAccessorToJS(function (e) {
            var t;
            return (t = e.creative) == null || (t = t.branded_content) == null
              ? void 0
              : t.promoted_page_id;
          }),
          o("adsAdgroupMessagesDestinationSectionContainerSelector")
            .optimizationGoalSelector,
        ],
        function (
          t,
          n,
          a,
          i,
          l,
          s,
          u,
          c,
          d,
          m,
          p,
          _,
          f,
          g,
          h,
          y,
          C,
          b,
          v,
          S,
          R,
          L,
          E,
        ) {
          var e, k, I, T;
          d
            ? ((k = n),
              (I = L instanceof r("AdsEmptyValue") ? a : L),
              (T = o("AdsBulkValueUtils").getUniformValueOrDefault(c, null)))
            : ((k = t),
              (I = L instanceof r("AdsEmptyValue") ? l : L),
              (T = o("AdsBulkValueUtils").getUniformValueOrDefault(u, null)));
          var D = _.introMessage,
            x = _.confirmationMessage,
            $ = r("adsMessengerDataModelGetLandingScreenType")(k),
            P = o("AdsBulkValueUtils").getUniformValueOrDefault(I, null),
            N = null,
            M = null;
          $ ===
            r("AdsMessengerVisualEditorLandingScreenType").CTM_LEAD_GEN_NEW &&
            ((N = o(
              "AdsUEditorMessengerVisualContentEditorStoreUtils",
            ).getVideoPreviewFromMessage(D, P)),
            (M = o(
              "AdsUEditorMessengerVisualContentEditorStoreUtils",
            ).getVideoPreviewFromMessage(x, P)));
          var w = o(
              "AdsUEditorMessengerVisualContentEditorStoreUtils",
            ).getVideoInfo(k, I, m),
            A = w.isLoading,
            F = w.videoErrorSpec,
            O = w.videoID,
            B = w.videoURL,
            W = F || T,
            q = !!o(
              "AdsMessengerCTMAdsAPI",
            ).getIsMessengerPlatformBotGetStartedEnabled(P),
            U = o("AdsBulkValueUtils").getUniformValue(f),
            V = o("AdsBulkValueUtils").getUniformValue(R),
            H = o("AdsBulkValueUtils").getUniformValue(S),
            G =
              (e = i.ctaSelectorData.getValue()) == null
                ? void 0
                : e.bulkPostCTAType,
            z =
              G != null
                ? o("AdsBulkValueUtils").getUniformValue(G, null)
                : null,
            j = o(
              "AdsDestinationUtils",
            ).getDestinationTypeForCTXUnifiedCreation(V, H, U, v, z),
            K =
              (j === r("AdCampaignDestination").INSTAGRAM_DIRECT ||
                j ===
                  r("AdCampaignDestination")
                    .MESSAGING_INSTAGRAM_DIRECT_WHATSAPP) &&
              h,
            Q = r("getByPath")(k, r("AdsMessengerJSONPaths").TEMPLATE_ID);
          k = r("maybeConvertGetCallsTemplateToStartConversations")(
            k,
            j,
            V,
            P,
            $,
            Q,
          );
          var X = o("AdsBulkValueUtils").getUniformValueOrDefault(E, null);
          return {
            accountID: s.account_id,
            confirmationMessage: x,
            confirmationVideoPreview: M,
            ctaType: z,
            defaultFormatType: r("AdsMessengerJSONMediaFormatType").TEXT,
            destinationType: j,
            errorSpec: W,
            followUpMessage: _.followUpMessage,
            hostID: g,
            introMessage: D,
            introVideoPreview: N,
            isCTDOnFBFeedEnabled: K,
            isExistingPost: d,
            isGetStartedEnabled: q,
            isLoading: A,
            json: k,
            messageType: v,
            noIGPlacement: y,
            ordersData: b,
            pageID: I,
            phoneNumberSectionData: C,
            questionItems: _.questionItems,
            videoID: O,
            videoURL: B,
            objective: V,
            optimizationGoal: X,
          };
        },
        { name: i.id },
      ),
      p = m;
    l.default = p;
  },
  98,
);
