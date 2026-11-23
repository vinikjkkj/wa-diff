__d(
  "CTXChatBuilderEditSectionUtils",
  [
    "fbt",
    "AdsAPIObjectives",
    "AdsGetAIGenIcebreakersUtils",
    "AdsGetStandardTemplateDefaultJSONForWhatsAppFlows",
    "AdsGetStandardTemplateDefaultJSONWithDestination",
    "AdsInterfacesLogger",
    "AdsMessengerLeadGenDefaultSwitchBackAction",
    "AdsMessengerPartialAutomatedCreationStateDataAction",
    "AdsMessengerPartialAutomatedCreationTypes",
    "AdsMessengerPartialAutomatedLoggerEvents",
    "AdsMessengerPhoneNumberDataManager",
    "AdsMessengerUtils",
    "AdsMessengerVisualEditorLandingScreenType",
    "AdsMessengerVisualEditorLoggerEvents",
    "AdsMessengerVisualEditorUtils",
    "AdsUEditorAdgroupRemovePartnerAppWelcomeMessageFlowIdAction",
    "AdsUEditorAdgroupSetPageWelcomeMessageDataAction",
    "AdsUEditorAdgroupSetPartnerAppWelcomeMessageFlowIdAction",
    "AdsUEditorHostIDs",
    "CTXChatBuilderFeatureGating",
    "CallPromptFeatureGating",
    "ClickToMessageAIGenEligibilityUtils",
    "DateTime",
    "MessageTemplateWithClickToWhatsAppFlowsMessageSectionUtil",
    "MessengerAdsPartialAutomatedStrings",
    "adsMessengerDataModelGetTemplateVersion",
    "maybeDefaultCallPromptInStartConversationsTemplate",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = (e || (e = o("react"))).useCallback;
    function c(
      e,
      t,
      n,
      a,
      l,
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
      k,
      I,
      T,
      D,
    ) {
      return u(
        function (u) {
          if (
            u ===
            o("AdsMessengerPartialAutomatedCreationTypes")
              .CreateNewSelectorValue.JSON
          ) {
            if (e != null) {
              r(
                "AdsUEditorAdgroupSetPartnerAppWelcomeMessageFlowIdAction",
              ).dispatch(
                {
                  adgroupIDs: t,
                  destinationType: n,
                  flowID: e != null ? e.id : "",
                  hostID: r("AdsUEditorHostIDs").EDITING,
                },
                {
                  line: "106",
                  module: "CTXChatBuilderEditSectionUtils.js",
                  moduleID: i.id,
                },
              );
              var x = e == null ? void 0 : e.welcome_message_flow,
                $ = JSON.parse(x);
              a($);
            } else a(o("AdsMessengerVisualEditorUtils").getDefaultJSON(), l);
            (r("AdsInterfacesLogger").log({
              eventName: r("AdsMessengerVisualEditorLoggerEvents")
                .CTM_ADVANCED_JSON_SETUP,
              data: { objective: c },
            }),
              o("CTXChatBuilderFeatureGating").enableMessageTemplateRedesign(
                n,
                d,
                c,
                C,
                !1,
              ) &&
                y(
                  o(
                    "AdsMessengerVisualEditorUtils",
                  ).getDefaultJSONTemplateName(),
                ));
          } else if (
            u ===
            o("AdsMessengerPartialAutomatedCreationTypes")
              .CreateNewSelectorValue.CREATE_NEW
          ) {
            var P,
              N = o(
                "AdsGetAIGenIcebreakersUtils",
              ).triggerAIGenContentDefaulting(
                d,
                m,
                p,
                n,
                _,
                r("AdsUEditorHostIDs").EDITING,
                t,
                null,
                T,
                c,
                D,
                null,
                null,
                null,
                null,
                h,
              ),
              M = o(
                "ClickToMessageAIGenEligibilityUtils",
              ).shouldEnableAIGenIcebreakers(n, _, m),
              w = r("AdsGetStandardTemplateDefaultJSONWithDestination")(
                d,
                n,
                c,
                N,
                M,
              );
            (o("CallPromptFeatureGating").eligibleForCallPromptForCTXAdsAM(
              c,
              n,
              f,
              g,
            ) &&
              r("maybeDefaultCallPromptInStartConversationsTemplate")(w, g, h),
              a(
                babelHelpers.extends({}, w, {
                  landing_screen_type: r(
                    "AdsMessengerVisualEditorLandingScreenType",
                  ).WELCOME_MESSAGE,
                }),
                l,
              ),
              y(
                o(
                  "AdsMessengerVisualEditorUtils",
                ).getDefaultStartConversationsTemplateName(),
              ),
              r("AdsMessengerPhoneNumberDataManager").clearPhoneNumber(),
              r("AdsInterfacesLogger").log({
                eventName: r("AdsMessengerVisualEditorLoggerEvents")
                  .CTM_SELECT_CUSTOM_WELCOME_MESSAGE,
                data: ((P = {}), (P.campaign_destination_type = n), P),
              }));
          } else if (
            u ===
            o("AdsMessengerPartialAutomatedCreationTypes")
              .CreateNewSelectorValue.CTM_LEAD_GEN
          ) {
            var A = r("AdsGetStandardTemplateDefaultJSONWithDestination")(
              d,
              n,
              c,
            );
            (b != null
              ? ((A.landing_screen_type = r(
                  "AdsMessengerVisualEditorLandingScreenType",
                ).LITE_WEIGHT_AUTOMATED_CHAT),
                (A.ctm_lead_gen_template_id = b),
                r("AdsUEditorAdgroupSetPageWelcomeMessageDataAction").dispatch(
                  {
                    hostID: r("AdsUEditorHostIDs").EDITING,
                    adgroupIDs: t,
                    pageWelcomeMessage: JSON.stringify(A),
                  },
                  {
                    line: "212",
                    module: "CTXChatBuilderEditSectionUtils.js",
                    moduleID: i.id,
                  },
                ))
              : (r(
                  "AdsMessengerPartialAutomatedCreationStateDataAction",
                ).dispatch(
                  o(
                    "MessengerAdsPartialAutomatedStrings",
                  ).getDefaultCTMLeadGenForm(),
                  {
                    line: "218",
                    module: "CTXChatBuilderEditSectionUtils.js",
                    moduleID: i.id,
                  },
                ),
                a(
                  babelHelpers.extends({}, A, {
                    landing_screen_type: r(
                      "AdsMessengerVisualEditorLandingScreenType",
                    ).CTM_LEAD_GEN_NEW,
                  }),
                  l,
                )),
              r("AdsInterfacesLogger").log({
                eventName: o("AdsMessengerPartialAutomatedLoggerEvents")
                  .CTM_SELECT_LEAD_GEN,
                data: { objective: c },
              }));
            var F =
              s._(/*BTDS*/ "").toString() +
              " " +
              r("DateTime").localNow().format("m-d-y");
            y(F);
          } else if (
            u ===
            o("AdsMessengerPartialAutomatedCreationTypes")
              .CreateNewSelectorValue.CTD_LEAD_GEN
          ) {
            var O = r("AdsGetStandardTemplateDefaultJSONWithDestination")(
              d,
              n,
              c,
            );
            (b != null
              ? ((O.landing_screen_type = r(
                  "AdsMessengerVisualEditorLandingScreenType",
                ).LITE_WEIGHT_AUTOMATED_CHAT),
                (O.ctm_lead_gen_template_id = b),
                r("AdsUEditorAdgroupSetPageWelcomeMessageDataAction").dispatch(
                  {
                    hostID: r("AdsUEditorHostIDs").EDITING,
                    adgroupIDs: t,
                    pageWelcomeMessage: JSON.stringify(O),
                  },
                  {
                    line: "256",
                    module: "CTXChatBuilderEditSectionUtils.js",
                    moduleID: i.id,
                  },
                ))
              : (r(
                  "AdsMessengerPartialAutomatedCreationStateDataAction",
                ).dispatch(
                  o(
                    "MessengerAdsPartialAutomatedStrings",
                  ).getDefaultCTDLeadGenForm(),
                  {
                    line: "262",
                    module: "CTXChatBuilderEditSectionUtils.js",
                    moduleID: i.id,
                  },
                ),
                a(
                  babelHelpers.extends({}, O, {
                    landing_screen_type: r(
                      "AdsMessengerVisualEditorLandingScreenType",
                    ).CTM_LEAD_GEN_NEW,
                  }),
                  l,
                )),
              r("AdsInterfacesLogger").log({
                eventName: o("AdsMessengerPartialAutomatedLoggerEvents")
                  .CTD_SELECT_LEAD_GEN,
                data: { objective: c },
              }));
            var B =
              s._(/*BTDS*/ "").toString() +
              " " +
              r("DateTime").localNow().format("m-d-y");
            y(B);
          } else if (
            u ===
            o("AdsMessengerPartialAutomatedCreationTypes")
              .CreateNewSelectorValue.CALL_PROMPT
          ) {
            var W = o("AdsMessengerVisualEditorUtils").getDefaultCallPromptJSON(
              d,
            );
            a(W);
          } else if (
            u ===
            o("AdsMessengerPartialAutomatedCreationTypes")
              .CreateNewSelectorValue.CTWA_FLOWS
          ) {
            var q = r("AdsGetStandardTemplateDefaultJSONForWhatsAppFlows")(
              C,
              g,
              d,
              n,
              c,
              h,
              k,
              I,
            );
            (y(
              o(
                "MessageTemplateWithClickToWhatsAppFlowsMessageSectionUtil",
              ).getDefaultCTWAFlowsTemplateName(),
            ),
              a(q));
          }
          (u !==
            o("AdsMessengerPartialAutomatedCreationTypes")
              .CreateNewSelectorValue.MARKETING_MESSAGES && v(!1),
            u !==
              o("AdsMessengerPartialAutomatedCreationTypes")
                .CreateNewSelectorValue.CTM_LEAD_GEN &&
              S === !1 &&
              (r("AdsMessengerLeadGenDefaultSwitchBackAction").dispatch(
                { adgroupIDs: t },
                {
                  line: "315",
                  module: "CTXChatBuilderEditSectionUtils.js",
                  moduleID: i.id,
                },
              ),
              o("AdsMessengerUtils").bumpCount(
                p,
                r("AdsAPIObjectives").MESSAGES,
              )),
            u !==
              o("AdsMessengerPartialAutomatedCreationTypes")
                .CreateNewSelectorValue.JSON &&
              (r(
                "AdsUEditorAdgroupRemovePartnerAppWelcomeMessageFlowIdAction",
              ).dispatch(
                { adgroupIDs: t, hostID: r("AdsUEditorHostIDs").EDITING },
                {
                  line: "323",
                  module: "CTXChatBuilderEditSectionUtils.js",
                  moduleID: i.id,
                },
              ),
              L(null),
              R(null)),
            E(u));
        },
        [
          p,
          _,
          t,
          b,
          n,
          S,
          c,
          a,
          y,
          h,
          g,
          d,
          C,
          f,
          m,
          e,
          R,
          L,
          E,
          l,
          v,
          k,
          I,
          T,
          D,
        ],
      );
    }
    function d(e, t, n, o, a, l, s, c, d, m, p, _, f, g) {
      return u(
        function () {
          (e && e(!1), _ && _(!1));
          var u = t,
            h = null;
          try {
            h = JSON.parse(u);
          } catch (e) {
            h = r("AdsGetStandardTemplateDefaultJSONWithDestination")(n, o, a);
          }
          (d(h),
            r("AdsMessengerPhoneNumberDataManager").parsePhoneNumberFromJSON(u),
            l != null && (s && s(null), c && c(null)),
            m != null && p && p(m),
            g != null &&
              g !== "" &&
              r(
                "AdsUEditorAdgroupSetPartnerAppWelcomeMessageFlowIdAction",
              ).dispatch(
                {
                  adgroupIDs: f != null ? f : [],
                  destinationType: o,
                  flowID: g,
                  hostID: r("AdsUEditorHostIDs").EDITING,
                },
                {
                  line: "410",
                  module: "CTXChatBuilderEditSectionUtils.js",
                  moduleID: i.id,
                },
              ));
        },
        [f, o, a, m, t, d, g, n, _, l, p, s, c, e],
      );
    }
    function m(e, t, n, o, a, l, s, c, d) {
      return u(
        function () {
          var u;
          (r("AdsInterfacesLogger").log({
            eventName: r("AdsMessengerVisualEditorLoggerEvents")
              .CTM_CANCEL_MESSAGE_TEMPLATE,
            data: ((u = {}), (u.campaign_destination_type = e), u),
          }),
            t === n
              ? (a(!1),
                r("AdsMessengerPhoneNumberDataManager").clearPhoneNumber(),
                l != null && s && s(l),
                d != null &&
                  d !== "" &&
                  r(
                    "AdsUEditorAdgroupSetPartnerAppWelcomeMessageFlowIdAction",
                  ).dispatch(
                    {
                      adgroupIDs: c != null ? c : [],
                      destinationType: e,
                      flowID: d,
                      hostID: r("AdsUEditorHostIDs").EDITING,
                    },
                    {
                      line: "470",
                      module: "CTXChatBuilderEditSectionUtils.js",
                      moduleID: i.id,
                    },
                  ))
              : o());
        },
        [c, e, l, t, d, s, a, o, n],
      );
    }
    function p(e, t, n, a, i, l) {
      if (e != null) {
        var s = o("AdsMessengerVisualEditorUtils").parseWelcomeMessage(
            t,
            e.page_welcome_message_body,
            n,
          ),
          u = o("AdsMessengerVisualEditorUtils").parseWelcomeMessage(t, a, n),
          c = r("adsMessengerDataModelGetTemplateVersion")(s),
          d = r("adsMessengerDataModelGetTemplateVersion")(u);
        if ((!i && l) || d !== c) return !0;
      }
      return !1;
    }
    function _(e, t, n) {
      return e.map(function (e) {
        if (t != null && t.id === e.id) {
          var r = babelHelpers.extends({}, e);
          return ((r.page_welcome_message_body = n), r);
        }
        return e;
      });
    }
    ((l.useOnSelectorChangeCallback = c),
      (l.useOnDiscardChangesToTemplateCallback = d),
      (l.useOnCloseDialogCallback = m),
      (l.getIsEditDisabled = p),
      (l.getFilteredExistingTemplateList = _));
  },
  226,
);
