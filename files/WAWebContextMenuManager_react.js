__d(
  "WAWebContextMenuManager.react",
  [
    "WAWebCmd",
    "WAWebDropdown.react",
    "WAWebFocusTracer",
    "WAWebL10N",
    "WAWebUimContext",
    "WAWebUimUieItem.react",
    "WAWebVelocityTransitionGroup",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.cloneElement,
      d = u.useCallback,
      m = u.useImperativeHandle,
      p = u.useLayoutEffect,
      _ = u.useRef,
      f = u.useState,
      g = { MENU: "MENU", TOOLTIP: "TOOLTIP" };
    function h(e) {
      var t = o("react-compiler-runtime").c(38),
        n = e.ref,
        a = e.type,
        i = _(null),
        l = _(null),
        u = _(null),
        d = f(null),
        h = d[0],
        y = d[1],
        b = f(null),
        v = b[0],
        S = b[1],
        R;
      (t[0] !== (h == null ? void 0 : h.uim)
        ? ((R = function (t, n) {
            var e, a, i, s, c, d, m;
            (h == null || h.uim.pop(), (l.current = n));
            var p = document.activeElement;
            p instanceof HTMLElement && (u.current = p);
            var _ = t.menuOptions,
              f = t.uim,
              g = _.event;
            g == null || g.stopPropagation();
            var C = g == null ? 0 : 10;
            S(null);
            var b =
                typeof (g == null ? void 0 : g.clientX) == "number"
                  ? g.clientX
                  : (e = _.offsetX) != null
                    ? e
                    : 0,
              v =
                typeof (g == null ? void 0 : g.clientY) == "number"
                  ? g.clientY
                  : (a = _.offsetY) != null
                    ? a
                    : 0;
            y(
              babelHelpers.extends({}, _, {
                type:
                  (i = _.type) != null
                    ? i
                    : o("WAWebDropdown.react").MenuType.Dropdown,
                originX: b,
                originY: v,
                offsetX: (s = _.offsetX) != null ? s : C,
                offsetY: (c = _.offsetY) != null ? c : C,
                dirX:
                  (d = _.dirX) != null
                    ? d
                    : r("WAWebL10N").isRTL()
                      ? o("WAWebDropdown.react").DirX.LEFT
                      : o("WAWebDropdown.react").DirX.RIGHT,
                dirY:
                  (m = _.dirY) != null
                    ? m
                    : o("WAWebDropdown.react").DirY.BOTTOM,
                key: Math.random(),
                uim: f,
              }),
            );
          }),
          (t[0] = h == null ? void 0 : h.uim),
          (t[1] = R))
        : (R = t[1]),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          a === g.MENU ? "open_context_menu" : "open_tooltip",
          R,
        ));
      var L;
      (t[2] !== (h == null ? void 0 : h.uim)
        ? ((L = function (t) {
            if (t == null || (h == null ? void 0 : h.uim) === t) {
              var e = t == null ? void 0 : t.dismissEvent;
              (e != null &&
                e instanceof KeyboardEvent &&
                (r("WAWebFocusTracer").focus(u.current), (u.current = null)),
                y(null),
                S(null));
            }
          }),
          (t[2] = h == null ? void 0 : h.uim),
          (t[3] = L))
        : (L = t[3]),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          a === g.MENU ? "close_context_menu" : "close_tooltip",
          L,
        ));
      var E, k;
      (t[4] !== v || t[5] !== h
        ? ((E = function () {
            var e,
              t,
              n = i.current;
            if (!(h == null || n == null)) {
              var r = h.anchor,
                o = r instanceof HTMLElement && !r.isConnected;
              if (o) {
                h.uim.requestDismiss();
                return;
              }
              if (v == null) {
                var a = n.clientWidth,
                  l = n.clientHeight + 10;
                S(
                  C({
                    anchor:
                      (e = h.anchor) != null
                        ? e
                        : (t = h.anchorRef) == null
                          ? void 0
                          : t.current,
                    temporaryMenuPosition: h,
                    menuWidth: a,
                    menuHeight: l,
                  }),
                );
              }
            }
          }),
          (k = [h, v]),
          (t[4] = v),
          (t[5] = h),
          (t[6] = E),
          (t[7] = k))
        : ((E = t[6]), (k = t[7])),
        p(E, k));
      var I;
      (t[8] !== h
        ? ((I = function () {
            return {
              isOpen: function () {
                return h != null;
              },
            };
          }),
          (t[8] = h),
          (t[9] = I))
        : (I = t[9]),
        m(n, I));
      var T;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = function (t) {
            t != null &&
              (l.current == null || l.current(t.getElement()),
              (l.current = null));
          }),
          (t[10] = T))
        : (T = t[10]);
      var D = T,
        x;
      if (t[11] !== v || t[12] !== h) {
        if (h == null)
          x = s.jsx(r("WAWebVelocityTransitionGroup"), {
            transitionName: "dropdown",
          });
        else {
          var $ = h.autoFocus,
            P = h.findFirstItem,
            N = h.horizontal,
            M = h.key,
            w = h.menu,
            A = h.testid,
            F = h.theme,
            O = h.tooltipColorScheme,
            B = h.type,
            W = v != null ? v : h,
            q = W.dirX,
            U = W.dirY,
            V = W.offsetX,
            H = W.offsetY,
            G = W.originX,
            z = W.originY,
            j;
          t[14] !== w || t[15] !== F
            ? ((j = Array.isArray(w)
                ? w.map(function (e) {
                    return c(e, F === void 0 ? null : { theme: F });
                  })
                : w),
              (t[14] = w),
              (t[15] = F),
              (t[16] = j))
            : (j = t[16]);
          var K = j,
            Q = G + V,
            X = z + H,
            Y;
          t[17] !== Q || t[18] !== X
            ? ((Y = { x: Q, y: X }), (t[17] = Q), (t[18] = X), (t[19] = Y))
            : (Y = t[19]);
          var J = "key-" + M,
            Z = v == null,
            ee;
          t[20] !== K
            ? ((ee = s.jsx(r("WAWebUimUieItem.react"), {
                ref: D,
                children: K,
              })),
              (t[20] = K),
              (t[21] = ee))
            : (ee = t[21]);
          var te;
          (t[22] !== $ ||
          t[23] !== q ||
          t[24] !== U ||
          t[25] !== P ||
          t[26] !== N ||
          t[27] !== Y ||
          t[28] !== J ||
          t[29] !== Z ||
          t[30] !== ee ||
          t[31] !== A ||
          t[32] !== O ||
          t[33] !== B
            ? ((te = s.jsx(
                o("WAWebDropdown.react").Dropdown,
                {
                  ref: i,
                  origin: Y,
                  type: B,
                  dirX: q,
                  dirY: U,
                  horizontal: N,
                  autoFocus: $,
                  findFirstItem: P,
                  isTemporaryRender: Z,
                  tooltipColorScheme: O,
                  testid: void 0,
                  children: ee,
                },
                J,
              )),
              (t[22] = $),
              (t[23] = q),
              (t[24] = U),
              (t[25] = P),
              (t[26] = N),
              (t[27] = Y),
              (t[28] = J),
              (t[29] = Z),
              (t[30] = ee),
              (t[31] = A),
              (t[32] = O),
              (t[33] = B),
              (t[34] = te))
            : (te = t[34]),
            (x = s.jsx(r("WAWebVelocityTransitionGroup"), {
              transitionName:
                B === o("WAWebDropdown.react").MenuType.Picker
                  ? "dropdown-picker"
                  : "dropdown",
              children: te,
            })));
        }
        ((t[11] = v), (t[12] = h), (t[13] = x));
      } else x = t[13];
      var ne;
      return (
        t[35] !== (h == null ? void 0 : h.uim) || t[36] !== x
          ? ((ne = s.jsx(r("WAWebUimContext").Consumer, {
              children: function (t) {
                return s.jsx(r("WAWebUimContext").Provider, {
                  value: (h == null ? void 0 : h.uim) || t,
                  children: x,
                });
              },
            })),
            (t[35] = h == null ? void 0 : h.uim),
            (t[36] = x),
            (t[37] = ne))
          : (ne = t[37]),
        ne
      );
    }
    var y = h;
    function C(e) {
      var t = e.anchor,
        n = e.menuHeight,
        r = e.menuWidth,
        a = e.temporaryMenuPosition,
        i = window.innerWidth,
        l = window.innerHeight,
        s = a.dirX,
        u = a.dirY,
        c = a.offsetX,
        d = a.offsetY,
        m = a.originX,
        p = a.originY,
        _ = m,
        f = m,
        g = p,
        h = p,
        y = 0;
      if (t && t instanceof HTMLElement) {
        var C = t.getBoundingClientRect();
        ((_ = C.left),
          (f = C.right),
          (h = C.bottom),
          (g = C.top),
          (y = t.offsetWidth));
      }
      var v = s;
      v === o("WAWebDropdown.react").DirX.RIGHT && _ + r > i && f - r > 0
        ? (v = o("WAWebDropdown.react").DirX.LEFT)
        : v === o("WAWebDropdown.react").DirX.LEFT && f - r < 0 && _ + r < i
          ? (v = o("WAWebDropdown.react").DirX.RIGHT)
          : v === o("WAWebDropdown.react").DirX.CENTER &&
            (f + r / 2 > i
              ? (v = o("WAWebDropdown.react").DirX.LEFT)
              : _ - r / 2 < 0 && (v = o("WAWebDropdown.react").DirX.RIGHT));
      var S = u;
      S === o("WAWebDropdown.react").DirY.BOTTOM && h + n + d > l && g - n > 0
        ? (S = o("WAWebDropdown.react").DirY.TOP)
        : S === o("WAWebDropdown.react").DirY.TOP &&
          g - n < 0 &&
          h + n + d < l &&
          (S = o("WAWebDropdown.react").DirY.BOTTOM);
      var R;
      S === o("WAWebDropdown.react").DirY.TOP ? (R = g) : (R = h);
      var L = c,
        E = d;
      return (
        t ||
          (v === o("WAWebDropdown.react").DirX.LEFT && (L = 0),
          S === o("WAWebDropdown.react").DirY.TOP && (E = 0)),
        {
          dirX: v,
          dirY: S,
          originX: b({ anchorWidth: y, dx: v, left: _, right: f }),
          originY: R,
          offsetX: L,
          offsetY: E,
        }
      );
    }
    function b(e) {
      var t = e.anchorWidth,
        n = e.dx,
        r = e.left,
        a = e.right;
      switch (n) {
        case o("WAWebDropdown.react").DirX.RIGHT:
          return r;
        case o("WAWebDropdown.react").DirX.LEFT:
          return a;
        case o("WAWebDropdown.react").DirX.CENTER:
          return r + t / 2;
      }
    }
    ((l.Type = g), (l.ContextMenuManager = y));
  },
  98,
);
