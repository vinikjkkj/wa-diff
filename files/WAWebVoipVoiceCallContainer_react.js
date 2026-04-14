__d(
  "WAWebVoipVoiceCallContainer.react",
  [
    "fbt",
    "WALogger",
    "WAWebABProps",
    "WAWebCallCollection",
    "WAWebCallLogUtils",
    "WAWebCallParticipantInfo.react",
    "WAWebCallTimer.react",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebName.react",
    "WAWebOutgoingGroupCallParticipantInfo.react",
    "WAWebOutgoingGroupCallUtils",
    "WAWebVoipDocPipSelfPreviewNotice.react",
    "WAWebVoipEncryptionButton.react",
    "WAWebVoipEventConstants",
    "WAWebVoipLobbyUtils",
    "WAWebVoipMicOffIndicator.react",
    "WAWebVoipReactionDisplay.react",
    "WAWebVoipStackInterface",
    "WAWebVoipUiPopoutWindowContext",
    "WAWebVoipUiVideoCallSelfPreview.react",
    "WAWebVoipWaCallEnums",
    "WDSColorStyles.stylex",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebCameraPrewarm",
    "useWAWebEventTargetValue",
    "useWAWebVoipPermissionStatus",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useContext,
      p = d.useEffect,
      _ = d.useMemo,
      f = d.useRef,
      g = {
        voiceCallContainer: {
          marginBottom: "xat24cr",
          marginInlineEnd: "xqf2s3x",
          marginInlineStart: "x150mmf0",
          marginTop: "x1380le5",
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          position: "x1n2onr6",
          $$css: !0,
        },
        voiceCallContainerWrapper: { position: "x1n2onr6", $$css: !0 },
        fullWidth: { width: "xh8yej3", $$css: !0 },
        surfaceElevated: {
          marginTop: "x1380le5",
          marginInlineStart: "x150mmf0",
          marginInlineEnd: "xqf2s3x",
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          $$css: !0,
        },
        incomingVideoCallContainer: {
          width: "xh8yej3",
          height: "x5yr21d",
          position: "x1n2onr6",
          paddingBottom: "x12xbjc7",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          minHeight: "x2lwn1j",
          $$css: !0,
        },
        participantInfoContainer: {
          position: "x1n2onr6",
          width: "xh8yej3",
          rowGap: "x1f0uite",
          columnGap: "xs2akgl",
          $$css: !0,
        },
        incomingCallPreviewContainer: {
          width: "xh8yej3",
          height: "x5yr21d",
          zIndex: "x1n327nk",
          paddingTop: "x14h6c1r",
          $$css: !0,
        },
        inlineTimer: { display: "xt0psk2", $$css: !0 },
      };
    function h(t) {
      var a = t.callLogMsg,
        i = t.callState,
        l = t.hasCameraAvailable,
        u = l === void 0 ? !0 : l,
        d = t.isCallActive,
        h = t.isCallOutgoing,
        y = t.isCompactLayout,
        C = t.isSelfScreenSharing,
        b = t.isTabVisible,
        v = t.isVideoCall,
        S = t.isVideoMuted,
        R = t.peerMicMuted,
        L = t.peerReaction,
        E = t.selfMicMuted,
        k = m(r("WAWebVoipUiPopoutWindowContext")),
        I = f(null),
        T = r("useWAWebVoipPermissionStatus")(v, S),
        D = T.cameraPermission,
        x = T.isLoading,
        $ =
          i === o("WAWebVoipWaCallEnums").CallState.ReceivedCall ||
          i === o("WAWebVoipWaCallEnums").CallState.ReceivedCallWithoutOffer,
        P = D === "denied",
        N = v && $ && P && !x,
        M = v && $ && !u,
        w = f(D);
      p(
        function () {
          if (!x) {
            var t = w.current;
            ((w.current = D),
              t === "denied" &&
                D === "granted" &&
                $ &&
                v &&
                (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[VoiceCallContainer] cam granted, unmuting video",
                    ])),
                ),
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  var e = yield o(
                    "WAWebVoipStackInterface",
                  ).getVoipStackInterface();
                  (e == null ? void 0 : e.type) === "web" &&
                    (yield e.setCallVideoMute(!1));
                })()));
          }
        },
        [D, $, x, v],
      );
      var A = y && !k.isContextInPopoutWindow && !v && d && R,
        F = A
          ? s._(/*BTDS*/ "Muted")
          : o("WAWebCallLogUtils").getCallStateText(i, a),
        O =
          o("WAWebABProps").getABPropConfigValue(
            "enable_web_voip_virtual_video_capture_driver",
          ) === !0,
        B = v && $ && b && (D === "granted" || O || N || M),
        W = v && $ && k.isContextInPopoutWindow && !B;
      r("useWAWebCameraPrewarm")(B);
      var q = _(
          function () {
            return o("WAWebFrontendMsgGetters").getChat(a);
          },
          [a],
        ),
        U = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents
              .GROUP_CALL_PARTICIPANT_STATES,
          ),
          function () {
            var e, t, n, o;
            return [
              (e =
                (t = r("WAWebCallCollection").activeCall) == null
                  ? void 0
                  : t.groupCallParticipantsConnected) != null
                ? e
                : [],
              (n =
                (o = r("WAWebCallCollection").activeCall) == null
                  ? void 0
                  : o.groupCallParticipants) != null
                ? n
                : [],
            ];
          },
        ),
        V = U[0],
        H = U[1],
        G = _(
          function () {
            var e,
              t,
              n,
              a =
                (e =
                  (t = r("WAWebCallCollection").activeCall) == null
                    ? void 0
                    : t.isGroup) != null
                  ? e
                  : !1;
            if (a && V.length === 2) {
              var i = o("WAWebVoipLobbyUtils").getParticipantsWithoutSelf(V);
              if (i.length === 1) return i[0];
            }
            return (n = q == null ? void 0 : q.id) != null ? n : void 0;
          },
          [V, q],
        ),
        z = _(
          function () {
            return o(
              "WAWebOutgoingGroupCallUtils",
            ).getOutgoingGroupCallNameOverride(h, H);
          },
          [h, H],
        ),
        j = _(
          function () {
            return o(
              "WAWebOutgoingGroupCallUtils",
            ).getOutgoingGroupCallParticipants(h, H);
          },
          [h, H],
        ),
        K = _(
          function () {
            var e,
              t,
              n =
                (e =
                  (t = r("WAWebCallCollection").activeCall) == null
                    ? void 0
                    : t.isGroup) != null
                  ? e
                  : !1;
            return !n || V.length !== 2 || !d
              ? null
              : R && y && !k.isContextInPopoutWindow
                ? s._(/*BTDS*/ "Muted")
                : c.jsxs("span", {
                    className: "x3nfvp2 x1q0g3np x1pha0wt xozqiw3",
                    children: [
                      c.jsx("span", {
                        className: "x2lah0s",
                        children: c.jsx(o("WAWebName.react").Name, { chat: q }),
                      }),
                      c.jsx("span", {
                        className: "x2lah0s xdwrcjd x2fvf9",
                        children: "\u2022",
                      }),
                      c.jsx(r("WAWebCallTimer.react"), {
                        callState: i,
                        xstyle: g.inlineTimer,
                      }),
                    ],
                  });
          },
          [d, y, q, i, V, R, k.isContextInPopoutWindow],
        ),
        Q = K != null ? K : F,
        X;
      return (
        B
          ? (X = c.jsxs(c.Fragment, {
              children: [
                c.jsx("div", {
                  className: "x10l6tqk xymx5cc xxrlk4x x1of6sz5",
                  children:
                    j != null && j.length > 1
                      ? c.jsx(
                          r("WAWebOutgoingGroupCallParticipantInfo.react"),
                          {
                            callStateText: F,
                            compact: !0,
                            imageSize: 48,
                            nameText: z,
                            participantWids: j,
                          },
                        )
                      : c.jsx(r("WAWebCallParticipantInfo.react"), {
                          userId: G,
                          imageSize: "small",
                          textAlign: "start",
                          callStateText: F,
                          compact: !0,
                          nameOverride: z,
                        }),
                }),
                c.jsx(o("WAWebFlex.react").FlexColumn, {
                  align: "center",
                  justify: "center",
                  xstyle: g.incomingCallPreviewContainer,
                  children: c.jsx(
                    o("WAWebVoipUiVideoCallSelfPreview.react")
                      .WAWebVoipUiVideoCallSelfPreviewFullWidth,
                    {
                      cameraDenied: N,
                      isIncoming: $,
                      isSelfScreenSharing: C,
                      isVideoMuted: S,
                      noCameraDevice: M,
                      selfMicMuted: E,
                    },
                  ),
                }),
              ],
            }))
          : W
            ? (X = c.jsxs(c.Fragment, {
                children: [
                  c.jsx("div", {
                    className: "x10l6tqk xymx5cc xxrlk4x x1of6sz5",
                    children:
                      j != null && j.length > 1
                        ? c.jsx(
                            r("WAWebOutgoingGroupCallParticipantInfo.react"),
                            {
                              callStateText: F,
                              compact: !0,
                              imageSize: 48,
                              nameText: z,
                              participantWids: j,
                            },
                          )
                        : c.jsx(r("WAWebCallParticipantInfo.react"), {
                            userId: G,
                            imageSize: "small",
                            textAlign: "start",
                            callStateText: F,
                            compact: !0,
                            nameOverride: z,
                          }),
                  }),
                  c.jsx(o("WAWebFlex.react").FlexColumn, {
                    align: "center",
                    justify: "center",
                    xstyle: g.incomingCallPreviewContainer,
                    children: c.jsx(
                      o("WAWebVoipDocPipSelfPreviewNotice.react")
                        .WAWebVoipDocPipSelfPreviewNotice,
                      {},
                    ),
                  }),
                ],
              }))
            : (X = c.jsx(o("WAWebFlex.react").FlexColumn, {
                align: "center",
                justify: "center",
                xstyle: g.participantInfoContainer,
                children:
                  j != null && j.length > 1
                    ? c.jsx(r("WAWebOutgoingGroupCallParticipantInfo.react"), {
                        callStateText: Q,
                        compact: y,
                        imageSize: y ? 48 : "auto",
                        nameText: z,
                        participantWids: j,
                      })
                    : c.jsx(r("WAWebCallParticipantInfo.react"), {
                        userId: G,
                        compact: y,
                        imageSize: y ? "small" : "auto",
                        callStateText: Q,
                        xstyle: g.fullWidth,
                        showAudioWaveform: d && !v && !R,
                        audioLevelType: "peer",
                        waveformBarCount: k.isContextInPopoutWindow ? 7 : 5,
                        nameOverride: z,
                      }),
              })),
        c.jsxs(o("WAWebFlex.react").FlexRow, {
          ref: I,
          alignSelf: "stretch",
          grow: 1,
          shrink: 1,
          basis: 0,
          xstyle: g.voiceCallContainerWrapper,
          children: [
            c.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              alignSelf: "stretch",
              grow: 1,
              shrink: 1,
              basis: 0,
              xstyle: [
                B || W ? g.incomingVideoCallContainer : g.voiceCallContainer,
                !B && !W && g.surfaceElevated,
                d &&
                  o("WDSColorStyles.stylex").WDSBackgroundColorStyles
                    .surfaceElevatedEmphasized,
                h &&
                  o("WDSColorStyles.stylex").WDSBackgroundColorStyles
                    .surfaceElevatedDefault,
              ],
              testid: void 0,
              children: [
                X,
                d &&
                  R &&
                  !A &&
                  c.jsx(r("WAWebVoipMicOffIndicator.react"), {
                    size: "medium",
                  }),
                c.jsx(r("WAWebVoipReactionDisplay.react"), { reaction: L }),
              ],
            }),
            !$ && !h && c.jsx(r("WAWebVoipEncryptionButton.react"), {}),
          ],
        })
      );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
