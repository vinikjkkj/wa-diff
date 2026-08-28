__d(
  "AdsUnmountDebugEventBuffer",
  ["AdsALChannel", "performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 10,
      u = 50,
      c = [],
      d = 0,
      m = 0;
    function p(t) {
      var n,
        o,
        a,
        i = (n = t.elementText) == null ? void 0 : n.text,
        l = null;
      if (t.event === "keydown") {
        var p = t.domEvent;
        p instanceof KeyboardEvent && (l = p.key);
      }
      ((c[d] = {
        elementText: i != null ? i.substring(0, u) : null,
        event: t.event,
        key: l,
        reactComponentName: (o = t.reactComponentName) != null ? o : null,
        surface: (a = t.surface) != null ? a : null,
        timestamp: (e || (e = r("performanceNow")))(),
      }),
        (d = (d + 1) % s),
        m++);
    }
    var _ = !1;
    function f() {
      _ ||
        ((_ = !0),
        o("AdsALChannel").AdsALChannel.addListener("al_ui_event", function (e) {
          (e.event === "click" || e.event === "keydown") && p(e);
        }));
    }
    function g() {
      var e = Math.min(m, s);
      if (e === 0) return "";
      for (var t = m >= s ? d : 0, n = [], r = 0; r < e; r++) {
        var o = (t + r) % s,
          a = c[o];
        if (a != null) {
          var i = a.event;
          (a.key != null
            ? (i += ":" + a.key)
            : a.reactComponentName != null &&
              ((i += ":" + a.reactComponentName),
              a.elementText != null && (i += ":" + a.elementText)),
            n.push(i));
        }
      }
      return n.join("|");
    }
    ((l.init = f), (l.getRecentEventsString = g));
  },
  98,
);
