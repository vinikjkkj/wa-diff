__d(
  "WAWebPathfinderUserTouch",
  ["WAWebPathfinderLogger"],
  function (t, n, r, o, a, i, l) {
    var e = 10,
      s = 300,
      u = 2e3,
      c = 2e3,
      d = /^(true|false)_/,
      m = /^[0-9A-Fa-f]{8,}$/,
      p = /^\d{6,}$/,
      _ = /[^\x20-\x7E]/,
      f = null,
      g = null,
      h = null,
      y = null,
      C = null,
      b = null,
      v = null;
    function S(e) {
      y = e;
    }
    function R() {
      return y;
    }
    function L() {
      var e = h;
      return ((h = null), e);
    }
    function E(e, t) {
      var n = g;
      return n != null && n.eventType === e && n.trackingId === t
        ? n.debounceCount + 1
        : 0;
    }
    function k(e, t, n, r) {
      var a = E(e, t);
      ((g = { eventType: e, trackingId: t, debounceCount: a }),
        (e === "TAP" || e === "DOUBLE_TAP") && (h = t),
        o("WAWebPathfinderLogger").emitPathfinderEvent({
          eventType: e,
          debounceCount: a > 0 ? a : void 0,
          screenName: y,
          targetTrackingId: t,
          targetType: n,
          timestampMs: r,
        }));
    }
    var I = { UP: 1, DOWN: 2, LEFT: 3, RIGHT: 4 };
    function T(e) {
      var t = Math.abs(e.deltaX),
        n = Math.abs(e.deltaY);
      return t === 0 && n === 0
        ? null
        : n >= t
          ? e.deltaY > 0
            ? I.DOWN
            : I.UP
          : e.deltaX > 0
            ? I.RIGHT
            : I.LEFT;
    }
    function D(e, t, n) {
      o("WAWebPathfinderLogger").emitPathfinderEvent({
        eventType: "SCROLL",
        screenName: e,
        timestampMs: t,
        gestureDirection: n,
      });
    }
    function x(e, t, n) {
      o("WAWebPathfinderLogger").emitPathfinderEvent({
        eventType: "LONG_PRESS",
        screenName: y,
        targetTrackingId: e,
        targetType: t,
        timestampMs: n,
      });
    }
    function $(e) {
      var t;
      return (t = e.getAttribute("data-testid")) != null
        ? t
        : e.getAttribute("testid");
    }
    function P(e) {
      var t = e.split("-"),
        n = [];
      for (var r of t) {
        if (r.includes("@") || d.test(r) || m.test(r) || p.test(r) || _.test(r))
          break;
        n.push(r);
      }
      return n.length > 0 ? n.join("-") : "";
    }
    function N(e) {
      return e.tagName.toLowerCase();
    }
    function M(t) {
      for (var n = t, r = 0, o = []; n instanceof HTMLElement && r < e; ) {
        var a = $(n);
        if (a != null) {
          var i = P(a);
          i !== "" && o.push(i);
        }
        ((n = n.parentElement), r++);
      }
      return (o.reverse(), o.length > 0 ? o.join("/") : null);
    }
    function w(e) {
      var t = e.target;
      if (v != null && v === t) {
        v = null;
        return;
      }
      if (((v = null), t instanceof HTMLElement)) {
        var n = Date.now(),
          r = M(t);
        if (r != null) {
          var o = N(t),
            a = f;
          a != null &&
            (window.clearTimeout(a.timer),
            a.target !== t &&
              k("TAP", a.trackingId, a.targetType, a.timestampMs));
          var i = window.setTimeout(function () {
            var e = f;
            e != null &&
              e.timer === i &&
              (k("TAP", e.trackingId, e.targetType, e.timestampMs), (f = null));
          }, s);
          f = {
            timer: i,
            target: t,
            trackingId: r,
            targetType: o,
            timestampMs: n,
          };
        }
      }
    }
    function A(e) {
      var t = e.target;
      if (t instanceof HTMLElement) {
        var n = f;
        if (n != null) {
          (window.clearTimeout(n.timer),
            (f = null),
            k("DOUBLE_TAP", n.trackingId, n.targetType, n.timestampMs));
          return;
        }
        var r = M(t);
        r != null && k("DOUBLE_TAP", r, N(t), Date.now());
      }
    }
    function F(e) {
      if (C == null && e instanceof WheelEvent) {
        var t = Date.now(),
          n = y,
          r = T(e);
        ((C = window.setTimeout(function () {
          C = null;
        }, u)),
          D(n, t, r));
      }
    }
    function O() {
      if (C == null) {
        var e = Date.now(),
          t = y;
        ((C = window.setTimeout(function () {
          C = null;
        }, u)),
          D(t, e));
      }
    }
    function B(e) {
      if (!(!(e instanceof PointerEvent) || e.button !== 0)) {
        var t = e.target;
        if (t instanceof HTMLElement) {
          (b != null && window.clearTimeout(b), (v = null));
          var n = M(t),
            r = N(t),
            o = Date.now();
          b = window.setTimeout(function () {
            ((b = null), (v = t), x(n, r, o));
          }, c);
        }
      }
    }
    function W(e) {
      !(e instanceof PointerEvent) ||
        e.button !== 0 ||
        (b != null && (window.clearTimeout(b), (b = null)));
    }
    function q() {
      b != null && (window.clearTimeout(b), (b = null));
    }
    ((l.updateCurrentScreenName = S),
      (l.getCurrentScreenName = R),
      (l.consumeLastTapTrackingId = L),
      (l.getTargetType = N),
      (l.getAncestorTrackingPath = M),
      (l.handleClick = w),
      (l.handleDoubleClick = A),
      (l.handleWheel = F),
      (l.handleScroll = O),
      (l.handlePointerDown = B),
      (l.handlePointerUp = W),
      (l.handlePointerCancel = q));
  },
  98,
);
