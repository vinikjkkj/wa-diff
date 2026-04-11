__d(
  "useIsBackgrounded",
  ["emptyFunction", "react", "useEventCallbackOn"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useState;
    function d() {
      var e = t.document;
      return typeof e.hidden != "undefined"
        ? "visibilitychange"
        : typeof e.mozHidden != "undefined"
          ? "mozvisibilitychange"
          : typeof e.msHidden != "undefined"
            ? "msvisibilitychange"
            : typeof e.webkitHidden != "undefined"
              ? "webkitvisibilitychange"
              : "visibilitychange";
    }
    function m() {
      var e = t.document;
      return typeof e.hidden != "undefined"
        ? e.hidden
        : typeof e.mozHidden != "undefined"
          ? e.mozHidden
          : typeof e.msHidden != "undefined"
            ? e.msHidden
            : typeof e.webkitHidden != "undefined"
              ? e.webkitHidden
              : !1;
    }
    var p = d();
    function _(e) {
      var n = t.document.hasFocus ? t.document.hasFocus() : !0,
        r = m();
      return r || (e ? !1 : !n);
    }
    function f() {
      return m();
    }
    function g(e) {
      "use no memo";
      var n = (e == null ? void 0 : e.noPauseOnBlurOrFocus) === !0,
        o = c(function () {
          return _(n);
        }),
        a = o[0],
        i = o[1],
        l = c(function () {
          return f();
        }),
        s = l[0],
        d = l[1],
        m = !!e && e.scrollTerminatesHiddenOrBlurred === !0,
        g = u(
          function () {
            (i(_(n)), d(f()));
          },
          [i, n],
        ),
        h = g,
        y = u(
          function () {
            var e = _(n);
            e && m && a && i(!1);
          },
          [a, n, m],
        );
      return (
        n && (h = r("emptyFunction")),
        r("useEventCallbackOn")(t.window, "blur", h),
        r("useEventCallbackOn")(t.window, "focus", h),
        r("useEventCallbackOn")(t.document, p, g),
        r("useEventCallbackOn")(t.window, "scroll", y),
        { isDocumentHidden: s, isDocumentHiddenOrBlurred: a }
      );
    }
    l.default = g;
  },
  98,
);
