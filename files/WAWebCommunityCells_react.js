__d(
  "WAWebCommunityCells.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebAlertBellIcon.react",
    "WAWebBoolFunc",
    "WAWebCellFrame.react",
    "WAWebChat.react",
    "WAWebChatCell.react",
    "WAWebChatCollection",
    "WAWebChatCommunityUtils",
    "WAWebChatGetters",
    "WAWebChatIcons.react",
    "WAWebChatInfoDrawerRow.react",
    "WAWebChatTimestamp.react",
    "WAWebChatstateInfo.react",
    "WAWebCommunityDailyUtils",
    "WAWebCommunityGetActivityCellText",
    "WAWebCommunityGroupIcon.react",
    "WAWebCommunityGroupJourneyEventImpl",
    "WAWebDefaultAddProfilePicture.react",
    "WAWebDeleteChatPopup.react",
    "WAWebDeleteRefreshedIcon.react",
    "WAWebDetailImage.react",
    "WAWebDropdownItem.react",
    "WAWebEmojiText.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebModalManager",
    "WAWebNewGroupIcon.react",
    "WAWebPlusIcon.react",
    "WAWebRoundShape.react",
    "WAWebSettingsModel",
    "WAWebShapeIcon.react",
    "WAWebSquircleIcon.react",
    "WAWebSubgroupsNuxIcon.react",
    "WAWebThemeContext",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUnstyledButton.react",
    "WAWebWamEnumChatFilterActionTypes",
    "WAWebWamEnumSurfaceType",
    "WDSFocusStateStyles",
    "WDSIconIcClose.react",
    "WDSText.react",
    "WDSTextualLink.react",
    "react",
    "stylex",
    "sumBy",
    "useMergeRefs",
    "useWAWebActiveSelection",
    "useWAWebEventTargetValue",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = [
        "chat",
        "inChatList",
        "inCommandPalette",
        "inTabDrawer",
        "isNew",
        "onClick",
        "parentGroupChat",
        "parentGroupMetadata",
      ],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useContext,
      _ = m.useState,
      f = {
        communityTitle: { fontWeight: "xk50ysn", $$css: !0 },
        viewAll: {
          paddingInlineStart: "x1rgrh6f",
          color: "xo1mcw5",
          fontWeight: "x1iikomf",
          height: "xzoqdy8",
          $$css: !0,
        },
        dangerText: { color: "x30a034", $$css: !0 },
        newCommunityCell: {
          paddingInlineEnd: "x1ccui7m",
          marginTop: "x1y332i5",
          $$css: !0,
        },
        btnRemove: {
          color: "xhslqc4",
          verticalAlign: "x16dsc37",
          cursor: "x1ypdohk",
          $$css: !0,
        },
        subgroupSuggestionsIconContainer: {
          backgroundColor: "xg8q4mo",
          $$css: !0,
        },
        subgroupSuggestionsIcon: { color: "xh42h1r", $$css: !0 },
        secondaryColor: { color: "xhslqc4", $$css: !0 },
        marginVert8: {
          marginTop: "x1380le5",
          marginBottom: "xefnzgg",
          $$css: !0,
        },
      };
    function g(e) {
      return { enter: e, space: e };
    }
    function h(t) {
      var n = t.chat,
        a = t.inChatList,
        i = a === void 0 ? !1 : a,
        l = t.inCommandPalette,
        u = l === void 0 ? !1 : l,
        c = t.inTabDrawer,
        m = t.isNew,
        h = m === void 0 ? !1 : m,
        y = t.onClick,
        C = t.parentGroupChat,
        b = t.parentGroupMetadata,
        v = babelHelpers.objectWithoutPropertiesLoose(t, e),
        S = _(null),
        R = S[0],
        L = S[1],
        E = o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(C),
        k = p(o("WAWebThemeContext").ThemeContext),
        I = k.theme,
        T = I === "dark",
        D = o("useWAWebModelValues").useModelValues(C, [
          "formattedTitle",
        ]).formattedTitle,
        x = c === !0 ? "community-header-" + C.id.toString() : C.id.toString(),
        $ = s._(/*BTDS*/ "Community: {community-name}", [
          s._param("community-name", D),
        ]),
        P = r("useWAWebActiveSelection")(v.active, x),
        N = P[0],
        M = P[1],
        w = function () {
          var e = [];
          if (E) {
            var t = function (t) {
                (C.pendingAction++,
                  t.finally(function () {
                    C.pendingAction--;
                  }));
              },
              n = function () {
                o("WAWebModalManager").ModalManager.open(
                  d.jsx(r("WAWebDeleteChatPopup.react"), {
                    chat: C,
                    onDeleteOrExit: t,
                  }),
                  { transition: "modal-flow" },
                );
              };
            e.push(
              d.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  action: n,
                  icon: d.jsx(
                    o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
                    {},
                  ),
                  testid: void 0,
                  xstyle: f.dangerText,
                  children: s._(/*BTDS*/ "Delete community"),
                },
                "DeleteCommunityDropdownItem",
              ),
            );
          }
          return e;
        },
        A = function () {
          L(null);
        },
        F = function (t) {
          if (R) {
            L(null);
            return;
          }
          var e = w();
          L({ menu: e, event: t.event, anchor: t.anchor });
        },
        O;
      R &&
        (O = d.jsx(o("WAWebUimUie.react").UIE, {
          dismissOnWindowResize: !0,
          displayName: "CommunityContextMenu",
          escapable: !0,
          popable: !0,
          requestDismiss: A,
          children: d.jsx(r("WAWebUimUieMenu.react"), { contextMenu: R }),
        }));
      var B = b.getJoinedSubgroupsChat(),
        W = r("useWAWebEventTargetValue")(B, "change:unreadCount", function () {
          return r("sumBy")(B, function (e) {
            return Math.max(e.unreadCount, 0);
          });
        }),
        q;
      i && n != null && (q = d.jsx(r("WAWebChatTimestamp.react"), { chat: n }));
      var U;
      h
        ? (U = s._(/*BTDS*/ "New"))
        : E
          ? (U = s._(/*BTDS*/ "This community is no longer available."))
          : i &&
            n != null &&
            (U = d.jsx(r("WAWebChatstateInfo.react"), {
              chat: n,
              fromCommunity: !0,
            }));
      var V;
      if (
        (i &&
          n != null &&
          (V = d.jsx(o("WAWebChatIcons.react").Icons, {
            chat: n,
            hideArchivedIcon: !1,
            hideMuteIcon: !1,
            mute: n.mute,
            settings: r("WAWebSettingsModel"),
            unreadCount: W,
            unreadMentionIcon: !1,
          })),
        C == null)
      )
        return null;
      var H;
      !u && !i && (H = h ? "community-tab-home-new" : "community-tab-home");
      var G =
          !u && !i
            ? {
                0: "x14mizhr xso031l x1q0q8m5 x120ee7l",
                1: "xko0x3n xso031l x1q0q8m5 x120ee7l",
              }[!!T << 0]
            : "",
        z = i && n != null && o("WAWebChatGetters").getHasUnread(n);
      return d.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
        "aria-label": $.toString(),
        "data-testid": void 0,
        handlers: g(y),
        ref: N,
        role: "button",
        children: [
          d.jsx(r("WAWebChatCell.react"), {
            active: M,
            className: G,
            contextEnabled: function () {
              return E;
            },
            image: d.jsx(o("WAWebDetailImage.react").DetailImage, {
              id: b.id,
              shape: o("WAWebDetailImage.react").DetailImageShape.Squircle,
            }),
            onClick: y,
            onContext: F,
            primary: d.jsx(o("WAWebEmojiText.react").EmojiText, {
              ellipsify: !0,
              text: D,
              xstyle: f.communityTitle,
            }),
            primaryDetail: q,
            secondary: U,
            secondaryDetail: V,
            theme: H,
            unreadStyle: z,
          }),
          O,
        ],
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.Icon,
        n = e.iconHeight,
        r = n === void 0 ? 24 : n,
        a = e.onClick,
        i = e.testid,
        l = e.title,
        u = s._(/*BTDS*/ "{menu-title}", [s._param("menu-title", l)]);
      return d.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRow, {
        ariaLabel: u.toString(),
        testid: void 0,
        side: "chevron",
        icon: d.jsx(t, { iconXstyle: f.secondaryColor, height: r }),
        onClick: a,
        spaced: !0,
        title: l,
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.active,
        n = e.onClick,
        a = e.subgroup,
        i = r("useWAWebActiveSelection")(
          t,
          "community-subgroup-" + a.id.toString(),
        ),
        l = i[0],
        u = i[1],
        c = function (t) {
          (t.preventDefault(),
            o("WAWebCommunityDailyUtils").incrementCommunityTabEvent(
              o("WAWebCommunityDailyUtils").CommunityDailyTabMetricsType
                .TAB_GROUP_NAVIGATIONS,
            ),
            new (o(
              "WAWebCommunityGroupJourneyEventImpl",
            ).CommunityGroupJourneyEvent)({
              action: o("WAWebWamEnumChatFilterActionTypes")
                .CHAT_FILTER_ACTION_TYPES.GROUP_NAVIGATION,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.COMMUNITY_TAB,
              chat: a,
            }).commit(),
            n());
        },
        m = s._(/*BTDS*/ "{sub-group-name} subgroup", [
          s._param("sub-group-name", a.formattedTitle),
        ]);
      return d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        "aria-label": m.toString(),
        "data-testid": void 0,
        handlers: g(c),
        ref: l,
        role: "button",
        children: d.jsx(o("WAWebChat.react").Chat, {
          chat: a,
          forceActive: u,
          hideArchivedIcon: !0,
          noContext: !0,
          onClick: c,
          overrideCommunityAnnouncementGroupName: !0,
          showSpeakerForCag: !0,
          showStatusRingAroundProfilePhoto: o(
            "WAWebABProps",
          ).getABPropConfigValue("wa_web_show_status_ring_for_no_unread"),
          theme: "community-tab-subgroup",
        }),
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t,
        n = e.active,
        a = e.onClick,
        i = e.parentGroupWid,
        l = r("useWAWebActiveSelection")(
          n,
          "community-view-all-" + i.toString(),
        ),
        c = l[0],
        m = l[1],
        p =
          (t = o("WAWebChatCollection").ChatCollection.get(i.toString())) ==
          null
            ? void 0
            : t.formattedTitle,
        _ = s._(/*BTDS*/ "View all subgroups in {community-name}", [
          s._param("community-name", p),
        ]),
        h = (u || (u = r("stylex")))(!1, f.viewAll);
      return d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        "aria-label": _.toString(),
        "data-testid": void 0,
        handlers: g(a),
        ref: c,
        role: "button",
        children: d.jsx(r("WAWebChatCell.react"), {
          active: m,
          className: h,
          contextEnabled: o("WAWebBoolFunc").returnFalse,
          onClick: a,
          primary: s._(/*BTDS*/ "View all"),
          theme: "view-all",
        }),
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t,
        n = e.active,
        a = e.activities,
        i = e.onClick,
        l = e.parentGroupWid,
        u = r("useWAWebActiveSelection")(
          n,
          "community-activity-" + l.toString(),
        ),
        c = u[0],
        m = u[1],
        p =
          (t = o("WAWebChatCollection").ChatCollection.get(l.toString())) ==
          null
            ? void 0
            : t.formattedTitle,
        _ = o("WAWebCommunityGetActivityCellText").getActivityCellText(a),
        f = s._(
          /*BTDS*/ "New activity in {community-name}: {community-activity}",
          [s._param("community-name", p), s._param("community-activity", _)],
        );
      return a.length === 0 || _ == null
        ? null
        : d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
            "aria-label": f.toString(),
            "data-testid": void 0,
            handlers: g(i),
            ref: c,
            role: "button",
            children: d.jsx(r("WAWebChatCell.react"), {
              active: m,
              contextEnabled: o("WAWebBoolFunc").returnFalse,
              image: d.jsx(o("WAWebShapeIcon.react").ShapeIcon, {
                Icon: o("WAWebAlertBellIcon.react").AlertBellIcon,
                shape: "circle",
                size: 40,
                theme: o("WAWebShapeIcon.react").ShapeIconTheme.Accent,
              }),
              onClick: i,
              secondary: d.jsx(o("WAWebEmojiText.react").EmojiText, {
                direction: "auto",
                text: _,
              }),
              secondaryDetail: d.jsx(
                o("WAWebChatIcons.react").UnreadIndicator,
                { noMarginRight: !0 },
              ),
              theme: "community-tab-activity-cell",
            }),
          });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      var t = e.active,
        n = e.onNewCommunity,
        a = r("useWAWebActiveSelection")(t, "new-community-btn"),
        i = a[0],
        l = a[1];
      return d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        "aria-label": s._(/*BTDS*/ "Create new community"),
        className: (u || (u = r("stylex")))(f.newCommunityCell, !1),
        "data-testid": void 0,
        handlers: g(n),
        ref: i,
        role: "button",
        children: d.jsx(r("WAWebCellFrame.react"), {
          active: l,
          image: d.jsx(r("WAWebSquircleIcon.react"), {
            children: d.jsx(
              o("WAWebCommunityGroupIcon.react").CommunityGroupIcon,
              { directional: !0 },
            ),
          }),
          onClick: n,
          primary: s._(/*BTDS*/ "New community"),
          theme: "no-border",
        }),
      });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      var t = e.onClick,
        n = s._(/*BTDS*/ "Create new group");
      return d.jsx(r("WAWebCellFrame.react"), {
        ariaLabel: n,
        focusable: !0,
        image: d.jsx(r("WAWebDefaultAddProfilePicture.react"), {
          type: "group",
          size: 40,
        }),
        onClick: t,
        primary: s._(/*BTDS*/ "Create new group"),
        testid: void 0,
        theme: "subgroup",
      });
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
      var t = e.onClick,
        n = s._(/*BTDS*/ "Add existing group"),
        a = d.jsx(r("WAWebRoundShape.react"), {
          children: d.jsx(o("WAWebPlusIcon.react").PlusIcon, {}),
        });
      return d.jsx(r("WAWebCellFrame.react"), {
        ariaLabel: n,
        focusable: !0,
        image: a,
        onClick: t,
        primary: s._(/*BTDS*/ "Add existing group"),
        testid: void 0,
        theme: "subgroup",
      });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e) {
      var t = e.active,
        n = e.groupName,
        a = e.onClick,
        i = e.ref,
        l = e.subgroup,
        u = e.tabIndex,
        c = r("useWAWebActiveSelection")(
          t,
          "remove-button-" + (l == null ? void 0 : l.toString()),
        ),
        m = c[0],
        p = c[1],
        _ = r("useMergeRefs")(i, m),
        h = s
          ._(/*BTDS*/ "Remove {sub-group-name}", [
            s._param("sub-group-name", n),
          ])
          .toString();
      return d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        "aria-label": h,
        handlers: g(a),
        ref: _,
        role: "button",
        children: d.jsx(r("WAWebUnstyledButton.react"), {
          onClick: a,
          tabIndex: u != null ? u : -1,
          testid: void 0,
          title: h,
          xstyle: [
            f.btnRemove,
            p &&
              o("WDSFocusStateStyles").WDSFocusStateStyles
                .genericFocusPersistent,
          ],
          children: d.jsx(r("WDSIconIcClose.react"), {}),
        }),
      });
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k() {
      return E;
    }
    var I = E;
    function T(e) {
      var t,
        n,
        a = e.chat,
        i = e.onClick,
        l = r("useWAWebEventTargetValue")(
          (t = a.groupMetadata) == null ? void 0 : t.participants,
          ["bulk_add", "bulk_remove", "reset", "change:isAdmin"],
          function () {
            var e;
            return !!(
              (e = a.groupMetadata) != null && e.participants.iAmAdmin()
            );
          },
        ),
        u = r("useWAWebEventTargetValue")(
          (n = a.groupMetadata) == null ? void 0 : n.subgroupSuggestions,
          ["add", "remove", "reset"],
          function () {
            var e, t;
            return (e =
              (t = a.groupMetadata) == null
                ? void 0
                : t.getSubgroupSuggestions().length) != null
              ? e
              : 0;
          },
        );
      if (u === 0) return null;
      var c = d.jsx(r("WAWebSquircleIcon.react"), {
          size: 40,
          transparent: !0,
          xstyle: f.subgroupSuggestionsIconContainer,
          children: l
            ? d.jsx(o("WAWebSubgroupsNuxIcon.react").SubgroupsNuxIcon, {
                height: 24,
                iconXstyle: f.subgroupSuggestionsIcon,
              })
            : d.jsx(o("WAWebNewGroupIcon.react").NewGroupIcon, {
                height: 24,
                iconXstyle: f.secondaryColor,
              }),
        }),
        m = l
          ? s._(/*BTDS*/ "Pending groups")
          : s._(/*BTDS*/ "Groups you suggested"),
        p = l
          ? s._(
              /*BTDS*/ '_j{"*":"{number_of_group_suggestions} group suggestions","_1":"1 group suggestion"}',
              [s._plural(u, "number_of_group_suggestions")],
            )
          : s._(
              /*BTDS*/ '_j{"*":"{number_of_pending_groups} pending groups","_1":"1 pending group"}',
              [s._plural(u, "number_of_pending_groups")],
            );
      return d.jsx(r("WAWebCellFrame.react"), {
        ariaLabel: m,
        focusable: !0,
        image: c,
        onClick: i,
        primary: m,
        secondary: p,
        theme: "subgroup",
      });
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D(e) {
      var t = e.onClick,
        n = s._(/*BTDS*/ "Add group");
      return d.jsx(r("WAWebCellFrame.react"), {
        ariaLabel: n,
        focusable: !0,
        image: d.jsx(r("WAWebDefaultAddProfilePicture.react"), {
          size: 40,
          type: "group",
        }),
        onClick: t,
        primary: n,
        theme: "subgroup",
      });
    }
    D.displayName = D.name + " [from " + i.id + "]";
    function x() {
      return d.jsx(o("WAWebFlex.react").FlexRow, {
        align: "center",
        justify: "center",
        xstyle: f.marginVert8,
        children: d.jsx(r("WDSText.react"), {
          colorName: "contentDeemphasized",
          type: "Body2",
          children: d.jsx(r("WDSTextualLink.react"), {
            href: o("WAWebFaqUrl").getAboutCommunitiesFaqUrl(),
            children: s._(/*BTDS*/ "See example communities"),
          }),
        }),
      });
    }
    ((x.displayName = x.name + " [from " + i.id + "]"),
      (l.mapHandlers = g),
      (l.CommunityCell = h),
      (l.CommunityMenuButton = y),
      (l.SubgroupChatCell = C),
      (l.ViewAllCell = b),
      (l.ActivityCell = v),
      (l.NewCommunityCell = S),
      (l.CreateNewGroupCell = R),
      (l.AddExistingGroupsCell = L),
      (l.RemoveButtonFactory = k),
      (l.RemoveButton = I),
      (l.SubgroupSuggestionsRow = T),
      (l.AddGroupCell = D),
      (l.SeeExamplesLink = x));
  },
  226,
);
