__d(
  "CometUserActivity",
  ["BaseEventEmitter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 5e3,
      s = 500,
      u = -5,
      c = Date.now(),
      d = c,
      m = !1,
      p = Date.now(),
      _ = document.hasFocus ? document.hasFocus() : !0,
      f = 0,
      g = Date.now(),
      h = -1,
      y = -1,
      C = !1,
      b = !1,
      v = new (r("BaseEventEmitter"))();
    function S(e) {
      var t = R(function (n, r) {
        (t.unsubscribe(), e(r));
      });
      return t;
    }
    function R(e) {
      var t = v.addListener("user_activity", function (t) {
        return e("user_activity", t);
      });
      return {
        unsubscribe: function () {
          return t.remove();
        },
      };
    }
    function L(t) {
      return new Date().getTime() - c < (t != null ? t : e);
    }
    function E() {
      return _;
    }
    function k() {
      return m;
    }
    function I() {
      ((_ = !0), (m = !1));
    }
    function T() {
      return p;
    }
    function D() {
      return c;
    }
    function x(e) {
      f = e;
    }
    function $() {
      return g;
    }
    function P() {
      return C;
    }
    function N() {
      return b;
    }
    function M() {
      return d;
    }
    function w() {
      ((c = Date.now()),
        (d = c),
        (m = !1),
        (p = Date.now()),
        (_ = document.hasFocus ? document.hasFocus() : !0),
        (f = 0),
        (g = Date.now()),
        (h = -1),
        (y = -1),
        (C = !1),
        (b = !1));
    }
    function A(e) {
      e.unsubscribe();
    }
    function F(e) {
      B(e, s);
    }
    function O(e) {
      B(e, 0);
    }
    function B(n, r) {
      r === void 0 && (r = 0);
      var o = t.MouseEvent,
        a = t.KeyboardEvent;
      if (o && n instanceof o) {
        if (
          /^mouse(enter|leave|move|out|over)$/.test(n.type) &&
          n.pageX == h &&
          n.pageY == y
        )
          return;
        ((h = n.pageX), (y = n.pageY));
      } else a && n instanceof a && (b = !0);
      ((n.type === "click" ||
        n.type === "dblclick" ||
        n.type === "contextmenu") &&
        (C = !0),
        (c = Date.now()));
      var i = c - d;
      i >= r
        ? ((d = c),
          _ || (g = c),
          i >= (f || e) && ((m = !0), (p = c)),
          v.emit("user_activity", { event: n, idleness: i, last_inform: d }))
        : i < u && (d = c);
    }
    function W(e) {
      ((_ = !0), (p = Date.now()), O(e));
    }
    function q() {
      ((_ = !1), (m = !0), (g = Date.now()));
    }
    (window.addEventListener("scroll", F, { capture: !0, passive: !0 }),
      window.addEventListener("focus", W, { capture: !1, passive: !0 }),
      window.addEventListener("blur", q, { capture: !1, passive: !0 }),
      (function () {
        var e = document.documentElement;
        e != null &&
          ["keydown", "mouseover", "mousemove", "click"].forEach(function (t) {
            e.addEventListener(t, F, { capture: !0, passive: !0 });
          });
      })(),
      (l.EVENT_INTERVAL_MS = s),
      (l.subscribeOnce = S),
      (l.subscribe = R),
      (l.isActive = L),
      (l.isOnTab = E),
      (l.hasBeenInactive = k),
      (l.resetActiveStatus = I),
      (l.getLastInActiveEnds = T),
      (l.getLastActive = D),
      (l.setIdleTime = x),
      (l.getLastLeaveTime = $),
      (l.hasClicked = P),
      (l.hasInteractedWithKeyboard = N),
      (l.getLastInformTime = M),
      (l.reset = w),
      (l.unsubscribe = A));
  },
  98,
);
