__d(
  "WAWebCommunityInfoMembersSection.react",
  [
    "fbt",
    "WANullthrows",
    "WAWebABProps",
    "WAWebAddUserIcon.react",
    "WAWebCellFrame.react",
    "WAWebChatCommunityUtils",
    "WAWebChatContact.react",
    "WAWebChatInfoDrawerSection.react",
    "WAWebChatInfoExpandButton.react",
    "WAWebCommunityMembersFlow.react",
    "WAWebDomScroll",
    "WAWebDrawerSection.react",
    "WAWebFrontendContactGetters",
    "WAWebListButton.react",
    "WAWebModalManager",
    "WAWebNavigableFlatList.react",
    "WAWebRoundShape.react",
    "WAWebSearchIcon.react",
    "WAWebSingleSelection",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUserPrefsMeUser",
    "WAWebViewCommunityMembersModal.react",
    "WAWebWid",
    "react",
    "useWAWebSplitCommunityParticipants",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useMemo,
      p = c.useRef,
      _ = c.useState,
      f = { secondaryColor: { color: "xhslqc4", $$css: !0 } },
      g = o("WAWebChatContact.react").ContactFactory();
    function h(e) {
      var t = e.active,
        n = e.contextMenu,
        a = e.data,
        i = e.onOpenMemberMenu,
        l = e.participantCollection,
        s = a.contact,
        c = !!n && r("WAWebWid").equals(s.id, n.contactId),
        d = function (t) {
          return i(t, s);
        };
      return u.jsx(g, {
        active: t,
        contact: s,
        contextEnabled: function () {
          return !o("WAWebUserPrefsMeUser").isMeAccount(s.id);
        },
        contextMenu: c,
        elevatedPushNamesEnabled: o("WAWebABProps").getABPropConfigValue(
          "elevated_push_names_v2_m2_enabled",
        ),
        listenForAdminChange: !0,
        loadPicture: o("WAWebFrontendContactGetters").getIsMyContact(s),
        onContext: d,
        participantCollection: r("WANullthrows")(l),
        showNotifyName: !0,
        showStatusRingAroundProfilePhoto: !0,
        theme: "chat-info",
        waitIdle: !0,
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = m(function () {
          return new (r("WAWebSingleSelection"))([], function (e) {
            return e.id.toString();
          });
        }, []),
        n = e.parentChat,
        a = e.members,
        i = a === void 0 ? [] : a,
        l = e.announcementGroupParticipants,
        c = e.parentGroupParticipants,
        g = e.onAddMembersClick,
        y = e.scrollToMemberList,
        b = _(),
        v = b[0],
        S = b[1],
        R = !!(c != null && c.iAmAdmin()),
        L = r("useWAWebSplitCommunityParticipants")(R, l, i),
        E = L.members,
        k = L.membersNotInCAG,
        I = {
          parentChat: n,
          announcementGroupParticipants: l,
          parentGroupParticipants: c,
          loading: e.loading,
          onInviteMembersClick: e.onInviteMembersClick,
        },
        T = p();
      d(
        function () {
          y &&
            T.current &&
            o("WAWebDomScroll").scrollIntoViewIfNeeded(T.current, !1);
        },
        [y],
      );
      var D = function () {
          n &&
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                r("WAWebCommunityMembersFlow.react"),
                babelHelpers.extends({ members: E, membersNotInCAG: k }, I),
              ),
            );
        },
        x = function () {
          n &&
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebViewCommunityMembersModal.react")
                  .CommunityMembersSearch,
                babelHelpers.extends(
                  {
                    members: k,
                    theme: o("WAWebViewCommunityMembersModal.react")
                      .CommunityMembersSearchTheme.MembersNotInAnnouncements,
                  },
                  I,
                ),
              ),
            );
        },
        $ = function (t, r) {
          var e = o(
            "WAWebViewCommunityMembersModal.react",
          ).getMemberContextMenuItems({
            parentChat: n,
            parentGroupParticipants: c,
            announcementGroupParticipants: l,
            contact: r,
            origin: "communityParticipantSearch",
          });
          !e ||
            e.length === 0 ||
            S({ contactId: r.id, menu: e, anchor: t.anchor, event: t.event });
        },
        P = m(
          function () {
            var e = E;
            return (
              C(E) &&
                (e = e.slice(
                  0,
                  o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS,
                )),
              t.init(e),
              e.map(function (e) {
                return { itemKey: e.id.toString(), contact: e, height: 68 };
              })
            );
          },
          [E],
        ),
        N,
        M;
      if (C(E)) {
        var w =
          E.length - o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS;
        N = u.jsx(r("WAWebChatInfoExpandButton.react"), {
          numMore: w,
          onClick: D,
          viewAll: !0,
        });
      } else
        R && k.length
          ? (N = u.jsx(o("WAWebListButton.react").ListButton, {
              onClick: x,
              children: s._(/*BTDS*/ "Members not in announcements"),
            }))
          : R ||
            (M = u.jsx(r("WAWebDrawerSection.react"), {
              theme: "transparent",
              xstyle: [
                o("WAWebUISpacing").uiMargin.vert20,
                o("WAWebUISpacing").uiMargin.horiz30,
              ],
              children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
                as: "p",
                children: s._(
                  /*BTDS*/ "Only community admins can see all members",
                ),
              }),
            }));
      var A = function () {
          S(null);
        },
        F;
      v &&
        (F = u.jsx(o("WAWebUimUie.react").UIE, {
          dismissOnWindowResize: !0,
          displayName: "ChatContextMenu",
          escapable: !0,
          popable: !0,
          requestDismiss: A,
          children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: v }),
        }));
      var O = s._(
          /*BTDS*/ '_j{"*":"Members list: {group-participants} members","_1":"Members list: 1 member"}',
          [s._plural(i.length, "group-participants")],
        ),
        B = s._(/*BTDS*/ "Add member"),
        W =
          R && !o("WAWebChatCommunityUtils").isSuspendedCommunity(n)
            ? u.jsx(r("WAWebCellFrame.react"), {
                ariaLabel: B,
                focusable: !0,
                image: u.jsx(r("WAWebRoundShape.react"), {
                  theme: "compact",
                  children: u.jsx(o("WAWebAddUserIcon.react").AddUserIcon, {
                    directional: !0,
                  }),
                }),
                onClick: g,
                primary: B,
                theme: "chat-info",
              })
            : null,
        q = E.length
          ? u.jsxs(
              o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerListSection,
              {
                ref: T,
                testid: void 0,
                title: R
                  ? s._(
                      /*BTDS*/ '_j{"*":"{number} community members","_1":"1 community member"}',
                      [s._plural(E.length, "number")],
                    )
                  : s._(/*BTDS*/ "Community members"),
                titleOnClick: D,
                subtitle: u.jsx(o("WAWebSearchIcon.react").SearchIcon, {
                  iconXstyle: f.secondaryColor,
                }),
                children: [
                  W,
                  u.jsx(r("WAWebNavigableFlatList.react"), {
                    ariaLabel: O,
                    listData: P,
                    onRenderItem: function (n) {
                      return u.jsx(h, {
                        active: t,
                        contextMenu: v,
                        data: n,
                        onOpenMemberMenu: $,
                        participantCollection: c,
                      });
                    },
                    rotateList: !0,
                    selection: t,
                  }),
                  N,
                ],
              },
            )
          : null;
      return u.jsxs(u.Fragment, { children: [q, F, M] });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      return (
        e.length > o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS
      );
    }
    l.default = y;
  },
  226,
);
