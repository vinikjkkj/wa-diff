__d(
  "WAWebListUtils",
  [
    "fbt",
    "WALogger",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebChatMessageSearch",
    "WAWebChatSearchFilters",
    "WAWebConnModel",
    "WAWebCustomerManagerGating",
    "WAWebFrontendChatGetters",
    "WAWebInboxFiltersGatingUtils",
    "WAWebLabelCollection",
    "WAWebLabelConstants",
    "WAWebLabelPillColors",
    "WAWebLeadListConstants",
    "WAWebListsGatingUtils",
    "WAWebMobilePlatforms",
    "WAWebSchemaLabel",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = 20,
      d = 22;
    function m() {
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
    function p(e) {
      var t,
        n = m();
      return (t = n[e]) != null ? t : n[0];
    }
    function _() {
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
        : m().map(function (e, t) {
            return { hexColor: e, originalIndex: t };
          });
    }
    function f(e, t) {
      var n = parseInt(e.id, 10),
        r = parseInt(t.id, 10);
      return Number.isNaN(n) || Number.isNaN(r) ? 0 : n - r;
    }
    function g(e) {
      e.sort(function (e, t) {
        var n = e.orderIndex - t.orderIndex;
        return n === 0 ? f(e, t) : n;
      });
    }
    var h = new Set([
      (u = o("WAWebSchemaLabel")).ListType.UNREAD,
      u.ListType.GROUPS,
      u.ListType.FAVORITES,
      u.ListType.COMMUNITY,
      u.ListType.MENTIONS_AND_REPLIES,
    ]);
    function y(e) {
      return e == null ? !1 : h.has(e);
    }
    function C(t) {
      return t == null || o("WAWebSchemaLabel").ListType.isValid(t)
        ? !1
        : (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[Lists] skipped a list of unknown type ",
                  "",
                ])),
              String(t),
            )
            .sendLogs("unknown-list-type-skipped", { sampling: 0.01 }),
          !0);
    }
    function b(e) {
      return (
        e === o("WAWebSchemaLabel").ListType.AI_HANDOFF ||
        e === o("WAWebSchemaLabel").ListType.AI_RESPONDING
      );
    }
    function v(e) {
      return (
        (e == null ? void 0 : e.predefinedId) ===
          o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID &&
        o("WAWebCustomerManagerGating").customerManagerEnabled()
      );
    }
    function S(e) {
      return (
        y(e == null ? void 0 : e.type) || b(e == null ? void 0 : e.type) || v(e)
      );
    }
    function R(e) {
      return (
        e.filter === o("WAWebChatSearchFilters").SearchFilters.TO_YOU &&
        e.listId == null
      );
    }
    function L(e) {
      return (
        e === o("WAWebSchemaLabel").ListType.MENTIONS_AND_REPLIES &&
        !o("WAWebInboxFiltersGatingUtils").inboxToYouFilterEnabled()
      );
    }
    function E(e, t) {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        (e === o("WAWebSchemaLabel").ListType.CUSTOM ||
          e === o("WAWebSchemaLabel").ListType.PREDEFINED) &&
        t != null
      );
    }
    function k(e) {
      return (y(e) && e !== o("WAWebSchemaLabel").ListType.FAVORITES) || b(e);
    }
    function I(e) {
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
                    ? s._(/*BTDS*/ "Mentions and replies")
                    : null;
    }
    function T(e) {
      return e === o("WAWebSchemaLabel").ListType.MENTIONS_AND_REPLIES
        ? s._(/*BTDS*/ "Mentions\u2026")
        : null;
    }
    function D(e) {
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
    function x(e, t) {
      if ((y(t) && t !== o("WAWebSchemaLabel").ListType.FAVORITES) || b(t)) {
        var n;
        return s._(/*BTDS*/ "{listName} (preset)", [
          s._param("listName", (n = I(t)) != null ? n : e),
        ]);
      }
      return e;
    }
    function $(e) {
      return e === "AI_HANDOFF"
        ? s._(/*BTDS*/ "AI handoff").toString()
        : s._(/*BTDS*/ "AI responding").toString();
    }
    function P() {
      return o(
        "WAWebLabelCollection",
      ).LabelCollection.getServerAssignedLabelIdMap().size > 0
        ? d
        : c;
    }
    function N() {
      var e = o("WAWebLabelCollection").LabelCollection.countWhere(
        function (e) {
          return e.type === o("WAWebSchemaLabel").ListType.CUSTOM;
        },
      );
      return e >= P();
    }
    function M() {
      var e = P();
      return s._(/*BTDS*/ "You can't add more than {max_count} lists", [
        s._param("max_count", e),
      ]);
    }
    function w() {
      return s._(/*BTDS*/ "You\u2019ve created the maximum number of lists.");
    }
    function A(e) {
      return typeof e == "function" ? e() : e;
    }
    function F(e, t) {
      if (!t) {
        var n = T(e.listType);
        if (n != null) return n;
      }
      return A(e.getLabel);
    }
    function O(e, t) {
      var n, r;
      return e.filter === o("WAWebChatSearchFilters").SearchFilters.UNREAD ||
        e.filter === o("WAWebChatSearchFilters").SearchFilters.GROUP ||
        e.filter === o("WAWebChatSearchFilters").SearchFilters.FAVORITES ||
        e.filter === o("WAWebChatSearchFilters").SearchFilters.COMMUNITY ||
        e.filter === o("WAWebChatSearchFilters").SearchFilters.CHANNELS ||
        e.filter === o("WAWebChatSearchFilters").SearchFilters.TO_YOU ||
        e.filter === o("WAWebChatSearchFilters").SearchFilters.META_AI
        ? (n = t.get(String(e.filter))) != null
          ? n
          : 0
        : (r = t.get(String(e.listId))) != null
          ? r
          : 0;
    }
    var B = { channelsPillCount: 0, unreadPillCount: 0 };
    function W(e) {
      e === void 0 && (e = B);
      var t = o("WAWebLabelCollection").LabelCollection.toArray(),
        n = new Map(),
        r = 0,
        a = 0,
        i = 0,
        l = 0,
        s = 0,
        u = 0,
        c = e.channelsPillCount;
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
            o("WAWebChatMessageSearch").matchFilter(e, {
              kind: o("WAWebChatSearchFilters").SearchFilters.TO_YOU,
            }) && s++,
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
              o("WAWebChatMessageSearch").matchFilter(e, {
                kind: o("WAWebChatSearchFilters").SearchFilters.META_AI,
              }) && u++,
              e.labels != null &&
                e.labels.length > 0 &&
                e.labels.forEach(function (e) {
                  var t,
                    r = (t = n.get(e)) != null ? t : 0;
                  n.set(e, r + 1);
                })));
        }),
        n.set(
          String(o("WAWebChatSearchFilters").SearchFilters.UNREAD),
          r + e.unreadPillCount,
        ),
        n.set(String(o("WAWebChatSearchFilters").SearchFilters.GROUP), a),
        n.set(String(o("WAWebChatSearchFilters").SearchFilters.FAVORITES), i),
        n.set(String(o("WAWebChatSearchFilters").SearchFilters.COMMUNITY), l),
        n.set(String(o("WAWebChatSearchFilters").SearchFilters.CHANNELS), c),
        n.set(String(o("WAWebChatSearchFilters").SearchFilters.TO_YOU), s),
        n.set(String(o("WAWebChatSearchFilters").SearchFilters.META_AI), u),
        n
      );
    }
    function q(e) {
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
    function U(e) {
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
          r = I(t.type);
        return {
          listId: t.id,
          listName:
            (n = r == null ? void 0 : r.toString()) != null ? n : t.name,
        };
      }
      return null;
    }
    function V() {
      return s._(/*BTDS*/ "Lead stage");
    }
    function H() {
      return s._(/*BTDS*/ "Lead stage (preset)");
    }
    ((l.getAllLabelColors = m),
      (l.colorIndexToHex = p),
      (l.getSelectableLabelColors = _),
      (l.sortLabels = g),
      (l.isBuiltInList = y),
      (l.skipsListOfUnknownType = C),
      (l.isAiList = b),
      (l.isLeadList = v),
      (l.hasFixedIdentity = S),
      (l.isOverflowOnlyToYouPill = R),
      (l.isHiddenToYouList = L),
      (l.shouldShowListIcon = E),
      (l.isDisableablePresetList = k),
      (l.getPresetListLocalizedName = I),
      (l.getPresetListShortName = T),
      (l.getPresetListHelperText = D),
      (l.getListDisplayName = x),
      (l.getExpectedAiLabelName = $),
      (l.isListFlowMaxListsCountReached = N),
      (l.getReachMaxLabelCountTextForBizLabelDrawer = M),
      (l.getReachMaxLabelCountText = w),
      (l.resolvePillLabel = A),
      (l.resolvePillLabelForState = F),
      (l.getUnreadChatsCountForFilter = O),
      (l.getListsUnreadChatCountMap = W),
      (l.getListTypeFromFilter = q),
      (l.getManageListInfo = U),
      (l.getLeadStageListName = V),
      (l.getLeadListManagerDisplayName = H));
  },
  226,
);
