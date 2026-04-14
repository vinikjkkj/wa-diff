__d(
  "useWAWebLexicalTypeAheadContainer",
  [
    "Lexical",
    "LexicalComposerContext",
    "WANullthrows",
    "WAWebPREGatingUtils",
    "WAWebPopover.react",
    "react",
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
      var n = o("LexicalComposerContext").useLexicalComposerContext(),
        a = n[0],
        i = m(null),
        l = i[0],
        s = i[1],
        d = u(l),
        p = r("useWAWebDebouncedCallback")(s, 50),
        g = o("WAWebPREGatingUtils").isPREResizeEnabled() ? p : s,
        h = o("WAWebPREGatingUtils").isPREResizeEnabled() ? d : l,
        y = r("useWAWebStableCallback")(function () {
          a.getEditorState().read(function () {
            var n = o("Lexical").$getSelection();
            if (!o("Lexical").$isRangeSelection(n) || !n.isCollapsed()) {
              g(null);
              return;
            }
            var r = _(e);
            if (r) {
              if (
                h != null &&
                (f(r, h) || t) &&
                o("WAWebPREGatingUtils").isPREResizeEnabled()
              )
                return;
              g(r);
              return;
            }
            g(null);
          });
        }),
        C = r("useWAWebDebouncedCallback")(y, 100);
      return (
        c(
          function () {
            var e = a.registerUpdateListener(y);
            return function () {
              e();
            };
          },
          [a, y, t],
        ),
        c(
          function () {
            return (
              window.addEventListener(
                "resize",
                o("WAWebPREGatingUtils").isPREResizeEnabled() ? C : y,
                o("WAWebPREGatingUtils").isPREResizeEnabled() ? !0 : void 0,
              ),
              document.addEventListener("scroll", y, {
                capture: !0,
                passive: !0,
              }),
              function () {
                (window.removeEventListener(
                  "resize",
                  o("WAWebPREGatingUtils").isPREResizeEnabled() ? C : y,
                  o("WAWebPREGatingUtils").isPREResizeEnabled() ? !0 : void 0,
                ),
                  document.removeEventListener("scroll", y, !0));
              }
            );
          },
          [y, C],
        ),
        h
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
