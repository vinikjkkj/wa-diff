__d(
  "WAWebKeyboardRotateFocusArrows.react",
  [
    "WAWebBoolFunc",
    "WAWebFocusTracer",
    "WAWebKeyboardHotKeys.react",
    "WAWebKeyboardTabUtils",
    "WAWebL10N",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useImperativeHandle,
      d = u.useRef;
    function m(e) {
      var t = e.children,
        n = e.customSelector,
        a = e.ref,
        i = e.role,
        l = i === void 0 ? "dialog" : i,
        u = d(null),
        m = function () {
          return u.current;
        },
        p = function (t) {
          var e = u.current;
          if (e) {
            var a =
              n != null
                ? o("WAWebKeyboardTabUtils").getNextTabbableElement(
                    e,
                    t,
                    o("WAWebKeyboardTabUtils").FocusType.CUSTOM_SELECTOR,
                    o("WAWebBoolFunc").returnTrue,
                    n,
                  )
                : o("WAWebKeyboardTabUtils").getNextTabbableElement(
                    e,
                    t,
                    o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                  );
            r("WAWebFocusTracer").focus(a);
          }
        },
        _ = function () {
          p(o("WAWebKeyboardTabUtils").TabDirection.FORWARD);
        },
        f = {
          left: function (t) {
            var e = r("WAWebL10N").isRTL()
              ? o("WAWebKeyboardTabUtils").TabDirection.FORWARD
              : o("WAWebKeyboardTabUtils").TabDirection.BACKWARD;
            (p(e), t.preventDefault(), t.stopPropagation());
          },
          right: function (t) {
            var e = r("WAWebL10N").isRTL()
              ? o("WAWebKeyboardTabUtils").TabDirection.BACKWARD
              : o("WAWebKeyboardTabUtils").TabDirection.FORWARD;
            (p(e), t.preventDefault(), t.stopPropagation());
          },
        };
      return (
        c(a, function () {
          return { getElement: m, focusFirst: _ };
        }),
        s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
          handlers: f,
          ref: u,
          tabIndex: null,
          role: l,
          children: t,
        })
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
