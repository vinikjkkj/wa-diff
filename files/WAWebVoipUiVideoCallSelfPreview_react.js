__d(
  "WAWebVoipUiVideoCallSelfPreview.react",
  [
    "WALogger",
    "WAWebCallCollection",
    "WAWebCallParticipantInfo.react",
    "WAWebUserPrefsMeUser",
    "WAWebVelocityAnimate",
    "WAWebVoipRaisedHandDisplay.react",
    "WAWebVoipReactionDisplay.react",
    "WAWebVoipSelfPreviewPositionUtils",
    "WAWebVoipStackInterface",
    "WAWebVoipUiPopoutWindowContext",
    "WAWebVoipUiVideoCallSelfPreviewFullWidth.react",
    "WAWebVoipVideoRendererInterface",
    "WAWebVoipVideoRendererRegistry",
    "WAWebVoipWindowMetrics",
    "WDSIconIcMicOffFilled.react",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
    "useWAWebABPropConfigValue",
    "useWAWebTimeout",
    "useWAWebVisibilityAwarePolling",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useContext,
      f = m.useEffect,
      g = m.useRef,
      h = m.useState,
      y = 1,
      C = 200,
      b = { transform: "xsqj5wx", $$css: !0 },
      v = { left: "", right: "", $$css: !0 },
      S = {
        customWidthHeight: function (t, n) {
          return [
            {
              width: t != null ? "x5lhr3w" : t,
              height: n != null ? "x16ye13r" : n,
              $$css: !0,
            },
            {
              "--x-width": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t),
              "--x-height": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(n),
            },
          ];
        },
        canvas: {
          backgroundColor: "x1od0jb8",
          width: "xh8yej3",
          height: "x5yr21d",
          $$css: !0,
        },
        canvasFloating: {
          position: "x10l6tqk",
          top: "x13vifvy",
          left: "xu96u03",
          zIndex: "x1ja2u2z",
          $$css: !0,
        },
        nonFloatingContainer: {
          position: "x1n2onr6",
          display: "x1rg5ohu",
          $$css: !0,
        },
        selfPreviewCanvas: {
          zIndex: "x68pp3s",
          backgroundColor: "x1od0jb8",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          userSelect: "x87ps6o",
          maxWidth: "x193iq5w",
          maxHeight: "xmz0i5r",
          top: "x13vifvy",
          left: "xu96u03",
          right: "xwukr4l",
          bottom: "xdd4er5",
          transitionProperty: "x11xpdln",
          transitionDuration: "x1d8287x",
          transitionTimingFunction: "x9lcvmn",
          $$css: !0,
        },
        selfPreviewCanvasDraggable: { cursor: "x1jm3nie", $$css: !0 },
        selfPreviewCanvasDragging: {
          cursor: "xi9pz9s",
          transitionDuration: "x1mq3mr6",
          $$css: !0,
        },
        selfPreviewCanvasResizing: {
          transitionDuration: "x1mq3mr6",
          $$css: !0,
        },
        selfPreviewCanvasPosition: function (t, n) {
          return [
            b,
            {
              "--x-transform":
                "translate(" + n + "px, " + t + "px)" != null
                  ? "translate(" + n + "px, " + t + "px)"
                  : void 0,
            },
          ];
        },
        selfPreviewMutedOverlay: {
          position: "x10l6tqk",
          top: "x13vifvy",
          left: "xu96u03",
          zIndex: "x1jeq31z",
          backgroundColor: "x1od0jb8",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          pointerEvents: "x47corl",
          boxSizing: "x9f619",
          transitionProperty: "x11xpdln",
          transitionDuration: "x1d8287x",
          transitionTimingFunction: "x9lcvmn",
          $$css: !0,
        },
        selfPreviewMutedOverlayWithName: {
          paddingTop: "x1iorvi4",
          paddingInlineEnd: "x11lfxj5",
          paddingBottom: "xjkvuk6",
          paddingInlineStart: "x135b78x",
          $$css: !0,
        },
        selfPreviewMutedOverlayDraggable: {
          pointerEvents: "x67bb7w",
          $$css: !0,
        },
        selfPreviewBorderOverlay: {
          position: "x10l6tqk",
          top: "x13vifvy",
          left: "xu96u03",
          zIndex: "xw1hff1",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "x151ozwh",
          borderInlineEndColor: "xgrtj4e",
          borderBottomColor: "x7cikya",
          borderInlineStartColor: "xiotldb",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          pointerEvents: "x47corl",
          transitionProperty: "x11xpdln",
          transitionDuration: "x1d8287x",
          transitionTimingFunction: "x9lcvmn",
          $$css: !0,
        },
        selfPreviewBorderOverlayOffset: function (t, n) {
          return [
            v,
            {
              top: t != null ? "xjbys53" : t,
              insetInlineStart: n != null ? "x1lxsm33" : n,
              $$css: !0,
            },
            {
              "--x-top": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t),
              "--x-insetInlineStart": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(n),
            },
          ];
        },
        selfPreviewBorderOverlayDragging: {
          transitionDuration: "x1mq3mr6",
          $$css: !0,
        },
        selfPreviewBorderOverlayResizing: {
          transitionDuration: "x1mq3mr6",
          $$css: !0,
        },
        selfMicMutedIndicator: {
          position: "x10l6tqk",
          top: "xndqk7f",
          left: "xcqyyxr",
          zIndex: "xcegukh",
          backgroundColor: "x1od0jb8",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          width: "xvy4d1p",
          height: "xxk0z11",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          opacity: "x1us6l5c",
          color: "x17t9dm2",
          pointerEvents: "x47corl",
          transitionProperty: "x11xpdln",
          transitionDuration: "x1d8287x",
          transitionTimingFunction: "x9lcvmn",
          $$css: !0,
        },
        selfMicMutedIndicatorDragging: {
          transitionDuration: "x1mq3mr6",
          $$css: !0,
        },
        selfMicMutedIndicatorResizing: {
          transitionDuration: "x1mq3mr6",
          $$css: !0,
        },
        selfPreviewMutedOverlayDragging: {
          transitionDuration: "x1mq3mr6",
          $$css: !0,
        },
        selfPreviewMutedOverlayResizing: {
          transitionDuration: "x1mq3mr6",
          $$css: !0,
        },
        selfRaisedHandAndReactionsOverlay: {
          position: "x10l6tqk",
          top: "x13vifvy",
          left: "xu96u03",
          zIndex: "x13i6vqj",
          pointerEvents: "x47corl",
          transitionProperty: "x11xpdln",
          transitionDuration: "x1d8287x",
          transitionTimingFunction: "x9lcvmn",
          $$css: !0,
        },
        selfRaisedHandAndReactionsOverlayDragging: {
          transitionDuration: "x1mq3mr6",
          $$css: !0,
        },
        selfRaisedHandAndReactionsOverlayResizing: {
          transitionDuration: "x1mq3mr6",
          $$css: !0,
        },
      };
    function R(t) {
      var a,
        i = t.accentColor,
        l = t.animateInDelay,
        c = l === void 0 ? 0 : l,
        m = t.containerRef,
        b = t.floating,
        v = t.height,
        R = t.isSelfHandRaised,
        L = R === void 0 ? !1 : R,
        E = t.isSelfScreenSharing,
        k = t.isVideoMuted,
        I = t.nameOverride,
        T = t.selfMicMuted,
        D = t.selfReaction,
        x = t.shouldAnimate,
        $ = x === void 0 ? !1 : x,
        P = t.width,
        N = _(r("WAWebVoipUiPopoutWindowContext")),
        M = b && m != null,
        w = k ? Math.min(P, v) : P,
        A = k ? Math.min(P, v) : v,
        F = g(w),
        O = g(A);
      f(
        function () {
          ((F.current = w), (O.current = A));
        },
        [w, A],
      );
      var B = h(!1),
        W = B[0],
        q = B[1],
        U = h(!1),
        V = U[0],
        H = U[1],
        G = h({ x: 0, y: 0 }),
        z = G[0],
        j = G[1],
        K = h({ x: 16, y: 16 }),
        Q = K[0],
        X = K[1],
        Y = g(!1),
        J = g(!1),
        Z = g(null),
        ee = h(!1),
        te = ee[0],
        ne = ee[1],
        re = g(null),
        oe = g(!1),
        ae = g(null),
        ie = g(null),
        le = g(null),
        se = g(null),
        ue =
          o("useWAWebABPropConfigValue").useABPropConfigValue(
            "web_calling_raise_hands_enabled",
          ) === !0,
        ce = p(function (e) {
          if (e) {
            var t = e.parentElement;
            t && (re.current = t);
          }
        }, []),
        de = p(
          function (e) {
            if (e) {
              var t = e.parentElement;
              if (t) {
                re.current = t;
                var n = t.getBoundingClientRect(),
                  a = n.width,
                  i = n.height,
                  l = 1280,
                  s = 800,
                  u = a || l,
                  c = i || s,
                  d = r("WAWebCallCollection").activeCall,
                  m = d == null ? void 0 : d.selfPreviewCorner,
                  p = m != null ? m : "bottom-right",
                  _ = F.current,
                  f = O.current,
                  g = o(
                    "WAWebVoipSelfPreviewPositionUtils",
                  ).getSelfPreviewMargin(N.isContextInPopoutWindow),
                  h = N.isContextInPopoutWindow ? 16 : 8,
                  y = o(
                    "WAWebVoipSelfPreviewPositionUtils",
                  ).getPositionFromCorner(p, u, c, _, f, h, g, g, g);
                ((Y.current = !0),
                  H(!0),
                  X(y),
                  d && !m && (d.selfPreviewCorner = p));
              }
              ((Z.current = e),
                Z.current === e &&
                  (o(
                    "WAWebVoipVideoRendererRegistry",
                  ).videoRendererRegistry.registerVideoCanvas(
                    e,
                    N.isContextInPopoutWindow,
                  ),
                  ne(!0)));
            } else {
              var C = Z.current;
              (C &&
                (o(
                  "WAWebVoipVideoRendererRegistry",
                ).videoRendererRegistry.unregisterVideoCanvas(C),
                (Z.current = null)),
                ne(!1));
            }
          },
          [N.isContextInPopoutWindow],
        );
      f(
        function () {
          var e = Z.current;
          e &&
            (o(
              "WAWebVoipVideoRendererRegistry",
            ).videoRendererRegistry.unassignJidFromCanvas(
              o("WAWebVoipVideoRendererInterface").selfPreviewJid,
              e,
            ),
            o(
              "WAWebVoipVideoRendererRegistry",
            ).videoRendererRegistry.assignJidToCanvas(
              o("WAWebVoipVideoRendererInterface").selfPreviewJid,
              e,
              !E,
            ));
        },
        [E],
      );
      var me = function (t) {
          return (t.preventDefault(), !1);
        },
        pe = function (t) {
          if (M) {
            var e = t.currentTarget,
              n = e.getBoundingClientRect(),
              r = t.clientX - n.left,
              o = t.clientY - n.top;
            (q(!0), j({ x: r, y: o }), t.stopPropagation());
          }
        },
        _e = p(
          function (e) {
            if (W) {
              var t = re.current;
              if (t) {
                var n = t.getBoundingClientRect(),
                  r = e.clientX - n.left - z.x,
                  o = e.clientY - n.top - z.y,
                  a = n.width - w,
                  i = n.height - A,
                  l = Math.max(0, Math.min(r, a)),
                  s = Math.max(0, Math.min(o, i));
                X({ x: l, y: s });
              }
            }
          },
          [w, A, W, z.x, z.y],
        ),
        fe = p(
          function (e, t) {
            var n = re.current;
            if (!n) return { x: e, y: t };
            var r = o("WAWebVoipSelfPreviewPositionUtils").getSelfPreviewMargin(
                N.isContextInPopoutWindow,
              ),
              a = n.getBoundingClientRect(),
              i = a.width / 2,
              l = a.height / 2,
              s = e < i,
              u = t < l,
              c = s ? r : a.width - w - r,
              d = u ? r : a.height - A - r;
            return { x: c, y: d };
          },
          [A, w, N.isContextInPopoutWindow],
        ),
        ge = p(
          function () {
            if (W) {
              o("WAWebVoipWindowMetrics").recordWindowDragged();
              var e = fe(Q.x, Q.y);
              X(e);
              var t = re.current;
              if (t) {
                var n = t.clientWidth,
                  a = t.clientHeight,
                  i = o(
                    "WAWebVoipSelfPreviewPositionUtils",
                  ).getCornerFromPosition(e.x, e.y, n, a),
                  l = r("WAWebCallCollection").activeCall;
                l && (l.selfPreviewCorner = i);
              }
            }
            q(!1);
          },
          [W, Q.x, Q.y, fe],
        ),
        he = N.documentEl;
      f(
        function () {
          var e = function () {
            (he == null || he.removeEventListener("mousemove", _e),
              he == null || he.removeEventListener("mouseup", ge));
          };
          if (W)
            return (
              he == null || he.addEventListener("mousemove", _e),
              he == null || he.addEventListener("mouseup", ge),
              e
            );
        },
        [he, W, _e, ge],
      );
      var ye = g(Q);
      (f(
        function () {
          ye.current = Q;
        },
        [Q],
      ),
        f(
          function () {
            J.current = W;
          },
          [W],
        ));
      var Ce = o("useWAWebTimeout").useTimeout(function () {
          ((Y.current = !1), H(!1));
        }, C),
        be = Ce[0],
        ve = Ce[1],
        Se = (a = N.windowEl) != null ? a : window,
        Re = N.isContextInPopoutWindow;
      f(
        function () {
          var e = Z.current,
            t = function (t) {
              if (!J.current) {
                var e = Z.current;
                for (var n of t)
                  if (e && n.target === e.parentElement) {
                    var a = e.parentElement;
                    if (!a) return;
                    var i = a.getBoundingClientRect(),
                      l = r("WAWebCallCollection").activeCall,
                      s = l == null ? void 0 : l.selfPreviewCorner,
                      u = void 0;
                    if (s) u = s;
                    else {
                      var c = ye.current;
                      u = o(
                        "WAWebVoipSelfPreviewPositionUtils",
                      ).getCornerFromPosition(c.x, c.y, i.width, i.height);
                    }
                    var d = o(
                        "WAWebVoipSelfPreviewPositionUtils",
                      ).getSelfPreviewMargin(Re),
                      m = Re ? 16 : 8,
                      p = o(
                        "WAWebVoipSelfPreviewPositionUtils",
                      ).getPositionFromCorner(
                        u,
                        i.width,
                        i.height,
                        F.current,
                        O.current,
                        m,
                        d,
                        d,
                        d,
                      ),
                      _ = p.x,
                      f = p.y,
                      g = i.width - F.current,
                      h = i.height - O.current,
                      y = Math.max(0, Math.min(_, g)),
                      C = Math.max(0, Math.min(f, h)),
                      b = ye.current;
                    (b.x !== y || b.y !== C) &&
                      (o("WAWebVoipWindowMetrics").recordWindowResized(),
                      (Y.current = !0),
                      H(!0),
                      X({ x: y, y: C }),
                      be());
                  }
              }
            },
            n = new Se.ResizeObserver(t);
          return (
            e != null && e.parentElement && n.observe(e.parentElement),
            function () {
              (n.disconnect(), ve());
            }
          );
        },
        [Se, Re, be, ve],
      );
      var Le = p(
        function () {
          var e;
          if (!(!b || !re.current)) {
            var t = re.current.getBoundingClientRect();
            if (!(t.width === 0 || t.height === 0)) {
              var n = r("WAWebCallCollection").activeCall,
                a =
                  (e = n == null ? void 0 : n.selfPreviewCorner) != null
                    ? e
                    : "bottom-right",
                i = o("WAWebVoipSelfPreviewPositionUtils").getSelfPreviewMargin(
                  N.isContextInPopoutWindow,
                ),
                l = N.isContextInPopoutWindow ? 16 : 8,
                s = o(
                  "WAWebVoipSelfPreviewPositionUtils",
                ).getPositionFromCorner(a, t.width, t.height, w, A, l, i, i, i);
              ((Y.current = !0), H(!0), X(s));
            }
          }
        },
        [w, A, b, N.isContextInPopoutWindow],
      );
      return (
        f(
          function () {
            Le();
          },
          [k, Le],
        ),
        f(
          function () {
            var e = Z.current;
            if (e && te) {
              var t = w * window.devicePixelRatio,
                n = A * window.devicePixelRatio;
              o(
                "WAWebVoipVideoRendererRegistry",
              ).videoRendererRegistry.onCanvasResize(e, t, n);
            }
          },
          [w, A, te],
        ),
        r("useWAWebVisibilityAwarePolling")({
          callback: function () {
            var e = Z.current,
              t = e == null ? void 0 : e.parentElement;
            if (!t) return !1;
            var n = t.getBoundingClientRect(),
              a = n.width,
              i = n.height;
            if (a > 0 && i > 0) {
              var l,
                s = o("WAWebVoipSelfPreviewPositionUtils").getSelfPreviewMargin(
                  N.isContextInPopoutWindow,
                ),
                u = N.isContextInPopoutWindow ? 16 : 8,
                c = r("WAWebCallCollection").activeCall,
                d =
                  (l = c == null ? void 0 : c.selfPreviewCorner) != null
                    ? l
                    : "bottom-right",
                m = o(
                  "WAWebVoipSelfPreviewPositionUtils",
                ).getPositionFromCorner(d, a, i, w, A, u, s, s, s),
                p = a - w,
                _ = i - A,
                f = Math.max(0, Math.min(m.x, p)),
                g = Math.max(0, Math.min(m.y, _));
              return (X({ x: f, y: g }), !1);
            }
            return !0;
          },
          interval: 200,
          enabled: N.isContextInPopoutWindow,
        }),
        f(
          function () {
            if (V)
              return (
                be(),
                function () {
                  return ve();
                }
              );
          },
          [ve, V, Q, be],
        ),
        f(
          function () {
            $ &&
              b &&
              Z.current &&
              !oe.current &&
              ((oe.current = !0),
              window.requestAnimationFrame(function () {
                var e = [];
                (Z.current &&
                  ((Z.current.style.opacity = "0"), e.push(Z.current)),
                  ae.current &&
                    ((ae.current.style.opacity = "0"), e.push(ae.current)),
                  ie.current &&
                    ((ie.current.style.opacity = "0"), e.push(ie.current)),
                  le.current &&
                    ((le.current.style.opacity = "0"), e.push(le.current)),
                  se.current &&
                    ((se.current.style.opacity = "0"), e.push(se.current)),
                  e.length > 0 &&
                    r("WAWebVelocityAnimate")(
                      e,
                      { opacity: [1, 0] },
                      { duration: 350, delay: c, easing: "easeInElastic" },
                    ));
              }));
          },
          [b, c, $, te],
        ),
        f(
          function () {
            te &&
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  var t = yield o(
                    "WAWebVoipStackInterface",
                  ).getVoipStackInterface();
                  if ((t == null ? void 0 : t.type) !== "web") return;
                  var n = "static-call-id",
                    r = "self-preview-jid",
                    a = yield t.startVideoPreview(n, r);
                  a === 0 ||
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[voip] videoCall: startVideoPreview failed ",
                          "",
                        ])),
                      a,
                    );
                } catch (e) {
                  o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: ui: videoCall: startVideoPreview error: ",
                        "",
                      ])),
                    e,
                  );
                }
              })();
          },
          [te],
        ),
        b
          ? d.jsxs(d.Fragment, {
              children: [
                d.jsx(
                  "canvas",
                  babelHelpers.extends(
                    {
                      ref: de,
                      width: w * window.devicePixelRatio,
                      height: A * window.devicePixelRatio,
                      onContextMenu: me,
                      onMouseDown: pe,
                    },
                    (u || (u = r("stylex"))).props([
                      S.canvas,
                      S.canvasFloating,
                      S.selfPreviewCanvas,
                      M && S.selfPreviewCanvasDraggable,
                      S.customWidthHeight(w, A),
                      W && S.selfPreviewCanvasDragging,
                      V && S.selfPreviewCanvasResizing,
                      S.selfPreviewCanvasPosition(Q.y, Q.x),
                    ]),
                  ),
                ),
                k &&
                  d.jsx(
                    "div",
                    babelHelpers.extends(
                      {
                        ref: function (t) {
                          (ce(t), (le.current = t));
                        },
                        role: "status",
                        "aria-label": "Video is paused",
                        onMouseDown: pe,
                      },
                      (u || (u = r("stylex"))).props([
                        S.selfPreviewMutedOverlay,
                        S.customWidthHeight(w, A),
                        M && S.selfPreviewMutedOverlayDraggable,
                        M && S.selfPreviewCanvasDraggable,
                        W && S.selfPreviewMutedOverlayDragging,
                        V && S.selfPreviewMutedOverlayResizing,
                        I != null && S.selfPreviewMutedOverlayWithName,
                        S.selfPreviewCanvasPosition(Q.y, Q.x),
                      ]),
                      {
                        children: d.jsx(r("WAWebCallParticipantInfo.react"), {
                          accentColor: i,
                          userId: o(
                            "WAWebUserPrefsMeUser",
                          ).getMePnUserOrThrow_DO_NOT_USE(),
                          imageSize: "small",
                          nameOverride: I,
                          showTextInfo: I != null,
                          showAudioWaveform: !T,
                          audioLevelType: "self",
                          waveformBarCount: 5,
                        }),
                      },
                    ),
                  ),
                T &&
                  d.jsx(
                    "div",
                    babelHelpers.extends(
                      {
                        ref: ie,
                        role: "status",
                        "aria-label": "Your microphone is muted",
                      },
                      (u || (u = r("stylex"))).props([
                        S.selfMicMutedIndicator,
                        W && S.selfMicMutedIndicatorDragging,
                        V && S.selfMicMutedIndicatorResizing,
                        S.selfPreviewCanvasPosition(Q.y, Q.x),
                      ]),
                      {
                        children: d.jsx(r("WDSIconIcMicOffFilled.react"), {
                          height: 16,
                          width: 16,
                        }),
                      },
                    ),
                  ),
                M &&
                  d.jsx(
                    "div",
                    babelHelpers.extends(
                      { ref: ae },
                      (u || (u = r("stylex"))).props([
                        S.selfPreviewBorderOverlay,
                        S.customWidthHeight(w - 2 * y, A - 2 * y),
                        W && S.selfPreviewBorderOverlayDragging,
                        V && S.selfPreviewBorderOverlayResizing,
                        S.selfPreviewCanvasPosition(Q.y, Q.x),
                      ]),
                    ),
                  ),
                (L || D != null) &&
                  d.jsx(
                    "div",
                    babelHelpers.extends(
                      { ref: se },
                      (u || (u = r("stylex"))).props([
                        S.selfRaisedHandAndReactionsOverlay,
                        S.customWidthHeight(w, A),
                        W && S.selfRaisedHandAndReactionsOverlayDragging,
                        V && S.selfRaisedHandAndReactionsOverlayResizing,
                        S.selfPreviewCanvasPosition(Q.y, Q.x),
                      ]),
                      {
                        children: d.jsxs("div", {
                          className:
                            "x10l6tqk xbfrwjf x1v1hl4c x78zum5 x1q0g3np x13a9art xuk3077",
                          children: [
                            ue &&
                              L &&
                              d.jsx(r("WAWebVoipRaisedHandDisplay.react"), {
                                isHandRaised: L,
                                spacing: "compact",
                              }),
                            D != null &&
                              d.jsx(r("WAWebVoipReactionDisplay.react"), {
                                reaction: D,
                                shouldHaveOffset: L,
                              }),
                          ],
                        }),
                      },
                    ),
                  ),
              ],
            })
          : d.jsxs(
              "div",
              babelHelpers.extends(
                {},
                (u || (u = r("stylex"))).props([
                  S.nonFloatingContainer,
                  S.customWidthHeight(w, A),
                ]),
                {
                  children: [
                    d.jsx(
                      "canvas",
                      babelHelpers.extends(
                        {
                          ref: de,
                          width: w * window.devicePixelRatio,
                          height: A * window.devicePixelRatio,
                          onContextMenu: me,
                        },
                        (u || (u = r("stylex"))).props([
                          S.canvas,
                          S.selfPreviewCanvas,
                          S.customWidthHeight(w, A),
                        ]),
                      ),
                    ),
                    k &&
                      d.jsx(
                        "div",
                        babelHelpers.extends(
                          {
                            ref: ce,
                            role: "status",
                            "aria-label": "Video is paused",
                          },
                          (u || (u = r("stylex"))).props([
                            S.selfPreviewMutedOverlay,
                            S.customWidthHeight(w, A),
                            I != null && S.selfPreviewMutedOverlayWithName,
                          ]),
                          {
                            children: d.jsx(
                              r("WAWebCallParticipantInfo.react"),
                              {
                                accentColor: i,
                                userId: o(
                                  "WAWebUserPrefsMeUser",
                                ).getMePnUserOrThrow_DO_NOT_USE(),
                                imageSize: "small",
                                nameOverride: I,
                                showTextInfo: I != null,
                                showAudioWaveform: !T,
                                audioLevelType: "self",
                                waveformBarCount: 5,
                              },
                            ),
                          },
                        ),
                      ),
                    T &&
                      d.jsx("div", {
                        role: "status",
                        "aria-label": "Your microphone is muted",
                        className:
                          "x10l6tqk xndqk7f xcqyyxr xcegukh x1od0jb8 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xvy4d1p xxk0z11 x78zum5 x6s0dn4 xl56j7k x1us6l5c x17t9dm2 x47corl x11xpdln x1d8287x x9lcvmn",
                        children: d.jsx(r("WDSIconIcMicOffFilled.react"), {
                          height: 16,
                          width: 16,
                        }),
                      }),
                    d.jsx(
                      "div",
                      babelHelpers.extends(
                        {},
                        (u || (u = r("stylex"))).props([
                          S.selfPreviewBorderOverlay,
                          S.customWidthHeight(w - 2 * y, A - 2 * y),
                          S.selfPreviewBorderOverlayOffset(y, y),
                        ]),
                      ),
                    ),
                  ],
                },
              ),
            )
      );
    }
    ((R.displayName = R.name + " [from " + i.id + "]"),
      (l.WAWebVoipUiVideoCallSelfPreview = R),
      (l.WAWebVoipUiVideoCallSelfPreviewFullWidth = o(
        "WAWebVoipUiVideoCallSelfPreviewFullWidth.react",
      ).WAWebVoipUiVideoCallSelfPreviewFullWidth));
  },
  98,
);
