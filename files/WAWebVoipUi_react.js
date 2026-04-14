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
        Z = m(function (e, t) {
          var n;
          (n = x.current) == null ||
            n.showToast({
              message: e,
              type: "default",
              align: t != null ? t : "center",
            });
        }, []),
        ee = f(
          function () {
            return { uiHeight: P, showCenteredToast: J, showToast: Z };
          },
          [P, J, Z],
        ),
        te = r("useWAWebEventTargetValue")(
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
        ne = g(te);
      _(
        function () {
          var e = ne.current;
          ((ne.current = te),
            e != null && te == null
              ? o("WAWebVoipActivityTracker").trackUiActivity(
                  o("WAWebVoipActivityTracker").VoipUiActivity
                    .CALL_ENDED_SCREEN_SHOWN,
                )
              : e !== te &&
                te != null &&
                o("WAWebVoipActivityTracker").trackUiActivity(
                  o("WAWebVoipActivityTracker").VoipUiActivity
                    .CALL_STATE_UI_TRANSITION,
                  String(te),
                ));
        },
        [te],
      );
      var re =
          ((n = r("WAWebCallCollection").activeCall) == null
            ? void 0
            : n.isCallLink) === !0 &&
          te === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely &&
          I.isContextInPopoutWindow,
        oe = (A || re) && te != null,
        ae = oe && I.isContextInPopoutWindow;
      _(
        function () {
          return (
            o("WAWebVoipWindowConstants").setIsSidebarVisible(ae),
            function () {
              ae && o("WAWebVoipWindowConstants").setIsSidebarVisible(!1);
            }
          );
        },
        [ae],
      );
      var ie = r("useWAWebEventTargetValue")(
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
        le =
          te === o("WAWebVoipWaCallEnums").CallState.ReceivedCall ||
          te === o("WAWebVoipWaCallEnums").CallState.ReceivedCallWithoutOffer,
        se =
          te === o("WAWebVoipWaCallEnums").CallState.Calling ||
          te === o("WAWebVoipWaCallEnums").CallState.PreacceptReceived,
        ue = r("useWAWebEventTargetValue")(
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
        ce = r("useWAWebEventTargetValue")(
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
        de = ce
          ? o("WAWebChatCollection").ChatCollection.getChatByAccountLid(
              o("WAWebWidFactory").asUserLidOrThrow(ce),
            )
          : null,
        me = o("WAWebVoipLobbyUtils").isLobbyApplicableForCallState(ue, te),
        pe = h(!document.hidden),
        _e = pe[0],
        fe = pe[1],
        ge = g(null);
      (_(
        function () {
          if (le && !se) {
            var e = function () {
              o("WAWebABProps").getABPropConfigValue(
                "enable_web_voip_anr_optimizations",
              )
                ? (ge.current != null && window.clearTimeout(ge.current),
                  (ge.current = window.setTimeout(function () {
                    ((ge.current = null), fe(!document.hidden));
                  }, 200)))
                : fe(!document.hidden);
            };
            return (
              document.addEventListener("visibilitychange", e),
              function () {
                (document.removeEventListener("visibilitychange", e),
                  ge.current != null &&
                    (window.clearTimeout(ge.current), (ge.current = null)));
              }
            );
          }
        },
        [le, se],
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
      var he = r("useWAWebEventTargetValue")(
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
        ye = r("useWAWebEventTargetValue")(
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
        Ce = r("useWAWebEventTargetValue")(
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
        be = Ce[0],
        ve = Ce[1],
        Se = Ce[2],
        Re = ue && be.length === 2 ? ye : he,
        Le = r("useWAWebEventTargetValue")(
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
        Ee = r("useWAWebEventTargetValue")(
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
        ke = r("useWAWebEventTargetValue")(
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
        Ie = r("useWAWebVoipCameraAvailability")(),
        Te = r("useWAWebEventTargetValue")(
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
        De = r("useWAWebEventTargetValue")(
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
        xe = De[0],
        $e = De[1],
        Pe = xe || $e,
        Ne = h(Pe),
        Me = Ne[0],
        we = Ne[1];
      Pe !== Me &&
        (we(Pe),
        Pe && q !== "speaker"
          ? (K(q), U("speaker"))
          : !Pe && j != null && (U(j), K(null)));
      var Ae = h(!1),
        Fe = Ae[0],
        Oe = Ae[1];
      !Fe && Pe && (Oe(!0), q !== "speaker" && U("speaker"));
      var Be = m(
          function () {
            Pe ||
              (o("WAWebVoipActivityTracker").trackUiActivity(
                o("WAWebVoipActivityTracker").VoipUiActivity
                  .CONTROL_PANEL_LAYOUT_MODE_TOGGLE,
              ),
              q === "speaker" ? (G(null), Y(null), U("grid")) : U("speaker"));
          },
          [Pe, q],
        ),
        We = m(
          function (e) {
            G(function (t) {
              var n = t != null && t.equals(e);
              return n
                ? (X === "grid" && !Pe && U("grid"), Y(null), null)
                : (q !== "speaker" && Y(q), U("speaker"), e);
            });
          },
          [Pe, q, X],
        );
      r("useWAWebVoipCallToasts")({
        callState: te,
        isSelfScreenSharing: xe,
        isAnyPeerScreenSharing: $e,
        showCenteredToast: J,
      });
      var qe = Te || !Ie,
        Ue = r("useWAWebEventTargetValue")(
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
                : t.shouldShowSelfPreview()) != null
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
            var e, t;
            return (e =
              (t = r("WAWebCallCollection").activeCall) == null
                ? void 0
                : t.shouldShowPeerVideo()) != null
              ? e
              : !1;
          },
        ),
        Ge = r("useWAWebEventTargetValue")(
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
        ze = r("useWAWebEventTargetValue")(
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
        je = ze[0],
        Ke = ze[1],
        Qe = ue && be.length === 2,
        Xe = Qe ? je : He,
        Ye = Qe ? Ke : Ge,
        Je = Qe ? Ue || Xe : Ue,
        Ze = r("useWAWebEventTargetValue")(
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
        et = r("useWAWebEventTargetValue")(
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
        tt = Qe ? et : Ze,
        nt = m(function (e) {
          var t = r("WAWebCallCollection").activeCall;
          return t == null || e == null
            ? null
            : typeof e == "object" && e != null && "toString" in e
              ? t.getPeerReconnectingState(e)
              : null;
        }, []),
        rt = r("useWAWebEventTargetValue")(
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
        ot = f(
          function () {
            if (ue) {
              var e, t;
              return (e =
                (t = o("WAWebVoipLobbyUtils").getSolePeerInGroupCall(be)) ==
                null
                  ? void 0
                  : t.toJid()) != null
                ? e
                : null;
            }
            return rt;
          },
          [ue, rt, be],
        ),
        at = r("useWAWebVoipPostCallSurvey")({
          isCallRinging: le,
          isCallOutgoing: se,
          isCallActiveInPopoutWindow: E,
          isContextInPopoutWindow: I.isContextInPopoutWindow,
        }),
        it = at.handleSurveyDismiss,
        lt = at.handleSurveySubmit,
        st = at.isSurveyDismissed,
        ut = at.onSurveyInteract,
        ct = at.shouldShowPostCallSurvey,
        dt =
          (a =
            (i = r("WAWebCallCollection").activeCall) == null
              ? void 0
              : i.isCallLink) != null
            ? a
            : !1,
        mt =
          te === o("WAWebVoipWaCallEnums").CallState.CallActive ||
          te === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely;
      _(
        function () {
          dt &&
            mt &&
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
        [dt, mt, T, I.isContextInPopoutWindow],
      );
      var pt = h(null),
        _t = pt[0],
        ft = pt[1],
        gt = h(null),
        ht = gt[0],
        yt = gt[1];
      (_(function () {
        var t = r("WAWebCallCollection").activeCall;
        if (!t) {
          ft(null);
          return;
        }
        var n = function () {
          var n = t.peerJid;
          if (n != null) {
            var a = t.getReactionForParticipant(n);
            ft(a);
          }
          try {
            var i = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
              l = t.getReactionForParticipant(i);
            yt(l);
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
        r("useWAWebVoipCameraHealthCheck")(mt));
      var Ct = r("useWAWebEventTargetValue")(
          r("WAWebAvUpgradeBannerState"),
          "change",
          function () {
            return r("WAWebAvUpgradeBannerState").getCurrentBanner();
          },
        ),
        bt = r("useWAWebWaitingRoomState")(),
        vt = bt.firstWaitingRoomUserName,
        St = bt.handleWaitingRoomApprove,
        Rt = bt.handleWaitingRoomDeny,
        Lt = bt.isWaitingRoomAdmin,
        Et = bt.waitingRoomUsersCount;
      (_(
        function () {
          (te == null ||
            te === o("WAWebVoipWaCallEnums").CallState.CallStateEnding ||
            te === o("WAWebVoipWaCallEnums").CallState.None) &&
            r("WAWebAvUpgradeBannerState").clearAllBanners();
        },
        [te],
      ),
        _(
          function () {
            (te == null ||
              te === o("WAWebVoipWaCallEnums").CallState.CallStateEnding ||
              te === o("WAWebVoipWaCallEnums").CallState.None) &&
              o("WAWebToastManager").ToastManager.close(
                o("WAWebVoipWebBridgeApi").MICROPHONE_SILENCE_TOAST_ID,
              );
          },
          [te],
        ),
        _(
          function () {
            te == null &&
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
          [te, L],
        ));
      var kt = r("WAWebCallCollection").activeCall;
      _(
        function () {
          var e,
            t,
            n,
            o = (e = kt == null ? void 0 : kt.id) != null ? e : null,
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
            (r("WAWebCallCollection").lastActiveCall = kt));
        },
        [kt],
      );
      var It = r("useWAWebEventTargetValue")(
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
        Tt = r("useWAWebVoipCallHandlers")({
          currentBannerJid:
            (l = Ct == null ? void 0 : Ct.jid) != null ? l : null,
          isMuted: ke,
          isVideoCall: T,
          isVideoMuted: qe,
        }),
        Dt = Tt.handleBannerAccept,
        xt = Tt.handleBannerIgnore,
        $t = Tt.handleClickAccept,
        Pt = Tt.handleClickEnd,
        Nt = Tt.handleClickReject,
        Mt = Tt.handleMuteToggle,
        wt = Tt.handleRaiseHandToggle,
        At = Tt.handleReactionSelect,
        Ft = Tt.handleVideoMuteToggle,
        Ot = be.length,
        Bt = me,
        Wt = Bt
          ? o("WAWebVoipLobbyUtils").getLobbyButtonDisplayProps(se, te)
          : void 0,
        qt = !Bt && Ot > 2,
        Ut =
          ue &&
          te === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely &&
          Ot <= 1,
        Vt =
          dt &&
          Ut &&
          !I.isContextInPopoutWindow &&
          !E &&
          !k &&
          r("WAWebCallCollection").activeCall != null,
        Ht = f(
          function () {
            return ue
              ? o("WAWebVoipLobbyUtils").getParticipantsWithoutSelf(ve)
              : [];
          },
          [ve, ue],
        ),
        Gt = m(function (e) {
          o("WAWebVoipStartCall").inviteToCall(e);
        }, []),
        zt = m(function () {
          F(!0);
        }, []),
        jt = r("useWAWebWaitingRoomSeeAll")(
          I.isContextInPopoutWindow,
          zt,
          Se,
          Ht,
          Gt,
        ),
        Kt = jt.handleWaitingRoomSeeAll,
        Qt = jt.isParticipantsModalOpen,
        Xt;
      if (ct && !st)
        (E && !I.isContextInPopoutWindow) ||
          (Xt = c.jsx(
            o("WAWebVoipPostCallSurveyLoadable")
              .WAWebVoipPostCallSurveyLoadable,
            { isCompact: M, onDismiss: it, onInteract: ut, onSubmit: lt },
          ));
      else if (te == null)
        o("WAWebCallLogUtils").shouldShowCallEndedScreen(L) &&
          (Xt = c.jsx(r("WAWebVoipCallEndedDisplay.react"), {}));
      else if (!I.isContextInPopoutWindow && !I.isDocPip && (E || k))
        Xt = c.jsx(r("WAWebVoipCallActiveInExternalPlayer.react"), { msg: L });
      else if (ie && r("WAWebCallCollection").activeCall != null)
        Xt = c.jsx(r("WAWebVoipCallLinkPreview.react"), {
          call: r("WAWebCallCollection").activeCall,
        });
      else if (qt) {
        var Yt, Jt, Zt, en;
        Xt = c.jsx(
          o("WAWebVoipUiVideoGroupCallLoadable")
            .WAWebVoipUiVideoGroupCallLoadable,
          {
            callState: te,
            groupChat:
              (Yt = o("WAWebChatCollection").ChatCollection.get(
                L == null || (Jt = L.id) == null ? void 0 : Jt.remote,
              )) != null
                ? Yt
                : de,
            groupCallParticipantsConnected: be,
            groupParticipantsWithoutSelf: Ht,
            isGroupAudioCall: !T,
            isLinkedGroupCall: Ee,
            isSelfScreenSharing: xe,
            getPeerReconnectingState: nt,
            layoutMode: q,
            onPinParticipant: T ? We : void 0,
            pinnedParticipantJid: H,
            screenSharingPeerJid:
              (Zt =
                (en = r("WAWebCallCollection").activeCall) == null
                  ? void 0
                  : en.getScreenSharingPeerJid()) != null
                ? Zt
                : null,
          },
        );
      } else if (Bt) {
        var tn = o("WAWebVoipLobbyUtils").getArePeersActiveInCall(ve, Se);
        Xt = c.jsx(o("WAWebFlex.react").FlexItem, {
          testid: void 0,
          grow: 1,
          xstyle: v.videoContainer,
          children: c.jsx(r("WAWebVoipUiLobby.react"), {
            callLogMsg: L,
            callState: te,
            arePeersActive: tn,
            isSelfScreenSharing: xe,
            isInMiniPlayer: !I.isContextInPopoutWindow && !I.isDocPip,
            isVideoCall: T,
            isVideoMuted: qe,
            onRingParticipant: Gt,
            participantsWithoutSelf: Ht,
            participantStates: Se,
            selfMicMuted: ke,
            isCallOutgoing: se,
          }),
        });
      } else if (Ut)
        Xt = c.jsx(o("WAWebFlex.react").FlexItem, {
          testid: void 0,
          grow: 1,
          xstyle: I.isContextInPopoutWindow
            ? v.videoContainerPopout
            : v.videoContainer,
          children: c.jsx(
            o("WAWebVoipUiVideoCallLoadable").WAWebVoipUiVideoCallLoadable,
            {
              callState: te,
              isCallLinkLobby: !0,
              isVideoMuted: qe,
              showPeerVideo: !1,
              showSelfPreview: Ve,
              callLogMsg: L,
              selfMicMuted: ke,
              isSelfScreenSharing: xe,
              isSelfHandRaised: It,
              selfReaction: ht,
            },
          ),
        });
      else if (Je && !le) {
        var nn = xe && !I.isContextInPopoutWindow && !E;
        Xt = c.jsxs(o("WAWebFlex.react").FlexItem, {
          testid: void 0,
          grow: 1,
          xstyle: I.isContextInPopoutWindow
            ? v.videoContainerPopout
            : v.videoContainer,
          children: [
            c.jsx(
              o("WAWebVoipUiVideoCallLoadable").WAWebVoipUiVideoCallLoadable,
              {
                callState: te,
                peerJid: ot != null ? ot : void 0,
                isCompactLayout: M,
                isScreenShareBannerVisible: nn,
                isVideoMuted: qe,
                peerVideoPaused: Ye,
                showPeerVideo: Xe,
                showSelfPreview: Ve,
                callLogMsg: L,
                peerMicMuted: Re,
                selfMicMuted: ke,
                isSelfScreenSharing: xe,
                videoAnimateInDelay: o("WAWebMoveResizeConstants")
                  .MIN_HEIGHT_CHANGE_ANIMATION_DURATION,
                peerReconnectingState: tt,
                selfReaction: ht,
              },
            ),
            te !== o("WAWebVoipWaCallEnums").CallState.CallActive &&
              !se &&
              c.jsx(r("WAWebCallParticipantInfo.react"), {
                userId:
                  ot != null
                    ? o("WAWebWidFactory").createUserWidOrThrow(ot)
                    : void 0,
                imageSize: "auto",
                callStateText: o("WAWebCallLogUtils").getCallStateText(te, L),
                xstyle: [v.videoCallOverlay, v.surfaceElevated],
              }),
          ],
        });
      } else
        Xt = c.jsx(r("WAWebVoipVoiceCallContainer.react"), {
          callLogMsg: L,
          callState: te,
          hasCameraAvailable: Ie,
          isCallActive: mt,
          isCallOutgoing: se,
          isCompactLayout: M,
          isTabVisible: _e,
          isVideoCall: T,
          isVideoMuted: qe,
          peerMicMuted: Re,
          peerReaction: _t,
          selfMicMuted: ke,
          isSelfScreenSharing: xe,
        });
      var rn = ct && !st,
        on = te != null && !rn,
        an = on
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
                I.isContextInPopoutWindow && ue
                  ? {
                      width: oe ? b : "100%",
                      transition:
                        "width 300ms cubic-bezier(0.1, 0.82, 0.25, 1)",
                    }
                  : void 0,
              children: c.jsx(r("WAWebVoipCallControls.react"), {
                callState: te,
                chat:
                  (u = o("WAWebChatCollection").ChatCollection.get(
                    L.id.remote,
                  )) != null
                    ? u
                    : de,
                connectedParticipantsCount: Ot,
                isVideoCall: T,
                isCallRinging: le,
                isCallActive: mt,
                isConnectedLonely: Ut,
                isInLobby: Bt,
                buttonCustomizations: Wt,
                isMuted: ke,
                isSelfHandRaised: It,
                isVideoMuted: qe,
                hasCameraAvailable: Ie,
                isSelfScreenSharing: xe,
                isAnyPeerScreenSharing: $e,
                isGroupCall: ue,
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
                onLayoutModeToggle: Be,
                onAccept: function () {
                  $t();
                },
                onReject: function () {
                  Nt();
                },
                onEnd: function () {
                  Pt();
                },
                onMuteToggle: function () {
                  Mt();
                },
                onRaiseHandToggle: function () {
                  wt();
                },
                onReactionSelect: function (t) {
                  At(t);
                },
                onRingParticipant: Gt,
                onSendMessage: function () {
                  var e,
                    t,
                    n = r("WAWebCallCollection").activeCall,
                    a =
                      (e =
                        (t = de == null ? void 0 : de.id) != null
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
                  Ft();
                },
                participantStates: Se,
                participantsWithoutSelf: Ht,
                isLinkedGroupCall: Ee,
                showSendMessage: Le && !I.isDocPip,
                selfReaction: ht,
                isCallOutgoing: se,
              }),
            })
          : null,
        ln = f(
          function () {
            if (Ct == null) return null;
            var e = o("WAWebContactCollection").ContactCollection.get(Ct.jid);
            return e != null
              ? o("WAWebFrontendContactGetters").getDisplayName(e)
              : Ct.jid.toString();
          },
          [Ct],
        );
      return c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
        name: "WAWebVoipUi",
        onError: function () {
          (Pt(o("WAWebVoipSignalingEnums").EndCallReason.Unknown),
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
            value: ee,
            children: [
              xe &&
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
                          I.isContextInPopoutWindow && ue
                            ? {
                                width: oe ? b : "100%",
                                transition:
                                  "width 300ms cubic-bezier(0.1, 0.82, 0.25, 1)",
                              }
                            : void 0,
                        children: Xt,
                      }),
                      an,
                    ],
                  }),
                  Vt &&
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
              Ct != null &&
                ln != null &&
                mt &&
                !(!I.isContextInPopoutWindow && E) &&
                c.jsx(r("WAWebVoipAvUpgradeBanner.react"), {
                  contactName: ln,
                  onAccept: Dt,
                  onIgnore: xt,
                }),
              mt &&
                Lt &&
                Et > 0 &&
                Ct == null &&
                !I.isContextInPopoutWindow &&
                !E &&
                !oe &&
                !Qt &&
                c.jsx(r("WAWebVoipWaitingRoomRequestBanner.react"), {
                  firstUserName: vt,
                  onApprove: St,
                  onDeny: Rt,
                  onSeeAll: Kt,
                  waitingRoomUsersCount: Et,
                }),
              o("WAWebCurrentUser").isEmployee() &&
                !ct &&
                c.jsx(r("WAWebBugnub.react").Bugnub, {}),
              o("WAWebCurrentUser").isEmployee() &&
                mt &&
                c.jsx(r("WAWebVoipDebugInfoOverlay.react"), {}),
              o("WAWebCurrentUser").isEmployee() &&
                mt &&
                c.jsx(r("WAWebVoipNetworkConditionerOverlay.react"), {}),
              c.jsx(
                o("WAWebVoipUiToastContainer.react").WAWebVoipUiToastContainer,
                { areCallControlsVisible: on, ref: x },
              ),
              I.isContextInPopoutWindow &&
                ue &&
                c.jsx(r("WAWebVelocityTransitionGroup"), {
                  transitionName: r("WAWebL10N").isRTL()
                    ? "slide-left-rtl"
                    : "slide-left",
                  component: "div",
                  children: oe
                    ? c.jsx(
                        r("WAWebVoipCallParticipantsDrawer.react"),
                        {
                          call: r("WAWebCallCollection").activeCall,
                          chat:
                            (R = o("WAWebChatCollection").ChatCollection.get(
                              L.id.remote,
                            )) != null
                              ? R
                              : de,
                          isLinkedGroupCall: Ee,
                          isVideoCall: T,
                          onClose: B,
                          onRingParticipant: Gt,
                          participantStates: Se,
                          participantsWithoutSelf: Ht,
                          showCloseButton: !re,
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
