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
      return o("WAWebConnModel").Conn.platform ===
        o("WAWebMobilePlatforms").PLATFORMS.SMBI
        ? o("WAWebLabelConstants").IPHONE_LABEL_COLOR_PALETTE
        : o("WAWebLabelConstants").ANDROID_LABEL_COLOR_PALETTE;
    }
    function m(e) {
      return d()[e];
    }
    var p = function (t, n) {
        var e = parseInt(t.id, 10),
          r = parseInt(n.id, 10);
        return Number.isNaN(e) || Number.isNaN(r) ? 0 : e - r;
      },
      _ = function (t) {
        t.sort(function (e, t) {
          var n = e.orderIndex - t.orderIndex;
          return n === 0 ? p(e, t) : n;
        });
      },
      f = new Set([
        (e = o("WAWebSchemaLabel")).ListType.UNREAD,
        e.ListType.GROUPS,
        e.ListType.FAVORITES,
        e.ListType.COMMUNITY,
      ]);
    function g(e) {
      return e == null ? !1 : f.has(e);
    }
    var h = function (t, n) {
      return (
        o("WAWebListsGatingUtils").isListsEnabled() &&
        o("WAWebMobilePlatforms").isSMB() &&
        t != null &&
        !g(t) &&
        n != null
      );
    };
    function y(e) {
      return g(e) && e !== o("WAWebSchemaLabel").ListType.FAVORITES;
    }
    function C(e, t) {
      return g(t) && t !== o("WAWebSchemaLabel").ListType.FAVORITES
        ? s._(/*BTDS*/ "{listName} (preset)", [s._param("listName", e)])
        : e;
    }
    function b() {
      return o(
        "WAWebLabelCollection",
      ).LabelCollection.getServerAssignedLabelIdMap().size > 0
        ? c
        : u;
    }
    function v() {
      var e = o("WAWebMobilePlatforms").isSMB(),
        t = o("WAWebListsGatingUtils").isListsEnabled();
      if (e && !t)
        return o("WAWebLabelCollection").LabelCollection.length >= b();
      var n = o("WAWebLabelCollection").LabelCollection.countWhere(
        function (e) {
          return e.type === o("WAWebSchemaLabel").ListType.CUSTOM;
        },
      );
      return n >= b();
    }
    function S(e) {
      var t = b();
      return e
        ? s._(/*BTDS*/ "You can't add more than {max_count} lists", [
            s._param("max_count", t),
          ])
        : s._(/*BTDS*/ "You can't add more than {max_count} labels", [
            s._param("max_count", t),
          ]);
    }
    function R(e) {
      var t = s._(/*BTDS*/ "You\u2019ve created the maximum number of lists."),
        n = b();
      return e
        ? t
        : s._(/*BTDS*/ "You can't add more than {max_count} labels", [
            s._param("max_count", n),
          ]);
    }
    var L = function (t, n) {
      var e, r;
      return t.filter === o("WAWebChatSearchFilters").SearchFilters.UNREAD ||
        t.filter === o("WAWebChatSearchFilters").SearchFilters.GROUP ||
        t.filter === o("WAWebChatSearchFilters").SearchFilters.FAVORITES ||
        t.filter === o("WAWebChatSearchFilters").SearchFilters.COMMUNITY ||
        t.filter === o("WAWebChatSearchFilters").SearchFilters.CHANNELS
        ? (e = n.get(String(t.filter))) != null
          ? e
          : 0
        : (r = n.get(String(t.listId))) != null
          ? r
          : 0;
    };
    function E() {
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
    function k(e) {
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
    function I(e) {
      var t;
      return (
        e.label != null &&
          (t = o("WAWebLabelCollection").LabelCollection.get(e.label)),
        t != null && t.name != null ? { listId: t.id, listName: t.name } : null
      );
    }
    ((l.getAllLabelColors = d),
      (l.colorIndexToHex = m),
      (l.sortLabels = _),
      (l.isBuiltInList = g),
      (l.shouldShowListIcon = h),
      (l.isDisableablePresetList = y),
      (l.getListDisplayName = C),
      (l.isListFlowMaxListsCountReached = v),
      (l.getReachMaxLabelCountTextForBizLabelDrawer = S),
      (l.getReachMaxLabelCountText = R),
      (l.getUnreadChatsCountForFilter = L),
      (l.getListsUnreadChatCountMap = E),
      (l.getListTypeFromFilter = k),
      (l.getManageListInfo = I));
  },
  226,
);
