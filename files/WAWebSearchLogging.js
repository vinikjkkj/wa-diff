__d(
  "WAWebSearchLogging",
  [
    "WAWebChatGetters",
    "WAWebChatModel",
    "WAWebContactModel",
    "WAWebSearchActionEventWamEvent",
    "WAWebWamEnumSearchActionEntryPointType",
    "WAWebWamEnumSearchActionType",
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
    function s(t, n) {
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
        break e;
      }
    }
    l.logSearchActionTypeAheadItemClick = s;
  },
  98,
);
