__d(
  "WAWebVoipParticipantsModal.react",
  [
    "fbt",
    "WALogger",
    "WAWebConfirmPopup.react",
    "WAWebContactCollection",
    "WAWebContactImage.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebModal.react",
    "WAWebUserPrefsMeUser",
    "WAWebVoipEventConstants",
    "WAWebVoipStackInterface",
    "WAWebVoipUiParticipantPanel.react",
    "WDSButton.react",
    "WDSIconIcCheck.react",
    "WDSIconIcClose.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebListener",
    "useWAWebVoipModalManager",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useCallback,
      f = p.useState,
      g = {
        container: {
          height: "x1egiwwb",
          width: "xvue9z",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        header: {
          paddingTop: "x1p57kb1",
          paddingBottom: "x1nbhmlj",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        panelContainer: {
          flexGrow: "x1iyjqo2",
          minHeight: "x2lwn1j",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
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
      };
    function h(e) {
      var t = o("react-compiler-runtime").c(21),
        n = e.call,
        a = e.initialParticipantStates,
        i = e.initialParticipantsWithoutSelf,
        l = e.onClose,
        u = e.onRingParticipant,
        c = e.participantDataEmitter,
        d = f(a),
        p = d[0],
        _ = d[1],
        h = f(i),
        C = h[0],
        b = h[1],
        v;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = function (t) {
            (_(t.participantStates), b(t.participantsWithoutSelf));
          }),
          (t[0] = v))
        : (v = t[0]),
        o("useWAWebListener").useListener(c, "update", v));
      var S;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = s._(/*BTDS*/ "Close")), (t[1] = S))
        : (S = t[1]);
      var R;
      t[2] !== l
        ? ((R = m.jsx(r("WDSButton.react"), {
            testid: void 0,
            variant: "borderless",
            type: "default",
            size: "small",
            Icon: r("WDSIconIcClose.react"),
            onPress: l,
            "aria-label": S,
          })),
          (t[2] = l),
          (t[3] = R))
        : (R = t[3]);
      var L;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = m.jsx(o("WAWebFlex.react").FlexRow, {
            grow: 1,
            children: m.jsx(r("WDSText.react"), {
              type: "Headline2",
              colorName: "contentDefault",
              children: s._(/*BTDS*/ "Participants"),
            }),
          })),
          (t[4] = L))
        : (L = t[4]);
      var E;
      t[5] !== R
        ? ((E = m.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "all",
            xstyle: g.header,
            columnGap: 16,
            children: [R, L],
          })),
          (t[5] = R),
          (t[6] = E))
        : (E = t[6]);
      var k;
      t[7] !== n || t[8] !== l
        ? ((k = m.jsx(y, { call: n, onClose: l })),
          (t[7] = n),
          (t[8] = l),
          (t[9] = k))
        : (k = t[9]);
      var I;
      t[10] !== u || t[11] !== p || t[12] !== C
        ? ((I = m.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: g.panelContainer,
            children: m.jsx(r("WAWebVoipUiParticipantPanel.react"), {
              arePeersActive: !0,
              onRingParticipant: u,
              participantStates: p,
              participantsWithoutSelf: C,
              showActionButton: !0,
              showConnectedIndicator: !1,
              transparentBackground: !0,
            }),
          })),
          (t[10] = u),
          (t[11] = p),
          (t[12] = C),
          (t[13] = I))
        : (I = t[13]);
      var T;
      t[14] !== E || t[15] !== k || t[16] !== I
        ? ((T = m.jsxs(o("WAWebFlex.react").FlexColumn, {
            rowGap: 8,
            align: "stretch",
            justify: "all",
            xstyle: g.container,
            children: [E, k, I],
          })),
          (t[14] = E),
          (t[15] = k),
          (t[16] = I),
          (t[17] = T))
        : (T = t[17]);
      var D;
      return (
        t[18] !== l || t[19] !== T
          ? ((D = m.jsx(o("WAWebModal.react").Modal, {
              type: o("WAWebModal.react").ModalTheme.Box,
              onOverlayClick: l,
              children: T,
            })),
            (t[18] = l),
            (t[19] = T),
            (t[20] = D))
          : (D = t[20]),
        D
      );
    }
    function y(t) {
      var a = t.call,
        i = t.onClose,
        l = r("useWAWebEventTargetValue")(
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
        d =
          (a == null ? void 0 : a.callLinkCreatorJid) != null &&
          o("WAWebUserPrefsMeUser").isMeAccount(a.callLinkCreatorJid),
        p = _(function (t) {
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              var n = yield o(
                "WAWebVoipStackInterface",
              ).getVoipStackInterface();
              n != null &&
                n.type === "web" &&
                (yield n.waitingRoomAdmit(t.toString({ legacy: !0 })));
            } catch (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: waitingRoomAdmit failed: ",
                      "",
                    ])),
                  t,
                )
                .sendLogs("waiting-room-admit-error");
            }
          })();
        }, []),
        f = _(function (e) {
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              var t = yield o(
                "WAWebVoipStackInterface",
              ).getVoipStackInterface();
              t != null &&
                t.type === "web" &&
                (yield t.waitingRoomDeny(e.toString({ legacy: !0 })));
            } catch (e) {
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: waitingRoomDeny failed: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("waiting-room-deny-error");
            }
          })();
        }, []),
        h = _(function () {
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              var e = yield o(
                "WAWebVoipStackInterface",
              ).getVoipStackInterface();
              e != null && e.type === "web" && (yield e.waitingRoomAdmitAll());
            } catch (e) {
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: waitingRoomAdmitAll failed: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("waiting-room-admit-all-error");
            }
          })();
        }, []),
        y = r("useWAWebVoipModalManager")(),
        C = y.closeModal,
        b = y.openModal,
        v = _(
          function () {
            b(
              m.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                onOK: function () {
                  (C(), h());
                },
                onCancel: function () {
                  (C(), i == null || i());
                },
                onOverlayClick: function () {
                  (C(), i == null || i());
                },
                children: m.jsx(r("WDSText.react"), {
                  colorName: "contentDefault",
                  type: "Body2",
                  children: s._(
                    /*BTDS*/ "Anyone waiting to join will be admitted to the call.",
                  ),
                }),
              }),
            );
          },
          [C, h, i, b],
        );
      return (a == null ? void 0 : a.isCallLink) !== !0 || !d
        ? null
        : m.jsx(m.Fragment, {
            children:
              l.length > 0 &&
              m.jsxs(m.Fragment, {
                children: [
                  m.jsxs(o("WAWebFlex.react").FlexRow, {
                    align: "center",
                    xstyle: g.waitingRoomSectionHeader,
                    children: [
                      m.jsx(r("WDSText.react"), {
                        type: "Body2Emphasized",
                        colorName: "contentDeemphasized",
                        children: s._(/*BTDS*/ "Requested to join"),
                      }),
                      l.length >= 2 &&
                        m.jsx(r("WDSButton.react"), {
                          variant: "borderless",
                          type: "default",
                          size: "small",
                          label: s._(/*BTDS*/ "Approve all"),
                          onPress: v,
                        }),
                    ],
                  }),
                  l.map(function (e) {
                    var t = o("WAWebContactCollection").ContactCollection.get(
                        e.toString(),
                      ),
                      n =
                        t != null
                          ? o("WAWebFrontendContactGetters").getDisplayName(t)
                          : e.toString();
                    return m.jsxs(
                      o("WAWebFlex.react").FlexRow,
                      {
                        align: "center",
                        alignSelf: "stretch",
                        columnGap: 16,
                        xstyle: g.waitingRoomRow,
                        children: [
                          m.jsxs(o("WAWebFlex.react").FlexRow, {
                            align: "center",
                            columnGap: 16,
                            grow: 1,
                            xstyle: g.waitingRoomRowTextContainer,
                            children: [
                              t != null &&
                                m.jsx(o("WAWebFlex.react").FlexItem, {
                                  xstyle: g.waitingRoomProfilePic,
                                  children: m.jsx(
                                    r("WAWebContactImage.react"),
                                    { contact: t, size: 36, loadPicture: !0 },
                                  ),
                                }),
                              m.jsx(o("WAWebFlex.react").FlexItem, {
                                xstyle: g.waitingRoomRowTextContainer,
                                children: m.jsx(r("WDSText.react"), {
                                  type: "Body1",
                                  colorName: "contentDefault",
                                  maxLines: 1,
                                  children: n,
                                }),
                              }),
                            ],
                          }),
                          m.jsxs(o("WAWebFlex.react").FlexRow, {
                            align: "center",
                            xstyle: g.waitingRoomRowActions,
                            children: [
                              m.jsx(r("WDSButton.react"), {
                                variant: "filled",
                                type: "media",
                                size: "small",
                                Icon: r("WDSIconIcClose.react"),
                                "aria-label": s._(/*BTDS*/ "Deny"),
                                onPress: function () {
                                  return f(e);
                                },
                              }),
                              m.jsx(r("WDSButton.react"), {
                                variant: "tonal",
                                type: "default",
                                size: "small",
                                Icon: r("WDSIconIcCheck.react"),
                                "aria-label": s._(/*BTDS*/ "Approve"),
                                onPress: function () {
                                  return p(e);
                                },
                              }),
                            ],
                          }),
                        ],
                      },
                      e.toString(),
                    );
                  }),
                  m.jsx("div", {
                    className: "xso031l x1q0q8m5 x120ee7l xlese2p xviac27",
                  }),
                ],
              }),
          });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
