__d(
  "WAWebFloatingVoipRenderer.react",
  [
    "WAWebCallCollection",
    "WAWebEnvironment",
    "WAWebPipFloatingVideoPlayer.react",
    "WAWebThemeContext",
    "WAWebVelocityAnimate",
    "WAWebVoipActivityTracker",
    "WAWebVoipEventConstants",
    "WAWebVoipFullScreenContext",
    "WAWebVoipLobbyHeightUtils",
    "WAWebVoipLobbyUtils",
    "WAWebVoipPopoutModalManagerWrapper.react",
    "WAWebVoipUiLoadable",
    "WAWebVoipUiPopoutWindowContext",
    "WAWebVoipUiPopoutWindowPortalContainer.react",
    "WAWebVoipWaCallEnums",
    "react",
    "useMergeRefs",
    "useWAWebEventTargetValue",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref", "animationStartStyle", "msg"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useMemo,
      _ = c.useRef,
      f = c.useState,
      g = "#3a3c3c",
      h = {
        moveResizeContainer: { pointerEvents: "x47corl", $$css: !0 },
        voipBorderRadius: {
          borderStartStartRadius: "x1g83kfv",
          borderStartEndRadius: "x3qq2k7",
          borderEndEndRadius: "x2x8art",
          borderEndStartRadius: "x1qor8vf",
          $$css: !0,
        },
        voipBorder: {
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "x1uaztaz",
          borderInlineEndColor: "xabo58m",
          borderBottomColor: "x28feff",
          borderInlineStartColor: "x1556f1n",
          $$css: !0,
        },
      },
      y = {
        isContextInPopoutWindow: !0,
        popoverPortalEl: null,
        documentEl: document,
        windowEl: window,
        isDocPip: !1,
      },
      C = 640,
      b = C / (C * (3 / 4) + 60),
      v = 48,
      S = 16,
      R = 4 / 3,
      L = {
        MIN_VOICE_CALL_WIDTH: 400,
        MIN_VOICE_CALL_HEIGHT: 120,
        MIN_VIDEO_CALL_WIDTH: 400,
        MIN_VIDEO_CALL_HEIGHT: 400,
        MIN_SURVEY_HEIGHT: 320,
        MIN_MOVE_CALL_HERE_HEIGHT: 120,
        MIN_CALL_LINK_VIDEO_PREVIEW_HEIGHT: 450,
        MIN_CALL_LINK_AUDIO_PREVIEW_HEIGHT: 150,
        INITIAL_VOICE_CALL_WIDTH: 500,
        INITIAL_VIDEO_CALL_WIDTH: 500,
        SHARE_PANEL_WIDTH: 280,
        LOBBY_SELF_PREVIEW_WIDTH: 500,
        MIN_VIDEO_CALL_LOBBY_HEIGHT: 400,
        MIN_VOICE_CALL_LOBBY_HEIGHT: 200,
        MIN_GROUP_AUDIO_CALL_HEIGHT: 180,
      },
      E = 250,
      k = 0.8;
    function I(e, t) {
      var n = t / e,
        r = n + v + S;
      return t / r;
    }
    function T(t) {
      var n,
        a = t.ref,
        i = t.animationStartStyle,
        l = t.msg,
        s = babelHelpers.objectWithoutPropertiesLoose(t, e),
        c = (n = l == null ? void 0 : l.isVideoCall) != null ? n : !1,
        g = o("WAWebThemeContext").useIsDarkTheme(),
        v = _(null),
        S = r("useMergeRefs")(a, v),
        T = _(null),
        D = _(null),
        x = _(null),
        $ = _(null),
        P = function (t) {
          $.current == null && ($.current = t);
        },
        N = _(!1),
        M = _(!1),
        w = f(null),
        A = w[0],
        F = w[1],
        O = f(!1),
        B = O[0],
        W = O[1],
        q = d(function () {
          W(!0);
        }, []),
        U = d(function () {
          W(!1);
        }, []),
        V = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          "change:isVideo",
          function () {
            var e, t;
            return (e =
              (t = r("WAWebCallCollection").activeCall) == null
                ? void 0
                : t.isVideo) != null
              ? e
              : !1;
          },
        ),
        H = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          "change:state",
          function () {
            var e;
            return (e = r("WAWebCallCollection").activeCall) == null
              ? void 0
              : e.getState();
          },
        ),
        G =
          H === o("WAWebVoipWaCallEnums").CallState.ReceivedCall ||
          H === o("WAWebVoipWaCallEnums").CallState.ReceivedCallWithoutOffer,
        z = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          "change:shouldShowPostCallSurvey",
          function () {
            var e, t;
            return (e =
              (t = r("WAWebCallCollection").activeCall) == null
                ? void 0
                : t.shouldShowPostCallSurvey) != null
              ? e
              : !1;
          },
        ),
        j = r("useWAWebEventTargetValue")(
          o("WAWebVoipUiPopoutWindowPortalContainer.react")
            .WAWebVoipUiPopoutWindowEventEmitter,
          "setPopoutWindowProps",
          function () {
            var e, t;
            return (
              (e = T.current) == null || e.cancelDefaultHeightEnforcement(),
              (t = T.current) == null || t.markExternalResizeInProgress(!0),
              o(
                "WAWebVoipUiPopoutWindowPortalContainer.react",
              ).getIsCallActiveInPopoutWindow()
            );
          },
        ),
        K = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          "change:videoState",
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
        Q = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          "participantVideoStateChange change:videoState change:selfVideoState",
          function () {
            var e = r("WAWebCallCollection").activeCall;
            if (e == null || !e.isGroup) return !1;
            if (
              e.selfVideoState === o("WAWebVoipWaCallEnums").VideoState.Enabled
            )
              return !0;
            for (var t of (n = e.groupCallParticipantsConnected) != null
              ? n
              : []) {
              var n;
              if (
                e.getParticipantVideoState(t) ===
                o("WAWebVoipWaCallEnums").VideoState.Enabled
              )
                return !0;
            }
            return !1;
          },
        ),
        X = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          "change:callLinkState change:state",
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
        Y = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection"),
          "change:pendingCallLink",
          function () {
            return r("WAWebCallCollection").pendingCallLink;
          },
        ),
        J = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          "change:callLinkState change:state",
          function () {
            var e, t;
            return (e =
              (t = r("WAWebCallCollection").activeCall) == null
                ? void 0
                : t.isInCallLinkLobby()) != null
              ? e
              : !1;
          },
        ),
        Z = H === o("WAWebVoipWaCallEnums").CallState.CallActive,
        ee = J && !Z && !j,
        te = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          "change:isGroup",
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
        ne = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents
              .GROUP_CALL_PARTICIPANT_STATES,
          ),
          function () {
            var e, t;
            return (e =
              (t = r("WAWebCallCollection").activeCall) == null ||
              (t = t.groupCallParticipantsConnected) == null
                ? void 0
                : t.length) != null
              ? e
              : 0;
          },
        ),
        re = o("WAWebVoipLobbyUtils").isLobbyApplicableForCallState(te, H),
        oe = V || c || Q,
        ae = K && !j && !re,
        ie = ae ? I(R, C) : b,
        le;
      z
        ? (le = L.MIN_SURVEY_HEIGHT)
        : j
          ? (le = L.MIN_MOVE_CALL_HERE_HEIGHT)
          : X
            ? (le = oe
                ? L.MIN_CALL_LINK_VIDEO_PREVIEW_HEIGHT
                : L.MIN_CALL_LINK_AUDIO_PREVIEW_HEIGHT)
            : Y != null
              ? (le = Y.isVideo
                  ? L.MIN_CALL_LINK_VIDEO_PREVIEW_HEIGHT
                  : L.MIN_CALL_LINK_AUDIO_PREVIEW_HEIGHT)
              : re
                ? (le = oe
                    ? L.MIN_VIDEO_CALL_LOBBY_HEIGHT
                    : L.MIN_VOICE_CALL_LOBBY_HEIGHT)
                : oe
                  ? (le = L.MIN_VIDEO_CALL_HEIGHT)
                  : ne > 2
                    ? (le = L.MIN_GROUP_AUDIO_CALL_HEIGHT)
                    : (le = L.MIN_VOICE_CALL_HEIGHT);
      var se;
      re
        ? (se = L.MIN_VIDEO_CALL_WIDTH)
        : ee
          ? (se = L.LOBBY_SELF_PREVIEW_WIDTH + L.SHARE_PANEL_WIDTH)
          : oe
            ? (se = L.MIN_VIDEO_CALL_WIDTH)
            : (se = L.MIN_VOICE_CALL_WIDTH);
      var ue;
      ee
        ? (ue = L.LOBBY_SELF_PREVIEW_WIDTH + L.SHARE_PANEL_WIDTH)
        : oe
          ? (ue = L.INITIAL_VIDEO_CALL_WIDTH)
          : (ue = L.INITIAL_VOICE_CALL_WIDTH);
      var ce = { width: ue },
        de = function (t, n, r) {
          var e = v.current;
          if (e) {
            var o = e.offsetHeight;
            x.current = { width: t, height: o };
          }
        },
        me = function () {
          o("WAWebVoipActivityTracker").trackUiActivity(
            o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_WINDOW_RESIZE,
          );
        },
        pe = function () {
          o("WAWebVoipActivityTracker").trackUiActivity(
            o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_WINDOW_DRAG,
          );
        };
      (m(
        function () {
          var e = N.current;
          if (((N.current = j), j && !e)) {
            var t;
            v.current &&
              (D.current = {
                width: v.current.offsetWidth,
                height: v.current.offsetHeight,
              });
            var n = {
              width: Math.max((t = $.current) != null ? t : se, se),
              height: L.MIN_MOVE_CALL_HERE_HEIGHT,
            };
            F(n);
          } else if (!j && e) {
            var r = x.current || D.current;
            if (r) {
              var o = {
                width: Math.max(r.width, se),
                height: Math.max(r.height, le),
              };
              (F(o), (D.current = null));
            }
          }
        },
        [j, se, le],
      ),
        m(
          function () {
            if (re && !X) {
              var e = v.current;
              if (e) {
                var t = e.offsetWidth,
                  n = e.offsetHeight,
                  r = G || H === o("WAWebVoipWaCallEnums").CallState.Rejoining;
                if (r) {
                  t < L.MIN_VIDEO_CALL_WIDTH &&
                    F({ width: L.MIN_VIDEO_CALL_WIDTH, height: n });
                  return;
                }
                var a = oe
                    ? L.MIN_VIDEO_CALL_LOBBY_HEIGHT
                    : L.MIN_VOICE_CALL_LOBBY_HEIGHT,
                  i = {
                    width: Math.max(t, L.MIN_VIDEO_CALL_WIDTH),
                    height: Math.max(n, a),
                  };
                F(i);
              }
            } else {
              var l = M.current;
              if (((M.current = oe), oe && !l && !j)) {
                var s = v.current;
                if (s) {
                  var u = s.offsetWidth,
                    c = s.offsetHeight,
                    d =
                      u < L.MIN_VIDEO_CALL_WIDTH || c < L.MIN_VIDEO_CALL_HEIGHT;
                  if (d) {
                    var m, p;
                    ((m = T.current) == null ||
                      m.cancelDefaultHeightEnforcement(),
                      (p = T.current) == null ||
                        p.markExternalResizeInProgress(!0));
                  }
                  var _ = {
                    width: Math.max(u, L.MIN_VIDEO_CALL_WIDTH),
                    height: Math.max(c, L.MIN_VIDEO_CALL_HEIGHT),
                  };
                  F(_);
                }
              }
            }
          },
          [oe, j, re, G, H, X],
        ));
      var _e = _(ee);
      (o("useWAWebListener").useListener(
        o("WAWebVoipLobbyHeightUtils").WAWebVoipLobbyPanelStateEmitter,
        "panelStateChanged",
        function (e) {
          var t,
            n,
            r = e.connectedParticipantCount,
            a = e.hasNoParticipants,
            i = e.isExpanded,
            l = e.isVideoCall;
          if (!(!re || j || X)) {
            var s = v.current;
            if (s) {
              var u = l
                  ? o(
                      "WAWebVoipLobbyHeightUtils",
                    ).calculateIncomingGroupVideoLobbyHeight(r, i, a)
                  : o(
                      "WAWebVoipLobbyHeightUtils",
                    ).calculateIncomingGroupAudioLobbyHeight(r, i, a),
                c = s.offsetWidth;
              ((t = T.current) == null || t.cancelDefaultHeightEnforcement(),
                (n = T.current) == null || n.markExternalResizeInProgress(!0),
                F({ width: c, height: u }));
            }
          }
        },
      ),
        m(
          function () {
            var e = _e.current;
            if (((_e.current = ee), !j)) {
              var t = v.current;
              if (t) {
                var n = t.offsetWidth,
                  r = t.offsetHeight,
                  o = L.SHARE_PANEL_WIDTH;
                if (ee && !e) {
                  var a, i;
                  ((a = T.current) == null ||
                    a.cancelDefaultHeightEnforcement(),
                    (i = T.current) == null ||
                      i.markExternalResizeInProgress(!0));
                  var l = {
                    width: L.LOBBY_SELF_PREVIEW_WIDTH + o,
                    height: L.MIN_CALL_LINK_VIDEO_PREVIEW_HEIGHT,
                  };
                  F(l);
                } else if (!ee && e) {
                  var s, u;
                  ((s = T.current) == null ||
                    s.cancelDefaultHeightEnforcement(),
                    (u = T.current) == null ||
                      u.markExternalResizeInProgress(!0));
                  var c = {
                    width: Math.max(
                      n - o,
                      oe ? L.MIN_VIDEO_CALL_WIDTH : L.MIN_VOICE_CALL_WIDTH,
                    ),
                    height: r,
                  };
                  F(c);
                }
              }
            }
          },
          [ee, j, oe],
        ));
      var fe = _(!1),
        ge = ne > 2 && !oe && !re && !j;
      m(
        function () {
          var e = fe.current;
          if (((fe.current = ge), ge !== e)) {
            var t = v.current;
            if (t) {
              var n = t.offsetWidth,
                r = t.offsetHeight;
              if (ge) {
                var o = L.MIN_GROUP_AUDIO_CALL_HEIGHT;
                if (r < o) {
                  var a, i;
                  ((a = T.current) == null ||
                    a.cancelDefaultHeightEnforcement(),
                    (i = T.current) == null ||
                      i.markExternalResizeInProgress(!0),
                    F({ width: n, height: o }));
                }
              } else if (!oe) {
                var l = L.MIN_VOICE_CALL_HEIGHT;
                if (r > l) {
                  var s, u;
                  ((s = T.current) == null ||
                    s.cancelDefaultHeightEnforcement(),
                    (u = T.current) == null ||
                      u.markExternalResizeInProgress(!0),
                    F({ width: n, height: l }));
                }
              }
            }
          }
        },
        [ge, oe],
      );
      var he = _(re);
      m(
        function () {
          var e = he.current;
          if (((he.current = re), e && !re)) {
            if (oe || ne > 2 || j) return;
            var t = v.current;
            if (!t) return;
            var n = t.offsetWidth,
              r = t.offsetHeight,
              o = L.MIN_VOICE_CALL_HEIGHT;
            if (r > o) {
              var a, i;
              ((a = T.current) == null || a.cancelDefaultHeightEnforcement(),
                (i = T.current) == null || i.markExternalResizeInProgress(!0),
                F({ width: n, height: o }));
            }
          }
        },
        [re, oe, ne, j],
      );
      var ye = r("WAWebEnvironment").isGuest || B;
      m(
        function () {
          if (!ye && v.current != null) {
            var e = v.current;
            ((e.style.transform = "scale(" + k + ")"),
              (e.style.opacity = "0"),
              window.requestAnimationFrame(function () {
                r("WAWebVelocityAnimate")(
                  e,
                  { scale: [1, k], opacity: [1, 0] },
                  { duration: E, easing: "easeOutElastic" },
                ).finally(function () {
                  ((e.style.transform = ""), (e.style.opacity = ""));
                });
              }));
          }
        },
        [ye],
      );
      var Ce = G || j || re || X || ge,
        be = p(
          function () {
            return { isFullScreen: B, enterFullScreen: q, exitFullScreen: U };
          },
          [B, q, U],
        );
      return ye
        ? u.jsx(r("WAWebVoipFullScreenContext").Provider, {
            value: be,
            children: u.jsxs(r("WAWebVoipUiPopoutWindowContext").Provider, {
              value: y,
              children: [
                u.jsx(
                  o("WAWebVoipPopoutModalManagerWrapper.react")
                    .VoipPopoutModalManagerWrapper,
                  {
                    type: o("WAWebVoipPopoutModalManagerWrapper.react")
                      .ModalType,
                  },
                ),
                u.jsx("div", {
                  ref: S,
                  className:
                    "xixxii4 x13vifvy x1ey2m1c x1o0tod xtijo5x x67bb7w",
                  children:
                    l != null
                      ? u.jsx(o("WAWebVoipUiLoadable").WAWebVoipUiLoadable, {
                          callLogMsg: l,
                        })
                      : u.jsx(o("WAWebVoipUiLoadable").WAWebVoipUiLoadable, {
                          callLogMsg: null,
                        }),
                }),
              ],
            }),
          })
        : u.jsx(r("WAWebVoipFullScreenContext").Provider, {
            value: be,
            children: u.jsx(
              o("WAWebPipFloatingVideoPlayer.react").FloatingVideoPlayer,
              {
                ref: S,
                aspectRatio: ie,
                initialPiPStyle: ce,
                animationStartStyle: i,
                enableDragBar: !1,
                dragCursor: "grab",
                minWidthOverride: se,
                minHeightOverride: le,
                moveResizeRef: T,
                independentResize: !ae,
                useChatListPanelPositioning: !0,
                disableResize: Ce ? !0 : void 0,
                onResize: de,
                onResizeEnd: me,
                onMoveEnd: pe,
                onInitialWidthCalculated: P,
                externalResize: A,
                moveResizeContainerXstyle: [
                  h.moveResizeContainer,
                  h.voipBorderRadius,
                  g && h.voipBorder,
                ],
                children:
                  l != null
                    ? u.jsx(o("WAWebVoipUiLoadable").WAWebVoipUiLoadable, {
                        callLogMsg: l,
                      })
                    : u.jsx(o("WAWebVoipUiLoadable").WAWebVoipUiLoadable, {
                        callLogMsg: null,
                      }),
              },
            ),
          });
    }
    ((T.displayName = T.name + " [from " + i.id + "]"), (l.default = T));
  },
  98,
);
