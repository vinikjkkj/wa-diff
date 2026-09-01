__d(
  "WAWebListUtils",
  [
    "fbt",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebChatMessageSearch",
    "WAWebChatSearchFilters",
    "WAWebConnModel",
    "WAWebFrontendChatGetters",
    "WAWebLabelCollection",
    "WAWebLabelConstants",
    "WAWebLabelPillColors",
    "WAWebListsGatingUtils",
    "WAWebMobilePlatforms",
    "WAWebSchemaLabel",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = 20,
      c = 22;
    function d() {
      return o("WAWebListsGatingUtils").isListsChatListRowPillEnabled()
        ? Array.from(
            { length: o("WAWebLabelPillColors").PILL_COLOR_PALETTE_SIZE },
            function (e, t) {
              return o("WAWebLabelPillColors").getDotColor(t);
            },
          )
        : o("WAWebConnModel").Conn.platform ===
            o("WAWebMobilePlatforms").PLATFORMS.SMBI
          ? o("WAWebLabelConstants").IPHONE_LABEL_COLOR_PALETTE
          : o("WAWebLabelConstants").ANDROID_LABEL_COLOR_PALETTE;
    }
    function m(e) {
      var t,
        n = d();
      return (t = n[e]) != null ? t : n[0];
    }
    function p() {
      var e = o("WAWebListsGatingUtils").isListsChatListRowPillEnabled();
      return e
        ? o("WAWebLabelPillColors")
            .getCustomLabelColorIndices()
            .map(function (e) {
              return {
                hexColor: o("WAWebLabelPillColors").getDotColor(e),
                originalIndex: e,
              };
            })
        : d().map(function (e, t) {
            return { hexColor: e, originalIndex: t };
          });
    }
    var _ = function (t, n) {
      var e = parseInt(t.id, 10),
        r = parseInt(n.id, 10);
      return Number.isNaN(e) || Number.isNaN(r) ? 0 : e - r;
    };
    function f(e) {
      e.sort(function (e, t) {
        var n = e.orderIndex - t.orderIndex;
        return n === 0 ? _(e, t) : n;
      });
    }
    var g = new Set([
      (e = o("WAWebSchemaLabel")).ListType.UNREAD,
      e.ListType.GROUPS,
      e.ListType.FAVORITES,
      e.ListType.COMMUNITY,
      e.ListType.MENTIONS_AND_REPLIES,
    ]);
    function h(e) {
      return e == null ? !1 : g.has(e);
    }
    function y(e) {
      return (
        e === o("WAWebSchemaLabel").ListType.AI_HANDOFF ||
        e === o("WAWebSchemaLabel").ListType.AI_RESPONDING
      );
    }
    function C(e) {
      return (
        e.filter === o("WAWebChatSearchFilters").SearchFilters.TO_YOU &&
        e.listId == null
      );
    }
    function b(e, t) {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        (e === o("WAWebSchemaLabel").ListType.CUSTOM ||
          e === o("WAWebSchemaLabel").ListType.PREDEFINED) &&
        t != null
      );
    }
    function v(e) {
      return (h(e) && e !== o("WAWebSchemaLabel").ListType.FAVORITES) || y(e);
    }
    function S(e) {
      return e === o("WAWebSchemaLabel").ListType.UNREAD
        ? s._(/*BTDS*/ "Unread")
        : e === o("WAWebSchemaLabel").ListType.GROUPS
          ? s._(/*BTDS*/ "Groups")
          : e === o("WAWebSchemaLabel").ListType.FAVORITES
            ? s._(/*BTDS*/ "Favorites")
            : e === o("WAWebSchemaLabel").ListType.COMMUNITY
              ? s._(/*BTDS*/ "Communities")
              : e === o("WAWebSchemaLabel").ListType.AI_HANDOFF
                ? s._(/*BTDS*/ "AI handoff")
                : e === o("WAWebSchemaLabel").ListType.AI_RESPONDING
                  ? s._(/*BTDS*/ "AI responding")
                  : e === o("WAWebSchemaLabel").ListType.MENTIONS_AND_REPLIES
                    ? s._(/*BTDS*/ "To you")
                    : null;
    }
    function R(e) {
      return e === o("WAWebSchemaLabel").ListType.UNREAD
        ? s._(
            /*BTDS*/ "This list automatically updates with your unread chats.",
          )
        : e === o("WAWebSchemaLabel").ListType.GROUPS
          ? s._(
              /*BTDS*/ "This list automatically updates with your group chats.",
            )
          : e === o("WAWebSchemaLabel").ListType.FAVORITES
            ? s._(
                /*BTDS*/ "This list shows chats you've marked as favorites. Star a chat to add it here.",
              )
            : e === o("WAWebSchemaLabel").ListType.COMMUNITY
              ? s._(
                  /*BTDS*/ "This list automatically updates with your communities.",
                )
              : e === o("WAWebSchemaLabel").ListType.AI_HANDOFF
                ? s._(
                    /*BTDS*/ "Chats are added to this list when the customer needs a response from you. You can reply to the chat to remove it from this list.",
                  )
                : e === o("WAWebSchemaLabel").ListType.AI_RESPONDING
                  ? s._(
                      /*BTDS*/ "This list automatically updates for you with chats where AI agent is responding.",
                    )
                  : e === o("WAWebSchemaLabel").ListType.MENTIONS_AND_REPLIES
                    ? s._(
                        /*BTDS*/ "This list automatically updates with unread chats where you were mentioned or replied to.",
                      )
                    : null;
    }
    function L(e, t) {
      return (h(t) && t !== o("WAWebSchemaLabel").ListType.FAVORITES) || y(t)
        ? s._(/*BTDS*/ "{listName} (preset)", [s._param("listName", e)])
        : e;
    }
    function E(e) {
      return e === "AI_HANDOFF"
        ? s._(/*BTDS*/ "AI handoff").toString()
        : s._(/*BTDS*/ "AI responding").toString();
    }
    function k() {
      return o(
        "WAWebLabelCollection",
      ).LabelCollection.getServerAssignedLabelIdMap().size > 0
        ? c
        : u;
    }
    function I() {
      var e = o("WAWebLabelCollection").LabelCollection.countWhere(
        function (e) {
          return e.type === o("WAWebSchemaLabel").ListType.CUSTOM;
        },
      );
      return e >= k();
    }
    function T(e) {
      var t = k();
      return e
        ? s._(/*BTDS*/ "You can't add more than {max_count} lists", [
            s._param("max_count", t),
          ])
        : s._(/*BTDS*/ "You can't add more than {max_count} labels", [
            s._param("max_count", t),
          ]);
    }
    function D(e) {
      var t = s._(/*BTDS*/ "You\u2019ve created the maximum number of lists."),
        n = k();
      return e
        ? t
        : s._(/*BTDS*/ "You can't add more than {max_count} labels", [
            s._param("max_count", n),
          ]);
    }
    function x(e) {
      return typeof e == "function" ? e() : e;
    }
    function $(e, t) {
      var n, r;
      return e.filter === o("WAWebChatSearchFilters").SearchFilters.UNREAD ||
        e.filter === o("WAWebChatSearchFilters").SearchFilters.GROUP ||
        e.filter === o("WAWebChatSearchFilters").SearchFilters.FAVORITES ||
        e.filter === o("WAWebChatSearchFilters").SearchFilters.COMMUNITY ||
        e.filter === o("WAWebChatSearchFilters").SearchFilters.CHANNELS
        ? (n = t.get(String(e.filter))) != null
          ? n
          : 0
        : (r = t.get(String(e.listId))) != null
          ? r
          : 0;
    }
    function P() {
      var e,
        t = o("WAWebLabelCollection").LabelCollection.toArray(),
        n = new Map(),
        r = 0,
        a = 0,
        i = 0,
        l = 0,
        s = 0;
      return (
        t.forEach(function (e) {
          n.set(e.id, 0);
        }),
        o("WAWebChatCollection").ChatCollection.forEach(function (e) {
          e.archive ||
            !o("WAWebFrontendChatGetters").getShouldAppearInList(e) ||
            (o("WAWebChatMessageSearch").matchFilter(e, {
              kind: o("WAWebChatSearchFilters").SearchFilters.UNREAD,
            }) && r++,
            o("WAWebChatGetters").getHasUnread(e) &&
              (o("WAWebChatMessageSearch").matchFilter(e, {
                kind: o("WAWebChatSearchFilters").SearchFilters.GROUP,
              }) && a++,
              o("WAWebChatMessageSearch").matchFilter(e, {
                kind: o("WAWebChatSearchFilters").SearchFilters.COMMUNITY,
              }) && l++,
              o("WAWebChatMessageSearch").matchFilter(e, {
                kind: o("WAWebChatSearchFilters").SearchFilters.FAVORITES,
              }) && i++,
              e.labels != null &&
                e.labels.length > 0 &&
                e.labels.forEach(function (e) {
                  var t,
                    r = (t = n.get(e)) != null ? t : 0;
                  n.set(e, r + 1);
                })));
        }),
        n.set(
          String((e = o("WAWebChatSearchFilters")).SearchFilters.UNREAD),
          r,
        ),
        n.set(String(e.SearchFilters.GROUP), a),
        n.set(String(e.SearchFilters.FAVORITES), i),
        n.set(String(e.SearchFilters.COMMUNITY), l),
        n.set(String(e.SearchFilters.CHANNELS), s),
        n
      );
    }
    function N(e) {
      if (e != null)
        switch (e) {
          case o("WAWebChatSearchFilters").SearchFilters.UNREAD:
            return o("WAWebSchemaLabel").ListType.UNREAD;
          case o("WAWebChatSearchFilters").SearchFilters.GROUP:
            return o("WAWebSchemaLabel").ListType.GROUPS;
          case o("WAWebChatSearchFilters").SearchFilters.FAVORITES:
            return o("WAWebSchemaLabel").ListType.FAVORITES;
          case o("WAWebChatSearchFilters").SearchFilters.COMMUNITY:
            return o("WAWebSchemaLabel").ListType.COMMUNITY;
          case o("WAWebChatSearchFilters").SearchFilters.TO_YOU:
            return o("WAWebSchemaLabel").ListType.MENTIONS_AND_REPLIES;
          case o("WAWebChatSearchFilters").SearchFilters.LABELS:
            return o("WAWebSchemaLabel").ListType.CUSTOM;
          default:
            return null;
        }
    }
    function M(e) {
      var t;
      if (
        (e.label != null
          ? (t = o("WAWebLabelCollection").LabelCollection.get(e.label))
          : e.kind ===
              o("WAWebChatSearchFilters").SearchFilters.AI_RESPONDING &&
            (t = o("WAWebLabelCollection")
              .LabelCollection.toArray()
              .find(function (e) {
                return e.type === o("WAWebSchemaLabel").ListType.AI_RESPONDING;
              })),
        t != null && t.name != null)
      ) {
        var n,
          r = S(t.type);
        return {
          listId: t.id,
          listName:
            (n = r == null ? void 0 : r.toString()) != null ? n : t.name,
        };
      }
      return null;
    }
    ((l.getAllLabelColors = d),
      (l.colorIndexToHex = m),
      (l.getSelectableLabelColors = p),
      (l.sortLabels = f),
      (l.isBuiltInList = h),
      (l.isAiList = y),
      (l.isOverflowOnlyToYouPill = C),
      (l.shouldShowListIcon = b),
      (l.isDisableablePresetList = v),
      (l.getPresetListLocalizedName = S),
      (l.getPresetListHelperText = R),
      (l.getListDisplayName = L),
      (l.getExpectedAiLabelName = E),
      (l.isListFlowMaxListsCountReached = I),
      (l.getReachMaxLabelCountTextForBizLabelDrawer = T),
      (l.getReachMaxLabelCountText = D),
      (l.resolvePillLabel = x),
      (l.getUnreadChatsCountForFilter = $),
      (l.getListsUnreadChatCountMap = P),
      (l.getListTypeFromFilter = N),
      (l.getManageListInfo = M));
  },
  226,
);
