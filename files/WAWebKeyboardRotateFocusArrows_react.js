__d(
  "WAWebKeyboardRotateFocusArrows.react",
  [
    "WAWebBoolFunc",
    "WAWebFocusTracer",
    "WAWebKeyboardHotKeys.react",
    "WAWebKeyboardTabUtils",
    "WAWebL10N",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useImperativeHandle,
      d = u.useRef;
    function m(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.children,
        a = e.customSelector,
        i = e.ref,
        l = e.role,
        u = l === void 0 ? "dialog" : l,
        m = d(null),
        p;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = function () {
            return m.current;
          }),
          (t[0] = p))
        : (p = t[0]);
      var _ = p,
        f;
      t[1] !== a
        ? ((f = function (t) {
            var e = m.current;
            if (e) {
              var n =
                a != null
                  ? o("WAWebKeyboardTabUtils").getNextTabbableElement(
                      e,
                      t,
                      o("WAWebKeyboardTabUtils").FocusType.CUSTOM_SELECTOR,
                      o("WAWebBoolFunc").returnTrue,
                      a,
                    )
                  : o("WAWebKeyboardTabUtils").getNextTabbableElement(
                      e,
                      t,
                      o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                    );
              r("WAWebFocusTracer").focus(n);
            }
          }),
          (t[1] = a),
          (t[2] = f))
        : (f = t[2]);
      var g = f,
        h;
      t[3] !== g
        ? ((h = function () {
            g(o("WAWebKeyboardTabUtils").TabDirection.FORWARD);
          }),
          (t[3] = g),
          (t[4] = h))
        : (h = t[4]);
      var y = h,
        C;
      t[5] !== g
        ? ((C = {
            left: function (t) {
              var e = r("WAWebL10N").isRTL()
                ? o("WAWebKeyboardTabUtils").TabDirection.FORWARD
                : o("WAWebKeyboardTabUtils").TabDirection.BACKWARD;
              (g(e), t.preventDefault(), t.stopPropagation());
            },
            right: function (t) {
              var e = r("WAWebL10N").isRTL()
                ? o("WAWebKeyboardTabUtils").TabDirection.BACKWARD
                : o("WAWebKeyboardTabUtils").TabDirection.FORWARD;
              (g(e), t.preventDefault(), t.stopPropagation());
            },
          }),
          (t[5] = g),
          (t[6] = C))
        : (C = t[6]);
      var b = C,
        v;
      (t[7] !== y
        ? ((v = function () {
            return { getElement: _, focusFirst: y };
          }),
          (t[7] = y),
          (t[8] = v))
        : (v = t[8]),
        c(i, v));
      var S;
      return (
        t[9] !== n || t[10] !== b || t[11] !== u
          ? ((S = s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              handlers: b,
              ref: m,
              tabIndex: null,
              role: u,
              children: n,
            })),
            (t[9] = n),
            (t[10] = b),
            (t[11] = u),
            (t[12] = S))
          : (S = t[12]),
        S
      );
    }
    l.default = m;
  },
  98,
);
