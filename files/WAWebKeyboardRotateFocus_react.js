__d(
  "WAWebKeyboardRotateFocus.react",
  [
    "WAWebFocusTracer",
    "WAWebKeyboardConstants",
    "WAWebKeyboardTabUtils",
    "react",
    "react-compiler-runtime",
    "useMergeRefs",
    "useWAWebIsKeyboardUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s.useRef;
    function d(t) {
      var n = o("react-compiler-runtime").c(12),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        s = l.focusType,
        d = c(null),
        p = r("useMergeRefs")(i, d),
        f = r("useWAWebIsKeyboardUser")(),
        g = f.setIsKeyboardUser,
        h;
      n[3] !== s || n[4] !== g
        ? ((h = function (t) {
            if (!(t.metaKey || t.ctrlKey)) {
              var e = d.current,
                n;
              (t.key ===
              o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.TAB
                ? (t.stopPropagation(),
                  t.preventDefault(),
                  g(!0),
                  e != null &&
                    (n = o("WAWebKeyboardTabUtils").getNextTabbableElement(
                      e,
                      t.shiftKey
                        ? o("WAWebKeyboardTabUtils").TabDirection.BACKWARD
                        : o("WAWebKeyboardTabUtils").TabDirection.FORWARD,
                      s,
                    )))
                : e != null &&
                  e === document.activeElement &&
                  (n = o("WAWebKeyboardTabUtils").getNextTabbableElement(
                    e,
                    o("WAWebKeyboardTabUtils").TabDirection.FORWARD,
                    s,
                    m,
                  )),
                n != null && _(n));
            }
          }),
          (n[3] = s),
          (n[4] = g),
          (n[5] = h))
        : (h = n[5]);
      var y = h,
        C = a.style,
        b;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod"), (n[6] = b))
        : (b = n[6]);
      var v;
      return (
        n[7] !== y || n[8] !== p || n[9] !== a.children || n[10] !== a.style
          ? ((v = u.jsx("div", {
              ref: p,
              style: C,
              className: b,
              onKeyDown: y,
              tabIndex: -1,
              children: a.children,
            })),
            (n[7] = y),
            (n[8] = p),
            (n[9] = a.children),
            (n[10] = a.style),
            (n[11] = v))
          : (v = n[11]),
        v
      );
    }
    function m(e) {
      return e.nodeName.toLowerCase() === "input";
    }
    var p = d;
    function _(e) {
      r("WAWebFocusTracer").focus(e);
    }
    l.RotateFocus = p;
  },
  98,
);
