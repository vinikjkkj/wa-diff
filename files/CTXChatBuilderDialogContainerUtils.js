__d(
  "CTXChatBuilderDialogContainerUtils",
  [
    "errorCode",
    "errorDesc",
    "fbt",
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsError",
    "AdsInterfacesLogger",
    "AdsMessengerConstants",
    "AdsMessengerContentEditorTabs",
    "AdsMessengerPageWelcomeMessageDataManager",
    "AdsMessengerProductInfoDataManager",
    "AdsMessengerVideoUploadResetDataAction",
    "AdsMessengerVisualEditorCustomerActionType",
    "AdsMessengerVisualEditorLoggerEvents",
    "AdsMessengerVisualEditorQRResponseType",
    "AdsMessengerVisualEditorUtils",
    "AdsUEditorAdgroupRemovePartnerAppWelcomeMessageFlowIdAction",
    "AdsUEditorAdgroupSetCallToActionTypeDataAction",
    "AdsUEditorAdgroupSetPartnerAppWelcomeMessageFlowIdAction",
    "AdsUEditorAdgroupSetPerformanceBoosterDataAction",
    "AdsUEditorHostIDs",
    "AdsUEditorMessagingDestinationUtils",
    "AdsWhatsAppFeatureGating",
    "CTXChatBuilderDialogContainerUtilsQuery.graphql",
    "CTXChatBuilderEntSyncUtils",
    "CTXChatBuilderExistingTemplateIdUtils",
    "ClickToMessageCTMPerformanceFeatureGating",
    "ClickToMessageCTWAFeatureGating",
    "ClickToMessageCTXMDOptimizationExpansionFeatureGating",
    "NudgeMessageUtils",
    "PartnerFlowMessagingConstants",
    "RelayHooks",
    "SMCReconsiderationUtils",
    "adsMessengerDataModelGetAutofillMessage",
    "adsMessengerDataModelGetCallPromptMessage",
    "adsMessengerDataModelGetIceBreakers",
    "adsMessengerDataModelGetIsCallPromptEnabled",
    "adsMessengerDataModelGetPhoneNumber",
    "adsMessengerDataModelGetQRResponse",
    "adsMessengerDataModelGetQuickReplies",
    "adsMessengerDataModelGetReengagementDisabled",
    "emptyFunction",
    "first",
    "getByPath",
    "isStringNotNullAndNotWhitespaceOnly",
    "isTruthy",
    "react",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l, s, u, c) {
    var e,
      d,
      m = d || (d = o("react")),
      p = m.useCallback,
      _ = m.useState;
    function f(e) {
      var t,
        n = e.adgroupIDs,
        o = e.adType,
        a = e.destinationType,
        i = e.messageExtensionType,
        l = e.objective,
        s = e.optimizationGoal,
        u = e.pageID,
        c = e.whatsAppBusinessAccountID;
      return (
        (t = {}),
        (t.adgroup_id = r("first")(n)),
        (t.ad_type = o),
        (t.campaign_destination_type = a),
        (t.message_extension_type = i),
        (t.objective = l),
        (t.optimization_goal = s),
        (t.page_id = u),
        (t.whatsapp_business_account_id = c != null ? c : null),
        t
      );
    }
    var g = 0,
      h = 1;
    function y(e) {
      return !e.templateName || e.templateName.length === 0
        ? new (r("AdsError"))(
            1815895,
            u._(function (e, t) {
              return e._(/*BTDS*/ "");
            }, {}),
            { level: r("AdsError").Level.WARN },
          )
        : null;
    }
    function C(t) {
      var r,
        a,
        i =
          e !== void 0
            ? e
            : (e = n("CTXChatBuilderDialogContainerUtilsQuery.graphql")),
        l = { input: { page_id: String(t.pageID) } },
        s = o("RelayHooks").useLazyLoadQuery(i, l);
      return (r =
        (a = s.welcome_message_flows) == null
          ? void 0
          : a.has_welcome_message_flows) != null
        ? r
        : !1;
    }
    function b(e, t, n) {
      var o,
        a = y(e);
      return (
        a !== null ||
        (t &&
          (e.errorSpec !== null ||
            (e.phoneNumberData.isPhoneNumberSwitchEnabled &&
              ((o = e.phoneNumberData.phoneNumberView) == null
                ? void 0
                : o.hasError()) === !0) ||
            (e.ordersData.isOrdersSwitchEnabled &&
              r(
                "AdsMessengerProductInfoDataManager",
              ).validateProductInfoHasError(e.welcomeMessageJSON)))) ||
        n ||
        e.isEditDisabled === !0
      );
    }
    function v(e, t) {
      return (
        !t &&
        !o("AdsUEditorMessagingDestinationUtils").destinationIncludesWhatsApp(
          e.destinationType,
        )
      );
    }
    function S(e) {
      var t = _(
          e === !0
            ? o("PartnerFlowMessagingConstants").SelectedJsonEditorTab.JsonCode
            : o("PartnerFlowMessagingConstants").SelectedJsonEditorTab.Flows,
        ),
        n = t[0],
        r = t[1];
      return [n, r];
    }
    function R(e, t, n) {
      if (
        n ===
          r("AdsMessengerVisualEditorCustomerActionType").AUTOFILL_MESSAGE &&
        t === r("AdCampaignDestination").WHATSAPP
      ) {
        var a,
          i = String(o("AdsMessengerConstants").DEFAULT_AUTOFILL_MESSAGE),
          l =
            e == null ||
            (a = e.text_format) == null ||
            (a = a.message) == null ||
            (a = a.autofill_message) == null
              ? void 0
              : a.content;
        return i !== l;
      }
      return !1;
    }
    function L(e, t) {
      t !== r("AdsMessengerVisualEditorCustomerActionType").ICE_BREAKERS &&
        r("isTruthy")(
          e.welcomeMessageJSON.ai_generated_icebreaker_toggle_enabled,
        ) &&
        (R(e.welcomeMessageJSON, e.destinationType, t) ||
          (r("setByPath")(
            e.welcomeMessageJSON,
            ["ai_generated_icebreaker_toggle_enabled"],
            !1,
          ),
          e.onJSONChange(e.welcomeMessageJSON)));
    }
    function E(e, t, n, a, i) {
      if (!(e == null || e.length === 0)) {
        var l = e.some(function (e) {
          return e != null && e.response === "";
        });
        if (l) {
          var s = e.some(function (e) {
            return e != null && e.response != null && e.response.trim() !== "";
          });
          if (!s) {
            var u = o(
              "ClickToMessageCTMPerformanceFeatureGating",
            ).shouldEnableCTMAIGenAutomatedResponses(t, n, a);
            if (u) {
              var c;
              r("AdsInterfacesLogger").log({
                eventName: r("AdsMessengerVisualEditorLoggerEvents")
                  .CTM_AI_GEN_AR_REMOVE,
                data:
                  ((c = {}),
                  (c.adgroup_id = r("first")(i != null ? i : [])),
                  c),
              });
            }
          }
        }
      }
    }
    function k(e, t, n, a, l, s, u, c, d, m) {
      return p(
        function () {
          var c, p;
          if (m === !0) {
            d == null || d();
            return;
          }
          if (
            (L(e, n),
            t(!0),
            r("AdsMessengerVideoUploadResetDataAction").dispatch(
              {},
              {
                line: "447",
                module: "CTXChatBuilderDialogContainerUtils.js",
                moduleID: i.id,
              },
            ),
            e.errorSpec == null)
          ) {
            if (
              e.phoneNumberData.isPhoneNumberSwitchEnabled &&
              ((c = e.phoneNumberData.phoneNumberView) == null
                ? void 0
                : c.hasError()) === !0
            ) {
              r("AdsInterfacesLogger").log({
                eventName: r("AdsMessengerVisualEditorLoggerEvents")
                  .CTM_CALL_ERROR_SHOWN,
              });
              return;
            }
            var _ = o(
              "ClickToMessageCTMPerformanceFeatureGating",
            ).enablePerformanceBoosterForDestination(e.destinationType);
            if (
              (_ &&
                r("AdsUEditorAdgroupSetPerformanceBoosterDataAction").dispatch(
                  {
                    adgroupIDs: e.adgroupIDs,
                    hostID: r("AdsUEditorHostIDs").EDITING,
                    isPerformanceBoosterEnabled: _,
                  },
                  {
                    line: "468",
                    module: "CTXChatBuilderDialogContainerUtils.js",
                    moduleID: i.id,
                  },
                ),
              !(
                e.ordersData.isOrdersSwitchEnabled &&
                r(
                  "AdsMessengerProductInfoDataManager",
                ).validateProductInfoHasError(e.welcomeMessageJSON)
              ))
            ) {
              var f = r("adsMessengerDataModelGetCallPromptMessage")(
                e.welcomeMessageJSON,
              );
              if (
                f !== void 0 &&
                f !==
                  String(
                    o("AdsMessengerConstants")
                      .DEFAULT_START_CONVERSATIONS_CALL_PROMPT_MESSAGE,
                  )
              ) {
                var g;
                r("AdsInterfacesLogger").log({
                  eventName: "ctm_call_prompt_edit_call_invitation",
                  data:
                    ((g = {}),
                    (g.adgroup_id = r("first")(e.adgroupIDs)),
                    (g.page_id = e.pageID),
                    g),
                });
              }
              if (
                (r("adsMessengerDataModelGetIsCallPromptEnabled")(
                  e.welcomeMessageJSON,
                ) &&
                  e.callPromptUpdateCTAEligible === !0 &&
                  r("AdsUEditorAdgroupSetCallToActionTypeDataAction").dispatch(
                    {
                      callToActionType: "CONTACT_US",
                      hostID: r("AdsUEditorHostIDs").EDITING,
                      adgroupIDs: e.adgroupIDs,
                    },
                    {
                      line: "510",
                      module: "CTXChatBuilderDialogContainerUtils.js",
                      moduleID: i.id,
                    },
                  ),
                r("AdsInterfacesLogger").log({
                  eventName: e.isExistingPost
                    ? r("AdsMessengerVisualEditorLoggerEvents")
                        .CTM_EP_FINISH_WITHOUT_SAVING
                    : r("AdsMessengerVisualEditorLoggerEvents")
                        .CTM_FINISH_WITHOUT_SAVING,
                  data:
                    ((p = {}),
                    (p.campaign_destination_type = e.destinationType),
                    (p.media_format = l),
                    p),
                }),
                (a === !1 || s === !1) &&
                  r(
                    "AdsUEditorAdgroupRemovePartnerAppWelcomeMessageFlowIdAction",
                  ).dispatch(
                    {
                      adgroupIDs: e.adgroupIDs,
                      hostID: r("AdsUEditorHostIDs").EDITING,
                    },
                    {
                      line: "529",
                      module: "CTXChatBuilderDialogContainerUtils.js",
                      moduleID: i.id,
                    },
                  ),
                s &&
                  e.selectedApp != null &&
                  e.selectedFlow != null &&
                  (r(
                    "AdsUEditorAdgroupSetPartnerAppWelcomeMessageFlowIdAction",
                  ).dispatch(
                    {
                      adgroupIDs: e.adgroupIDs,
                      destinationType: e.destinationType,
                      flowID: e.selectedFlow != null ? e.selectedFlow.id : "",
                      hostID: r("AdsUEditorHostIDs").EDITING,
                    },
                    {
                      line: "539",
                      module: "CTXChatBuilderDialogContainerUtils.js",
                      moduleID: i.id,
                    },
                  ),
                  r("AdsInterfacesLogger").log({
                    eventName: "ctx_partner_app_flow_selected",
                  })),
                e.onHide(),
                u != null &&
                  !r("adsMessengerDataModelGetReengagementDisabled")(
                    e.welcomeMessageJSON,
                  ))
              ) {
                var h;
                (o("SMCReconsiderationUtils").logSMCReconsiderationAMEvents(
                  "finish_with_reconsideration_on",
                  e.pageID,
                  e.accountID,
                  r("first")(e.adgroupIDs),
                ),
                  ((h = e.welcomeMessageJSON.reengagement) == null
                    ? void 0
                    : h.include_products) === !0 &&
                    o("SMCReconsiderationUtils").logSMCReconsiderationAMEvents(
                      "finish_with_reconsideration_xma_on",
                      e.pageID,
                      e.accountID,
                      r("first")(e.adgroupIDs),
                    ));
              }
              o("NudgeMessageUtils").logSavingEventForNudge(
                e.destinationType,
                e.pageID,
                e.isEditTemplate,
              );
            }
          }
        },
        [n, a, u, m, s, l, d, e, t],
      );
    }
    function I(e, t, n, r, a, i) {
      return p(
        function () {
          (t(!0),
            n(!0),
            !(e.errorSpec || e.pageID == null) &&
              o("AdsMessengerVisualEditorUtils").getJSONSend(
                e.welcomeMessageJSON,
                e.pageID,
                function () {},
                i,
                a,
                e.objectStoryID,
                e.adgroupIDs[0],
                r != null ? r : e.destinationType,
              ));
        },
        [
          a,
          i,
          e.adgroupIDs,
          e.destinationType,
          e.errorSpec,
          e.objectStoryID,
          e.pageID,
          e.welcomeMessageJSON,
          r,
          t,
          n,
        ],
      );
    }
    function T(e, t) {
      return p(
        function () {
          (e(!1), t(!0));
        },
        [e, t],
      );
    }
    function D(e, t) {
      return p(
        function () {
          var n = c._(/*BTDS*/ "");
          (e(n), t(!1));
        },
        [t, e],
      );
    }
    function x(e, t, n) {
      return p(
        function (a) {
          var i = a;
          if (
            o("AdsMessengerVisualEditorUtils").getWelcomeMessageDataType(
              e.welcomeMessageJSON,
            ) === "JSON_SETUP"
          ) {
            var l = e.welcomeMessageJSON;
            (r("setByPath")(l, ["message_data"], a), (i = l));
          }
          (e.onJSONChange(i), t && n(!1));
        },
        [t, e, n],
      );
    }
    function $(e, t) {
      return p(
        function () {
          if (!e.errorSpec) {
            var n = e.pageID;
            if (n == null) return;
            o("AdsMessengerVisualEditorUtils").getJSONSend(
              e.welcomeMessageJSON,
              n,
              function () {},
              t,
              function () {},
              e.objectStoryID,
            );
          }
        },
        [t, e.errorSpec, e.objectStoryID, e.pageID, e.welcomeMessageJSON],
      );
    }
    function P(e, t) {
      return p(
        function () {
          e(!t);
        },
        [t, e],
      );
    }
    function N(e) {
      (r("getByPath")(e, ["is_visible"]) === !1 &&
        r("setByPath")(e, ["is_visible"], !0),
        r("getByPath")(e, ["is_user_editing"]) === !0 &&
          r("setByPath")(e, ["is_user_editing"], !1),
        r("getByPath")(e, ["show_none_action_guidance_card"]) === !0 &&
          r("setByPath")(e, ["show_none_action_guidance_card"], !1));
    }
    function M(e, t) {
      if (e != null)
        if (
          r("adsMessengerDataModelGetReengagementDisabled")(
            t.welcomeMessageJSON,
          )
        )
          o("SMCReconsiderationUtils").logSMCReconsiderationAMEvents(
            "save_with_reconsideration_off",
            t.pageID,
            t.accountID,
            r("first")(t.adgroupIDs),
          );
        else {
          var n;
          (o("SMCReconsiderationUtils").logSMCReconsiderationAMEvents(
            "save_with_reconsideration_on",
            t.pageID,
            t.accountID,
            r("first")(t.adgroupIDs),
          ),
            ((n = t.welcomeMessageJSON.reengagement) == null
              ? void 0
              : n.include_products) === !0 &&
              o("SMCReconsiderationUtils").logSMCReconsiderationAMEvents(
                "save_with_reconsideration_xma_on",
                t.pageID,
                t.accountID,
                r("first")(t.adgroupIDs),
              ));
        }
    }
    function w(e, t, n, a) {
      var l = r("adsMessengerDataModelGetCallPromptMessage")(e);
      if (
        l !== void 0 &&
        l !==
          String(
            o("AdsMessengerConstants")
              .DEFAULT_START_CONVERSATIONS_CALL_PROMPT_MESSAGE,
          )
      ) {
        var s;
        r("AdsInterfacesLogger").log({
          eventName: "ctm_call_prompt_edit_call_invitation",
          data: ((s = {}), (s.adgroup_id = r("first")(n)), (s.page_id = a), s),
        });
      }
      r("adsMessengerDataModelGetIsCallPromptEnabled")(e) &&
        t === !0 &&
        r("AdsUEditorAdgroupSetCallToActionTypeDataAction").dispatch(
          {
            callToActionType: "CONTACT_US",
            hostID: r("AdsUEditorHostIDs").EDITING,
            adgroupIDs: n,
          },
          {
            line: "805",
            module: "CTXChatBuilderDialogContainerUtils.js",
            moduleID: i.id,
          },
        );
      var u = r("adsMessengerDataModelGetPhoneNumber")(e);
      u != null &&
        r("AdsInterfacesLogger").log({
          eventName: r("AdsMessengerVisualEditorLoggerEvents")
            .CTM_CALL_TEMPLATE_CREATED_WITH_PHONE_NUMBER,
          message: u,
        });
    }
    function A(e, t, n, a, i, l) {
      if (e === r("AdCampaignDestination").WHATSAPP) {
        var s = o("AdsWhatsAppFeatureGating").isAutofillEligible(
          e,
          t,
          o("ClickToMessageCTWAFeatureGating").shouldEnableCTWAAIGenIcebreakers(
            e,
            a,
            t,
          ),
          o(
            "AdsUEditorMessagingDestinationUtils",
          ).getPromotedObjectTypeForDestination(e),
          n,
        );
        if (s) {
          if (
            l === r("AdsMessengerVisualEditorCustomerActionType").ICE_BREAKERS
          ) {
            r("AdsInterfacesLogger").log({
              eventName: "ctwa_template_created_with_icebreaker",
            });
            return;
          }
          if (
            l ===
            r("AdsMessengerVisualEditorCustomerActionType").AUTOFILL_MESSAGE
          ) {
            var u =
              t === r("AdsAPIObjectives").OUTCOME_AWARENESS ||
              t === r("AdsAPIObjectives").OUTCOME_SALES;
            if (i) {
              (u &&
                r("AdsInterfacesLogger").log({
                  eventName:
                    "ctwa_template_created_with_customized_autofill_message_sales_awareness",
                }),
                r("AdsInterfacesLogger").log({
                  eventName:
                    "ctwa_template_created_with_customized_autofill_message",
                }));
              return;
            }
            (u &&
              r("AdsInterfacesLogger").log({
                eventName:
                  "ctwa_template_created_with_default_autofill_message_sales_awareness",
              }),
              r("AdsInterfacesLogger").log({
                eventName:
                  "ctwa_template_created_with_default_autofill_message",
              }));
          }
        }
      }
    }
    function F(e, t, n) {
      var o = "";
      switch (n) {
        case r("AdsMessengerVisualEditorQRResponseType").TEXT:
          o =
            r("adsMessengerDataModelGetQRResponse")(e, t) === ""
              ? r("AdsMessengerVisualEditorLoggerEvents")
                  .CTM_SAVE_QR_NULL_TEXT_RESPONSE
              : r("AdsMessengerVisualEditorLoggerEvents")
                  .CTM_SAVE_QR_TEXT_RESPONSE;
          break;
        case r("AdsMessengerVisualEditorQRResponseType").BOT:
          o = r(
            "AdsMessengerVisualEditorLoggerEvents",
          ).CTM_SAVE_QR_BOT_RESPONSE;
          break;
        case r("AdsMessengerVisualEditorQRResponseType").NONE:
          o = r(
            "AdsMessengerVisualEditorLoggerEvents",
          ).CTM_SAVE_QR_NONE_RESPONSE;
      }
      return o;
    }
    function O(e, t, n, a, l, s, u, c, d, m, _) {
      return p(
        function () {
          var c, p, f, g;
          if (m === !0) {
            d == null || d();
            return;
          }
          if (
            (L(e, t),
            n(!0),
            r("AdsMessengerVideoUploadResetDataAction").dispatch(
              {},
              {
                line: "932",
                module: "CTXChatBuilderDialogContainerUtils.js",
                moduleID: i.id,
              },
            ),
            !e.errorSpec)
          ) {
            if (
              e.phoneNumberData.isPhoneNumberSwitchEnabled &&
              ((c = e.phoneNumberData.phoneNumberView) == null
                ? void 0
                : c.hasError()) === !0
            ) {
              r("AdsInterfacesLogger").log({
                eventName: r("AdsMessengerVisualEditorLoggerEvents")
                  .CTM_CALL_ERROR_SHOWN,
              });
              return;
            }
            if (
              !(
                e.ordersData.isOrdersSwitchEnabled &&
                r(
                  "AdsMessengerProductInfoDataManager",
                ).validateProductInfoHasError(e.welcomeMessageJSON)
              )
            ) {
              var h = e.welcomeMessageJSON;
              N(h);
              var y = r("adsMessengerDataModelGetIceBreakers")(h);
              (r("setByPath")(
                h,
                ["performance_booster_enabled"],
                o(
                  "ClickToMessageCTMPerformanceFeatureGating",
                ).enablePerformanceBoosterForDestination(e.destinationType),
              ),
                o("AdsUEditorMessagingDestinationUtils").isCTM(
                  e.destinationType,
                ) &&
                  r("setByPath")(
                    h,
                    ["ctm_deprecate_quick_replies_enabled"],
                    o(
                      "ClickToMessageCTMPerformanceFeatureGating",
                    ).deprecateQuickReplies(),
                  ));
              var C = JSON.stringify(h);
              if (_ === !0) e.onHide();
              else {
                var b, v;
                (e.onHide(),
                  r(
                    "AdsMessengerPageWelcomeMessageDataManager",
                  ).createCustomTemplate(
                    e.adgroupIDs,
                    String(e.pageID),
                    C,
                    e.templateName,
                    r("AdsUEditorHostIDs").EDITING,
                    e.accountID,
                    e.isEditTemplate,
                    e.isExistingPost,
                    void 0,
                    r("emptyFunction"),
                    e.destinationType,
                    e.loggingData,
                  ),
                  o("CTXChatBuilderEntSyncUtils").fireEntSyncMutation(
                    h,
                    e.pageID,
                    e.accountID,
                    e.templateName,
                    (b = e.isEditTemplate) != null ? b : !1,
                    [].concat(e.adgroupIDs),
                    e.destinationType,
                    t,
                    (v = e.existingTemplateId) != null ? v : null,
                    r("AdsUEditorHostIDs").EDITING,
                    "CTXChatBuilderDialogContainerUtils.useGetOnClickFinishAndSaveCallback",
                    "AM_SECTION_TEMPLATE_SWITCH",
                  ));
              }
              var S = r("adsMessengerDataModelGetQuickReplies")(h),
                R = r("adsMessengerDataModelGetAutofillMessage")(h);
              !o("AdsMessengerVisualEditorUtils").isVisualEditorData(h) ||
                (S == null && y == null && R == null) ||
                (S == null ||
                  S.map(function (e, t) {
                    if (e) {
                      var n = F(h, t, e.response_type);
                      r("AdsInterfacesLogger").log({ eventName: n });
                    }
                  }),
                r("AdsInterfacesLogger").log({
                  eventName: r("AdsMessengerVisualEditorLoggerEvents")
                    .CTM_NUMBER_OF_QUICK_REPLIES,
                  metadata: {
                    number_of_quickreplies:
                      (p = S == null ? void 0 : S.length) != null ? p : 0,
                  },
                }),
                y == null ||
                  y.map(function (e) {
                    if (
                      r("isStringNotNullAndNotWhitespaceOnly")(
                        e == null ? void 0 : e.title,
                      )
                    ) {
                      var t = !r("isStringNotNullAndNotWhitespaceOnly")(
                        e.response,
                      );
                      r("AdsInterfacesLogger").log({
                        eventName: r("AdsMessengerVisualEditorLoggerEvents")
                          .CTM_SAVE_IB_RESPONSE,
                        data: { is_response_empty: t },
                      });
                    }
                  }),
                E(y, e.destinationType, e.adCaption, e.postID, e.adgroupIDs),
                w(
                  e.welcomeMessageJSON,
                  e.callPromptUpdateCTAEligible,
                  e.adgroupIDs,
                  e.pageID,
                ),
                e.editorTab !==
                  r("AdsMessengerContentEditorTabs").USE_EXISTING &&
                  _ !== !0 &&
                  (e.onTabChange(
                    r("AdsMessengerContentEditorTabs").USE_EXISTING,
                  ),
                  e.onCreateNewTemplate && e.onCreateNewTemplate()),
                r("AdsInterfacesLogger").log({
                  eventName: r("AdsMessengerVisualEditorLoggerEvents")
                    .CTM_EP_SAVE_TEMPLATE,
                  data:
                    ((f = {}),
                    (f.campaign_destination_type = e.destinationType),
                    (f.page_id = e.pageID),
                    (f.media_format = a),
                    (f.source = e.isExistingPost
                      ? "existing_post"
                      : "new_template"),
                    f),
                }),
                A(
                  e.destinationType,
                  e.objective,
                  (g = e.loggingData) == null ? void 0 : g.optimization_goal,
                  e.adCaption,
                  !!r("getByPath")(e.welcomeMessageJSON, ["user_edit"]),
                  t,
                ),
                (l === !1 || s === !1) &&
                  r(
                    "AdsUEditorAdgroupRemovePartnerAppWelcomeMessageFlowIdAction",
                  ).dispatch(
                    {
                      adgroupIDs: e.adgroupIDs,
                      hostID: r("AdsUEditorHostIDs").EDITING,
                    },
                    {
                      line: "1115",
                      module: "CTXChatBuilderDialogContainerUtils.js",
                      moduleID: i.id,
                    },
                  ),
                M(u, e),
                o("NudgeMessageUtils").logSavingEventForNudge(
                  e.destinationType,
                  e.pageID,
                  e.isEditTemplate,
                ));
            }
          }
        },
        [m, e, t, n, _, l, s, u, d, a],
      );
    }
    function B(e) {
      return p(
        function (t) {
          e(t);
        },
        [e],
      );
    }
    function W(e) {
      return p(
        function (t) {
          if (e.setSelectedFlow) {
            e.setSelectedFlow(t);
            var n = t == null ? void 0 : t.welcome_message_flow;
            if (n != null) {
              var r = JSON.parse(n),
                o = {};
              ((o.message_data = r), (o.type = "JSON_SETUP"));
              var a = o;
              e.onJSONChange(a);
            }
          }
        },
        [e],
      );
    }
    function q(e, t, n) {
      return (
        e.isUnifiedCreation ||
        ((e.objective === r("AdsAPIObjectives").LINK_CLICKS ||
          e.objective === r("AdsAPIObjectives").OUTCOME_AWARENESS) &&
          o("AdsUEditorMessagingDestinationUtils").isSingleDestination(
            e.destinationType,
          )) ||
        (o(
          "ClickToMessageCTXMDOptimizationExpansionFeatureGating",
        ).enableUnifiedCreationCTXMDL1(e.objective, t, e.isExistingPost) &&
          o("AdsUEditorMessagingDestinationUtils").isMultiDestination(n))
      );
    }
    function U(e, t) {
      try {
        var n = JSON.parse(t);
        r("setByPath")(
          n,
          ["performance_booster_enabled"],
          o(
            "ClickToMessageCTMPerformanceFeatureGating",
          ).enablePerformanceBoosterForDestination(e),
        );
        var a = JSON.stringify(n);
        return a;
      } catch (e) {
        return t;
      }
    }
    ((l.getChatBuilderLoggingData = f),
      (l.CHAT_BUILDER_DIALOG_SELECT_TEMPLATE_START_PAGE = g),
      (l.CHAT_BUILDER_DIALOG_EDIT_TEMPLATE_END_PAGE = h),
      (l.getChatBuilderSaveExistingTemplateId = o(
        "CTXChatBuilderExistingTemplateIdUtils",
      ).getChatBuilderSaveExistingTemplateId),
      (l.getDialogContainerTemplateError = y),
      (l.useGetHasWelcomeMessageFlows = C),
      (l.getDialogContainerFooterButtonDisabled = b),
      (l.getShouldSimplifyJsonAdCreation = v),
      (l.useGetSelectedJSONEditorTabState = S),
      (l.useGetOnClickFinishCallback = k),
      (l.useGetOnClickPreviewCallback = I),
      (l.useGetOnJSONSendSuccessCallback = T),
      (l.useGetOnJSONError = D),
      (l.useGetOnJSONChangeCallback = x),
      (l.useGetOnPreviewButtonClickedCallback = $),
      (l.useGetOnToggleSaveCheckboxCallback = P),
      (l.useGetOnClickFinishAndSaveCallback = O),
      (l.useGetOnSelectedTabChangeCallback = B),
      (l.useGetSetSelectedFlowCallback = W),
      (l.getIsUnifiedCreationStyleEnabled = q),
      (l.setPerformanceBoosterEligibility = U));
  },
  226,
);
