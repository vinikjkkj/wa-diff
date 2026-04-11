__d(
  "ReactFocusEvent.react",
  [
    "ReactDOM",
    "ReactEventHelpers",
    "ReactEventHookPropagation",
    "ReactUseEvent.react",
    "react",
    "react-compiler-runtime",
    "useUnsafeRef_DEPRECATED",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useCallback,
      d = u.useEffect,
      m = u.useLayoutEffect,
      p = u.useMemo,
      _ = u.useRef,
      f = o("ReactEventHelpers").hasPointerEvents
        ? ["keydown", "pointermove", "pointerdown", "pointerup"]
        : [
            "keydown",
            "mousedown",
            "mousemove",
            "mouseup",
            "touchmove",
            "touchstart",
            "touchend",
          ],
      g = { passive: !0 },
      h = !0,
      y = !1;
    function C() {
      return h;
    }
    function b() {
      f.forEach(function (e) {
        window.addEventListener(e, R, !0);
      });
    }
    function v(e) {
      var t = e.altKey,
        n = e.ctrlKey,
        r = e.metaKey;
      return !(r || (!o("ReactEventHelpers").isMac && t) || n);
    }
    function S(e) {
      var t = e.key,
        n = e.target;
      if (t === "Tab" || t === "Escape") return !1;
      var r = n.isContentEditable,
        o = n.tagName;
      return o === "INPUT" || o === "TEXTAREA" || r;
    }
    function R(e) {
      if (e.type === "keydown") v(e) && (h = !0);
      else {
        var t = e.target.nodeName;
        if (t === "HTML") return;
        h = !1;
      }
    }
    function L(e, t, n) {
      if (e.type === "keydown") {
        var r = e.nativeEvent;
        v(r) && !S(r) && n(!0);
      } else t.isFocused ? n(t.isFocusVisible) : ((h = !1), n(!1));
    }
    function E(e, t, n, r) {
      e.forEach(function (e) {
        e.setListener(t, function (e) {
          return L(e, n, r);
        });
      });
    }
    function k() {
      var e = o("react-compiler-runtime").c(4),
        t = r("ReactUseEvent.react")("mousedown", g),
        n = r("ReactUseEvent.react")(
          o("ReactEventHelpers").hasPointerEvents
            ? "pointerdown"
            : "touchstart",
          g,
        ),
        a = r("ReactUseEvent.react")("keydown", g),
        i;
      return (
        e[0] !== a || e[1] !== t || e[2] !== n
          ? ((i = [t, n, a]), (e[0] = a), (e[1] = t), (e[2] = n), (e[3] = i))
          : (i = e[3]),
        i
      );
    }
    function I() {
      var e = o("react-compiler-runtime").c(1),
        t;
      (e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = []), (e[0] = t))
        : (t = e[0]),
        d(T, t));
    }
    function T() {
      y || ((y = !0), b());
    }
    function D(e, t) {
      var n = o("react-compiler-runtime").c(17),
        a = t.disabled,
        i = t.onBlur,
        l = t.onFocus,
        s = t.onFocusChange,
        u = t.onFocusVisibleChange,
        c;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = { isFocused: !1, isFocusVisible: !1 }), (n[0] = c))
        : (c = n[0]);
      var p = _(c),
        f = r("ReactUseEvent.react")("focusin", g),
        y = r("ReactUseEvent.react")("focusout", g),
        C = k(),
        b,
        v;
      (n[1] !== y ||
      n[2] !== a ||
      n[3] !== f ||
      n[4] !== e ||
      n[5] !== C ||
      n[6] !== i ||
      n[7] !== l ||
      n[8] !== s ||
      n[9] !== u
        ? ((b = function () {
            var t = e.current,
              n = p.current;
            if (t !== null && t.nodeType === 1) {
              ((n.isFocused = document.activeElement === t),
                E(C, t, n, function (e) {
                  n.isFocused &&
                    n.isFocusVisible !== e &&
                    ((n.isFocusVisible = e), u && u(e));
                }));
              var r = function (t) {
                n.isFocused &&
                  ((n.isFocused = !1),
                  i && i(t),
                  s && s(!1),
                  n.isFocusVisible && u && u(!1),
                  (n.isFocusVisible = h));
              };
              (f.setListener(t, function (e) {
                a !== !0 &&
                  (o(
                    "ReactEventHookPropagation",
                  ).hasEventHookPropagationStopped(e, "useFocus") ||
                    (o("ReactEventHookPropagation").stopEventHookPropagation(
                      e,
                      "useFocus",
                    ),
                    !n.isFocused &&
                      t === e.target &&
                      ((n.isFocused = !0),
                      (n.isFocusVisible = h),
                      l && l(e),
                      s && s(!0),
                      n.isFocusVisible && u && u(!0))));
              }),
                y.setListener(t, function (e) {
                  a !== !0 &&
                    (o(
                      "ReactEventHookPropagation",
                    ).hasEventHookPropagationStopped(e, "useFocus") ||
                      (o("ReactEventHookPropagation").stopEventHookPropagation(
                        e,
                        "useFocus",
                      ),
                      r(e)));
                }));
            }
          }),
          (v = [y, a, f, e, C, i, l, s, u]),
          (n[1] = y),
          (n[2] = a),
          (n[3] = f),
          (n[4] = e),
          (n[5] = C),
          (n[6] = i),
          (n[7] = l),
          (n[8] = s),
          (n[9] = u),
          (n[10] = b),
          (n[11] = v))
        : ((b = n[10]), (v = n[11])),
        m(b, v));
      var S;
      (n[12] !== e || n[13] !== i || n[14] !== s || n[15] !== u
        ? ((S = function () {
            var t = e.current,
              n = p.current;
            return function () {
              if (e.current === null && n.isFocused) {
                n.isFocused = !1;
                var r = new window.FocusEvent("blur");
                (Object.defineProperty(r, "target", { value: t }),
                  i && i(r),
                  s && s(!1),
                  n.isFocusVisible && u && u(!1),
                  (n.isFocusVisible = h));
              }
            };
          }),
          (n[12] = e),
          (n[13] = i),
          (n[14] = s),
          (n[15] = u),
          (n[16] = S))
        : (S = n[16]),
        d(S, void 0),
        I());
    }
    function x(e, t) {
      var n,
        a = t.disabled,
        i = t.onAfterBlurWithin,
        l = t.onBeforeBlurWithin,
        s = t.onBlurWithin,
        u = t.onFocusWithin,
        d = t.onFocusWithinChange,
        m = t.onFocusWithinVisibleChange,
        p = _({ isFocused: !1, isFocusVisible: !1 }),
        f = (n = r("ReactUseEvent.react"))("focusin", g),
        y = n("focusout", g),
        C = n("afterblur", g),
        b = n("beforeblur", g),
        v = k(),
        S = c(
          function (t) {
            typeof e == "function" ? e(t) : (e.current = t);
            var n = p.current;
            t !== null &&
              n !== null &&
              (E(v, t, n, function (e) {
                n.isFocused &&
                  n.isFocusVisible !== e &&
                  ((n.isFocusVisible = e), m && m(e));
              }),
              f.setListener(t, function (e) {
                a !== !0 &&
                  (o(
                    "ReactEventHookPropagation",
                  ).hasEventHookPropagationStopped(e, "useFocusWithin") ||
                    (n.isFocused ||
                      ((n.isFocused = !0),
                      (n.isFocusVisible = h),
                      d && d(!0),
                      n.isFocusVisible && m && m(!0)),
                    !n.isFocusVisible &&
                      h &&
                      ((n.isFocusVisible = h), m && m(!0)),
                    u && u(e)));
              }),
              y.setListener(t, function (e) {
                if (a !== !0) {
                  var r = e.nativeEvent.relatedTarget;
                  o("ReactEventHookPropagation").hasEventHookPropagationStopped(
                    e,
                    "useFocusWithin",
                  ) ||
                    (n.isFocused &&
                    !o("ReactEventHelpers").isRelatedTargetWithin(t, r)
                      ? ((n.isFocused = !1),
                        d && d(!1),
                        n.isFocusVisible && m && m(!1),
                        s && s(e))
                      : o("ReactEventHookPropagation").stopEventHookPropagation(
                          e,
                          "useFocusWithin",
                        ));
                }
              }),
              b.setListener(t, function (e) {
                a !== !0 &&
                  l &&
                  (l(e),
                  C.setListener(document, function (e) {
                    (i && i(e), C.setListener(document, null));
                  }));
              }));
          },
          [C, b, y, a, f, v, e, i, l, s, u, d, m],
        );
      return (I(), S);
    }
    function $() {
      var e = o("react-compiler-runtime").c(4),
        t = N("mousedown", g),
        n = N(
          o("ReactEventHelpers").hasPointerEvents
            ? "pointerdown"
            : "touchstart",
          g,
        ),
        r = N("keydown", g),
        a;
      return (
        e[0] !== r || e[1] !== t || e[2] !== n
          ? ((a = [t, n, r]), (e[0] = r), (e[1] = t), (e[2] = n), (e[3] = a))
          : (a = e[3]),
        a
      );
    }
    function P(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.disabled,
        r = e.initializer,
        a = e.onAfterBlurWithin,
        i = e.onBeforeBlurWithin,
        l = e.onBlurWithin,
        s = e.onFocusWithin,
        u = e.onFocusWithinChange,
        c = e.onFocusWithinVisibleChange,
        d;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = { isFocused: !1, isFocusVisible: !1 }), (t[0] = d))
        : (d = t[0]);
      var m = _(d),
        p = N("focusin", g),
        f = N("focusout", g),
        y = N("afterblur", g),
        C = N("beforeblur", g),
        b = $(),
        v;
      t[1] !== y ||
      t[2] !== C ||
      t[3] !== f ||
      t[4] !== n ||
      t[5] !== p ||
      t[6] !== b ||
      t[7] !== r ||
      t[8] !== a ||
      t[9] !== i ||
      t[10] !== l ||
      t[11] !== s ||
      t[12] !== u ||
      t[13] !== c
        ? ((v = function (t) {
            var e = m.current;
            t !== null && e !== null
              ? (r && r(t),
                E(b, t, e, function (t) {
                  e.isFocused &&
                    e.isFocusVisible !== t &&
                    ((e.isFocusVisible = t), c && c(t));
                }),
                p.setListener(t, function (t) {
                  n !== !0 &&
                    (o(
                      "ReactEventHookPropagation",
                    ).hasEventHookPropagationStopped(t, "useFocusWithin") ||
                      (e.isFocused ||
                        ((e.isFocused = !0),
                        (e.isFocusVisible = h),
                        u && u(!0),
                        e.isFocusVisible && c && c(!0)),
                      !e.isFocusVisible &&
                        h &&
                        ((e.isFocusVisible = h), c && c(!0)),
                      s && s(t)));
                }),
                f.setListener(t, function (r) {
                  if (n !== !0) {
                    var a = r.nativeEvent.relatedTarget;
                    o(
                      "ReactEventHookPropagation",
                    ).hasEventHookPropagationStopped(r, "useFocusWithin") ||
                      (e.isFocused &&
                      !o("ReactEventHelpers").isRelatedTargetWithin(t, a)
                        ? ((e.isFocused = !1),
                          u && u(!1),
                          e.isFocusVisible && c && c(!1),
                          l && l(r))
                        : o(
                            "ReactEventHookPropagation",
                          ).stopEventHookPropagation(r, "useFocusWithin"));
                  }
                }),
                C.setListener(t, function (e) {
                  n !== !0 &&
                    i &&
                    (i(e),
                    y.setListener(document, function (e) {
                      (a && a(e), y.setListener(document, null));
                    }));
                }))
              : t === null && (p.clear(), f.clear(), C.clear());
          }),
          (t[1] = y),
          (t[2] = C),
          (t[3] = f),
          (t[4] = n),
          (t[5] = p),
          (t[6] = b),
          (t[7] = r),
          (t[8] = a),
          (t[9] = i),
          (t[10] = l),
          (t[11] = s),
          (t[12] = u),
          (t[13] = c),
          (t[14] = v))
        : (v = t[14]);
      var S = v;
      return (I(), S);
    }
    function N(t, n) {
      var a = (e || (e = r("useUnsafeRef_DEPRECATED")))(null),
        i = a.current;
      if ((n && (n.passive = void 0), i === null)) {
        var l = o("ReactDOM").unstable_createEventHandle(t, n),
          s = new Map();
        ((i = {
          setListener: function (t, n) {
            var e = s.get(t);
            if ((e !== void 0 && e(), n === null)) {
              s.delete(t);
              return;
            }
            ((e = l(t, function () {
              n.apply(void 0, arguments);
            })),
              s.set(t, e));
          },
          clear: function () {
            for (var e = Array.from(s.values()), t = 0; t < e.length; t++)
              e[t]();
            s.clear();
          },
        }),
          (a.current = i));
      }
      return i;
    }
    ((l.getGlobalFocusVisible = C),
      (l.useFocus = D),
      (l.useFocusWithin_DEPRECATED = x),
      (l.useFocusWithin = P));
  },
  98,
);
