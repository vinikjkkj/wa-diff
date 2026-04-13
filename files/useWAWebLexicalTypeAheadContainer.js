__d(
  "useWAWebLexicalTypeAheadContainer",
  [
    "Lexical",
    "LexicalComposerContext",
    "WANullthrows",
    "WAWebPREGatingUtils",
    "WAWebPopover.react",
    "react",
    "react-compiler-runtime",
    "useWAWebDebouncedCallback",
    "useWAWebLexicalFocusState",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useDeferredValue,
      c = s.useEffect,
      d = s.useMemo,
      m = s.useState,
      p = 10;
    function _(e) {
      var t = document.getSelection();
      if (!t || !t.isCollapsed) return null;
      var n = t.anchorNode,
        r = t.anchorOffset;
      if (n == null || r == null) return null;
      var o = e,
        a = document.createRange();
      try {
        (a.setStart(n, o), a.setEnd(n, r));
      } catch (e) {
        return null;
      }
      return a.getBoundingClientRect();
    }
    function f(e, t) {
      return (
        e.bottom === t.bottom &&
        e.height === t.height &&
        e.left === t.left &&
        e.right === t.right &&
        e.top === t.top &&
        e.width === t.width &&
        e.x === t.x &&
        e.y === t.y
      );
    }
    function g(e, t) {
      var n = o("react-compiler-runtime").c(22),
        a = o("LexicalComposerContext").useLexicalComposerContext(),
        i = a[0],
        l = m(null),
        s = l[0],
        d = l[1],
        p = u(s),
        g = r("useWAWebDebouncedCallback")(d, 50),
        h;
      n[0] !== g
        ? ((h = o("WAWebPREGatingUtils").isPREResizeEnabled() ? g : d),
          (n[0] = g),
          (n[1] = h))
        : (h = n[1]);
      var y = h,
        C;
      n[2] !== p || n[3] !== s
        ? ((C = o("WAWebPREGatingUtils").isPREResizeEnabled() ? p : s),
          (n[2] = p),
          (n[3] = s),
          (n[4] = C))
        : (C = n[4]);
      var b = C,
        v;
      n[5] !== i || n[6] !== t || n[7] !== e || n[8] !== b || n[9] !== y
        ? ((v = function () {
            i.getEditorState().read(function () {
              var n = o("Lexical").$getSelection();
              if (!o("Lexical").$isRangeSelection(n) || !n.isCollapsed()) {
                y(null);
                return;
              }
              var r = _(e);
              if (r) {
                if (
                  b != null &&
                  (f(r, b) || t) &&
                  o("WAWebPREGatingUtils").isPREResizeEnabled()
                )
                  return;
                y(r);
                return;
              }
              y(null);
            });
          }),
          (n[5] = i),
          (n[6] = t),
          (n[7] = e),
          (n[8] = b),
          (n[9] = y),
          (n[10] = v))
        : (v = n[10]);
      var S = r("useWAWebStableCallback")(v),
        R = r("useWAWebDebouncedCallback")(S, 100),
        L;
      n[11] !== i || n[12] !== S
        ? ((L = function () {
            var e = i.registerUpdateListener(S);
            return function () {
              e();
            };
          }),
          (n[11] = i),
          (n[12] = S),
          (n[13] = L))
        : (L = n[13]);
      var E;
      (n[14] !== i || n[15] !== t || n[16] !== S
        ? ((E = [i, S, t]), (n[14] = i), (n[15] = t), (n[16] = S), (n[17] = E))
        : (E = n[17]),
        c(L, E));
      var k, I;
      return (
        n[18] !== S || n[19] !== R
          ? ((k = function () {
              return (
                window.addEventListener(
                  "resize",
                  o("WAWebPREGatingUtils").isPREResizeEnabled() ? R : S,
                  o("WAWebPREGatingUtils").isPREResizeEnabled() ? !0 : void 0,
                ),
                document.addEventListener("scroll", S, {
                  capture: !0,
                  passive: !0,
                }),
                function () {
                  (window.removeEventListener(
                    "resize",
                    o("WAWebPREGatingUtils").isPREResizeEnabled() ? R : S,
                    o("WAWebPREGatingUtils").isPREResizeEnabled() ? !0 : void 0,
                  ),
                    document.removeEventListener("scroll", S, !0));
                }
              );
            }),
            (I = [S, R]),
            (n[18] = S),
            (n[19] = R),
            (n[20] = k),
            (n[21] = I))
          : ((k = n[20]), (I = n[21])),
        c(k, I),
        b
      );
    }
    function h(e, t, n) {
      var a = o("LexicalComposerContext").useLexicalComposerContext(),
        i = a[0],
        l = t === 0,
        s = g(e, l),
        u = d(function () {
          return document.createElement("div");
        }, []),
        m = r("useWAWebStableCallback")(function () {
          var e = !s || l;
          if (
            ((u.className = {
              0: "xc9l9hb x10l6tqk x1lliihq",
              1: "xc9l9hb x10l6tqk x1s85apg",
            }[!!e << 0]),
            !(!s || e))
          ) {
            var a = i.getRootElement(),
              c = document.scrollingElement;
            if (!(a == null || c == null)) {
              var d = s.left,
                m = s.top;
              u.style.top = window.pageYOffset + m - n - p + "px";
              var _ = window.pageXOffset + d;
              ((_ -= Math.max(0, _ + t - c.scrollWidth)),
                (u.style.left = _ + "px"),
                (u.style.width = t + "px"),
                (u.style.height = n + "px"),
                u.isConnected ||
                  r("WANullthrows")(
                    document.getElementById(
                      o("WAWebPopover.react").ANCHOR_PORTAL_ID,
                    ),
                  ).append(u));
            }
          }
        });
      (c(
        function () {
          m();
        },
        [i, s, m, n, t],
      ),
        c(
          function () {
            return function () {
              u.isConnected && u.remove();
            };
          },
          [u],
        ));
      var _ = r("useWAWebStableCallback")(function () {
          u.className = "xc9l9hb x10l6tqk x1s85apg";
        }),
        f = r("useWAWebStableCallback")(function () {
          u.className = "xc9l9hb x10l6tqk x1lliihq";
        });
      return (
        o("useWAWebLexicalFocusState").useLexicalFocusStateListener(
          i,
          function (e, t) {
            e
              ? f()
              : (t &&
                  t.relatedTarget instanceof HTMLElement &&
                  u.contains(t.relatedTarget)) ||
                _();
          },
        ),
        { containerEle: u, hideContainer: _ }
      );
    }
    l.useLexicalTypeAheadContainer = h;
  },
  98,
);
