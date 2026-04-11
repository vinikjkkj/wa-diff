__d(
  "WAWebMoveResizeComponent.react",
  [
    "fbt",
    "WANullthrows",
    "WAShiftTimer",
    "WAWebCmd",
    "WAWebDragTextureIcon.react",
    "WAWebMoveResizeComponentHandlers",
    "WAWebMoveResizeComponentHooks",
    "WAWebMoveResizeComponentUtils",
    "WAWebMoveResizeConstants",
    "WAWebMoveResizeDragArea.react",
    "WAWebMoveResizeLogic",
    "WAWebMoveResizeResizers.react",
    "WAWebVelocityAnimate",
    "WDSColorStyles.stylex",
    "react",
    "stylex",
    "useLazyRef",
    "useMergeRefs",
    "useWAWebDebouncedCallback",
    "useWAWebListener",
    "useWAWebOnUnmount",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["moveResizeRef", "ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useImperativeHandle,
      f = m.useMemo,
      g = m.useRef,
      h = m.useState,
      y = 12,
      C = {
        moveResizeComponentInnerContainer: {
          position: "x1n2onr6",
          height: "x5yr21d",
          $$css: !0,
        },
        topContentMoveable: {
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x1ktfvgn",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
        dragBarSvg: {
          marginTop: "xdj266r",
          marginBottom: "xat24cr",
          marginInlineStart: "xvc5jky",
          marginInlineEnd: "x11t971q",
          $$css: !0,
        },
      };
    function b(t) {
      var n = t.moveResizeRef,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.animationStartStyle,
        c = i.aspectRatio,
        m = i.dragCursor,
        b = m === void 0 ? "move" : m,
        v = i.escapeConversationHeader,
        S = i.initialStyle,
        R = i.margin,
        L = i.minWidth,
        E = i.onMove,
        k = i.onMoveStop,
        I = i.onResize,
        T = r("useWAWebUnmountSignal")(),
        D = g(null),
        x = g(!1);
      _(n, function () {
        return {
          cancelDefaultHeightEnforcement: function () {
            (D.current == null && (D.current = new AbortController()),
              D.current.abort());
          },
          markExternalResizeInProgress: function (t) {
            x.current = t;
          },
        };
      });
      var $ = function () {
          return S
            ? { width: S.width, left: S.left, bottom: S.bottom }
            : { width: L, left: R.x, bottom: R.y };
        },
        P = f(function () {
          var e;
          v &&
            o("WAWebCmd").Cmd.getConversationHeaderOffset(function (t) {
              e = t == null ? void 0 : t.right;
            });
          var t = $(),
            n = t.width / c;
          i.independentResize === !0 &&
            i.minHeight != null &&
            (n = i.minHeight);
          var r = {
            resizeDirection: o("WAWebMoveResizeComponentUtils").ResizeDirections
              .TOP,
            currentAction: o("WAWebMoveResizeComponentUtils").UserActions.IDLE,
            resizeStartMousePosition: { x: 0, y: 0 },
            resizeStartPiPStyle: { width: 0, bottom: 0, left: 0 },
            moveStartMousePosition: { x: 0, y: 0 },
            moveStartPositionStyle: { left: 0, bottom: 0 },
            previousWindowSize: {
              height: window.innerHeight,
              width: window.innerWidth,
            },
            previousConvPanelRightBorder: e,
            initialHeight: n,
          };
          return l
            ? babelHelpers.extends({}, r, l)
            : babelHelpers.extends({}, r, t);
        }, []),
        N = h(P.width),
        M = N[0],
        w = N[1],
        A = h(P.initialHeight),
        F = A[0],
        O = A[1],
        B = h(P.bottom),
        W = B[0],
        q = B[1],
        U = g(P.bottom),
        V = h(P.left),
        H = V[0],
        G = V[1],
        z = h(i.independentResize === !0),
        j = z[0],
        K = z[1],
        Q = h(c),
        X = Q[0],
        Y = Q[1];
      if ((i.independentResize === !0) !== j) {
        var J = X;
        if (
          (K(i.independentResize === !0),
          Y(c),
          i.independentResize === !0 && !j)
        ) {
          var Z = M / J;
          Math.abs(F - Z) > 1 && O(Z);
        }
      } else c !== X && Y(c);
      var ee = h(P.resizeDirection),
        te = ee[0],
        ne = ee[1],
        re = h(P.currentAction),
        oe = re[0],
        ae = re[1],
        ie = g(P.currentAction),
        le = h(P.resizeStartMousePosition),
        se = le[0],
        ue = le[1],
        ce = h(P.resizeStartPiPStyle),
        de = ce[0],
        me = ce[1],
        pe = h(P.width / c),
        _e = pe[0],
        fe = pe[1],
        ge = g(P.moveStartMousePosition),
        he = g(P.moveStartPositionStyle),
        ye = h(P.previousWindowSize),
        Ce = ye[0],
        be = ye[1],
        ve = h(P.previousConvPanelRightBorder),
        Se = ve[0],
        Re = ve[1],
        Le = g(null),
        Ee = g(null),
        ke = r("useMergeRefs")(a, Ee),
        Ie = g(null),
        Te = g(null),
        De = r("useLazyRef")(function () {
          return new (o("WAShiftTimer").ShiftTimer)(function (e) {
            (e.left && G(e.left),
              e.bottom && q(e.bottom),
              e.width && w(e.width));
          });
        }),
        xe = function (t) {
          return function (e) {
            (e.button === 0 &&
              (ne(t),
              (ie.current = o(
                "WAWebMoveResizeComponentUtils",
              ).UserActions.RESIZE),
              ae(o("WAWebMoveResizeComponentUtils").UserActions.RESIZE),
              i.onResizeStart == null || i.onResizeStart(),
              me({ width: M, left: H, bottom: W }),
              fe(F),
              ue({ x: e.clientX, y: e.clientY })),
              e.stopPropagation());
          };
        },
        $e = g(!1),
        Pe = function (t) {
          (t.button === 0 &&
            ((ie.current = o("WAWebMoveResizeComponentUtils").UserActions.MOVE),
            ae(o("WAWebMoveResizeComponentUtils").UserActions.MOVE),
            ($e.current = !1),
            (he.current = { left: H, bottom: W }),
            (ge.current = { x: t.clientX, y: t.clientY })),
            t.stopPropagation());
        },
        Ne = function () {
          return {
            top: window.innerHeight - W - M / c,
            left: H,
            bottom: window.innerHeight - W,
            right: H + M,
          };
        },
        Me = function () {
          var e = Ne();
          k == null || k(e);
        },
        we = o("WAWebMoveResizeComponentHooks").useDimensionAnimation(
          { componentRef: Ee, unmountSignal: T },
          w,
          O,
          q,
        ),
        Ae = we.animateDimensionChange,
        Fe = we.updateDimensionState,
        Oe = function () {
          var e,
            t,
            n =
              ((e = Ie.current) == null ? void 0 : e.offsetHeight) != null
                ? Ie.current.offsetHeight - y
                : 0,
            r =
              ((t = Te.current) == null ? void 0 : t.offsetHeight) != null
                ? Te.current.offsetHeight - y
                : 0;
          return { extraTopContentHeight: n, extraBottomContentHeight: r };
        },
        Be = function (t) {
          var e = Oe(),
            n = e.extraBottomContentHeight,
            r = e.extraTopContentHeight;
          switch (ie.current) {
            case o("WAWebMoveResizeComponentUtils").UserActions.IDLE:
              return;
            case o("WAWebMoveResizeComponentUtils").UserActions.RESIZE: {
              var a = o("WAWebMoveResizeComponentHandlers").processResizeAction(
                {
                  resizeDirection: te,
                  resizeStartMousePosition: se,
                  clientX: t.clientX,
                  clientY: t.clientY,
                  aspectRatio: c,
                  independentResize: i.independentResize === !0,
                  minWidth: L,
                  minHeight: i.minHeight,
                  margin: R,
                  resizeStartPiPStyle: de,
                  resizeStartHeight: _e,
                  width: M,
                  extraTopContentHeight: r,
                  extraBottomContentHeight: n,
                  moveStartPositionStyle: he.current,
                },
              );
              (w(a.resizedWidth),
                O(a.resizedHeight),
                G(a.resizedLeft),
                q(a.resizedBottom),
                I && I(a.resizedWidth, a.resizedLeft, a.resizedBottom));
              break;
            }
            case o("WAWebMoveResizeComponentUtils").UserActions.MOVE: {
              $e.current ||
                (($e.current = !0), i.onMoveStart == null || i.onMoveStart());
              var l = o("WAWebMoveResizeComponentHandlers").processMoveAction({
                clientX: t.clientX,
                clientY: t.clientY,
                moveStartMousePosition: ge.current,
                moveStartPositionStyle: he.current,
                width: M,
                height: F,
                aspectRatio: c,
                margin: R,
                minWidth: L,
                independentResize: i.independentResize === !0,
                extraTopContentHeight: r,
                extraBottomContentHeight: n,
                resizeStartPiPStyle: de,
              });
              (G(l.movedLeft),
                q(l.movedBottom),
                E && E(l.movedLeft, l.movedBottom));
              break;
            }
          }
        },
        We = function (t) {
          (ie.current === o("WAWebMoveResizeComponentUtils").UserActions.RESIZE
            ? ((x.current = !1), i.onResizeEnd == null || i.onResizeEnd())
            : ie.current ===
                o("WAWebMoveResizeComponentUtils").UserActions.MOVE &&
              $e.current &&
              (i.onMoveEnd == null || i.onMoveEnd()),
            ($e.current = !1),
            (ie.current = o("WAWebMoveResizeComponentUtils").UserActions.IDLE),
            ae(o("WAWebMoveResizeComponentUtils").UserActions.IDLE));
        },
        qe = o("WAWebMoveResizeComponentHooks").createEscapeOverlapHandler({
          componentRef: Ee,
          unmountSignal: T,
          aspectRatio: c,
          width: M,
          left: H,
          bottom: W,
          margin: R,
          setLeft: G,
          setBottom: q,
          getRect: Ne,
        });
      p(
        function () {
          if (S) {
            if (Le.current) {
              De.current.onOrAfter(
                o("WAWebMoveResizeConstants").INITIAL_RENDER_ANIMATION_DURATION,
                S,
              );
              return;
            }
            var e = S.width,
              t = S.left + e - (M + H),
              n = S.bottom + e / c - (W + M / c);
            Math.abs(t) < 0.1 &&
              Math.abs(n) < 0.1 &&
              (S.left && G(S.left),
              S.bottom && q(S.bottom),
              S.width && w(S.width));
          }
        },
        [c],
      );
      var Ue = function () {
          return i.independentResize === !0 || x.current === !0
            ? { width: M, height: F }
            : { width: M, height: M / c };
        },
        Ve = r("useWAWebDebouncedCallback")(function () {
          if (
            ie.current === o("WAWebMoveResizeComponentUtils").UserActions.IDLE
          ) {
            var e = Oe(),
              t = e.extraBottomContentHeight,
              n = e.extraTopContentHeight,
              r = o(
                "WAWebMoveResizeComponentHandlers",
              ).calculateWindowResizeState({
                width: M,
                height: F,
                independentResize: i.independentResize === !0,
                bottom: W,
                left: H,
                aspectRatio: i.aspectRatio,
                margin: i.margin,
                minWidth: i.minWidth,
                extraTopContentHeight: n,
                extraBottomContentHeight: t,
                previousWindowSize: Ce,
                previousConvPanelRightBorder: Se,
                escapeConversationHeader: i.escapeConversationHeader,
                getConversationHeaderOffset: function (t) {
                  return o("WAWebCmd").Cmd.getConversationHeaderOffset(t);
                },
              });
            r.hasChanges &&
              (q(r.bottom),
              G(r.left),
              w(r.width),
              r.height != null && O(r.height),
              be(r.previousWindowSize),
              Re(r.previousConvPanelRightBorder));
          }
        }, 50);
      (p(function () {
        if (!l) {
          Ve();
          return;
        }
        var e = $(),
          t = l.width / c,
          n = l.height,
          a = n / t,
          i = (t - n) / 2 / a,
          s = babelHelpers.extends({}, e, {
            height: e.width / c,
            scaleY: [1, a],
            translateY: [0, i],
          }),
          u = r("WAWebVelocityAnimate")(r("WANullthrows")(Ee.current), s, {
            easing: "easeInOutQuart",
            duration: o("WAWebMoveResizeConstants")
              .INITIAL_RENDER_ANIMATION_DURATION,
          });
        Le.current = u.then(function () {
          T.aborted ||
            ((Le.current = null), G(e.left), q(e.bottom), w(e.width), Ve());
        });
      }, []),
        r("useWAWebOnUnmount")(function () {
          De.current.cancel();
        }));
      var He = g(i.minWidth),
        Ge = g(i.minHeight);
      (p(
        function () {
          var e,
            t,
            n = He.current !== i.minWidth,
            r = Ge.current !== i.minHeight;
          if (
            ((He.current = i.minWidth), (Ge.current = i.minHeight), !(!n && !r))
          ) {
            if ((e = D.current) != null && e.signal.aborted) {
              D.current = new AbortController();
              return;
            }
            var o = i.independentResize === !0 ? F : M / i.aspectRatio,
              a = (t = i.minHeight) != null ? t : i.minWidth / i.aspectRatio,
              l = i.independentResize === !0;
            if (M < i.minWidth || (l && o < a)) {
              var s = Math.max(M, i.minWidth),
                u = l ? Math.max(o, a) : s / i.aspectRatio,
                c = window.innerHeight - 2 * i.margin.y,
                d = W;
              W + u > c + i.margin.y &&
                (d = Math.max(i.margin.y, c + i.margin.y - u));
              var m = u - o,
                p = m > 0 && Ee.current != null;
              p
                ? Ae(
                    { height: [u, o], bottom: [d, W] },
                    {
                      width: s,
                      height: i.independentResize === !0 ? u : void 0,
                      bottom: d,
                    },
                  )
                : Fe({
                    width: s,
                    height: i.independentResize === !0 ? u : void 0,
                    bottom: d,
                  });
            }
          }
        },
        [
          i.minWidth,
          i.minHeight,
          i.aspectRatio,
          i.margin,
          i.independentResize,
          M,
          F,
          W,
          Ae,
          Fe,
        ],
      ),
        p(
          function () {
            U.current = W;
          },
          [W],
        ),
        p(
          function () {
            var e = i.externalResize;
            if (e != null) {
              var t = Oe(),
                n = t.extraBottomContentHeight,
                r = t.extraTopContentHeight,
                a = e.width,
                l = e.height,
                s = U.current,
                u = o("WAWebMoveResizeLogic").clampBottomToBounds(
                  s,
                  l,
                  i.margin.y,
                  r,
                  n,
                ),
                c = u.adjustedBottom,
                d = u.needsAdjustment;
              (d
                ? Ae(
                    { height: l, width: a, bottom: [c, s] },
                    { width: a, height: l, bottom: c },
                  )
                : Ae({ height: l, width: a }, { width: a, height: l }),
                (x.current = !1));
            }
          },
          [i.externalResize, i.margin, Ae],
        ),
        o("useWAWebListener").useListener(window, "mousemove", Be),
        o("useWAWebListener").useListener(window, "mouseup", We),
        o("useWAWebListener").useListener(window, "resize", Ve),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "floater_escape_overlap",
          qe,
        ));
      var ze = i.enableDragBar === !0,
        je = Ue(),
        Ke = i.disableResize,
        Qe = i.independentResize,
        Xe = i.minHeight,
        Ye = i.onMoveEnd,
        Je = i.onMoveStart,
        Ze = i.onResizeEnd,
        et = i.onResizeStart,
        tt = o("WAWebMoveResizeComponentHooks").useKeyboardNavigation({
          width: M,
          height: F,
          left: H,
          bottom: W,
          aspectRatio: c,
          minWidth: L,
          minHeightProp: Xe,
          margin: R,
          disableResize: Ke,
          independentResize: Qe,
          setWidth: w,
          setHeight: O,
          setLeft: G,
          setBottom: q,
          onResizeStart: et,
          onResize: I,
          onResizeEnd: Ze,
          onMoveStart: Je,
          onMove: E,
          onMoveEnd: Ye,
        }),
        nt = {
          width: je.width,
          height: je.height,
          bottom: W + "px",
          left: H + "px",
        };
      return d.jsxs("div", {
        "data-testid": void 0,
        ref: ke,
        role: "application",
        "aria-label": s._(
          /*BTDS*/ "Picture-in-picture. Use Arrow keys to move, Shift+Arrow keys to resize.",
        ),
        tabIndex: 0,
        className: "xixxii4",
        style: nt,
        onKeyDown: tt,
        onMouseEnter: i.onMouseEnter,
        onMouseLeave: i.onMouseLeave,
        onFocus: i.onFocus,
        onBlur: i.onBlur,
        children: [
          ze || i.topContent != null
            ? d.jsxs(
                "div",
                babelHelpers.extends(
                  { ref: Ie },
                  {
                    0: {
                      className:
                        "x10l6tqk xtijo5x x1o0tod x9f619 x1rdoygx x1gy68qi x5lk768 xzp2c5a x6nl9eh x1a5l9x9 x1e7945m x11o6v7j x1weeur4 xwhdwdg",
                    },
                    2: {
                      className:
                        "x10l6tqk xtijo5x x1o0tod x9f619 x1rdoygx x5lk768 xzp2c5a x6nl9eh x1a5l9x9 x1e7945m x11o6v7j x1weeur4 xwhdwdg xtvc7gp",
                    },
                    1: {
                      className:
                        "x10l6tqk xtijo5x x1o0tod x9f619 x1rdoygx x1gy68qi x5lk768 xzp2c5a x6nl9eh x1a5l9x9 x1e7945m x11o6v7j xwhdwdg xrnddhk",
                    },
                    3: {
                      className:
                        "x10l6tqk xtijo5x x1o0tod x9f619 x1rdoygx x5lk768 xzp2c5a x6nl9eh x1a5l9x9 x1e7945m x11o6v7j xwhdwdg xtvc7gp xrnddhk",
                    },
                  }[
                    ((i.extraContentVisible === !0) << 1) |
                      ((i.extraContentVisible === !0) << 0)
                  ],
                  {
                    children: [
                      ze
                        ? d.jsx(r("WAWebMoveResizeDragArea.react"), {
                            xstyle: C.topContentMoveable,
                            onMouseDown: Pe,
                            onMouseUp: Me,
                            currentAction: oe,
                            dragCursor: b,
                            children: d.jsx(
                              o("WAWebDragTextureIcon.react").DragTextureIcon,
                              {
                                xstyle: o("WDSColorStyles.stylex")
                                  .WDSColorStyles.persistentAlwaysWhite,
                                iconXstyle: C.dragBarSvg,
                              },
                            ),
                          })
                        : null,
                      i.topContent,
                      d.jsx(r("WAWebMoveResizeResizers.react"), {
                        getResizeCallback: xe,
                        currentAction: oe,
                        directions: o("WAWebMoveResizeComponentUtils")
                          .RISIZE_TOP_DIRECTIONS,
                      }),
                    ],
                  },
                ),
              )
            : null,
          i.bottomContent != null
            ? d.jsxs(
                "div",
                babelHelpers.extends(
                  {
                    ref: Te,
                    style: {
                      top:
                        i.extraContentVisible !== !0 && Te.current
                          ? "calc(100% - " + Te.current.offsetHeight + "px)"
                          : null,
                    },
                  },
                  {
                    0: {
                      className:
                        "x10l6tqk xtijo5x x1o0tod x9f619 x1rdoygx x1gy68qi x5lk768 xwa60dl xrxd3a7 x1iw51ew xde1mab x10b6aqq x47corl x1bczwif x17un8ov x7vuprf x1mg3h75",
                    },
                    2: {
                      className:
                        "x10l6tqk xtijo5x x1o0tod x9f619 x1rdoygx x5lk768 xwa60dl xrxd3a7 x1iw51ew xde1mab x10b6aqq x47corl x1bczwif x17un8ov x7vuprf x1mg3h75 xtvc7gp",
                    },
                    1: {
                      className:
                        "x10l6tqk xtijo5x x1o0tod x9f619 x1rdoygx x1gy68qi x5lk768 xrxd3a7 x1iw51ew xde1mab x10b6aqq x1bczwif x17un8ov x7vuprf x1mg3h75 xetwxw6 x71s49j",
                    },
                    3: {
                      className:
                        "x10l6tqk xtijo5x x1o0tod x9f619 x1rdoygx x5lk768 xrxd3a7 x1iw51ew xde1mab x10b6aqq x1bczwif x17un8ov x7vuprf x1mg3h75 xtvc7gp xetwxw6 x71s49j",
                    },
                  }[
                    ((i.extraContentVisible === !0) << 1) |
                      ((i.extraContentVisible === !0) << 0)
                  ],
                  {
                    children: [
                      d.jsx("div", {
                        className:
                          "x10l6tqk x13vifvy x1o0tod xtijo5x x1ey2m1c x1rdoygx x1bczwif x17un8ov x7vuprf x1mg3h75 xwhdwdg",
                      }),
                      i.bottomContent,
                      d.jsx(r("WAWebMoveResizeResizers.react"), {
                        getResizeCallback: xe,
                        currentAction: oe,
                        directions: o("WAWebMoveResizeComponentUtils")
                          .RISIZE_BOTTOM_DIRECTIONS,
                      }),
                    ],
                  },
                ),
              )
            : null,
          i.disableResize
            ? null
            : d.jsx(r("WAWebMoveResizeResizers.react"), {
                getResizeCallback: xe,
                currentAction: oe,
                directions:
                  i.topContent != null
                    ? o("WAWebMoveResizeComponentUtils").RISIZE_SIDE_DIRECTIONS
                    : void 0,
              }),
          d.jsx(
            "div",
            babelHelpers.extends(
              {},
              (u || (u = r("stylex"))).props([
                C.moveResizeComponentInnerContainer,
                i.xstyle,
              ]),
              {
                children: d.jsxs(r("WAWebMoveResizeDragArea.react"), {
                  onMouseDown: Pe,
                  onMouseUp: Me,
                  currentAction: oe,
                  disabled: i.enableDragBar,
                  dragCursor: b,
                  children: [
                    i.children,
                    oe !== o("WAWebMoveResizeComponentUtils").UserActions.IDLE
                      ? d.jsx("div", {
                          className:
                            "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d",
                        })
                      : null,
                  ],
                }),
              },
            ),
          ),
        ],
      });
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = b));
  },
  226,
);
