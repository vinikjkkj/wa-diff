__d(
  "AdsHelpTrayUIActions",
  [
    "invariant",
    "AdsHelpTrayGuidedFixViolationTypeEnum.facebook",
    "AdsHelpTrayOpenCaseDetailsAction",
    "AdsHelpTrayOpenChatInboxAction",
    "AdsHelpTrayOpenChatThreadAction",
    "AdsHelpTrayOpenContactFormAction",
    "AdsHelpTrayOpenGuidedFixPolicyDetailAction",
    "AdsHelpTrayOpenGuidedFixRestrictionInfoAction",
    "AdsHelpTrayOpenMarketingProScheduleCallFlowAction",
    "AdsHelpTrayOpenMetaProRequestChatConfirmationFlowAction",
    "AdsHelpTrayOpenMetaProRequestChatErrorFlowAction",
    "AdsHelpTrayOpenMetaProRequestChatFlowAction",
    "AdsHelpTrayOpenXfacAlrChatAction",
    "AdsHelpTrayPushCmsIdDataAction",
    "AdsHelpTrayPushToNavigationStackAction",
    "AdsOsmipChatTypeUtils",
    "QuickPerformanceLogger",
    "getBusinessCurrentToolType",
    "nullthrows",
    "qpl",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e;
    function u(t, n) {
      n === void 0 && (n = null);
      var o = r("getBusinessCurrentToolType")();
      ((e || (e = r("QuickPerformanceLogger"))).markerStart(
        r("qpl")._(593303848, "618"),
      ),
        e.markerStart(r("qpl")._(228211838, "3320")),
        e.markerAnnotate(r("qpl")._(593303848, "618"), {
          string: { entry_point: o },
        }),
        e.markerAnnotate(r("qpl")._(228211838, "3320"), {
          string: { entry_point: o },
        }),
        r("AdsHelpTrayPushCmsIdDataAction").dispatch(
          { data: { cmsID: t, source: n } },
          { line: "86", module: "AdsHelpTrayUIActions.js", moduleID: i.id },
        ));
    }
    function c(e, t) {
      e.onclick = function (e) {
        (u(t), e.preventDefault());
      };
    }
    function d(e, t) {
      r("AdsHelpTrayOpenChatThreadAction").dispatch(
        {
          data: {
            callStatus: null,
            chatInitiationArgs: t == null ? void 0 : t.chatInitiationArgs,
            chatType: o("AdsOsmipChatTypeUtils").OSMIPChatType.AI_MESSENGER,
            isNewThread: !0,
            isOsmipEntrypoint: !1,
            originatingAdsAIEntrypoint: t == null ? void 0 : t.adsAIEntrypoint,
            threadGenerationID: e,
            threadID: "",
          },
        },
        { line: "112", module: "AdsHelpTrayUIActions.js", moduleID: i.id },
      );
    }
    function m(e, t) {
      r("AdsHelpTrayOpenChatThreadAction").dispatch(
        {
          data: {
            callStatus: null,
            chatType: o("AdsOsmipChatTypeUtils").OSMIPChatType.AI_MESSENGER,
            isNewThread: !0,
            isOsmipEntrypoint: !1,
            isThreadUpdate: !0,
            threadGenerationID: t,
            threadID: e,
          },
        },
        { line: "133", module: "AdsHelpTrayUIActions.js", moduleID: i.id },
      );
    }
    function p(e, t) {
      var n;
      r("AdsHelpTrayOpenChatThreadAction").dispatch(
        {
          data: {
            callStatus: t == null ? void 0 : t.callStatus,
            chatType:
              (t == null ? void 0 : t.isAdsAIChat) === !0
                ? o("AdsOsmipChatTypeUtils").OSMIPChatType.AI_MESSENGER
                : o("AdsOsmipChatTypeUtils").OSMIPChatType
                    .HUMAN_AGENT_MESSENGER,
            existingThreadInfo: t == null ? void 0 : t.existingThreadInfo,
            isOsmipEntrypoint:
              (n = t == null ? void 0 : t.isOsmipEntrypoint) != null ? n : !1,
            maibaConversationId: t == null ? void 0 : t.maibaConversationId,
            setIsHelpTrayOpen: t == null ? void 0 : t.setIsHelpTrayOpen,
            threadID: e,
          },
        },
        { line: "160", module: "AdsHelpTrayUIActions.js", moduleID: i.id },
      );
    }
    function _(e) {
      r("AdsHelpTrayOpenChatThreadAction").dispatch(
        {
          data: {
            callStatus: null,
            chatType: o("AdsOsmipChatTypeUtils").OSMIPChatType
              .HUMAN_AGENT_MESSENGER,
            isNewThread: !0,
            isOsmipEntrypoint: !1,
            threadGenerationID: e,
            threadID: "",
          },
        },
        { line: "180", module: "AdsHelpTrayUIActions.js", moduleID: i.id },
      );
    }
    function f(e, t) {
      r("AdsHelpTrayOpenChatThreadAction").dispatch(
        {
          data: {
            callStatus: null,
            chatType: o("AdsOsmipChatTypeUtils").OSMIPChatType
              .HUMAN_AGENT_MESSENGER,
            isNewThread: !0,
            isOsmipEntrypoint: !1,
            isThreadUpdate: !0,
            threadGenerationID: t,
            threadID: e,
          },
        },
        { line: "199", module: "AdsHelpTrayUIActions.js", moduleID: i.id },
      );
    }
    function g(e) {
      r("AdsHelpTrayOpenChatThreadAction").dispatch(
        {
          data: {
            callStatus: null,
            chatType: o("AdsOsmipChatTypeUtils").OSMIPChatType
              .HUMAN_AGENT_MESSENGER,
            isNewThread: !0,
            isOsmipEntrypoint: !1,
            threadGenerationID: e,
            threadID: "",
          },
        },
        { line: "216", module: "AdsHelpTrayUIActions.js", moduleID: i.id },
      );
    }
    function h(e, t) {
      r("AdsHelpTrayOpenChatThreadAction").dispatch(
        {
          data: {
            callStatus: null,
            chatType: o("AdsOsmipChatTypeUtils").OSMIPChatType
              .HUMAN_AGENT_MESSENGER,
            isNewThread: !0,
            isOsmipEntrypoint: !1,
            isThreadUpdate: !0,
            threadGenerationID: t,
            threadID: e,
          },
        },
        { line: "235", module: "AdsHelpTrayUIActions.js", moduleID: i.id },
      );
    }
    function y(e, t) {
      r("AdsHelpTrayOpenCaseDetailsAction").dispatch(
        { data: { callerID: t, caseID: e } },
        { line: "252", module: "AdsHelpTrayUIActions.js", moduleID: i.id },
      );
    }
    function C(t, n, o, a, l, s, u, c, d) {
      (n === void 0 && (n = null),
        o === void 0 && (o = null),
        a === void 0 && (a = !0),
        l === void 0 && (l = !1),
        s === void 0 && (s = null),
        u === void 0 && (u = null),
        c === void 0 && (c = !1),
        d === void 0 && (d = !1),
        (e || (e = r("QuickPerformanceLogger"))).markerStart(
          r("qpl")._(593313520, "7738"),
        ),
        e.markerStart(r("qpl")._(228197768, "3323")),
        r("AdsHelpTrayOpenContactFormAction").dispatch(
          {
            assetID: n != null ? n : void 0,
            isReadOnly: c,
            issueDescription: u != null ? u : void 0,
            lbdCaller: s != null ? s : void 0,
            lbdIssueID: o != null ? o : void 0,
            shouldPreSelectAsset: l,
            shouldSkipGranularAssetSelection: d,
            showGuidanceCard: a,
            source: t,
          },
          { line: "274", module: "AdsHelpTrayUIActions.js", moduleID: i.id },
        ));
    }
    function b(t) {
      switch (t.contentType) {
        case "ARTICLE":
          u(r("nullthrows")(t.id));
          break;
        case "SUPPORT_FORM":
          ((e || (e = r("QuickPerformanceLogger"))).markerStart(
            r("qpl")._(593313520, "7738"),
          ),
            (e || (e = r("QuickPerformanceLogger"))).markerStart(
              r("qpl")._(228197768, "3323"),
            ),
            r("AdsHelpTrayPushToNavigationStackAction").dispatch(t, {
              line: "299",
              module: "AdsHelpTrayUIActions.js",
              moduleID: i.id,
            }));
          break;
        default:
          r("AdsHelpTrayPushToNavigationStackAction").dispatch(t, {
            line: "302",
            module: "AdsHelpTrayUIActions.js",
            moduleID: i.id,
          });
          break;
      }
    }
    function v(e, t, n, o, a, l, s, u, c, d) {
      (n === void 0 && (n = !1),
        r("AdsHelpTrayOpenMarketingProScheduleCallFlowAction").dispatch(
          {
            data: {
              entryPoint: t,
              experimentData: s,
              experimentGroup: c,
              experimentID: u,
              isLiveCallFlow: l,
              isOsmipEntrypoint: n,
              leadSource: e,
              srtJobID: a,
              surface: o,
              treatmentID: d,
            },
          },
          { line: "326", module: "AdsHelpTrayUIActions.js", moduleID: i.id },
        ));
    }
    function S(e, t, n, o) {
      (n === void 0 && (n = !1),
        r("AdsHelpTrayOpenMarketingProScheduleCallFlowAction").dispatch(
          {
            data: {
              entryPoint: t,
              isOsmipEntrypoint: n,
              isRescheduleCall: !0,
              leadSource: e,
              surface: o,
            },
          },
          { line: "348", module: "AdsHelpTrayUIActions.js", moduleID: i.id },
        ));
    }
    function R(e, t, n, o, a, l, s) {
      r("AdsHelpTrayOpenMetaProRequestChatFlowAction").dispatch(
        {
          data: {
            advertiserContext: e,
            isOsmipEntrypoint: o,
            program: t,
            sbgProgramName: n,
            sourceTracking: l,
            subLeadSource: s,
            whatsappConsentData: a,
          },
        },
        { line: "368", module: "AdsHelpTrayUIActions.js", moduleID: i.id },
      );
    }
    function L(e, t, n) {
      r("AdsHelpTrayOpenMetaProRequestChatConfirmationFlowAction").dispatch(
        { data: { redirectURI: e, sbgProgramName: t, sourceTracking: n } },
        { line: "386", module: "AdsHelpTrayUIActions.js", moduleID: i.id },
      );
    }
    function E(e, t, n) {
      r("AdsHelpTrayOpenMetaProRequestChatErrorFlowAction").dispatch(
        {
          data: {
            isInvalidPhoneNumberError: e,
            sbgProgramName: t,
            sourceTracking: n,
          },
        },
        { line: "396", module: "AdsHelpTrayUIActions.js", moduleID: i.id },
      );
    }
    function k(e) {
      r("AdsHelpTrayOpenChatInboxAction").dispatch(e != null ? e : {}, {
        line: "412",
        module: "AdsHelpTrayUIActions.js",
        moduleID: i.id,
      });
    }
    function I(e) {
      r("AdsHelpTrayOpenXfacAlrChatAction").dispatch(e, {
        line: "418",
        module: "AdsHelpTrayUIActions.js",
        moduleID: i.id,
      });
    }
    function T(e, t, n) {
      var o = r("AdsHelpTrayGuidedFixViolationTypeEnum.facebook").cast(t);
      (o || s(0, 79787, t),
        r("AdsHelpTrayOpenGuidedFixPolicyDetailAction").dispatch(
          {
            data: {
              adGroupID: e,
              showRestrictionInfo: !0,
              supportContactFormData: n,
              violationType: o,
            },
          },
          { line: "433", module: "AdsHelpTrayUIActions.js", moduleID: i.id },
        ));
    }
    function D(e) {
      var t = r("AdsHelpTrayGuidedFixViolationTypeEnum.facebook").cast(e);
      (t || s(0, 79787, e),
        r("AdsHelpTrayOpenGuidedFixRestrictionInfoAction").dispatch(
          { data: { violationType: t } },
          { line: "451", module: "AdsHelpTrayUIActions.js", moduleID: i.id },
        ));
    }
    ((l.pushCMSIDToHistory = u),
      (l.attachPushCMSIDOnClick = c),
      (l.openNewAIChatThread = d),
      (l.updateNewAIChatThread = m),
      (l.openChatThread = p),
      (l.openNewALRChatThread = _),
      (l.updateNewALRChatThread = f),
      (l.openNewLBDSupportChatThread = g),
      (l.updateNewLBDSupportChatThread = h),
      (l.openCaseDetails = y),
      (l.openContactSupportForm = C),
      (l.pushToNavigationStack = b),
      (l.openMarketingProEmbeddedCallFlow = v),
      (l.openMarketingProRescheduleCallFlow = S),
      (l.openMetaProRequestChatFlow = R),
      (l.openMetaProRequestChatConfirmationFlow = L),
      (l.openMetaProRequestChatErrorFlow = E),
      (l.openChatInbox = k),
      (l.openXfacAlr = I),
      (l.openPolicyDetail = T),
      (l.openRestrictionInfo = D));
  },
  98,
);
