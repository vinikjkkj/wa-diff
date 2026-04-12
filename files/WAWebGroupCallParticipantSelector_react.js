__d(
  "WAWebGroupCallParticipantSelector.react",
  [
    "fbt",
    "CometVirtualization.react",
    "WAWebActionMenuItem.react",
    "WAWebCalendarFilledRefreshedIcon.react",
    "WAWebCallDropdownMenuItems.react",
    "WAWebCheckBox.react",
    "WAWebChevronCustomIcons",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebContactImage.react",
    "WAWebDetailImage.react",
    "WAWebElevatedPushNamesFlag",
    "WAWebFlex.react",
    "WAWebFrontendChatGetters",
    "WAWebGroupChatImage.react",
    "WAWebGroupMetadataCollection",
    "WAWebIcChevronDownMenuIcon.react",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebNoop",
    "WAWebStackedCirclesImage.react",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebVoipCallsTabScheduleCallModal.react",
    "WAWebVoipCreateCallLinksPopupLoadable.react",
    "WAWebVoipStartCall",
    "WAWebWamEnumCallFromUi",
    "WAWebWamEnumLobbyEntryPointType",
    "WAWebWamEnumSubSurface",
    "WDSIconIcCallFilled.react",
    "WDSIconIcLink.react",
    "WDSIconIcVideocamFilled.react",
    "WDSTooltip.react",
    "compactMap",
    "fbs",
    "react",
    "useWAWebABPropConfigValue",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useId,
      m = c.useMemo,
      p = c.useState,
      _ = {
        callButtonMenuItemIcon: {
          color: "x1pse0pq",
          height: "xxk0z11",
          width: "xvy4d1p",
          $$css: !0,
        },
        callButtonMenuItemIconDisabled: {
          color: "xhslqc4",
          height: "xxk0z11",
          width: "xvy4d1p",
          $$css: !0,
        },
        participantRow: { flex: "x98rzlu", width: "xh8yej3", $$css: !0 },
        dropdownContainer: {
          maxHeight: "x14c67g7",
          minHeight: "xi3av73",
          width: "xj6ak53",
          overflowX: "x6ikm8r",
          $$css: !0,
        },
        firstRowContainer: {
          flex: "x98rzlu",
          flexShrink: "x2lah0s",
          width: "xh8yej3",
          $$css: !0,
        },
        groupImageContainer: { flexShrink: "x2lah0s", $$css: !0 },
        groupTextContainer: {
          flex: "x98rzlu",
          minWidth: "xeuugli",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        participantListHeader: { flexShrink: "x2lah0s", $$css: !0 },
        participantListHeaderBorder: {
          borderTopColor: "xx42vgk",
          borderTopStyle: "x13fuv20",
          borderTopWidth: "x178xt8z",
          marginTop: "x1xmf6yo",
          width: "xh8yej3",
          $$css: !0,
        },
        callButtonsRow: {
          rowGap: "x1qvou4u",
          columnGap: "x1s70e7g",
          marginBottom: "xefnzgg",
          marginTop: "x1380le5",
          width: "xh8yej3",
          $$css: !0,
        },
        callButtonWrapper: {
          flex: "x1cqoux5",
          maxHeight: "x18wx58x",
          $$css: !0,
        },
        actionsContainer: {
          rowGap: "x1qvou4u",
          columnGap: "x1s70e7g",
          width: "xh8yej3",
          $$css: !0,
        },
        actionItemIcon: { color: "xhslqc4", $$css: !0 },
        contactImageContainer: {
          flexShrink: "x2lah0s",
          marginInlineStart: "x1uvdrpn",
          $$css: !0,
        },
        participantNameContainer: {
          minWidth: "xeuugli",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        checkboxContainer: { flexShrink: "x2lah0s", $$css: !0 },
        chevronContainer: {
          flexShrink: "x2lah0s",
          marginInlineStart: "x1uvdrpn",
          $$css: !0,
        },
        paddingAll8: {
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          $$css: !0,
        },
        paddingStart12: { paddingInlineStart: "x1iw51ew", $$css: !0 },
      };
    function f(e) {
      var t = e.chat,
        n = e.initialSubtext,
        a = e.isCallingDisabled,
        i = e.isVideo,
        l = e.logger,
        c = e.onActionTaken,
        f = e.onCallStart,
        g = e.useUnifiedUI,
        h = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "group_call_max_participants",
        ),
        y = p(!1),
        C = y[0],
        b = y[1],
        v = p(new Set()),
        S = v[0],
        R = v[1],
        L = m(
          function () {
            var e = r("WAWebGroupMetadataCollection").get(t.id.toString());
            if (e && e.participants) {
              var n = e.participants.toArray(),
                a = r("compactMap")(n, function (e) {
                  return o("WAWebContactCollection").ContactCollection.get(
                    e.id,
                  );
                });
              return a.filter(function (e) {
                return !o("WAWebContactGetters").getIsMe(e);
              });
            }
            return [];
          },
          [t.id],
        ),
        E = S.size,
        k = L.length + 1,
        I = E === 0 ? C || k > h : E + 1 > h,
        T = function () {
          return E > 0
            ? s._(/*BTDS*/ "{count} selected", [s._param("count", E)])
            : C && n != null
              ? n
              : r("fbs")._(/*BTDS*/ "Select people");
        },
        D = T(),
        x = function (t) {
          var e = t.id.toString();
          R(function (t) {
            var n = new Set(t);
            return (
              n.has(e)
                ? (l.deselectParticipant(
                    o("WAWebWamEnumSubSurface").SUB_SURFACE
                      .ADD_PARTICIPANT_PICKER,
                  ),
                  n.delete(e))
                : n.size + 1 < h
                  ? (l.selectParticipant(
                      o("WAWebWamEnumSubSurface").SUB_SURFACE
                        .ADD_PARTICIPANT_PICKER,
                    ),
                    n.add(e))
                  : o("WAWebToastManager").ToastManager.open(
                      u.jsx(o("WAWebToast.react").Toast, {
                        msg: s._(
                          /*BTDS*/ '_j{"*":"Can\'t select more than {max-participants} people for a call"}',
                          [s._param("max-participants", h, [0, h])],
                        ),
                      }),
                    ),
              n
            );
          });
        },
        $ = function () {
          b(!C);
        },
        P =
          E === 0 || E === L.length
            ? r("fbs")._(/*BTDS*/ "Call group")
            : s._(/*BTDS*/ "Call {count} selected", [s._param("count", E)]),
        N = function (n) {
          n
            ? l.clickVideoCall(
                o("WAWebWamEnumSubSurface").SUB_SURFACE.ADD_PARTICIPANT_PICKER,
              )
            : l.clickAudioCall(
                o("WAWebWamEnumSubSurface").SUB_SURFACE.ADD_PARTICIPANT_PICKER,
              );
          var e = L.filter(function (e) {
              return S.has(e.id.toString());
            }),
            r = L.length;
          if (e.length > 0 && e.length < r) {
            var a = e.map(function (e) {
              return e.id;
            });
            o("WAWebVoipStartCall").startWAWebVoipGroupCallFromWids(
              a,
              n,
              r > h
                ? o("WAWebWamEnumCallFromUi").CALL_FROM_UI
                    .LARGE_GROUP_CHAT_PICKER
                : o("WAWebWamEnumCallFromUi").CALL_FROM_UI.GROUP_CHAT_PICKER,
              o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
                .NOT_OPENED,
            );
          } else
            o("WAWebVoipStartCall").startWAWebVoipGroupCallFromChat(
              t,
              n,
              o("WAWebWamEnumCallFromUi").CALL_FROM_UI.GROUP_CHAT_DIRECT,
              o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
                .NOT_OPENED,
            );
          f(n);
        },
        M = function (n) {
          var e,
            a = S.has(n.id.toString()),
            i = o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(t),
            l = n.id.toString();
          return u.jsx(
            o("WAWebCallDropdownMenuItems.react").ParticipantMenuItem,
            {
              optionId: "participant-" + l,
              isSelected: a,
              onSelect: function () {
                return x(n);
              },
              children: u.jsxs((e = o("WAWebFlex.react")).FlexRow, {
                align: "center",
                xstyle: [_.paddingAll8, _.participantRow],
                children: [
                  u.jsx(e.FlexItem, {
                    xstyle: _.checkboxContainer,
                    children: u.jsx(o("WAWebCheckBox.react").CheckBox, {
                      checked: a,
                      theme: o("WAWebCheckBox.react").CheckboxTheme.OUTLINE,
                      onChange: r("WAWebNoop"),
                    }),
                  }),
                  u.jsx(e.FlexItem, {
                    xstyle: _.contactImageContainer,
                    children: u.jsx(r("WAWebContactImage.react"), {
                      contact: n,
                      size: 48,
                      loadPicture: !0,
                    }),
                  }),
                  u.jsx(e.FlexItem, {
                    xstyle: [_.paddingStart12, _.participantNameContainer],
                    children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
                      children: u.jsx(o("WAWebName.react").Name, {
                        contact: n,
                        showNotifyName: i,
                        elevatedPushNamesEnabled: i,
                        titlify: !0,
                        ellipsify: !0,
                      }),
                    }),
                  }),
                ],
              }),
            },
            l,
          );
        },
        w = o("WAWebFrontendChatGetters").getFormattedTitle(t),
        A = d(),
        F = d();
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        grow: 1,
        xstyle: [_.paddingAll8, _.dropdownContainer],
        children: [
          u.jsx(
            o("WAWebCallDropdownMenuItems.react").ExpandableHeaderMenuItem,
            {
              optionId: "group-header",
              onSelect: $,
              children: u.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                grow: 1,
                xstyle: _.firstRowContainer,
                children: [
                  u.jsx(o("WAWebFlex.react").FlexItem, {
                    xstyle: _.groupImageContainer,
                    children: u.jsx(r("WAWebGroupChatImage.react"), {
                      chat: t,
                      theme: o("WAWebStackedCirclesImage.react")
                        .SubgroupImageTheme.CHAT_HEADER,
                      regularChatImage: u.jsx(
                        o("WAWebDetailImage.react").DetailImage,
                        { id: t.id, size: 40, waitIdle: !0 },
                      ),
                      selection: null,
                      showCommunityInfo: !1,
                      size: 40,
                    }),
                  }),
                  u.jsxs(o("WAWebFlex.react").FlexColumn, {
                    xstyle: [_.paddingStart12, _.groupTextContainer],
                    grow: 1,
                    children: [
                      u.jsx(o("WAWebFlex.react").FlexItem, {
                        children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
                          textWrap: "ellipsis",
                          children: w,
                        }),
                      }),
                      u.jsx(o("WAWebFlex.react").FlexItem, {
                        children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
                          children: D,
                        }),
                      }),
                    ],
                  }),
                  u.jsx(o("WAWebFlex.react").FlexItem, {
                    xstyle: _.chevronContainer,
                    children: C
                      ? u.jsx(
                          o("WAWebChevronCustomIcons").ChevronUpCustomIcon,
                          { height: 20 },
                        )
                      : u.jsx(
                          o("WAWebIcChevronDownMenuIcon.react")
                            .IcChevronDownMenuIcon,
                          { height: 20 },
                        ),
                  }),
                ],
              }),
            },
          ),
          C &&
            u.jsxs(u.Fragment, {
              children: [
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  xstyle: _.participantListHeaderBorder,
                }),
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  xstyle: [_.paddingAll8, _.participantListHeader],
                  children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
                    weight: "semibold",
                    children: r("fbs")._(/*BTDS*/ "Members"),
                  }),
                }),
                L.length > 0 &&
                  u.jsx(o("WAWebFlex.react").FlexItem, {
                    children: u.jsx("div", {
                      className: "x98rzlu x11emyvd x2lwn1j x6ikm8r x1odjw0f",
                      children: u.jsx(o("WAWebFlex.react").FlexColumn, {
                        grow: 1,
                        rowGap: 2,
                        children: L.map(function (e) {
                          return u.jsx(
                            r("CometVirtualization.react"),
                            {
                              unmountHiddenChildren: !0,
                              pinChildrenOnInteraction: !1,
                              children: M(e),
                            },
                            e.id.toString(),
                          );
                        }),
                      }),
                    }),
                  }),
              ],
            }),
          g === !0
            ? u.jsxs(u.Fragment, {
                children: [
                  u.jsxs(o("WAWebFlex.react").FlexRow, {
                    xstyle: _.callButtonsRow,
                    children: [
                      u.jsx(o("WAWebFlex.react").FlexItem, {
                        grow: 1,
                        xstyle: _.callButtonWrapper,
                        children:
                          I && !a
                            ? u.jsx(r("WDSTooltip.react"), {
                                id: A,
                                label: s._(
                                  /*BTDS*/ "Select people to start a call",
                                ),
                                children: u.jsx(
                                  o("WAWebCallDropdownMenuItems.react")
                                    .CallButtonMenuItem,
                                  {
                                    optionId: "voice-call",
                                    testid: void 0,
                                    icon: u.jsx(
                                      r("WDSIconIcCallFilled.react"),
                                      {
                                        iconXstyle:
                                          _.callButtonMenuItemIconDisabled,
                                      },
                                    ),
                                    disabled: !0,
                                    label: s._(/*BTDS*/ "Voice"),
                                    onSelect: function () {
                                      (c(), N(!1));
                                    },
                                  },
                                ),
                              })
                            : u.jsx(
                                o("WAWebCallDropdownMenuItems.react")
                                  .CallButtonMenuItem,
                                {
                                  optionId: "voice-call",
                                  testid: void 0,
                                  icon: u.jsx(r("WDSIconIcCallFilled.react"), {
                                    iconXstyle:
                                      a || I
                                        ? _.callButtonMenuItemIconDisabled
                                        : _.callButtonMenuItemIcon,
                                  }),
                                  disabled: a || I,
                                  label: s._(/*BTDS*/ "Voice"),
                                  onSelect: function () {
                                    (c(), N(!1));
                                  },
                                },
                              ),
                      }),
                      u.jsx(o("WAWebFlex.react").FlexItem, {
                        grow: 1,
                        xstyle: _.callButtonWrapper,
                        children:
                          I && !a
                            ? u.jsx(r("WDSTooltip.react"), {
                                id: F,
                                label: s._(
                                  /*BTDS*/ "Select people to start a call",
                                ),
                                children: u.jsx(
                                  o("WAWebCallDropdownMenuItems.react")
                                    .CallButtonMenuItem,
                                  {
                                    optionId: "video-call",
                                    testid: void 0,
                                    icon: u.jsx(
                                      r("WDSIconIcVideocamFilled.react"),
                                      {
                                        iconXstyle:
                                          _.callButtonMenuItemIconDisabled,
                                      },
                                    ),
                                    disabled: !0,
                                    label: s._(/*BTDS*/ "Video"),
                                    onSelect: function () {
                                      (c(), N(!0));
                                    },
                                  },
                                ),
                              })
                            : u.jsx(
                                o("WAWebCallDropdownMenuItems.react")
                                  .CallButtonMenuItem,
                                {
                                  optionId: "video-call",
                                  testid: void 0,
                                  icon: u.jsx(
                                    r("WDSIconIcVideocamFilled.react"),
                                    {
                                      iconXstyle:
                                        a || I
                                          ? _.callButtonMenuItemIconDisabled
                                          : _.callButtonMenuItemIcon,
                                    },
                                  ),
                                  disabled: a || I,
                                  label: s._(/*BTDS*/ "Video"),
                                  onSelect: function () {
                                    (c(), N(!0));
                                  },
                                },
                              ),
                      }),
                    ],
                  }),
                  !C &&
                    u.jsxs(u.Fragment, {
                      children: [
                        u.jsx("div", {
                          className: "x3x0x6p xjm9jq1 xav9cv8 x4tpdpg xh8yej3",
                        }),
                        u.jsxs(o("WAWebFlex.react").FlexColumn, {
                          xstyle: _.actionsContainer,
                          children: [
                            u.jsx(
                              o("WAWebActionMenuItem.react").ActionMenuItem,
                              {
                                optionId: "send-call-link",
                                detailLeft: u.jsx(r("WDSIconIcLink.react"), {
                                  testid: void 0,
                                  xstyle: _.actionItemIcon,
                                }),
                                primary: u.jsx(
                                  o("WAWebText.react").WAWebTextTitle,
                                  {
                                    color: "secondary",
                                    children: s._(/*BTDS*/ "Send call link"),
                                  },
                                ),
                                onSelect: function () {
                                  (c(),
                                    l.clickCreateVideoCallLinkChatThread(
                                      o("WAWebWamEnumSubSurface").SUB_SURFACE
                                        .ADD_PARTICIPANT_PICKER,
                                    ),
                                    o("WAWebModalManager").ModalManager.open(
                                      u.jsx(
                                        o(
                                          "WAWebVoipCreateCallLinksPopupLoadable.react",
                                        ).WAWebVoipCreateCallLinksPopupLoadable,
                                        { targetChat: t },
                                      ),
                                    ));
                                },
                              },
                            ),
                            u.jsx(
                              o("WAWebActionMenuItem.react").ActionMenuItem,
                              {
                                optionId: "schedule-call",
                                detailLeft: u.jsx(
                                  o("WAWebCalendarFilledRefreshedIcon.react")
                                    .CalendarFilledRefreshedIcon,
                                  { xstyle: _.actionItemIcon },
                                ),
                                primary: u.jsx(
                                  o("WAWebText.react").WAWebTextTitle,
                                  {
                                    color: "secondary",
                                    children: s._(/*BTDS*/ "Schedule call"),
                                  },
                                ),
                                onSelect: function () {
                                  (c(),
                                    l.clickCreateEventChatThread(
                                      o("WAWebWamEnumSubSurface").SUB_SURFACE
                                        .ADD_PARTICIPANT_PICKER,
                                    ),
                                    o(
                                      "WAWebVoipCallsTabScheduleCallModal.react",
                                    ).handleScheduleCallForChat(t));
                                },
                              },
                            ),
                          ],
                        }),
                      ],
                    }),
                ],
              })
            : u.jsx(u.Fragment, {
                children: u.jsx(o("WAWebFlex.react").FlexRow, {
                  xstyle: _.callButtonsRow,
                  children: u.jsx(o("WAWebFlex.react").FlexItem, {
                    grow: 1,
                    xstyle: _.callButtonWrapper,
                    children: u.jsx(
                      o("WAWebCallDropdownMenuItems.react").CallButtonMenuItem,
                      {
                        optionId: "call-button",
                        testid: void 0,
                        icon: i
                          ? u.jsx(r("WDSIconIcVideocamFilled.react"), {
                              iconXstyle:
                                a || I
                                  ? _.callButtonMenuItemIconDisabled
                                  : _.callButtonMenuItemIcon,
                            })
                          : u.jsx(r("WDSIconIcCallFilled.react"), {
                              iconXstyle:
                                a || I
                                  ? _.callButtonMenuItemIconDisabled
                                  : _.callButtonMenuItemIcon,
                            }),
                        disabled: a || I,
                        label: P,
                        onSelect: function () {
                          return N(i);
                        },
                      },
                    ),
                  }),
                }),
              }),
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
