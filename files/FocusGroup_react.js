__d(
  "FocusGroup.react",
  [
    "FocusManager",
    "Locale",
    "ReactFocusEvent.react",
    "ReactKeyboardEvent.react",
    "focusKeyboardEventPropagation",
    "react",
    "setElementCanTab",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useMemo,
      m = u.useRef,
      p = 5;
    function _(e) {
      return e.length === 1;
    }
    function f(e, t, n, r) {
      o("focusKeyboardEventPropagation").stopFocusKeyboardEventPropagation(n);
      var a = t.DO_NOT_USE_queryFirstNode(e);
      a !== null &&
        (document.activeElement != null &&
          o("setElementCanTab").setElementCanTab(document.activeElement, !1),
        o("setElementCanTab").setElementCanTab(a, !0),
        o("FocusManager").focusElement(a, { preventScroll: r }),
        n.preventDefault());
    }
    function g(e, t, n, r, o, a) {
      var i = t.onNavigate;
      if (i && r) {
        var l = !1,
          s = h(r, o),
          u = {
            currentIndex: s,
            event: n,
            focusItem: function (t, r) {
              var e = t.scopeRef.current;
              e && f(r || a, e, n);
            },
            getItem: function (t) {
              return v(r, t);
            },
            getItemByTag: function (t) {
              for (var e = r.length, n = s + 1; ; ) {
                if (n === s) return null;
                if (n > e - 1) {
                  n = 0;
                  continue;
                }
                var o = r[n];
                if (o) {
                  var a = o.disabled,
                    i = o.scopeRef,
                    l = o.tag,
                    u = i.current;
                  if (u && a !== !0 && l === t) return o;
                }
                n++;
              }
              return null;
            },
            preventDefault: function () {
              l = !0;
            },
            type: e,
          };
        if ((i(u), l)) return !0;
      }
      return !1;
    }
    function h(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        if (r && r.scopeRef.current === t) return n;
      }
      return -1;
    }
    function y(e, t, n) {
      var r = e.scopeRef.current;
      if (r === null) return null;
      if (n !== null) {
        var o = h(n, t),
          a = e.wrap,
          i = S(n, o - 1);
        return !i && a === !0 ? S(n, n.length - 1) : i;
      }
      return null;
    }
    function C(e, t, n) {
      var r = e.scopeRef.current;
      if (r === null) return null;
      if (n.length > 0) {
        var o = h(n, t),
          a = e.wrap,
          i = b(n, o + 1);
        return !i && a === !0 ? b(n, 0) : i;
      }
      return null;
    }
    function b(e, t) {
      var n = e.length;
      if (t > n) return null;
      for (var r = t; r < n; ) {
        var o = e[r];
        if (o !== null && o.disabled !== !0) return o.scopeRef.current;
        r++;
      }
      return null;
    }
    function v(e, t) {
      for (var n = t; n >= 0; ) {
        var r = e[n];
        if (r !== null && r.disabled !== !0) return r;
        n--;
      }
      return null;
    }
    function S(e, t) {
      var n = v(e, t);
      return n ? n.scopeRef.current : null;
    }
    function R(e) {
      var t = e.altKey,
        n = e.ctrlKey,
        r = e.metaKey,
        o = e.shiftKey;
      return t === !0 || n === !0 || r === !0 || o === !0;
    }
    function L(e) {
      var t = s.unstable_Scope,
        n = s.createContext(null),
        r = s.createContext(null);
      function a(r) {
        var a = r.allowModifiers,
          i = r.children,
          u = r.onNavigate,
          c = r.orientation,
          _ = r.pageJumpSize,
          f = _ === void 0 ? p : _,
          g = r.preventScrollOnFocus,
          h = g === void 0 ? !1 : g,
          y = r.tabScopeQuery,
          C = r.wrap,
          b = m(null),
          v = d(
            function () {
              return {
                scopeRef: b,
                orientation: c,
                wrap: C,
                tabScopeQuery: y,
                allowModifiers: a,
                pageJumpSize: f,
                preventScrollOnFocus: h,
                onNavigate: u,
              };
            },
            [c, C, y, a, f, h, u],
          ),
          S = m(!1),
          R = o("ReactFocusEvent.react").useFocusWithin_DEPRECATED(
            b,
            d(
              function () {
                return {
                  onFocusWithin: function (n) {
                    S.current ||
                      ((S.current = !0),
                      b.current &&
                        e &&
                        (l(b.current, e),
                        o("setElementCanTab").setElementCanTab(n.target, !0)));
                  },
                };
              },
              [S],
            ),
          );
        return s.jsx(n.Provider, {
          value: v,
          children: s.jsx(t, { ref: R, children: i }),
        });
      }
      a.displayName = a.name + " [from " + i.id + "]";
      function l(e, t) {
        var n = document.activeElement,
          r = e.DO_NOT_USE_queryAllNodes(t);
        if (r !== null)
          for (var a = 0; a < r.length; a++) {
            var i = r[a];
            i !== n
              ? o("setElementCanTab").setElementCanTab(i, !1)
              : o("setElementCanTab").setElementCanTab(i, !0);
          }
      }
      function u(a) {
        var i = a.children,
          u = a.disabled,
          p = a.tag,
          v = m(null),
          L = c(n);
        o("ReactKeyboardEvent.react").useKeyboard(
          v,
          d(
            function () {
              return {
                onKeyDown: function (n) {
                  if (
                    !o(
                      "focusKeyboardEventPropagation",
                    ).hasFocusKeyboardEventPropagationStopped(n)
                  ) {
                    var t = v.current;
                    if (t !== null && L !== null) {
                      var a =
                          L.orientation === "vertical" ||
                          L.orientation === "both",
                        i =
                          L.orientation === "horizontal" ||
                          L.orientation === "both",
                        s = L.scopeRef.current,
                        u = n.key,
                        c = L.preventScrollOnFocus;
                      if (u === "Tab" && s !== null) {
                        var d = L.tabScopeQuery;
                        if (d) {
                          if (L.onNavigate) {
                            var m = s.getChildContextValues(r);
                            if (g("TAB", L, n, m, t, d)) return;
                          }
                          l(s, d);
                        }
                        return;
                      }
                      if (R(n)) {
                        var p = L.allowModifiers;
                        if (p !== !0) return;
                      }
                      if (s === null) return;
                      var E = u;
                      switch (
                        (o("Locale").isRTL() &&
                          (u === "ArrowRight"
                            ? (E = "ArrowLeft")
                            : u === "ArrowLeft" && (E = "ArrowRight")),
                        E)
                      ) {
                        case "Home": {
                          var k = s.getChildContextValues(r);
                          if (g("HOME", L, n, k, t, e)) return;
                          var I = b(k, 0);
                          if (I) {
                            f(e, I, n, c);
                            return;
                          }
                          break;
                        }
                        case "End": {
                          var T = s.getChildContextValues(r);
                          if (g("END", L, n, T, t, e)) return;
                          var D = S(T, T.length - 1);
                          if (D) {
                            f(e, D, n, c);
                            return;
                          }
                          break;
                        }
                        case "PageUp": {
                          var x = s.getChildContextValues(r);
                          if (g("PAGE_UP", L, n, x, t, e)) return;
                          var $ = L.pageJumpSize,
                            P = h(x, t),
                            N = b(x, Math.max(0, P - $));
                          if (N) {
                            f(e, N, n, c);
                            return;
                          }
                          break;
                        }
                        case "PageDown": {
                          var M = s.getChildContextValues(r);
                          if (g("PAGE_DOWN", L, n, M, t, e)) return;
                          var w = L.pageJumpSize,
                            A = h(M, t),
                            F = S(M, Math.min(M.length - 1, A + w));
                          if (F) {
                            f(e, F, n, c);
                            return;
                          }
                          break;
                        }
                        case "ArrowUp": {
                          if (a) {
                            var O = s.getChildContextValues(r);
                            if (g("PREV_ITEM", L, n, O, t, e)) return;
                            var B =
                              n.metaKey || n.ctrlKey ? b(O, 0) : y(L, t, O);
                            if (B) {
                              f(e, B, n, c);
                              return;
                            }
                          }
                          break;
                        }
                        case "ArrowDown": {
                          if (a) {
                            var W = s.getChildContextValues(r);
                            if (g("NEXT_ITEM", L, n, W, t, e)) return;
                            var q =
                              n.metaKey || n.ctrlKey
                                ? S(W, W.length - 1)
                                : C(L, t, W);
                            if (q) {
                              f(e, q, n, c);
                              return;
                            }
                          }
                          break;
                        }
                        case "ArrowLeft": {
                          if (i) {
                            var U = s.getChildContextValues(r);
                            if (g("PREV_ITEM", L, n, U, t, e)) return;
                            var V =
                              n.metaKey || n.ctrlKey ? b(U, 0) : y(L, t, U);
                            if (V) {
                              f(e, V, n, c);
                              return;
                            }
                          }
                          break;
                        }
                        case "ArrowRight": {
                          if (i) {
                            var H = s.getChildContextValues(r);
                            if (g("NEXT_ITEM", L, n, H, t, e)) return;
                            var G =
                              n.metaKey || n.ctrlKey
                                ? S(H, H.length - 1)
                                : C(L, t, H);
                            G && f(e, G, n, c);
                          }
                          break;
                        }
                        default:
                          if (_(u) && L.onNavigate) {
                            var z = s.getChildContextValues(r);
                            g("PRINT_CHAR", L, n, z, t, e);
                          }
                      }
                    }
                  }
                },
              };
            },
            [L],
          ),
        );
        var E = o("ReactFocusEvent.react").useFocusWithin_DEPRECATED(
            v,
            d(
              function () {
                return {
                  onFocusWithin: function (n) {
                    if (e != null) {
                      var t,
                        r =
                          (t = v.current) == null
                            ? void 0
                            : t.DO_NOT_USE_queryFirstNode(e),
                        a = n.target === r;
                      if (a && r && !o("setElementCanTab").canElementTab(r)) {
                        var i = L == null ? void 0 : L.scopeRef.current;
                        i && l(i, e);
                      }
                    }
                  },
                };
              },
              [L == null ? void 0 : L.scopeRef],
            ),
          ),
          k = { scopeRef: v, disabled: u, tag: p };
        return s.jsx(r.Provider, {
          value: k,
          children: s.jsx(t, { ref: E, children: i }),
        });
      }
      return ((u.displayName = u.name + " [from " + i.id + "]"), [a, u]);
    }
    l.createFocusGroup = L;
  },
  98,
);
