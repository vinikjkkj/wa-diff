__d(
  "WAWebPathfinderUserTouch",
  ["WAWebPathfinderLogger"],
  function (t, n, r, o, a, i, l) {
    var e = 10,
      s = 50,
      u = 300,
      c = 2e3,
      d = 2e3,
      m = /^(true|false)_/,
      p = /^[0-9A-Fa-f]{8,}$/,
      _ = /^\d{6,}$/,
      f = /[^\x20-\x7E]/,
      g = null,
      h = null,
      y = null,
      C = null,
      b = null,
      v = null,
      S = null,
      R = 0;
    function L(e) {
      C = e;
    }
    function E() {
      return C;
    }
    function k() {
      var e = y;
      return ((y = null), e);
    }
    function I() {
      return R;
    }
    function T(e, t) {
      var n = h;
      return n != null && n.eventType === e && n.trackingId === t
        ? n.debounceCount + 1
        : 0;
    }
    function D(e, t, n, r) {
      var a = T(e, t);
      ((h = { eventType: e, trackingId: t, debounceCount: a }),
        (e === "TAP" || e === "DOUBLE_TAP") && (y = t),
        o("WAWebPathfinderLogger").emitPathfinderEvent({
          eventType: e,
          debounceCount: a > 0 ? a : void 0,
          screenName: C,
          targetTrackingId: t,
          targetType: n,
          timestampMs: r,
        }));
    }
    var x = { UP: 1, DOWN: 2, LEFT: 3, RIGHT: 4 };
    function $(e) {
      var t = Math.abs(e.deltaX),
        n = Math.abs(e.deltaY);
      return t === 0 && n === 0
        ? null
        : n >= t
          ? e.deltaY > 0
            ? x.DOWN
            : x.UP
          : e.deltaX > 0
            ? x.RIGHT
            : x.LEFT;
    }
    function P(e, t, n) {
      o("WAWebPathfinderLogger").emitPathfinderEvent({
        eventType: "SCROLL",
        screenName: e,
        timestampMs: t,
        gestureDirection: n,
      });
    }
    function N(e, t, n) {
      o("WAWebPathfinderLogger").emitPathfinderEvent({
        eventType: "LONG_PRESS",
        screenName: C,
        targetTrackingId: e,
        targetType: t,
        timestampMs: n,
      });
    }
    function M(e) {
      var t;
      return (t = e.getAttribute("data-testid")) != null
        ? t
        : e.getAttribute("testid");
    }
    function w(e) {
      var t = e.split("-"),
        n = [];
      for (var r of t) {
        if (r.includes("@") || m.test(r) || p.test(r) || _.test(r) || f.test(r))
          break;
        n.push(r);
      }
      return n.length > 0 ? n.join("-") : "";
    }
    function A(e) {
      return e.tagName.toLowerCase();
    }
    function F(t) {
      for (var n = t, r = 0, o = []; n instanceof HTMLElement && r < e; ) {
        var a = M(n);
        if (a != null) {
          var i = w(a);
          i !== "" && o.push(i);
        }
        ((n = n.parentElement), r++);
      }
      return (o.reverse(), o.length > 0 ? o.join("/") : null);
    }
    function O(e) {
      var t = e.target;
      if (S != null && S === t) {
        S = null;
        return;
      }
      if (((S = null), t instanceof HTMLElement)) {
        var n = Date.now(),
          r = F(t);
        if (r != null) {
          var o = A(t),
            a = g;
          a != null &&
            (window.clearTimeout(a.timer),
            a.target !== t && n - a.timestampMs >= s
              ? D("TAP", a.trackingId, a.targetType, a.timestampMs)
              : a.target !== t && R++);
          var i = window.setTimeout(function () {
            var e = g;
            e != null &&
              e.timer === i &&
              (D("TAP", e.trackingId, e.targetType, e.timestampMs), (g = null));
          }, u);
          g = {
            timer: i,
            target: t,
            trackingId: r,
            targetType: o,
            timestampMs: n,
          };
        }
      }
    }
    function B(e) {
      var t = e.target;
      if (t instanceof HTMLElement) {
        var n = g;
        if (n != null) {
          (window.clearTimeout(n.timer),
            (g = null),
            D("DOUBLE_TAP", n.trackingId, n.targetType, n.timestampMs));
          return;
        }
        var r = F(t);
        r != null && D("DOUBLE_TAP", r, A(t), Date.now());
      }
    }
    function W(e) {
      if (b == null && e instanceof WheelEvent) {
        var t = Date.now(),
          n = C,
          r = $(e);
        ((b = window.setTimeout(function () {
          b = null;
        }, c)),
          P(n, t, r));
      }
    }
    function q() {
      if (b == null) {
        var e = Date.now(),
          t = C;
        ((b = window.setTimeout(function () {
          b = null;
        }, c)),
          P(t, e));
      }
    }
    function U(e) {
      if (!(!(e instanceof PointerEvent) || e.button !== 0)) {
        var t = e.target;
        if (t instanceof HTMLElement) {
          (v != null && window.clearTimeout(v), (S = null));
          var n = F(t),
            r = A(t),
            o = Date.now();
          v = window.setTimeout(function () {
            ((v = null), (S = t), N(n, r, o));
          }, d);
        }
      }
    }
    function V(e) {
      !(e instanceof PointerEvent) ||
        e.button !== 0 ||
        (v != null && (window.clearTimeout(v), (v = null)));
    }
    function H() {
      v != null && (window.clearTimeout(v), (v = null));
    }
    ((l.updateCurrentScreenName = L),
      (l.getCurrentScreenName = E),
      (l.consumeLastTapTrackingId = k),
      (l.getRapidFireSuppressedCount = I),
      (l.getAncestorTrackingPath = F),
      (l.handleClick = O),
      (l.handleDoubleClick = B),
      (l.handleWheel = W),
      (l.handleScroll = q),
      (l.handlePointerDown = U),
      (l.handlePointerUp = V),
      (l.handlePointerCancel = H));
  },
  98,
);
