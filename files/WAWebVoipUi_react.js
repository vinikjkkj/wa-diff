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
      if (
        (y == null ? void 0 : y.isCallLink) === !0 &&
        y.callLinkState != null
      ) {
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
      if (
        p != null &&
        ((y == null ? void 0 : y.isCallLink) !== !0 ||
          (y == null ? void 0 : y.callLinkState) == null)
      ) {
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
        s = o("react-compiler-runtime").c(308),
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
      s[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ee = function (t, n) {
            var e;
            (e = k.current) == null ||
              e.showToast({
                message: t,
                type: "default",
                align: n != null ? n : "center",
              });
          }),
          (s[7] = Ee))
        : (Ee = s[7]);
      var ke = Ee,
        Ie;
      s[8] !== T
        ? ((Ie = { uiHeight: T, showCenteredToast: Le, showToast: ke }),
          (s[8] = T),
          (s[9] = Ie))
        : (Ie = s[9]);
      var Te = Ie,
        De;
      s[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((De = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.STATE,
          )),
          (s[10] = De))
        : (De = s[10]);
      var xe = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          De,
          ee,
        ),
        $e = g(xe),
        Pe,
        Ne;
      (s[11] !== xe
        ? ((Pe = function () {
            var e = $e.current;
            (($e.current = xe),
              e != null && xe == null
                ? o("WAWebVoipActivityTracker").trackUiActivity(
                    o("WAWebVoipActivityTracker").VoipUiActivity
                      .CALL_ENDED_SCREEN_SHOWN,
                  )
                : e !== xe &&
                  xe != null &&
                  o("WAWebVoipActivityTracker").trackUiActivity(
                    o("WAWebVoipActivityTracker").VoipUiActivity
                      .CALL_STATE_UI_TRANSITION,
                    String(xe),
                  ));
          }),
          (Ne = [xe]),
          (s[11] = xe),
          (s[12] = Pe),
          (s[13] = Ne))
        : ((Pe = s[12]), (Ne = s[13])),
        _(Pe, Ne));
      var Me =
          ((n = r("WAWebCallCollection").activeCall) == null
            ? void 0
            : n.isCallLink) === !0 &&
          xe === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely &&
          C.isContextInPopoutWindow,
        we = (ae || Me) && xe != null,
        Ae = we && C.isContextInPopoutWindow,
        Fe,
        Oe;
      (s[14] !== Ae
        ? ((Fe = function () {
            return (
              o("WAWebVoipWindowConstants").setIsSidebarVisible(Ae),
              function () {
                Ae && o("WAWebVoipWindowConstants").setIsSidebarVisible(!1);
              }
            );
          }),
          (Oe = [Ae]),
          (s[14] = Ae),
          (s[15] = Fe),
          (s[16] = Oe))
        : ((Fe = s[15]), (Oe = s[16])),
        _(Fe, Oe));
      var Be;
      s[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((Be = o("WAWebVoipEventConstants").getMultiChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.CALL_LINK_STATE,
            o("WAWebVoipEventConstants").VoipCallModelEvents.STATE,
          )),
          (s[17] = Be))
        : (Be = s[17]);
      var We = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          Be,
          Z,
        ),
        qe =
          xe === o("WAWebVoipWaCallEnums").CallState.ReceivedCall ||
          xe === o("WAWebVoipWaCallEnums").CallState.ReceivedCallWithoutOffer,
        Ue =
          xe === o("WAWebVoipWaCallEnums").CallState.Calling ||
          xe === o("WAWebVoipWaCallEnums").CallState.PreacceptReceived,
        Ve;
      s[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ve = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.IS_GROUP,
          )),
          (s[18] = Ve))
        : (Ve = s[18]);
      var He = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          Ve,
          J,
        ),
        Ge;
      s[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ge = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents
              .CALL_LINK_CREATOR_JID,
          )),
          (s[19] = Ge))
        : (Ge = s[19]);
      var ze = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          Ge,
          Y,
        ),
        je;
      s[20] !== ze
        ? ((je = ze
            ? o("WAWebChatCollection").ChatCollection.getChatByAccountLid(
                o("WAWebWidFactory").asUserLidOrThrow(ze),
              )
            : null),
          (s[20] = ze),
          (s[21] = je))
        : (je = s[21]);
      var Ke = je,
        Qe;
      s[22] !== xe || s[23] !== He
        ? ((Qe = o("WAWebVoipLobbyUtils").isLobbyApplicableForCallState(
            He,
            xe,
          )),
          (s[22] = xe),
          (s[23] = He),
          (s[24] = Qe))
        : (Qe = s[24]);
      var Xe = Qe,
        Ye = h(!document.hidden),
        Je = Ye[0],
        Ze = Ye[1],
        et = g(null),
        tt,
        nt;
      (s[25] !== Ue || s[26] !== qe
        ? ((tt = function () {
            if (qe && !Ue) {
              var e = function () {
                o("WAWebABProps").getABPropConfigValue(
                  "enable_web_voip_anr_optimizations",
                )
                  ? (et.current != null && window.clearTimeout(et.current),
                    (et.current = window.setTimeout(function () {
                      ((et.current = null), Ze(!document.hidden));
                    }, 200)))
                  : Ze(!document.hidden);
              };
              return (
                document.addEventListener("visibilitychange", e),
                function () {
                  (document.removeEventListener("visibilitychange", e),
                    et.current != null &&
                      (window.clearTimeout(et.current), (et.current = null)));
                }
              );
            }
          }),
          (nt = [qe, Ue]),
          (s[25] = Ue),
          (s[26] = qe),
          (s[27] = tt),
          (s[28] = nt))
        : ((tt = s[27]), (nt = s[28])),
        _(tt, nt));
      var rt;
      (s[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((rt = []), (s[29] = rt))
        : (rt = s[29]),
        _(Q, rt),
        o("WAWebFullscreenDetection").useOnFullscreenChange(K));
      var ot, at;
      (s[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((ot = function () {
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
          (at = []),
          (s[30] = ot),
          (s[31] = at))
        : ((ot = s[30]), (at = s[31])),
        _(ot, at));
      var it;
      s[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((it = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_MIC_MUTED,
          )),
          (s[32] = it))
        : (it = s[32]);
      var lt = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          it,
          j,
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
          "participantMicStateChange " + st,
          z,
        ),
        ct;
      s[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((ct = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents
              .GROUP_CALL_PARTICIPANT_STATES,
          )),
          (s[34] = ct))
        : (ct = s[34]);
      var dt = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          ct,
          G,
        ),
        mt = dt[0],
        pt = dt[1],
        _t = dt[2],
        ft = He && mt.length === 2 ? ut : lt,
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
          H,
        ),
        yt;
      s[36] === Symbol.for("react.memo_cache_sentinel")
        ? ((yt = o("WAWebVoipEventConstants").getMultiChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.IS_GROUP,
            o("WAWebVoipEventConstants").VoipCallModelEvents.GROUP_JID,
          )),
          (s[36] = yt))
        : (yt = s[36]);
      var Ct = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          yt,
          V,
        ),
        bt;
      s[37] === Symbol.for("react.memo_cache_sentinel")
        ? ((bt = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.SELF_MIC_MUTED,
          )),
          (s[37] = bt))
        : (bt = s[37]);
      var vt = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          bt,
          U,
        ),
        St = r("useWAWebVoipCameraAvailability")(),
        Rt;
      s[38] === Symbol.for("react.memo_cache_sentinel")
        ? ((Rt = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.SELF_VIDEO_STATE,
          )),
          (s[38] = Rt))
        : (Rt = s[38]);
      var Lt;
      s[39] !== L
        ? ((Lt = function () {
            return r("WAWebCallCollection").activeCall
              ? r("WAWebCallCollection").activeCall.selfVideoState !==
                  o("WAWebVoipWaCallEnums").VideoState.Enabled
              : !L;
          }),
          (s[39] = L),
          (s[40] = Lt))
        : (Lt = s[40]);
      var Et = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          Rt,
          Lt,
        ),
        kt;
      s[41] === Symbol.for("react.memo_cache_sentinel")
        ? ((kt = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents
              .SCREEN_SHARE_STATES,
          )),
          (s[41] = kt))
        : (kt = s[41]);
      var It = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          kt,
          q,
        ),
        Tt = It[0],
        Dt = It[1],
        xt = Tt || Dt,
        $t = h(xt),
        Pt = $t[0],
        Nt = $t[1];
      xt !== Pt &&
        (Nt(xt),
        xt && me !== "speaker"
          ? (Ce(me), pe("speaker"))
          : !xt && ye != null && (pe(ye), Ce(null)));
      var Mt = h(!1),
        wt = Mt[0],
        At = Mt[1];
      !wt && xt && (At(!0), me !== "speaker" && pe("speaker"));
      var Ft;
      s[42] !== xt || s[43] !== me
        ? ((Ft = function () {
            xt ||
              (o("WAWebVoipActivityTracker").trackUiActivity(
                o("WAWebVoipActivityTracker").VoipUiActivity
                  .CONTROL_PANEL_LAYOUT_MODE_TOGGLE,
              ),
              me === "speaker"
                ? (ge(null), Se(null), pe("grid"))
                : pe("speaker"));
          }),
          (s[42] = xt),
          (s[43] = me),
          (s[44] = Ft))
        : (Ft = s[44]);
      var Ot = Ft,
        Bt;
      s[45] !== xt || s[46] !== me || s[47] !== ve
        ? ((Bt = function (t) {
            ge(function (e) {
              var n = e != null && e.equals(t);
              return n
                ? (ve === "grid" && !xt && pe("grid"), Se(null), null)
                : (me !== "speaker" && Se(me), pe("speaker"), t);
            });
          }),
          (s[45] = xt),
          (s[46] = me),
          (s[47] = ve),
          (s[48] = Bt))
        : (Bt = s[48]);
      var Wt = Bt,
        qt;
      (s[49] !== xe || s[50] !== Dt || s[51] !== Tt
        ? ((qt = {
            callState: xe,
            isSelfScreenSharing: Tt,
            isAnyPeerScreenSharing: Dt,
            showCenteredToast: Le,
          }),
          (s[49] = xe),
          (s[50] = Dt),
          (s[51] = Tt),
          (s[52] = qt))
        : (qt = s[52]),
        r("useWAWebVoipCallToasts")(qt));
      var Ut = Et || !St,
        Vt;
      s[53] === Symbol.for("react.memo_cache_sentinel")
        ? ((Vt = o("WAWebVoipEventConstants").getMultiChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.VIDEO_STATE,
            o("WAWebVoipEventConstants").VoipCallModelEvents.IS_VIDEO,
          )),
          (s[53] = Vt))
        : (Vt = s[53]);
      var Ht = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          Vt,
          W,
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
          B,
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
          O,
        ),
        Qt;
      s[56] === Symbol.for("react.memo_cache_sentinel")
        ? ((Qt = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.VIDEO_STATE,
          )),
          (s[56] = Qt))
        : (Qt = s[56]);
      var Xt = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          Qt,
          F,
        ),
        Yt;
      s[57] === Symbol.for("react.memo_cache_sentinel")
        ? ((Yt = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents
              .GROUP_CALL_PARTICIPANT_STATES,
          )),
          (s[57] = Yt))
        : (Yt = s[57]);
      var Jt = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          "participantVideoStateChange " + Yt,
          A,
        ),
        Zt = Jt[0],
        en = Jt[1],
        tn = He && mt.length === 2,
        nn = tn ? Zt : Kt,
        rn = tn ? en : Xt,
        on = tn ? Ht || nn : Ht,
        an;
      s[58] === Symbol.for("react.memo_cache_sentinel")
        ? ((an = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_RECONNECTING,
          )),
          (s[58] = an))
        : (an = s[58]);
      var ln = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          an,
          w,
        ),
        sn,
        un;
      if (s[59] === Symbol.for("react.memo_cache_sentinel")) {
        var cn;
        ((sn = (cn = o("WAWebVoipEventConstants")).getChangeEvent(
          cn.VoipCallModelEvents.PEER_RECONNECTING,
        )),
          (un = cn.getChangeEvent(
            cn.VoipCallModelEvents.GROUP_CALL_PARTICIPANT_STATES,
          )),
          (s[59] = sn),
          (s[60] = un));
      } else ((sn = s[59]), (un = s[60]));
      var dn = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          sn + " " + un,
          M,
        ),
        mn = tn ? dn : ln,
        pn = N,
        _n;
      s[61] === Symbol.for("react.memo_cache_sentinel")
        ? ((_n = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_JID,
          )),
          (s[61] = _n))
        : (_n = s[61]);
      var fn = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          _n,
          P,
        ),
        gn;
      e: {
        if (He) {
          var hn;
          if (s[62] !== mt) {
            var yn, Cn;
            ((hn =
              (yn =
                (Cn = o("WAWebVoipLobbyUtils").getSolePeerInGroupCall(mt)) ==
                null
                  ? void 0
                  : Cn.toJid()) != null
                ? yn
                : null),
              (s[62] = mt),
              (s[63] = hn));
          } else hn = s[63];
          gn = hn;
          break e;
        }
        gn = fn;
      }
      var bn = gn,
        vn;
      s[64] !== m ||
      s[65] !== Ue ||
      s[66] !== qe ||
      s[67] !== C.isContextInPopoutWindow
        ? ((vn = {
            isCallRinging: qe,
            isCallOutgoing: Ue,
            isCallActiveInPopoutWindow: m,
            isContextInPopoutWindow: C.isContextInPopoutWindow,
          }),
          (s[64] = m),
          (s[65] = Ue),
          (s[66] = qe),
          (s[67] = C.isContextInPopoutWindow),
          (s[68] = vn))
        : (vn = s[68]);
      var Sn = r("useWAWebVoipPostCallSurvey")(vn),
        Rn = Sn.handleSurveyDismiss,
        Ln = Sn.handleSurveySubmit,
        En = Sn.isSurveyDismissed,
        kn = Sn.onSurveyInteract,
        In = Sn.shouldShowPostCallSurvey,
        Tn =
          (a =
            (i = r("WAWebCallCollection").activeCall) == null
              ? void 0
              : i.isCallLink) != null
            ? a
            : !1,
        Dn =
          xe === o("WAWebVoipWaCallEnums").CallState.CallActive ||
          xe === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely,
        xn,
        $n;
      (s[69] !== Dn || s[70] !== L || s[71] !== C.isContextInPopoutWindow
        ? ((xn = function () {
            Tn &&
              Dn &&
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
          ($n = [Tn, Dn, L, C.isContextInPopoutWindow]),
          (s[69] = Dn),
          (s[70] = L),
          (s[71] = C.isContextInPopoutWindow),
          (s[72] = xn),
          (s[73] = $n))
        : ((xn = s[72]), ($n = s[73])),
        _(xn, $n));
      var Pn = h(null),
        Nn = Pn[0],
        Mn = Pn[1],
        wn = h(null),
        An = wn[0],
        Fn = wn[1],
        On,
        Bn;
      (s[74] === Symbol.for("react.memo_cache_sentinel")
        ? ((On = function () {
            var t = r("WAWebCallCollection").activeCall;
            if (!t) {
              Mn(null);
              return;
            }
            var n = function () {
              var n = t.peerJid;
              if (n != null) {
                var a = t.getReactionForParticipant(n);
                Mn(a);
              }
              try {
                var i = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
                  l = t.getReactionForParticipant(i);
                Fn(l);
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
          (Bn = []),
          (s[74] = On),
          (s[75] = Bn))
        : ((On = s[74]), (Bn = s[75])),
        _(On, Bn),
        r("useWAWebVoipWakeLock")(),
        r("useWAWebVoipCameraHealthCheck")(Dn));
      var Wn = r("useWAWebEventTargetValue")(
          r("WAWebAvUpgradeBannerState"),
          "change",
          $,
        ),
        qn = r("useWAWebWaitingRoomState")(),
        Un = qn.firstWaitingRoomUserName,
        Vn = qn.handleWaitingRoomApprove,
        Hn = qn.handleWaitingRoomDeny,
        Gn = qn.isWaitingRoomAdmin,
        zn = qn.waitingRoomUsersCount,
        jn,
        Kn;
      (s[76] !== xe
        ? ((jn = function () {
            (xe == null ||
              xe === o("WAWebVoipWaCallEnums").CallState.CallStateEnding ||
              xe === o("WAWebVoipWaCallEnums").CallState.None) &&
              r("WAWebAvUpgradeBannerState").clearAllBanners();
          }),
          (Kn = [xe]),
          (s[76] = xe),
          (s[77] = jn),
          (s[78] = Kn))
        : ((jn = s[77]), (Kn = s[78])),
        _(jn, Kn));
      var Qn, Xn;
      (s[79] !== xe
        ? ((Qn = function () {
            (xe == null ||
              xe === o("WAWebVoipWaCallEnums").CallState.CallStateEnding ||
              xe === o("WAWebVoipWaCallEnums").CallState.None) &&
              o("WAWebToastManager").ToastManager.close(
                o("WAWebVoipWebBridgeApi").MICROPHONE_SILENCE_TOAST_ID,
              );
          }),
          (Xn = [xe]),
          (s[79] = xe),
          (s[80] = Qn),
          (s[81] = Xn))
        : ((Qn = s[80]), (Xn = s[81])),
        _(Qn, Xn));
      var Yn, Jn;
      (s[82] !== u || s[83] !== xe
        ? ((Yn = function () {
            xe == null &&
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
          (Jn = [xe, u]),
          (s[82] = u),
          (s[83] = xe),
          (s[84] = Yn),
          (s[85] = Jn))
        : ((Yn = s[84]), (Jn = s[85])),
        _(Yn, Jn));
      var Zn = r("WAWebCallCollection").activeCall,
        er,
        tr;
      (s[86] === Symbol.for("react.memo_cache_sentinel")
        ? ((er = function () {
            var e,
              t,
              n,
              o = (e = Zn == null ? void 0 : Zn.id) != null ? e : null,
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
              (r("WAWebCallCollection").lastActiveCall = Zn));
          }),
          (tr = [Zn]),
          (s[86] = er),
          (s[87] = tr))
        : ((er = s[86]), (tr = s[87])),
        _(er, tr));
      var nr;
      s[88] === Symbol.for("react.memo_cache_sentinel")
        ? ((nr = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.RAISED_HAND_STATES,
          )),
          (s[88] = nr))
        : (nr = s[88]);
      var rr = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          nr,
          x,
        ),
        or = (l = Wn == null ? void 0 : Wn.jid) != null ? l : null,
        ar;
      s[89] !== vt || s[90] !== L || s[91] !== Ut || s[92] !== or
        ? ((ar = {
            currentBannerJid: or,
            isMuted: vt,
            isVideoCall: L,
            isVideoMuted: Ut,
          }),
          (s[89] = vt),
          (s[90] = L),
          (s[91] = Ut),
          (s[92] = or),
          (s[93] = ar))
        : (ar = s[93]);
      var ir = r("useWAWebVoipCallHandlers")(ar),
        lr = ir.handleBannerAccept,
        sr = ir.handleBannerIgnore,
        ur = ir.handleClickAccept,
        cr = ir.handleClickEnd,
        dr = ir.handleClickReject,
        mr = ir.handleMuteToggle,
        pr = ir.handleRaiseHandToggle,
        _r = ir.handleReactionSelect,
        fr = ir.handleVideoMuteToggle,
        gr = mt.length,
        hr = Xe,
        yr;
      s[94] !== xe || s[95] !== Ue || s[96] !== hr
        ? ((yr = hr
            ? o("WAWebVoipLobbyUtils").getLobbyButtonDisplayProps(Ue, xe)
            : void 0),
          (s[94] = xe),
          (s[95] = Ue),
          (s[96] = hr),
          (s[97] = yr))
        : (yr = s[97]);
      var Cr = yr,
        br = !hr && gr > 2,
        vr =
          He &&
          xe === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely &&
          gr <= 1,
        Sr =
          Tn &&
          vr &&
          !C.isContextInPopoutWindow &&
          !m &&
          !f &&
          r("WAWebCallCollection").activeCall != null,
        Rr;
      s[98] !== pt || s[99] !== He
        ? ((Rr = He
            ? o("WAWebVoipLobbyUtils").getParticipantsWithoutSelf(pt)
            : []),
          (s[98] = pt),
          (s[99] = He),
          (s[100] = Rr))
        : (Rr = s[100]);
      var Lr = Rr,
        Er = D,
        kr;
      s[101] === Symbol.for("react.memo_cache_sentinel")
        ? ((kr = function () {
            ie(!0);
          }),
          (s[101] = kr))
        : (kr = s[101]);
      var Ir = kr,
        Tr = r("useWAWebWaitingRoomSeeAll")(
          C.isContextInPopoutWindow,
          Ir,
          _t,
          Lr,
          Er,
        ),
        Dr = Tr.handleWaitingRoomSeeAll,
        xr = Tr.isParticipantsModalOpen,
        $r;
      if (In && !En) {
        if (!(m && !C.isContextInPopoutWindow)) {
          var Pr;
          (s[102] !== Rn || s[103] !== Ln || s[104] !== re || s[105] !== kn
            ? ((Pr = c.jsx(
                o("WAWebVoipPostCallSurveyLoadable")
                  .WAWebVoipPostCallSurveyLoadable,
                { isCompact: re, onDismiss: Rn, onInteract: kn, onSubmit: Ln },
              )),
              (s[102] = Rn),
              (s[103] = Ln),
              (s[104] = re),
              (s[105] = kn),
              (s[106] = Pr))
            : (Pr = s[106]),
            ($r = Pr));
        }
      } else if (xe == null) {
        if (o("WAWebCallLogUtils").shouldShowCallEndedScreen(u)) {
          var Nr;
          (s[107] === Symbol.for("react.memo_cache_sentinel")
            ? ((Nr = c.jsx(r("WAWebVoipCallEndedDisplay.react"), {})),
              (s[107] = Nr))
            : (Nr = s[107]),
            ($r = Nr));
        }
      } else if (!C.isContextInPopoutWindow && !C.isDocPip && (m || f)) {
        var Mr;
        (s[108] !== u
          ? ((Mr = c.jsx(r("WAWebVoipCallActiveInExternalPlayer.react"), {
              msg: u,
            })),
            (s[108] = u),
            (s[109] = Mr))
          : (Mr = s[109]),
          ($r = Mr));
      } else if (We && r("WAWebCallCollection").activeCall != null) {
        var wr;
        (s[110] === Symbol.for("react.memo_cache_sentinel")
          ? ((wr = c.jsx(r("WAWebVoipCallLinkPreview.react"), {
              call: r("WAWebCallCollection").activeCall,
            })),
            (s[110] = wr))
          : (wr = s[110]),
          ($r = wr));
      } else if (br) {
        var Ar, Fr;
        if (
          s[111] !== Ke ||
          s[112] !== (u == null || (Ar = u.id) == null ? void 0 : Ar.remote)
        ) {
          var Or, Br, Wr;
          ((Fr =
            (Or = o("WAWebChatCollection").ChatCollection.get(
              u == null || (Br = u.id) == null ? void 0 : Br.remote,
            )) != null
              ? Or
              : Ke),
            (s[111] = Ke),
            (s[112] = u == null || (Wr = u.id) == null ? void 0 : Wr.remote),
            (s[113] = Fr));
        } else Fr = s[113];
        var qr = !L,
          Ur = L ? Wt : void 0,
          Vr;
        if (s[114] === Symbol.for("react.memo_cache_sentinel")) {
          var Hr, Gr;
          ((Vr =
            (Hr =
              (Gr = r("WAWebCallCollection").activeCall) == null
                ? void 0
                : Gr.getScreenSharingPeerJid()) != null
              ? Hr
              : null),
            (s[114] = Vr));
        } else Vr = s[114];
        var zr;
        (s[115] !== xe ||
        s[116] !== mt ||
        s[117] !== Lr ||
        s[118] !== Ct ||
        s[119] !== Tt ||
        s[120] !== me ||
        s[121] !== fe ||
        s[122] !== Fr ||
        s[123] !== qr ||
        s[124] !== Ur
          ? ((zr = c.jsx(
              o("WAWebVoipUiVideoGroupCallLoadable")
                .WAWebVoipUiVideoGroupCallLoadable,
              {
                callState: xe,
                groupChat: Fr,
                groupCallParticipantsConnected: mt,
                groupParticipantsWithoutSelf: Lr,
                isGroupAudioCall: qr,
                isLinkedGroupCall: Ct,
                isSelfScreenSharing: Tt,
                getPeerReconnectingState: pn,
                layoutMode: me,
                onPinParticipant: Ur,
                pinnedParticipantJid: fe,
                screenSharingPeerJid: Vr,
              },
            )),
            (s[115] = xe),
            (s[116] = mt),
            (s[117] = Lr),
            (s[118] = Ct),
            (s[119] = Tt),
            (s[120] = me),
            (s[121] = fe),
            (s[122] = Fr),
            (s[123] = qr),
            (s[124] = Ur),
            (s[125] = zr))
          : (zr = s[125]),
          ($r = zr));
      } else if (hr) {
        var jr;
        s[126] !== _t || s[127] !== pt
          ? ((jr = o("WAWebVoipLobbyUtils").getArePeersActiveInCall(pt, _t)),
            (s[126] = _t),
            (s[127] = pt),
            (s[128] = jr))
          : (jr = s[128]);
        var Kr = jr,
          Qr = !C.isContextInPopoutWindow && !C.isDocPip,
          Xr;
        (s[129] !== Kr ||
        s[130] !== u ||
        s[131] !== xe ||
        s[132] !== _t ||
        s[133] !== Lr ||
        s[134] !== Ue ||
        s[135] !== vt ||
        s[136] !== Tt ||
        s[137] !== L ||
        s[138] !== Ut ||
        s[139] !== Qr
          ? ((Xr = c.jsx(o("WAWebFlex.react").FlexItem, {
              testid: void 0,
              grow: 1,
              xstyle: v.videoContainer,
              children: c.jsx(r("WAWebVoipUiLobby.react"), {
                callLogMsg: u,
                callState: xe,
                arePeersActive: Kr,
                isSelfScreenSharing: Tt,
                isInMiniPlayer: Qr,
                isVideoCall: L,
                isVideoMuted: Ut,
                onRingParticipant: Er,
                participantsWithoutSelf: Lr,
                participantStates: _t,
                selfMicMuted: vt,
                isCallOutgoing: Ue,
              }),
            })),
            (s[129] = Kr),
            (s[130] = u),
            (s[131] = xe),
            (s[132] = _t),
            (s[133] = Lr),
            (s[134] = Ue),
            (s[135] = vt),
            (s[136] = Tt),
            (s[137] = L),
            (s[138] = Ut),
            (s[139] = Qr),
            (s[140] = Xr))
          : (Xr = s[140]),
          ($r = Xr));
      } else if (vr) {
        var Yr = C.isContextInPopoutWindow
            ? v.videoContainerPopout
            : v.videoContainer,
          Jr;
        s[141] !== u ||
        s[142] !== xe ||
        s[143] !== vt ||
        s[144] !== rr ||
        s[145] !== Tt ||
        s[146] !== Ut ||
        s[147] !== An ||
        s[148] !== zt
          ? ((Jr = c.jsx(
              o("WAWebVoipUiVideoCallLoadable").WAWebVoipUiVideoCallLoadable,
              {
                callState: xe,
                isCallLinkLobby: !0,
                isVideoMuted: Ut,
                showPeerVideo: !1,
                showSelfPreview: zt,
                callLogMsg: u,
                selfMicMuted: vt,
                isSelfScreenSharing: Tt,
                isSelfHandRaised: rr,
                selfReaction: An,
              },
            )),
            (s[141] = u),
            (s[142] = xe),
            (s[143] = vt),
            (s[144] = rr),
            (s[145] = Tt),
            (s[146] = Ut),
            (s[147] = An),
            (s[148] = zt),
            (s[149] = Jr))
          : (Jr = s[149]);
        var Zr;
        (s[150] !== Yr || s[151] !== Jr
          ? ((Zr = c.jsx(o("WAWebFlex.react").FlexItem, {
              testid: void 0,
              grow: 1,
              xstyle: Yr,
              children: Jr,
            })),
            (s[150] = Yr),
            (s[151] = Jr),
            (s[152] = Zr))
          : (Zr = s[152]),
          ($r = Zr));
      } else if (on && !qe) {
        var eo = Tt && !C.isContextInPopoutWindow && !m,
          to = C.isContextInPopoutWindow
            ? v.videoContainerPopout
            : v.videoContainer,
          no = bn != null ? bn : void 0,
          ro;
        s[153] !== u ||
        s[154] !== xe ||
        s[155] !== ft ||
        s[156] !== mn ||
        s[157] !== rn ||
        s[158] !== nn ||
        s[159] !== re ||
        s[160] !== vt ||
        s[161] !== eo ||
        s[162] !== Tt ||
        s[163] !== Ut ||
        s[164] !== An ||
        s[165] !== zt ||
        s[166] !== no
          ? ((ro = c.jsx(
              o("WAWebVoipUiVideoCallLoadable").WAWebVoipUiVideoCallLoadable,
              {
                callState: xe,
                peerJid: no,
                isCompactLayout: re,
                isScreenShareBannerVisible: eo,
                isVideoMuted: Ut,
                peerVideoPaused: rn,
                showPeerVideo: nn,
                showSelfPreview: zt,
                callLogMsg: u,
                peerMicMuted: ft,
                selfMicMuted: vt,
                isSelfScreenSharing: Tt,
                videoAnimateInDelay: o("WAWebMoveResizeConstants")
                  .MIN_HEIGHT_CHANGE_ANIMATION_DURATION,
                peerReconnectingState: mn,
                selfReaction: An,
              },
            )),
            (s[153] = u),
            (s[154] = xe),
            (s[155] = ft),
            (s[156] = mn),
            (s[157] = rn),
            (s[158] = nn),
            (s[159] = re),
            (s[160] = vt),
            (s[161] = eo),
            (s[162] = Tt),
            (s[163] = Ut),
            (s[164] = An),
            (s[165] = zt),
            (s[166] = no),
            (s[167] = ro))
          : (ro = s[167]);
        var oo;
        s[168] !== u || s[169] !== xe || s[170] !== Ue || s[171] !== bn
          ? ((oo =
              xe !== o("WAWebVoipWaCallEnums").CallState.CallActive &&
              !Ue &&
              c.jsx(r("WAWebCallParticipantInfo.react"), {
                userId:
                  bn != null
                    ? o("WAWebWidFactory").createUserWidOrThrow(bn)
                    : void 0,
                imageSize: "auto",
                callStateText: o("WAWebCallLogUtils").getCallStateText(xe, u),
                xstyle: [v.videoCallOverlay, v.surfaceElevated],
              })),
            (s[168] = u),
            (s[169] = xe),
            (s[170] = Ue),
            (s[171] = bn),
            (s[172] = oo))
          : (oo = s[172]);
        var ao;
        (s[173] !== to || s[174] !== ro || s[175] !== oo
          ? ((ao = c.jsxs(o("WAWebFlex.react").FlexItem, {
              testid: void 0,
              grow: 1,
              xstyle: to,
              children: [ro, oo],
            })),
            (s[173] = to),
            (s[174] = ro),
            (s[175] = oo),
            (s[176] = ao))
          : (ao = s[176]),
          ($r = ao));
      } else {
        var io;
        (s[177] !== u ||
        s[178] !== xe ||
        s[179] !== ft ||
        s[180] !== St ||
        s[181] !== Dn ||
        s[182] !== Ue ||
        s[183] !== re ||
        s[184] !== vt ||
        s[185] !== Tt ||
        s[186] !== Je ||
        s[187] !== L ||
        s[188] !== Ut ||
        s[189] !== Nn
          ? ((io = c.jsx(r("WAWebVoipVoiceCallContainer.react"), {
              callLogMsg: u,
              callState: xe,
              hasCameraAvailable: St,
              isCallActive: Dn,
              isCallOutgoing: Ue,
              isCompactLayout: re,
              isTabVisible: Je,
              isVideoCall: L,
              isVideoMuted: Ut,
              peerMicMuted: ft,
              peerReaction: Nn,
              selfMicMuted: vt,
              isSelfScreenSharing: Tt,
            })),
            (s[177] = u),
            (s[178] = xe),
            (s[179] = ft),
            (s[180] = St),
            (s[181] = Dn),
            (s[182] = Ue),
            (s[183] = re),
            (s[184] = vt),
            (s[185] = Tt),
            (s[186] = Je),
            (s[187] = L),
            (s[188] = Ut),
            (s[189] = Nn),
            (s[190] = io))
          : (io = s[190]),
          ($r = io));
      }
      var lo = In && !En,
        so = xe != null && !lo,
        uo;
      if (
        s[191] !== so ||
        s[192] !== Ke ||
        s[193] !== u ||
        s[194] !== xe ||
        s[195] !== gr ||
        s[196] !== _t ||
        s[197] !== Lr ||
        s[198] !== ur ||
        s[199] !== cr ||
        s[200] !== dr ||
        s[201] !== Ot ||
        s[202] !== mr ||
        s[203] !== pr ||
        s[204] !== _r ||
        s[205] !== fr ||
        s[206] !== St ||
        s[207] !== Dt ||
        s[208] !== Dn ||
        s[209] !== Ue ||
        s[210] !== qe ||
        s[211] !== vr ||
        s[212] !== He ||
        s[213] !== Ct ||
        s[214] !== vt ||
        s[215] !== we ||
        s[216] !== rr ||
        s[217] !== Tt ||
        s[218] !== L ||
        s[219] !== Ut ||
        s[220] !== me ||
        s[221] !== Cr ||
        s[222] !== C.isContextInPopoutWindow ||
        s[223] !== C.isDocPip ||
        s[224] !== An ||
        s[225] !== hr ||
        s[226] !== ht
      ) {
        var co, mo, po, _o;
        ((uo = so
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
                C.isContextInPopoutWindow && He
                  ? {
                      width: we ? b : "100%",
                      transition:
                        "width 300ms cubic-bezier(0.1, 0.82, 0.25, 1)",
                    }
                  : void 0,
              children: c.jsx(r("WAWebVoipCallControls.react"), {
                callState: xe,
                chat:
                  (co = o("WAWebChatCollection").ChatCollection.get(
                    u.id.remote,
                  )) != null
                    ? co
                    : Ke,
                connectedParticipantsCount: gr,
                isVideoCall: L,
                isCallRinging: qe,
                isCallActive: Dn,
                isConnectedLonely: vr,
                isInLobby: hr,
                buttonCustomizations: Cr,
                isMuted: vt,
                isSelfHandRaised: rr,
                isVideoMuted: Ut,
                hasCameraAvailable: St,
                isSelfScreenSharing: Tt,
                isAnyPeerScreenSharing: Dt,
                isGroupCall: He,
                isCallLink:
                  (mo =
                    (po = r("WAWebCallCollection").activeCall) == null
                      ? void 0
                      : po.isCallLink) != null
                    ? mo
                    : !1,
                showVideoToggle:
                  ((_o = r("WAWebCallCollection").activeCall) == null
                    ? void 0
                    : _o.isCallLink) !== !0 || L,
                layoutMode: me,
                onLayoutModeToggle: Ot,
                onAccept: function () {
                  ur();
                },
                onReject: function () {
                  dr();
                },
                onEnd: function () {
                  cr();
                },
                onMuteToggle: function () {
                  mr();
                },
                onRaiseHandToggle: function () {
                  pr();
                },
                onReactionSelect: function (t) {
                  _r(t);
                },
                onRingParticipant: Er,
                onSendMessage: function () {
                  var e,
                    t,
                    n = r("WAWebCallCollection").activeCall,
                    a =
                      (e =
                        (t = Ke == null ? void 0 : Ke.id) != null
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
                  fr();
                },
                participantStates: _t,
                participantsWithoutSelf: Lr,
                isLinkedGroupCall: Ct,
                showSendMessage: ht && !C.isDocPip,
                selfReaction: An,
                isCallOutgoing: Ue,
              }),
            })
          : null),
          (s[191] = so),
          (s[192] = Ke),
          (s[193] = u),
          (s[194] = xe),
          (s[195] = gr),
          (s[196] = _t),
          (s[197] = Lr),
          (s[198] = ur),
          (s[199] = cr),
          (s[200] = dr),
          (s[201] = Ot),
          (s[202] = mr),
          (s[203] = pr),
          (s[204] = _r),
          (s[205] = fr),
          (s[206] = St),
          (s[207] = Dt),
          (s[208] = Dn),
          (s[209] = Ue),
          (s[210] = qe),
          (s[211] = vr),
          (s[212] = He),
          (s[213] = Ct),
          (s[214] = vt),
          (s[215] = we),
          (s[216] = rr),
          (s[217] = Tt),
          (s[218] = L),
          (s[219] = Ut),
          (s[220] = me),
          (s[221] = Cr),
          (s[222] = C.isContextInPopoutWindow),
          (s[223] = C.isDocPip),
          (s[224] = An),
          (s[225] = hr),
          (s[226] = ht),
          (s[227] = uo));
      } else uo = s[227];
      var fo = uo,
        go;
      e: {
        if (Wn == null) {
          go = null;
          break e;
        }
        var ho;
        if (s[228] !== Wn.jid) {
          var yo = o("WAWebContactCollection").ContactCollection.get(Wn.jid);
          ((ho =
            yo != null
              ? o("WAWebFrontendContactGetters").getDisplayName(yo)
              : Wn.jid.toString()),
            (s[228] = Wn.jid),
            (s[229] = ho));
        } else ho = s[229];
        go = ho;
      }
      var Co = go,
        bo;
      s[230] !== cr || s[231] !== C.windowEl
        ? ((bo = function () {
            (cr(o("WAWebVoipSignalingEnums").EndCallReason.Unknown),
              o("useWAWebVoipWindowSetup").onReactVoipUiCrash(C.windowEl));
          }),
          (s[230] = cr),
          (s[231] = C.windowEl),
          (s[232] = bo))
        : (bo = s[232]);
      var vo;
      s[233] === Symbol.for("react.memo_cache_sentinel")
        ? ((vo = [
            v.voipContainer,
            o("WDSColorStyles.stylex").WDSColorStyles.persistentAlwaysWhite,
            o("WDSColorStyles.stylex").WDSBackgroundColorStyles
              .backgroundWashPlain,
          ]),
          (s[233] = vo))
        : (vo = s[233]);
      var So;
      s[234] !== m || s[235] !== Tt || s[236] !== C.isContextInPopoutWindow
        ? ((So =
            Tt &&
            !C.isContextInPopoutWindow &&
            !m &&
            c.jsx(r("WAWebVoipScreenShareBanner.react"), {})),
          (s[234] = m),
          (s[235] = Tt),
          (s[236] = C.isContextInPopoutWindow),
          (s[237] = So))
        : (So = s[237]);
      var Ro;
      s[238] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ro = [v.mainUIContainer, v.fullWidth]), (s[238] = Ro))
        : (Ro = s[238]);
      var Lo;
      s[239] !== He || s[240] !== we || s[241] !== C.isContextInPopoutWindow
        ? ((Lo =
            C.isContextInPopoutWindow && He
              ? {
                  width: we ? b : "100%",
                  transition: "width 300ms cubic-bezier(0.1, 0.82, 0.25, 1)",
                }
              : void 0),
          (s[239] = He),
          (s[240] = we),
          (s[241] = C.isContextInPopoutWindow),
          (s[242] = Lo))
        : (Lo = s[242]);
      var Eo;
      s[243] !== $r || s[244] !== Lo
        ? ((Eo = c.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            justify: "center",
            grow: 1,
            shrink: 1,
            basis: "auto",
            xstyle: Ro,
            style: Lo,
            children: $r,
          })),
          (s[243] = $r),
          (s[244] = Lo),
          (s[245] = Eo))
        : (Eo = s[245]);
      var ko;
      s[246] !== fo || s[247] !== Eo
        ? ((ko = c.jsxs(o("WAWebFlex.react").FlexColumn, {
            grow: 1,
            shrink: 1,
            basis: "auto",
            xstyle: v.mainColumn,
            children: [Eo, fo],
          })),
          (s[246] = fo),
          (s[247] = Eo),
          (s[248] = ko))
        : (ko = s[248]);
      var Io;
      s[249] !== Sr
        ? ((Io =
            Sr &&
            r("WAWebCallCollection").activeCall &&
            c.jsx(o("WAWebFlex.react").FlexItem, {
              shrink: 0,
              xstyle: v.sharePanelWrapper,
              children: c.jsx(r("WAWebVoipCallLinkSharePanel.react"), {
                call: r("WAWebCallCollection").activeCall,
              }),
            })),
          (s[249] = Sr),
          (s[250] = Io))
        : (Io = s[250]);
      var To;
      s[251] !== ko || s[252] !== Io
        ? ((To = c.jsxs(o("WAWebFlex.react").FlexRow, {
            grow: 1,
            xstyle: v.fullWidth,
            children: [ko, Io],
          })),
          (s[251] = ko),
          (s[252] = Io),
          (s[253] = To))
        : (To = s[253]);
      var Do;
      s[254] !== Co ||
      s[255] !== Wn ||
      s[256] !== lr ||
      s[257] !== sr ||
      s[258] !== Dn ||
      s[259] !== m ||
      s[260] !== C.isContextInPopoutWindow
        ? ((Do =
            Wn != null &&
            Co != null &&
            Dn &&
            !(!C.isContextInPopoutWindow && m) &&
            c.jsx(r("WAWebVoipAvUpgradeBanner.react"), {
              contactName: Co,
              onAccept: lr,
              onIgnore: sr,
            })),
          (s[254] = Co),
          (s[255] = Wn),
          (s[256] = lr),
          (s[257] = sr),
          (s[258] = Dn),
          (s[259] = m),
          (s[260] = C.isContextInPopoutWindow),
          (s[261] = Do))
        : (Do = s[261]);
      var xo;
      s[262] !== Wn ||
      s[263] !== Un ||
      s[264] !== Vn ||
      s[265] !== Hn ||
      s[266] !== Dr ||
      s[267] !== Dn ||
      s[268] !== m ||
      s[269] !== we ||
      s[270] !== xr ||
      s[271] !== Gn ||
      s[272] !== C.isContextInPopoutWindow ||
      s[273] !== zn
        ? ((xo =
            Dn &&
            Gn &&
            zn > 0 &&
            Wn == null &&
            !C.isContextInPopoutWindow &&
            !m &&
            !we &&
            !xr &&
            c.jsx(r("WAWebVoipWaitingRoomRequestBanner.react"), {
              firstUserName: Un,
              onApprove: Vn,
              onDeny: Hn,
              onSeeAll: Dr,
              waitingRoomUsersCount: zn,
            })),
          (s[262] = Wn),
          (s[263] = Un),
          (s[264] = Vn),
          (s[265] = Hn),
          (s[266] = Dr),
          (s[267] = Dn),
          (s[268] = m),
          (s[269] = we),
          (s[270] = xr),
          (s[271] = Gn),
          (s[272] = C.isContextInPopoutWindow),
          (s[273] = zn),
          (s[274] = xo))
        : (xo = s[274]);
      var $o;
      s[275] !== In
        ? (($o =
            o("WAWebCurrentUser").isEmployee() &&
            !In &&
            c.jsx(r("WAWebBugnub.react").Bugnub, {})),
          (s[275] = In),
          (s[276] = $o))
        : ($o = s[276]);
      var Po;
      s[277] !== Dn
        ? ((Po =
            o("WAWebCurrentUser").isEmployee() &&
            Dn &&
            c.jsx(r("WAWebVoipDebugInfoOverlay.react"), {})),
          (s[277] = Dn),
          (s[278] = Po))
        : (Po = s[278]);
      var No;
      s[279] !== Dn
        ? ((No =
            o("WAWebCurrentUser").isEmployee() &&
            Dn &&
            c.jsx(r("WAWebVoipNetworkConditionerOverlay.react"), {})),
          (s[279] = Dn),
          (s[280] = No))
        : (No = s[280]);
      var Mo;
      s[281] !== so
        ? ((Mo = c.jsx(
            o("WAWebVoipUiToastContainer.react").WAWebVoipUiToastContainer,
            { areCallControlsVisible: so, ref: k },
          )),
          (s[281] = so),
          (s[282] = Mo))
        : (Mo = s[282]);
      var wo;
      if (
        s[283] !== Ke ||
        s[284] !== u ||
        s[285] !== _t ||
        s[286] !== Lr ||
        s[287] !== Me ||
        s[288] !== He ||
        s[289] !== Ct ||
        s[290] !== we ||
        s[291] !== L ||
        s[292] !== C.isContextInPopoutWindow
      ) {
        var Ao;
        ((wo =
          C.isContextInPopoutWindow &&
          He &&
          c.jsx(r("WAWebVelocityTransitionGroup"), {
            transitionName: r("WAWebL10N").isRTL()
              ? "slide-left-rtl"
              : "slide-left",
            component: "div",
            children: we
              ? c.jsx(
                  r("WAWebVoipCallParticipantsDrawer.react"),
                  {
                    call: r("WAWebCallCollection").activeCall,
                    chat:
                      (Ao = o("WAWebChatCollection").ChatCollection.get(
                        u.id.remote,
                      )) != null
                        ? Ao
                        : Ke,
                    isLinkedGroupCall: Ct,
                    isVideoCall: L,
                    onClose: ce,
                    onRingParticipant: Er,
                    participantStates: _t,
                    participantsWithoutSelf: Lr,
                    showCloseButton: !Me,
                  },
                  "participant-drawer",
                )
              : null,
          })),
          (s[283] = Ke),
          (s[284] = u),
          (s[285] = _t),
          (s[286] = Lr),
          (s[287] = Me),
          (s[288] = He),
          (s[289] = Ct),
          (s[290] = we),
          (s[291] = L),
          (s[292] = C.isContextInPopoutWindow),
          (s[293] = wo));
      } else wo = s[293];
      var Fo;
      s[294] !== So ||
      s[295] !== To ||
      s[296] !== Do ||
      s[297] !== xo ||
      s[298] !== $o ||
      s[299] !== Po ||
      s[300] !== No ||
      s[301] !== Mo ||
      s[302] !== wo ||
      s[303] !== Te
        ? ((Fo = c.jsx(r("WAWebVoipDarkThemeRoot.react"), {
            ref: E,
            tabIndex: -1,
            xstyle: vo,
            children: c.jsxs(r("WAWebVoipUiContext").Provider, {
              value: Te,
              children: [So, To, Do, xo, $o, Po, No, Mo, wo],
            }),
          })),
          (s[294] = So),
          (s[295] = To),
          (s[296] = Do),
          (s[297] = xo),
          (s[298] = $o),
          (s[299] = Po),
          (s[300] = No),
          (s[301] = Mo),
          (s[302] = wo),
          (s[303] = Te),
          (s[304] = Fo))
        : (Fo = s[304]);
      var Oo;
      return (
        s[305] !== bo || s[306] !== Fo
          ? ((Oo = c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
              name: "WAWebVoipUi",
              onError: bo,
              children: Fo,
            })),
            (s[305] = bo),
            (s[306] = Fo),
            (s[307] = Oo))
          : (Oo = s[307]),
        Oo
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
