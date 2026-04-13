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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(86),
        a = t.callLogMsg,
        i = t.callState,
        l = t.hasCameraAvailable,
        u = t.isCallActive,
        d = t.isCallOutgoing,
        _ = t.isCompactLayout,
        h = t.isSelfScreenSharing,
        b = t.isTabVisible,
        v = t.isVideoCall,
        S = t.isVideoMuted,
        R = t.peerMicMuted,
        L = t.peerReaction,
        E = t.selfMicMuted,
        k = l === void 0 ? !0 : l,
        I = m(r("WAWebVoipUiPopoutWindowContext")),
        T = f(null),
        D = r("useWAWebVoipPermissionStatus")(v, S),
        x = D.cameraPermission,
        $ = D.isLoading,
        P =
          i === o("WAWebVoipWaCallEnums").CallState.ReceivedCall ||
          i === o("WAWebVoipWaCallEnums").CallState.ReceivedCallWithoutOffer,
        N = x === "denied",
        M = v && P && N && !$,
        w = v && P && !k,
        A = f(x),
        F,
        O;
      (n[0] !== x || n[1] !== P || n[2] !== $ || n[3] !== v
        ? ((F = function () {
            if (!$) {
              var t = A.current;
              ((A.current = x),
                t === "denied" &&
                  x === "granted" &&
                  P &&
                  v &&
                  (o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[VoiceCallContainer] cam granted, unmuting video",
                      ])),
                  ),
                  C()));
            }
          }),
          (O = [x, P, $, v]),
          (n[0] = x),
          (n[1] = P),
          (n[2] = $),
          (n[3] = v),
          (n[4] = F),
          (n[5] = O))
        : ((F = n[4]), (O = n[5])),
        p(F, O));
      var B = _ && !I.isContextInPopoutWindow && !v && u && R,
        W;
      n[6] !== a || n[7] !== i || n[8] !== B
        ? ((W = B
            ? s._(/*BTDS*/ "Muted")
            : o("WAWebCallLogUtils").getCallStateText(i, a)),
          (n[6] = a),
          (n[7] = i),
          (n[8] = B),
          (n[9] = W))
        : (W = n[9]);
      var q = W,
        U;
      n[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = o("WAWebABProps").getABPropConfigValue(
            "enable_web_voip_virtual_video_capture_driver",
          )),
          (n[10] = U))
        : (U = n[10]);
      var V = U === !0,
        H = v && P && b && (x === "granted" || V || M || w),
        G = v && P && I.isContextInPopoutWindow && !H;
      r("useWAWebCameraPrewarm")(H);
      var z;
      n[11] !== a
        ? ((z = o("WAWebFrontendMsgGetters").getChat(a)),
          (n[11] = a),
          (n[12] = z))
        : (z = n[12]);
      var j = z,
        K;
      n[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((K = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents
              .GROUP_CALL_PARTICIPANT_STATES,
          )),
          (n[13] = K))
        : (K = n[13]);
      var Q = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          K,
          y,
        ),
        X = Q[0],
        Y = Q[1],
        J;
      e: {
        var Z,
          ee,
          te,
          ne =
            (Z =
              (ee = r("WAWebCallCollection").activeCall) == null
                ? void 0
                : ee.isGroup) != null
              ? Z
              : !1;
        if (ne && X.length === 2) {
          var re;
          n[14] !== X
            ? ((re = o("WAWebVoipLobbyUtils").getParticipantsWithoutSelf(X)),
              (n[14] = X),
              (n[15] = re))
            : (re = n[15]);
          var oe = re;
          if (oe.length === 1) {
            J = oe[0];
            break e;
          }
        }
        J = (te = j == null ? void 0 : j.id) != null ? te : void 0;
      }
      var ae = J,
        ie;
      n[16] !== Y || n[17] !== d
        ? ((ie = o(
            "WAWebOutgoingGroupCallUtils",
          ).getOutgoingGroupCallNameOverride(d, Y)),
          (n[16] = Y),
          (n[17] = d),
          (n[18] = ie))
        : (ie = n[18]);
      var le = ie,
        se;
      n[19] !== Y || n[20] !== d
        ? ((se = o(
            "WAWebOutgoingGroupCallUtils",
          ).getOutgoingGroupCallParticipants(d, Y)),
          (n[19] = Y),
          (n[20] = d),
          (n[21] = se))
        : (se = n[21]);
      var ue = se,
        ce;
      e: {
        var de,
          me,
          pe =
            (de =
              (me = r("WAWebCallCollection").activeCall) == null
                ? void 0
                : me.isGroup) != null
              ? de
              : !1;
        if (!pe || X.length !== 2 || !u) {
          ce = null;
          break e;
        }
        var _e;
        (n[22] !== i ||
        n[23] !== j ||
        n[24] !== _ ||
        n[25] !== R ||
        n[26] !== I.isContextInPopoutWindow
          ? ((_e =
              R && _ && !I.isContextInPopoutWindow
                ? s._(/*BTDS*/ "Muted")
                : c.jsxs("span", {
                    className: "x3nfvp2 x1q0g3np x1pha0wt xozqiw3",
                    children: [
                      c.jsx("span", {
                        className: "x2lah0s",
                        children: c.jsx(o("WAWebName.react").Name, { chat: j }),
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
                  })),
            (n[22] = i),
            (n[23] = j),
            (n[24] = _),
            (n[25] = R),
            (n[26] = I.isContextInPopoutWindow),
            (n[27] = _e))
          : (_e = n[27]),
          (ce = _e));
      }
      var fe = ce,
        ge = fe != null ? fe : q,
        he;
      if (H) {
        var ye;
        n[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((ye = { className: "x10l6tqk xymx5cc xxrlk4x x1of6sz5" }),
            (n[28] = ye))
          : (ye = n[28]);
        var Ce;
        n[29] !== q || n[30] !== le || n[31] !== ue || n[32] !== ae
          ? ((Ce = c.jsx(
              "div",
              babelHelpers.extends({}, ye, {
                children:
                  ue != null && ue.length > 1
                    ? c.jsx(r("WAWebOutgoingGroupCallParticipantInfo.react"), {
                        callStateText: q,
                        compact: !0,
                        imageSize: 48,
                        nameText: le,
                        participantWids: ue,
                      })
                    : c.jsx(r("WAWebCallParticipantInfo.react"), {
                        userId: ae,
                        imageSize: "small",
                        textAlign: "start",
                        callStateText: q,
                        compact: !0,
                        nameOverride: le,
                      }),
              }),
            )),
            (n[29] = q),
            (n[30] = le),
            (n[31] = ue),
            (n[32] = ae),
            (n[33] = Ce))
          : (Ce = n[33]);
        var be;
        n[34] !== P ||
        n[35] !== h ||
        n[36] !== S ||
        n[37] !== w ||
        n[38] !== E ||
        n[39] !== M
          ? ((be = c.jsx(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              justify: "center",
              xstyle: g.incomingCallPreviewContainer,
              children: c.jsx(
                o("WAWebVoipUiVideoCallSelfPreview.react")
                  .WAWebVoipUiVideoCallSelfPreviewFullWidth,
                {
                  cameraDenied: M,
                  isIncoming: P,
                  isSelfScreenSharing: h,
                  isVideoMuted: S,
                  noCameraDevice: w,
                  selfMicMuted: E,
                },
              ),
            })),
            (n[34] = P),
            (n[35] = h),
            (n[36] = S),
            (n[37] = w),
            (n[38] = E),
            (n[39] = M),
            (n[40] = be))
          : (be = n[40]);
        var ve;
        (n[41] !== Ce || n[42] !== be
          ? ((ve = c.jsxs(c.Fragment, { children: [Ce, be] })),
            (n[41] = Ce),
            (n[42] = be),
            (n[43] = ve))
          : (ve = n[43]),
          (he = ve));
      } else if (G) {
        var Se;
        n[44] === Symbol.for("react.memo_cache_sentinel")
          ? ((Se = { className: "x10l6tqk xymx5cc xxrlk4x x1of6sz5" }),
            (n[44] = Se))
          : (Se = n[44]);
        var Re;
        n[45] !== q || n[46] !== le || n[47] !== ue || n[48] !== ae
          ? ((Re = c.jsx(
              "div",
              babelHelpers.extends({}, Se, {
                children:
                  ue != null && ue.length > 1
                    ? c.jsx(r("WAWebOutgoingGroupCallParticipantInfo.react"), {
                        callStateText: q,
                        compact: !0,
                        imageSize: 48,
                        nameText: le,
                        participantWids: ue,
                      })
                    : c.jsx(r("WAWebCallParticipantInfo.react"), {
                        userId: ae,
                        imageSize: "small",
                        textAlign: "start",
                        callStateText: q,
                        compact: !0,
                        nameOverride: le,
                      }),
              }),
            )),
            (n[45] = q),
            (n[46] = le),
            (n[47] = ue),
            (n[48] = ae),
            (n[49] = Re))
          : (Re = n[49]);
        var Le;
        n[50] === Symbol.for("react.memo_cache_sentinel")
          ? ((Le = c.jsx(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              justify: "center",
              xstyle: g.incomingCallPreviewContainer,
              children: c.jsx(
                o("WAWebVoipDocPipSelfPreviewNotice.react")
                  .WAWebVoipDocPipSelfPreviewNotice,
                {},
              ),
            })),
            (n[50] = Le))
          : (Le = n[50]);
        var Ee;
        (n[51] !== Re
          ? ((Ee = c.jsxs(c.Fragment, { children: [Re, Le] })),
            (n[51] = Re),
            (n[52] = Ee))
          : (Ee = n[52]),
          (he = Ee));
      } else {
        var ke;
        (n[53] !== ge ||
        n[54] !== u ||
        n[55] !== _ ||
        n[56] !== v ||
        n[57] !== le ||
        n[58] !== ue ||
        n[59] !== ae ||
        n[60] !== R ||
        n[61] !== I.isContextInPopoutWindow
          ? ((ke = c.jsx(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              justify: "center",
              xstyle: g.participantInfoContainer,
              children:
                ue != null && ue.length > 1
                  ? c.jsx(r("WAWebOutgoingGroupCallParticipantInfo.react"), {
                      callStateText: ge,
                      compact: _,
                      imageSize: _ ? 48 : "auto",
                      nameText: le,
                      participantWids: ue,
                    })
                  : c.jsx(r("WAWebCallParticipantInfo.react"), {
                      userId: ae,
                      compact: _,
                      imageSize: _ ? "small" : "auto",
                      callStateText: ge,
                      xstyle: g.fullWidth,
                      showAudioWaveform: u && !v && !R,
                      audioLevelType: "peer",
                      waveformBarCount: I.isContextInPopoutWindow ? 7 : 5,
                      nameOverride: le,
                    }),
            })),
            (n[53] = ge),
            (n[54] = u),
            (n[55] = _),
            (n[56] = v),
            (n[57] = le),
            (n[58] = ue),
            (n[59] = ae),
            (n[60] = R),
            (n[61] = I.isContextInPopoutWindow),
            (n[62] = ke))
          : (ke = n[62]),
          (he = ke));
      }
      var Ie = H || G ? g.incomingVideoCallContainer : g.voiceCallContainer,
        Te = !H && !G && g.surfaceElevated,
        De =
          u &&
          o("WDSColorStyles.stylex").WDSBackgroundColorStyles
            .surfaceElevatedEmphasized,
        xe =
          d &&
          o("WDSColorStyles.stylex").WDSBackgroundColorStyles
            .surfaceElevatedDefault,
        $e;
      n[63] !== Ie || n[64] !== Te || n[65] !== De || n[66] !== xe
        ? (($e = [Ie, Te, De, xe]),
          (n[63] = Ie),
          (n[64] = Te),
          (n[65] = De),
          (n[66] = xe),
          (n[67] = $e))
        : ($e = n[67]);
      var Pe =
          H || G
            ? "voip-container-incoming-video-call"
            : "voip-container-audio-call",
        Ne;
      n[68] !== u || n[69] !== R || n[70] !== B
        ? ((Ne =
            u &&
            R &&
            !B &&
            c.jsx(r("WAWebVoipMicOffIndicator.react"), { size: "medium" })),
          (n[68] = u),
          (n[69] = R),
          (n[70] = B),
          (n[71] = Ne))
        : (Ne = n[71]);
      var Me;
      n[72] !== L
        ? ((Me = c.jsx(r("WAWebVoipReactionDisplay.react"), { reaction: L })),
          (n[72] = L),
          (n[73] = Me))
        : (Me = n[73]);
      var we;
      n[74] !== he ||
      n[75] !== $e ||
      n[76] !== Pe ||
      n[77] !== Ne ||
      n[78] !== Me
        ? ((we = c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            alignSelf: "stretch",
            grow: 1,
            shrink: 1,
            basis: 0,
            xstyle: $e,
            testid: void 0,
            children: [he, Ne, Me],
          })),
          (n[74] = he),
          (n[75] = $e),
          (n[76] = Pe),
          (n[77] = Ne),
          (n[78] = Me),
          (n[79] = we))
        : (we = n[79]);
      var Ae;
      n[80] !== d || n[81] !== P
        ? ((Ae = !P && !d && c.jsx(r("WAWebVoipEncryptionButton.react"), {})),
          (n[80] = d),
          (n[81] = P),
          (n[82] = Ae))
        : (Ae = n[82]);
      var Fe;
      return (
        n[83] !== we || n[84] !== Ae
          ? ((Fe = c.jsxs(o("WAWebFlex.react").FlexRow, {
              ref: T,
              alignSelf: "stretch",
              grow: 1,
              shrink: 1,
              basis: 0,
              xstyle: g.voiceCallContainerWrapper,
              children: [we, Ae],
            })),
            (n[83] = we),
            (n[84] = Ae),
            (n[85] = Fe))
          : (Fe = n[85]),
        Fe
      );
    }
    function y() {
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
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          (e == null ? void 0 : e.type) === "web" &&
            (yield e.setCallVideoMute(!1));
        })),
        b.apply(this, arguments)
      );
    }
    l.default = h;
  },
  226,
);
