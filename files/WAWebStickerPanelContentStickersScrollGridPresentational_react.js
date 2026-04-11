__d(
  "WAWebStickerPanelContentStickersScrollGridPresentational.react",
  [
    "WAWebABProps",
    "WAWebErrorBoundary.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebPanelsDisplayLocation",
    "WAWebResizeObserver.react",
    "WAWebStickerPackModel",
    "WAWebStickerPanelContentStickerItem.react",
    "WAWebStickersScrollGridPresentationalStyles",
    "lodash",
    "react",
    "stylex",
    "useLazyRef",
    "useWAWebPrevious",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useImperativeHandle,
      _ = c.useRef,
      f = c.useState;
    function g(t) {
      var n = t.displayLocation,
        a = t.loadOneRow,
        i = a === void 0 ? !1 : a,
        l = t.onFocusPrev,
        s = t.onScroll,
        c = t.onStickerClick,
        g = t.onStickerEnter,
        h = t.ref,
        v = t.resetScroll,
        S = t.selectedTab,
        R = t.stickers,
        L = t.theme,
        E = _(),
        k = r("useLazyRef")(function () {
          return new Map();
        }),
        I = _(new Set()),
        T = f(y(n)),
        D = T[0],
        x = T[1],
        $ = f(b(n)),
        P = $[0],
        N = $[1],
        M = r("useWAWebPrevious")(R);
      p(h, function () {
        return {
          focus: function (t) {
            var e = k.current,
              n = t || 0;
            ((n = Math.min(n, e.size)), (n = Math.max(n, 0)));
            var r = e.get(n);
            r && r.focus();
          },
          scrollToTop: function () {
            var e = E.current;
            e && (e.scrollTop = 0);
          },
        };
      });
      var w = d(
        function () {
          var e = k.current,
            t = e.get(0);
          if (t == null) {
            N(1);
            return;
          }
          for (var n = t.getOffsetTop(), r = e.size, o = 0; o < r; o++) {
            var a = e.get(o);
            if (a && a.getOffsetTop() !== n) {
              N(o);
              return;
            }
          }
          N(e.size);
        },
        [k],
      );
      m(
        function () {
          var e = r("lodash").intersectionWith(R, M, function (e, t) {
            return e.id === t.id;
          });
          e.length !== R.length &&
            M !== R &&
            ((I.current = new Set(
              e.map(function (e) {
                return e.id;
              }),
            )),
            x(y(n)));
        },
        [R, M, n],
      );
      var A = function () {
          for (var e = k.current, t = e.size, n = 0; n < t; n++) {
            var r = e.get(n);
            if (r && r.hasFocus()) return n;
          }
          return -1;
        },
        F = function (t) {
          var e;
          if (t !== 0) {
            var n = A();
            if (n !== -1) {
              var r = n + t;
              if (r < 0) {
                l == null || l();
                return;
              }
              var o = (e = E.current) == null ? void 0 : e.parentElement;
              r < P && o && ((o.scrollTop = 0), v == null || v());
              var a = k.current;
              r = Math.min(r, a.size - 1);
              var i = a.get(r);
              i && i.focus();
            }
          }
        },
        O = function (t) {
          F(0 - t);
        },
        B = function (t) {
          (t.stopPropagation(), t.preventDefault());
          var e = A(),
            n = k.current,
            r = Math.min(e + P, n.size - 1),
            o = Math.floor(e / P),
            a = Math.floor(r / P);
          o !== a && F(P);
        },
        W = function (t) {
          (t.stopPropagation(), t.preventDefault(), O(1));
        },
        q = function (t) {
          (t.stopPropagation(), t.preventDefault(), F(1));
        },
        U = function (t) {
          (t.stopPropagation(), t.preventDefault(), O(P));
        },
        V = function (t) {
          var e = E.current;
          e && (s == null || s(e));
        },
        H = function (t) {
          t != null &&
            (I.current.add(t), I.current.size >= D * P && x(D + C(n)), w());
        };
      m(
        function () {
          x(Math.ceil(R.length / P));
        },
        [R.length],
      );
      var G = i ? R.slice(0, P * D) : R,
        z = G.map(function (e, t) {
          var a = k.current,
            i =
              e.isPlaceholder || e.isCreateButton || e.id == null
                ? "" + o("WAWebStickerPackModel").PRE_PLACEHOLDER_ID + t
                : e.id;
          return u.jsx(
            o("WAWebErrorBoundary.react").ErrorBoundary,
            {
              name: "sticker-item",
              children: u.jsx(r("WAWebStickerPanelContentStickerItem.react"), {
                onClick: c,
                onEnter: g,
                onDownload: H,
                ref: function (n) {
                  n ? a.set(t, n) : a.delete(t);
                },
                selectedTab: S,
                sticker: e,
                downloadErrorShouldThrow: !1,
                theme:
                  n ===
                  o("WAWebPanelsDisplayLocation").DisplayLocation
                    .ExpressionsPanel
                    ? "stickerExpressionsPanel"
                    : void 0,
              }),
            },
            i,
          );
        });
      return u.jsx(r("WAWebResizeObserver.react"), {
        onResize: w,
        className: (e || (e = r("stylex")))(
          o("WAWebStickersScrollGridPresentationalStyles")
            .stickersScrollGridPresentationalStyles.fullHeight,
        ),
        children: u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
          ref: E,
          className: e(
            o("WAWebStickersScrollGridPresentationalStyles")
              .stickersScrollGridPresentationalStyles.container,
            L === "searchable" &&
              o("WAWebStickersScrollGridPresentationalStyles")
                .stickersScrollGridPresentationalStyles.unscrollable,
          ),
          handlers: { up: U, down: B, left: W, right: q },
          onScroll: V,
          children: z,
        }),
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    var h = g;
    function y(e) {
      return e !==
        o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel
        ? 2
        : o("WAWebABProps").getABPropConfigValue(
              "web_expression_panels_show_less_stickers",
            )
          ? 4
          : 6;
    }
    function C(e) {
      return e !==
        o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel
        ? 2
        : o("WAWebABProps").getABPropConfigValue(
              "web_expression_panels_show_less_stickers",
            )
          ? 3
          : 4;
    }
    function b(e) {
      return e !==
        o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel
        ? 6
        : o("WAWebABProps").getABPropConfigValue(
              "web_expression_panels_show_less_stickers",
            )
          ? 3
          : 4;
    }
    l.StickersScrollGridPresentational = h;
  },
  98,
);
