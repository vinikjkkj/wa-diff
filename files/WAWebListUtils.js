__d(
  "WAWebListUtils",
  [
    "fbt",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebChatSearchFilters",
    "WAWebConnModel",
    "WAWebGroupType",
    "WAWebLabelCollection",
    "WAWebLabelConstants",
    "WAWebLabelPillColors",
    "WAWebListsGatingUtils",
    "WAWebMobilePlatforms",
    "WAWebNewsletterCollection",
    "WAWebNewsletterGatingUtils",
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
        ? o("WAWebLabelPillColors").CUSTOM_LABEL_COLOR_INDICES.map(
            function (e) {
              return {
                hexColor: o("WAWebLabelPillColors").getDotColor(e),
                originalIndex: e,
              };
            },
          )
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
    ]);
    function h(e) {
      return e == null ? !1 : g.has(e);
    }
    function y(e, t) {
      return (
        o("WAWebListsGatingUtils").isListsEnabled() &&
        o("WAWebMobilePlatforms").isSMB() &&
        (e === o("WAWebSchemaLabel").ListType.CUSTOM ||
          e === o("WAWebSchemaLabel").ListType.PREDEFINED) &&
        t != null
      );
    }
    function C(e) {
      return h(e) && e !== o("WAWebSchemaLabel").ListType.FAVORITES;
    }
    function b(e) {
      return e === o("WAWebSchemaLabel").ListType.UNREAD
        ? s._(/*BTDS*/ "Unread")
        : e === o("WAWebSchemaLabel").ListType.GROUPS
          ? s._(/*BTDS*/ "Groups")
          : e === o("WAWebSchemaLabel").ListType.FAVORITES
            ? s._(/*BTDS*/ "Favorites")
            : e === o("WAWebSchemaLabel").ListType.COMMUNITY
              ? s._(/*BTDS*/ "Communities")
              : null;
    }
    function v(e) {
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
              : null;
    }
    function S(e, t) {
      return h(t) && t !== o("WAWebSchemaLabel").ListType.FAVORITES
        ? s._(/*BTDS*/ "{listName} (preset)", [s._param("listName", e)])
        : e;
    }
    function R(e) {
      return e === "AI_HANDOFF"
        ? s._(/*BTDS*/ "AI handoff").toString()
        : s._(/*BTDS*/ "AI responding").toString();
    }
    function L() {
      return o(
        "WAWebLabelCollection",
      ).LabelCollection.getServerAssignedLabelIdMap().size > 0
        ? c
        : u;
    }
    function E() {
      var e = o("WAWebMobilePlatforms").isSMB(),
        t = o("WAWebListsGatingUtils").isListsEnabled();
      if (e && !t)
        return o("WAWebLabelCollection").LabelCollection.length >= L();
      var n = o("WAWebLabelCollection").LabelCollection.countWhere(
        function (e) {
          return e.type === o("WAWebSchemaLabel").ListType.CUSTOM;
        },
      );
      return n >= L();
    }
    function k(e) {
      var t = L();
      return e
        ? s._(/*BTDS*/ "You can't add more than {max_count} lists", [
            s._param("max_count", t),
          ])
        : s._(/*BTDS*/ "You can't add more than {max_count} labels", [
            s._param("max_count", t),
          ]);
    }
    function I(e) {
      var t = s._(/*BTDS*/ "You\u2019ve created the maximum number of lists."),
        n = L();
      return e
        ? t
        : s._(/*BTDS*/ "You can't add more than {max_count} labels", [
            s._param("max_count", n),
          ]);
    }
    function T(e, t) {
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
    function D() {
      var e = o("WAWebLabelCollection").LabelCollection.toArray(),
        t = new Map(),
        n = 0,
        a = 0,
        i = 0,
        l = 0,
        s = o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled()
          ? r("WAWebNewsletterCollection").filter(function (e) {
              var t;
              return (
                ((t = e.newsletterMetadata) == null
                  ? void 0
                  : t.isSubscribedOrOwned) &&
                !e.archive &&
                !e.isLocked &&
                e.unreadCount > 0
              );
            }).length
          : 0;
      return (
        e.forEach(function (e) {
          t.set(e.id, 0);
        }),
        o("WAWebChatCollection").ChatCollection.forEach(function (e) {
          if (e.unreadCount !== 0 && !e.archive && !e.isLocked) {
            if ((n++, o("WAWebChatGetters").getIsGroup(e))) {
              var r;
              a++;
              var s = (r = e.groupMetadata) == null ? void 0 : r.groupType;
              (s === o("WAWebGroupType").GroupType.COMMUNITY ||
                s === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ||
                s === o("WAWebGroupType").GroupType.LINKED_SUBGROUP ||
                s === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP) &&
                l++;
            }
            (e.isFavorite && i++,
              e.labels != null &&
                e.labels.length > 0 &&
                e.labels.forEach(function (e) {
                  if (t.has(e)) {
                    var n,
                      r = (n = t.get(e)) != null ? n : 0;
                    t.set(e, r + 1);
                  } else t.set(e, 1);
                }));
          }
        }),
        t.set(String(o("WAWebChatSearchFilters").SearchFilters.UNREAD), n),
        t.set(String(o("WAWebChatSearchFilters").SearchFilters.GROUP), a),
        t.set(String(o("WAWebChatSearchFilters").SearchFilters.FAVORITES), i),
        t.set(String(o("WAWebChatSearchFilters").SearchFilters.COMMUNITY), l),
        t.set(String(o("WAWebChatSearchFilters").SearchFilters.CHANNELS), s),
        t
      );
    }
    function x(e) {
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
          case o("WAWebChatSearchFilters").SearchFilters.LABELS:
            return o("WAWebSchemaLabel").ListType.CUSTOM;
          default:
            return null;
        }
    }
    function $(e) {
      var t;
      return (
        e.label != null &&
          (t = o("WAWebLabelCollection").LabelCollection.get(e.label)),
        t != null && t.name != null ? { listId: t.id, listName: t.name } : null
      );
    }
    ((l.getAllLabelColors = d),
      (l.colorIndexToHex = m),
      (l.getSelectableLabelColors = p),
      (l.sortLabels = f),
      (l.isBuiltInList = h),
      (l.shouldShowListIcon = y),
      (l.isDisableablePresetList = C),
      (l.getPresetListLocalizedName = b),
      (l.getPresetListHelperText = v),
      (l.getListDisplayName = S),
      (l.getExpectedAiLabelName = R),
      (l.isListFlowMaxListsCountReached = E),
      (l.getReachMaxLabelCountTextForBizLabelDrawer = k),
      (l.getReachMaxLabelCountText = I),
      (l.getUnreadChatsCountForFilter = T),
      (l.getListsUnreadChatCountMap = D),
      (l.getListTypeFromFilter = x),
      (l.getManageListInfo = $));
  },
  226,
);
