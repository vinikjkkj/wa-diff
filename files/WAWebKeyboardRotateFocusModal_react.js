__d(
  "WAWebKeyboardRotateFocusModal.react",
  [
    "WAWebKeyboardConstants",
    "WAWebKeyboardTabUtils",
    "react",
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
      var n = t.children,
        a = t.focusType,
        i = t.onBlur,
        l = t.ref,
        s = t.xstyle,
        m = c(null),
        p = r("useMergeRefs")(l, m),
        _ = function (t) {
          var e = m.current;
          if (e) {
            var n = t.shiftKey
                ? o("WAWebKeyboardTabUtils").TabDirection.BACKWARD
                : o("WAWebKeyboardTabUtils").TabDirection.FORWARD,
              r =
                a != null
                  ? a
                  : { type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
              i = r.customSelector,
              l = r.type,
              s = o("WAWebKeyboardTabUtils").getNextTabbableElement(
                e,
                n,
                l,
                void 0,
                i,
              );
            s != null && (t.preventDefault(), s.focus());
          }
        },
        f = function (t) {
          if (
            !(t.metaKey || t.ctrlKey) &&
            t.key === o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.TAB
          )
            return _(t);
        };
      return u.jsx(
        "div",
        babelHelpers.extends(
          { ref: p },
          (e || (e = r("stylex"))).props(d.container, s),
          { onKeyDown: f, tabIndex: -1, onBlur: i, children: n },
        ),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
