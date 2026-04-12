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
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.children,
        l = a.height,
        u = a.msg,
        d = a.onLoad,
        y = a.onZoomIn,
        C = a.role,
        b = a.tabIndex,
        v = a.width,
        S = a["aria-label"],
        R = g(null),
        L = R[0],
        E = R[1],
        k = g(!0),
        I = k[0],
        T = k[1],
        D = f(0),
        x = f(0),
        $ = f(),
        P = f(null),
        N = r("useWAWebIsKeyboardUser")(),
        M = N.isKeyboardUser,
        w = g(!1),
        A = w[0],
        F = w[1],
        O = r("useWAWebUnmountSignal")(),
        B = function () {
          var e;
          return (e = $.current) == null ? void 0 : e.getOutsideContainer();
        },
        W = function () {
          var e;
          return (e = $.current) == null ? void 0 : e.getInsideContainer();
        },
        q = m(o("WAWebMediaIncrementalZoom").MediaIncrementalZoomCtx),
        U = q.isEnabled,
        V = q.isZoomedIn;
      p(
        function () {
          T(!V);
        },
        [V],
      );
      var H = function () {
          T(!1);
        },
        G = function (t, n, r) {
          var e = x.current,
            o = D.current,
            a = window.innerWidth / 2 - n,
            i = window.innerHeight / 2 - r,
            l = e > 0 ? Math.round((1.2 * a * e) / t.clientWidth) : 0,
            s = o > 0 ? Math.round((1.2 * i * o) / t.clientHeight) : 0;
          return { translateX: l, translateY: s };
        },
        z = function () {
          (y(!1), E(null), T(!0));
        },
        j = function () {
          M && !O.aborted && F(!0);
        },
        K = function () {
          O.aborted || F(!1);
        },
        Q = function (t, n, r) {
          K();
          var e = W(),
            o = B();
          if (!(!(e instanceof HTMLElement) || !(o instanceof HTMLElement))) {
            ((D.current = e.clientHeight * t - o.clientHeight),
              (x.current = e.clientWidth * t - o.clientWidth));
            var a = G(o, n, r),
              i = a.translateX,
              l = a.translateY;
            (y(!0), E({ factor: t, translateX: i, translateY: l }), T(!1));
          }
        },
        X = function (t, n) {
          if (L) {
            z();
            return;
          }
          Q(o("WAWebMediaViewerConstants").ZOOM_IN_FACTOR, t, n);
        },
        Y = function (t) {
          (t.stopPropagation(), X(t.pageX, t.pageY));
        },
        J = function (t) {
          (t.stopPropagation(),
            X(window.innerWidth / 2, window.innerHeight / 2));
        };
      _(n, function () {
        return {
          getHeightOverflow: function () {
            return D.current;
          },
          getWidthOverflow: function () {
            return x.current;
          },
          onClick: Y,
          onKeyboardZoom: J,
          getTranslatePosition: G,
          getOutsideContainer: B,
          getInsideContainer: W,
          closingMediaZoomable: H,
        };
      });
      var Z = { width: v, height: l },
        ee = !U && !L && h.cursorZoomIn,
        te = c.jsx(
          "div",
          babelHelpers.extends(
            {
              role: C,
              tabIndex: b,
              "aria-label": S,
              ref: P,
              onFocus: j,
              onBlur: K,
            },
            (s || (s = r("stylex"))).props(
              r("WAWebMediaViewerStyles").content,
              ee,
              !L &&
                A &&
                o("WDSFocusStateStyles").WDSFocusStateStyles
                  .genericFocusPersistent,
            ),
            { "data-testid": void 0, children: i },
          ),
        );
      L &&
        (te = c.jsx(o("WAWebUimUie.react").UIE, {
          displayName: "ZoomInImage",
          escapable: !0,
          requestDismiss: z,
          children: te,
        }));
      var ne = o("WAWebGetDisplayType").getDisplayType(u),
        re = o("WAWebAddOnBubbleType").AddOnBubbleType.MEDIA_VIEWER,
        oe;
      return (
        u &&
          o("WAWebReactionsUtils").shouldShowReactionBubble(u, re) &&
          (oe = c.jsx(r("WAWebAddOnBubblesContainer.react"), {
            isOutgoingMsg: o("WAWebMsgGetters").getIsSentByMe(u),
            displayType: ne,
            bubbleType: re,
            displayReactionBubble: I,
            parentIds: [u.id.toString()],
          })),
        U
          ? c.jsx(o("WAWebMediaIncrementalZoom").IncrementalImageRenderer, {
              size: Z,
              image: te,
              addonBubble: oe,
            })
          : c.jsxs(r("WAWebObjectFit.react"), {
              type: "zoomIn",
              size: Z,
              position: "relative",
              objectPosition: "relative",
              zoomIn: L,
              onObjectLoad: d,
              ref: $,
              children: [te, oe],
            })
      );
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  98,
);
