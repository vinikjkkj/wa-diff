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
      var t = o("react-compiler-runtime").c(20),
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
      t[7] !== n
        ? ((k = m.jsx(y, { call: n })), (t[7] = n), (t[8] = k))
        : (k = t[8]);
      var I;
      t[9] !== u || t[10] !== p || t[11] !== C
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
          (t[9] = u),
          (t[10] = p),
          (t[11] = C),
          (t[12] = I))
        : (I = t[12]);
      var T;
      t[13] !== E || t[14] !== k || t[15] !== I
        ? ((T = m.jsxs(o("WAWebFlex.react").FlexColumn, {
            rowGap: 8,
            align: "stretch",
            justify: "all",
            xstyle: g.container,
            children: [E, k, I],
          })),
          (t[13] = E),
          (t[14] = k),
          (t[15] = I),
          (t[16] = T))
        : (T = t[16]);
      var D;
      return (
        t[17] !== l || t[18] !== T
          ? ((D = m.jsx(o("WAWebModal.react").Modal, {
              type: o("WAWebModal.react").ModalTheme.Box,
              onOverlayClick: l,
              children: T,
            })),
            (t[17] = l),
            (t[18] = T),
            (t[19] = D))
          : (D = t[19]),
        D
      );
    }
    function y(t) {
      var a = t.call,
        i = r("useWAWebEventTargetValue")(
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
        l =
          (a == null ? void 0 : a.callLinkCreatorJid) != null &&
          o("WAWebUserPrefsMeUser").isMeAccount(a.callLinkCreatorJid),
        d = _(function (t) {
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
        p = _(function (e) {
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
        y = f(!1),
        C = y[0],
        b = y[1],
        v = _(function () {
          b(!0);
        }, []),
        S = _(
          function () {
            (b(!1), h());
          },
          [h],
        ),
        R = _(function () {
          b(!1);
        }, []);
      return (a == null ? void 0 : a.isCallLink) !== !0 || !l
        ? null
        : m.jsxs(m.Fragment, {
            children: [
              i.length > 0 &&
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
                        i.length >= 2 &&
                          m.jsx(r("WDSButton.react"), {
                            variant: "borderless",
                            type: "default",
                            size: "small",
                            label: s._(/*BTDS*/ "Approve all"),
                            onPress: v,
                          }),
                      ],
                    }),
                    i.map(function (e) {
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
                                    return p(e);
                                  },
                                }),
                                m.jsx(r("WDSButton.react"), {
                                  variant: "tonal",
                                  type: "default",
                                  size: "small",
                                  Icon: r("WDSIconIcCheck.react"),
                                  "aria-label": s._(/*BTDS*/ "Approve"),
                                  onPress: function () {
                                    return d(e);
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
              C &&
                m.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                  onOK: S,
                  onCancel: R,
                  children: m.jsx(r("WDSText.react"), {
                    colorName: "contentDefault",
                    type: "Body2",
                    children: s._(
                      /*BTDS*/ "Anyone waiting to join will be admitted to the call.",
                    ),
                  }),
                }),
            ],
          });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
