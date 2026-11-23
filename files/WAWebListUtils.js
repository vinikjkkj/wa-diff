__d(
  "WAWebListUtils",
  [
    "fbt",
    "JSResourceForInteraction",
    "WALogger",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebChatListVisibilityUtils",
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
    var y = o("WAWebChatListVisibilityUtils").createChatListVisibilityPolicy({
      UNREAD: (c = o("WAWebSchemaLabel")).ListType.UNREAD,
      GROUPS: c.ListType.GROUPS,
      FAVORITES: c.ListType.FAVORITES,
      COMMUNITY: c.ListType.COMMUNITY,
      MENTIONS_AND_REPLIES: c.ListType.MENTIONS_AND_REPLIES,
      SERVER_ASSIGNED: c.ListType.SERVER_ASSIGNED,
      CHANNELS: c.ListType.CHANNELS,
      AI_HANDOFF: c.ListType.AI_HANDOFF,
      AI_RESPONDING: c.ListType.AI_RESPONDING,
    });
    function C(e) {
      return y.isBuiltInList(e);
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
        K(e)
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
        ? s._(/*BTDS*/ "")
        : e === o("WAWebSchemaLabel").ListType.GROUPS
          ? s._(/*BTDS*/ "")
          : e === o("WAWebSchemaLabel").ListType.FAVORITES
            ? s._(/*BTDS*/ "")
            : e === o("WAWebSchemaLabel").ListType.COMMUNITY
              ? s._(/*BTDS*/ "")
              : e === o("WAWebSchemaLabel").ListType.AI_HANDOFF
                ? s._(/*BTDS*/ "")
                : e === o("WAWebSchemaLabel").ListType.AI_RESPONDING
                  ? s._(/*BTDS*/ "")
                  : e === o("WAWebSchemaLabel").ListType.MENTIONS_AND_REPLIES
                    ? s._(/*BTDS*/ "")
                    : e === o("WAWebSchemaLabel").ListType.META_AI_THREAD
                      ? s._(/*BTDS*/ "")
                      : null;
    }
    function D(e) {
      return e === o("WAWebSchemaLabel").ListType.MENTIONS_AND_REPLIES
        ? s._(/*BTDS*/ "")
        : null;
    }
    function x(e) {
      return e === o("WAWebSchemaLabel").ListType.UNREAD
        ? s._(/*BTDS*/ "")
        : e === o("WAWebSchemaLabel").ListType.GROUPS
          ? s._(/*BTDS*/ "")
          : e === o("WAWebSchemaLabel").ListType.FAVORITES
            ? s._(/*BTDS*/ "")
            : e === o("WAWebSchemaLabel").ListType.COMMUNITY
              ? s._(/*BTDS*/ "")
              : e === o("WAWebSchemaLabel").ListType.META_AI_THREAD
                ? s._(/*BTDS*/ "")
                : e === o("WAWebSchemaLabel").ListType.AI_HANDOFF
                  ? s._(/*BTDS*/ "")
                  : e === o("WAWebSchemaLabel").ListType.AI_RESPONDING
                    ? s._(/*BTDS*/ "")
                    : e === o("WAWebSchemaLabel").ListType.MENTIONS_AND_REPLIES
                      ? s._(/*BTDS*/ "")
                      : null;
    }
    function $(e, t) {
      if (I(t)) {
        var n;
        return s._(/*BTDS*/ "", [
          s._param("listName", (n = T(t)) != null ? n : e),
        ]);
      }
      return e;
    }
    function P(e) {
      return e === "AI_HANDOFF"
        ? s._(/*BTDS*/ "").toString()
        : s._(/*BTDS*/ "").toString();
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
      return s._(/*BTDS*/ "", [s._param("max_count", e)]);
    }
    function A() {
      return s._(/*BTDS*/ "");
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
      var n, r, a, i;
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
        : e.filter === o("WAWebChatSearchFilters").SearchFilters.NETWORK
          ? (r = t.get(W((a = e.orgId) != null ? a : ""))) != null
            ? r
            : 0
          : (i = t.get(String(e.listId))) != null
            ? i
            : 0;
    }
    function W(e) {
      return "network:" + e;
    }
    var q = { channelsPillCount: 0, unreadPillCount: 0 };
    function U(e, t) {
      (e === void 0 && (e = q), t === void 0 && (t = []));
      var n = o("WAWebLabelCollection").LabelCollection.toArray(),
        r = new Map(),
        a = 0,
        i = 0,
        l = 0,
        s = 0,
        u = 0,
        c = 0,
        d = e.channelsPillCount;
      return (
        n.forEach(function (e) {
          r.set(e.id, 0);
        }),
        t.forEach(function (e) {
          r.set(W(e), 0);
        }),
        o("WAWebChatCollection").ChatCollection.forEach(function (e) {
          e.archive ||
            !o("WAWebFrontendChatGetters").getShouldAppearInList(e) ||
            (o("WAWebChatMessageSearch").matchFilter(e, {
              kind: o("WAWebChatSearchFilters").SearchFilters.UNREAD,
            }) && a++,
            o("WAWebChatMessageSearch").matchFilter(e, {
              kind: o("WAWebChatSearchFilters").SearchFilters.TO_YOU,
            }) && u++,
            o("WAWebChatGetters").getHasUnread(e) &&
              (o("WAWebChatMessageSearch").matchFilter(e, {
                kind: o("WAWebChatSearchFilters").SearchFilters.GROUP,
              }) && i++,
              o("WAWebChatMessageSearch").matchFilter(e, {
                kind: o("WAWebChatSearchFilters").SearchFilters.COMMUNITY,
              }) && s++,
              o("WAWebChatMessageSearch").matchFilter(e, {
                kind: o("WAWebChatSearchFilters").SearchFilters.FAVORITES,
              }) && l++,
              o("WAWebChatMessageSearch").matchFilter(e, {
                kind: o("WAWebChatSearchFilters").SearchFilters.META_AI,
              }) && c++,
              t.forEach(function (t) {
                if (
                  o("WAWebChatMessageSearch").matchFilter(e, {
                    kind: o("WAWebChatSearchFilters").SearchFilters.NETWORK,
                    orgId: t,
                  })
                ) {
                  var n,
                    a = W(t);
                  r.set(a, ((n = r.get(a)) != null ? n : 0) + 1);
                }
              }),
              e.labels != null &&
                e.labels.length > 0 &&
                e.labels.forEach(function (e) {
                  var t,
                    n = (t = r.get(e)) != null ? t : 0;
                  r.set(e, n + 1);
                })));
        }),
        r.set(
          String(o("WAWebChatSearchFilters").SearchFilters.UNREAD),
          a + e.unreadPillCount,
        ),
        r.set(String(o("WAWebChatSearchFilters").SearchFilters.GROUP), i),
        r.set(String(o("WAWebChatSearchFilters").SearchFilters.FAVORITES), l),
        r.set(String(o("WAWebChatSearchFilters").SearchFilters.COMMUNITY), s),
        r.set(String(o("WAWebChatSearchFilters").SearchFilters.CHANNELS), d),
        r.set(String(o("WAWebChatSearchFilters").SearchFilters.TO_YOU), u),
        r.set(String(o("WAWebChatSearchFilters").SearchFilters.META_AI), c),
        r
      );
    }
    function V(e) {
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
    function H(e) {
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
    function G() {
      return s._(/*BTDS*/ "");
    }
    function z() {
      return s._(/*BTDS*/ "");
    }
    var j = "-1004";
    function K(e) {
      return (
        e != null &&
        (e.type === o("WAWebSchemaLabel").ListType.META_AI_THREAD || e.id === j)
      );
    }
    function Q() {
      return r("justknobx")._("7781");
    }
    var X = r("JSResourceForInteraction")(
      "WAWebMetaAiListActionsImpl",
    ).__setRef("WAWebListUtils");
    function Y() {
      return X.load().catch(function () {
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
      (l.getListsUnreadChatCountMap = U),
      (l.getListTypeFromFilter = V),
      (l.getManageListInfo = H),
      (l.getLeadStageListName = G),
      (l.getLeadListManagerDisplayName = z),
      (l.META_AI_LIST_ID = j),
      (l.isDeviceLocalList = K),
      (l.isMetaAiListEnabled = Q),
      (l.loadMetaAiList = Y));
  },
  226,
);
