__d(
  "WAWebKeyboardRotateFocusModal.react",
  [
    "WAWebKeyboardConstants",
    "WAWebKeyboardTabUtils",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useMergeRefs",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useRef,
      d = {
        container: {
          position: "x10l6tqk",
          top: "x13vifvy",
          insetInlineEnd: "xtijo5x",
          bottom: "x1ey2m1c",
          insetInlineStart: "x1o0tod",
          $$css: !0,
        },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(10),
        a = t.children,
        i = t.focusType,
        l = t.onBlur,
        s = t.ref,
        m = t.xstyle,
        p = c(null),
        _ = r("useMergeRefs")(s, p),
        f;
      if (n[0] !== i) {
        var g = function (t) {
          var e = p.current;
          if (e) {
            var n = t.shiftKey
                ? o("WAWebKeyboardTabUtils").TabDirection.BACKWARD
                : o("WAWebKeyboardTabUtils").TabDirection.FORWARD,
              r =
                i != null
                  ? i
                  : { type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
              a = r.customSelector,
              l = r.type,
              s = o("WAWebKeyboardTabUtils").getNextTabbableElement(
                e,
                n,
                l,
                void 0,
                a,
              );
            s != null && (t.preventDefault(), s.focus());
          }
        };
        ((f = function (t) {
          if (
            !(t.metaKey || t.ctrlKey) &&
            t.key === o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.TAB
          )
            return g(t);
        }),
          (n[0] = i),
          (n[1] = f));
      } else f = n[1];
      var h = f,
        y;
      n[2] !== m
        ? ((y = (e || (e = r("stylex"))).props(d.container, m)),
          (n[2] = m),
          (n[3] = y))
        : (y = n[3]);
      var C;
      return (
        n[4] !== a || n[5] !== h || n[6] !== _ || n[7] !== l || n[8] !== y
          ? ((C = u.jsx(
              "div",
              babelHelpers.extends({ ref: _ }, y, {
                onKeyDown: h,
                tabIndex: -1,
                onBlur: l,
                children: a,
              }),
            )),
            (n[4] = a),
            (n[5] = h),
            (n[6] = _),
            (n[7] = l),
            (n[8] = y),
            (n[9] = C))
          : (C = n[9]),
        C
      );
    }
    l.default = m;
  },
  98,
);
