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
          o("WAWebBBLoggerTypes").UserActionTarget
            .DOWNLOAD_SUBSCRIBED_RECIPIENTS,
      });
    }
    function _(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_HOME,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.AUDIENCES_TAB_BUTTON,
      });
    }
    function f(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_HOME,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.BROADCASTS_TAB_BUTTON,
      });
    }
    function g(e, t, n, r) {
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
    function h(e, t) {
      var n;
      e({
        action: (n = o("WAWebBBLoggerTypes")).SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: n.ENTRY_POINT.CHAT_HOME,
        extraAttributes: { audience_id: t },
        surface: n.SURFACE_TYPE.CHATLIST,
        userActionTarget: n.UserActionTarget.CHAT_LIST_CONTEXT_MENU,
      });
    }
    function y(e) {
      var t;
      e({
        action: (t = o("WAWebBBLoggerTypes")).SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t.ENTRY_POINT.BB_THREAD,
        surface: t.SURFACE_TYPE.BB_THREAD,
        userActionTarget: t.UserActionTarget.MESSAGE_CONTEXT_MENU,
      });
    }
    function C(e, t) {
      var n;
      e({
        action: (n = o("WAWebBBLoggerTypes")).SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: n.ENTRY_POINT.BB_THREAD,
        extraAttributes: { audience_id: t },
        surface: n.SURFACE_TYPE.BB_THREAD,
        userActionTarget: n.UserActionTarget.CONVERSATION_HEADER_MENU,
      });
    }
    function b(e) {
      var t,
        n = e.broadcastChatCount,
        r = e.hasBroadcastWithNonZeroRecipients,
        a = e.hasBroadcastWithZeroRecipients,
        i = e.isBroadcastInChatList,
        l = e.log,
        s = e.primarySupportsBusinessBroadcast;
      l({
        action: (t = o("WAWebBBLoggerTypes")).SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t.ENTRY_POINT.CHAT_HOME,
        extraAttributes: {
          broadcast_chat_count: n,
          has_broadcast_with_non_zero_recipients: r,
          has_broadcast_with_zero_recipients: a,
          is_broadcast_in_chat_list: i,
          primary_supports_business_broadcast: s,
        },
        surface: t.SURFACE_TYPE.CHATLIST,
        userActionTarget: t.UserActionTarget.BROADCAST_CHAT_LIST_STATE,
      });
    }
    function v(e, t) {
      var n;
      e({
        action: (n = o("WAWebBBLoggerTypes")).SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: n.ENTRY_POINT.BB_THREAD,
        extraAttributes: { audience_id: t },
        surface: n.SURFACE_TYPE.BB_THREAD,
        userActionTarget: n.UserActionTarget.PAGE,
      });
    }
    function S(e) {
      var t;
      e({
        action: (t = o("WAWebBBLoggerTypes")).SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t.ENTRY_POINT.BB_THREAD,
        surface: t.SURFACE_TYPE.BB_THREAD,
        userActionTarget: t.UserActionTarget.TOS_REVIEW_BANNER,
      });
    }
    function R(e) {
      var t;
      e({
        action: (t = o("WAWebBBLoggerTypes")).SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t.ENTRY_POINT.BB_THREAD,
        surface: t.SURFACE_TYPE.BB_THREAD,
        userActionTarget: t.UserActionTarget.TOS_REVIEW_BANNER,
      });
    }
    function L(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_HOME,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget
            .BROADCAST_ITEM_OVERFLOW_BUTTON,
      });
    }
    function E(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
        entryPoint: n,
        extraAttributes: { eligibility: t },
        surface: r,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.ELIGIBILITY_GATE,
      });
    }
    function k(e, t, n, r, a) {
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
    function I(e, t, n, r, a) {
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
      (l.downloadSubscribedRecipientsClicked = p),
      (l.homeAudiencesTabClicked = _),
      (l.homeBroadcastsTabClicked = f),
      (l.suggestedAudienceCardsViewed = g),
      (l.chatListContextMenuOpened = h),
      (l.messageContextMenuOpened = y),
      (l.conversationHeaderMenuOpened = C),
      (l.broadcastChatListItemViewed = b),
      (l.broadcastThreadViewed = v),
      (l.tosReviewBannerViewed = S),
      (l.tosReviewBannerClicked = R),
      (l.broadcastItemOverflowClicked = L),
      (l.eligibilityCheckResult = E),
      (l.suggestedAudienceCardClicked = k),
      (l.suggestedAudienceCardError = I));
  },
  98,
);
