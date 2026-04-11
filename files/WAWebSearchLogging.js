__d(
  "WAWebSearchLogging",
  [
    "WAWebChatGetters",
    "WAWebChatModel",
    "WAWebContactModel",
    "WAWebMetaAISuggestionModel",
    "WAWebSearchActionEventWamEvent",
    "WAWebSearchUserJourneyLogger",
    "WAWebWamEnumSearchActionEntryPointType",
    "WAWebWamEnumSearchActionType",
    "WAWebWamEnumSearchUjItemType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.action,
        n = e.searchAiSuggestionCount,
        r = e.searchChatsCount,
        a = e.searchContactsCount,
        i = e.searchGroupsCount,
        l = e.searchMessagesCount,
        s = e.selectedItemRank,
        u = new (o("WAWebSearchActionEventWamEvent").SearchActionEventWamEvent)(
          {
            searchAction: t,
            searchActionEntryPoint: o("WAWebWamEnumSearchActionEntryPointType")
              .SEARCH_ACTION_ENTRY_POINT_TYPE.CHATS_LIST,
            searchAiSuggestionCount: n,
            selectedItemRank: s,
            searchChatsCount: r,
            searchContactsCount: a,
            searchGroupsCount: i,
            searchMessagesCount: l,
          },
        );
      u.commit();
    }
    function s(t) {
      var n = t.aiSuggestionCount;
      e({
        action: o("WAWebWamEnumSearchActionType").SEARCH_ACTION_TYPE
          .NULL_STATE_SHOW,
        searchAiSuggestionCount: n,
      });
    }
    function u(t, n) {
      (e({
        action: o("WAWebWamEnumSearchActionType").SEARCH_ACTION_TYPE
          .NULL_STATE_ITEM_CLICK,
        searchAiSuggestionCount: n,
        selectedItemRank: t,
      }),
        o(
          "WAWebSearchUserJourneyLogger",
        ).SearchUserJourneyLogger.nullStateItemClick(
          o("WAWebWamEnumSearchUjItemType").SEARCH_UJ_ITEM_TYPE.AI_SUGGESTION,
          t,
          n,
        ));
    }
    function c(t) {
      var n = t.aiSuggestionsCount,
        r = t.chatsCount,
        a = t.contactsCount,
        i = t.groupsCount,
        l = t.messagesCount;
      e({
        action: o("WAWebWamEnumSearchActionType").SEARCH_ACTION_TYPE
          .TYPEAHEAD_SHOW,
        searchAiSuggestionCount: n,
        searchChatsCount: r,
        searchContactsCount: a,
        searchGroupsCount: i,
        searchMessagesCount: l,
      });
    }
    function d(t, n) {
      var a = o("WAWebWamEnumSearchActionType").SEARCH_ACTION_TYPE
        .TYPEAHEAD_ITEM_CLICK;
      e: {
        var i = t;
        {
          var l = i;
          if (n != null) {
            e({ action: a, searchMessagesCount: 1 });
            break e;
          }
        }
        {
          var s = i;
          if (t instanceof o("WAWebChatModel").Chat) {
            var u = o("WAWebChatGetters").getIsGroup(t)
              ? { searchGroupsCount: 1 }
              : { searchChatsCount: 1 };
            e(babelHelpers.extends({ action: a }, u));
            break e;
          }
        }
        {
          var c = i;
          if (t instanceof r("WAWebContactModel")) {
            e({ action: a, searchContactsCount: 1 });
            break e;
          }
        }
        {
          var d = i;
          if (t instanceof r("WAWebMetaAISuggestionModel")) {
            e({ action: a, searchAiSuggestionCount: 1 });
            break e;
          }
        }
        break e;
      }
    }
    ((l.logSearchActionNullStateShow = s),
      (l.logSearchActionNullStateItemClick = u),
      (l.logSearchActionTypesAheadShow = c),
      (l.logSearchActionTypeAheadItemClick = d));
  },
  98,
);
