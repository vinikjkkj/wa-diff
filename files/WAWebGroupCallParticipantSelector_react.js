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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(73),
        n = e.chat,
        a = e.initialSubtext,
        i = e.isCallingDisabled,
        l = e.isVideo,
        c = e.logger,
        m = e.onActionTaken,
        f = e.onCallStart,
        C = e.useUnifiedUI,
        b = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "group_call_max_participants",
        ),
        v = p(!1),
        S = v[0],
        R = v[1],
        L;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = new Set()), (t[0] = L))
        : (L = t[0]);
      var E = p(L),
        k = E[0],
        I = E[1],
        T;
      if (t[1] !== n.id) {
        e: {
          var D = r("WAWebGroupMetadataCollection").get(n.id.toString());
          if (D && D.participants) {
            var x = D.participants.toArray(),
              $ = r("compactMap")(x, y);
            T = $.filter(h);
            break e;
          }
          var P;
          (t[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((P = []), (t[3] = P))
            : (P = t[3]),
            (T = P));
        }
        ((t[1] = n.id), (t[2] = T));
      } else T = t[2];
      var N = T,
        M = k.size,
        w = N.length + 1,
        A = M === 0 ? S || w > b : M + 1 > b,
        F;
      if (t[4] !== a || t[5] !== S || t[6] !== M) {
        var O = function () {
          return M > 0
            ? s._(/*BTDS*/ "{count} selected", [s._param("count", M)])
            : S && a != null
              ? a
              : r("fbs")._(/*BTDS*/ "Select people");
        };
        ((F = O()), (t[4] = a), (t[5] = S), (t[6] = M), (t[7] = F));
      } else F = t[7];
      var B = F,
        W;
      t[8] !== b || t[9] !== c
        ? ((W = function (t) {
            var e = t.id.toString();
            I(function (t) {
              var n = new Set(t);
              return (
                n.has(e)
                  ? (c.deselectParticipant(
                      o("WAWebWamEnumSubSurface").SUB_SURFACE
                        .ADD_PARTICIPANT_PICKER,
                    ),
                    n.delete(e))
                  : n.size + 1 < b
                    ? (c.selectParticipant(
                        o("WAWebWamEnumSubSurface").SUB_SURFACE
                          .ADD_PARTICIPANT_PICKER,
                      ),
                      n.add(e))
                    : o("WAWebToastManager").ToastManager.open(
                        u.jsx(o("WAWebToast.react").Toast, {
                          msg: s._(
                            /*BTDS*/ '_j{"*":"Can\'t select more than {max-participants} people for a call"}',
                            [s._param("max-participants", b, [0, b])],
                          ),
                        }),
                      ),
                n
              );
            });
          }),
          (t[8] = b),
          (t[9] = c),
          (t[10] = W))
        : (W = t[10]);
      var q = W,
        U;
      t[11] !== S
        ? ((U = function () {
            R(!S);
          }),
          (t[11] = S),
          (t[12] = U))
        : (U = t[12]);
      var V = U,
        H;
      t[13] !== N.length || t[14] !== M
        ? ((H =
            M === 0 || M === N.length
              ? r("fbs")._(/*BTDS*/ "Call group")
              : s._(/*BTDS*/ "Call {count} selected", [s._param("count", M)])),
          (t[13] = N.length),
          (t[14] = M),
          (t[15] = H))
        : (H = t[15]);
      var G = H,
        z;
      t[16] !== b ||
      t[17] !== n ||
      t[18] !== N ||
      t[19] !== c ||
      t[20] !== f ||
      t[21] !== k
        ? ((z = function (t) {
            t
              ? c.clickVideoCall(
                  o("WAWebWamEnumSubSurface").SUB_SURFACE
                    .ADD_PARTICIPANT_PICKER,
                )
              : c.clickAudioCall(
                  o("WAWebWamEnumSubSurface").SUB_SURFACE
                    .ADD_PARTICIPANT_PICKER,
                );
            var e = N.filter(function (e) {
                return k.has(e.id.toString());
              }),
              r = N.length;
            if (e.length > 0 && e.length < r) {
              var a = e.map(g);
              o("WAWebVoipStartCall").startWAWebVoipGroupCallFromWids(
                a,
                t,
                r > b
                  ? o("WAWebWamEnumCallFromUi").CALL_FROM_UI
                      .LARGE_GROUP_CHAT_PICKER
                  : o("WAWebWamEnumCallFromUi").CALL_FROM_UI.GROUP_CHAT_PICKER,
                o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
                  .NOT_OPENED,
              );
            } else
              o("WAWebVoipStartCall").startWAWebVoipGroupCallFromChat(
                n,
                t,
                o("WAWebWamEnumCallFromUi").CALL_FROM_UI.GROUP_CHAT_DIRECT,
                o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
                  .NOT_OPENED,
              );
            f(t);
          }),
          (t[16] = b),
          (t[17] = n),
          (t[18] = N),
          (t[19] = c),
          (t[20] = f),
          (t[21] = k),
          (t[22] = z))
        : (z = t[22]);
      var j = z,
        K;
      t[23] !== n || t[24] !== q || t[25] !== k
        ? ((K = function (t) {
            var e,
              a = k.has(t.id.toString()),
              i = o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(n),
              l = t.id.toString();
            return u.jsx(
              o("WAWebCallDropdownMenuItems.react").ParticipantMenuItem,
              {
                optionId: "participant-" + l,
                isSelected: a,
                onSelect: function () {
                  return q(t);
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
                        contact: t,
                        size: 48,
                        loadPicture: !0,
                      }),
                    }),
                    u.jsx(e.FlexItem, {
                      xstyle: [_.paddingStart12, _.participantNameContainer],
                      children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
                        children: u.jsx(o("WAWebName.react").Name, {
                          contact: t,
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
          }),
          (t[23] = n),
          (t[24] = q),
          (t[25] = k),
          (t[26] = K))
        : (K = t[26]);
      var Q = K,
        X;
      t[27] !== n
        ? ((X = o("WAWebFrontendChatGetters").getFormattedTitle(n)),
          (t[27] = n),
          (t[28] = X))
        : (X = t[28]);
      var Y = X,
        J = d(),
        Z = d(),
        ee;
      t[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((ee = [_.paddingAll8, _.dropdownContainer]), (t[29] = ee))
        : (ee = t[29]);
      var te;
      t[30] !== n.id
        ? ((te = u.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: n.id,
            size: 40,
            waitIdle: !0,
          })),
          (t[30] = n.id),
          (t[31] = te))
        : (te = t[31]);
      var ne;
      t[32] !== n || t[33] !== te
        ? ((ne = u.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: _.groupImageContainer,
            children: u.jsx(r("WAWebGroupChatImage.react"), {
              chat: n,
              theme: o("WAWebStackedCirclesImage.react").SubgroupImageTheme
                .CHAT_HEADER,
              regularChatImage: te,
              selection: null,
              showCommunityInfo: !1,
              size: 40,
            }),
          })),
          (t[32] = n),
          (t[33] = te),
          (t[34] = ne))
        : (ne = t[34]);
      var re;
      t[35] === Symbol.for("react.memo_cache_sentinel")
        ? ((re = [_.paddingStart12, _.groupTextContainer]), (t[35] = re))
        : (re = t[35]);
      var oe;
      t[36] !== Y
        ? ((oe = u.jsx(o("WAWebFlex.react").FlexItem, {
            children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
              textWrap: "ellipsis",
              children: Y,
            }),
          })),
          (t[36] = Y),
          (t[37] = oe))
        : (oe = t[37]);
      var ae;
      t[38] !== B
        ? ((ae = u.jsx(o("WAWebFlex.react").FlexItem, {
            children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
              children: B,
            }),
          })),
          (t[38] = B),
          (t[39] = ae))
        : (ae = t[39]);
      var ie;
      t[40] !== oe || t[41] !== ae
        ? ((ie = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: re,
            grow: 1,
            children: [oe, ae],
          })),
          (t[40] = oe),
          (t[41] = ae),
          (t[42] = ie))
        : (ie = t[42]);
      var le;
      t[43] !== S
        ? ((le = u.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: _.chevronContainer,
            children: S
              ? u.jsx(o("WAWebChevronCustomIcons").ChevronUpCustomIcon, {
                  height: 20,
                })
              : u.jsx(
                  o("WAWebIcChevronDownMenuIcon.react").IcChevronDownMenuIcon,
                  { height: 20 },
                ),
          })),
          (t[43] = S),
          (t[44] = le))
        : (le = t[44]);
      var se;
      t[45] !== ne || t[46] !== ie || t[47] !== le
        ? ((se = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            grow: 1,
            xstyle: _.firstRowContainer,
            children: [ne, ie, le],
          })),
          (t[45] = ne),
          (t[46] = ie),
          (t[47] = le),
          (t[48] = se))
        : (se = t[48]);
      var ue;
      t[49] !== V || t[50] !== se
        ? ((ue = u.jsx(
            o("WAWebCallDropdownMenuItems.react").ExpandableHeaderMenuItem,
            { optionId: "group-header", onSelect: V, children: se },
          )),
          (t[49] = V),
          (t[50] = se),
          (t[51] = ue))
        : (ue = t[51]);
      var ce;
      t[52] !== N || t[53] !== S || t[54] !== Q
        ? ((ce =
            S &&
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
                N.length > 0 &&
                  u.jsx(o("WAWebFlex.react").FlexItem, {
                    children: u.jsx("div", {
                      className: "x98rzlu x11emyvd x2lwn1j x6ikm8r x1odjw0f",
                      children: u.jsx(o("WAWebFlex.react").FlexColumn, {
                        grow: 1,
                        rowGap: 2,
                        children: N.map(function (e) {
                          return u.jsx(
                            r("CometVirtualization.react"),
                            {
                              unmountHiddenChildren: !0,
                              pinChildrenOnInteraction: !1,
                              children: Q(e),
                            },
                            e.id.toString(),
                          );
                        }),
                      }),
                    }),
                  }),
              ],
            })),
          (t[52] = N),
          (t[53] = S),
          (t[54] = Q),
          (t[55] = ce))
        : (ce = t[55]);
      var de;
      t[56] !== G ||
      t[57] !== n ||
      t[58] !== j ||
      t[59] !== A ||
      t[60] !== i ||
      t[61] !== S ||
      t[62] !== l ||
      t[63] !== c ||
      t[64] !== m ||
      t[65] !== C ||
      t[66] !== Z ||
      t[67] !== J
        ? ((de =
            C === !0
              ? u.jsxs(u.Fragment, {
                  children: [
                    u.jsxs(o("WAWebFlex.react").FlexRow, {
                      xstyle: _.callButtonsRow,
                      children: [
                        u.jsx(o("WAWebFlex.react").FlexItem, {
                          grow: 1,
                          xstyle: _.callButtonWrapper,
                          children:
                            A && !i
                              ? u.jsx(r("WDSTooltip.react"), {
                                  id: J,
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
                                        (m(), j(!1));
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
                                    icon: u.jsx(
                                      r("WDSIconIcCallFilled.react"),
                                      {
                                        iconXstyle:
                                          i || A
                                            ? _.callButtonMenuItemIconDisabled
                                            : _.callButtonMenuItemIcon,
                                      },
                                    ),
                                    disabled: i || A,
                                    label: s._(/*BTDS*/ "Voice"),
                                    onSelect: function () {
                                      (m(), j(!1));
                                    },
                                  },
                                ),
                        }),
                        u.jsx(o("WAWebFlex.react").FlexItem, {
                          grow: 1,
                          xstyle: _.callButtonWrapper,
                          children:
                            A && !i
                              ? u.jsx(r("WDSTooltip.react"), {
                                  id: Z,
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
                                        (m(), j(!0));
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
                                          i || A
                                            ? _.callButtonMenuItemIconDisabled
                                            : _.callButtonMenuItemIcon,
                                      },
                                    ),
                                    disabled: i || A,
                                    label: s._(/*BTDS*/ "Video"),
                                    onSelect: function () {
                                      (m(), j(!0));
                                    },
                                  },
                                ),
                        }),
                      ],
                    }),
                    !S &&
                      u.jsxs(u.Fragment, {
                        children: [
                          u.jsx("div", {
                            className:
                              "x3x0x6p xjm9jq1 xav9cv8 x4tpdpg xh8yej3",
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
                                    (m(),
                                      c.clickCreateVideoCallLinkChatThread(
                                        o("WAWebWamEnumSubSurface").SUB_SURFACE
                                          .ADD_PARTICIPANT_PICKER,
                                      ),
                                      o("WAWebModalManager").ModalManager.open(
                                        u.jsx(
                                          o(
                                            "WAWebVoipCreateCallLinksPopupLoadable.react",
                                          )
                                            .WAWebVoipCreateCallLinksPopupLoadable,
                                          { targetChat: n },
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
                                    (m(),
                                      c.clickCreateEventChatThread(
                                        o("WAWebWamEnumSubSurface").SUB_SURFACE
                                          .ADD_PARTICIPANT_PICKER,
                                      ),
                                      o(
                                        "WAWebVoipCallsTabScheduleCallModal.react",
                                      ).handleScheduleCallForChat(n));
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
                        o("WAWebCallDropdownMenuItems.react")
                          .CallButtonMenuItem,
                        {
                          optionId: "call-button",
                          testid: void 0,
                          icon: l
                            ? u.jsx(r("WDSIconIcVideocamFilled.react"), {
                                iconXstyle:
                                  i || A
                                    ? _.callButtonMenuItemIconDisabled
                                    : _.callButtonMenuItemIcon,
                              })
                            : u.jsx(r("WDSIconIcCallFilled.react"), {
                                iconXstyle:
                                  i || A
                                    ? _.callButtonMenuItemIconDisabled
                                    : _.callButtonMenuItemIcon,
                              }),
                          disabled: i || A,
                          label: G,
                          onSelect: function () {
                            return j(l);
                          },
                        },
                      ),
                    }),
                  }),
                })),
          (t[56] = G),
          (t[57] = n),
          (t[58] = j),
          (t[59] = A),
          (t[60] = i),
          (t[61] = S),
          (t[62] = l),
          (t[63] = c),
          (t[64] = m),
          (t[65] = C),
          (t[66] = Z),
          (t[67] = J),
          (t[68] = de))
        : (de = t[68]);
      var me;
      return (
        t[69] !== ue || t[70] !== ce || t[71] !== de
          ? ((me = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              grow: 1,
              xstyle: ee,
              children: [ue, ce, de],
            })),
            (t[69] = ue),
            (t[70] = ce),
            (t[71] = de),
            (t[72] = me))
          : (me = t[72]),
        me
      );
    }
    function g(e) {
      return e.id;
    }
    function h(e) {
      return !o("WAWebContactGetters").getIsMe(e);
    }
    function y(e) {
      return o("WAWebContactCollection").ContactCollection.get(e.id);
    }
    l.default = f;
  },
  226,
);
