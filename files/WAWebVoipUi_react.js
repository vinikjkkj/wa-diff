__d(
  "WAWebVoipUi.react",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebAvUpgradeBannerState",
    "WAWebBugnub.react",
    "WAWebCallCollection",
    "WAWebCallLogUtils",
    "WAWebCallParticipantInfo.react",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebCurrentUser",
    "WAWebErrorBoundary.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebFullscreenDetection",
    "WAWebL10N",
    "WAWebMoveResizeConstants",
    "WAWebPipController",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "WAWebVelocityTransitionGroup",
    "WAWebVoipActionRequestOpenChat",
    "WAWebVoipActivityTracker",
    "WAWebVoipAvUpgradeBanner.react",
    "WAWebVoipCallActiveInExternalPlayer.react",
    "WAWebVoipCallControls.react",
    "WAWebVoipCallEndedDisplay.react",
    "WAWebVoipCallLinkLoadingPreview.react",
    "WAWebVoipCallLinkPreview.react",
    "WAWebVoipCallLinkSharePanel.react",
    "WAWebVoipCallParticipantsDrawer.react",
    "WAWebVoipDarkThemeRoot.react",
    "WAWebVoipDebugInfoOverlay.react",
    "WAWebVoipEventConstants",
    "WAWebVoipLobbyUtils",
    "WAWebVoipNetworkConditionerOverlay.react",
    "WAWebVoipPostCallSurveyLoadable",
    "WAWebVoipScreenShareBanner.react",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStartCall",
    "WAWebVoipUiContext",
    "WAWebVoipUiDocPipPortalContainer.react",
    "WAWebVoipUiLobby.react",
    "WAWebVoipUiManager",
    "WAWebVoipUiPopoutWindowContext",
    "WAWebVoipUiPopoutWindowPortalContainer.react",
    "WAWebVoipUiToastContainer.react",
    "WAWebVoipUiVideoCallLoadable",
    "WAWebVoipUiVideoGroupCallLoadable",
    "WAWebVoipVoiceCallContainer.react",
    "WAWebVoipWaCallEnums",
    "WAWebVoipWaitingRoomRequestBanner.react",
    "WAWebVoipWebBridgeApi",
    "WAWebVoipWindowConstants",
    "WAWebWidFactory",
    "WDSColorStyles.stylex",
    "err",
    "react",
    "react-compiler-runtime",
    "useWAWebCallLinkEndedState",
    "useWAWebEventTargetValue",
    "useWAWebVoipCallHandlers",
    "useWAWebVoipCallToasts",
    "useWAWebVoipCameraAvailability",
    "useWAWebVoipCameraHealthCheck",
    "useWAWebVoipPostCallSurvey",
    "useWAWebVoipWakeLock",
    "useWAWebVoipWindowSetup",
    "useWAWebWaitingRoomSeeAll",
    "useWAWebWaitingRoomState",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useContext,
      _ = d.useEffect,
      f = d.useMemo,
      g = d.useRef,
      h = d.useState,
      y = 265,
      C = "540px",
      b =
        "max(" +
        C +
        ", calc(100% - " +
        o("WAWebVoipWindowConstants").DRAWER_WIDTH +
        "))",
      v = {
        voipContainer: {
          height: "x5yr21d",
          width: "xh8yej3",
          pointerEvents: "x67bb7w",
          position: "x1n2onr6",
          $$css: !0,
        },
        mainUIContainer: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          minHeight: "x2lwn1j",
          $$css: !0,
        },
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
        videoContainer: {
          width: "xh8yej3",
          height: "x5yr21d",
          position: "x1n2onr6",
          paddingBottom: "x12xbjc7",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          minHeight: "x2lwn1j",
          $$css: !0,
        },
        videoContainerPopout: {
          width: "xh8yej3",
          height: "x5yr21d",
          position: "x1n2onr6",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          minHeight: "x2lwn1j",
          $$css: !0,
        },
        videoCallOverlay: {
          position: "x10l6tqk",
          top: "xwa60dl",
          left: "x1nrll8i",
          insetInlineStart: null,
          insetInlineEnd: null,
          transform: "x11lhmoz",
          zIndex: "x1vjfegm",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          alignItems: "x6s0dn4",
          backgroundColor: "x1od0jb8",
          paddingTop: "x1p57kb1",
          paddingBottom: "xvpt6g3",
          paddingInlineStart: "x106a9eq",
          paddingInlineEnd: "x1xnnf8n",
          paddingLeft: null,
          paddingRight: null,
          backdropFilter: "x1dmgsgi",
          $$css: !0,
        },
        sharePanelWrapper: { height: "x5yr21d", $$css: !0 },
        mainColumn: {
          height: "x5yr21d",
          minWidth: "x17upfok",
          flexShrink: "xs83m0k",
          $$css: !0,
        },
      };
    function S(e) {
      var t,
        n = o("react-compiler-runtime").c(29),
        a = e.callLogMsg,
        i;
      (n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = []), (n[0] = i))
        : (i = n[0]),
        _(I, i));
      var l;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.MSG,
          )),
          (n[1] = l))
        : (l = n[1]);
      var s = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          l,
          k,
        ),
        u = (t = a != null ? a : s) != null ? t : null,
        d;
      (n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = o("WAWebVoipEventConstants").getMultiChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.CALL_LINK_STATE,
            o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL,
          )),
          (n[2] = d))
        : (d = n[2]),
        r("useWAWebEventTargetValue")(r("WAWebCallCollection"), d, E));
      var m;
      (n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.STATE,
          )),
          (n[3] = m))
        : (m = n[3]),
        r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          m,
          L,
        ));
      var p = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection"),
          "change:pendingCallLink",
          R,
        ),
        f = r("useWAWebCallLinkEndedState")(),
        h = f.isCallLinkEnded,
        y = r("WAWebCallCollection").activeCall,
        C;
      n[4] !== a
        ? ((C =
            a == null && (y == null ? void 0 : y.isInCallLinkPreview()) === !0),
          (n[4] = a),
          (n[5] = C))
        : (C = n[5]);
      var b = C,
        S = h && u == null,
        D;
      n[6] !== u
        ? ((D =
            u == null && (y == null ? void 0 : y.isInCallLinkLobby()) === !0),
          (n[6] = u),
          (n[7] = D))
        : (D = n[7]);
      var x = D,
        $;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = { ended: !1, preview: !1, lobby: !1 }), (n[8] = $))
        : ($ = n[8]);
      var P = g($),
        N,
        M;
      if (
        (n[9] !== S || n[10] !== x || n[11] !== b
          ? ((N = function () {
              var e = P.current,
                t = S,
                n = b && y != null,
                r = x;
              (t && !e.ended
                ? o("WAWebVoipActivityTracker").trackUiActivity(
                    o("WAWebVoipActivityTracker").VoipUiActivity
                      .CALL_ENDED_SCREEN_SHOWN,
                  )
                : n && !e.preview
                  ? o("WAWebVoipActivityTracker").trackUiActivity(
                      o("WAWebVoipActivityTracker").VoipUiActivity
                        .CALL_LINK_PREVIEW_SHOWN,
                    )
                  : r &&
                    !e.lobby &&
                    o("WAWebVoipActivityTracker").trackUiActivity(
                      o("WAWebVoipActivityTracker").VoipUiActivity
                        .CALL_LINK_LOBBY_SHOWN,
                    ),
                (P.current = { ended: t, preview: n, lobby: r }));
            }),
            (M = [S, b, x, y]),
            (n[9] = S),
            (n[10] = x),
            (n[11] = b),
            (n[12] = N),
            (n[13] = M))
          : ((N = n[12]), (M = n[13])),
        _(N, M),
        p != null && y == null && u == null)
      ) {
        var w;
        return (
          n[14] !== p.isVideo
            ? ((w = c.jsx(r("WAWebVoipCallLinkLoadingPreview.react"), {
                isVideo: p.isVideo,
              })),
              (n[14] = p.isVideo),
              (n[15] = w))
            : (w = n[15]),
          w
        );
      }
      if (S) {
        var A;
        n[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = [
              v.voipContainer,
              o("WDSColorStyles.stylex").WDSColorStyles.persistentAlwaysWhite,
              o("WDSColorStyles.stylex").WDSBackgroundColorStyles
                .backgroundWashPlain,
            ]),
            (n[16] = A))
          : (A = n[16]);
        var F;
        return (
          n[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((F = c.jsx(r("WAWebVoipDarkThemeRoot.react"), {
                xstyle: A,
                children: c.jsx(o("WAWebFlex.react").FlexColumn, {
                  align: "center",
                  justify: "center",
                  grow: 1,
                  shrink: 1,
                  basis: "auto",
                  xstyle: [v.mainUIContainer, v.fullWidth],
                  children: c.jsx(r("WAWebVoipCallEndedDisplay.react"), {}),
                }),
              })),
              (n[17] = F))
            : (F = n[17]),
          F
        );
      }
      if ((y == null ? void 0 : y.isCallLink) === !0) {
        if (y.isInCallLinkPreview() && !y.isInCallLinkLobby()) {
          var O;
          return (
            n[18] === Symbol.for("react.memo_cache_sentinel")
              ? ((O = c.jsx(r("WAWebVoipDarkThemeRoot.react"), {
                  xstyle: [
                    v.voipContainer,
                    o("WDSColorStyles.stylex").WDSColorStyles
                      .persistentAlwaysWhite,
                    o("WDSColorStyles.stylex").WDSBackgroundColorStyles
                      .backgroundWashPlain,
                  ],
                  children: c.jsx(r("WAWebVoipCallLinkPreview.react"), {
                    call: y,
                  }),
                })),
                (n[18] = O))
              : (O = n[18]),
            O
          );
        }
        if (
          y.callLinkState == null ||
          y.callLinkState === o("WAWebVoipWaCallEnums").CallLinkState.QuerySent
        ) {
          var B,
            W,
            q =
              (B =
                (W = p == null ? void 0 : p.isVideo) != null ? W : y.isVideo) !=
              null
                ? B
                : !1,
            U;
          return (
            n[19] !== q
              ? ((U = c.jsx(r("WAWebVoipCallLinkLoadingPreview.react"), {
                  isVideo: q,
                })),
                (n[19] = q),
                (n[20] = U))
              : (U = n[20]),
            U
          );
        }
        var V = y.getState();
        if (
          V !== o("WAWebVoipWaCallEnums").CallState.ConnectedLonely &&
          V !== o("WAWebVoipWaCallEnums").CallState.CallActive
        ) {
          var H,
            G,
            z =
              (H =
                (G = p == null ? void 0 : p.isVideo) != null ? G : y.isVideo) !=
              null
                ? H
                : !1,
            j;
          return (
            n[21] !== z
              ? ((j = c.jsx(r("WAWebVoipCallLinkLoadingPreview.react"), {
                  isVideo: z,
                })),
                (n[21] = z),
                (n[22] = j))
              : (j = n[22]),
            j
          );
        }
      }
      if (u == null) {
        if (p != null) {
          var K;
          return (
            n[23] !== p.isVideo
              ? ((K = c.jsx(r("WAWebVoipCallLinkLoadingPreview.react"), {
                  isVideo: p.isVideo,
                })),
                (n[23] = p.isVideo),
                (n[24] = K))
              : (K = n[24]),
            K
          );
        }
        return null;
      }
      if (p != null && (y == null ? void 0 : y.isCallLink) !== !0) {
        var Q;
        return (
          n[25] !== p.isVideo
            ? ((Q = c.jsx(r("WAWebVoipCallLinkLoadingPreview.react"), {
                isVideo: p.isVideo,
              })),
              (n[25] = p.isVideo),
              (n[26] = Q))
            : (Q = n[26]),
          Q
        );
      }
      var X;
      return (
        n[27] !== u
          ? ((X = c.jsx(T, { callLogMsg: u })), (n[27] = u), (n[28] = X))
          : (X = n[28]),
        X
      );
    }
    function R() {
      return r("WAWebCallCollection").pendingCallLink;
    }
    function L() {
      var e;
      return (e = r("WAWebCallCollection").activeCall) == null
        ? void 0
        : e.getState();
    }
    function E() {
      var e;
      return (e = r("WAWebCallCollection").activeCall) == null
        ? void 0
        : e.callLinkState;
    }
    function k() {
      var e;
      return (e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.msg;
    }
    function I() {
      o("WAWebVoipActivityTracker").trackUiActivity(
        o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_UI_MOUNTING,
      );
    }
    function T(t) {
      var n,
        a,
        i,
        l,
        s = o("react-compiler-runtime").c(305),
        u = t.callLogMsg,
        d;
      (s[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = []), (s[0] = d))
        : (d = s[0]),
        _(ne, d));
      var m = r("useWAWebEventTargetValue")(
          o("WAWebVoipUiPopoutWindowPortalContainer.react")
            .WAWebVoipUiPopoutWindowEventEmitter,
          "setPopoutWindowProps",
          o("WAWebVoipUiPopoutWindowPortalContainer.react")
            .getIsCallActiveInPopoutWindow,
        ),
        f = r("useWAWebEventTargetValue")(
          o("WAWebVoipUiDocPipPortalContainer.react")
            .WAWebVoipUiDocPipEventEmitter,
          "docPipOpenStateChanged",
          o("WAWebVoipUiDocPipPortalContainer.react").getIsDocPipWindowOpen,
        ),
        C = p(r("WAWebVoipUiPopoutWindowContext")),
        S;
      s[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.IS_VIDEO,
          )),
          (s[1] = S))
        : (S = s[1]);
      var R;
      s[2] !== u
        ? ((R = function () {
            var e, t;
            return (e =
              (t = r("WAWebCallCollection").activeCall) == null
                ? void 0
                : t.isVideo) != null
              ? e
              : u.isVideoCall;
          }),
          (s[2] = u),
          (s[3] = R))
        : (R = s[3]);
      var L = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          S,
          R,
        ),
        E = g(null),
        k = g(null),
        I = h(null),
        T = I[0],
        X = I[1],
        re = T == null ? !1 : T < y,
        oe = h(!1),
        ae = oe[0],
        ie = oe[1],
        le;
      s[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((le = function () {
            (o("WAWebVoipActivityTracker").trackUiActivity(
              o("WAWebVoipActivityTracker").VoipUiActivity
                .CONTROL_PANEL_PARTICIPANT_DRAWER_TOGGLE,
            ),
              ie(te));
          }),
          (s[4] = le))
        : (le = s[4]);
      var se = le,
        ue;
      s[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((ue = function () {
            ie(!1);
          }),
          (s[5] = ue))
        : (ue = s[5]);
      var ce = ue,
        de = h("grid"),
        me = de[0],
        pe = de[1],
        _e = h(null),
        fe = _e[0],
        ge = _e[1],
        he = h(null),
        ye = he[0],
        Ce = he[1],
        be = h(null),
        ve = be[0],
        Se = be[1],
        Re;
      s[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((Re = function (t) {
            var e;
            (e = k.current) == null ||
              e.showToast({ message: t, type: "default", align: "center" });
          }),
          (s[6] = Re))
        : (Re = s[6]);
      var Le = Re,
        Ee;
      s[7] !== T
        ? ((Ee = { uiHeight: T, showCenteredToast: Le }),
          (s[7] = T),
          (s[8] = Ee))
        : (Ee = s[8]);
      var ke = Ee,
        Ie;
      s[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ie = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.STATE,
          )),
          (s[9] = Ie))
        : (Ie = s[9]);
      var Te = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          Ie,
          ee,
        ),
        De = g(Te),
        xe,
        $e;
      (s[10] !== Te
        ? (($e = function () {
            var e = De.current;
            ((De.current = Te),
              e != null && Te == null
                ? o("WAWebVoipActivityTracker").trackUiActivity(
                    o("WAWebVoipActivityTracker").VoipUiActivity
                      .CALL_ENDED_SCREEN_SHOWN,
                  )
                : e !== Te &&
                  Te != null &&
                  o("WAWebVoipActivityTracker").trackUiActivity(
                    o("WAWebVoipActivityTracker").VoipUiActivity
                      .CALL_STATE_UI_TRANSITION,
                    String(Te),
                  ));
          }),
          (xe = [Te]),
          (s[10] = Te),
          (s[11] = xe),
          (s[12] = $e))
        : ((xe = s[11]), ($e = s[12])),
        _($e, xe));
      var Pe =
          ((n = r("WAWebCallCollection").activeCall) == null
            ? void 0
            : n.isCallLink) === !0 &&
          Te === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely &&
          C.isContextInPopoutWindow,
        Ne = (ae || Pe) && Te != null,
        Me = Ne && C.isContextInPopoutWindow,
        we,
        Ae;
      (s[13] !== Me
        ? ((we = function () {
            return (
              o("WAWebVoipWindowConstants").setIsSidebarVisible(Me),
              function () {
                Me && o("WAWebVoipWindowConstants").setIsSidebarVisible(!1);
              }
            );
          }),
          (Ae = [Me]),
          (s[13] = Me),
          (s[14] = we),
          (s[15] = Ae))
        : ((we = s[14]), (Ae = s[15])),
        _(we, Ae));
      var Fe;
      s[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((Fe = o("WAWebVoipEventConstants").getMultiChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.CALL_LINK_STATE,
            o("WAWebVoipEventConstants").VoipCallModelEvents.STATE,
          )),
          (s[16] = Fe))
        : (Fe = s[16]);
      var Oe = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          Fe,
          Z,
        ),
        Be =
          Te === o("WAWebVoipWaCallEnums").CallState.ReceivedCall ||
          Te === o("WAWebVoipWaCallEnums").CallState.ReceivedCallWithoutOffer,
        We =
          Te === o("WAWebVoipWaCallEnums").CallState.Calling ||
          Te === o("WAWebVoipWaCallEnums").CallState.PreacceptReceived,
        qe;
      s[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((qe = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.IS_GROUP,
          )),
          (s[17] = qe))
        : (qe = s[17]);
      var Ue = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          qe,
          J,
        ),
        Ve;
      s[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ve = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents
              .CALL_LINK_CREATOR_JID,
          )),
          (s[18] = Ve))
        : (Ve = s[18]);
      var He = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          Ve,
          Y,
        ),
        Ge;
      s[19] !== He
        ? ((Ge = He
            ? o("WAWebChatCollection").ChatCollection.getChatByAccountLid(
                o("WAWebWidFactory").asUserLidOrThrow(He),
              )
            : null),
          (s[19] = He),
          (s[20] = Ge))
        : (Ge = s[20]);
      var ze = Ge,
        je;
      s[21] !== Te || s[22] !== Ue
        ? ((je = o("WAWebVoipLobbyUtils").isLobbyApplicableForCallState(
            Ue,
            Te,
          )),
          (s[21] = Te),
          (s[22] = Ue),
          (s[23] = je))
        : (je = s[23]);
      var Ke = je,
        Qe = h(!document.hidden),
        Xe = Qe[0],
        Ye = Qe[1],
        Je = g(null),
        Ze,
        et;
      (s[24] !== We || s[25] !== Be
        ? ((Ze = function () {
            if (Be && !We) {
              var e = function () {
                o("WAWebABProps").getABPropConfigValue(
                  "enable_web_voip_anr_optimizations",
                )
                  ? (Je.current != null && window.clearTimeout(Je.current),
                    (Je.current = window.setTimeout(function () {
                      ((Je.current = null), Ye(!document.hidden));
                    }, 200)))
                  : Ye(!document.hidden);
              };
              return (
                document.addEventListener("visibilitychange", e),
                function () {
                  (document.removeEventListener("visibilitychange", e),
                    Je.current != null &&
                      (window.clearTimeout(Je.current), (Je.current = null)));
                }
              );
            }
          }),
          (et = [Be, We]),
          (s[24] = We),
          (s[25] = Be),
          (s[26] = Ze),
          (s[27] = et))
        : ((Ze = s[26]), (et = s[27])),
        _(Ze, et));
      var tt;
      (s[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((tt = []), (s[28] = tt))
        : (tt = s[28]),
        _(Q, tt),
        o("WAWebFullscreenDetection").useOnFullscreenChange(K));
      var nt, rt;
      (s[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((nt = function () {
            var e;
            (e = E.current) == null || e.focus();
            var t,
              n = function () {
                var e = E.current;
                e &&
                  (t && window.cancelAnimationFrame(t),
                  (t = window.requestAnimationFrame(function () {
                    var t = e.clientHeight;
                    X(t);
                  })));
              };
            n();
            var r = new ResizeObserver(n);
            return (
              E.current && r.observe(E.current),
              function () {
                (r.disconnect(), t && window.cancelAnimationFrame(t));
              }
            );
          }),
          (rt = []),
          (s[29] = nt),
          (s[30] = rt))
        : ((nt = s[29]), (rt = s[30])),
        _(nt, rt));
      var ot;
      s[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((ot = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_MIC_MUTED,
          )),
          (s[31] = ot))
        : (ot = s[31]);
      var at = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          ot,
          j,
        ),
        it;
      s[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((it = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents
              .GROUP_CALL_PARTICIPANT_STATES,
          )),
          (s[32] = it))
        : (it = s[32]);
      var lt = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          "participantMicStateChange " + it,
          z,
        ),
        st;
      s[33] === Symbol.for("react.memo_cache_sentinel")
        ? ((st = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents
              .GROUP_CALL_PARTICIPANT_STATES,
          )),
          (s[33] = st))
        : (st = s[33]);
      var ut = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          st,
          G,
        ),
        ct = ut[0],
        dt = ut[1],
        mt = ut[2],
        pt = Ue && ct.length === 2 ? lt : at,
        _t;
      s[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((_t = o("WAWebVoipEventConstants").getMultiChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.IS_GROUP,
            o("WAWebVoipEventConstants").VoipCallModelEvents.GROUP_JID,
          )),
          (s[34] = _t))
        : (_t = s[34]);
      var ft = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          _t,
          H,
        ),
        gt;
      s[35] === Symbol.for("react.memo_cache_sentinel")
        ? ((gt = o("WAWebVoipEventConstants").getMultiChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.IS_GROUP,
            o("WAWebVoipEventConstants").VoipCallModelEvents.GROUP_JID,
          )),
          (s[35] = gt))
        : (gt = s[35]);
      var ht = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          gt,
          V,
        ),
        yt;
      s[36] === Symbol.for("react.memo_cache_sentinel")
        ? ((yt = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.SELF_MIC_MUTED,
          )),
          (s[36] = yt))
        : (yt = s[36]);
      var Ct = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          yt,
          U,
        ),
        bt = r("useWAWebVoipCameraAvailability")(),
        vt;
      s[37] === Symbol.for("react.memo_cache_sentinel")
        ? ((vt = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.SELF_VIDEO_STATE,
          )),
          (s[37] = vt))
        : (vt = s[37]);
      var St;
      s[38] !== L
        ? ((St = function () {
            return r("WAWebCallCollection").activeCall
              ? r("WAWebCallCollection").activeCall.selfVideoState !==
                  o("WAWebVoipWaCallEnums").VideoState.Enabled
              : !L;
          }),
          (s[38] = L),
          (s[39] = St))
        : (St = s[39]);
      var Rt = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          vt,
          St,
        ),
        Lt;
      s[40] === Symbol.for("react.memo_cache_sentinel")
        ? ((Lt = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents
              .SCREEN_SHARE_STATES,
          )),
          (s[40] = Lt))
        : (Lt = s[40]);
      var Et = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          Lt,
          q,
        ),
        kt = Et[0],
        It = Et[1],
        Tt = kt || It,
        Dt = h(Tt),
        xt = Dt[0],
        $t = Dt[1];
      Tt !== xt &&
        ($t(Tt),
        Tt && me !== "speaker"
          ? (Ce(me), pe("speaker"))
          : !Tt && ye != null && (pe(ye), Ce(null)));
      var Pt = h(!1),
        Nt = Pt[0],
        Mt = Pt[1];
      !Nt && Tt && (Mt(!0), me !== "speaker" && pe("speaker"));
      var wt;
      s[41] !== Tt || s[42] !== me
        ? ((wt = function () {
            Tt ||
              (o("WAWebVoipActivityTracker").trackUiActivity(
                o("WAWebVoipActivityTracker").VoipUiActivity
                  .CONTROL_PANEL_LAYOUT_MODE_TOGGLE,
              ),
              me === "speaker"
                ? (ge(null), Se(null), pe("grid"))
                : pe("speaker"));
          }),
          (s[41] = Tt),
          (s[42] = me),
          (s[43] = wt))
        : (wt = s[43]);
      var At = wt,
        Ft;
      s[44] !== Tt || s[45] !== me || s[46] !== ve
        ? ((Ft = function (t) {
            ge(function (e) {
              var n = e != null && e.equals(t);
              return n
                ? (ve === "grid" && !Tt && pe("grid"), Se(null), null)
                : (me !== "speaker" && Se(me), pe("speaker"), t);
            });
          }),
          (s[44] = Tt),
          (s[45] = me),
          (s[46] = ve),
          (s[47] = Ft))
        : (Ft = s[47]);
      var Ot = Ft,
        Bt;
      (s[48] !== Te || s[49] !== It || s[50] !== kt
        ? ((Bt = {
            callState: Te,
            isSelfScreenSharing: kt,
            isAnyPeerScreenSharing: It,
            showCenteredToast: Le,
          }),
          (s[48] = Te),
          (s[49] = It),
          (s[50] = kt),
          (s[51] = Bt))
        : (Bt = s[51]),
        r("useWAWebVoipCallToasts")(Bt));
      var Wt = Rt || !bt,
        qt;
      s[52] === Symbol.for("react.memo_cache_sentinel")
        ? ((qt = o("WAWebVoipEventConstants").getMultiChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.VIDEO_STATE,
            o("WAWebVoipEventConstants").VoipCallModelEvents.IS_VIDEO,
          )),
          (s[52] = qt))
        : (qt = s[52]);
      var Ut = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          qt,
          W,
        ),
        Vt;
      s[53] === Symbol.for("react.memo_cache_sentinel")
        ? ((Vt = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.VIDEO_STATE,
          )),
          (s[53] = Vt))
        : (Vt = s[53]);
      var Ht = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          Vt,
          B,
        ),
        Gt;
      s[54] === Symbol.for("react.memo_cache_sentinel")
        ? ((Gt = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.VIDEO_STATE,
          )),
          (s[54] = Gt))
        : (Gt = s[54]);
      var zt = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          Gt,
          O,
        ),
        jt;
      s[55] === Symbol.for("react.memo_cache_sentinel")
        ? ((jt = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.VIDEO_STATE,
          )),
          (s[55] = jt))
        : (jt = s[55]);
      var Kt = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          jt,
          F,
        ),
        Qt;
      s[56] === Symbol.for("react.memo_cache_sentinel")
        ? ((Qt = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents
              .GROUP_CALL_PARTICIPANT_STATES,
          )),
          (s[56] = Qt))
        : (Qt = s[56]);
      var Xt = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          "participantVideoStateChange " + Qt,
          A,
        ),
        Yt = Xt[0],
        Jt = Xt[1],
        Zt = Ue && ct.length === 2,
        en = Zt ? Yt : zt,
        tn = Zt ? Jt : Kt,
        nn = Zt ? Ut || en : Ut,
        rn;
      s[57] === Symbol.for("react.memo_cache_sentinel")
        ? ((rn = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_RECONNECTING,
          )),
          (s[57] = rn))
        : (rn = s[57]);
      var on = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          rn,
          w,
        ),
        an,
        ln;
      if (s[58] === Symbol.for("react.memo_cache_sentinel")) {
        var sn;
        ((an = (sn = o("WAWebVoipEventConstants")).getChangeEvent(
          sn.VoipCallModelEvents.PEER_RECONNECTING,
        )),
          (ln = sn.getChangeEvent(
            sn.VoipCallModelEvents.GROUP_CALL_PARTICIPANT_STATES,
          )),
          (s[58] = an),
          (s[59] = ln));
      } else ((an = s[58]), (ln = s[59]));
      var un = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          an + " " + ln,
          M,
        ),
        cn = Zt ? un : on,
        dn = N,
        mn;
      s[60] === Symbol.for("react.memo_cache_sentinel")
        ? ((mn = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_JID,
          )),
          (s[60] = mn))
        : (mn = s[60]);
      var pn = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          mn,
          P,
        ),
        _n;
      e: {
        if (Ue) {
          var fn;
          if (s[61] !== ct) {
            var gn, hn;
            ((fn =
              (gn =
                (hn = o("WAWebVoipLobbyUtils").getSolePeerInGroupCall(ct)) ==
                null
                  ? void 0
                  : hn.toJid()) != null
                ? gn
                : null),
              (s[61] = ct),
              (s[62] = fn));
          } else fn = s[62];
          _n = fn;
          break e;
        }
        _n = pn;
      }
      var yn = _n,
        Cn;
      s[63] !== m ||
      s[64] !== We ||
      s[65] !== Be ||
      s[66] !== C.isContextInPopoutWindow
        ? ((Cn = {
            isCallRinging: Be,
            isCallOutgoing: We,
            isCallActiveInPopoutWindow: m,
            isContextInPopoutWindow: C.isContextInPopoutWindow,
          }),
          (s[63] = m),
          (s[64] = We),
          (s[65] = Be),
          (s[66] = C.isContextInPopoutWindow),
          (s[67] = Cn))
        : (Cn = s[67]);
      var bn = r("useWAWebVoipPostCallSurvey")(Cn),
        vn = bn.handleSurveyDismiss,
        Sn = bn.handleSurveySubmit,
        Rn = bn.isSurveyDismissed,
        Ln = bn.onSurveyInteract,
        En = bn.shouldShowPostCallSurvey,
        kn =
          (a =
            (i = r("WAWebCallCollection").activeCall) == null
              ? void 0
              : i.isCallLink) != null
            ? a
            : !1,
        In =
          Te === o("WAWebVoipWaCallEnums").CallState.CallActive ||
          Te === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely,
        Tn,
        Dn;
      (s[68] !== In || s[69] !== L || s[70] !== C.isContextInPopoutWindow
        ? ((Tn = function () {
            kn &&
              In &&
              L &&
              !C.isContextInPopoutWindow &&
              o("WAWebABProps").getABPropConfigValue(
                "web_calling_auto_popout_video",
              ) &&
              !o(
                "WAWebVoipUiPopoutWindowPortalContainer.react",
              ).getIsCallActiveInPopoutWindow() &&
              o("WAWebVoipUiManager").openVoipUiPopoutWindow();
          }),
          (Dn = [kn, In, L, C.isContextInPopoutWindow]),
          (s[68] = In),
          (s[69] = L),
          (s[70] = C.isContextInPopoutWindow),
          (s[71] = Tn),
          (s[72] = Dn))
        : ((Tn = s[71]), (Dn = s[72])),
        _(Tn, Dn));
      var xn = h(null),
        $n = xn[0],
        Pn = xn[1],
        Nn = h(null),
        Mn = Nn[0],
        wn = Nn[1],
        An,
        Fn;
      (s[73] === Symbol.for("react.memo_cache_sentinel")
        ? ((An = function () {
            var t = r("WAWebCallCollection").activeCall;
            if (!t) {
              Pn(null);
              return;
            }
            var n = function () {
              var n = t.peerJid;
              if (n != null) {
                var a = t.getReactionForParticipant(n);
                Pn(a);
              }
              try {
                var i = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
                  l = t.getReactionForParticipant(i);
                wn(l);
              } catch (t) {
                var s = t;
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: Failed to get self LID for reaction lookup",
                      ])),
                  )
                  .catching(s instanceof Error ? s : r("err")(String(s)));
              }
            };
            return (
              n(),
              t.on(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallModelEvents
                    .REACTION_STATES,
                ),
                n,
              ),
              function () {
                t.off(
                  o("WAWebVoipEventConstants").getChangeEvent(
                    o("WAWebVoipEventConstants").VoipCallModelEvents
                      .REACTION_STATES,
                  ),
                  n,
                );
              }
            );
          }),
          (Fn = []),
          (s[73] = An),
          (s[74] = Fn))
        : ((An = s[73]), (Fn = s[74])),
        _(An, Fn),
        r("useWAWebVoipWakeLock")(),
        r("useWAWebVoipCameraHealthCheck")(In));
      var On = r("useWAWebEventTargetValue")(
          r("WAWebAvUpgradeBannerState"),
          "change",
          $,
        ),
        Bn = r("useWAWebWaitingRoomState")(),
        Wn = Bn.firstWaitingRoomUserName,
        qn = Bn.handleWaitingRoomApprove,
        Un = Bn.handleWaitingRoomDeny,
        Vn = Bn.isWaitingRoomAdmin,
        Hn = Bn.waitingRoomUsersCount,
        Gn,
        zn;
      (s[75] !== Te
        ? ((Gn = function () {
            (Te == null ||
              Te === o("WAWebVoipWaCallEnums").CallState.CallStateEnding ||
              Te === o("WAWebVoipWaCallEnums").CallState.None) &&
              r("WAWebAvUpgradeBannerState").clearAllBanners();
          }),
          (zn = [Te]),
          (s[75] = Te),
          (s[76] = Gn),
          (s[77] = zn))
        : ((Gn = s[76]), (zn = s[77])),
        _(Gn, zn));
      var jn, Kn;
      (s[78] !== Te
        ? ((jn = function () {
            (Te == null ||
              Te === o("WAWebVoipWaCallEnums").CallState.CallStateEnding ||
              Te === o("WAWebVoipWaCallEnums").CallState.None) &&
              o("WAWebToastManager").ToastManager.close(
                o("WAWebVoipWebBridgeApi").MICROPHONE_SILENCE_TOAST_ID,
              );
          }),
          (Kn = [Te]),
          (s[78] = Te),
          (s[79] = jn),
          (s[80] = Kn))
        : ((jn = s[79]), (Kn = s[80])),
        _(jn, Kn));
      var Qn, Xn;
      (s[81] !== u || s[82] !== Te
        ? ((Qn = function () {
            Te == null &&
              (o("WAWebCallLogUtils").shouldShowCallEndedScreen(u) ||
                (r("WAWebPipController").closePiP(),
                o("WAWebVoipUiManager").closeVoipUiPopoutWindow({
                  callEnded: !0,
                  surveyInteracted: !1,
                }),
                o(
                  "WAWebVoipUiDocPipPortalContainer.react",
                ).WAWebVoipUiDocPipEventEmitter.trigger("closeDocPip", {
                  surveyInteracted: !1,
                })));
          }),
          (Xn = [Te, u]),
          (s[81] = u),
          (s[82] = Te),
          (s[83] = Qn),
          (s[84] = Xn))
        : ((Qn = s[83]), (Xn = s[84])),
        _(Qn, Xn));
      var Yn = r("WAWebCallCollection").activeCall,
        Jn,
        Zn;
      (s[85] === Symbol.for("react.memo_cache_sentinel")
        ? ((Jn = function () {
            var e,
              t,
              n,
              o = (e = Yn == null ? void 0 : Yn.id) != null ? e : null,
              a =
                (t =
                  (n = r("WAWebCallCollection").lastActiveCall) == null
                    ? void 0
                    : n.id) != null
                  ? t
                  : null;
            o != null &&
              (a != null &&
                o !== a &&
                r("WAWebAvUpgradeBannerState").clearAllBanners(),
              (r("WAWebCallCollection").lastActiveCall = Yn));
          }),
          (Zn = [Yn]),
          (s[85] = Jn),
          (s[86] = Zn))
        : ((Jn = s[85]), (Zn = s[86])),
        _(Jn, Zn));
      var er;
      s[87] === Symbol.for("react.memo_cache_sentinel")
        ? ((er = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.RAISED_HAND_STATES,
          )),
          (s[87] = er))
        : (er = s[87]);
      var tr = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          er,
          x,
        ),
        nr = (l = On == null ? void 0 : On.jid) != null ? l : null,
        rr;
      s[88] !== Ct || s[89] !== L || s[90] !== Wt || s[91] !== nr
        ? ((rr = {
            currentBannerJid: nr,
            isMuted: Ct,
            isVideoCall: L,
            isVideoMuted: Wt,
          }),
          (s[88] = Ct),
          (s[89] = L),
          (s[90] = Wt),
          (s[91] = nr),
          (s[92] = rr))
        : (rr = s[92]);
      var or = r("useWAWebVoipCallHandlers")(rr),
        ar = or.handleBannerAccept,
        ir = or.handleBannerIgnore,
        lr = or.handleClickAccept,
        sr = or.handleClickEnd,
        ur = or.handleClickReject,
        cr = or.handleMuteToggle,
        dr = or.handleRaiseHandToggle,
        mr = or.handleReactionSelect,
        pr = or.handleVideoMuteToggle,
        _r = ct.length,
        fr = Ke,
        gr;
      s[93] !== Te || s[94] !== We || s[95] !== fr
        ? ((gr = fr
            ? o("WAWebVoipLobbyUtils").getLobbyButtonDisplayProps(We, Te)
            : void 0),
          (s[93] = Te),
          (s[94] = We),
          (s[95] = fr),
          (s[96] = gr))
        : (gr = s[96]);
      var hr = gr,
        yr = !fr && _r > 2,
        Cr =
          Ue &&
          Te === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely &&
          _r <= 1,
        br =
          kn &&
          Cr &&
          !C.isContextInPopoutWindow &&
          !m &&
          !f &&
          r("WAWebCallCollection").activeCall != null,
        vr;
      s[97] !== dt || s[98] !== Ue
        ? ((vr = Ue
            ? o("WAWebVoipLobbyUtils").getParticipantsWithoutSelf(dt)
            : []),
          (s[97] = dt),
          (s[98] = Ue),
          (s[99] = vr))
        : (vr = s[99]);
      var Sr = vr,
        Rr = D,
        Lr;
      s[100] === Symbol.for("react.memo_cache_sentinel")
        ? ((Lr = function () {
            ie(!0);
          }),
          (s[100] = Lr))
        : (Lr = s[100]);
      var Er = Lr,
        kr = r("useWAWebWaitingRoomSeeAll")(
          C.isContextInPopoutWindow,
          Er,
          mt,
          Sr,
          Rr,
        ),
        Ir = kr.handleWaitingRoomSeeAll,
        Tr = kr.isParticipantsModalOpen,
        Dr;
      if (En && !Rn) {
        if (!(m && !C.isContextInPopoutWindow)) {
          var xr;
          (s[101] !== vn || s[102] !== Sn || s[103] !== re || s[104] !== Ln
            ? ((xr = c.jsx(
                o("WAWebVoipPostCallSurveyLoadable")
                  .WAWebVoipPostCallSurveyLoadable,
                { isCompact: re, onDismiss: vn, onInteract: Ln, onSubmit: Sn },
              )),
              (s[101] = vn),
              (s[102] = Sn),
              (s[103] = re),
              (s[104] = Ln),
              (s[105] = xr))
            : (xr = s[105]),
            (Dr = xr));
        }
      } else if (Te == null) {
        if (o("WAWebCallLogUtils").shouldShowCallEndedScreen(u)) {
          var $r;
          (s[106] === Symbol.for("react.memo_cache_sentinel")
            ? (($r = c.jsx(r("WAWebVoipCallEndedDisplay.react"), {})),
              (s[106] = $r))
            : ($r = s[106]),
            (Dr = $r));
        }
      } else if (!C.isContextInPopoutWindow && !C.isDocPip && (m || f)) {
        var Pr;
        (s[107] !== u
          ? ((Pr = c.jsx(r("WAWebVoipCallActiveInExternalPlayer.react"), {
              msg: u,
            })),
            (s[107] = u),
            (s[108] = Pr))
          : (Pr = s[108]),
          (Dr = Pr));
      } else if (Oe && r("WAWebCallCollection").activeCall != null) {
        var Nr;
        (s[109] === Symbol.for("react.memo_cache_sentinel")
          ? ((Nr = c.jsx(r("WAWebVoipCallLinkPreview.react"), {
              call: r("WAWebCallCollection").activeCall,
            })),
            (s[109] = Nr))
          : (Nr = s[109]),
          (Dr = Nr));
      } else if (yr) {
        var Mr, wr;
        if (
          s[110] !== ze ||
          s[111] !== (u == null || (Mr = u.id) == null ? void 0 : Mr.remote)
        ) {
          var Ar, Fr, Or;
          ((wr =
            (Ar = o("WAWebChatCollection").ChatCollection.get(
              u == null || (Fr = u.id) == null ? void 0 : Fr.remote,
            )) != null
              ? Ar
              : ze),
            (s[110] = ze),
            (s[111] = u == null || (Or = u.id) == null ? void 0 : Or.remote),
            (s[112] = wr));
        } else wr = s[112];
        var Br = !L,
          Wr = L ? Ot : void 0,
          qr;
        if (s[113] === Symbol.for("react.memo_cache_sentinel")) {
          var Ur, Vr;
          ((qr =
            (Ur =
              (Vr = r("WAWebCallCollection").activeCall) == null
                ? void 0
                : Vr.getScreenSharingPeerJid()) != null
              ? Ur
              : null),
            (s[113] = qr));
        } else qr = s[113];
        var Hr;
        (s[114] !== Te ||
        s[115] !== ct ||
        s[116] !== Sr ||
        s[117] !== ht ||
        s[118] !== kt ||
        s[119] !== me ||
        s[120] !== fe ||
        s[121] !== wr ||
        s[122] !== Br ||
        s[123] !== Wr
          ? ((Hr = c.jsx(
              o("WAWebVoipUiVideoGroupCallLoadable")
                .WAWebVoipUiVideoGroupCallLoadable,
              {
                callState: Te,
                groupChat: wr,
                groupCallParticipantsConnected: ct,
                groupParticipantsWithoutSelf: Sr,
                isGroupAudioCall: Br,
                isLinkedGroupCall: ht,
                isSelfScreenSharing: kt,
                getPeerReconnectingState: dn,
                layoutMode: me,
                onPinParticipant: Wr,
                pinnedParticipantJid: fe,
                screenSharingPeerJid: qr,
              },
            )),
            (s[114] = Te),
            (s[115] = ct),
            (s[116] = Sr),
            (s[117] = ht),
            (s[118] = kt),
            (s[119] = me),
            (s[120] = fe),
            (s[121] = wr),
            (s[122] = Br),
            (s[123] = Wr),
            (s[124] = Hr))
          : (Hr = s[124]),
          (Dr = Hr));
      } else if (fr) {
        var Gr;
        s[125] !== mt || s[126] !== dt
          ? ((Gr = o("WAWebVoipLobbyUtils").getArePeersActiveInCall(dt, mt)),
            (s[125] = mt),
            (s[126] = dt),
            (s[127] = Gr))
          : (Gr = s[127]);
        var zr = Gr,
          jr = !C.isContextInPopoutWindow && !C.isDocPip,
          Kr;
        (s[128] !== zr ||
        s[129] !== u ||
        s[130] !== Te ||
        s[131] !== mt ||
        s[132] !== Sr ||
        s[133] !== We ||
        s[134] !== Ct ||
        s[135] !== kt ||
        s[136] !== L ||
        s[137] !== Wt ||
        s[138] !== jr
          ? ((Kr = c.jsx(o("WAWebFlex.react").FlexItem, {
              testid: void 0,
              grow: 1,
              xstyle: v.videoContainer,
              children: c.jsx(r("WAWebVoipUiLobby.react"), {
                callLogMsg: u,
                callState: Te,
                arePeersActive: zr,
                isSelfScreenSharing: kt,
                isInMiniPlayer: jr,
                isVideoCall: L,
                isVideoMuted: Wt,
                onRingParticipant: Rr,
                participantsWithoutSelf: Sr,
                participantStates: mt,
                selfMicMuted: Ct,
                isCallOutgoing: We,
              }),
            })),
            (s[128] = zr),
            (s[129] = u),
            (s[130] = Te),
            (s[131] = mt),
            (s[132] = Sr),
            (s[133] = We),
            (s[134] = Ct),
            (s[135] = kt),
            (s[136] = L),
            (s[137] = Wt),
            (s[138] = jr),
            (s[139] = Kr))
          : (Kr = s[139]),
          (Dr = Kr));
      } else if (Cr) {
        var Qr = C.isContextInPopoutWindow
            ? v.videoContainerPopout
            : v.videoContainer,
          Xr;
        s[140] !== u ||
        s[141] !== Te ||
        s[142] !== Ct ||
        s[143] !== tr ||
        s[144] !== kt ||
        s[145] !== Wt ||
        s[146] !== Mn ||
        s[147] !== Ht
          ? ((Xr = c.jsx(
              o("WAWebVoipUiVideoCallLoadable").WAWebVoipUiVideoCallLoadable,
              {
                callState: Te,
                isCallLinkLobby: !0,
                isVideoMuted: Wt,
                showPeerVideo: !1,
                showSelfPreview: Ht,
                callLogMsg: u,
                selfMicMuted: Ct,
                isSelfScreenSharing: kt,
                isSelfHandRaised: tr,
                selfReaction: Mn,
              },
            )),
            (s[140] = u),
            (s[141] = Te),
            (s[142] = Ct),
            (s[143] = tr),
            (s[144] = kt),
            (s[145] = Wt),
            (s[146] = Mn),
            (s[147] = Ht),
            (s[148] = Xr))
          : (Xr = s[148]);
        var Yr;
        (s[149] !== Qr || s[150] !== Xr
          ? ((Yr = c.jsx(o("WAWebFlex.react").FlexItem, {
              testid: void 0,
              grow: 1,
              xstyle: Qr,
              children: Xr,
            })),
            (s[149] = Qr),
            (s[150] = Xr),
            (s[151] = Yr))
          : (Yr = s[151]),
          (Dr = Yr));
      } else if (nn && !Be) {
        var Jr = kt && !C.isContextInPopoutWindow && !m,
          Zr = C.isContextInPopoutWindow
            ? v.videoContainerPopout
            : v.videoContainer,
          eo = yn != null ? yn : void 0,
          to;
        s[152] !== u ||
        s[153] !== Te ||
        s[154] !== pt ||
        s[155] !== cn ||
        s[156] !== tn ||
        s[157] !== en ||
        s[158] !== re ||
        s[159] !== Ct ||
        s[160] !== Jr ||
        s[161] !== kt ||
        s[162] !== Wt ||
        s[163] !== Mn ||
        s[164] !== Ht ||
        s[165] !== eo
          ? ((to = c.jsx(
              o("WAWebVoipUiVideoCallLoadable").WAWebVoipUiVideoCallLoadable,
              {
                callState: Te,
                peerJid: eo,
                isCompactLayout: re,
                isScreenShareBannerVisible: Jr,
                isVideoMuted: Wt,
                peerVideoPaused: tn,
                showPeerVideo: en,
                showSelfPreview: Ht,
                callLogMsg: u,
                peerMicMuted: pt,
                selfMicMuted: Ct,
                isSelfScreenSharing: kt,
                videoAnimateInDelay: o("WAWebMoveResizeConstants")
                  .MIN_HEIGHT_CHANGE_ANIMATION_DURATION,
                peerReconnectingState: cn,
                selfReaction: Mn,
              },
            )),
            (s[152] = u),
            (s[153] = Te),
            (s[154] = pt),
            (s[155] = cn),
            (s[156] = tn),
            (s[157] = en),
            (s[158] = re),
            (s[159] = Ct),
            (s[160] = Jr),
            (s[161] = kt),
            (s[162] = Wt),
            (s[163] = Mn),
            (s[164] = Ht),
            (s[165] = eo),
            (s[166] = to))
          : (to = s[166]);
        var no;
        s[167] !== u || s[168] !== Te || s[169] !== We || s[170] !== yn
          ? ((no =
              Te !== o("WAWebVoipWaCallEnums").CallState.CallActive &&
              !We &&
              c.jsx(r("WAWebCallParticipantInfo.react"), {
                userId:
                  yn != null
                    ? o("WAWebWidFactory").createUserWidOrThrow(yn)
                    : void 0,
                imageSize: "auto",
                callStateText: o("WAWebCallLogUtils").getCallStateText(Te, u),
                xstyle: [v.videoCallOverlay, v.surfaceElevated],
              })),
            (s[167] = u),
            (s[168] = Te),
            (s[169] = We),
            (s[170] = yn),
            (s[171] = no))
          : (no = s[171]);
        var ro;
        (s[172] !== Zr || s[173] !== to || s[174] !== no
          ? ((ro = c.jsxs(o("WAWebFlex.react").FlexItem, {
              testid: void 0,
              grow: 1,
              xstyle: Zr,
              children: [to, no],
            })),
            (s[172] = Zr),
            (s[173] = to),
            (s[174] = no),
            (s[175] = ro))
          : (ro = s[175]),
          (Dr = ro));
      } else {
        var oo;
        (s[176] !== u ||
        s[177] !== Te ||
        s[178] !== pt ||
        s[179] !== bt ||
        s[180] !== In ||
        s[181] !== We ||
        s[182] !== re ||
        s[183] !== Ct ||
        s[184] !== kt ||
        s[185] !== Xe ||
        s[186] !== L ||
        s[187] !== Wt ||
        s[188] !== $n
          ? ((oo = c.jsx(r("WAWebVoipVoiceCallContainer.react"), {
              callLogMsg: u,
              callState: Te,
              hasCameraAvailable: bt,
              isCallActive: In,
              isCallOutgoing: We,
              isCompactLayout: re,
              isTabVisible: Xe,
              isVideoCall: L,
              isVideoMuted: Wt,
              peerMicMuted: pt,
              peerReaction: $n,
              selfMicMuted: Ct,
              isSelfScreenSharing: kt,
            })),
            (s[176] = u),
            (s[177] = Te),
            (s[178] = pt),
            (s[179] = bt),
            (s[180] = In),
            (s[181] = We),
            (s[182] = re),
            (s[183] = Ct),
            (s[184] = kt),
            (s[185] = Xe),
            (s[186] = L),
            (s[187] = Wt),
            (s[188] = $n),
            (s[189] = oo))
          : (oo = s[189]),
          (Dr = oo));
      }
      var ao = En && !Rn,
        io = Te != null && !ao,
        lo;
      if (
        s[190] !== io ||
        s[191] !== ze ||
        s[192] !== u ||
        s[193] !== Te ||
        s[194] !== _r ||
        s[195] !== mt ||
        s[196] !== Sr ||
        s[197] !== lr ||
        s[198] !== sr ||
        s[199] !== ur ||
        s[200] !== At ||
        s[201] !== cr ||
        s[202] !== dr ||
        s[203] !== mr ||
        s[204] !== pr ||
        s[205] !== bt ||
        s[206] !== It ||
        s[207] !== In ||
        s[208] !== We ||
        s[209] !== Be ||
        s[210] !== Cr ||
        s[211] !== Ue ||
        s[212] !== ht ||
        s[213] !== Ct ||
        s[214] !== Ne ||
        s[215] !== tr ||
        s[216] !== kt ||
        s[217] !== L ||
        s[218] !== Wt ||
        s[219] !== me ||
        s[220] !== hr ||
        s[221] !== C.isContextInPopoutWindow ||
        s[222] !== C.isDocPip ||
        s[223] !== Mn ||
        s[224] !== fr ||
        s[225] !== ft
      ) {
        var so, uo, co, mo;
        ((lo = io
          ? c.jsx(o("WAWebFlex.react").FlexRow, {
              grow: 0,
              shrink: 0,
              basis: "auto",
              xstyle: [
                v.fullWidth,
                o("WDSColorStyles.stylex").WDSBackgroundColorStyles
                  .backgroundWashPlain,
              ],
              style:
                C.isContextInPopoutWindow && Ue
                  ? {
                      width: Ne ? b : "100%",
                      transition:
                        "width 300ms cubic-bezier(0.1, 0.82, 0.25, 1)",
                    }
                  : void 0,
              children: c.jsx(r("WAWebVoipCallControls.react"), {
                callState: Te,
                chat:
                  (so = o("WAWebChatCollection").ChatCollection.get(
                    u.id.remote,
                  )) != null
                    ? so
                    : ze,
                connectedParticipantsCount: _r,
                isVideoCall: L,
                isCallRinging: Be,
                isCallActive: In,
                isConnectedLonely: Cr,
                isInLobby: fr,
                buttonCustomizations: hr,
                isMuted: Ct,
                isSelfHandRaised: tr,
                isVideoMuted: Wt,
                hasCameraAvailable: bt,
                isSelfScreenSharing: kt,
                isAnyPeerScreenSharing: It,
                isGroupCall: Ue,
                isCallLink:
                  (uo =
                    (co = r("WAWebCallCollection").activeCall) == null
                      ? void 0
                      : co.isCallLink) != null
                    ? uo
                    : !1,
                showVideoToggle:
                  ((mo = r("WAWebCallCollection").activeCall) == null
                    ? void 0
                    : mo.isCallLink) !== !0 || L,
                layoutMode: me,
                onLayoutModeToggle: At,
                onAccept: function () {
                  lr();
                },
                onReject: function () {
                  ur();
                },
                onEnd: function () {
                  sr();
                },
                onMuteToggle: function () {
                  cr();
                },
                onRaiseHandToggle: function () {
                  dr();
                },
                onReactionSelect: function (t) {
                  mr(t);
                },
                onRingParticipant: Rr,
                onSendMessage: function () {
                  var e,
                    t,
                    n = r("WAWebCallCollection").activeCall,
                    a =
                      (e =
                        (t = ze == null ? void 0 : ze.id) != null
                          ? t
                          : n == null
                            ? void 0
                            : n.groupJid) != null
                        ? e
                        : u.id.remote;
                  a != null &&
                    o("WAWebVoipActionRequestOpenChat").requestOpenChat(a);
                },
                onToggleParticipantDrawer: se,
                onVideoMuteToggle: function () {
                  pr();
                },
                participantStates: mt,
                participantsWithoutSelf: Sr,
                isLinkedGroupCall: ht,
                showSendMessage: ft && !C.isDocPip,
                selfReaction: Mn,
                isCallOutgoing: We,
              }),
            })
          : null),
          (s[190] = io),
          (s[191] = ze),
          (s[192] = u),
          (s[193] = Te),
          (s[194] = _r),
          (s[195] = mt),
          (s[196] = Sr),
          (s[197] = lr),
          (s[198] = sr),
          (s[199] = ur),
          (s[200] = At),
          (s[201] = cr),
          (s[202] = dr),
          (s[203] = mr),
          (s[204] = pr),
          (s[205] = bt),
          (s[206] = It),
          (s[207] = In),
          (s[208] = We),
          (s[209] = Be),
          (s[210] = Cr),
          (s[211] = Ue),
          (s[212] = ht),
          (s[213] = Ct),
          (s[214] = Ne),
          (s[215] = tr),
          (s[216] = kt),
          (s[217] = L),
          (s[218] = Wt),
          (s[219] = me),
          (s[220] = hr),
          (s[221] = C.isContextInPopoutWindow),
          (s[222] = C.isDocPip),
          (s[223] = Mn),
          (s[224] = fr),
          (s[225] = ft),
          (s[226] = lo));
      } else lo = s[226];
      var po = lo,
        _o;
      e: {
        if (On == null) {
          _o = null;
          break e;
        }
        var fo;
        if (s[227] !== On.jid) {
          var go = o("WAWebContactCollection").ContactCollection.get(On.jid);
          ((fo =
            go != null
              ? o("WAWebFrontendContactGetters").getDisplayName(go)
              : On.jid.toString()),
            (s[227] = On.jid),
            (s[228] = fo));
        } else fo = s[228];
        _o = fo;
      }
      var ho = _o,
        yo;
      s[229] !== sr || s[230] !== C.windowEl
        ? ((yo = function () {
            (sr(o("WAWebVoipSignalingEnums").EndCallReason.Unknown),
              o("useWAWebVoipWindowSetup").onReactVoipUiCrash(C.windowEl));
          }),
          (s[229] = sr),
          (s[230] = C.windowEl),
          (s[231] = yo))
        : (yo = s[231]);
      var Co;
      s[232] === Symbol.for("react.memo_cache_sentinel")
        ? ((Co = [
            v.voipContainer,
            o("WDSColorStyles.stylex").WDSColorStyles.persistentAlwaysWhite,
            o("WDSColorStyles.stylex").WDSBackgroundColorStyles
              .backgroundWashPlain,
          ]),
          (s[232] = Co))
        : (Co = s[232]);
      var bo;
      s[233] !== m || s[234] !== kt || s[235] !== C.isContextInPopoutWindow
        ? ((bo =
            kt &&
            !C.isContextInPopoutWindow &&
            !m &&
            c.jsx(r("WAWebVoipScreenShareBanner.react"), {})),
          (s[233] = m),
          (s[234] = kt),
          (s[235] = C.isContextInPopoutWindow),
          (s[236] = bo))
        : (bo = s[236]);
      var vo;
      s[237] === Symbol.for("react.memo_cache_sentinel")
        ? ((vo = [v.mainUIContainer, v.fullWidth]), (s[237] = vo))
        : (vo = s[237]);
      var So;
      s[238] !== Ue || s[239] !== Ne || s[240] !== C.isContextInPopoutWindow
        ? ((So =
            C.isContextInPopoutWindow && Ue
              ? {
                  width: Ne ? b : "100%",
                  transition: "width 300ms cubic-bezier(0.1, 0.82, 0.25, 1)",
                }
              : void 0),
          (s[238] = Ue),
          (s[239] = Ne),
          (s[240] = C.isContextInPopoutWindow),
          (s[241] = So))
        : (So = s[241]);
      var Ro;
      s[242] !== Dr || s[243] !== So
        ? ((Ro = c.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            justify: "center",
            grow: 1,
            shrink: 1,
            basis: "auto",
            xstyle: vo,
            style: So,
            children: Dr,
          })),
          (s[242] = Dr),
          (s[243] = So),
          (s[244] = Ro))
        : (Ro = s[244]);
      var Lo;
      s[245] !== po || s[246] !== Ro
        ? ((Lo = c.jsxs(o("WAWebFlex.react").FlexColumn, {
            grow: 1,
            shrink: 1,
            basis: "auto",
            xstyle: v.mainColumn,
            children: [Ro, po],
          })),
          (s[245] = po),
          (s[246] = Ro),
          (s[247] = Lo))
        : (Lo = s[247]);
      var Eo;
      s[248] !== br
        ? ((Eo =
            br &&
            r("WAWebCallCollection").activeCall &&
            c.jsx(o("WAWebFlex.react").FlexItem, {
              shrink: 0,
              xstyle: v.sharePanelWrapper,
              children: c.jsx(r("WAWebVoipCallLinkSharePanel.react"), {
                call: r("WAWebCallCollection").activeCall,
              }),
            })),
          (s[248] = br),
          (s[249] = Eo))
        : (Eo = s[249]);
      var ko;
      s[250] !== Lo || s[251] !== Eo
        ? ((ko = c.jsxs(o("WAWebFlex.react").FlexRow, {
            grow: 1,
            xstyle: v.fullWidth,
            children: [Lo, Eo],
          })),
          (s[250] = Lo),
          (s[251] = Eo),
          (s[252] = ko))
        : (ko = s[252]);
      var Io;
      s[253] !== ho ||
      s[254] !== On ||
      s[255] !== ar ||
      s[256] !== ir ||
      s[257] !== In ||
      s[258] !== m ||
      s[259] !== C.isContextInPopoutWindow
        ? ((Io =
            On != null &&
            ho != null &&
            In &&
            !(!C.isContextInPopoutWindow && m) &&
            c.jsx(r("WAWebVoipAvUpgradeBanner.react"), {
              contactName: ho,
              onAccept: ar,
              onIgnore: ir,
            })),
          (s[253] = ho),
          (s[254] = On),
          (s[255] = ar),
          (s[256] = ir),
          (s[257] = In),
          (s[258] = m),
          (s[259] = C.isContextInPopoutWindow),
          (s[260] = Io))
        : (Io = s[260]);
      var To;
      s[261] !== On ||
      s[262] !== Wn ||
      s[263] !== qn ||
      s[264] !== Un ||
      s[265] !== Ir ||
      s[266] !== In ||
      s[267] !== Ne ||
      s[268] !== Tr ||
      s[269] !== Vn ||
      s[270] !== Hn
        ? ((To =
            In &&
            Vn &&
            Hn > 0 &&
            On == null &&
            !Ne &&
            !Tr &&
            c.jsx(r("WAWebVoipWaitingRoomRequestBanner.react"), {
              firstUserName: Wn,
              onApprove: qn,
              onDeny: Un,
              onSeeAll: Ir,
              waitingRoomUsersCount: Hn,
            })),
          (s[261] = On),
          (s[262] = Wn),
          (s[263] = qn),
          (s[264] = Un),
          (s[265] = Ir),
          (s[266] = In),
          (s[267] = Ne),
          (s[268] = Tr),
          (s[269] = Vn),
          (s[270] = Hn),
          (s[271] = To))
        : (To = s[271]);
      var Do;
      s[272] !== En
        ? ((Do =
            o("WAWebCurrentUser").isEmployee() &&
            !En &&
            c.jsx(r("WAWebBugnub.react").Bugnub, {})),
          (s[272] = En),
          (s[273] = Do))
        : (Do = s[273]);
      var xo;
      s[274] !== In
        ? ((xo =
            o("WAWebCurrentUser").isEmployee() &&
            In &&
            c.jsx(r("WAWebVoipDebugInfoOverlay.react"), {})),
          (s[274] = In),
          (s[275] = xo))
        : (xo = s[275]);
      var $o;
      s[276] !== In
        ? (($o =
            o("WAWebCurrentUser").isEmployee() &&
            In &&
            c.jsx(r("WAWebVoipNetworkConditionerOverlay.react"), {})),
          (s[276] = In),
          (s[277] = $o))
        : ($o = s[277]);
      var Po;
      s[278] !== io
        ? ((Po = c.jsx(
            o("WAWebVoipUiToastContainer.react").WAWebVoipUiToastContainer,
            { areCallControlsVisible: io, ref: k },
          )),
          (s[278] = io),
          (s[279] = Po))
        : (Po = s[279]);
      var No;
      if (
        s[280] !== ze ||
        s[281] !== u ||
        s[282] !== mt ||
        s[283] !== Sr ||
        s[284] !== Pe ||
        s[285] !== Ue ||
        s[286] !== ht ||
        s[287] !== Ne ||
        s[288] !== L ||
        s[289] !== C.isContextInPopoutWindow
      ) {
        var Mo;
        ((No =
          C.isContextInPopoutWindow &&
          Ue &&
          c.jsx(r("WAWebVelocityTransitionGroup"), {
            transitionName: r("WAWebL10N").isRTL()
              ? "slide-left-rtl"
              : "slide-left",
            component: "div",
            children: Ne
              ? c.jsx(
                  r("WAWebVoipCallParticipantsDrawer.react"),
                  {
                    call: r("WAWebCallCollection").activeCall,
                    chat:
                      (Mo = o("WAWebChatCollection").ChatCollection.get(
                        u.id.remote,
                      )) != null
                        ? Mo
                        : ze,
                    isLinkedGroupCall: ht,
                    isVideoCall: L,
                    onClose: ce,
                    onRingParticipant: Rr,
                    participantStates: mt,
                    participantsWithoutSelf: Sr,
                    showCloseButton: !Pe,
                  },
                  "participant-drawer",
                )
              : null,
          })),
          (s[280] = ze),
          (s[281] = u),
          (s[282] = mt),
          (s[283] = Sr),
          (s[284] = Pe),
          (s[285] = Ue),
          (s[286] = ht),
          (s[287] = Ne),
          (s[288] = L),
          (s[289] = C.isContextInPopoutWindow),
          (s[290] = No));
      } else No = s[290];
      var wo;
      s[291] !== bo ||
      s[292] !== ko ||
      s[293] !== Io ||
      s[294] !== To ||
      s[295] !== Do ||
      s[296] !== xo ||
      s[297] !== $o ||
      s[298] !== Po ||
      s[299] !== No ||
      s[300] !== ke
        ? ((wo = c.jsx(r("WAWebVoipDarkThemeRoot.react"), {
            ref: E,
            tabIndex: -1,
            xstyle: Co,
            children: c.jsxs(r("WAWebVoipUiContext").Provider, {
              value: ke,
              children: [bo, ko, Io, To, Do, xo, $o, Po, No],
            }),
          })),
          (s[291] = bo),
          (s[292] = ko),
          (s[293] = Io),
          (s[294] = To),
          (s[295] = Do),
          (s[296] = xo),
          (s[297] = $o),
          (s[298] = Po),
          (s[299] = No),
          (s[300] = ke),
          (s[301] = wo))
        : (wo = s[301]);
      var Ao;
      return (
        s[302] !== yo || s[303] !== wo
          ? ((Ao = c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
              name: "WAWebVoipUi",
              onError: yo,
              children: wo,
            })),
            (s[302] = yo),
            (s[303] = wo),
            (s[304] = Ao))
          : (Ao = s[304]),
        Ao
      );
    }
    function D(e) {
      o("WAWebVoipStartCall").inviteToCall(e);
    }
    function x() {
      var e = r("WAWebCallCollection").activeCall;
      if (e == null) return !1;
      try {
        var t = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
        return e.isHandRaisedForParticipant(t);
      } catch (e) {
        var n = e;
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: UI: Unable to get self JID for raised hand state",
                ])),
            )
            .catching(n instanceof Error ? n : r("err")(String(n))),
          !1
        );
      }
    }
    function $() {
      return r("WAWebAvUpgradeBannerState").getCurrentBanner();
    }
    function P() {
      var e, t;
      return (e =
        (t = r("WAWebCallCollection").activeCall) == null ||
        (t = t.peerJid) == null
          ? void 0
          : t.toJid()) != null
        ? e
        : "";
    }
    function N(e) {
      var t = r("WAWebCallCollection").activeCall;
      return t == null || e == null
        ? null
        : typeof e == "object" && e != null && "toString" in e
          ? t.getPeerReconnectingState(e)
          : null;
    }
    function M() {
      var e,
        t = r("WAWebCallCollection").activeCall;
      if (t == null || !t.isGroup) return null;
      var n = o("WAWebVoipLobbyUtils").getSolePeerInGroupCall(
        (e = t.groupCallParticipantsConnected) != null ? e : [],
      );
      return n == null ? null : t.getPeerReconnectingState(n);
    }
    function w() {
      var e = r("WAWebCallCollection").activeCall;
      return (e == null ? void 0 : e.peerJid) == null
        ? null
        : e.getPeerReconnectingState(e.peerJid);
    }
    function A() {
      var e,
        t = r("WAWebCallCollection").activeCall;
      if (t == null || !t.isGroup) return [!1, !1];
      var n = o("WAWebVoipLobbyUtils").getSolePeerInGroupCall(
        (e = t.groupCallParticipantsConnected) != null ? e : [],
      );
      if (n == null) return [!1, !1];
      var a = t.getParticipantVideoState(n);
      return [
        a === o("WAWebVoipWaCallEnums").VideoState.Enabled ||
          a === o("WAWebVoipWaCallEnums").VideoState.UpgradeAccept ||
          a === o("WAWebVoipWaCallEnums").VideoState.Paused,
        a === o("WAWebVoipWaCallEnums").VideoState.Paused,
      ];
    }
    function F() {
      var e = r("WAWebCallCollection").activeCall;
      return (e == null ? void 0 : e.peerVideoState) == null
        ? !1
        : e.peerVideoState === o("WAWebVoipWaCallEnums").VideoState.Paused;
    }
    function O() {
      var e, t;
      return (e =
        (t = r("WAWebCallCollection").activeCall) == null
          ? void 0
          : t.shouldShowPeerVideo()) != null
        ? e
        : !1;
    }
    function B() {
      var e, t;
      return (e =
        (t = r("WAWebCallCollection").activeCall) == null
          ? void 0
          : t.shouldShowSelfPreview()) != null
        ? e
        : !1;
    }
    function W() {
      var e, t;
      return (e =
        (t = r("WAWebCallCollection").activeCall) == null
          ? void 0
          : t.shouldShowVideoUI()) != null
        ? e
        : !1;
    }
    function q() {
      var e, t, n, o;
      return [
        (e =
          (t = r("WAWebCallCollection").activeCall) == null
            ? void 0
            : t.isSelfScreenSharing()) != null
          ? e
          : !1,
        (n =
          (o = r("WAWebCallCollection").activeCall) == null
            ? void 0
            : o.isAnyPeerScreenSharing()) != null
          ? n
          : !1,
      ];
    }
    function U() {
      var e, t;
      return (e =
        (t = r("WAWebCallCollection").activeCall) == null
          ? void 0
          : t.selfMicMuted) != null
        ? e
        : !1;
    }
    function V() {
      var e = r("WAWebCallCollection").activeCall;
      return (
        (e == null ? void 0 : e.isGroup) === !0 &&
        (e == null ? void 0 : e.groupJid) != null
      );
    }
    function H() {
      var e = r("WAWebCallCollection").activeCall;
      return e == null ? !1 : !e.isGroup || e.groupJid != null;
    }
    function G() {
      var e, t, n, o, a, i;
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
        (a =
          (i = r("WAWebCallCollection").activeCall) == null
            ? void 0
            : i.groupCallParticipantStates) != null
          ? a
          : new Map(),
      ];
    }
    function z() {
      var e,
        t = r("WAWebCallCollection").activeCall;
      if (t == null || !t.isGroup) return !1;
      var n = o("WAWebVoipLobbyUtils").getSolePeerInGroupCall(
        (e = t.groupCallParticipantsConnected) != null ? e : [],
      );
      return n != null ? t.isParticipantMicMuted(n) : !1;
    }
    function j() {
      var e, t;
      return (e =
        (t = r("WAWebCallCollection").activeCall) == null
          ? void 0
          : t.peerMicMuted) != null
        ? e
        : !1;
    }
    function K(e) {
      o("WAWebVoipActivityTracker").trackUiActivity(
        e
          ? o("WAWebVoipActivityTracker").VoipUiActivity.TAB_FULLSCREEN_ENTER
          : o("WAWebVoipActivityTracker").VoipUiActivity.TAB_FULLSCREEN_EXIT,
      );
    }
    function Q() {
      var e = X;
      return (
        document.addEventListener("visibilitychange", e),
        function () {
          document.removeEventListener("visibilitychange", e);
        }
      );
    }
    function X() {
      o("WAWebVoipActivityTracker").trackUiActivity(
        document.hidden
          ? o("WAWebVoipActivityTracker").VoipUiActivity.TAB_VISIBILITY_HIDDEN
          : o("WAWebVoipActivityTracker").VoipUiActivity.TAB_VISIBILITY_VISIBLE,
      );
    }
    function Y() {
      var e;
      return (e = r("WAWebCallCollection").activeCall) == null
        ? void 0
        : e.callLinkCreatorJid;
    }
    function J() {
      var e, t;
      return (e =
        (t = r("WAWebCallCollection").activeCall) == null
          ? void 0
          : t.isGroup) != null
        ? e
        : !1;
    }
    function Z() {
      var e, t;
      return (e =
        (t = r("WAWebCallCollection").activeCall) == null
          ? void 0
          : t.isInCallLinkPreview()) != null
        ? e
        : !1;
    }
    function ee() {
      var e;
      return (e = r("WAWebCallCollection").activeCall) == null
        ? void 0
        : e.getState();
    }
    function te(e) {
      return !e;
    }
    function ne() {
      o("WAWebVoipActivityTracker").trackUiActivity(
        o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_UI_MOUNTED,
      );
      var e = null,
        t = window.requestAnimationFrame(function () {
          (o("WAWebVoipActivityTracker").trackUiActivity(
            o("WAWebVoipActivityTracker").VoipUiActivity
              .VOIP_UI_EFFECTS_RUNNING,
          ),
            (e = window.requestAnimationFrame(re)));
        });
      return function () {
        (window.cancelAnimationFrame(t),
          e != null && window.cancelAnimationFrame(e));
      };
    }
    function re() {
      o("WAWebVoipActivityTracker").trackUiActivity(
        o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_UI_READY,
      );
    }
    l.default = S;
  },
  98,
);
