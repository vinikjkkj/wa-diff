__d(
  "WAWebListUtils",
  [
    "fbt",
    "JSResourceForInteraction",
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
    "justknobx",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = 20,
      m = 22;
    function p() {
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
    function _(e) {
      var t,
        n = p();
      return (t = n[e]) != null ? t : n[0];
    }
    function f() {
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
        : p().map(function (e, t) {
            return { hexColor: e, originalIndex: t };
          });
    }
    function g(e, t) {
      var n = parseInt(e.id, 10),
        r = parseInt(t.id, 10);
      return Number.isNaN(n) || Number.isNaN(r) ? 0 : n - r;
    }
    function h(e) {
      e.sort(function (e, t) {
        var n = e.orderIndex - t.orderIndex;
        return n === 0 ? g(e, t) : n;
      });
    }
    var y = new Set([
      (c = o("WAWebSchemaLabel")).ListType.UNREAD,
      c.ListType.GROUPS,
      c.ListType.FAVORITES,
      c.ListType.COMMUNITY,
      c.ListType.MENTIONS_AND_REPLIES,
    ]);
    function C(e) {
      return e == null ? !1 : y.has(e);
    }
    function b(t) {
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
    function v(e) {
      return (
        e === o("WAWebSchemaLabel").ListType.AI_HANDOFF ||
        e === o("WAWebSchemaLabel").ListType.AI_RESPONDING
      );
    }
    function S(e) {
      return (
        (e == null ? void 0 : e.predefinedId) ===
          o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID &&
        o("WAWebCustomerManagerGating").customerManagerEnabled()
      );
    }
    function R(e) {
      return (
        C(e == null ? void 0 : e.type) ||
        v(e == null ? void 0 : e.type) ||
        S(e) ||
        j(e)
      );
    }
    function L(e) {
      return (
        e.filter === o("WAWebChatSearchFilters").SearchFilters.TO_YOU &&
        e.listId == null
      );
    }
    function E(e) {
      return (
        e === o("WAWebSchemaLabel").ListType.MENTIONS_AND_REPLIES &&
        !o("WAWebInboxFiltersGatingUtils").inboxToYouFilterEnabled()
      );
    }
    function k(e, t) {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        (e === o("WAWebSchemaLabel").ListType.CUSTOM ||
          e === o("WAWebSchemaLabel").ListType.PREDEFINED) &&
        t != null
      );
    }
    function I(e) {
      return (
        (C(e) && e !== o("WAWebSchemaLabel").ListType.FAVORITES) ||
        v(e) ||
        e === o("WAWebSchemaLabel").ListType.META_AI_THREAD
      );
    }
    function T(e) {
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
                    : e === o("WAWebSchemaLabel").ListType.META_AI_THREAD
                      ? s._(/*BTDS*/ "AI")
                      : null;
    }
    function D(e) {
      return e === o("WAWebSchemaLabel").ListType.MENTIONS_AND_REPLIES
        ? s._(/*BTDS*/ "Mentions\u2026")
        : null;
    }
    function x(e) {
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
    function $(e, t) {
      if (t === o("WAWebSchemaLabel").ListType.META_AI_THREAD) {
        var n;
        return (n = T(t)) != null ? n : e;
      }
      if ((C(t) && t !== o("WAWebSchemaLabel").ListType.FAVORITES) || v(t)) {
        var r;
        return s._(/*BTDS*/ "{listName} (preset)", [
          s._param("listName", (r = T(t)) != null ? r : e),
        ]);
      }
      return e;
    }
    function P(e) {
      return e === "AI_HANDOFF"
        ? s._(/*BTDS*/ "AI handoff").toString()
        : s._(/*BTDS*/ "AI responding").toString();
    }
    function N() {
      return o(
        "WAWebLabelCollection",
      ).LabelCollection.getServerAssignedLabelIdMap().size > 0
        ? m
        : d;
    }
    function M() {
      var e = o("WAWebLabelCollection").LabelCollection.countWhere(
        function (e) {
          return e.type === o("WAWebSchemaLabel").ListType.CUSTOM;
        },
      );
      return e >= N();
    }
    function w() {
      var e = N();
      return s._(/*BTDS*/ "You can't add more than {max_count} lists", [
        s._param("max_count", e),
      ]);
    }
    function A() {
      return s._(/*BTDS*/ "You\u2019ve created the maximum number of lists.");
    }
    function F(e) {
      return typeof e == "function" ? e() : e;
    }
    function O(e, t) {
      if (!t) {
        var n = D(e.listType);
        if (n != null) return n;
      }
      return F(e.getLabel);
    }
    function B(e, t) {
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
    var W = { channelsPillCount: 0, unreadPillCount: 0 };
    function q(e) {
      e === void 0 && (e = W);
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
    function U(e) {
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
    function V(e) {
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
          r = T(t.type);
        return {
          listId: t.id,
          listName:
            (n = r == null ? void 0 : r.toString()) != null ? n : t.name,
        };
      }
      return null;
    }
    function H() {
      return s._(/*BTDS*/ "Lead stage");
    }
    function G() {
      return s._(/*BTDS*/ "Lead stage (preset)");
    }
    var z = "-1004";
    function j(e) {
      return (
        e != null &&
        (e.type === o("WAWebSchemaLabel").ListType.META_AI_THREAD || e.id === z)
      );
    }
    function K() {
      return r("justknobx")._("7781");
    }
    var Q = r("JSResourceForInteraction")(
      "WAWebMetaAiListActionsImpl",
    ).__setRef("WAWebListUtils");
    function X() {
      return Q.load().catch(function () {
        return (
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[Lists] loading the Meta AI list module failed",
                ])),
            )
            .sendLogs("meta-ai-list-load-failed", { sampling: 0.01 }),
          null
        );
      });
    }
    ((l.getAllLabelColors = p),
      (l.colorIndexToHex = _),
      (l.getSelectableLabelColors = f),
      (l.sortLabels = h),
      (l.isBuiltInList = C),
      (l.skipsListOfUnknownType = b),
      (l.isAiList = v),
      (l.isLeadList = S),
      (l.hasFixedIdentity = R),
      (l.isOverflowOnlyToYouPill = L),
      (l.isHiddenToYouList = E),
      (l.shouldShowListIcon = k),
      (l.isDisableablePresetList = I),
      (l.getPresetListLocalizedName = T),
      (l.getPresetListShortName = D),
      (l.getPresetListHelperText = x),
      (l.getListDisplayName = $),
      (l.getExpectedAiLabelName = P),
      (l.isListFlowMaxListsCountReached = M),
      (l.getReachMaxLabelCountTextForBizLabelDrawer = w),
      (l.getReachMaxLabelCountText = A),
      (l.resolvePillLabel = F),
      (l.resolvePillLabelForState = O),
      (l.getUnreadChatsCountForFilter = B),
      (l.getListsUnreadChatCountMap = q),
      (l.getListTypeFromFilter = U),
      (l.getManageListInfo = V),
      (l.getLeadStageListName = H),
      (l.getLeadListManagerDisplayName = G),
      (l.META_AI_LIST_ID = z),
      (l.isDeviceLocalList = j),
      (l.isMetaAiListEnabled = K),
      (l.loadMetaAiList = X));
  },
  226,
);
