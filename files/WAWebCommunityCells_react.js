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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(13),
        n = e.Icon,
        r = e.iconHeight,
        a = e.onClick,
        i = e.testid,
        l = e.title,
        u = r === void 0 ? 24 : r,
        c;
      t[0] !== l
        ? ((c = s._(/*BTDS*/ "{menu-title}", [s._param("menu-title", l)])),
          (t[0] = l),
          (t[1] = c))
        : (c = t[1]);
      var m = c,
        p;
      t[2] !== m ? ((p = m.toString()), (t[2] = m), (t[3] = p)) : (p = t[3]);
      var _;
      t[4] !== n || t[5] !== u
        ? ((_ = d.jsx(n, { iconXstyle: f.secondaryColor, height: u })),
          (t[4] = n),
          (t[5] = u),
          (t[6] = _))
        : (_ = t[6]);
      var g;
      return (
        t[7] !== a || t[8] !== p || t[9] !== _ || t[10] !== i || t[11] !== l
          ? ((g = d.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRow, {
              ariaLabel: p,
              testid: void 0,
              side: "chevron",
              icon: _,
              onClick: a,
              spaced: !0,
              title: l,
            })),
            (t[7] = a),
            (t[8] = p),
            (t[9] = _),
            (t[10] = i),
            (t[11] = l),
            (t[12] = g))
          : (g = t[12]),
        g
      );
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(21),
        n = e.active,
        a = e.onClick,
        i = e.subgroup,
        l;
      t[0] !== i.id
        ? ((l = i.id.toString()), (t[0] = i.id), (t[1] = l))
        : (l = t[1]);
      var u = r("useWAWebActiveSelection")(n, "community-subgroup-" + l),
        c = u[0],
        m = u[1],
        p;
      t[2] !== a || t[3] !== i
        ? ((p = function (t) {
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
                surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                  .COMMUNITY_TAB,
                chat: i,
              }).commit(),
              a());
          }),
          (t[2] = a),
          (t[3] = i),
          (t[4] = p))
        : (p = t[4]);
      var _ = p,
        f;
      t[5] !== i.formattedTitle
        ? ((f = s._(/*BTDS*/ "{sub-group-name} subgroup", [
            s._param("sub-group-name", i.formattedTitle),
          ])),
          (t[5] = i.formattedTitle),
          (t[6] = f))
        : (f = t[6]);
      var h = f,
        y;
      t[7] !== h ? ((y = h.toString()), (t[7] = h), (t[8] = y)) : (y = t[8]);
      var C;
      t[9] !== _ ? ((C = g(_)), (t[9] = _), (t[10] = C)) : (C = t[10]);
      var b;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = o("WAWebABProps").getABPropConfigValue(
            "wa_web_show_status_ring_for_no_unread",
          )),
          (t[11] = b))
        : (b = t[11]);
      var v;
      t[12] !== m || t[13] !== _ || t[14] !== i
        ? ((v = d.jsx(o("WAWebChat.react").Chat, {
            chat: i,
            forceActive: m,
            hideArchivedIcon: !0,
            noContext: !0,
            onClick: _,
            overrideCommunityAnnouncementGroupName: !0,
            showSpeakerForCag: !0,
            showStatusRingAroundProfilePhoto: b,
            theme: "community-tab-subgroup",
          })),
          (t[12] = m),
          (t[13] = _),
          (t[14] = i),
          (t[15] = v))
        : (v = t[15]);
      var S;
      return (
        t[16] !== c || t[17] !== y || t[18] !== C || t[19] !== v
          ? ((S = d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              "aria-label": y,
              "data-testid": void 0,
              handlers: C,
              ref: c,
              role: "button",
              children: v,
            })),
            (t[16] = c),
            (t[17] = y),
            (t[18] = C),
            (t[19] = v),
            (t[20] = S))
          : (S = t[20]),
        S
      );
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(20),
        n = e.active,
        a = e.onClick,
        i = e.parentGroupWid,
        l;
      t[0] !== i ? ((l = i.toString()), (t[0] = i), (t[1] = l)) : (l = t[1]);
      var c = r("useWAWebActiveSelection")(n, "community-view-all-" + l),
        m = c[0],
        p = c[1],
        _;
      if (t[2] !== i) {
        var h;
        ((_ =
          (h = o("WAWebChatCollection").ChatCollection.get(i.toString())) ==
          null
            ? void 0
            : h.formattedTitle),
          (t[2] = i),
          (t[3] = _));
      } else _ = t[3];
      var y = _,
        C;
      t[4] !== y
        ? ((C = s._(/*BTDS*/ "View all subgroups in {community-name}", [
            s._param("community-name", y),
          ])),
          (t[4] = y),
          (t[5] = C))
        : (C = t[5]);
      var b = C,
        v;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = (u || (u = r("stylex")))(!1, f.viewAll)), (t[6] = v))
        : (v = t[6]);
      var S = v,
        R;
      t[7] !== b ? ((R = b.toString()), (t[7] = b), (t[8] = R)) : (R = t[8]);
      var L;
      t[9] !== a ? ((L = g(a)), (t[9] = a), (t[10] = L)) : (L = t[10]);
      var E;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = s._(/*BTDS*/ "View all")), (t[11] = E))
        : (E = t[11]);
      var k;
      t[12] !== p || t[13] !== a
        ? ((k = d.jsx(r("WAWebChatCell.react"), {
            active: p,
            className: S,
            contextEnabled: o("WAWebBoolFunc").returnFalse,
            onClick: a,
            primary: E,
            theme: "view-all",
          })),
          (t[12] = p),
          (t[13] = a),
          (t[14] = k))
        : (k = t[14]);
      var I;
      return (
        t[15] !== m || t[16] !== R || t[17] !== L || t[18] !== k
          ? ((I = d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              "aria-label": R,
              "data-testid": void 0,
              handlers: L,
              ref: m,
              role: "button",
              children: k,
            })),
            (t[15] = m),
            (t[16] = R),
            (t[17] = L),
            (t[18] = k),
            (t[19] = I))
          : (I = t[19]),
        I
      );
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(26),
        n = e.active,
        a = e.activities,
        i = e.onClick,
        l = e.parentGroupWid,
        u;
      t[0] !== l ? ((u = l.toString()), (t[0] = l), (t[1] = u)) : (u = t[1]);
      var c = r("useWAWebActiveSelection")(n, "community-activity-" + u),
        m = c[0],
        p = c[1],
        _;
      if (t[2] !== l) {
        var f;
        ((_ =
          (f = o("WAWebChatCollection").ChatCollection.get(l.toString())) ==
          null
            ? void 0
            : f.formattedTitle),
          (t[2] = l),
          (t[3] = _));
      } else _ = t[3];
      var h = _,
        y;
      t[4] !== a
        ? ((y = o("WAWebCommunityGetActivityCellText").getActivityCellText(a)),
          (t[4] = a),
          (t[5] = y))
        : (y = t[5]);
      var C = y,
        b;
      t[6] !== C || t[7] !== h
        ? ((b = s._(
            /*BTDS*/ "New activity in {community-name}: {community-activity}",
            [s._param("community-name", h), s._param("community-activity", C)],
          )),
          (t[6] = C),
          (t[7] = h),
          (t[8] = b))
        : (b = t[8]);
      var v = b;
      if (a.length === 0 || C == null) return null;
      var S;
      t[9] !== v ? ((S = v.toString()), (t[9] = v), (t[10] = S)) : (S = t[10]);
      var R;
      t[11] !== i ? ((R = g(i)), (t[11] = i), (t[12] = R)) : (R = t[12]);
      var L;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = d.jsx(o("WAWebShapeIcon.react").ShapeIcon, {
            Icon: o("WAWebAlertBellIcon.react").AlertBellIcon,
            shape: "circle",
            size: 40,
            theme: o("WAWebShapeIcon.react").ShapeIconTheme.Accent,
          })),
          (t[13] = L))
        : (L = t[13]);
      var E;
      t[14] !== C
        ? ((E = d.jsx(o("WAWebEmojiText.react").EmojiText, {
            direction: "auto",
            text: C,
          })),
          (t[14] = C),
          (t[15] = E))
        : (E = t[15]);
      var k;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = d.jsx(o("WAWebChatIcons.react").UnreadIndicator, {
            noMarginRight: !0,
          })),
          (t[16] = k))
        : (k = t[16]);
      var I;
      t[17] !== p || t[18] !== i || t[19] !== E
        ? ((I = d.jsx(r("WAWebChatCell.react"), {
            active: p,
            contextEnabled: o("WAWebBoolFunc").returnFalse,
            image: L,
            onClick: i,
            secondary: E,
            secondaryDetail: k,
            theme: "community-tab-activity-cell",
          })),
          (t[17] = p),
          (t[18] = i),
          (t[19] = E),
          (t[20] = I))
        : (I = t[20]);
      var T;
      return (
        t[21] !== m || t[22] !== I || t[23] !== S || t[24] !== R
          ? ((T = d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              "aria-label": S,
              "data-testid": void 0,
              handlers: R,
              ref: m,
              role: "button",
              children: I,
            })),
            (t[21] = m),
            (t[22] = I),
            (t[23] = S),
            (t[24] = R),
            (t[25] = T))
          : (T = t[25]),
        T
      );
    }
    function S(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.active,
        a = e.onNewCommunity,
        i = r("useWAWebActiveSelection")(n, "new-community-btn"),
        l = i[0],
        c = i[1],
        m,
        p;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s._(/*BTDS*/ "Create new community")),
          (p = (u || (u = r("stylex")))(f.newCommunityCell, !1)),
          (t[0] = m),
          (t[1] = p))
        : ((m = t[0]), (p = t[1]));
      var _;
      t[2] !== a ? ((_ = g(a)), (t[2] = a), (t[3] = _)) : (_ = t[3]);
      var h;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = d.jsx(r("WAWebSquircleIcon.react"), {
            children: d.jsx(
              o("WAWebCommunityGroupIcon.react").CommunityGroupIcon,
              { directional: !0 },
            ),
          })),
          (t[4] = h))
        : (h = t[4]);
      var y;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = s._(/*BTDS*/ "New community")), (t[5] = y))
        : (y = t[5]);
      var C;
      t[6] !== c || t[7] !== a
        ? ((C = d.jsx(r("WAWebCellFrame.react"), {
            active: c,
            image: h,
            onClick: a,
            primary: y,
            theme: "no-border",
          })),
          (t[6] = c),
          (t[7] = a),
          (t[8] = C))
        : (C = t[8]);
      var b;
      return (
        t[9] !== l || t[10] !== _ || t[11] !== C
          ? ((b = d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              "aria-label": m,
              className: p,
              "data-testid": void 0,
              handlers: _,
              ref: l,
              role: "button",
              children: C,
            })),
            (t[9] = l),
            (t[10] = _),
            (t[11] = C),
            (t[12] = b))
          : (b = t[12]),
        b
      );
    }
    function R(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.onClick,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = s._(/*BTDS*/ "Create new group")), (t[0] = a))
        : (a = t[0]);
      var i = a,
        l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = d.jsx(r("WAWebDefaultAddProfilePicture.react"), {
            type: "group",
            size: 40,
          })),
          (t[1] = l))
        : (l = t[1]);
      var u;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = s._(/*BTDS*/ "Create new group")), (t[2] = u))
        : (u = t[2]);
      var c;
      return (
        t[3] !== n
          ? ((c = d.jsx(r("WAWebCellFrame.react"), {
              ariaLabel: i,
              focusable: !0,
              image: l,
              onClick: n,
              primary: u,
              testid: void 0,
              theme: "subgroup",
            })),
            (t[3] = n),
            (t[4] = c))
          : (c = t[4]),
        c
      );
    }
    function L(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.onClick,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = s._(/*BTDS*/ "Add existing group")), (t[0] = a))
        : (a = t[0]);
      var i = a,
        l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = d.jsx(r("WAWebRoundShape.react"), {
            children: d.jsx(o("WAWebPlusIcon.react").PlusIcon, {}),
          })),
          (t[1] = l))
        : (l = t[1]);
      var u = l,
        c;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(/*BTDS*/ "Add existing group")), (t[2] = c))
        : (c = t[2]);
      var m;
      return (
        t[3] !== n
          ? ((m = d.jsx(r("WAWebCellFrame.react"), {
              ariaLabel: i,
              focusable: !0,
              image: u,
              onClick: n,
              primary: c,
              testid: void 0,
              theme: "subgroup",
            })),
            (t[3] = n),
            (t[4] = m))
          : (m = t[4]),
        m
      );
    }
    function E(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.active,
        a = e.groupName,
        i = e.onClick,
        l = e.ref,
        u = e.subgroup,
        c = e.tabIndex,
        m;
      t[0] !== u
        ? ((m = u == null ? void 0 : u.toString()), (t[0] = u), (t[1] = m))
        : (m = t[1]);
      var p = r("useWAWebActiveSelection")(n, "remove-button-" + m),
        _ = p[0],
        h = p[1],
        y = r("useMergeRefs")(l, _),
        C;
      t[2] !== a
        ? ((C = s
            ._(/*BTDS*/ "Remove {sub-group-name}", [
              s._param("sub-group-name", a),
            ])
            .toString()),
          (t[2] = a),
          (t[3] = C))
        : (C = t[3]);
      var b = C,
        v;
      t[4] !== i ? ((v = g(i)), (t[4] = i), (t[5] = v)) : (v = t[5]);
      var S = c != null ? c : -1,
        R =
          h &&
          o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusPersistent,
        L;
      t[6] !== R
        ? ((L = [f.btnRemove, R]), (t[6] = R), (t[7] = L))
        : (L = t[7]);
      var E;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = d.jsx(r("WDSIconIcClose.react"), {})), (t[8] = E))
        : (E = t[8]);
      var k;
      t[9] !== i || t[10] !== b || t[11] !== S || t[12] !== L
        ? ((k = d.jsx(r("WAWebUnstyledButton.react"), {
            onClick: i,
            tabIndex: S,
            testid: void 0,
            title: b,
            xstyle: L,
            children: E,
          })),
          (t[9] = i),
          (t[10] = b),
          (t[11] = S),
          (t[12] = L),
          (t[13] = k))
        : (k = t[13]);
      var I;
      return (
        t[14] !== y || t[15] !== b || t[16] !== v || t[17] !== k
          ? ((I = d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              "aria-label": b,
              handlers: v,
              ref: y,
              role: "button",
              children: k,
            })),
            (t[14] = y),
            (t[15] = b),
            (t[16] = v),
            (t[17] = k),
            (t[18] = I))
          : (I = t[18]),
        I
      );
    }
    function k() {
      return E;
    }
    var I = E;
    function T(e) {
      var t,
        n,
        a,
        i = o("react-compiler-runtime").c(18),
        l = e.chat,
        u = e.onClick,
        c;
      i[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = ["bulk_add", "bulk_remove", "reset", "change:isAdmin"]),
          (i[0] = c))
        : (c = i[0]);
      var m;
      if (i[1] !== ((t = l.groupMetadata) == null ? void 0 : t.participants)) {
        var p;
        ((m = function () {
          var e;
          return !!((e = l.groupMetadata) != null && e.participants.iAmAdmin());
        }),
          (i[1] = (p = l.groupMetadata) == null ? void 0 : p.participants),
          (i[2] = m));
      } else m = i[2];
      var _ = r("useWAWebEventTargetValue")(
          (n = l.groupMetadata) == null ? void 0 : n.participants,
          c,
          m,
        ),
        g;
      i[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = ["add", "remove", "reset"]), (i[3] = g))
        : (g = i[3]);
      var h;
      i[4] !== l.groupMetadata
        ? ((h = function () {
            var e, t;
            return (e =
              (t = l.groupMetadata) == null
                ? void 0
                : t.getSubgroupSuggestions().length) != null
              ? e
              : 0;
          }),
          (i[4] = l.groupMetadata),
          (i[5] = h))
        : (h = i[5]);
      var y = r("useWAWebEventTargetValue")(
        (a = l.groupMetadata) == null ? void 0 : a.subgroupSuggestions,
        g,
        h,
      );
      if (y === 0) return null;
      var C;
      i[6] !== _
        ? ((C = d.jsx(r("WAWebSquircleIcon.react"), {
            size: 40,
            transparent: !0,
            xstyle: f.subgroupSuggestionsIconContainer,
            children: _
              ? d.jsx(o("WAWebSubgroupsNuxIcon.react").SubgroupsNuxIcon, {
                  height: 24,
                  iconXstyle: f.subgroupSuggestionsIcon,
                })
              : d.jsx(o("WAWebNewGroupIcon.react").NewGroupIcon, {
                  height: 24,
                  iconXstyle: f.secondaryColor,
                }),
          })),
          (i[6] = _),
          (i[7] = C))
        : (C = i[7]);
      var b = C,
        v;
      i[8] !== _
        ? ((v = _
            ? s._(/*BTDS*/ "Pending groups")
            : s._(/*BTDS*/ "Groups you suggested")),
          (i[8] = _),
          (i[9] = v))
        : (v = i[9]);
      var S = v,
        R;
      i[10] !== _ || i[11] !== y
        ? ((R = _
            ? s._(
                /*BTDS*/ '_j{"*":"{number_of_group_suggestions} group suggestions","_1":"1 group suggestion"}',
                [s._plural(y, "number_of_group_suggestions")],
              )
            : s._(
                /*BTDS*/ '_j{"*":"{number_of_pending_groups} pending groups","_1":"1 pending group"}',
                [s._plural(y, "number_of_pending_groups")],
              )),
          (i[10] = _),
          (i[11] = y),
          (i[12] = R))
        : (R = i[12]);
      var L = R,
        E;
      return (
        i[13] !== b || i[14] !== u || i[15] !== S || i[16] !== L
          ? ((E = d.jsx(r("WAWebCellFrame.react"), {
              ariaLabel: S,
              focusable: !0,
              image: b,
              onClick: u,
              primary: S,
              secondary: L,
              theme: "subgroup",
            })),
            (i[13] = b),
            (i[14] = u),
            (i[15] = S),
            (i[16] = L),
            (i[17] = E))
          : (E = i[17]),
        E
      );
    }
    function D(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.onClick,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = s._(/*BTDS*/ "Add group")), (t[0] = a))
        : (a = t[0]);
      var i = a,
        l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = d.jsx(r("WAWebDefaultAddProfilePicture.react"), {
            size: 40,
            type: "group",
          })),
          (t[1] = l))
        : (l = t[1]);
      var u;
      return (
        t[2] !== n
          ? ((u = d.jsx(r("WAWebCellFrame.react"), {
              ariaLabel: i,
              focusable: !0,
              image: l,
              onClick: n,
              primary: i,
              theme: "subgroup",
            })),
            (t[2] = n),
            (t[3] = u))
          : (u = t[3]),
        u
      );
    }
    function x() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = d.jsx(o("WAWebFlex.react").FlexRow, {
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
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    ((l.mapHandlers = g),
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
