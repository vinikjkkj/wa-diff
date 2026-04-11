__d(
  "WAWebFilterLogging",
  [
    "WAWebBizGatingUtils",
    "WAWebChatFilterEventWamEvent",
    "WAWebChatSearchFilters",
    "WAWebChatThreadLogging",
    "WAWebConnModel",
    "WAWebInboxFiltersGatingUtils",
    "WAWebLabelCollection",
    "WAWebListUtils",
    "WAWebListsGatingUtils",
    "WAWebListsLogging",
    "WAWebWamEnumChatFilterActionTypes",
    "WAWebWamEnumChatFilterTargetScreen",
    "WAWebWamEnumChatFilterTypes",
    "WAWebWamEnumChatSearchResultType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (e == null || (!e.kind && (e.label == null || e.label === "")))
        return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.NONE;
      if (!e.kind)
        return o("WAWebConnModel").Conn.isSMB
          ? o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.OTHER_LABELS
          : o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.NONE;
      switch (e.kind) {
        case o("WAWebChatSearchFilters").SearchFilters.UNREAD:
          return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.UNREAD;
        case o("WAWebChatSearchFilters").SearchFilters.FAVORITES:
          return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.FAVORITES;
        case o("WAWebChatSearchFilters").SearchFilters.GROUP:
          return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.GROUP;
        case o("WAWebChatSearchFilters").SearchFilters.COMMUNITY:
          return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.COMMUNITY;
        case o("WAWebChatSearchFilters").SearchFilters.BROADCAST:
          return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES
            .BROADCAST_LIST;
        case o("WAWebChatSearchFilters").SearchFilters.CONTACT:
          return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.CONTACT;
        case o("WAWebChatSearchFilters").SearchFilters.NON_CONTACT:
          return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.NON_CONTACT;
        case o("WAWebChatSearchFilters").SearchFilters.ASSIGNED_TO_YOU:
          return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES
            .ASSIGNED_TO_YOU;
        case o("WAWebChatSearchFilters").SearchFilters.PERSONAL:
          return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.PERSONAL;
        case o("WAWebChatSearchFilters").SearchFilters.BUSINESS:
          return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.BUSINESS;
        case o("WAWebChatSearchFilters").SearchFilters.LABELS:
          return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.LABEL;
        case o("WAWebChatSearchFilters").SearchFilters.CHANNELS:
          return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.NONE;
      }
    }
    var s = function (t, n, r) {
      if (
        o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled() &&
        n != null
      ) {
        t.targetScreen = o(
          "WAWebWamEnumChatFilterTargetScreen",
        ).CHAT_FILTER_TARGET_SCREEN.CHAT_LIST;
        var e;
        if (
          (n.label != null &&
            (e = o("WAWebLabelCollection").LabelCollection.get(n.label)),
          e == null)
        ) {
          var a = o("WAWebListUtils").getListTypeFromFilter(n.kind);
          a != null &&
            o("WAWebListUtils").isBuiltInList(a) &&
            (e = o("WAWebLabelCollection").LabelCollection.findFirst(
              function (e) {
                return e.type === a;
              },
            ));
        }
        if (
          e != null &&
          (e.predefinedId != null && (t.predefinedId = e.predefinedId),
          e.name != null && (t.labelName = e.name),
          o("WAWebListsGatingUtils").isListsEnabled())
        ) {
          var i = parseInt(e.id, 10);
          isNaN(i) || (t.listId = i);
          var l = o("WAWebListsLogging").getListType(e.type);
          l != null && (t.listType = l);
          var s =
            o("WAWebLabelCollection")
              .LabelCollection.getActiveLists()
              .indexOf(e) + 1;
          ((t.listIndex = s), r != null && (t.threadId = r));
        }
      }
    };
    function u(e) {
      var t = new (o("WAWebChatFilterEventWamEvent").ChatFilterEventWamEvent)({
        actionType: o("WAWebWamEnumChatFilterActionTypes")
          .CHAT_FILTER_ACTION_TYPES.OPEN,
        filterType: o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.NONE,
        sessionId: e,
      });
      (o("WAWebBizGatingUtils").smartFiltersEnabled() &&
        (t.targetScreen = o(
          "WAWebWamEnumChatFilterTargetScreen",
        ).CHAT_FILTER_TARGET_SCREEN.CHAT_LIST),
        t.commit());
    }
    function c(t, n) {
      var r = e(n);
      if (r !== o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.NONE) {
        var a = {
          actionType: o("WAWebWamEnumChatFilterActionTypes")
            .CHAT_FILTER_ACTION_TYPES.SELECT_FILTER,
          filterType: r,
          sessionId: t,
        };
        (o("WAWebBizGatingUtils").smartFiltersEnabled() &&
          (a.targetScreen = o(
            "WAWebWamEnumChatFilterTargetScreen",
          ).CHAT_FILTER_TARGET_SCREEN.CHAT_LIST),
          s(a, n),
          new (o("WAWebChatFilterEventWamEvent").ChatFilterEventWamEvent)(
            a,
          ).commit());
      }
    }
    function d(t, n) {
      var r = {
        actionType: o("WAWebWamEnumChatFilterActionTypes")
          .CHAT_FILTER_ACTION_TYPES.FILTER_EMPTY_STATE_VIEWED,
        filterType: e(n),
        targetScreen: o("WAWebWamEnumChatFilterTargetScreen")
          .CHAT_FILTER_TARGET_SCREEN.CHAT_LIST,
        sessionId: t,
      };
      (s(r, n),
        new (o("WAWebChatFilterEventWamEvent").ChatFilterEventWamEvent)(
          r,
        ).commit());
    }
    function m(e) {
      var t;
      switch (e) {
        case "chat":
          t = o("WAWebWamEnumChatSearchResultType").CHAT_SEARCH_RESULT_TYPE
            .CHAT;
          break;
        case "message":
          t = o("WAWebWamEnumChatSearchResultType").CHAT_SEARCH_RESULT_TYPE
            .MESSAGE;
          break;
        case "contact":
          t = o("WAWebWamEnumChatSearchResultType").CHAT_SEARCH_RESULT_TYPE
            .CONTACT;
          break;
        case "group":
          t = o("WAWebWamEnumChatSearchResultType").CHAT_SEARCH_RESULT_TYPE
            .GROUP;
          break;
      }
      return t;
    }
    function p(t, n) {
      var r = {
        actionType: o("WAWebWamEnumChatFilterActionTypes")
          .CHAT_FILTER_ACTION_TYPES.SEARCH,
        filterType: e(n),
        targetScreen: o("WAWebWamEnumChatFilterTargetScreen")
          .CHAT_FILTER_TARGET_SCREEN.CHAT_LIST,
        sessionId: t,
      };
      (s(r, n),
        new (o("WAWebChatFilterEventWamEvent").ChatFilterEventWamEvent)(
          r,
        ).commit());
    }
    function _(e) {
      var t = new (o("WAWebChatFilterEventWamEvent").ChatFilterEventWamEvent)({
        actionType: o("WAWebWamEnumChatFilterActionTypes")
          .CHAT_FILTER_ACTION_TYPES.SEARCH_WITH_FILTER,
        filterType: o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES
          .OTHER_LABELS,
        sessionId: e,
      });
      t.commit();
    }
    function f(e, t, n, r) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a) {
            var i = {
                actionType: o("WAWebWamEnumChatFilterActionTypes")
                  .CHAT_FILTER_ACTION_TYPES.SEARCH_ITEM_SELECTED,
                filterType: e(n),
                searchResultType: m(r),
                targetScreen: o("WAWebWamEnumChatFilterTargetScreen")
                  .CHAT_FILTER_TARGET_SCREEN.CHAT_LIST,
                sessionId: t,
              },
              l =
                a != null
                  ? yield o("WAWebChatThreadLogging").getChatThreadID(a.toJid())
                  : null;
            (s(i, n, l),
              new (o("WAWebChatFilterEventWamEvent").ChatFilterEventWamEvent)(
                i,
              ).commit());
          },
        )),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n, r) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a) {
            var i = {
                actionType: o("WAWebWamEnumChatFilterActionTypes")
                  .CHAT_FILTER_ACTION_TYPES.SEARCH_MSG_SENT,
                filterType: e(n),
                searchResultType: m(r),
                sessionId: t,
              },
              l =
                a != null
                  ? yield o("WAWebChatThreadLogging").getChatThreadID(a.toJid())
                  : null;
            (s(i, n, l),
              new (o("WAWebChatFilterEventWamEvent").ChatFilterEventWamEvent)(
                i,
              ).commit());
          },
        )),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      var t = {
        actionType: o("WAWebWamEnumChatFilterActionTypes")
          .CHAT_FILTER_ACTION_TYPES.FILTER_VIEWED,
        filterType: o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.LABEL,
        targetScreen: o("WAWebWamEnumChatFilterTargetScreen")
          .CHAT_FILTER_TARGET_SCREEN.CHAT_LIST,
        sessionId: e,
      };
      new (o("WAWebChatFilterEventWamEvent").ChatFilterEventWamEvent)(
        t,
      ).commit();
    }
    ((l.logOpenFilterEvent = u),
      (l.logSelectFilterEvent = c),
      (l.logEmptyStateViewedFilterEvent = d),
      (l.logSearchFilterEvent = p),
      (l.logSearchWithFilterEvent = _),
      (l.logSearchItemSelectedFilterEvent = f),
      (l.logSearchMsgSentFilterEvent = h),
      (l.logLabelDropdownShownEvent = C));
  },
  98,
);
