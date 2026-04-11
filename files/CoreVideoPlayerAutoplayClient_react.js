__d(
  "CoreVideoPlayerAutoplayClient.react",
  [
    "CoreVideoPlayerAutoplayClientUtils",
    "HiddenSubtreePassiveContext",
    "VideoPlayerAutoplayHooks",
    "VideoPlayerDebugAutoplayAPI",
    "VideoPlayerHooks",
    "VideoPlayerViewabilityConstants",
    "WwwCometVideoAutoplayFalcoEvent",
    "evaluateVideoAutoplayDefaultAllowRule",
    "evaluateVideoAutoplayDefaultIgnoreRule",
    "makeSelectedAutoplayVideoSymbol",
    "react",
    "react-compiler-runtime",
    "useAutoplayRulesEngine",
    "useConcurrentAutoplayManagementAPI",
    "useVideoAutoplayState",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = e || (e = o("react")),
      c = u.useCallback,
      d = u.useContext,
      m = u.useEffect,
      p = u.useId,
      _ = u.useMemo,
      f = u.useRef,
      g = u.useState;
    function h() {
      var e = o("react-compiler-runtime").c(70),
        t = p(),
        n = (s || (s = o("VideoPlayerHooks"))).useCanAutoplay(),
        a = s.useInstanceKey(),
        i;
      e[0] !== t || e[1] !== a
        ? ((i = r("makeSelectedAutoplayVideoSymbol")(t, a)),
          (e[0] = t),
          (e[1] = a),
          (e[2] = i))
        : (i = e[2]);
      var l = i,
        u = f(l),
        c,
        _;
      (e[3] !== l
        ? ((c = function () {
            u.current = l;
          }),
          (_ = [l]),
          (e[3] = l),
          (e[4] = c),
          (e[5] = _))
        : ((c = e[4]), (_ = e[5])),
        m(c, _));
      var h = d(r("HiddenSubtreePassiveContext")),
        y = s.useController(),
        C = f(!1),
        b = o("useConcurrentAutoplayManagementAPI").useAutoplayControlID(),
        v,
        S;
      (e[6] !== b || e[7] !== y
        ? ((v = function () {
            (o("CoreVideoPlayerAutoplayClientUtils").log(
              u.current,
              "[ASSUME CONTROL] " + b,
            ),
              y.registerControllingComponent(b));
          }),
          (S = [y, b]),
          (e[6] = b),
          (e[7] = y),
          (e[8] = v),
          (e[9] = S))
        : ((v = e[8]), (S = e[9])),
        m(v, S));
      var R = s.useVideoPlayerPassiveViewabilityInfo(),
        L = s.usePaused(),
        E = f(L),
        k = o("VideoPlayerAutoplayHooks").useVideoAutoplayLocalScope(),
        I = f(k),
        T,
        D;
      (e[10] !== k
        ? ((T = function () {
            I.current = k;
          }),
          (D = [k]),
          (e[10] = k),
          (e[11] = T),
          (e[12] = D))
        : ((T = e[11]), (D = e[12])),
        m(T, D));
      var x;
      e[13] !== y || e[14] !== R
        ? ((x = function () {
            var e = y.getCurrentState(),
              t = e.lastPlayReason,
              n = e.paused,
              o = E.current;
            E.current = n;
            var a = R == null ? void 0 : R.getCurrent();
            if (a) {
              var i = a.visiblePercentage,
                l = !n && n !== o,
                s =
                  i <
                    r("VideoPlayerViewabilityConstants")
                      .DEFAULT_VIEWABILITY_PERCENTAGE_FOR_PAUSE && i > 0;
              I.current.disableScrollBeforePlayWhenOffscreen !== !0 &&
                l &&
                t === "user_initiated" &&
                s &&
                (C.current = !0);
            }
          }),
          (e[13] = y),
          (e[14] = R),
          (e[15] = x))
        : (x = e[15]);
      var $ = x,
        P = f($),
        N,
        M;
      (e[16] !== $
        ? ((N = function () {
            P.current = $;
          }),
          (M = [$]),
          (e[16] = $),
          (e[17] = N),
          (e[18] = M))
        : ((N = e[17]), (M = e[18])),
        m(N, M));
      var w, A;
      (e[19] !== y || e[20] !== $
        ? ((w = function () {
            var e = y.subscribe(function () {
              $();
            });
            return function () {
              e.remove();
            };
          }),
          (A = [y, $]),
          (e[19] = y),
          (e[20] = $),
          (e[21] = w),
          (e[22] = A))
        : ((w = e[21]), (A = e[22])),
        m(w, A));
      var F;
      e[23] !== k.noPauseOnBlurOrFocus
        ? ((F = { noPauseOnBlurOrFocus: k.noPauseOnBlurOrFocus }),
          (e[23] = k.noPauseOnBlurOrFocus),
          (e[24] = F))
        : (F = e[24]);
      var O = r("useVideoAutoplayState")(F),
        B = r("useAutoplayRulesEngine")(k.autoplayLocalRules),
        W = r(
          n === "allow"
            ? "evaluateVideoAutoplayDefaultAllowRule"
            : "evaluateVideoAutoplayDefaultIgnoreRule",
        ),
        q;
      e[25] !== W
        ? ((q = function () {
            return W;
          }),
          (e[25] = W),
          (e[26] = q))
        : (q = e[26]);
      var U = g(q),
        V = U[0],
        H = U[1],
        G = g(null),
        z = G[0],
        j = G[1],
        K;
      e[27] !== B || e[28] !== W || e[29] !== O
        ? ((K = function () {
            return B.evaluateAutoplay(O, W);
          }),
          (e[27] = B),
          (e[28] = W),
          (e[29] = O),
          (e[30] = K))
        : (K = e[30]);
      var Q = g(K),
        X = Q[0],
        Y = Q[1],
        J = g(null),
        Z = J[0],
        ee = J[1],
        te = f(X),
        ne = o("VideoPlayerAutoplayHooks").useAutoplayApi(),
        re = f(ne),
        oe,
        ae;
      (e[31] !== ne
        ? ((oe = function () {
            re.current = ne;
          }),
          (ae = [ne]),
          (e[31] = ne),
          (e[32] = oe),
          (e[33] = ae))
        : ((oe = e[32]), (ae = e[33])),
        m(oe, ae));
      var ie = n !== "dangerously_disable_autoplay_management",
        le,
        se;
      (e[34] !== ne ||
      e[35] !== k ||
      e[36] !== y ||
      e[37] !== h ||
      e[38] !== a ||
      e[39] !== ie ||
      e[40] !== l
        ? ((le = function () {
            return (
              ne.register(l, a, k, y, h, ie),
              r("WwwCometVideoAutoplayFalcoEvent").log(function () {
                return {
                  autoplay_event_name: "register",
                  autoplay_scope_id: I.current.autoplayScopeID,
                  event_creation_time: Date.now(),
                  initiator: u.current,
                  initiator_type: "autoplay_component",
                  selected_autoplay_video_symbol:
                    ne.getAutoplayManagerDebugInfo(I.current)
                      .selectedAutoplayVideoSymbol,
                  target: u.current,
                  target_current_autoplay_decision: te.current,
                };
              }),
              function () {
                (ne.unregister(l),
                  r("WwwCometVideoAutoplayFalcoEvent").log(function () {
                    return {
                      autoplay_event_name: "unregister",
                      autoplay_scope_id: I.current.autoplayScopeID,
                      event_creation_time: Date.now(),
                      initiator: u.current,
                      initiator_type: "autoplay_component",
                      selected_autoplay_video_symbol:
                        ne.getAutoplayManagerDebugInfo(I.current)
                          .selectedAutoplayVideoSymbol,
                      target: u.current,
                      target_current_autoplay_decision: te.current,
                    };
                  }));
              }
            );
          }),
          (se = [ne, k, y, h, a, ie, l]),
          (e[34] = ne),
          (e[35] = k),
          (e[36] = y),
          (e[37] = h),
          (e[38] = a),
          (e[39] = ie),
          (e[40] = l),
          (e[41] = le),
          (e[42] = se))
        : ((le = e[41]), (se = e[42])),
        m(le, se));
      var ue, ce;
      (e[43] !== ne ||
      e[44] !== b ||
      e[45] !== B ||
      e[46] !== y ||
      e[47] !== W ||
      e[48] !== h ||
      e[49] !== z ||
      e[50] !== Z ||
      e[51] !== l ||
      e[52] !== O ||
      e[53] !== R
        ? ((ue = function () {
            var e = function () {
                var e = B.evaluateAutoplay(O, W);
                te.current = e;
                var t = B.getRules(),
                  n = B.getIndexOfLastWinningRule(),
                  a = n >= 0 ? t[n] : W,
                  i = R && R.getCurrent(),
                  s = y.getCurrentState(),
                  c = s.paused;
                if (
                  ((Z === null || Z !== e) && (Y(e), ee(e)),
                  e === "PAUSE" && !c && y.isControllingComponent(b))
                ) {
                  var d = !0;
                  if ((P.current(), C.current)) {
                    C.current = !1;
                    var m = i == null ? void 0 : i.positionToViewport;
                    (m && y.scrollIntoView(m.top < 0), (d = !1));
                  }
                  if (d) {
                    var p =
                      "[PAUSE] via short-circuit on " +
                      (a.displayName || a.name) +
                      ".";
                    (o("CoreVideoPlayerAutoplayClientUtils").log(u.current, p),
                      y.pause("autoplay_initiated"),
                      r("WwwCometVideoAutoplayFalcoEvent").log(function () {
                        return {
                          autoplay_event_name: "pause",
                          autoplay_scope_id: I.current.autoplayScopeID,
                          event_creation_time: Date.now(),
                          initiator: u.current,
                          initiator_type: "autoplay_component",
                          selected_autoplay_video_symbol:
                            ne.getAutoplayManagerDebugInfo(I.current)
                              .selectedAutoplayVideoSymbol,
                          target: u.current,
                          target_current_autoplay_decision: e,
                        };
                      }));
                  }
                }
                ((z === null || z !== a) &&
                  (H(function () {
                    return a;
                  }),
                  j(function () {
                    return a;
                  }),
                  r("WwwCometVideoAutoplayFalcoEvent").log(function () {
                    return {
                      autoplay_event_name: "rule_changed",
                      autoplay_scope_id: I.current.autoplayScopeID,
                      event_creation_time: Date.now(),
                      initiator: u.current,
                      initiator_type: "autoplay_component",
                      selected_autoplay_video_symbol:
                        ne.getAutoplayManagerDebugInfo(I.current)
                          .selectedAutoplayVideoSymbol,
                      target: u.current,
                      target_current_autoplay_decision: e,
                    };
                  })),
                  o("CoreVideoPlayerAutoplayClientUtils").log(
                    u.current,
                    "[DECISION: " + e + "] from " + (a.displayName || a.name),
                  ),
                  i && ne.update(l, e, i));
              },
              t = h.subscribeToChanges(function (e) {
                h.getCurrentState().hidden || h.getCurrentState().backgrounded
                  ? y.isControllingComponent(b) ||
                    y.unregisterControllingComponent(b)
                  : y.registerControllingComponent(b);
              }),
              n = R
                ? R.subscribe(function () {
                    (h.getCurrentState().hidden ||
                    h.getCurrentState().backgrounded
                      ? y.isControllingComponent(b) ||
                        y.unregisterControllingComponent(b)
                      : y.registerControllingComponent(b),
                      e());
                  })
                : null;
            return (
              e(),
              function () {
                (t.remove(), n && n.remove());
              }
            );
          }),
          (ce = [ne, b, B, y, W, h, z, Z, H, Y, j, ee, l, O, R]),
          (e[43] = ne),
          (e[44] = b),
          (e[45] = B),
          (e[46] = y),
          (e[47] = W),
          (e[48] = h),
          (e[49] = z),
          (e[50] = Z),
          (e[51] = l),
          (e[52] = O),
          (e[53] = R),
          (e[54] = ue),
          (e[55] = ce))
        : ((ue = e[54]), (ce = e[55])),
        m(ue, ce));
      var de, me;
      (e[56] !== b || e[57] !== X || e[58] !== y
        ? ((de = function () {
            var e = y.isControllingComponent(b),
              t = y.getCurrentState(),
              n = t.paused;
            o("CoreVideoPlayerAutoplayClientUtils").componentShouldPause(
              X,
              te.current,
              n,
              e,
            ) &&
              (o("CoreVideoPlayerAutoplayClientUtils").log(
                u.current,
                "[PAUSE] the video for " + X,
              ),
              y.pause("autoplay_initiated"),
              r("WwwCometVideoAutoplayFalcoEvent").log(function () {
                return {
                  autoplay_event_name: "pause",
                  autoplay_scope_id: I.current.autoplayScopeID,
                  event_creation_time: Date.now(),
                  initiator: u.current,
                  initiator_type: "autoplay_component",
                  selected_autoplay_video_symbol:
                    re.current.getAutoplayManagerDebugInfo(I.current)
                      .selectedAutoplayVideoSymbol,
                  target: u.current,
                  target_current_autoplay_decision: X,
                };
              }));
          }),
          (me = [X, y, b]),
          (e[56] = b),
          (e[57] = X),
          (e[58] = y),
          (e[59] = de),
          (e[60] = me))
        : ((de = e[59]), (me = e[60])),
        m(de, me));
      var pe, _e;
      (e[61] !== b || e[62] !== y
        ? ((pe = function () {
            return function () {
              (o("CoreVideoPlayerAutoplayClientUtils").log(
                u.current,
                "[RELEASE CONTROL] " + b,
              ),
                y.unregisterControllingComponent(b));
            };
          }),
          (_e = [y, b]),
          (e[61] = b),
          (e[62] = y),
          (e[63] = pe),
          (e[64] = _e))
        : ((pe = e[63]), (_e = e[64])),
        m(pe, _e));
      var fe;
      return (
        e[65] !== V || e[66] !== X || e[67] !== k || e[68] !== l
          ? ((fe = {
              applicableRule: V,
              autoplayApiRef: re,
              autoplayDecision: X,
              autoplayLocalScope: k,
              symbol: l,
            }),
            (e[65] = V),
            (e[66] = X),
            (e[67] = k),
            (e[68] = l),
            (e[69] = fe))
          : (fe = e[69]),
        r("VideoPlayerDebugAutoplayAPI").useVideoPlayerDebugAPIDefinition(fe),
        null
      );
    }
    l.default = h;
  },
  98,
);
