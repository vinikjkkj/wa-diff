__d(
  "WAWebVoipCallLinkPreview.react",
  [
    "fbt",
    "WALogger",
    "WAWebCallCollection",
    "WAWebCallParticipantInfo.react",
    "WAWebContactCollection",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebNoop",
    "WAWebUserPrefsMeUser",
    "WAWebVoipCallControls.react",
    "WAWebVoipEventConstants",
    "WAWebVoipGroupCallAccentColors",
    "WAWebVoipLinkPreviewCallLink",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "WAWebVoipUiVideoCallSelfPreview.react",
    "WAWebVoipWaCallEnums",
    "WDSSpinner.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows",
    "react",
    "useWAWebEventTargetValue",
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
      g = f || (f = o("react")),
      h = f,
      y = h.useEffect,
      C = h.useMemo,
      b = h.useState,
      v = {
        lobbyOuterContainer: {
          position: "x1n2onr6",
          display: "x78zum5",
          height: "x5yr21d",
          width: "xh8yej3",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        lobbyInnerContainer: {
          position: "x10l6tqk",
          top: "x13vifvy",
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          width: "xh8yej3",
          height: "x5yr21d",
          display: "x78zum5",
          $$css: !0,
        },
        contentContainer: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          alignItems: "x6s0dn4",
          height: "x5yr21d",
          width: "xh8yej3",
          paddingTop: "x16ovd2e",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x4tra6z",
          paddingInlineEnd: "x1j8ymqv",
          boxSizing: "x9f619",
          rowGap: "x1b73lln",
          backgroundColor: "x1c7u0tx",
          $$css: !0,
        },
        participantInfoSection: {
          flexShrink: "x2lah0s",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          alignItems: "x6s0dn4",
          rowGap: "x1f0uite",
          columnGap: "xs2akgl",
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          marginTop: "x1380le5",
          marginInlineStart: "x150mmf0",
          marginInlineEnd: "xqf2s3x",
          marginLeft: null,
          marginRight: null,
          backgroundColor: "x16w0wmm",
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "xhl9efl",
          borderEndStartRadius: "xj65ea0",
          width: "x1unu1t6",
          boxSizing: "x9f619",
          $$css: !0,
        },
        selfPreviewContainer: {
          width: "xh8yej3",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          minHeight: "x1lpwdgh",
          maxHeight: "xuyqlj2",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          boxSizing: "x9f619",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        controlsContainer: {
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          flexShrink: "x2lah0s",
          marginTop: "xr1yuqi",
          width: "xh8yej3",
          boxSizing: "x9f619",
          $$css: !0,
        },
        callEndedContainer: {
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "xh8yej3",
          $$css: !0,
        },
        waitingRoomSpinner: { marginInlineEnd: "x7g7pl8", $$css: !0 },
      },
      S = {
        positiveButton: { labelKey: "join", shouldShow: !0 },
        negativeButton: {
          labelKey: "notNow",
          shouldShow: !0,
          styleType: "borderless",
        },
      },
      R = {
        positiveButton: { labelKey: "join", shouldShow: !1 },
        negativeButton: {
          labelKey: "end",
          shouldShow: !0,
          showLabel: !1,
          styleType: "filled",
        },
      },
      L = {
        positiveButton: { labelKey: "join", shouldShow: !1 },
        negativeButton: {
          labelKey: "cancel",
          shouldShow: !0,
          showLabel: !0,
          styleType: "media",
        },
      };
    function E(t) {
      var a = t.call,
        i = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        l = a.callLinkCreatorJid,
        f = a.isVideo,
        h = r("useWAWebEventTargetValue")(
          a,
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.CALL_LINK_STATE,
          ),
          function () {
            return a.callLinkState;
          },
        ),
        E =
          h === o("WAWebVoipWaCallEnums").CallLinkState.JoinSent ||
          h === o("WAWebVoipWaCallEnums").CallLinkState.JoinAcked,
        k = r("useWAWebEventTargetValue")(
          a,
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.IS_IN_WAITING_ROOM,
          ),
          function () {
            return a.isInWaitingRoom;
          },
        ),
        I = r("useWAWebEventTargetValue")(
          a,
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents
              .DISPLAY_WAITING_ROOM_DENIED,
          ),
          function () {
            return a.displayWaitingRoomDenied;
          },
        ),
        T = C(
          function () {
            if (l == null) return null;
            var e = o("WAWebContactCollection").ContactCollection.get(l);
            return e == null
              ? null
              : o("WAWebFrontendContactGetters").getDisplayName(e);
          },
          [l],
        ),
        D =
          T != null
            ? s._(/*BTDS*/ "{creator_name}'s link", [
                s._param("creator_name", T),
              ])
            : null,
        x = f ? s._(/*BTDS*/ "Video call") : s._(/*BTDS*/ "Voice call"),
        $ = s._(/*BTDS*/ "Connecting..."),
        P = g.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          justify: "center",
          children: [
            g.jsx(r("WDSSpinner.react"), {
              size: 16,
              xstyle: v.waitingRoomSpinner,
            }),
            g.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              children: s._(
                /*BTDS*/ "Waiting for approval to join from call creator",
              ),
            }),
          ],
        }),
        N;
      E && k ? (N = P) : E ? (N = $) : (N = x);
      var M;
      E && k ? (M = L) : E ? (M = R) : (M = S);
      var w = s._(/*BTDS*/ "Call ended"),
        A = o("WAWebVoipLinkPreviewCallLink").getLandingPageMutePrefs(),
        F = b(A.videoMuted),
        O = F[0],
        B = F[1],
        W = b(A.audioMuted),
        q = W[0],
        U = W[1],
        V = C(function () {
          return o(
            "WAWebVoipGroupCallAccentColors",
          ).getLandingPageAccentColor();
        }, []),
        H = b(!1),
        G = H[0],
        z = H[1],
        j = b(!1),
        K = j[0],
        Q = j[1];
      y(function () {
        var e;
        function t() {
          return r.apply(this, arguments);
        }
        function r() {
          return (
            (r = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                var e;
                if (
                  !((e = navigator.mediaDevices) != null && e.enumerateDevices)
                ) {
                  Q(!1);
                  return;
                }
                var t = yield navigator.mediaDevices.enumerateDevices(),
                  n = t.some(function (e) {
                    return e.kind === "videoinput";
                  });
                Q(n);
              } catch (e) {
                Q(!1);
              }
            })),
            r.apply(this, arguments)
          );
        }
        t();
        var o = function () {
          t();
        };
        return (
          (e = navigator.mediaDevices) == null ||
            e.addEventListener("devicechange", o),
          function () {
            var e;
            (e = navigator.mediaDevices) == null ||
              e.removeEventListener("devicechange", o);
          }
        );
      }, []);
      var X = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: CallLinkPreview: Leave button pressed",
                ])),
            ),
              z(!0));
            try {
              var t = r("nullthrows")(
                yield o("WAWebVoipStackInterface").getVoipStackInterface(),
              );
              if (t.type === "web") {
                var n,
                  a = r("WAWebCallCollection").activeCall,
                  i =
                    (n =
                      a == null || a.isInCallLinkPreview == null
                        ? void 0
                        : a.isInCallLinkPreview()) != null
                      ? n
                      : !1,
                  l = !i;
                yield t.endCall(
                  o("WAWebVoipSignalingEnums").EndCallReason.Self,
                  l,
                );
              } else
                throw r("err")(
                  "voip: CallLinkPreview: leave click: Unexpected voip stack type: " +
                    t.type,
                );
            } catch (e) {
              (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: CallLinkPreview: Leave failed: ",
                    "",
                  ])),
                String(e),
              ),
                z(!1));
            }
          });
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        Y = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: CallLinkPreview: Join button pressed",
                ])),
            );
            try {
              var e = r("nullthrows")(
                yield o("WAWebVoipStackInterface").getVoipStackInterface(),
              );
              if (e.type === "web")
                (o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: CallLinkPreview: Joining call link from preview state",
                    ])),
                ),
                  yield e.joinCallLink());
              else
                throw r("err")(
                  "voip: CallLinkPreview: Unexpected voip stack type: " +
                    e.type,
                );
            } catch (e) {
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: CallLinkPreview: Join failed: ",
                    "",
                  ])),
                String(e),
              );
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        J = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = !O;
            B(e);
            try {
              var t = r("nullthrows")(
                yield o("WAWebVoipStackInterface").getVoipStackInterface(),
              );
              t.type === "web" && (yield t.setCallVideoMute(e));
            } catch (e) {
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: CallLinkPreview: setCallVideoMute failed: ",
                    "",
                  ])),
                String(e),
              );
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        Z = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = !q;
            U(e);
            try {
              var t = r("nullthrows")(
                yield o("WAWebVoipStackInterface").getVoipStackInterface(),
              );
              t.type === "web" && (yield t.setCallMute(e));
            } catch (e) {
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: CallLinkPreview: setCallMute failed: ",
                    "",
                  ])),
                String(e),
              );
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
      return g.jsx(o("WAWebFlex.react").FlexItem, {
        xstyle: v.lobbyOuterContainer,
        children: g.jsx(o("WAWebFlex.react").FlexItem, {
          xstyle: v.lobbyInnerContainer,
          children: g.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: v.contentContainer,
            children:
              G || I
                ? g.jsx(o("WAWebFlex.react").FlexItem, {
                    grow: 1,
                    xstyle: v.callEndedContainer,
                    children: g.jsx(r("WDSText.react"), {
                      type: "Body1",
                      colorName: "contentDefault",
                      selectable: !1,
                      children: w,
                    }),
                  })
                : g.jsxs(g.Fragment, {
                    children: [
                      g.jsx(o("WAWebFlex.react").FlexRow, {
                        align: "center",
                        xstyle: v.participantInfoSection,
                        children: g.jsx(r("WAWebCallParticipantInfo.react"), {
                          compact: !0,
                          userId: l != null ? l : i,
                          nameOverride: D,
                          callStateText: N,
                          textAlign: "start",
                        }),
                      }),
                      f &&
                        g.jsx(o("WAWebFlex.react").FlexItem, {
                          xstyle: v.selfPreviewContainer,
                          align: "stretch",
                          children: g.jsx(
                            o("WAWebVoipUiVideoCallSelfPreview.react")
                              .WAWebVoipUiVideoCallSelfPreviewFullWidth,
                            {
                              accentColor: V,
                              isSelfScreenSharing: !1,
                              isVideoMuted: O,
                              nameOverride: s._(/*BTDS*/ "You"),
                              preserveVideoAspectRatio: !0,
                              selfMicMuted: q,
                            },
                          ),
                        }),
                      g.jsx(o("WAWebFlex.react").FlexRow, {
                        xstyle: v.controlsContainer,
                        children: g.jsx(r("WAWebVoipCallControls.react"), {
                          buttonCustomizations: M,
                          chat: null,
                          hasCameraAvailable: K,
                          isAnyPeerScreenSharing: !1,
                          isCallActive: !1,
                          isCallRinging: !0,
                          isMuted: q,
                          isSelfScreenSharing: !1,
                          isVideoCall: f,
                          isVideoMuted: O || !K,
                          onAccept: function () {
                            Y();
                          },
                          onEnd: function () {
                            X();
                          },
                          onMuteToggle: Z,
                          onReject: function () {
                            X();
                          },
                          onSendMessage: r("WAWebNoop"),
                          onVideoMuteToggle: J,
                          showSendMessage: !1,
                        }),
                      }),
                    ],
                  }),
          }),
        }),
      });
    }
    ((E.displayName = E.name + " [from " + i.id + "]"), (l.default = E));
  },
  226,
);
