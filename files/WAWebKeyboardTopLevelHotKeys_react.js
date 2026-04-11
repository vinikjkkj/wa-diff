__d(
  "WAWebKeyboardTopLevelHotKeys.react",
  [
    "WAWebFocusTracer",
    "WAWebKeyboardHotKeys.react",
    "WAWebKeyboardTabUtils",
    "react",
    "react-compiler-runtime",
    "useMergeRefs",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useRef;
    function p(t) {
      var n = o("react-compiler-runtime").c(16),
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
        s = l.children,
        c = l.className,
        p = l.onBlur,
        _ = l.skipNode,
        f = m(null),
        g = r("useMergeRefs")(i, f),
        h,
        y;
      (n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = function () {
            r("WAWebFocusTracer").focus(f.current);
          }),
          (y = []),
          (n[3] = h),
          (n[4] = y))
        : ((h = n[3]), (y = n[4])),
        d(h, y));
      var C;
      n[5] !== _
        ? ((C = function (t) {
            var e = f.current;
            if (e) {
              var n = o("WAWebKeyboardTabUtils").TabDirection.FORWARD;
              t &&
                (t.preventDefault(),
                (n = t.shiftKey
                  ? o("WAWebKeyboardTabUtils").TabDirection.BACKWARD
                  : o("WAWebKeyboardTabUtils").TabDirection.FORWARD));
              var a = o("WAWebKeyboardTabUtils").getNextTabbableElement(
                e,
                n,
                o("WAWebKeyboardTabUtils").FocusType.CUSTOM,
                function (e) {
                  return !_(e);
                },
              );
              a != null && r("WAWebFocusTracer").focus(a);
            }
          }),
          (n[5] = _),
          (n[6] = C))
        : (C = n[6]);
      var b = C,
        v;
      n[7] !== a.onShowKeyboardShortcuts || n[8] !== b
        ? ((v = {
            tab: b,
            "shift+tab": b,
            "shift+?": a.onShowKeyboardShortcuts,
          }),
          (n[7] = a.onShowKeyboardShortcuts),
          (n[8] = b),
          (n[9] = v))
        : (v = n[9]);
      var S = v,
        R;
      return (
        n[10] !== s || n[11] !== c || n[12] !== S || n[13] !== g || n[14] !== p
          ? ((R = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              handlers: S,
              className: c,
              onBlur: p,
              ref: g,
              children: s,
            })),
            (n[10] = s),
            (n[11] = c),
            (n[12] = S),
            (n[13] = g),
            (n[14] = p),
            (n[15] = R))
          : (R = n[15]),
        R
      );
    }
    l.default = p;
  },
  98,
);
