__d(
  "WAWebCommunityHomeUnjoinedSubgroups.react",
  [
    "fbt",
    "WATimeUtils",
    "WAWebCellFrame.react",
    "WAWebChatCommunityUtils",
    "WAWebChatInfoDrawerSection.react",
    "WAWebChatInfoExpandButton.react",
    "WAWebCommunityCells.react",
    "WAWebCommunityDailyUtils",
    "WAWebCommunityGatingUtils",
    "WAWebCommunitySpeakerIcon.react",
    "WAWebDetailImage.react",
    "WAWebEmojiText.react",
    "WAWebFetchUnjoinedGroupsProfilePicsAction",
    "WAWebGroupType",
    "WAWebKeyboardHotKeys.react",
    "WAWebModalManager",
    "WAWebNavigableFlatList.react",
    "WAWebPinned2Icon.react",
    "WAWebQueryAndUpdateSubgroupParticipantCountAction",
    "WAWebSingleSelection",
    "WAWebSubgroupJoinModal.react",
    "WAWebUnjoinedGroupsModal.react",
    "WAWebUnjoinedSubgroupComparator",
    "WAWebUnjoinedSubgroupMetadataCollection",
    "react",
    "useWAWebActiveSelection",
    "useWAWebEventTargetValue",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useMemo,
      p = c.useState,
      _ = {
        viewAllContainer: { height: "xvt47uu", $$css: !0 },
        iconPinned: { color: "xpteuj8", $$css: !0 },
      },
      f = u.jsx(
        "div",
        {
          className: "x1rg5ohu x14z9mp xhslqc4 x16dsc37",
          children: u.jsx(o("WAWebPinned2Icon.react").Pinned2Icon, {
            iconXstyle: _.iconPinned,
          }),
        },
        "icon-pinned",
      );
    function g(e, t, n) {
      var r = p(!1),
        a = r[0],
        i = r[1];
      d(
        function () {
          e.length &&
            !a &&
            o("WAWebFetchUnjoinedGroupsProfilePicsAction")
              .fetchUnjoinedGroupsPicsBatched(e, t, n)
              .then(function () {
                return i(!0);
              });
        },
        [e],
      );
    }
    function h(e, t, n) {
      (o("WAWebCommunityDailyUtils").incrementCommunityHomeEvent(
        e.parentGroupId,
        o("WAWebCommunityDailyUtils").CommunityDailyHomeMetricsType
          .HOME_GROUP_DISCOVERIES,
      ),
        o("WAWebModalManager").ModalManager.open(
          u.jsx(r("WAWebSubgroupJoinModal.react"), {
            subgroupMetadata: e,
            onSuccess: function () {
              (o("WAWebCommunityDailyUtils").incrementCommunityHomeEvent(
                e.parentGroupId,
                o("WAWebCommunityDailyUtils").CommunityDailyHomeMetricsType
                  .HOME_GROUP_JOINS,
              ),
                n == null || n());
            },
            source: t,
          }),
        ));
    }
    function y(e) {
      var t,
        n = e.chat,
        a = e.onAddNewGroupClick,
        i = e.highlightedSubgroups,
        l = i === void 0 ? [] : i,
        c = e.mini,
        p = c === void 0 ? !1 : c,
        f = e.type,
        y = m(function () {
          return new (r("WAWebSingleSelection"))([], function (e) {
            return e.itemKey;
          });
        }, []),
        b =
          o("useWAWebModelValues").useOptionalModelValues(n.groupMetadata, [
            "unjoinedSubgroups",
          ]) || {},
        v = b.unjoinedSubgroups,
        S = v === void 0 ? [] : v,
        R = s._(
          /*BTDS*/ '_j{"*":"Other groups: {other-groups} groups","_1":"Other groups: 1 group"}',
          [s._plural(S.length, "other-groups")],
        );
      (g(
        S,
        n.id,
        (t = n.groupMetadata) == null ? void 0 : t.joinedSubgroups[0],
      ),
        d(
          function () {
            var e,
              t,
              a =
                (e =
                  (t = n.groupMetadata) == null
                    ? void 0
                    : t.lastCommunityPollTimestamp) != null
                  ? e
                  : 0,
              i =
                o("WATimeUtils").unixTime() >
                a +
                  o(
                    "WAWebCommunityGatingUtils",
                  ).communityPollIntervalTimeInSeconds(),
              l = !1;
            for (var s of S) {
              var u = r("WAWebUnjoinedSubgroupMetadataCollection").get(s);
              if (u != null && (u.size == null || u.size === 0)) {
                l = !0;
                break;
              }
            }
            var c = i || l;
            if (S.length > 0 && c) {
              var d,
                m =
                  ((d = n.groupMetadata) == null
                    ? void 0
                    : d.joinedSubgroups) != null
                    ? n.groupMetadata.joinedSubgroups[0]
                    : null;
              o(
                "WAWebQueryAndUpdateSubgroupParticipantCountAction",
              ).queryAndUpdateSubgroupParticipantCount(n, m);
            }
          },
          [S, n],
        ));
      var L = function () {
          var e = S.map(function (e) {
            return e.toString();
          });
          return r("WAWebUnjoinedSubgroupMetadataCollection")
            .filter(function (t) {
              return e.includes(t.id.toString());
            })
            .sort(r("WAWebUnjoinedSubgroupComparator")(l));
        },
        E = L(),
        k = function () {
          var e = [].concat(E);
          return (
            E.length >
              o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS &&
              (e = e.slice(
                0,
                o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS,
              )),
            e.reduce(function (e, t) {
              return (
                (p &&
                  t.groupType ===
                    o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) ||
                  e.push({
                    itemKey: t.id.toString(),
                    subgroupMetadata: t,
                    height: 65,
                    shouldHighlight: l.some(function (e) {
                      return t.id.equals(e);
                    }),
                  }),
                e
              );
            }, [])
          );
        };
      y.init(k());
      var I = r("useWAWebEventTargetValue")(
          n.groupMetadata,
          ["change:allowNonAdminSubGroupCreation"],
          function () {
            return o("WAWebChatCommunityUtils").canAddGroupToCommunity(n);
          },
        ),
        T =
          I && !p
            ? u.jsx(o("WAWebCommunityCells.react").AddGroupCell, { onClick: a })
            : null,
        D = k();
      if (T == null && D.length === 0) return null;
      var x = function () {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(r("WAWebUnjoinedGroupsModal.react"), {
              onCancel: o("WAWebModalManager").closeModalManager,
              unjoinedGroups: E,
              onClickGroup: h,
              title: s._(/*BTDS*/ "Groups you can join"),
              type: f,
              highlightedSubgroups: l,
            }),
          );
        },
        $ =
          E.length > o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS
            ? u.jsx(r("WAWebChatInfoExpandButton.react"), {
                ariaLabel: s._(
                  /*BTDS*/ '_j{"*":"View all unjoined subgroups: {view-all} more groups","_1":"View all unjoined subgroups: 1 more group"}',
                  [
                    s._plural(
                      E.length -
                        o("WAWebChatInfoDrawerSection.react")
                          .INFO_DRAWER_MAX_ROWS,
                      "view-all",
                    ),
                  ],
                ),
                xstyle: _.viewAllContainer,
                numMore:
                  E.length -
                  o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS,
                onClick: x,
                viewAll: !0,
              })
            : null;
      return u.jsxs(
        o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerListSection,
        {
          testid: void 0,
          title: p
            ? s._(/*BTDS*/ "Groups you can join")
            : s._(/*BTDS*/ "Other groups"),
          children: [
            T,
            u.jsx(r("WAWebNavigableFlatList.react"), {
              ariaLabel: R.toString(),
              listData: D,
              onRenderItem: function (t) {
                return u.jsx(C, { data: t, active: y, type: f });
              },
              selection: y,
              rotateList: !0,
            }),
            $,
          ],
        },
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.active,
        n = e.data,
        a = e.type,
        i = n.shouldHighlight,
        l = n.subgroupMetadata,
        c = r("useWAWebActiveSelection")(t, l.id.toString()),
        d = c[0],
        m = c[1],
        p = s._(/*BTDS*/ "{subgroup-name}", [
          s._param("subgroup-name", l.subject),
        ]),
        _ = l.groupType,
        g = l.id,
        y = l.subject,
        C = _ === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP,
        b = C ? f : null,
        v = r("useWAWebEventTargetValue")(
          l,
          ["change:membershipApprovalMode"],
          function () {
            return l.membershipApprovalMode;
          },
        ),
        S = r("useWAWebEventTargetValue")(
          l,
          ["change:membershipApprovalRequest"],
          function () {
            return l.membershipApprovalRequest;
          },
        ),
        R = r("useWAWebEventTargetValue")(l, ["change:size"], function () {
          var e;
          return (e = l.size) != null ? e : 0;
        }),
        L = r("useWAWebEventTargetValue")(
          l,
          ["change:hiddenSubgroup"],
          function () {
            return l.hiddenSubgroup === !0;
          },
        ),
        E = R > 0,
        k = u.jsx("span", {
          className: "xhslqc4 xk50ysn",
          children: s._(/*BTDS*/ "Recently added"),
        }),
        I = s._(/*BTDS*/ "Announcement group"),
        T = "\u2022",
        D = s._(/*BTDS*/ "Request sent"),
        x = s._(/*BTDS*/ "Request to join"),
        $ = s._(/*BTDS*/ '_j{"*":"{number} members","_1":"1 member"}', [
          s._plural(R, "number"),
        ]),
        P = s._(/*BTDS*/ "Invite required"),
        N = null;
      (C
        ? (N = i ? u.jsxs("div", { children: [k, " ", T, " ", I] }) : I)
        : L
          ? (N = i ? u.jsxs("div", { children: [k, " ", T, " ", P] }) : P)
          : S
            ? (N = i ? u.jsxs("div", { children: [k, " ", T, " ", D] }) : D)
            : v
              ? (N = i ? u.jsxs("div", { children: [k, " ", T, " ", x] }) : x)
              : E &&
                (N = i ? u.jsxs("div", { children: [k, " ", T, " ", $] }) : $),
        i && !v && !C && !E && !L && (N = k));
      var M = function () {
          h(l, a);
        },
        w = "subgroup",
        A = { enter: M, space: M },
        F = y,
        O = g;
      _ === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP &&
        ((F = s._(/*BTDS*/ "Announcements").toString()), (O = l.parentGroupId));
      var B =
        _ === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
          ? u.jsx(r("WAWebCommunitySpeakerIcon.react"), { size: 40 })
          : u.jsx(o("WAWebDetailImage.react").DetailImage, {
              size: 40,
              id: O,
              shape: o("WAWebDetailImage.react").DetailImageShape.Circle,
              hiddenSubgroupIcon: "chat-list",
            });
      return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        ref: d,
        handlers: A,
        "aria-label": p.toString(),
        role: "button",
        children: u.jsx(r("WAWebCellFrame.react"), {
          theme: w,
          primary: u.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: F,
            ellipsify: !0,
          }),
          secondary: N,
          image: B,
          onClick: M,
          secondaryDetail: b,
          active: m,
        }),
      });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"),
      (l.pinnedIcon = f),
      (l.handleOpenSubgroupModal = h),
      (l.CommunityHomeUnjoinedSubgroups = y));
  },
  226,
);
