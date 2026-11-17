__d(
  "WAWebCustomerManagerTrialJourneyEvents",
  [
    "WAWebCustomerManagerWamLogging",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { accepted_ai_terms: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "trial_nux",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function s(e, t, n) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { from_slide: e, to_slide: t },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "trial_nux_" + n,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function u(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { shares_chats: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "trial_nux_chats_consent",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.EDIT,
      });
    }
    function c(e) {
      var t, n;
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: {
          accepted_ai_terms: e.acceptedAiTerms,
          chat_history: (t = e.chatHistory) != null ? t : "unknown",
          shares_chats: (n = e.sharesChats) != null ? n : null,
          slide: e.slide,
        },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "trial_nux_start_button",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function d() {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "trial_nux_learn_more_button",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function m(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { action_status: e, error_name: t != null ? t : null },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "trial_nux_start_button",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
      });
    }
    function p() {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "lock_card",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function _(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "lock_card_" + e,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function f(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { days_left: t != null ? t : null, stage: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "trial_banner",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function g(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { days_left: t != null ? t : null, stage: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "trial_banner_subscribe",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function h(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { days_left: t != null ? t : null, stage: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "trial_banner",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
      });
    }
    function y(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: {
          access_state: t != null ? t : null,
          source: e,
          unlocked: t == null ? null : t === "PAID_ACCESS",
        },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "meta_one_result",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
      });
    }
    function C(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { link: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "trial_nux_external_link",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function b(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { dismiss_method: t, source: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "meta_one_phone_signup_dialog",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
      });
    }
    function v(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { source: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "meta_one_phone_signup",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function S(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { source: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "meta_one_phone_signup_done",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function R(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { source: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "meta_one_phone_signup_help",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function L(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { action_status: "failure", error_name: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "access_state",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
      });
    }
    ((l.viewTrialNux = e),
      (l.clickTrialNuxSlide = s),
      (l.editTrialNuxChatsConsent = u),
      (l.clickTrialNuxStart = c),
      (l.clickTrialNuxLearnMore = d),
      (l.trialStartResult = m),
      (l.viewLockCard = p),
      (l.clickLockCard = _),
      (l.viewTrialBanner = f),
      (l.clickTrialBannerSubscribe = g),
      (l.dismissTrialBanner = h),
      (l.metaOneResult = y),
      (l.clickTrialNuxExternalLink = C),
      (l.dismissMetaOnePhoneSignup = b),
      (l.viewMetaOnePhoneSignup = v),
      (l.clickMetaOnePhoneSignupDone = S),
      (l.clickMetaOnePhoneSignupHelp = R),
      (l.accessStateLoadFailed = L));
  },
  98,
);
