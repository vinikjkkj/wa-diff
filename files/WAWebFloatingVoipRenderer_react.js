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
    "react-compiler-runtime",
    "useMergeRefs",
    "useWAWebEventTargetValue",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useMemo,
      p = u.useRef,
      _ = u.useState,
      f = "#3a3c3c",
      g = {
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
      h = {
        isContextInPopoutWindow: !0,
        popoverPortalEl: null,
        documentEl: document,
        windowEl: window,
        isDocPip: !1,
      },
      y = 640,
      C = y / (y * (3 / 4) + 60),
      b = 48,
      v = 16,
      S = 4 / 3,
      R = {
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
      L = 250,
      E = 0.8;
    function k(e, t) {
      var n = t / e,
        r = n + b + v;
      return t / r;
    }
    function I(e) {
      var t,
        n = o("react-compiler-runtime").c(94),
        a = e.ref,
        i = e.animationStartStyle,
        l = e.msg,
        u = (t = l == null ? void 0 : l.isVideoCall) != null ? t : !1,
        c = o("WAWebThemeContext").useIsDarkTheme(),
        m = p(null),
        f = r("useMergeRefs")(a, m),
        b = p(null),
        v = p(null),
        I = p(null),
        W = p(null),
        q;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = function (t) {
            W.current == null && (W.current = t);
          }),
          (n[0] = q))
        : (q = n[0]);
      var U = q,
        V = p(!1),
        H = p(!1),
        G = _(null),
        z = G[0],
        j = G[1],
        K = _(!1),
        Q = K[0],
        X = K[1],
        Y;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y = function () {
            X(!0);
          }),
          (n[1] = Y))
        : (Y = n[1]);
      var J = Y,
        Z;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = function () {
            X(!1);
          }),
          (n[2] = Z))
        : (Z = n[2]);
      var ee = Z,
        te = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          "change:isVideo",
          B,
        ),
        ne = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          "change:state",
          O,
        ),
        re =
          ne === o("WAWebVoipWaCallEnums").CallState.ReceivedCall ||
          ne === o("WAWebVoipWaCallEnums").CallState.ReceivedCallWithoutOffer,
        oe = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          "change:shouldShowPostCallSurvey",
          F,
        ),
        ae;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((ae = function () {
            var e, t;
            return (
              (e = b.current) == null || e.cancelDefaultHeightEnforcement(),
              (t = b.current) == null || t.markExternalResizeInProgress(!0),
              o(
                "WAWebVoipUiPopoutWindowPortalContainer.react",
              ).getIsCallActiveInPopoutWindow()
            );
          }),
          (n[3] = ae))
        : (ae = n[3]);
      var ie = r("useWAWebEventTargetValue")(
          o("WAWebVoipUiPopoutWindowPortalContainer.react")
            .WAWebVoipUiPopoutWindowEventEmitter,
          "setPopoutWindowProps",
          ae,
        ),
        le = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          "change:videoState",
          A,
        ),
        se = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          "participantVideoStateChange change:videoState change:selfVideoState",
          w,
        ),
        ue = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          "change:callLinkState change:state",
          M,
        ),
        ce = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection"),
          "change:pendingCallLink",
          N,
        ),
        de = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          "change:callLinkState change:state",
          P,
        ),
        me = ne === o("WAWebVoipWaCallEnums").CallState.CallActive,
        pe = de && !me && !ie,
        _e = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          "change:isGroup",
          $,
        ),
        fe;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((fe = o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents
              .GROUP_CALL_PARTICIPANT_STATES,
          )),
          (n[4] = fe))
        : (fe = n[4]);
      var ge = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection").activeCall,
          fe,
          x,
        ),
        he;
      n[5] !== ne || n[6] !== _e
        ? ((he = o("WAWebVoipLobbyUtils").isLobbyApplicableForCallState(
            _e,
            ne,
          )),
          (n[5] = ne),
          (n[6] = _e),
          (n[7] = he))
        : (he = n[7]);
      var ye = he,
        Ce = te || u || se,
        be = le && !ie && !ye,
        ve;
      n[8] !== be
        ? ((ve = be ? k(S, y) : C), (n[8] = be), (n[9] = ve))
        : (ve = n[9]);
      var Se = ve,
        Re;
      n[10] !== ge ||
      n[11] !== ie ||
      n[12] !== ue ||
      n[13] !== ye ||
      n[14] !== ce ||
      n[15] !== oe ||
      n[16] !== Ce
        ? (oe
            ? (Re = R.MIN_SURVEY_HEIGHT)
            : ie
              ? (Re = R.MIN_MOVE_CALL_HERE_HEIGHT)
              : ue
                ? (Re = Ce
                    ? R.MIN_CALL_LINK_VIDEO_PREVIEW_HEIGHT
                    : R.MIN_CALL_LINK_AUDIO_PREVIEW_HEIGHT)
                : ce != null
                  ? (Re = ce.isVideo
                      ? R.MIN_CALL_LINK_VIDEO_PREVIEW_HEIGHT
                      : R.MIN_CALL_LINK_AUDIO_PREVIEW_HEIGHT)
                  : ye
                    ? (Re = Ce
                        ? R.MIN_VIDEO_CALL_LOBBY_HEIGHT
                        : R.MIN_VOICE_CALL_LOBBY_HEIGHT)
                    : Ce
                      ? (Re = R.MIN_VIDEO_CALL_HEIGHT)
                      : ge > 2
                        ? (Re = R.MIN_GROUP_AUDIO_CALL_HEIGHT)
                        : (Re = R.MIN_VOICE_CALL_HEIGHT),
          (n[10] = ge),
          (n[11] = ie),
          (n[12] = ue),
          (n[13] = ye),
          (n[14] = ce),
          (n[15] = oe),
          (n[16] = Ce),
          (n[17] = Re))
        : (Re = n[17]);
      var Le;
      n[18] !== ye || n[19] !== pe || n[20] !== Ce
        ? (ye
            ? (Le = R.MIN_VIDEO_CALL_WIDTH)
            : pe
              ? (Le = R.LOBBY_SELF_PREVIEW_WIDTH + R.SHARE_PANEL_WIDTH)
              : Ce
                ? (Le = R.MIN_VIDEO_CALL_WIDTH)
                : (Le = R.MIN_VOICE_CALL_WIDTH),
          (n[18] = ye),
          (n[19] = pe),
          (n[20] = Ce),
          (n[21] = Le))
        : (Le = n[21]);
      var Ee;
      pe
        ? (Ee = R.LOBBY_SELF_PREVIEW_WIDTH + R.SHARE_PANEL_WIDTH)
        : Ce
          ? (Ee = R.INITIAL_VIDEO_CALL_WIDTH)
          : (Ee = R.INITIAL_VOICE_CALL_WIDTH);
      var ke;
      n[22] !== Ee
        ? ((ke = { width: Ee }), (n[22] = Ee), (n[23] = ke))
        : (ke = n[23]);
      var Ie = ke,
        Te;
      n[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((Te = function (t, n, r) {
            var e = m.current;
            if (e) {
              var o = e.offsetHeight;
              I.current = { width: t, height: o };
            }
          }),
          (n[24] = Te))
        : (Te = n[24]);
      var De = Te,
        xe = D,
        $e = T,
        Pe;
      n[25] !== ie || n[26] !== Re || n[27] !== Le
        ? ((Pe = function () {
            var e = V.current;
            if (((V.current = ie), ie && !e)) {
              var t;
              m.current &&
                (v.current = {
                  width: m.current.offsetWidth,
                  height: m.current.offsetHeight,
                });
              var n = {
                width: Math.max((t = W.current) != null ? t : Le, Le),
                height: R.MIN_MOVE_CALL_HERE_HEIGHT,
              };
              j(n);
            } else if (!ie && e) {
              var r = I.current || v.current;
              if (r) {
                var o = {
                  width: Math.max(r.width, Le),
                  height: Math.max(r.height, Re),
                };
                (j(o), (v.current = null));
              }
            }
          }),
          (n[25] = ie),
          (n[26] = Re),
          (n[27] = Le),
          (n[28] = Pe))
        : (Pe = n[28]);
      var Ne;
      (n[29] !== ie || n[30] !== Re || n[31] !== Le
        ? ((Ne = [ie, Le, Re]),
          (n[29] = ie),
          (n[30] = Re),
          (n[31] = Le),
          (n[32] = Ne))
        : (Ne = n[32]),
        d(Pe, Ne));
      var Me, we;
      (n[33] !== ne ||
      n[34] !== ie ||
      n[35] !== ue ||
      n[36] !== re ||
      n[37] !== ye ||
      n[38] !== Ce
        ? ((Me = function () {
            if (ye && !ue) {
              var e = m.current;
              if (e) {
                var t = e.offsetWidth,
                  n = e.offsetHeight,
                  r =
                    re || ne === o("WAWebVoipWaCallEnums").CallState.Rejoining;
                if (r) {
                  t < R.MIN_VIDEO_CALL_WIDTH &&
                    j({ width: R.MIN_VIDEO_CALL_WIDTH, height: n });
                  return;
                }
                var a = Ce
                    ? R.MIN_VIDEO_CALL_LOBBY_HEIGHT
                    : R.MIN_VOICE_CALL_LOBBY_HEIGHT,
                  i = {
                    width: Math.max(t, R.MIN_VIDEO_CALL_WIDTH),
                    height: Math.max(n, a),
                  };
                j(i);
              }
            } else {
              var l = H.current;
              if (((H.current = Ce), Ce && !l && !ie)) {
                var s = m.current;
                if (s) {
                  var u = s.offsetWidth,
                    c = s.offsetHeight,
                    d =
                      u < R.MIN_VIDEO_CALL_WIDTH || c < R.MIN_VIDEO_CALL_HEIGHT;
                  if (d) {
                    var p, _;
                    ((p = b.current) == null ||
                      p.cancelDefaultHeightEnforcement(),
                      (_ = b.current) == null ||
                        _.markExternalResizeInProgress(!0));
                  }
                  var f = {
                    width: Math.max(u, R.MIN_VIDEO_CALL_WIDTH),
                    height: Math.max(c, R.MIN_VIDEO_CALL_HEIGHT),
                  };
                  j(f);
                }
              }
            }
          }),
          (we = [Ce, ie, ye, re, ne, ue]),
          (n[33] = ne),
          (n[34] = ie),
          (n[35] = ue),
          (n[36] = re),
          (n[37] = ye),
          (n[38] = Ce),
          (n[39] = Me),
          (n[40] = we))
        : ((Me = n[39]), (we = n[40])),
        d(Me, we));
      var Ae = p(pe),
        Fe;
      (n[41] !== ie || n[42] !== ue || n[43] !== ye
        ? ((Fe = function (t) {
            var e,
              n,
              r = t.connectedParticipantCount,
              a = t.hasNoParticipants,
              i = t.isExpanded,
              l = t.isVideoCall;
            if (!(!ye || ie || ue)) {
              var s = m.current;
              if (s) {
                var u = l
                    ? o(
                        "WAWebVoipLobbyHeightUtils",
                      ).calculateIncomingGroupVideoLobbyHeight(r, i, a)
                    : o(
                        "WAWebVoipLobbyHeightUtils",
                      ).calculateIncomingGroupAudioLobbyHeight(r, i, a),
                  c = s.offsetWidth;
                ((e = b.current) == null || e.cancelDefaultHeightEnforcement(),
                  (n = b.current) == null || n.markExternalResizeInProgress(!0),
                  j({ width: c, height: u }));
              }
            }
          }),
          (n[41] = ie),
          (n[42] = ue),
          (n[43] = ye),
          (n[44] = Fe))
        : (Fe = n[44]),
        o("useWAWebListener").useListener(
          o("WAWebVoipLobbyHeightUtils").WAWebVoipLobbyPanelStateEmitter,
          "panelStateChanged",
          Fe,
        ));
      var Oe, Be;
      (n[45] !== ie || n[46] !== pe || n[47] !== Ce
        ? ((Oe = function () {
            var e = Ae.current;
            if (((Ae.current = pe), !ie)) {
              var t = m.current;
              if (t) {
                var n = t.offsetWidth,
                  r = t.offsetHeight,
                  o = R.SHARE_PANEL_WIDTH;
                if (pe && !e) {
                  var a, i;
                  ((a = b.current) == null ||
                    a.cancelDefaultHeightEnforcement(),
                    (i = b.current) == null ||
                      i.markExternalResizeInProgress(!0));
                  var l = {
                    width: R.LOBBY_SELF_PREVIEW_WIDTH + o,
                    height: R.MIN_CALL_LINK_VIDEO_PREVIEW_HEIGHT,
                  };
                  j(l);
                } else if (!pe && e) {
                  var s, u;
                  ((s = b.current) == null ||
                    s.cancelDefaultHeightEnforcement(),
                    (u = b.current) == null ||
                      u.markExternalResizeInProgress(!0));
                  var c = {
                    width: Math.max(
                      n - o,
                      Ce ? R.MIN_VIDEO_CALL_WIDTH : R.MIN_VOICE_CALL_WIDTH,
                    ),
                    height: r,
                  };
                  j(c);
                }
              }
            }
          }),
          (Be = [pe, ie, Ce]),
          (n[45] = ie),
          (n[46] = pe),
          (n[47] = Ce),
          (n[48] = Oe),
          (n[49] = Be))
        : ((Oe = n[48]), (Be = n[49])),
        d(Oe, Be));
      var We = p(!1),
        qe = ge > 2 && !Ce && !ye && !ie,
        Ue,
        Ve;
      (n[50] !== Ce || n[51] !== qe
        ? ((Ue = function () {
            var e = We.current;
            if (((We.current = qe), qe !== e)) {
              var t = m.current;
              if (t) {
                var n = t.offsetWidth,
                  r = t.offsetHeight;
                if (qe) {
                  var o = R.MIN_GROUP_AUDIO_CALL_HEIGHT;
                  if (r < o) {
                    var a, i;
                    ((a = b.current) == null ||
                      a.cancelDefaultHeightEnforcement(),
                      (i = b.current) == null ||
                        i.markExternalResizeInProgress(!0),
                      j({ width: n, height: o }));
                  }
                } else if (!Ce) {
                  var l = R.MIN_VOICE_CALL_HEIGHT;
                  if (r > l) {
                    var s, u;
                    ((s = b.current) == null ||
                      s.cancelDefaultHeightEnforcement(),
                      (u = b.current) == null ||
                        u.markExternalResizeInProgress(!0),
                      j({ width: n, height: l }));
                  }
                }
              }
            }
          }),
          (Ve = [qe, Ce]),
          (n[50] = Ce),
          (n[51] = qe),
          (n[52] = Ue),
          (n[53] = Ve))
        : ((Ue = n[52]), (Ve = n[53])),
        d(Ue, Ve));
      var He = p(ye),
        Ge,
        ze;
      (n[54] !== ge || n[55] !== ie || n[56] !== ye || n[57] !== Ce
        ? ((Ge = function () {
            var e = He.current;
            if (((He.current = ye), e && !ye)) {
              if (Ce || ge > 2 || ie) return;
              var t = m.current;
              if (!t) return;
              var n = t.offsetWidth,
                r = t.offsetHeight,
                o = R.MIN_VOICE_CALL_HEIGHT;
              if (r > o) {
                var a, i;
                ((a = b.current) == null || a.cancelDefaultHeightEnforcement(),
                  (i = b.current) == null || i.markExternalResizeInProgress(!0),
                  j({ width: n, height: o }));
              }
            }
          }),
          (ze = [ye, Ce, ge, ie]),
          (n[54] = ge),
          (n[55] = ie),
          (n[56] = ye),
          (n[57] = Ce),
          (n[58] = Ge),
          (n[59] = ze))
        : ((Ge = n[58]), (ze = n[59])),
        d(Ge, ze));
      var je = r("WAWebEnvironment").isGuest || Q,
        Ke,
        Qe;
      (n[60] !== je
        ? ((Ke = function () {
            if (!je && m.current != null) {
              var e = m.current;
              ((e.style.transform = "scale(" + E + ")"),
                (e.style.opacity = "0"),
                window.requestAnimationFrame(function () {
                  r("WAWebVelocityAnimate")(
                    e,
                    { scale: [1, E], opacity: [1, 0] },
                    { duration: L, easing: "easeOutElastic" },
                  ).finally(function () {
                    ((e.style.transform = ""), (e.style.opacity = ""));
                  });
                }));
            }
          }),
          (Qe = [je]),
          (n[60] = je),
          (n[61] = Ke),
          (n[62] = Qe))
        : ((Ke = n[61]), (Qe = n[62])),
        d(Ke, Qe));
      var Xe = re || ie || ye || ue || qe,
        Ye;
      n[63] !== Q
        ? ((Ye = { isFullScreen: Q, enterFullScreen: J, exitFullScreen: ee }),
          (n[63] = Q),
          (n[64] = Ye))
        : (Ye = n[64]);
      var Je = Ye;
      if (je) {
        var Ze;
        n[65] === Symbol.for("react.memo_cache_sentinel")
          ? ((Ze = s.jsx(
              o("WAWebVoipPopoutModalManagerWrapper.react")
                .VoipPopoutModalManagerWrapper,
              { type: o("WAWebVoipPopoutModalManagerWrapper.react").ModalType },
            )),
            (n[65] = Ze))
          : (Ze = n[65]);
        var et;
        n[66] === Symbol.for("react.memo_cache_sentinel")
          ? ((et = {
              className: "xixxii4 x13vifvy x1ey2m1c x1o0tod xtijo5x x67bb7w",
            }),
            (n[66] = et))
          : (et = n[66]);
        var tt;
        n[67] !== l
          ? ((tt =
              l != null
                ? s.jsx(o("WAWebVoipUiLoadable").WAWebVoipUiLoadable, {
                    callLogMsg: l,
                  })
                : s.jsx(o("WAWebVoipUiLoadable").WAWebVoipUiLoadable, {
                    callLogMsg: null,
                  })),
            (n[67] = l),
            (n[68] = tt))
          : (tt = n[68]);
        var nt;
        n[69] !== f || n[70] !== tt
          ? ((nt = s.jsxs(r("WAWebVoipUiPopoutWindowContext").Provider, {
              value: h,
              children: [
                Ze,
                s.jsx(
                  "div",
                  babelHelpers.extends({ ref: f }, et, { children: tt }),
                ),
              ],
            })),
            (n[69] = f),
            (n[70] = tt),
            (n[71] = nt))
          : (nt = n[71]);
        var rt;
        return (
          n[72] !== Je || n[73] !== nt
            ? ((rt = s.jsx(r("WAWebVoipFullScreenContext").Provider, {
                value: Je,
                children: nt,
              })),
              (n[72] = Je),
              (n[73] = nt),
              (n[74] = rt))
            : (rt = n[74]),
          rt
        );
      }
      var ot = !be,
        at = Xe ? !0 : void 0,
        it = c && g.voipBorder,
        lt;
      n[75] !== it
        ? ((lt = [g.moveResizeContainer, g.voipBorderRadius, it]),
          (n[75] = it),
          (n[76] = lt))
        : (lt = n[76]);
      var st;
      n[77] !== l
        ? ((st =
            l != null
              ? s.jsx(o("WAWebVoipUiLoadable").WAWebVoipUiLoadable, {
                  callLogMsg: l,
                })
              : s.jsx(o("WAWebVoipUiLoadable").WAWebVoipUiLoadable, {
                  callLogMsg: null,
                })),
          (n[77] = l),
          (n[78] = st))
        : (st = n[78]);
      var ut;
      n[79] !== i ||
      n[80] !== z ||
      n[81] !== Ie ||
      n[82] !== f ||
      n[83] !== Re ||
      n[84] !== Le ||
      n[85] !== ot ||
      n[86] !== at ||
      n[87] !== lt ||
      n[88] !== st ||
      n[89] !== Se
        ? ((ut = s.jsx(
            o("WAWebPipFloatingVideoPlayer.react").FloatingVideoPlayer,
            {
              ref: f,
              aspectRatio: Se,
              initialPiPStyle: Ie,
              animationStartStyle: i,
              enableDragBar: !1,
              dragCursor: "grab",
              minWidthOverride: Le,
              minHeightOverride: Re,
              moveResizeRef: b,
              independentResize: ot,
              useChatListPanelPositioning: !0,
              disableResize: at,
              onResize: De,
              onResizeEnd: xe,
              onMoveEnd: $e,
              onInitialWidthCalculated: U,
              externalResize: z,
              moveResizeContainerXstyle: lt,
              children: st,
            },
          )),
          (n[79] = i),
          (n[80] = z),
          (n[81] = Ie),
          (n[82] = f),
          (n[83] = Re),
          (n[84] = Le),
          (n[85] = ot),
          (n[86] = at),
          (n[87] = lt),
          (n[88] = st),
          (n[89] = Se),
          (n[90] = ut))
        : (ut = n[90]);
      var ct;
      return (
        n[91] !== Je || n[92] !== ut
          ? ((ct = s.jsx(r("WAWebVoipFullScreenContext").Provider, {
              value: Je,
              children: ut,
            })),
            (n[91] = Je),
            (n[92] = ut),
            (n[93] = ct))
          : (ct = n[93]),
        ct
      );
    }
    function T() {
      o("WAWebVoipActivityTracker").trackUiActivity(
        o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_WINDOW_DRAG,
      );
    }
    function D() {
      o("WAWebVoipActivityTracker").trackUiActivity(
        o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_WINDOW_RESIZE,
      );
    }
    function x() {
      var e, t;
      return (e =
        (t = r("WAWebCallCollection").activeCall) == null ||
        (t = t.groupCallParticipantsConnected) == null
          ? void 0
          : t.length) != null
        ? e
        : 0;
    }
    function $() {
      var e, t;
      return (e =
        (t = r("WAWebCallCollection").activeCall) == null
          ? void 0
          : t.isGroup) != null
        ? e
        : !1;
    }
    function P() {
      var e, t;
      return (e =
        (t = r("WAWebCallCollection").activeCall) == null
          ? void 0
          : t.isInCallLinkLobby()) != null
        ? e
        : !1;
    }
    function N() {
      return r("WAWebCallCollection").pendingCallLink;
    }
    function M() {
      var e, t;
      return (e =
        (t = r("WAWebCallCollection").activeCall) == null
          ? void 0
          : t.isInCallLinkPreview()) != null
        ? e
        : !1;
    }
    function w() {
      var e = r("WAWebCallCollection").activeCall;
      if (e == null || !e.isGroup) return !1;
      if (e.selfVideoState === o("WAWebVoipWaCallEnums").VideoState.Enabled)
        return !0;
      for (var t of (n = e.groupCallParticipantsConnected) != null ? n : []) {
        var n;
        if (
          e.getParticipantVideoState(t) ===
          o("WAWebVoipWaCallEnums").VideoState.Enabled
        )
          return !0;
      }
      return !1;
    }
    function A() {
      var e, t;
      return (e =
        (t = r("WAWebCallCollection").activeCall) == null
          ? void 0
          : t.shouldShowPeerVideo()) != null
        ? e
        : !1;
    }
    function F() {
      var e, t;
      return (e =
        (t = r("WAWebCallCollection").activeCall) == null
          ? void 0
          : t.shouldShowPostCallSurvey) != null
        ? e
        : !1;
    }
    function O() {
      var e;
      return (e = r("WAWebCallCollection").activeCall) == null
        ? void 0
        : e.getState();
    }
    function B() {
      var e, t;
      return (e =
        (t = r("WAWebCallCollection").activeCall) == null
          ? void 0
          : t.isVideo) != null
        ? e
        : !1;
    }
    l.default = I;
  },
  98,
);
