__d(
  "WAWebFocusTracer",
  ["WALogger", "WAShiftTimer", "WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 5,
      d = 75,
      m = [],
      p = !1;
    function _() {
      ((m = []), (p = !1));
    }
    function f() {
      if (m.length < c) return !1;
      for (var e = new Set(), t = 0; t < m.length; t++) {
        if (e.has(m[t])) return !0;
        e.add(m[t]);
      }
      return !1;
    }
    function g(e) {
      (m.length === c && m.shift(), m.push(e));
    }
    var h = new (o("WAShiftTimer").ShiftTimer)(_);
    document.addEventListener(
      "keydown",
      function (e) {
        h.forceRunNow();
      },
      { capture: !0, passive: !0 },
    );
    function y(e) {
      if (e == null) return "null";
      if (e instanceof Element) {
        var t = e.getAttribute("data-testid");
        return (
          "<" +
          e.tagName.toLowerCase() +
          (e.id ? "#" + e.id : "") +
          (t != null ? " [testid=" + t + "]" : "") +
          ">"
        );
      }
      return e instanceof Text ? "#text" : "[focusable]";
    }
    function C(t, n) {
      if (t && !(m.length && t === m[m.length - 1])) {
        if (((p = p || window.event != null), g(t), f() && !p)) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Focus loop encountered.",
                ])),
            )
            .sendLogs("focus-loop");
          return;
        }
        (h.onOrBefore(d), t.focus(n));
      }
    }
    var b = { focus: C },
      v = b;
    l.default = v;
  },
  98,
);
