__d(
  "WAWebCommunityTabDrawer.react",
  [
    "fbt",
    "WAWebChatCollection",
    "WAWebChatCommunityUtils",
    "WAWebChatLockUtils",
    "WAWebChatModel",
    "WAWebCmd",
    "WAWebCommunityActivityCollection",
    "WAWebCommunityActivityModel",
    "WAWebCommunityCells.react",
    "WAWebCommunityDailyUtils",
    "WAWebCommunityGatingUtils",
    "WAWebCommunityGroupJourneyEventImpl",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebEmptyCommunityTabNux.react",
    "WAWebErrorBoundary.react",
    "WAWebFlatList.react",
    "WAWebFlatListController",
    "WAWebGroupInfoSeparator.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebPrivacyModeIndicator.react",
    "WAWebSingleSelection",
    "WAWebTabOrder",
    "WAWebWamEnumChatFilterActionTypes",
    "WAWebWamEnumSurfaceType",
    "WDSIconIcAddCircle.react",
    "WDSMenuBarItem.react",
    "react",
    "useLazyRef",
    "useMergeRefs",
    "useWAWebCallbackOnce",
    "useWAWebDebouncedCallback",
    "useWAWebFocusOnMount",
    "useWAWebForceUpdate",
    "useWAWebIsKeyboardUser",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useRef,
      f = d.useState,
      g = {
        NEW_COMMUNITY_CELL: "NEW_COMMUNITY_CELL",
        COMMUNITY_HEADER_CELL: "COMMUNITY_HEADER",
        ACTIVITY_CELL: "ACTIVITY_CELL",
        SUBGROUP_CHAT_CELL: "SUBGROUP_CHAT_CELL",
        VIEW_ALL_CELL: "VIEW_ALL_CELL",
        GUTTER: "GUTTER",
      };
    function h() {
      return 20;
    }
    var y = { drawer: { backgroundColor: "x1280gxy", $$css: !0 } };
    function C() {
      return c.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    var b = function (t) {
        var e,
          n,
          r =
            (e =
              (n = o("WAWebChatCollection").ChatCollection.get(t.id)) == null
                ? void 0
                : n.t) != null
              ? e
              : Number.MIN_SAFE_INTEGER,
          a = t.joinedSubgroups.map(function (e) {
            var t, n;
            return (t =
              (n = o("WAWebChatCollection").ChatCollection.get(e)) == null
                ? void 0
                : n.t) != null
              ? t
              : Number.MIN_SAFE_INTEGER;
          });
        return Math.max.apply(Math, [r].concat(a));
      },
      v = function (t) {
        var e = t.filter(function (e) {
            return o("WAWebChatCollection").ChatCollection.get(e.id) != null;
          }),
          n = e.filter(function (e) {
            return !o(
              "WAWebChatCommunityUtils",
            ).isIntegrityDeactivatedCommunity(
              o("WAWebChatCollection").ChatCollection.get(e.id),
            );
          }),
          a = n.sort(function (e, t) {
            return b(t) - b(e);
          }),
          i = e.filter(function (e) {
            return (
              o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(
                o("WAWebChatCollection").ChatCollection.get(e.id),
              ) === !0
            );
          }),
          l = o("WAWebCommunityGatingUtils").communitiesCreationEnabled()
            ? [{ itemKey: "new-community-btn", type: g.NEW_COMMUNITY_CELL }]
            : [];
        return (
          a.forEach(function (e) {
            var t = [],
              n = e.id.toString(),
              a = o("WAWebChatCollection").ChatCollection.assertGet(e.id),
              i = e.joinedSubgroups
                .map(function (e) {
                  return o("WAWebChatCollection").ChatCollection.assertGet(e);
                })
                .filter(function (e) {
                  return o("WAWebChatLockUtils").chatIsAccessible(e);
                })
                .sort(function (e, t) {
                  var n, r;
                  return (
                    ((n = t == null ? void 0 : t.t) != null
                      ? n
                      : Number.MIN_SAFE_INTEGER) -
                    ((r = e == null ? void 0 : e.t) != null
                      ? r
                      : Number.MIN_SAFE_INTEGER)
                  );
                }),
              s = r("WAWebCommunityActivityCollection").getActivityFor(e.id),
              u = s.some(function (e) {
                return (
                  e.type ===
                  o("WAWebCommunityActivityModel").ActivityTypeType
                    .NEW_COMMUNITY
                );
              });
            t.push({
              itemKey: "community-header-" + n,
              type: g.COMMUNITY_HEADER_CELL,
              parentGroupMetadata: e,
              parentGroupChat: a,
              isNewCommunity: u,
            });
            var c = s.filter(function (t) {
              var n;
              return (
                t.type ===
                  o("WAWebCommunityActivityModel").ActivityTypeType
                    .SUB_GROUP_LINK &&
                ((n = e.lastSeenActivityTimestamp) != null ? n : 0) <
                  t.timestamp
              );
            });
            c.length &&
              t.push({
                itemKey: "community-activity-" + n,
                type: g.ACTIVITY_CELL,
                activities: c,
                parentGroupMetadata: e,
              });
            var d = i.find(function (e) {
              var t;
              return (t = e.groupMetadata) == null ? void 0 : t.defaultSubgroup;
            });
            d != null &&
              t.push({
                itemKey: "community-subgroup-" + d.id.toString(),
                type: g.SUBGROUP_CHAT_CELL,
                subgroup: d,
              });
            var m = i.filter(function (e) {
              return e !== d;
            });
            (m[0] != null &&
              t.push({
                itemKey: "community-subgroup-" + m[0].id.toString(),
                type: g.SUBGROUP_CHAT_CELL,
                subgroup: m[0],
              }),
              !c.length &&
                m[1] != null &&
                t.push({
                  itemKey: "community-subgroup-" + m[1].id.toString(),
                  type: g.SUBGROUP_CHAT_CELL,
                  subgroup: m[1],
                }),
              t.length > 1 &&
                t.push({
                  itemKey: "community-view-all-" + n,
                  type: g.VIEW_ALL_CELL,
                  parentGroupWid: e.id,
                  height: 52,
                }),
              t.push({
                itemKey: "community-gutter-" + n,
                type: g.GUTTER,
                height: h(),
              }),
              l.push.apply(l, t));
          }),
          i.forEach(function (e) {
            var t = [],
              n = e.id.toString(),
              r = o("WAWebChatCollection").ChatCollection.get(e.id);
            r != null &&
              (t.push({
                itemKey: "community-header-" + n,
                type: g.COMMUNITY_HEADER_CELL,
                parentGroupMetadata: e,
                parentGroupChat: r,
                isNewCommunity: !1,
              }),
              t.push({
                itemKey: "community-gutter-" + n,
                type: g.GUTTER,
                height: h(),
              }),
              l.push.apply(l, t));
          }),
          l.length && l[l.length - 1].type === g.GUTTER && l.pop(),
          l
        );
      };
    function S(t) {
      "use no forget";
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = f([]),
        u = l[0],
        d = l[1],
        h = r("useLazyRef")(function () {
          return new (r("WAWebFlatListController"))();
        }),
        b = _(),
        S = _(),
        R = r("useLazyRef")(function () {
          return new (r("WAWebSingleSelection"))([], function (e) {
            return e.itemKey;
          });
        }),
        L = _((n = i.initialScrollTop) != null ? n : 0),
        E = _(!1),
        k = r("useWAWebIsKeyboardUser")(),
        I = k.setIsKeyboardUser,
        T = m(
          function () {
            return u.filter(function (e) {
              return e.type !== g.GUTTER;
            });
          },
          [u],
        ),
        D = r("useWAWebCallbackOnce")(function (e) {
          i.onCommunityHome(e);
        }),
        x = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      o("useWAWebListener").useListener(
        r("WAWebCommunityActivityCollection"),
        "add remove change",
        x,
      );
      var $ = r("useWAWebCallbackOnce")(function (e) {
          i.onActivityCell(e.id);
        }),
        P = function (t) {
          var e = R.current.list.findIndex(function (e) {
            return e.itemKey === t.itemKey;
          });
          (R.current.set(e), N(t.subgroup));
        },
        N = function (t) {
          (o("WAWebCommunityDailyUtils").incrementCommunityTabEvent(
            o("WAWebCommunityDailyUtils").CommunityDailyTabMetricsType
              .TAB_GROUP_NAVIGATIONS,
          ),
            t instanceof o("WAWebChatModel").Chat &&
              t !== o("WAWebChatCollection").ChatCollection.getActive() &&
              o("WAWebCmd").Cmd.openChatFromUnread({ chat: t }));
        },
        M = r("useWAWebDebouncedCallback")(function (e) {
          e && e.preventDefault();
          var t = (e == null ? void 0 : e.type) === "keydown";
          I(t);
          var n = R.current.getVal();
          if (!(n == null || n.type !== g.SUBGROUP_CHAT_CELL)) {
            var r = n.subgroup;
            r && N(r);
          }
        }, 200),
        w = function () {
          if (b.current) {
            var e = R.current.value;
            if (e == null) return;
            var t = u.findIndex(function (t) {
              return t.itemKey === e.itemKey;
            });
            if (t !== -1) {
              var n;
              (n = b.current) == null || n.scrollIntoViewIfNeeded(t, 100);
            }
          }
        },
        A = function (t) {
          (w(),
            M(t),
            t == null || t.preventDefault(),
            t == null || t.stopPropagation());
        },
        F = function (t, n) {
          (R.current.setItemKey(t.itemKey), A(n));
        },
        O = function (t) {
          return t.type === g.COMMUNITY_HEADER_CELL;
        },
        B = function (t) {
          var e = R.current.getList(),
            n = R.current.index,
            r = e.slice(n + 1).find(O);
          r != null && F(r, t);
        },
        W = function (t) {
          var e = R.current.getList(),
            n = R.current.index,
            r = e
              .slice(0, n - 1)
              .reverse()
              .find(O);
          r != null && F(r, t);
        },
        q = function (t) {
          if (i.parentGroups.length !== 0) {
            var e = R.current.prev();
            e > -1 &&
              (R.current.setPrev(!0),
              w(),
              M(t),
              t == null || t.preventDefault(),
              t == null || t.stopPropagation());
          }
        },
        U = function (t) {
          if (i.parentGroups.length !== 0) {
            (t == null || t.preventDefault(), t == null || t.stopPropagation());
            var e = R.current.next();
            R.current.index !== e && (R.current.setNext(!0), w(), M(t));
          }
        },
        V = function (t) {
          L.current = t.currentTarget.scrollTop;
        },
        H = function () {
          var e = o("WAWebFlatList.react").DEFAULT_ITEM_HEIGHT;
          return e + 4;
        };
      (p(function () {
        var e = new (o(
          "WAWebCommunityGroupJourneyEventImpl",
        ).CommunityGroupJourneyEvent)({
          action: o("WAWebWamEnumChatFilterActionTypes")
            .CHAT_FILTER_ACTION_TYPES.VIEW,
          surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.COMMUNITY_TAB,
        });
        e.commit();
      }, []),
        p(
          function () {
            d(v(i.parentGroups));
          },
          [i.parentGroups],
        ),
        p(
          function () {
            R.current.list.length === 0 && R.current.init(T());
          },
          [R, u, T],
        ),
        p(
          function () {
            if (u.length && E.current === !1) {
              var e;
              (h.current.setScrollFromStart(
                (e = i.initialScrollTop) != null ? e : 0,
              ),
                (E.current = !0));
            }
            return function () {
              return i.setScrollTop == null
                ? void 0
                : i.setScrollTop(L.current);
            };
          },
          [u, h, i],
        ));
      var G = { down: U, up: q, j: U, k: q, tab: B, "shift+tab": W },
        z;
      o("WAWebCommunityGatingUtils").communitiesCreationEnabled() &&
        (z = c.jsx(
          r("WDSMenuBarItem.react"),
          {
            tabOrder: o("WAWebTabOrder").TAB_ORDER.TAB_HEADER,
            testid: void 0,
            icon: r("WDSIconIcAddCircle.react"),
            title: s._(/*BTDS*/ "Create new community"),
            onClick: i.onNewCommunity,
          },
          "menu-btn-new-community",
        ));
      var j = { theme: "custom-scroll" },
        K = r("useWAWebFocusOnMount")(),
        Q = r("useMergeRefs")(K, S);
      return c.jsx("div", {
        ref: Q,
        tabIndex: 0,
        className: "x5yr21d",
        "aria-label": s._(/*BTDS*/ "Community tab drawer"),
        "data-testid": void 0,
        children: c.jsxs(r("WAWebDrawer.react"), {
          ref: a,
          xstyle: y.drawer,
          tsNavigationData: { surface: "community-tab" },
          testid: void 0,
          children: [
            c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: s._(/*BTDS*/ "Communities"),
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
              menu: [
                c.jsx(
                  r("WAWebPrivacyModeIndicator.react"),
                  {},
                  "btn-privacy-mode",
                ),
                z,
              ],
              onBack: i.onBack,
            }),
            i.parentGroups.length > 0
              ? c.jsxs(
                  r("WAWebDrawerBody.react"),
                  babelHelpers.extends(
                    { flatListControllers: [h.current], onScroll: V },
                    j,
                    {
                      children: [
                        c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
                          tabIndex: 0,
                          handlers: G,
                          children: c.jsx(o("WAWebFlatList.react").FlatList, {
                            ref: b,
                            data: u,
                            renderItem: function (t) {
                              var e;
                              switch (t.type) {
                                case g.NEW_COMMUNITY_CELL:
                                  e = c.jsx(r("WAWebDrawerSection.react"), {
                                    animation: !1,
                                    children: c.jsx(
                                      o("WAWebCommunityCells.react")
                                        .NewCommunityCell,
                                      {
                                        onNewCommunity: i.onNewCommunity,
                                        active: R.current,
                                      },
                                    ),
                                  });
                                  break;
                                case g.COMMUNITY_HEADER_CELL:
                                  e = c.jsx(r("WAWebDrawerSection.react"), {
                                    animation: !1,
                                    children: c.jsx(
                                      o("WAWebCommunityCells.react")
                                        .CommunityCell,
                                      {
                                        parentGroupMetadata:
                                          t.parentGroupMetadata,
                                        parentGroupChat: t.parentGroupChat,
                                        onClick: function () {
                                          return D(t.parentGroupChat.id);
                                        },
                                        isNew: t.isNewCommunity,
                                        active: R.current,
                                        inTabDrawer: !0,
                                      },
                                    ),
                                  });
                                  break;
                                case g.GUTTER:
                                  e = c.jsx(C, {});
                                  break;
                                case g.ACTIVITY_CELL:
                                  e = c.jsx(r("WAWebDrawerSection.react"), {
                                    animation: !1,
                                    children: c.jsx(
                                      o("WAWebCommunityCells.react")
                                        .ActivityCell,
                                      {
                                        activities: t.activities,
                                        onClick: function () {
                                          return $(t.parentGroupMetadata);
                                        },
                                        parentGroupWid:
                                          t.parentGroupMetadata.id,
                                        active: R.current,
                                      },
                                    ),
                                  });
                                  break;
                                case g.SUBGROUP_CHAT_CELL:
                                  e = c.jsx(r("WAWebDrawerSection.react"), {
                                    animation: !1,
                                    children: c.jsx(
                                      o("WAWebCommunityCells.react")
                                        .SubgroupChatCell,
                                      {
                                        subgroup: t.subgroup,
                                        onClick: function () {
                                          return P(t);
                                        },
                                        active: R.current,
                                      },
                                    ),
                                  });
                                  break;
                                case g.VIEW_ALL_CELL:
                                  e = c.jsx(r("WAWebDrawerSection.react"), {
                                    animation: !1,
                                    children: c.jsx(
                                      o("WAWebCommunityCells.react")
                                        .ViewAllCell,
                                      {
                                        onClick: function () {
                                          return D(t.parentGroupWid);
                                        },
                                        parentGroupWid: t.parentGroupWid,
                                        active: R.current,
                                      },
                                    ),
                                  });
                                  break;
                              }
                              return c.jsx(
                                o("WAWebErrorBoundary.react").ErrorBoundary,
                                {
                                  name: "community-drawer-section",
                                  children: e,
                                },
                              );
                            },
                            flatListController: h.current,
                            direction: "vertical",
                            defaultItemHeight: H(),
                            role: "navigation",
                            "aria-label": s
                              ._(/*BTDS*/ "Community list")
                              .toString(),
                          }),
                        }),
                        c.jsx("div", {
                          className: "xexx8yu xyri2b xefzj8c x1c1uobl",
                        }),
                      ],
                    },
                  ),
                )
              : c.jsx(r("WAWebDrawerBody.react"), {
                  children: c.jsx(r("WAWebEmptyCommunityTabNux.react"), {
                    onNewCommunity: i.onNewCommunity,
                  }),
                }),
          ],
        }),
      });
    }
    ((S.displayName = S.name + " [from " + i.id + "]"), (l.default = S));
  },
  226,
);
