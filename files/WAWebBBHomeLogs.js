__d(
  "WAWebBBHomeLogs",
  ["WAWebBBLoggerTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_HOME,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.PAGE,
      });
    }
    function s(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: n,
        extraAttributes: { audience_id: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_HOME,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.EXISTING_AUDIENCE_LIST_ITEM,
      });
    }
    function u(e, t) {
      var n;
      e({
        action: (n = o("WAWebBBLoggerTypes")).SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: n.ENTRY_POINT.CHAT_HOME,
        extraAttributes: { audience_id: t },
        surface: n.SURFACE_TYPE.CHATLIST,
        userActionTarget: n.UserActionTarget.EXISTING_AUDIENCE_LIST_ITEM,
      });
    }
    function c(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_HOME,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.LEARN_MORE_LINK,
      });
    }
    function d(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_HOME,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.NEW_AUDIENCE_DROPDOWN,
      });
    }
    function m(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_HOME,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.OVERFLOW_MENU_BUTTON,
      });
    }
    function p(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_HOME,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.AUDIENCES_TAB_BUTTON,
      });
    }
    function _(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_HOME,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.BROADCASTS_TAB_BUTTON,
      });
    }
    function f(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: n,
        extraAttributes: { card_count: t },
        surface: r,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget
            .SUGGESTED_AUDIENCE_CARDS_IMPRESSION,
      });
    }
    function g(e, t) {
      var n;
      e({
        action: (n = o("WAWebBBLoggerTypes")).SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: n.ENTRY_POINT.CHAT_HOME,
        extraAttributes: { audience_id: t },
        surface: n.SURFACE_TYPE.CHATLIST,
        userActionTarget: n.UserActionTarget.CHAT_LIST_CONTEXT_MENU,
      });
    }
    function h(e) {
      var t;
      e({
        action: (t = o("WAWebBBLoggerTypes")).SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t.ENTRY_POINT.BB_THREAD,
        surface: t.SURFACE_TYPE.BB_THREAD,
        userActionTarget: t.UserActionTarget.MESSAGE_CONTEXT_MENU,
      });
    }
    function y(e, t) {
      var n;
      e({
        action: (n = o("WAWebBBLoggerTypes")).SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: n.ENTRY_POINT.BB_THREAD,
        extraAttributes: { audience_id: t },
        surface: n.SURFACE_TYPE.BB_THREAD,
        userActionTarget: n.UserActionTarget.CONVERSATION_HEADER_MENU,
      });
    }
    function C(e, t, n, r, a, i) {
      var l;
      e({
        action: (l = o("WAWebBBLoggerTypes")).SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: l.ENTRY_POINT.CHAT_HOME,
        extraAttributes: {
          broadcast_chat_count: n,
          has_broadcast_with_non_zero_recipients: a,
          has_broadcast_with_zero_recipients: r,
          is_broadcast_in_chat_list: t,
          primary_supports_business_broadcast: i,
        },
        surface: l.SURFACE_TYPE.CHATLIST,
        userActionTarget: l.UserActionTarget.BROADCAST_CHAT_LIST_STATE,
      });
    }
    function b(e, t) {
      var n;
      e({
        action: (n = o("WAWebBBLoggerTypes")).SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: n.ENTRY_POINT.BB_THREAD,
        extraAttributes: { audience_id: t },
        surface: n.SURFACE_TYPE.BB_THREAD,
        userActionTarget: n.UserActionTarget.PAGE,
      });
    }
    function v(e) {
      var t;
      e({
        action: (t = o("WAWebBBLoggerTypes")).SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t.ENTRY_POINT.BB_THREAD,
        surface: t.SURFACE_TYPE.BB_THREAD,
        userActionTarget: t.UserActionTarget.TOS_REVIEW_BANNER,
      });
    }
    function S(e) {
      var t;
      e({
        action: (t = o("WAWebBBLoggerTypes")).SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t.ENTRY_POINT.BB_THREAD,
        surface: t.SURFACE_TYPE.BB_THREAD,
        userActionTarget: t.UserActionTarget.TOS_REVIEW_BANNER,
      });
    }
    function R(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_HOME,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget
            .BROADCAST_ITEM_OVERFLOW_BUTTON,
      });
    }
    function L(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
        entryPoint: n,
        extraAttributes: { eligibility: t },
        surface: r,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.ELIGIBILITY_GATE,
      });
    }
    function E(e, t, n, r, a) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: a,
        extraAttributes: {
          predicate_type: n,
          resolved_count: r,
          suggested_audience_card_id: t,
        },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_HOME,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget
            .SUGGESTED_AUDIENCE_CARD_CLICK,
      });
    }
    function k(e, t, n, r, a) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
        entryPoint: r,
        extraAttributes: {
          predicate_type: n != null ? n : "",
          suggested_audience_card_id: t,
        },
        surface: a,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget
            .SUGGESTED_AUDIENCE_CARD_ERROR,
      });
    }
    ((l.bbHomePageViewed = e),
      (l.newBusinessBroadcastAudienceListItemClicked = s),
      (l.newChatFlowAudienceListItemClicked = u),
      (l.homeLearnMoreClicked = c),
      (l.homeNewAudienceDropdownClicked = d),
      (l.homeOverflowMenuClicked = m),
      (l.homeAudiencesTabClicked = p),
      (l.homeBroadcastsTabClicked = _),
      (l.suggestedAudienceCardsViewed = f),
      (l.chatListContextMenuOpened = g),
      (l.messageContextMenuOpened = h),
      (l.conversationHeaderMenuOpened = y),
      (l.broadcastChatListItemViewed = C),
      (l.broadcastThreadViewed = b),
      (l.tosReviewBannerViewed = v),
      (l.tosReviewBannerClicked = S),
      (l.broadcastItemOverflowClicked = R),
      (l.eligibilityCheckResult = L),
      (l.suggestedAudienceCardClicked = E),
      (l.suggestedAudienceCardError = k));
  },
  98,
);
