__d(
  "WAWebVoipUiParticipantPanel.react",
  [
    "fbt",
    "WAWebCallLogUtils",
    "WAWebContactCollection",
    "WAWebContactImage.react",
    "WAWebFlex.react",
    "WAWebName.react",
    "WAWebNoop",
    "WAWebVoipUiPopoutWindowContext",
    "WAWebVoipWaCallEnums",
    "WDSButton.react",
    "WDSIconIcMoreHoriz.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useContext,
      m = c.useMemo,
      p = 0.5,
      _ = "xxodl7o-B",
      f = {
        participantPanelContainer: {
          backgroundColor: "x1od0jb8",
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "xhl9efl",
          borderEndStartRadius: "xj65ea0",
          height: "x5yr21d",
          width: "xh8yej3",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        transparentBackground: { backgroundColor: "xjbqb8w", $$css: !0 },
        participantPanel: {
          height: "x5yr21d",
          width: "xh8yej3",
          overflowX: "x6ikm8r",
          overflowY: "x1odjw0f",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          paddingTop: "xexx8yu",
          boxSizing: "x9f619",
          $$css: !0,
        },
        participantPanelStatic: {
          width: "xh8yej3",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          paddingTop: "xexx8yu",
          boxSizing: "x9f619",
          $$css: !0,
        },
        participantPanelContainerStatic: {
          height: "xt7dq6l",
          overflowX: "x1plvlek",
          overflowY: "xryxfnj",
          $$css: !0,
        },
        sectionHeader: {
          paddingBottom: "x1nbhmlj",
          paddingTop: "x16ovd2e",
          paddingInlineStart: "x12w63v0",
          textAlign: "x1yc453h",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        participantRow: {
          justifyContent: "x1qughib",
          minWidth: "xeuugli",
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "x1nzty39",
          paddingLeft: null,
          paddingRight: null,
          flexShrink: "x2lah0s",
          minHeight: "x1wjjzik",
          $$css: !0,
        },
        participantTextContainer: { minWidth: "xeuugli", $$css: !0 },
        profilePicContainer: { flexShrink: "x2lah0s", $$css: !0 },
        disabled: { pointerEvents: "x47corl", $$css: !0 },
        dimmedAppearance: { opacity: "xbyyjgo", $$css: !0 },
        flashingIcon: {
          animationName: "x1g4v8gx",
          animationDuration: "xmg6eyc",
          animationIterationCount: "xa4qsjk",
          animationTimingFunction: "x4hg4is",
          pointerEvents: "x47corl",
          $$css: !0,
        },
        rightActions: {
          marginInlineStart: "xvc5jky",
          flexShrink: "x2lah0s",
          minWidth: "x46jg8d",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
      };
    function g(e) {
      var t = e.isConnected,
        n = t === void 0 ? !1 : t,
        a = e.isDisabled,
        i = e.isLoading,
        l = i === void 0 ? !1 : i,
        c = e.isRinging,
        m = e.onRingParticipant,
        p = e.participantJid,
        _ = e.showActionButton,
        g = e.showConnectedIndicator,
        h = g === void 0 ? !0 : g,
        y = d(r("WAWebVoipUiPopoutWindowContext")),
        C = y.isContextInPopoutWindow,
        b = o("WAWebContactCollection").ContactCollection.get(p.toString());
      if (b == null) return null;
      var v = function () {
        m == null || m(p);
      };
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        alignSelf: "stretch",
        columnGap: 16,
        xstyle: f.participantRow,
        children: [
          u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            columnGap: 16,
            grow: 1,
            xstyle: [
              f.participantTextContainer,
              a && f.disabled,
              a && f.dimmedAppearance,
            ],
            children: [
              u.jsx(o("WAWebFlex.react").FlexItem, {
                xstyle: f.profilePicContainer,
                children: u.jsx(r("WAWebContactImage.react"), {
                  contact: b,
                  size: 36,
                  loadPicture: !0,
                }),
              }),
              u.jsx(o("WAWebFlex.react").FlexItem, {
                xstyle: f.participantTextContainer,
                children: u.jsx(r("WDSText.react"), {
                  type: "Body1",
                  colorName: "contentDefault",
                  maxLines: 1,
                  children: u.jsx(o("WAWebName.react").Name, { contact: b }),
                }),
              }),
            ],
          }),
          (n || (!l && _)) &&
            u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              columnGap: 8,
              xstyle: f.rightActions,
              children: [
                n &&
                  h &&
                  u.jsx("div", {
                    className:
                      "x1fsd2vl x170jfvy x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1qe8gl4 x2lah0s",
                  }),
                !l &&
                  _ &&
                  u.jsx(o("WAWebFlex.react").FlexItem, {
                    xstyle: c && f.flashingIcon,
                    children: c
                      ? u.jsx(r("WDSButton.react"), {
                          variant: "borderless",
                          type: "default",
                          size: "small",
                          Icon: r("WDSIconIcMoreHoriz.react"),
                          onPress: r("WAWebNoop"),
                        })
                      : u.jsx(r("WDSButton.react"), {
                          variant: "filled",
                          type: C ? "media" : "default",
                          size: "small",
                          label: s._(/*BTDS*/ "Ring"),
                          onPress: v,
                        }),
                  }),
              ],
            }),
        ],
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.arePeersActive,
        n = e.callState,
        a = e.onRingParticipant,
        i = e.participantStates,
        l = e.participantsWithoutSelf,
        c = e.showActionButton,
        d = c === void 0 ? !1 : c,
        p = e.showConnectedIndicator,
        _ = p === void 0 ? !0 : p,
        h = e.surface,
        y = h === void 0 ? "modal" : h,
        C = e.transparentBackground,
        b = C === void 0 ? !1 : C,
        v = m(
          function () {
            var e = new Set();
            for (var t of l) {
              var n = i.get(t.toString());
              n === o("WAWebVoipWaCallEnums").CallParticipantState.Connected &&
                e.add(t.toString());
            }
            var r = o("WAWebCallLogUtils").sortParticipantWidsByPriority(l, e),
              a = [],
              s = [],
              u = [];
            for (var c of r) {
              var d = i.get(c.toString()),
                m = d == null,
                p =
                  d ===
                    o("WAWebVoipWaCallEnums").CallParticipantState.Receipt ||
                  d === o("WAWebVoipWaCallEnums").CallParticipantState.Incoming,
                _ = { jid: c, isRinging: p, isLoading: m };
              (u.push(_),
                d === o("WAWebVoipWaCallEnums").CallParticipantState.Connected
                  ? a.push(_)
                  : s.push(_));
            }
            return {
              allParticipants: u,
              connectedParticipants: a,
              nonConnectedParticipants: s,
            };
          },
          [l, i],
        ),
        S = v.allParticipants,
        R = v.connectedParticipants,
        L = v.nonConnectedParticipants,
        E = y === "lobby",
        k = t && !E,
        I =
          E &&
          (n === o("WAWebVoipWaCallEnums").CallState.Rejoining ||
            n === o("WAWebVoipWaCallEnums").CallState.ReceivedCall),
        T = function () {
          return k
            ? u.jsxs(u.Fragment, {
                children: [
                  R.length > 0 &&
                    u.jsxs(u.Fragment, {
                      children: [
                        u.jsx(o("WAWebFlex.react").FlexItem, {
                          xstyle: f.sectionHeader,
                          children: u.jsx(r("WDSText.react"), {
                            type: "Body2Emphasized",
                            colorName: "contentDeemphasized",
                            children: s._(/*BTDS*/ "In this call"),
                          }),
                        }),
                        R.map(function (e) {
                          return u.jsx(
                            g,
                            {
                              isConnected: !0,
                              isDisabled: !1,
                              isLoading: e.isLoading,
                              isRinging: e.isRinging,
                              onRingParticipant: a,
                              participantJid: e.jid,
                              showActionButton: !1,
                              showConnectedIndicator: _,
                            },
                            e.jid.toString(),
                          );
                        }),
                      ],
                    }),
                  L.length > 0 &&
                    u.jsxs(u.Fragment, {
                      children: [
                        u.jsx(o("WAWebFlex.react").FlexItem, {
                          xstyle: f.sectionHeader,
                          children: u.jsx(r("WDSText.react"), {
                            type: "Body2Emphasized",
                            colorName: "contentDeemphasized",
                            children: s._(/*BTDS*/ "Invited"),
                          }),
                        }),
                        L.map(function (e) {
                          return u.jsx(
                            g,
                            {
                              isDisabled: !0,
                              isLoading: e.isLoading,
                              isRinging: e.isRinging,
                              onRingParticipant: a,
                              participantJid: e.jid,
                              showActionButton: d,
                            },
                            e.jid.toString(),
                          );
                        }),
                      ],
                    }),
                ],
              })
            : I
              ? R.map(function (e) {
                  return u.jsx(
                    g,
                    {
                      isConnected: !0,
                      isDisabled: !1,
                      isLoading: e.isLoading,
                      isRinging: e.isRinging,
                      onRingParticipant: a,
                      participantJid: e.jid,
                      showActionButton: d,
                    },
                    e.jid.toString(),
                  );
                })
              : S.map(function (e) {
                  var t =
                    i.get(e.jid.toString()) ===
                    o("WAWebVoipWaCallEnums").CallParticipantState.Connected;
                  return u.jsx(
                    g,
                    {
                      isConnected: t,
                      isDisabled: !t,
                      isLoading: e.isLoading,
                      isRinging: e.isRinging,
                      onRingParticipant: a,
                      participantJid: e.jid,
                      showActionButton: d,
                    },
                    e.jid.toString(),
                  );
                });
        };
      return u.jsx(o("WAWebFlex.react").FlexItem, {
        xstyle: [
          f.participantPanelContainer,
          b && f.transparentBackground,
          y === "drawer" && f.participantPanelContainerStatic,
        ],
        children: u.jsx(o("WAWebFlex.react").FlexColumn, {
          xstyle:
            y === "drawer" ? f.participantPanelStatic : f.participantPanel,
          children: T(),
        }),
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
