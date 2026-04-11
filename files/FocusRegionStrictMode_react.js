__d(
  "FocusRegionStrictMode.react",
  [
    "ActiveFocusRegionUtilsContext",
    "FocusManager",
    "FocusRegionType",
    "ReactEventHookPropagation",
    "ReactFocusEvent.react",
    "ReactKeyboardEvent.react",
    "react",
    "setElementCanTab",
    "useUnsafeRef_DEPRECATED",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useContext,
      p = c.useEffect,
      _ = c.useLayoutEffect,
      f = c.useMemo,
      g = c.useRef;
    function h(e, t, n) {
      var r = document.activeElement;
      window.requestAnimationFrame(function () {
        document.activeElement === r &&
          o("FocusManager").focusElement(e, {
            preventScroll: t,
            focusWithoutUserIntent: n,
          });
      });
    }
    function y(e) {
      return e.offsetWidth === 0 && e.offsetHeight === 0;
    }
    var C = u.unstable_Scope,
      b = new Map();
    function v(t) {
      var n,
        a = t.autoRestoreFocus,
        i = t.autoFocusQuery,
        l = t.children,
        s = t.containFocusQuery,
        c = t.forwardRef,
        v = t.id,
        S = t.onEscapeFocusRegion,
        R = t.recoverFocusStrategy,
        L =
          R === void 0 ? o("FocusRegionType").RecoverFocusStrategy.Nearest : R,
        E = t.recoverFocusQuery,
        k = t.stopOnFocusWithinPropagation,
        I = k === void 0 ? !0 : k,
        T = g(null),
        D = g(null),
        x = m(r("ActiveFocusRegionUtilsContext")),
        $ =
          x === null && (a === !0 || S != null) ? document.activeElement : null,
        P = (e || (e = r("useUnsafeRef_DEPRECATED")))($),
        N = (n = P.current) != null ? n : $,
        M = f(function () {
          return {
            lastFocused: null,
            scope: null,
            restorationFocusRegionItem: null,
            triggeredFocusRegionItems: new Set(),
          };
        }, []),
        w = d(
          function () {
            if (x != null) {
              var e = x.getActiveFocusRegion();
              if (e !== M) {
                if (M.restorationFocusRegionItem !== e) {
                  var t;
                  if (
                    (e == null ? void 0 : e.lastFocused) != null &&
                    !((t = T.current) != null && t.containsNode(e.lastFocused))
                  )
                    (e != null && e.triggeredFocusRegionItems.add(M),
                      (M.restorationFocusRegionItem = e));
                  else if (M.restorationFocusRegionItem == null) {
                    var n = e == null ? void 0 : e.restorationFocusRegionItem;
                    ((M.restorationFocusRegionItem = n),
                      e != null &&
                        (n == null || n.triggeredFocusRegionItems.delete(e)),
                      n == null || n.triggeredFocusRegionItems.add(M),
                      x.setActiveFocusRegion(M));
                    return;
                  }
                }
                (e === null ||
                  (e != null &&
                    M != null &&
                    e.lastFocused !== M.lastFocused)) &&
                  x.setActiveFocusRegion(M);
              }
            }
          },
          [x, M],
        ),
        A = g(null),
        F = d(
          function (e) {
            ((T.current = e), (M.scope = e));
            var t = A.current;
            (c && (c.current = e),
              t !== null && t !== v && b.get(t) === null && b.delete(t),
              v != null &&
                (e !== null
                  ? ((A.current = v), b.set(v, e))
                  : b.get(v) === null && b.delete(v)));
          },
          [c, v, M],
        );
      F = o("ReactFocusEvent.react").useFocusWithin(
        f(
          function () {
            return {
              initializer: F,
              onBeforeBlurWithin: function (t) {
                var e = T.current;
                if (e !== null && E !== void 0) {
                  if ((t.stopPropagation(), E === null)) return;
                  var n = t.target,
                    r = o("FocusManager").getAllNodesFromOneOrManyQueries(E, e);
                  if (r === null) return;
                  var a = r.indexOf(n),
                    i = n._tabIndexState;
                  D.current = {
                    detachedCanTab: i != null && i.canTab,
                    recoveryIndex: a,
                    recovery: r,
                  };
                }
              },
              onAfterBlurWithin: function () {
                var e = T.current,
                  t = D.current;
                D.current = null;
                var n = document.activeElement;
                if (
                  e !== null &&
                  E != null &&
                  t !== null &&
                  (n == null || n === document.body || !e.containsNode(n))
                ) {
                  var r = !0,
                    a = !0,
                    i = t.recovery,
                    l = t.recoveryIndex,
                    s = o("FocusManager").getAllNodesFromOneOrManyQueries(E, e);
                  if (s !== null && i !== null) {
                    for (
                      var u = new Set(s), c = new Set(i), d = l - 1;
                      d >= 0;
                      d--
                    ) {
                      var m = i[d];
                      if (u.has(m)) {
                        var p = s.indexOf(m),
                          _ = p + 1;
                        if (_ < s.length) {
                          var f = s[_];
                          if (!c.has(f)) {
                            (t.detachedCanTab &&
                              o("setElementCanTab").setElementCanTab(f, !0),
                              h(f, r, a));
                            return;
                          }
                        }
                        (t.detachedCanTab &&
                          o("setElementCanTab").setElementCanTab(m, !0),
                          h(m, r, a));
                        return;
                      }
                    }
                    if (L === o("FocusRegionType").RecoverFocusStrategy.Nearest)
                      for (var g = l + 1; g < i.length; g++) {
                        var y = i[g];
                        if (u.has(y)) {
                          var C = s.indexOf(y),
                            b = C - 1;
                          if (b >= 0) {
                            var v = s[b];
                            (t.detachedCanTab &&
                              o("setElementCanTab").setElementCanTab(v, !0),
                              h(v, r, a));
                            return;
                          }
                        }
                      }
                    var S = o("FocusManager").getFirstNodeFromOneOrManyQueries(
                      E,
                      e,
                    );
                    S &&
                      (t.detachedCanTab &&
                        o("setElementCanTab").setElementCanTab(S, !0),
                      h(S, r, a));
                  }
                }
              },
              onFocusWithin: function (t) {
                (I &&
                  o("ReactEventHookPropagation").stopEventHookPropagation(
                    t,
                    "useFocusWithin",
                  ),
                  (M.lastFocused = t.target),
                  w());
              },
            };
          },
          [E, L, I, M, w],
        ),
      );
      var O = d(
        function () {
          var e = T.current,
            t = document.activeElement;
          if (i != null && e !== null && (!t || !e.containsNode(t))) {
            var n = M.lastFocused;
            n != null && e.containsNode(n) && !y(n)
              ? o("FocusManager").focusElement(n, {
                  focusWithAutoFocus: !0,
                  focusWithoutUserIntent: !0,
                  preventScroll: !0,
                })
              : o("FocusManager").focusFirst(i, e, {
                  focusWithAutoFocus: !0,
                  focusWithoutUserIntent: !0,
                  preventScroll: !0,
                });
          }
        },
        [i, M],
      );
      (_(O, [O]), p(O, [O]));
      var B = d(
          function (e, t) {
            t === void 0 && (t = !1);
            var n = T.current,
              r = document.activeElement,
              i = P.current;
            P.current = null;
            var l = e == null ? void 0 : e.triggeredFocusRegionItems,
              s = e == null ? void 0 : e.restorationFocusRegionItem;
            (l != null &&
              l.size &&
              l.forEach(function (e) {
                return (e.restorationFocusRegionItem = s);
              }),
              e != null &&
                s != null &&
                (s.triggeredFocusRegionItems.delete(e),
                l != null &&
                  l.size &&
                  l.forEach(function (e) {
                    s.triggeredFocusRegionItems.add(e);
                  })),
              (M.lastFocused = null));
            var u = x == null ? void 0 : x.getActiveFocusRegion(),
              c = u != null ? u.restorationFocusRegionItem : { lastFocused: i };
            u === e && (x == null || x.setActiveFocusRegion(s));
            var d =
              (n !== null && r !== null && n.containsNode(r)) ||
              r == null ||
              r === document.body;
            if ((a === !0 || S != null) && d) {
              var m = function (t) {
                if (
                  (t === void 0 && (t = !1),
                  (c == null ? void 0 : c.lastFocused) != null)
                ) {
                  var e = !0,
                    n = !0,
                    r = document.activeElement;
                  (t || r === null || r === document.body) &&
                    o("FocusManager").focusElement(c.lastFocused, {
                      preventScroll: e,
                      focusWithoutUserIntent: n,
                    });
                }
              };
              t
                ? m(t)
                : window.requestAnimationFrame(function () {
                    return m();
                  });
            }
          },
          [x, a, S, M],
        ),
        W = d(
          function () {
            (B(M, !0), S && S());
          },
          [B, S, M],
        );
      return (
        o("ReactKeyboardEvent.react").useKeyboard(
          T,
          f(
            function () {
              return {
                onKeyDown: function (t) {
                  if (
                    !(s == null || t.key !== "Tab" || t.isDefaultPrevented())
                  ) {
                    var e = T.current;
                    e !== null &&
                      (t.shiftKey
                        ? o("FocusManager").focusPreviousContained(
                            s,
                            e,
                            t,
                            !0,
                            S != null ? W : void 0,
                          )
                        : o("FocusManager").focusNextContained(
                            s,
                            e,
                            t,
                            !0,
                            S != null ? W : void 0,
                          ));
                  }
                },
              };
            },
            [s, W, S],
          ),
        ),
        _(
          function () {
            P.current = N;
            var e = M;
            return function () {
              B(e);
            };
          },
          [x, a, B, M, N],
        ),
        u.jsx(C, { id: v, ref: F, children: l })
      );
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e, t, n) {
      var r = b.get(e);
      if (r) {
        var a = r.DO_NOT_USE_queryFirstNode(t);
        if (a !== null)
          return (o("FocusManager").focusElement(a, { preventScroll: n }), a);
      }
      return null;
    }
    ((l.FocusRegion = v), (l.focusRegionById = S));
  },
  98,
);
