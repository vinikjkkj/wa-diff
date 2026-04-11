__d(
  "WAWebVoipCallParticipantsDrawer.react",
  [
    "fbt",
    "WALogger",
    "WAWebCallLogUtils",
    "WAWebChatCollection",
    "WAWebConfirmPopup.react",
    "WAWebContactCollection",
    "WAWebContactImage.react",
    "WAWebDefaultGroupRefreshedIcon.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebMultiParticipantCallImage.react",
    "WAWebParticipantListUtils",
    "WAWebUserPrefsMeUser",
    "WAWebVoipCallLinkSharePanel.react",
    "WAWebVoipEventConstants",
    "WAWebVoipNewGroupCallContactPicker.react",
    "WAWebVoipStackInterface",
    "WAWebVoipUiParticipantPanel.react",
    "WAWebVoipWaCallEnums",
    "WDSButton.react",
    "WDSIconIcCheck.react",
    "WDSIconIcClose.react",
    "WDSIconIcPersonAdd.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebVoipModalManager",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h = g || (g = o("react")),
      y = g,
      C = y.useCallback,
      b = y.useMemo,
      v = 80,
      S = {
        addPeopleIcon: { color: "xhslqc4", flexShrink: "x2lah0s", $$css: !0 },
        drawerBackground: {
          backgroundColor: "x1od0jb8",
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "xhl9efl",
          borderEndStartRadius: "xj65ea0",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        drawerContainer: {
          height: "x1kg0u7c",
          insetInlineEnd: "xnvtvi1",
          left: null,
          right: null,
          position: "x10l6tqk",
          top: "xpcismx",
          width: "xo1tz6s",
          $$css: !0,
        },
        waitingRoomSection: {
          paddingTop: "x16ovd2e",
          overflowX: "x1plvlek",
          overflowY: "xryxfnj",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        waitingRoomSectionHeader: {
          minHeight: "xu0aao5",
          paddingBottom: "x1nbhmlj",
          paddingTop: "x16ovd2e",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          justifyContent: "x1qughib",
          alignSelf: "xkh2ocl",
          $$css: !0,
        },
        waitingRoomRow: {
          justifyContent: "x1qughib",
          minWidth: "xeuugli",
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          flexShrink: "x2lah0s",
          minHeight: "x1wjjzik",
          $$css: !0,
        },
        waitingRoomRowTextContainer: { minWidth: "xeuugli", $$css: !0 },
        waitingRoomProfilePic: { flexShrink: "x2lah0s", $$css: !0 },
        waitingRoomRowActions: {
          marginInlineStart: "xvc5jky",
          flexShrink: "x2lah0s",
          rowGap: "x129bwdz",
          columnGap: "x1trrmfo",
          $$css: !0,
        },
        waitingRoomToggleRow: {
          paddingTop: "x1p57kb1",
          paddingBottom: "xvpt6g3",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          justifyContent: "x1qughib",
          flexShrink: "x2lah0s",
          alignSelf: "xkh2ocl",
          overflowX: "x1plvlek",
          overflowY: "xryxfnj",
          $$css: !0,
        },
        headerSection: {
          alignItems: "x6s0dn4",
          rowGap: "x129bwdz",
          columnGap: "x1trrmfo",
          paddingTop: "x1p57kb1",
          paddingBottom: "xvpt6g3",
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "x1nzty39",
          paddingLeft: null,
          paddingRight: null,
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        groupNameText: { textAlign: "x2b8uid", $$css: !0 },
        defaultGroupAvatar: {
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          backgroundColor: "x4wrhlh",
          $$css: !0,
        },
        connectedCountText: { textAlign: "x2b8uid", $$css: !0 },
      };
    function R(e) {
      var t = o("react-compiler-runtime").c(20),
        n = e.chat,
        a = e.connectedCount,
        i = e.isCallLink,
        l = e.isLinkedGroupCall,
        u = e.participantsWithoutSelf,
        c;
      t[0] !== u
        ? ((c = o("WAWebCallLogUtils").sortConnectedParticipants(u)),
          (t[0] = u),
          (t[1] = c))
        : (c = t[1]);
      var d = c,
        m = d.sortedParticipants,
        p;
      t[2] !== (n == null ? void 0 : n.formattedTitle) ||
      t[3] !== (n == null ? void 0 : n.name) ||
      t[4] !== l ||
      t[5] !== m
        ? ((p = l
            ? (n == null ? void 0 : n.name) ||
              (n == null ? void 0 : n.formattedTitle)
            : o("WAWebParticipantListUtils").formatParticipantWidsPreserveOrder(
                m,
              )),
          (t[2] = n == null ? void 0 : n.formattedTitle),
          (t[3] = n == null ? void 0 : n.name),
          (t[4] = l),
          (t[5] = m),
          (t[6] = p))
        : (p = t[6]);
      var _ = p,
        f;
      e: {
        if (l && n != null) {
          var g;
          (t[7] !== n.contact
            ? ((g = h.jsx(r("WAWebContactImage.react"), {
                contact: n.contact,
                size: v,
                loadPicture: !0,
              })),
              (t[7] = n.contact),
              (t[8] = g))
            : (g = t[8]),
            (f = g));
          break e;
        }
        if (m.length > 0) {
          var y;
          (t[9] !== m
            ? ((y = h.jsx(r("WAWebMultiParticipantCallImage.react"), {
                participantWids: m,
                size: v,
              })),
              (t[9] = m),
              (t[10] = y))
            : (y = t[10]),
            (f = y));
          break e;
        }
        if (i) {
          var C;
          (t[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((C = h.jsx(
                o("WAWebDefaultGroupRefreshedIcon.react")
                  .DefaultGroupRefreshedIcon,
                { height: v, width: v, iconXstyle: S.defaultGroupAvatar },
              )),
              (t[11] = C))
            : (C = t[11]),
            (f = C));
          break e;
        }
        f = null;
      }
      var b = f,
        R;
      t[12] !== _
        ? ((R = h.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: S.groupNameText,
            children: h.jsx(r("WDSText.react"), {
              type: "Headline2",
              colorName: "contentDefault",
              maxLines: 2,
              children: _,
            }),
          })),
          (t[12] = _),
          (t[13] = R))
        : (R = t[13]);
      var L;
      t[14] !== a
        ? ((L = h.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: S.connectedCountText,
            children: h.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              children: s._(/*BTDS*/ "{count} connected", [
                s._param("count", a),
              ]),
            }),
          })),
          (t[14] = a),
          (t[15] = L))
        : (L = t[15]);
      var E;
      return (
        t[16] !== b || t[17] !== R || t[18] !== L
          ? ((E = h.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: S.headerSection,
              children: [b, R, L],
            })),
            (t[16] = b),
            (t[17] = R),
            (t[18] = L),
            (t[19] = E))
          : (E = t[19]),
        E
      );
    }
    function L(t) {
      var a = t.call,
        i = t.chat,
        l = t.isLinkedGroupCall,
        g = t.isVideoCall,
        y = t.onClose,
        v = t.onRingParticipant,
        L = t.participantStates,
        E = t.participantsWithoutSelf,
        k = t.showCloseButton,
        I = k === void 0 ? !0 : k,
        T = r("useWAWebVoipModalManager")(),
        D = T.closeModal,
        x = T.openModal,
        $ = b(
          function () {
            if (i == null) return E;
            var e = i.groupMetadata;
            if (e == null) return E;
            var t = new Set(
                E.map(function (e) {
                  return e.toString();
                }),
              ),
              n = e.participants
                .map(function (e) {
                  return e.id;
                })
                .filter(function (e) {
                  return (
                    !t.has(e.toString()) &&
                    !o("WAWebUserPrefsMeUser").isMeAccount(e)
                  );
                });
            return [].concat(E, n);
          },
          [i, E],
        ),
        P = b(
          function () {
            var e = 0;
            for (var t of E) {
              var n = L.get(t.toString());
              n === o("WAWebVoipWaCallEnums").CallParticipantState.Connected &&
                e++;
            }
            return e + 1;
          },
          [E, L],
        ),
        N = r("useWAWebEventTargetValue")(
          a,
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.WAITING_ROOM_STATE,
          ),
          function () {
            var e;
            return (e = a == null ? void 0 : a.waitingRoomUsers) != null
              ? e
              : [];
          },
        ),
        M = r("useWAWebEventTargetValue")(
          a,
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.WAITING_ROOM_STATE,
          ),
          function () {
            var e;
            return (e = a == null ? void 0 : a.isWaitingRoomEnabled) != null
              ? e
              : !1;
          },
        ),
        w =
          (a == null ? void 0 : a.callLinkCreatorJid) != null &&
          o("WAWebUserPrefsMeUser").isMeAccount(a.callLinkCreatorJid),
        A = C(function (t) {
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              var n = yield o(
                "WAWebVoipStackInterface",
              ).getVoipStackInterface();
              if (n != null && n.type === "web") {
                var r = yield n.waitingRoomAdmit(t.toString({ legacy: !0 }));
                r !== 0 &&
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: waitingRoomAdmit returned non-zero status: ",
                          "",
                        ])),
                      r,
                    )
                    .sendLogs("waiting-room-admit-error");
              }
            } catch (e) {
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: waitingRoomAdmit failed: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("waiting-room-admit-error");
            }
          })();
        }, []),
        F = C(function (e) {
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              var t = yield o(
                "WAWebVoipStackInterface",
              ).getVoipStackInterface();
              if (t != null && t.type === "web") {
                var n = yield t.waitingRoomDeny(e.toString({ legacy: !0 }));
                n !== 0 &&
                  o("WALogger")
                    .ERROR(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: waitingRoomDeny returned non-zero status: ",
                          "",
                        ])),
                      n,
                    )
                    .sendLogs("waiting-room-deny-error");
              }
            } catch (e) {
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: waitingRoomDeny failed: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("waiting-room-deny-error");
            }
          })();
        }, []),
        O = C(function () {
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              var e = yield o(
                "WAWebVoipStackInterface",
              ).getVoipStackInterface();
              if (e != null && e.type === "web") {
                var t = yield e.waitingRoomAdmitAll();
                t !== 0 &&
                  o("WALogger")
                    .ERROR(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: waitingRoomAdmitAll returned non-zero status: ",
                          "",
                        ])),
                      t,
                    )
                    .sendLogs("waiting-room-admit-all-error");
              }
            } catch (e) {
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: waitingRoomAdmitAll failed: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("waiting-room-admit-all-error");
            }
          })();
        }, []),
        B = C(
          function () {
            x(
              h.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                onOK: function () {
                  (D(), O());
                },
                onCancel: function () {
                  return D();
                },
                children: h.jsx(r("WDSText.react"), {
                  colorName: "contentDefault",
                  type: "Body2",
                  children: s._(
                    /*BTDS*/ "Anyone waiting to join will be admitted to the call.",
                  ),
                }),
              }),
            );
          },
          [x, D, O],
        ),
        W = C(function (e) {
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              var t = yield o(
                "WAWebVoipStackInterface",
              ).getVoipStackInterface();
              if (t != null && t.type === "web") {
                var n = yield t.waitingRoomToggleActiveCall(e);
                n !== 0 &&
                  o("WALogger")
                    .ERROR(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: waitingRoomToggleActiveCall returned non-zero status: ",
                          "",
                        ])),
                      n,
                    )
                    .sendLogs("waiting-room-toggle-error");
              }
            } catch (e) {
              o("WALogger")
                .ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: waitingRoomToggleActiveCall failed: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("waiting-room-toggle-error");
            }
          })();
        }, []),
        q = C(
          function () {
            var e = !M;
            !e && N.length > 0
              ? x(
                  h.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                    onOK: function () {
                      (D(), W(!1));
                    },
                    onCancel: function () {
                      return D();
                    },
                    children: h.jsx(r("WDSText.react"), {
                      colorName: "contentDefault",
                      type: "Body2",
                      children: s._(
                        /*BTDS*/ "Anyone waiting to join will be admitted to the call.",
                      ),
                    }),
                  }),
                )
              : W(e);
          },
          [M, N, x, D, W],
        ),
        U = (a == null ? void 0 : a.isCallLink) === !0 && w;
      if (i == null && a == null) return null;
      var V = function () {
          var e =
            i != null
              ? i
              : o("WAWebChatCollection").ChatCollection.getLatestChatForWid(
                  o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
                );
          e != null &&
            x(
              h.jsx(r("WAWebVoipNewGroupCallContactPicker.react"), {
                chat: e,
                isAddingToExistingCall: !0,
                isVideoCall: g,
                onClose: D,
              }),
              { blockClose: !0, skipDarkTheme: !0 },
            );
        },
        H = !l && (i != null || a != null);
      return h.jsx(o("WAWebFlex.react").FlexColumn, {
        xstyle: S.drawerContainer,
        children: h.jsxs(r("WAWebDrawer.react"), {
          xstyle: S.drawerBackground,
          children: [
            I &&
              h.jsx("div", {
                className:
                  "x78zum5 x1nhvcw1 x16ovd2e x12xbjc7 x12w63v0 x1nzty39",
                children: h.jsx("div", {
                  role: "button",
                  tabIndex: 0,
                  className: "x78zum5 x6s0dn4 xl56j7k x1ypdohk x14ug900",
                  onClick: y,
                  onKeyDown: function (t) {
                    (t.key === "Enter" || t.key === " ") &&
                      (t.preventDefault(), y());
                  },
                  "aria-label": s._(/*BTDS*/ "Close"),
                  children: h.jsx(r("WDSIconIcClose.react"), {}),
                }),
              }),
            h.jsxs(r("WAWebDrawerBody.react"), {
              children: [
                h.jsx(r("WAWebDrawerSection.react"), {
                  theme: "refresh-new",
                  xstyle: S.drawerBackground,
                  children: h.jsx(R, {
                    chat: i,
                    connectedCount: P,
                    isCallLink: (a == null ? void 0 : a.isCallLink) === !0,
                    isLinkedGroupCall: l,
                    participantsWithoutSelf: E,
                  }),
                }),
                h.jsx("div", { className: "xso031l x1q0q8m5 x120ee7l" }),
                a != null &&
                  a.isCallLink &&
                  h.jsxs(h.Fragment, {
                    children: [
                      h.jsx(r("WAWebVoipCallLinkSharePanel.react"), {
                        call: a,
                        surface: "sidebar",
                      }),
                      h.jsx("div", { className: "xso031l x1q0q8m5 x120ee7l" }),
                    ],
                  }),
                H &&
                  h.jsx("div", {
                    role: "button",
                    tabIndex: 0,
                    className: "x1ypdohk x1p57kb1 xvpt6g3 xdx6fka xvtqlqk",
                    onClick: V,
                    onKeyDown: function (t) {
                      (t.key === "Enter" || t.key === " ") &&
                        (t.preventDefault(), V());
                    },
                    children: h.jsxs(o("WAWebFlex.react").FlexRow, {
                      align: "center",
                      columnGap: 12,
                      children: [
                        h.jsx(o("WAWebFlex.react").FlexItem, {
                          xstyle: S.addPeopleIcon,
                          children: h.jsx(r("WDSIconIcPersonAdd.react"), {}),
                        }),
                        h.jsx(r("WDSText.react"), {
                          type: "Body1",
                          colorName: "contentDefault",
                          children: s._(/*BTDS*/ "Add people"),
                        }),
                      ],
                    }),
                  }),
                H &&
                  h.jsx("div", {
                    className: "xso031l x1q0q8m5 x120ee7l xlese2p xviac27",
                  }),
                U &&
                  h.jsxs(o("WAWebFlex.react").FlexColumn, {
                    xstyle: S.waitingRoomSection,
                    children: [
                      N.length > 0 &&
                        h.jsxs(h.Fragment, {
                          children: [
                            h.jsxs(o("WAWebFlex.react").FlexRow, {
                              align: "center",
                              xstyle: S.waitingRoomSectionHeader,
                              children: [
                                h.jsx(r("WDSText.react"), {
                                  type: "Body2Emphasized",
                                  colorName: "contentDeemphasized",
                                  children: s._(/*BTDS*/ "Requested to join"),
                                }),
                                N.length >= 2 &&
                                  h.jsx(r("WDSButton.react"), {
                                    variant: "borderless",
                                    type: "default",
                                    size: "small",
                                    label: s._(/*BTDS*/ "Approve all"),
                                    onPress: B,
                                  }),
                              ],
                            }),
                            N.map(function (e) {
                              var t = o(
                                  "WAWebContactCollection",
                                ).ContactCollection.get(e.toString()),
                                n =
                                  t != null
                                    ? o(
                                        "WAWebFrontendContactGetters",
                                      ).getDisplayName(t)
                                    : e.toString();
                              return h.jsxs(
                                o("WAWebFlex.react").FlexRow,
                                {
                                  align: "center",
                                  alignSelf: "stretch",
                                  columnGap: 16,
                                  xstyle: S.waitingRoomRow,
                                  children: [
                                    h.jsxs(o("WAWebFlex.react").FlexRow, {
                                      align: "center",
                                      columnGap: 16,
                                      grow: 1,
                                      xstyle: S.waitingRoomRowTextContainer,
                                      children: [
                                        t != null &&
                                          h.jsx(o("WAWebFlex.react").FlexItem, {
                                            xstyle: S.waitingRoomProfilePic,
                                            children: h.jsx(
                                              r("WAWebContactImage.react"),
                                              {
                                                contact: t,
                                                size: 36,
                                                loadPicture: !0,
                                              },
                                            ),
                                          }),
                                        h.jsx(o("WAWebFlex.react").FlexItem, {
                                          xstyle: S.waitingRoomRowTextContainer,
                                          children: h.jsx(r("WDSText.react"), {
                                            type: "Body1",
                                            colorName: "contentDefault",
                                            maxLines: 1,
                                            children: n,
                                          }),
                                        }),
                                      ],
                                    }),
                                    h.jsxs(o("WAWebFlex.react").FlexRow, {
                                      align: "center",
                                      xstyle: S.waitingRoomRowActions,
                                      children: [
                                        h.jsx(r("WDSButton.react"), {
                                          variant: "filled",
                                          type: "media",
                                          size: "small",
                                          Icon: r("WDSIconIcClose.react"),
                                          "aria-label": s._(/*BTDS*/ "Deny"),
                                          onPress: function () {
                                            return F(e);
                                          },
                                        }),
                                        h.jsx(r("WDSButton.react"), {
                                          variant: "tonal",
                                          type: "default",
                                          size: "small",
                                          Icon: r("WDSIconIcCheck.react"),
                                          "aria-label": s._(/*BTDS*/ "Approve"),
                                          onPress: function () {
                                            return A(e);
                                          },
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                e.toString(),
                              );
                            }),
                            h.jsx("div", {
                              className:
                                "xso031l x1q0q8m5 x120ee7l xlese2p xviac27",
                            }),
                          ],
                        }),
                      h.jsxs(o("WAWebFlex.react").FlexRow, {
                        align: "center",
                        xstyle: S.waitingRoomToggleRow,
                        children: [
                          h.jsx(r("WDSText.react"), {
                            type: "Body2Emphasized",
                            colorName: "contentDefault",
                            children: s._(/*BTDS*/ "Require approval to join"),
                          }),
                          h.jsx(o("WAWebFlex.react").FlexItem, {
                            shrink: 0,
                            children: h.jsx(r("WDSButton.react"), {
                              variant: M ? "tonal" : "borderless",
                              type: "default",
                              size: "small",
                              label: M
                                ? s._(/*BTDS*/ "Turn off")
                                : s._(/*BTDS*/ "Turn on"),
                              onPress: q,
                            }),
                          }),
                        ],
                      }),
                      h.jsx("div", {
                        className: "xso031l x1q0q8m5 x120ee7l xlese2p xviac27",
                      }),
                    ],
                  }),
                h.jsx(r("WAWebVoipUiParticipantPanel.react"), {
                  arePeersActive: !0,
                  onRingParticipant: v,
                  participantStates: L,
                  participantsWithoutSelf: $,
                  showActionButton: !0,
                  surface: "drawer",
                }),
              ],
            }),
          ],
        }),
      });
    }
    ((L.displayName = L.name + " [from " + i.id + "]"), (l.default = L));
  },
  226,
);
