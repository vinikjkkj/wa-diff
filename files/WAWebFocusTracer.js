__d(
  "WAWebFocusTracer",
  ["WALogger", "WAShiftTimer"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 5,
      c = 75,
      d = [],
      m = !1;
    function p() {
      ((d = []), (m = !1));
    }
    function _() {
      if (d.length < u) return !1;
      for (var e = new Set(), t = 0; t < d.length; t++) {
        if (e.has(d[t])) return !0;
        e.add(d[t]);
      }
      return !1;
    }
    function f(e) {
      (d.length === u && d.shift(), d.push(e));
    }
    var g = new (o("WAShiftTimer").ShiftTimer)(p);
    document.addEventListener(
      "keydown",
      function (e) {
        g.forceRunNow();
      },
      { capture: !0, passive: !0 },
    );
    function h(t, n) {
      if (t && !(d.length && t === d[d.length - 1])) {
        if (((m = m || window.event != null), f(t), _() && !m)) {
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
        (g.onOrBefore(c), t.focus(n));
      }
    }
    var y = { focus: h },
      C = y;
    l.default = C;
  },
  98,
);
