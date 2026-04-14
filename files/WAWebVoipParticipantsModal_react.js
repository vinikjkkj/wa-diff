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
      var t = e.call,
        n = e.initialParticipantStates,
        a = e.initialParticipantsWithoutSelf,
        i = e.onClose,
        l = e.onRingParticipant,
        u = e.participantDataEmitter,
        c = f(n),
        d = c[0],
        p = c[1],
        _ = f(a),
        h = _[0],
        C = _[1];
      return (
        o("useWAWebListener").useListener(u, "update", function (e) {
          (p(e.participantStates), C(e.participantsWithoutSelf));
        }),
        m.jsx(o("WAWebModal.react").Modal, {
          type: o("WAWebModal.react").ModalTheme.Box,
          onOverlayClick: i,
          children: m.jsxs(o("WAWebFlex.react").FlexColumn, {
            rowGap: 8,
            align: "stretch",
            justify: "all",
            xstyle: g.container,
            children: [
              m.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                justify: "all",
                xstyle: g.header,
                columnGap: 16,
                children: [
                  m.jsx(r("WDSButton.react"), {
                    testid: void 0,
                    variant: "borderless",
                    type: "default",
                    size: "small",
                    Icon: r("WDSIconIcClose.react"),
                    onPress: i,
                    "aria-label": s._(/*BTDS*/ "Close"),
                  }),
                  m.jsx(o("WAWebFlex.react").FlexRow, {
                    grow: 1,
                    children: m.jsx(r("WDSText.react"), {
                      type: "Headline2",
                      colorName: "contentDefault",
                      children: s._(/*BTDS*/ "Participants"),
                    }),
                  }),
                ],
              }),
              m.jsx(y, { call: t }),
              m.jsx(o("WAWebFlex.react").FlexColumn, {
                xstyle: g.panelContainer,
                children: m.jsx(r("WAWebVoipUiParticipantPanel.react"), {
                  arePeersActive: !0,
                  onRingParticipant: l,
                  participantStates: d,
                  participantsWithoutSelf: h,
                  showActionButton: !0,
                  showConnectedIndicator: !1,
                  transparentBackground: !0,
                }),
              }),
            ],
          }),
        })
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
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
