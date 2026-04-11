__d(
  "WAWebMediaZoomable.react",
  [
    "WAWebAddOnBubbleType",
    "WAWebAddOnBubblesContainer.react",
    "WAWebGetDisplayType",
    "WAWebMediaIncrementalZoom",
    "WAWebMediaViewerConstants",
    "WAWebMediaViewerStyles",
    "WAWebMsgGetters",
    "WAWebObjectFit.react",
    "WAWebReactionsUtils",
    "WAWebUimUie.react",
    "WDSFocusStateStyles",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebIsKeyboardUser",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useContext,
      p = d.useEffect,
      _ = d.useImperativeHandle,
      f = d.useRef,
      g = d.useState,
      h = { cursorZoomIn: { cursor: "x1huxd7x", $$css: !0 } };
    function y(t) {
      var n = o("react-compiler-runtime").c(13),
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.children,
        u = i.height,
        d = i.msg,
        y = i.onLoad,
        C = i.onZoomIn,
        b = i.role,
        v = i.tabIndex,
        S = i.width,
        R = i["aria-label"],
        L = g(null),
        E = L[0],
        k = L[1],
        I = g(!0),
        T = I[0],
        D = I[1],
        x = f(0),
        $ = f(0),
        P = f(),
        N = f(null),
        M = r("useWAWebIsKeyboardUser")(),
        w = M.isKeyboardUser,
        A = g(!1),
        F = A[0],
        O = A[1],
        B = r("useWAWebUnmountSignal")(),
        W = function () {
          var e;
          return (e = P.current) == null ? void 0 : e.getOutsideContainer();
        },
        q = function () {
          var e;
          return (e = P.current) == null ? void 0 : e.getInsideContainer();
        },
        U = m(o("WAWebMediaIncrementalZoom").MediaIncrementalZoomCtx),
        V = U.isEnabled,
        H = U.isZoomedIn,
        G,
        z;
      (n[0] !== H
        ? ((G = function () {
            D(!H);
          }),
          (z = [H]),
          (n[0] = H),
          (n[1] = G),
          (n[2] = z))
        : ((G = n[1]), (z = n[2])),
        p(G, z));
      var j;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = function () {
            D(!1);
          }),
          (n[3] = j))
        : (j = n[3]);
      var K = j,
        Q = function (t, n, r) {
          var e = $.current,
            o = x.current,
            a = window.innerWidth / 2 - n,
            i = window.innerHeight / 2 - r,
            l = e > 0 ? Math.round((1.2 * a * e) / t.clientWidth) : 0,
            s = o > 0 ? Math.round((1.2 * i * o) / t.clientHeight) : 0;
          return { translateX: l, translateY: s };
        },
        X = function () {
          (C(!1), k(null), D(!0));
        },
        Y;
      n[4] !== w || n[5] !== B.aborted
        ? ((Y = function () {
            w && !B.aborted && O(!0);
          }),
          (n[4] = w),
          (n[5] = B.aborted),
          (n[6] = Y))
        : (Y = n[6]);
      var J = Y,
        Z;
      n[7] !== B.aborted
        ? ((Z = function () {
            B.aborted || O(!1);
          }),
          (n[7] = B.aborted),
          (n[8] = Z))
        : (Z = n[8]);
      var ee = Z,
        te = function (t, n, r) {
          ee();
          var e = q(),
            o = W();
          if (!(!(e instanceof HTMLElement) || !(o instanceof HTMLElement))) {
            ((x.current = e.clientHeight * t - o.clientHeight),
              ($.current = e.clientWidth * t - o.clientWidth));
            var a = Q(o, n, r),
              i = a.translateX,
              l = a.translateY;
            (C(!0), k({ factor: t, translateX: i, translateY: l }), D(!1));
          }
        },
        ne = function (t, n) {
          if (E) {
            X();
            return;
          }
          te(o("WAWebMediaViewerConstants").ZOOM_IN_FACTOR, t, n);
        },
        re = function (t) {
          (t.stopPropagation(), ne(t.pageX, t.pageY));
        },
        oe = function (t) {
          (t.stopPropagation(),
            ne(window.innerWidth / 2, window.innerHeight / 2));
        };
      _(a, function () {
        return {
          getHeightOverflow: function () {
            return x.current;
          },
          getWidthOverflow: function () {
            return $.current;
          },
          onClick: re,
          onKeyboardZoom: oe,
          getTranslatePosition: Q,
          getOutsideContainer: W,
          getInsideContainer: q,
          closingMediaZoomable: K,
        };
      });
      var ae = { width: S, height: u },
        ie = !V && !E && h.cursorZoomIn,
        le;
      n[9] !== F || n[10] !== ie || n[11] !== E
        ? ((le = (s || (s = r("stylex"))).props(
            r("WAWebMediaViewerStyles").content,
            ie,
            !E &&
              F &&
              o("WDSFocusStateStyles").WDSFocusStateStyles
                .genericFocusPersistent,
          )),
          (n[9] = F),
          (n[10] = ie),
          (n[11] = E),
          (n[12] = le))
        : (le = n[12]);
      var se = c.jsx(
        "div",
        babelHelpers.extends(
          {
            role: b,
            tabIndex: v,
            "aria-label": R,
            ref: N,
            onFocus: J,
            onBlur: ee,
          },
          le,
          { "data-testid": void 0, children: l },
        ),
      );
      E &&
        (se = c.jsx(o("WAWebUimUie.react").UIE, {
          displayName: "ZoomInImage",
          escapable: !0,
          requestDismiss: X,
          children: se,
        }));
      var ue = o("WAWebGetDisplayType").getDisplayType(d),
        ce = o("WAWebAddOnBubbleType").AddOnBubbleType.MEDIA_VIEWER,
        de;
      return (
        d &&
          o("WAWebReactionsUtils").shouldShowReactionBubble(d, ce) &&
          (de = c.jsx(r("WAWebAddOnBubblesContainer.react"), {
            isOutgoingMsg: o("WAWebMsgGetters").getIsSentByMe(d),
            displayType: ue,
            bubbleType: ce,
            displayReactionBubble: T,
            parentIds: [d.id.toString()],
          })),
        V
          ? c.jsx(o("WAWebMediaIncrementalZoom").IncrementalImageRenderer, {
              size: ae,
              image: se,
              addonBubble: de,
            })
          : c.jsxs(r("WAWebObjectFit.react"), {
              type: "zoomIn",
              size: ae,
              position: "relative",
              objectPosition: "relative",
              zoomIn: E,
              onObjectLoad: y,
              ref: P,
              children: [se, de],
            })
      );
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  98,
);
