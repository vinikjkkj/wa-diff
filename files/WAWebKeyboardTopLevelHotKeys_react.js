__d(
  "WAWebKeyboardTopLevelHotKeys.react",
  [
    "WAWebFocusTracer",
    "WAWebKeyboardHotKeys.react",
    "WAWebKeyboardTabUtils",
    "react",
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
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.children,
        l = a.className,
        s = a.onBlur,
        c = a.skipNode,
        p = m(null),
        _ = r("useMergeRefs")(n, p);
      d(function () {
        r("WAWebFocusTracer").focus(p.current);
      }, []);
      var f = function (t) {
          var e = p.current;
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
                return !c(e);
              },
            );
            a != null && r("WAWebFocusTracer").focus(a);
          }
        },
        g = { tab: f, "shift+tab": f, "shift+?": a.onShowKeyboardShortcuts };
      return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: g,
        className: l,
        onBlur: s,
        ref: _,
        children: i,
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
