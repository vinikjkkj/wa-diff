__d(
  "WAWebFilterLogging",
  [
    "WAWebChatFilterEventWamEvent",
    "WAWebChatSearchFilters",
    "WAWebChatThreadLogging",
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebInboxFiltersGatingUtils",
    "WAWebLabelCollection",
    "WAWebListUtils",
    "WAWebListsLabelGatingUtils",
    "WAWebListsLogging",
    "WAWebWamEnumChatFilterActionTypes",
    "WAWebWamEnumChatFilterTargetScreen",
    "WAWebWamEnumChatFilterTypes",
    "WAWebWamEnumChatSearchResultType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (e == null || (!e.kind && (e.label == null || e.label === "")))
        return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.NONE;
      if (!e.kind)
        return o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn)
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
        case o("WAWebChatSearchFilters").SearchFilters.AI_RESPONDING:
        case o("WAWebChatSearchFilters").SearchFilters.AI_HANDOFF:
          return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.BUSINESS_AI;
        case o("WAWebChatSearchFilters").SearchFilters.TO_YOU:
          return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.TO_YOU;
        case o("WAWebChatSearchFilters").SearchFilters.META_AI:
          return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.META_AI;
        case o("WAWebChatSearchFilters").SearchFilters.NETWORK:
          return o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.NONE;
      }
    }
    var s = function (t) {
      var e = t.eventData,
        n = t.filter,
        r = t.loggingParams,
        a = t.threadId;
      if (
        o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled() &&
        n != null
      ) {
        e.targetScreen = o(
          "WAWebWamEnumChatFilterTargetScreen",
        ).CHAT_FILTER_TARGET_SCREEN.CHAT_LIST;
        var i;
        if (
          (n.label != null &&
            (i = o("WAWebLabelCollection").LabelCollection.get(n.label)),
          i == null)
        ) {
          var l = o("WAWebListUtils").getListTypeFromFilter(n.kind);
          l != null &&
            o("WAWebListUtils").isBuiltInList(l) &&
            (i = o("WAWebLabelCollection").LabelCollection.findFirst(
              function (e) {
                return e.type === l;
              },
            ));
        }
        if (i != null) {
          (i.predefinedId != null && (e.predefinedId = i.predefinedId),
            i.name != null && (e.labelName = i.name));
          var s = parseInt(i.id, 10);
          isNaN(s) || (e.listId = s);
          var u = o("WAWebListsLogging").getListType(i.type);
          u != null && (e.listType = u);
          var c =
            o("WAWebLabelCollection")
              .LabelCollection.getActiveLists()
              .indexOf(i) + 1;
          e.listIndex = c;
        } else r != null && (e.listIndex = r.listIndex);
        a != null &&
          (i != null ||
            n.kind === o("WAWebChatSearchFilters").SearchFilters.META_AI) &&
          (e.threadId = a);
      }
    };
    function u(e) {
      var t = new (o("WAWebChatFilterEventWamEvent").ChatFilterEventWamEvent)({
        actionType: o("WAWebWamEnumChatFilterActionTypes")
          .CHAT_FILTER_ACTION_TYPES.OPEN,
        filterType: o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.NONE,
        sessionId: e,
      });
      (o("WAWebListsLabelGatingUtils").smartFiltersEnabled() &&
        (t.targetScreen = o(
          "WAWebWamEnumChatFilterTargetScreen",
        ).CHAT_FILTER_TARGET_SCREEN.CHAT_LIST),
        t.commit());
    }
    function c(t, n, r) {
      var a = r === void 0 ? {} : r,
        i = a.loggingParams,
        l = e(n);
      if (l !== o("WAWebWamEnumChatFilterTypes").CHAT_FILTER_TYPES.NONE) {
        var u = {
          actionType: o("WAWebWamEnumChatFilterActionTypes")
            .CHAT_FILTER_ACTION_TYPES.SELECT_FILTER,
          filterType: l,
          sessionId: t,
        };
        (o("WAWebListsLabelGatingUtils").smartFiltersEnabled() &&
          (u.targetScreen = o(
            "WAWebWamEnumChatFilterTargetScreen",
          ).CHAT_FILTER_TARGET_SCREEN.CHAT_LIST),
          s({ eventData: u, filter: n, loggingParams: i }),
          new (o("WAWebChatFilterEventWamEvent").ChatFilterEventWamEvent)(
            u,
          ).commit());
      }
    }
    function d(t, n, r) {
      var a = r === void 0 ? {} : r,
        i = a.loggingParams,
        l = {
          actionType: o("WAWebWamEnumChatFilterActionTypes")
            .CHAT_FILTER_ACTION_TYPES.FILTER_EMPTY_STATE_VIEWED,
          filterType: e(n),
          targetScreen: o("WAWebWamEnumChatFilterTargetScreen")
            .CHAT_FILTER_TARGET_SCREEN.CHAT_LIST,
          sessionId: t,
        };
      (s({ eventData: l, filter: n, loggingParams: i }),
        new (o("WAWebChatFilterEventWamEvent").ChatFilterEventWamEvent)(
          l,
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
      (s({ eventData: r, filter: n }),
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
    async function f(t) {
      var n = t.chatId,
        r = t.filter,
        a = t.loggingParams,
        i = t.searchResult,
        l = t.sessionId,
        u = {
          actionType: o("WAWebWamEnumChatFilterActionTypes")
            .CHAT_FILTER_ACTION_TYPES.SEARCH_ITEM_SELECTED,
          filterType: e(r),
          searchResultType: m(i),
          targetScreen: o("WAWebWamEnumChatFilterTargetScreen")
            .CHAT_FILTER_TARGET_SCREEN.CHAT_LIST,
          sessionId: l,
        },
        c =
          n != null
            ? await o("WAWebChatThreadLogging").getChatThreadID(n.toJid())
            : null;
      (s({ eventData: u, filter: r, loggingParams: a, threadId: c }),
        new (o("WAWebChatFilterEventWamEvent").ChatFilterEventWamEvent)(
          u,
        ).commit());
    }
    async function g(t) {
      var n = t.chatId,
        r = t.filter,
        a = t.searchResult,
        i = t.sessionId,
        l = {
          actionType: o("WAWebWamEnumChatFilterActionTypes")
            .CHAT_FILTER_ACTION_TYPES.SEARCH_MSG_SENT,
          filterType: e(r),
          searchResultType: m(a),
          sessionId: i,
        },
        u =
          n != null
            ? await o("WAWebChatThreadLogging").getChatThreadID(n.toJid())
            : null;
      (s({ eventData: l, filter: r, threadId: u }),
        new (o("WAWebChatFilterEventWamEvent").ChatFilterEventWamEvent)(
          l,
        ).commit());
    }
    function h(e) {
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
    var y = new Map(),
      C = new Set();
    function b(e, t) {
      var n,
        r =
          t < 0
            ? y.delete(e)
            : ((n = y.get(e)) == null ? void 0 : n.listIndex) !== t;
      (r && t >= 0 && y.set(e, { listIndex: t }),
        r &&
          C.forEach(function (e) {
            return e();
          }));
    }
    function v(e) {
      var t;
      return e == null ? null : (t = y.get(e)) != null ? t : null;
    }
    function S(e) {
      return (
        C.add(e),
        function () {
          C.delete(e);
        }
      );
    }
    ((l.logOpenFilterEvent = u),
      (l.logSelectFilterEvent = c),
      (l.logEmptyStateViewedFilterEvent = d),
      (l.logSearchFilterEvent = p),
      (l.logSearchWithFilterEvent = _),
      (l.logSearchItemSelectedFilterEvent = f),
      (l.logSearchMsgSentFilterEvent = g),
      (l.logLabelDropdownShownEvent = h),
      (l.publishFilterPillIndex = b),
      (l.getFilterPillLoggingParams = v),
      (l.subscribeToFilterPillPositions = S));
  },
  98,
);
