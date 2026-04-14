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
      var t = e.ref,
        n = e.type,
        a = _(null),
        i = _(null),
        l = _(null),
        u = f(null),
        h = u[0],
        y = u[1],
        b = f(null),
        v = b[0],
        S = b[1];
      (o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        n === g.MENU ? "open_context_menu" : "open_tooltip",
        function (e, t) {
          var n, a, s, u, c, d, m;
          (h == null || h.uim.pop(), (i.current = t));
          var p = document.activeElement;
          p instanceof HTMLElement && (l.current = p);
          var _ = e.menuOptions,
            f = e.uim,
            g = _.event;
          g == null || g.stopPropagation();
          var C = g == null ? 0 : 10;
          S(null);
          var b =
              typeof (g == null ? void 0 : g.clientX) == "number"
                ? g.clientX
                : (n = _.offsetX) != null
                  ? n
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
                (s = _.type) != null
                  ? s
                  : o("WAWebDropdown.react").MenuType.Dropdown,
              originX: b,
              originY: v,
              offsetX: (u = _.offsetX) != null ? u : C,
              offsetY: (c = _.offsetY) != null ? c : C,
              dirX:
                (d = _.dirX) != null
                  ? d
                  : r("WAWebL10N").isRTL()
                    ? o("WAWebDropdown.react").DirX.LEFT
                    : o("WAWebDropdown.react").DirX.RIGHT,
              dirY:
                (m = _.dirY) != null ? m : o("WAWebDropdown.react").DirY.BOTTOM,
              key: Math.random(),
              uim: f,
            }),
          );
        },
      ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          n === g.MENU ? "close_context_menu" : "close_tooltip",
          function (e) {
            if (e == null || (h == null ? void 0 : h.uim) === e) {
              var t = e == null ? void 0 : e.dismissEvent;
              (t != null &&
                t instanceof KeyboardEvent &&
                (r("WAWebFocusTracer").focus(l.current), (l.current = null)),
                y(null),
                S(null));
            }
          },
        ),
        p(
          function () {
            var e,
              t,
              n = a.current;
            if (!(h == null || n == null)) {
              var r = h.anchor,
                o = r instanceof HTMLElement && !r.isConnected;
              if (o) {
                h.uim.requestDismiss();
                return;
              }
              if (v == null) {
                var i = n.clientWidth,
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
                    menuWidth: i,
                    menuHeight: l,
                  }),
                );
              }
            }
          },
          [h, v],
        ),
        m(t, function () {
          return {
            isOpen: function () {
              return h != null;
            },
          };
        }));
      var R = d(function (e) {
          e != null &&
            (i.current == null || i.current(e.getElement()),
            (i.current = null));
        }, []),
        L;
      if (h == null)
        L = s.jsx(r("WAWebVelocityTransitionGroup"), {
          transitionName: "dropdown",
        });
      else {
        var E = h.autoFocus,
          k = h.findFirstItem,
          I = h.horizontal,
          T = h.key,
          D = h.menu,
          x = h.testid,
          $ = h.theme,
          P = h.tooltipColorScheme,
          N = h.type,
          M = v != null ? v : h,
          w = M.dirX,
          A = M.dirY,
          F = M.offsetX,
          O = M.offsetY,
          B = M.originX,
          W = M.originY,
          q = Array.isArray(D)
            ? D.map(function (e) {
                return c(e, $ === void 0 ? null : { theme: $ });
              })
            : D;
        L = s.jsx(r("WAWebVelocityTransitionGroup"), {
          transitionName:
            N === o("WAWebDropdown.react").MenuType.Picker
              ? "dropdown-picker"
              : "dropdown",
          children: s.jsx(
            o("WAWebDropdown.react").Dropdown,
            {
              ref: a,
              origin: { x: B + F, y: W + O },
              type: N,
              dirX: w,
              dirY: A,
              horizontal: I,
              autoFocus: E,
              findFirstItem: k,
              isTemporaryRender: v == null,
              tooltipColorScheme: P,
              testid: void 0,
              children: s.jsx(r("WAWebUimUieItem.react"), {
                ref: R,
                children: q,
              }),
            },
            "key-" + T,
          ),
        });
      }
      return s.jsx(r("WAWebUimContext").Consumer, {
        children: function (t) {
          return s.jsx(r("WAWebUimContext").Provider, {
            value: (h == null ? void 0 : h.uim) || t,
            children: L,
          });
        },
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
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
