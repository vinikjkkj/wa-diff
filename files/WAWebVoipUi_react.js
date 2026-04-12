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
        n = e.callLogMsg;
      _(function () {
        o("WAWebVoipActivityTracker").trackUiActivity(
          o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_UI_MOUNTING,
        );
      }, []);
      var a = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.MSG,
          ),
          function () {
            var e;
            return (e = r("WAWebCallCollection").activeCall) == null
              ? void 0
              : e.msg;
          },
        ),
        i = (t = n != null ? n : a) != null ? t : null,
        l = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection"),
          o("WAWebVoipEventConstants").getMultiChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.CALL_LINK_STATE,
            o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL,
          ),
          function () {
            var e;
            return (e = r("WAWebCallCollection").activeCall) == null
              ? void 0
              : e.callLinkState;
          },
        ),
        s = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.STATE,
          ),
          function () {
            var e;
            return (e = r("WAWebCallCollection").activeCall) == null
              ? void 0
              : e.getState();
          },
        ),
        u = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection"),
          "change:pendingCallLink",
          function () {
            return r("WAWebCallCollection").pendingCallLink;
          },
        ),
        d = r("useWAWebCallLinkEndedState")(),
        m = d.isCallLinkEnded,
        p = r("WAWebCallCollection").activeCall,
        f = n == null && (p == null ? void 0 : p.isInCallLinkPreview()) === !0,
        h = m && i == null,
        y = i == null && (p == null ? void 0 : p.isInCallLinkLobby()) === !0,
        C = g({ ended: !1, preview: !1, lobby: !1 });
      if (
        (_(
          function () {
            var e = C.current,
              t = h,
              n = f && p != null,
              r = y;
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
              (C.current = { ended: t, preview: n, lobby: r }));
          },
          [h, f, y, p],
        ),
        u != null && p == null && i == null)
      )
        return c.jsx(r("WAWebVoipCallLinkLoadingPreview.react"), {
          isVideo: u.isVideo,
        });
      if (h)
        return c.jsx(r("WAWebVoipDarkThemeRoot.react"), {
          xstyle: [
            v.voipContainer,
            o("WDSColorStyles.stylex").WDSColorStyles.persistentAlwaysWhite,
            o("WDSColorStyles.stylex").WDSBackgroundColorStyles
              .backgroundWashPlain,
          ],
          children: c.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            justify: "center",
            grow: 1,
            shrink: 1,
            basis: "auto",
            xstyle: [v.mainUIContainer, v.fullWidth],
            children: c.jsx(r("WAWebVoipCallEndedDisplay.react"), {}),
          }),
        });
      if ((p == null ? void 0 : p.isCallLink) === !0) {
        if (p.isInCallLinkPreview() && !p.isInCallLinkLobby())
          return c.jsx(r("WAWebVoipDarkThemeRoot.react"), {
            xstyle: [
              v.voipContainer,
              o("WDSColorStyles.stylex").WDSColorStyles.persistentAlwaysWhite,
              o("WDSColorStyles.stylex").WDSBackgroundColorStyles
                .backgroundWashPlain,
            ],
            children: c.jsx(r("WAWebVoipCallLinkPreview.react"), { call: p }),
          });
        if (
          p.callLinkState == null ||
          p.callLinkState === o("WAWebVoipWaCallEnums").CallLinkState.QuerySent
        ) {
          var b, S;
          return c.jsx(r("WAWebVoipCallLinkLoadingPreview.react"), {
            isVideo:
              (b =
                (S = u == null ? void 0 : u.isVideo) != null ? S : p.isVideo) !=
              null
                ? b
                : !1,
          });
        }
        var L = p.getState();
        if (
          L !== o("WAWebVoipWaCallEnums").CallState.ConnectedLonely &&
          L !== o("WAWebVoipWaCallEnums").CallState.CallActive
        ) {
          var E, k;
          return c.jsx(r("WAWebVoipCallLinkLoadingPreview.react"), {
            isVideo:
              (E =
                (k = u == null ? void 0 : u.isVideo) != null ? k : p.isVideo) !=
              null
                ? E
                : !1,
          });
        }
      }
      return i == null
        ? u != null
          ? c.jsx(r("WAWebVoipCallLinkLoadingPreview.react"), {
              isVideo: u.isVideo,
            })
          : null
        : u != null && (p == null ? void 0 : p.isCallLink) !== !0
          ? c.jsx(r("WAWebVoipCallLinkLoadingPreview.react"), {
              isVideo: u.isVideo,
            })
          : c.jsx(R, { callLogMsg: i });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(t) {
      var n,
        a,
        i,
        l,
        u,
        d,
        C,
        S,
        R,
        L = t.callLogMsg;
      _(function () {
        o("WAWebVoipActivityTracker").trackUiActivity(
          o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_UI_MOUNTED,
        );
        var e = null,
          t = window.requestAnimationFrame(function () {
            (o("WAWebVoipActivityTracker").trackUiActivity(
              o("WAWebVoipActivityTracker").VoipUiActivity
                .VOIP_UI_EFFECTS_RUNNING,
            ),
              (e = window.requestAnimationFrame(function () {
                o("WAWebVoipActivityTracker").trackUiActivity(
                  o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_UI_READY,
                );
              })));
          });
        return function () {
          (window.cancelAnimationFrame(t),
            e != null && window.cancelAnimationFrame(e));
        };
      }, []);
      var E = r("useWAWebEventTargetValue")(
          o("WAWebVoipUiPopoutWindowPortalContainer.react")
            .WAWebVoipUiPopoutWindowEventEmitter,
          "setPopoutWindowProps",
          o("WAWebVoipUiPopoutWindowPortalContainer.react")
            .getIsCallActiveInPopoutWindow,
        ),
        k = r("useWAWebEventTargetValue")(
          o("WAWebVoipUiDocPipPortalContainer.react")
            .WAWebVoipUiDocPipEventEmitter,
          "docPipOpenStateChanged",
          o("WAWebVoipUiDocPipPortalContainer.react").getIsDocPipWindowOpen,
        ),
        I = p(r("WAWebVoipUiPopoutWindowContext")),
        T = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.IS_VIDEO,
          ),
          function () {
            var e, t;
            return (e =
              (t = r("WAWebCallCollection").activeCall) == null
                ? void 0
                : t.isVideo) != null
              ? e
              : L.isVideoCall;
          },
        ),
        D = g(null),
        x = g(null),
        $ = h(null),
        P = $[0],
        N = $[1],
        M = P == null ? !1 : P < y,
        w = h(!1),
        A = w[0],
        F = w[1],
        O = m(function () {
          (o("WAWebVoipActivityTracker").trackUiActivity(
            o("WAWebVoipActivityTracker").VoipUiActivity
              .CONTROL_PANEL_PARTICIPANT_DRAWER_TOGGLE,
          ),
            F(function (e) {
              return !e;
            }));
        }, []),
        B = m(function () {
          F(!1);
        }, []),
        W = h("grid"),
        q = W[0],
        U = W[1],
        V = h(null),
        H = V[0],
        G = V[1],
        z = h(null),
        j = z[0],
        K = z[1],
        Q = h(null),
        X = Q[0],
        Y = Q[1],
        J = m(function (e) {
          var t;
          (t = x.current) == null ||
            t.showToast({ message: e, type: "default", align: "center" });
        }, []),
        Z = f(
          function () {
            return { uiHeight: P, showCenteredToast: J };
          },
          [P, J],
        ),
        ee = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.STATE,
          ),
          function () {
            var e;
            return (e = r("WAWebCallCollection").activeCall) == null
              ? void 0
              : e.getState();
          },
        ),
        te = g(ee);
      _(
        function () {
          var e = te.current;
          ((te.current = ee),
            e != null && ee == null
              ? o("WAWebVoipActivityTracker").trackUiActivity(
                  o("WAWebVoipActivityTracker").VoipUiActivity
                    .CALL_ENDED_SCREEN_SHOWN,
                )
              : e !== ee &&
                ee != null &&
                o("WAWebVoipActivityTracker").trackUiActivity(
                  o("WAWebVoipActivityTracker").VoipUiActivity
                    .CALL_STATE_UI_TRANSITION,
                  String(ee),
                ));
        },
        [ee],
      );
      var ne =
          ((n = r("WAWebCallCollection").activeCall) == null
            ? void 0
            : n.isCallLink) === !0 &&
          ee === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely &&
          I.isContextInPopoutWindow,
        re = (A || ne) && ee != null,
        oe = re && I.isContextInPopoutWindow;
      _(
        function () {
          return (
            o("WAWebVoipWindowConstants").setIsSidebarVisible(oe),
            function () {
              oe && o("WAWebVoipWindowConstants").setIsSidebarVisible(!1);
            }
          );
        },
        [oe],
      );
      var ae = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          o("WAWebVoipEventConstants").getMultiChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.CALL_LINK_STATE,
            o("WAWebVoipEventConstants").VoipCallModelEvents.STATE,
          ),
          function () {
            var e, t;
            return (e =
              (t = r("WAWebCallCollection").activeCall) == null
                ? void 0
                : t.isInCallLinkPreview()) != null
              ? e
              : !1;
          },
        ),
        ie =
          ee === o("WAWebVoipWaCallEnums").CallState.ReceivedCall ||
          ee === o("WAWebVoipWaCallEnums").CallState.ReceivedCallWithoutOffer,
        le =
          ee === o("WAWebVoipWaCallEnums").CallState.Calling ||
          ee === o("WAWebVoipWaCallEnums").CallState.PreacceptReceived,
        se = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.IS_GROUP,
          ),
          function () {
            var e, t;
            return (e =
              (t = r("WAWebCallCollection").activeCall) == null
                ? void 0
                : t.isGroup) != null
              ? e
              : !1;
          },
        ),
        ue = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents
              .CALL_LINK_CREATOR_JID,
          ),
          function () {
            var e;
            return (e = r("WAWebCallCollection").activeCall) == null
              ? void 0
              : e.callLinkCreatorJid;
          },
        ),
        ce = ue
          ? o("WAWebChatCollection").ChatCollection.getChatByAccountLid(
              o("WAWebWidFactory").asUserLidOrThrow(ue),
            )
          : null,
        de = o("WAWebVoipLobbyUtils").isLobbyApplicableForCallState(se, ee),
        me = h(!document.hidden),
        pe = me[0],
        _e = me[1],
        fe = g(null);
      (_(
        function () {
          if (ie && !le) {
            var e = function () {
              o("WAWebABProps").getABPropConfigValue(
                "enable_web_voip_anr_optimizations",
              )
                ? (fe.current != null && window.clearTimeout(fe.current),
                  (fe.current = window.setTimeout(function () {
                    ((fe.current = null), _e(!document.hidden));
                  }, 200)))
                : _e(!document.hidden);
            };
            return (
              document.addEventListener("visibilitychange", e),
              function () {
                (document.removeEventListener("visibilitychange", e),
                  fe.current != null &&
                    (window.clearTimeout(fe.current), (fe.current = null)));
              }
            );
          }
        },
        [ie, le],
      ),
        _(function () {
          var e = function () {
            o("WAWebVoipActivityTracker").trackUiActivity(
              document.hidden
                ? o("WAWebVoipActivityTracker").VoipUiActivity
                    .TAB_VISIBILITY_HIDDEN
                : o("WAWebVoipActivityTracker").VoipUiActivity
                    .TAB_VISIBILITY_VISIBLE,
            );
          };
          return (
            document.addEventListener("visibilitychange", e),
            function () {
              document.removeEventListener("visibilitychange", e);
            }
          );
        }, []),
        o("WAWebFullscreenDetection").useOnFullscreenChange(function (e) {
          o("WAWebVoipActivityTracker").trackUiActivity(
            e
              ? o("WAWebVoipActivityTracker").VoipUiActivity
                  .TAB_FULLSCREEN_ENTER
              : o("WAWebVoipActivityTracker").VoipUiActivity
                  .TAB_FULLSCREEN_EXIT,
          );
        }),
        _(function () {
          var e;
          (e = D.current) == null || e.focus();
          var t,
            n = function () {
              var e = D.current;
              e &&
                (t && window.cancelAnimationFrame(t),
                (t = window.requestAnimationFrame(function () {
                  var t = e.clientHeight;
                  N(t);
                })));
            };
          n();
          var r = new ResizeObserver(n);
          return (
            D.current && r.observe(D.current),
            function () {
              (r.disconnect(), t && window.cancelAnimationFrame(t));
            }
          );
        }, []));
      var ge = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_MIC_MUTED,
          ),
          function () {
            var e, t;
            return (e =
              (t = r("WAWebCallCollection").activeCall) == null
                ? void 0
                : t.peerMicMuted) != null
              ? e
              : !1;
          },
        ),
        he = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          "participantMicStateChange " +
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipCallModelEvents
                .GROUP_CALL_PARTICIPANT_STATES,
            ),
          function () {
            var e,
              t = r("WAWebCallCollection").activeCall;
            if (t == null || !t.isGroup) return !1;
            var n = o("WAWebVoipLobbyUtils").getSolePeerInGroupCall(
              (e = t.groupCallParticipantsConnected) != null ? e : [],
            );
            return n != null ? t.isParticipantMicMuted(n) : !1;
          },
        ),
        ye = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents
              .GROUP_CALL_PARTICIPANT_STATES,
          ),
          function () {
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
          },
        ),
        Ce = ye[0],
        be = ye[1],
        ve = ye[2],
        Se = se && Ce.length === 2 ? he : ge,
        Re = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          o("WAWebVoipEventConstants").getMultiChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.IS_GROUP,
            o("WAWebVoipEventConstants").VoipCallModelEvents.GROUP_JID,
          ),
          function () {
            var e = r("WAWebCallCollection").activeCall;
            return e == null ? !1 : !e.isGroup || e.groupJid != null;
          },
        ),
        Le = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          o("WAWebVoipEventConstants").getMultiChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.IS_GROUP,
            o("WAWebVoipEventConstants").VoipCallModelEvents.GROUP_JID,
          ),
          function () {
            var e = r("WAWebCallCollection").activeCall;
            return (
              (e == null ? void 0 : e.isGroup) === !0 &&
              (e == null ? void 0 : e.groupJid) != null
            );
          },
        ),
        Ee = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.SELF_MIC_MUTED,
          ),
          function () {
            var e, t;
            return (e =
              (t = r("WAWebCallCollection").activeCall) == null
                ? void 0
                : t.selfMicMuted) != null
              ? e
              : !1;
          },
        ),
        ke = r("useWAWebVoipCameraAvailability")(),
        Ie = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.SELF_VIDEO_STATE,
          ),
          function () {
            return r("WAWebCallCollection").activeCall
              ? r("WAWebCallCollection").activeCall.selfVideoState !==
                  o("WAWebVoipWaCallEnums").VideoState.Enabled
              : !T;
          },
        ),
        Te = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents
              .SCREEN_SHARE_STATES,
          ),
          function () {
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
          },
        ),
        De = Te[0],
        xe = Te[1],
        $e = De || xe,
        Pe = h($e),
        Ne = Pe[0],
        Me = Pe[1];
      $e !== Ne &&
        (Me($e),
        $e && q !== "speaker"
          ? (K(q), U("speaker"))
          : !$e && j != null && (U(j), K(null)));
      var we = h(!1),
        Ae = we[0],
        Fe = we[1];
      !Ae && $e && (Fe(!0), q !== "speaker" && U("speaker"));
      var Oe = m(
          function () {
            $e ||
              (o("WAWebVoipActivityTracker").trackUiActivity(
                o("WAWebVoipActivityTracker").VoipUiActivity
                  .CONTROL_PANEL_LAYOUT_MODE_TOGGLE,
              ),
              q === "speaker" ? (G(null), Y(null), U("grid")) : U("speaker"));
          },
          [$e, q],
        ),
        Be = m(
          function (e) {
            G(function (t) {
              var n = t != null && t.equals(e);
              return n
                ? (X === "grid" && !$e && U("grid"), Y(null), null)
                : (q !== "speaker" && Y(q), U("speaker"), e);
            });
          },
          [$e, q, X],
        );
      r("useWAWebVoipCallToasts")({
        callState: ee,
        isSelfScreenSharing: De,
        isAnyPeerScreenSharing: xe,
        showCenteredToast: J,
      });
      var We = Ie || !ke,
        qe = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          o("WAWebVoipEventConstants").getMultiChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.VIDEO_STATE,
            o("WAWebVoipEventConstants").VoipCallModelEvents.IS_VIDEO,
          ),
          function () {
            var e, t;
            return (e =
              (t = r("WAWebCallCollection").activeCall) == null
                ? void 0
                : t.shouldShowVideoUI()) != null
              ? e
              : !1;
          },
        ),
        Ue = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.VIDEO_STATE,
          ),
          function () {
            var e, t;
            return (e =
              (t = r("WAWebCallCollection").activeCall) == null
                ? void 0
                : t.shouldShowSelfPreview()) != null
              ? e
              : !1;
          },
        ),
        Ve = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.VIDEO_STATE,
          ),
          function () {
            var e, t;
            return (e =
              (t = r("WAWebCallCollection").activeCall) == null
                ? void 0
                : t.shouldShowPeerVideo()) != null
              ? e
              : !1;
          },
        ),
        He = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.VIDEO_STATE,
          ),
          function () {
            var e = r("WAWebCallCollection").activeCall;
            return (e == null ? void 0 : e.peerVideoState) == null
              ? !1
              : e.peerVideoState ===
                  o("WAWebVoipWaCallEnums").VideoState.Paused;
          },
        ),
        Ge = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          "participantVideoStateChange " +
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipCallModelEvents
                .GROUP_CALL_PARTICIPANT_STATES,
            ),
          function () {
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
          },
        ),
        ze = Ge[0],
        je = Ge[1],
        Ke = se && Ce.length === 2,
        Qe = Ke ? ze : Ve,
        Xe = Ke ? je : He,
        Ye = Ke ? qe || Qe : qe,
        Je = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_RECONNECTING,
          ),
          function () {
            var e = r("WAWebCallCollection").activeCall;
            return (e == null ? void 0 : e.peerJid) == null
              ? null
              : e.getPeerReconnectingState(e.peerJid);
          },
        ),
        Ze = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_RECONNECTING,
          ) +
            " " +
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipCallModelEvents
                .GROUP_CALL_PARTICIPANT_STATES,
            ),
          function () {
            var e,
              t = r("WAWebCallCollection").activeCall;
            if (t == null || !t.isGroup) return null;
            var n = o("WAWebVoipLobbyUtils").getSolePeerInGroupCall(
              (e = t.groupCallParticipantsConnected) != null ? e : [],
            );
            return n == null ? null : t.getPeerReconnectingState(n);
          },
        ),
        et = Ke ? Ze : Je,
        tt = m(function (e) {
          var t = r("WAWebCallCollection").activeCall;
          return t == null || e == null
            ? null
            : typeof e == "object" && e != null && "toString" in e
              ? t.getPeerReconnectingState(e)
              : null;
        }, []),
        nt = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_JID,
          ),
          function () {
            var e, t;
            return (e =
              (t = r("WAWebCallCollection").activeCall) == null ||
              (t = t.peerJid) == null
                ? void 0
                : t.toJid()) != null
              ? e
              : "";
          },
        ),
        rt = f(
          function () {
            if (se) {
              var e, t;
              return (e =
                (t = o("WAWebVoipLobbyUtils").getSolePeerInGroupCall(Ce)) ==
                null
                  ? void 0
                  : t.toJid()) != null
                ? e
                : null;
            }
            return nt;
          },
          [se, nt, Ce],
        ),
        ot = r("useWAWebVoipPostCallSurvey")({
          isCallRinging: ie,
          isCallOutgoing: le,
          isCallActiveInPopoutWindow: E,
          isContextInPopoutWindow: I.isContextInPopoutWindow,
        }),
        at = ot.handleSurveyDismiss,
        it = ot.handleSurveySubmit,
        lt = ot.isSurveyDismissed,
        st = ot.onSurveyInteract,
        ut = ot.shouldShowPostCallSurvey,
        ct =
          (a =
            (i = r("WAWebCallCollection").activeCall) == null
              ? void 0
              : i.isCallLink) != null
            ? a
            : !1,
        dt =
          ee === o("WAWebVoipWaCallEnums").CallState.CallActive ||
          ee === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely;
      _(
        function () {
          ct &&
            dt &&
            T &&
            !I.isContextInPopoutWindow &&
            o("WAWebABProps").getABPropConfigValue(
              "web_calling_auto_popout_video",
            ) &&
            !o(
              "WAWebVoipUiPopoutWindowPortalContainer.react",
            ).getIsCallActiveInPopoutWindow() &&
            o("WAWebVoipUiManager").openVoipUiPopoutWindow();
        },
        [ct, dt, T, I.isContextInPopoutWindow],
      );
      var mt = h(null),
        pt = mt[0],
        _t = mt[1],
        ft = h(null),
        gt = ft[0],
        ht = ft[1];
      (_(function () {
        var t = r("WAWebCallCollection").activeCall;
        if (!t) {
          _t(null);
          return;
        }
        var n = function () {
          var n = t.peerJid;
          if (n != null) {
            var a = t.getReactionForParticipant(n);
            _t(a);
          }
          try {
            var i = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
              l = t.getReactionForParticipant(i);
            ht(l);
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Failed to get self LID for reaction lookup",
                  ])),
              )
              .catching(t instanceof Error ? t : r("err")(String(t)));
          }
        };
        return (
          n(),
          t.on(
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipCallModelEvents.REACTION_STATES,
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
      }, []),
        r("useWAWebVoipWakeLock")(),
        r("useWAWebVoipCameraHealthCheck")(dt));
      var yt = r("useWAWebEventTargetValue")(
          r("WAWebAvUpgradeBannerState"),
          "change",
          function () {
            return r("WAWebAvUpgradeBannerState").getCurrentBanner();
          },
        ),
        Ct = r("useWAWebWaitingRoomState")(),
        bt = Ct.firstWaitingRoomUserName,
        vt = Ct.handleWaitingRoomApprove,
        St = Ct.handleWaitingRoomDeny,
        Rt = Ct.isWaitingRoomAdmin,
        Lt = Ct.waitingRoomUsersCount;
      (_(
        function () {
          (ee == null ||
            ee === o("WAWebVoipWaCallEnums").CallState.CallStateEnding ||
            ee === o("WAWebVoipWaCallEnums").CallState.None) &&
            r("WAWebAvUpgradeBannerState").clearAllBanners();
        },
        [ee],
      ),
        _(
          function () {
            (ee == null ||
              ee === o("WAWebVoipWaCallEnums").CallState.CallStateEnding ||
              ee === o("WAWebVoipWaCallEnums").CallState.None) &&
              o("WAWebToastManager").ToastManager.close(
                o("WAWebVoipWebBridgeApi").MICROPHONE_SILENCE_TOAST_ID,
              );
          },
          [ee],
        ),
        _(
          function () {
            ee == null &&
              (o("WAWebCallLogUtils").shouldShowCallEndedScreen(L) ||
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
          },
          [ee, L],
        ));
      var Et = r("WAWebCallCollection").activeCall;
      _(
        function () {
          var e,
            t,
            n,
            o = (e = Et == null ? void 0 : Et.id) != null ? e : null,
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
            (r("WAWebCallCollection").lastActiveCall = Et));
        },
        [Et],
      );
      var kt = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.RAISED_HAND_STATES,
          ),
          function () {
            var e = r("WAWebCallCollection").activeCall;
            if (e == null) return !1;
            try {
              var t = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
              return e.isHandRaisedForParticipant(t);
            } catch (e) {
              return (
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: UI: Unable to get self JID for raised hand state",
                      ])),
                  )
                  .catching(e instanceof Error ? e : r("err")(String(e))),
                !1
              );
            }
          },
        ),
        It = r("useWAWebVoipCallHandlers")({
          currentBannerJid:
            (l = yt == null ? void 0 : yt.jid) != null ? l : null,
          isMuted: Ee,
          isVideoCall: T,
          isVideoMuted: We,
        }),
        Tt = It.handleBannerAccept,
        Dt = It.handleBannerIgnore,
        xt = It.handleClickAccept,
        $t = It.handleClickEnd,
        Pt = It.handleClickReject,
        Nt = It.handleMuteToggle,
        Mt = It.handleRaiseHandToggle,
        wt = It.handleReactionSelect,
        At = It.handleVideoMuteToggle,
        Ft = Ce.length,
        Ot = de,
        Bt = Ot
          ? o("WAWebVoipLobbyUtils").getLobbyButtonDisplayProps(le, ee)
          : void 0,
        Wt = !Ot && Ft > 2,
        qt =
          se &&
          ee === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely &&
          Ft <= 1,
        Ut =
          ct &&
          qt &&
          !I.isContextInPopoutWindow &&
          !E &&
          !k &&
          r("WAWebCallCollection").activeCall != null,
        Vt = f(
          function () {
            return se
              ? o("WAWebVoipLobbyUtils").getParticipantsWithoutSelf(be)
              : [];
          },
          [be, se],
        ),
        Ht = m(function (e) {
          o("WAWebVoipStartCall").inviteToCall(e);
        }, []),
        Gt = m(function () {
          F(!0);
        }, []),
        zt = r("useWAWebWaitingRoomSeeAll")(
          I.isContextInPopoutWindow,
          Gt,
          ve,
          Vt,
          Ht,
        ),
        jt = zt.handleWaitingRoomSeeAll,
        Kt = zt.isParticipantsModalOpen,
        Qt;
      if (ut && !lt)
        (E && !I.isContextInPopoutWindow) ||
          (Qt = c.jsx(
            o("WAWebVoipPostCallSurveyLoadable")
              .WAWebVoipPostCallSurveyLoadable,
            { isCompact: M, onDismiss: at, onInteract: st, onSubmit: it },
          ));
      else if (ee == null)
        o("WAWebCallLogUtils").shouldShowCallEndedScreen(L) &&
          (Qt = c.jsx(r("WAWebVoipCallEndedDisplay.react"), {}));
      else if (!I.isContextInPopoutWindow && !I.isDocPip && (E || k))
        Qt = c.jsx(r("WAWebVoipCallActiveInExternalPlayer.react"), { msg: L });
      else if (ae && r("WAWebCallCollection").activeCall != null)
        Qt = c.jsx(r("WAWebVoipCallLinkPreview.react"), {
          call: r("WAWebCallCollection").activeCall,
        });
      else if (Wt) {
        var Xt, Yt, Jt, Zt;
        Qt = c.jsx(
          o("WAWebVoipUiVideoGroupCallLoadable")
            .WAWebVoipUiVideoGroupCallLoadable,
          {
            callState: ee,
            groupChat:
              (Xt = o("WAWebChatCollection").ChatCollection.get(
                L == null || (Yt = L.id) == null ? void 0 : Yt.remote,
              )) != null
                ? Xt
                : ce,
            groupCallParticipantsConnected: Ce,
            groupParticipantsWithoutSelf: Vt,
            isGroupAudioCall: !T,
            isLinkedGroupCall: Le,
            isSelfScreenSharing: De,
            getPeerReconnectingState: tt,
            layoutMode: q,
            onPinParticipant: T ? Be : void 0,
            pinnedParticipantJid: H,
            screenSharingPeerJid:
              (Jt =
                (Zt = r("WAWebCallCollection").activeCall) == null
                  ? void 0
                  : Zt.getScreenSharingPeerJid()) != null
                ? Jt
                : null,
          },
        );
      } else if (Ot) {
        var en = o("WAWebVoipLobbyUtils").getArePeersActiveInCall(be, ve);
        Qt = c.jsx(o("WAWebFlex.react").FlexItem, {
          testid: void 0,
          grow: 1,
          xstyle: v.videoContainer,
          children: c.jsx(r("WAWebVoipUiLobby.react"), {
            callLogMsg: L,
            callState: ee,
            arePeersActive: en,
            isSelfScreenSharing: De,
            isInMiniPlayer: !I.isContextInPopoutWindow && !I.isDocPip,
            isVideoCall: T,
            isVideoMuted: We,
            onRingParticipant: Ht,
            participantsWithoutSelf: Vt,
            participantStates: ve,
            selfMicMuted: Ee,
            isCallOutgoing: le,
          }),
        });
      } else if (qt)
        Qt = c.jsx(o("WAWebFlex.react").FlexItem, {
          testid: void 0,
          grow: 1,
          xstyle: I.isContextInPopoutWindow
            ? v.videoContainerPopout
            : v.videoContainer,
          children: c.jsx(
            o("WAWebVoipUiVideoCallLoadable").WAWebVoipUiVideoCallLoadable,
            {
              callState: ee,
              isCallLinkLobby: !0,
              isVideoMuted: We,
              showPeerVideo: !1,
              showSelfPreview: Ue,
              callLogMsg: L,
              selfMicMuted: Ee,
              isSelfScreenSharing: De,
              isSelfHandRaised: kt,
              selfReaction: gt,
            },
          ),
        });
      else if (Ye && !ie) {
        var tn = De && !I.isContextInPopoutWindow && !E;
        Qt = c.jsxs(o("WAWebFlex.react").FlexItem, {
          testid: void 0,
          grow: 1,
          xstyle: I.isContextInPopoutWindow
            ? v.videoContainerPopout
            : v.videoContainer,
          children: [
            c.jsx(
              o("WAWebVoipUiVideoCallLoadable").WAWebVoipUiVideoCallLoadable,
              {
                callState: ee,
                peerJid: rt != null ? rt : void 0,
                isCompactLayout: M,
                isScreenShareBannerVisible: tn,
                isVideoMuted: We,
                peerVideoPaused: Xe,
                showPeerVideo: Qe,
                showSelfPreview: Ue,
                callLogMsg: L,
                peerMicMuted: Se,
                selfMicMuted: Ee,
                isSelfScreenSharing: De,
                videoAnimateInDelay: o("WAWebMoveResizeConstants")
                  .MIN_HEIGHT_CHANGE_ANIMATION_DURATION,
                peerReconnectingState: et,
                selfReaction: gt,
              },
            ),
            ee !== o("WAWebVoipWaCallEnums").CallState.CallActive &&
              !le &&
              c.jsx(r("WAWebCallParticipantInfo.react"), {
                userId:
                  rt != null
                    ? o("WAWebWidFactory").createUserWidOrThrow(rt)
                    : void 0,
                imageSize: "auto",
                callStateText: o("WAWebCallLogUtils").getCallStateText(ee, L),
                xstyle: [v.videoCallOverlay, v.surfaceElevated],
              }),
          ],
        });
      } else
        Qt = c.jsx(r("WAWebVoipVoiceCallContainer.react"), {
          callLogMsg: L,
          callState: ee,
          hasCameraAvailable: ke,
          isCallActive: dt,
          isCallOutgoing: le,
          isCompactLayout: M,
          isTabVisible: pe,
          isVideoCall: T,
          isVideoMuted: We,
          peerMicMuted: Se,
          peerReaction: pt,
          selfMicMuted: Ee,
          isSelfScreenSharing: De,
        });
      var nn = ut && !lt,
        rn = ee != null && !nn,
        on = rn
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
                I.isContextInPopoutWindow && se
                  ? {
                      width: re ? b : "100%",
                      transition:
                        "width 300ms cubic-bezier(0.1, 0.82, 0.25, 1)",
                    }
                  : void 0,
              children: c.jsx(r("WAWebVoipCallControls.react"), {
                callState: ee,
                chat:
                  (u = o("WAWebChatCollection").ChatCollection.get(
                    L.id.remote,
                  )) != null
                    ? u
                    : ce,
                connectedParticipantsCount: Ft,
                isVideoCall: T,
                isCallRinging: ie,
                isCallActive: dt,
                isConnectedLonely: qt,
                isInLobby: Ot,
                buttonCustomizations: Bt,
                isMuted: Ee,
                isSelfHandRaised: kt,
                isVideoMuted: We,
                hasCameraAvailable: ke,
                isSelfScreenSharing: De,
                isAnyPeerScreenSharing: xe,
                isGroupCall: se,
                isCallLink:
                  (d =
                    (C = r("WAWebCallCollection").activeCall) == null
                      ? void 0
                      : C.isCallLink) != null
                    ? d
                    : !1,
                showVideoToggle:
                  ((S = r("WAWebCallCollection").activeCall) == null
                    ? void 0
                    : S.isCallLink) !== !0 || T,
                layoutMode: q,
                onLayoutModeToggle: Oe,
                onAccept: function () {
                  xt();
                },
                onReject: function () {
                  Pt();
                },
                onEnd: function () {
                  $t();
                },
                onMuteToggle: function () {
                  Nt();
                },
                onRaiseHandToggle: function () {
                  Mt();
                },
                onReactionSelect: function (t) {
                  wt(t);
                },
                onRingParticipant: Ht,
                onSendMessage: function () {
                  var e,
                    t,
                    n = r("WAWebCallCollection").activeCall,
                    a =
                      (e =
                        (t = ce == null ? void 0 : ce.id) != null
                          ? t
                          : n == null
                            ? void 0
                            : n.groupJid) != null
                        ? e
                        : L.id.remote;
                  a != null &&
                    o("WAWebVoipActionRequestOpenChat").requestOpenChat(a);
                },
                onToggleParticipantDrawer: O,
                onVideoMuteToggle: function () {
                  At();
                },
                participantStates: ve,
                participantsWithoutSelf: Vt,
                isLinkedGroupCall: Le,
                showSendMessage: Re && !I.isDocPip,
                selfReaction: gt,
                isCallOutgoing: le,
              }),
            })
          : null,
        an = f(
          function () {
            if (yt == null) return null;
            var e = o("WAWebContactCollection").ContactCollection.get(yt.jid);
            return e != null
              ? o("WAWebFrontendContactGetters").getDisplayName(e)
              : yt.jid.toString();
          },
          [yt],
        );
      return c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
        name: "WAWebVoipUi",
        onError: function () {
          ($t(o("WAWebVoipSignalingEnums").EndCallReason.Unknown),
            o("useWAWebVoipWindowSetup").onReactVoipUiCrash(I.windowEl));
        },
        children: c.jsx(r("WAWebVoipDarkThemeRoot.react"), {
          ref: D,
          tabIndex: -1,
          xstyle: [
            v.voipContainer,
            o("WDSColorStyles.stylex").WDSColorStyles.persistentAlwaysWhite,
            o("WDSColorStyles.stylex").WDSBackgroundColorStyles
              .backgroundWashPlain,
          ],
          children: c.jsxs(r("WAWebVoipUiContext").Provider, {
            value: Z,
            children: [
              De &&
                !I.isContextInPopoutWindow &&
                !E &&
                c.jsx(r("WAWebVoipScreenShareBanner.react"), {}),
              c.jsxs(o("WAWebFlex.react").FlexRow, {
                grow: 1,
                xstyle: v.fullWidth,
                children: [
                  c.jsxs(o("WAWebFlex.react").FlexColumn, {
                    grow: 1,
                    shrink: 1,
                    basis: "auto",
                    xstyle: v.mainColumn,
                    children: [
                      c.jsx(o("WAWebFlex.react").FlexColumn, {
                        align: "center",
                        justify: "center",
                        grow: 1,
                        shrink: 1,
                        basis: "auto",
                        xstyle: [v.mainUIContainer, v.fullWidth],
                        style:
                          I.isContextInPopoutWindow && se
                            ? {
                                width: re ? b : "100%",
                                transition:
                                  "width 300ms cubic-bezier(0.1, 0.82, 0.25, 1)",
                              }
                            : void 0,
                        children: Qt,
                      }),
                      on,
                    ],
                  }),
                  Ut &&
                    r("WAWebCallCollection").activeCall &&
                    c.jsx(o("WAWebFlex.react").FlexItem, {
                      shrink: 0,
                      xstyle: v.sharePanelWrapper,
                      children: c.jsx(r("WAWebVoipCallLinkSharePanel.react"), {
                        call: r("WAWebCallCollection").activeCall,
                      }),
                    }),
                ],
              }),
              yt != null &&
                an != null &&
                dt &&
                !(!I.isContextInPopoutWindow && E) &&
                c.jsx(r("WAWebVoipAvUpgradeBanner.react"), {
                  contactName: an,
                  onAccept: Tt,
                  onIgnore: Dt,
                }),
              dt &&
                Rt &&
                Lt > 0 &&
                yt == null &&
                !re &&
                !Kt &&
                c.jsx(r("WAWebVoipWaitingRoomRequestBanner.react"), {
                  firstUserName: bt,
                  onApprove: vt,
                  onDeny: St,
                  onSeeAll: jt,
                  waitingRoomUsersCount: Lt,
                }),
              o("WAWebCurrentUser").isEmployee() &&
                !ut &&
                c.jsx(r("WAWebBugnub.react").Bugnub, {}),
              o("WAWebCurrentUser").isEmployee() &&
                dt &&
                c.jsx(r("WAWebVoipDebugInfoOverlay.react"), {}),
              o("WAWebCurrentUser").isEmployee() &&
                dt &&
                c.jsx(r("WAWebVoipNetworkConditionerOverlay.react"), {}),
              c.jsx(
                o("WAWebVoipUiToastContainer.react").WAWebVoipUiToastContainer,
                { areCallControlsVisible: rn, ref: x },
              ),
              I.isContextInPopoutWindow &&
                se &&
                c.jsx(r("WAWebVelocityTransitionGroup"), {
                  transitionName: r("WAWebL10N").isRTL()
                    ? "slide-left-rtl"
                    : "slide-left",
                  component: "div",
                  children: re
                    ? c.jsx(
                        r("WAWebVoipCallParticipantsDrawer.react"),
                        {
                          call: r("WAWebCallCollection").activeCall,
                          chat:
                            (R = o("WAWebChatCollection").ChatCollection.get(
                              L.id.remote,
                            )) != null
                              ? R
                              : ce,
                          isLinkedGroupCall: Le,
                          isVideoCall: T,
                          onClose: B,
                          onRingParticipant: Ht,
                          participantStates: ve,
                          participantsWithoutSelf: Vt,
                          showCloseButton: !ne,
                        },
                        "participant-drawer",
                      )
                    : null,
                }),
            ],
          }),
        }),
      });
    }
    ((R.displayName = R.name + " [from " + i.id + "]"), (l.default = S));
  },
  98,
);
