__d(
  "WAWebKeyboardRotateFocus.react",
  [
    "WAWebFocusTracer",
    "WAWebKeyboardConstants",
    "WAWebKeyboardTabUtils",
    "react",
    "useMergeRefs",
    "useWAWebIsKeyboardUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s.useRef;
    function d(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.focusType,
        l = c(null),
        s = r("useMergeRefs")(n, l),
        d = r("useWAWebIsKeyboardUser")(),
        m = d.setIsKeyboardUser,
        _ = function (t) {
          if (!(t.metaKey || t.ctrlKey)) {
            var e = l.current,
              n;
            (t.key === o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.TAB
              ? (t.stopPropagation(),
                t.preventDefault(),
                m(!0),
                e != null &&
                  (n = o("WAWebKeyboardTabUtils").getNextTabbableElement(
                    e,
                    t.shiftKey
                      ? o("WAWebKeyboardTabUtils").TabDirection.BACKWARD
                      : o("WAWebKeyboardTabUtils").TabDirection.FORWARD,
                    i,
                  )))
              : e != null &&
                e === document.activeElement &&
                (n = o("WAWebKeyboardTabUtils").getNextTabbableElement(
                  e,
                  o("WAWebKeyboardTabUtils").TabDirection.FORWARD,
                  i,
                  function (e) {
                    return e.nodeName.toLowerCase() === "input";
                  },
                )),
              n != null && p(n));
          }
        };
      return u.jsx("div", {
        ref: s,
        style: a.style,
        className: "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod",
        onKeyDown: _,
        tabIndex: -1,
        children: a.children,
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    var m = d;
    function p(e) {
      r("WAWebFocusTracer").focus(e);
    }
    l.RotateFocus = m;
  },
  98,
);
