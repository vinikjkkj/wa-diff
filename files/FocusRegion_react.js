__d(
  "FocusRegion.react",
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
    function C(e) {
      return (
        e.lastFocused != null &&
        e.lastFocused instanceof Node &&
        e.lastFocused.isConnected
      );
    }
    var b = u.unstable_Scope,
      v = new Map();
    function S(t) {
      var n,
        a = t.autoRestoreFocus,
        i = t.autoFocusQuery,
        l = t.children,
        s = t.containFocusQuery,
        c = t.forwardRef,
        S = t.id,
        R = t.onEscapeFocusRegion,
        L = t.recoverFocusStrategy,
        E =
          L === void 0 ? o("FocusRegionType").RecoverFocusStrategy.Nearest : L,
        k = t.recoverFocusQuery,
        I = t.stopOnFocusWithinPropagation,
        T = I === void 0 ? !0 : I,
        D = g(null),
        x = g(null),
        $ = m(r("ActiveFocusRegionUtilsContext")),
        P =
          $ === null && (a === !0 || R != null) ? document.activeElement : null,
        N = (e || (e = r("useUnsafeRef_DEPRECATED")))(P),
        M = (n = N.current) != null ? n : P,
        w = f(function () {
          return {
            lastFocused: null,
            scope: null,
            restorationFocusRegionItem: null,
            triggeredFocusRegionItems: new Set(),
          };
        }, []),
        A = d(
          function () {
            if ($ != null) {
              var e = $.getActiveFocusRegion();
              if (e !== w) {
                if (w.restorationFocusRegionItem !== e) {
                  var t;
                  if (
                    (e == null ? void 0 : e.lastFocused) != null &&
                    !((t = D.current) != null && t.containsNode(e.lastFocused))
                  )
                    (e != null && e.triggeredFocusRegionItems.add(w),
                      (w.restorationFocusRegionItem = e));
                  else if (w.restorationFocusRegionItem == null) {
                    var n = e == null ? void 0 : e.restorationFocusRegionItem;
                    ((w.restorationFocusRegionItem = n),
                      e != null &&
                        (n == null || n.triggeredFocusRegionItems.delete(e)),
                      n == null || n.triggeredFocusRegionItems.add(w),
                      $.setActiveFocusRegion(w));
                    return;
                  }
                }
                (e === null ||
                  (e != null &&
                    w != null &&
                    e.lastFocused !== w.lastFocused)) &&
                  $.setActiveFocusRegion(w);
              }
            }
          },
          [$, w],
        ),
        F = g(null),
        O = d(
          function (e) {
            ((D.current = e), (w.scope = e));
            var t = F.current;
            (c && (c.current = e),
              t !== null && t !== S && v.get(t) === null && v.delete(t),
              S != null &&
                (e !== null
                  ? ((F.current = S), v.set(S, e))
                  : v.get(S) === null && v.delete(S)));
          },
          [c, S, w],
        );
      O = o("ReactFocusEvent.react").useFocusWithin_DEPRECATED(
        O,
        f(
          function () {
            return {
              onBeforeBlurWithin: function (t) {
                var e = D.current;
                if (e !== null && k !== void 0) {
                  if ((t.stopPropagation(), k === null)) return;
                  var n = t.target,
                    r = o("FocusManager").getAllNodesFromOneOrManyQueries(k, e);
                  if (r === null) return;
                  var a = r.indexOf(n),
                    i = n._tabIndexState;
                  x.current = {
                    detachedCanTab: i != null && i.canTab,
                    recoveryIndex: a,
                    recovery: r,
                  };
                }
              },
              onAfterBlurWithin: function () {
                var e = D.current,
                  t = x.current;
                (C(w) || (w.lastFocused = null), (x.current = null));
                var n = document.activeElement;
                if (
                  e !== null &&
                  k != null &&
                  t !== null &&
                  (n == null || n === document.body || !e.containsNode(n))
                ) {
                  var r = !0,
                    a = !0,
                    i = t.recovery,
                    l = t.recoveryIndex,
                    s = o("FocusManager").getAllNodesFromOneOrManyQueries(k, e);
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
                    if (E === o("FocusRegionType").RecoverFocusStrategy.Nearest)
                      for (var g = l + 1; g < i.length; g++) {
                        var y = i[g];
                        if (u.has(y)) {
                          var b = s.indexOf(y),
                            v = b - 1;
                          if (v >= 0) {
                            var S = s[v];
                            (t.detachedCanTab &&
                              o("setElementCanTab").setElementCanTab(S, !0),
                              h(S, r, a));
                            return;
                          }
                        }
                      }
                    var R = o("FocusManager").getFirstNodeFromOneOrManyQueries(
                      k,
                      e,
                    );
                    R &&
                      (t.detachedCanTab &&
                        o("setElementCanTab").setElementCanTab(R, !0),
                      h(R, r, a));
                  }
                }
              },
              onFocusWithin: function (t) {
                (T &&
                  o("ReactEventHookPropagation").stopEventHookPropagation(
                    t,
                    "useFocusWithin",
                  ),
                  (w.lastFocused = t.target),
                  A());
              },
            };
          },
          [k, E, T, w, A],
        ),
      );
      var B = d(
        function () {
          var e = D.current,
            t = document.activeElement;
          if (i != null && e !== null && (!t || !e.containsNode(t))) {
            var n = w.lastFocused;
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
        [i, w],
      );
      (_(B, [B]), p(B, [B]));
      var W = d(
          function (e, t) {
            var n, r, i, l;
            t === void 0 && (t = !1);
            var s = D.current,
              u = document.activeElement,
              c = N.current;
            N.current = null;
            var d = e == null ? void 0 : e.triggeredFocusRegionItems,
              m = e == null ? void 0 : e.restorationFocusRegionItem;
            (d != null &&
              d.size &&
              d.forEach(function (e) {
                return (e.restorationFocusRegionItem = m);
              }),
              e != null &&
                m != null &&
                (m.triggeredFocusRegionItems.delete(e),
                d != null &&
                  d.size &&
                  d.forEach(function (e) {
                    m.triggeredFocusRegionItems.add(e);
                  })),
              (w.lastFocused = null));
            var p = $ == null ? void 0 : $.getActiveFocusRegion(),
              _ = p != null ? p.restorationFocusRegionItem : { lastFocused: c };
            if (
              (p === e && ($ == null || $.setActiveFocusRegion(m)),
              (n = _) != null &&
                n.lastFocused &&
                (r = e.scope) != null &&
                r.containsNode((i = _) == null ? void 0 : i.lastFocused) &&
                (l = _) != null &&
                (l = l.restorationFocusRegionItem) != null &&
                l.lastFocused)
            ) {
              var f;
              _ = (f = _) == null ? void 0 : f.restorationFocusRegionItem;
            }
            var g =
              (s !== null && u !== null && s.containsNode(u)) ||
              u == null ||
              u === document.body;
            if ((a === !0 || R != null) && g) {
              var h = function (t) {
                var e;
                if (
                  (t === void 0 && (t = !1),
                  ((e = _) == null ? void 0 : e.lastFocused) != null)
                ) {
                  var n = !0,
                    r = !0,
                    a = document.activeElement;
                  if (t || a === null || a === document.body) {
                    var i;
                    o("FocusManager").focusElement(
                      (i = _) == null ? void 0 : i.lastFocused,
                      { preventScroll: n, focusWithoutUserIntent: r },
                    );
                  }
                }
              };
              t
                ? h(t)
                : window.requestAnimationFrame(function () {
                    return h();
                  });
            }
          },
          [$, a, R, w],
        ),
        q = d(
          function () {
            (W(w, !0), R && R());
          },
          [W, R, w],
        );
      return (
        o("ReactKeyboardEvent.react").useKeyboard(
          D,
          f(
            function () {
              return {
                onKeyDown: function (t) {
                  if (
                    !(s == null || t.key !== "Tab" || t.isDefaultPrevented())
                  ) {
                    var e = D.current;
                    e !== null &&
                      (t.shiftKey
                        ? o("FocusManager").focusPreviousContained(
                            s,
                            e,
                            t,
                            !0,
                            R != null ? q : void 0,
                          )
                        : o("FocusManager").focusNextContained(
                            s,
                            e,
                            t,
                            !0,
                            R != null ? q : void 0,
                          ));
                  }
                },
              };
            },
            [s, q, R],
          ),
        ),
        _(
          function () {
            N.current = M;
            var e = w;
            return function () {
              W(e);
            };
          },
          [$, a, W, w, M],
        ),
        u.jsx(b, { id: S, ref: O, children: l })
      );
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e, t, n) {
      var r = v.get(e);
      if (r) {
        var a = r.DO_NOT_USE_queryFirstNode(t);
        if (a !== null)
          return (o("FocusManager").focusElement(a, { preventScroll: n }), a);
      }
      return null;
    }
    ((l.FocusRegion = S), (l.focusRegionById = R));
  },
  98,
);
