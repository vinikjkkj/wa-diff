__d(
  "WAWebPathfinderUserTouch",
  ["WAWebPathfinderLogger"],
  function (t, n, r, o, a, i, l) {
    var e = 10,
      s = 300,
      u = 2e3,
      c = 2e3,
      d = null,
      m = null,
      p = null,
      _ = null,
      f = null,
      g = null;
    function h(e) {
      p = e;
    }
    function y() {
      return p;
    }
    function C(e, t) {
      var n = m;
      return n != null && n.eventType === e && n.trackingId === t
        ? n.debounceCount + 1
        : 0;
    }
    function b(e, t, n, r) {
      var a = C(e, t);
      ((m = { eventType: e, trackingId: t, debounceCount: a }),
        o("WAWebPathfinderLogger").emitPathfinderEvent({
          eventType: e,
          debounceCount: a > 0 ? a : void 0,
          screenName: p,
          targetTrackingId: t,
          targetType: n,
          timestampMs: r,
        }));
    }
    var v = { UP: 1, DOWN: 2, LEFT: 3, RIGHT: 4 };
    function S(e) {
      var t = Math.abs(e.deltaX),
        n = Math.abs(e.deltaY);
      return t === 0 && n === 0
        ? null
        : n >= t
          ? e.deltaY > 0
            ? v.DOWN
            : v.UP
          : e.deltaX > 0
            ? v.RIGHT
            : v.LEFT;
    }
    function R(e, t, n) {
      o("WAWebPathfinderLogger").emitPathfinderEvent({
        eventType: "SCROLL",
        screenName: e,
        timestampMs: t,
        gestureDirection: n,
      });
    }
    function L(e, t, n) {
      o("WAWebPathfinderLogger").emitPathfinderEvent({
        eventType: "LONG_PRESS",
        screenName: p,
        targetTrackingId: e,
        targetType: t,
        timestampMs: n,
      });
    }
    function E(e) {
      var t;
      return (t = e.getAttribute("data-testid")) != null
        ? t
        : e.getAttribute("testid");
    }
    function k(e) {
      return e.tagName.toLowerCase();
    }
    function I(t) {
      for (var n = t, r = 0, o = []; n instanceof HTMLElement && r < e; ) {
        var a = E(n);
        (a != null && a !== "" && o.push(a), (n = n.parentElement), r++);
      }
      return (o.reverse(), o.length > 0 ? o.join("/") : null);
    }
    function T(e) {
      var t = e.target;
      if (g != null && g === t) {
        g = null;
        return;
      }
      if (((g = null), t instanceof HTMLElement)) {
        var n = Date.now(),
          r = I(t);
        if (r != null) {
          var o = k(t),
            a = d;
          a != null &&
            (window.clearTimeout(a.timer),
            a.target !== t &&
              b("TAP", a.trackingId, a.targetType, a.timestampMs));
          var i = window.setTimeout(function () {
            var e = d;
            e != null &&
              e.timer === i &&
              (b("TAP", e.trackingId, e.targetType, e.timestampMs), (d = null));
          }, s);
          d = {
            timer: i,
            target: t,
            trackingId: r,
            targetType: o,
            timestampMs: n,
          };
        }
      }
    }
    function D(e) {
      var t = e.target;
      if (t instanceof HTMLElement) {
        var n = d;
        if (n != null) {
          (window.clearTimeout(n.timer),
            (d = null),
            b("DOUBLE_TAP", n.trackingId, n.targetType, n.timestampMs));
          return;
        }
        var r = I(t);
        r != null && b("DOUBLE_TAP", r, k(t), Date.now());
      }
    }
    function x(e) {
      if (_ == null && e instanceof WheelEvent) {
        var t = Date.now(),
          n = p,
          r = S(e);
        ((_ = window.setTimeout(function () {
          _ = null;
        }, u)),
          R(n, t, r));
      }
    }
    function $() {
      if (_ == null) {
        var e = Date.now(),
          t = p;
        ((_ = window.setTimeout(function () {
          _ = null;
        }, u)),
          R(t, e));
      }
    }
    function P(e) {
      if (!(!(e instanceof PointerEvent) || e.button !== 0)) {
        var t = e.target;
        if (t instanceof HTMLElement) {
          (f != null && window.clearTimeout(f), (g = null));
          var n = I(t),
            r = k(t),
            o = Date.now();
          f = window.setTimeout(function () {
            ((f = null), (g = t), L(n, r, o));
          }, c);
        }
      }
    }
    function N(e) {
      !(e instanceof PointerEvent) ||
        e.button !== 0 ||
        (f != null && (window.clearTimeout(f), (f = null)));
    }
    function M() {
      f != null && (window.clearTimeout(f), (f = null));
    }
    ((l.updateCurrentScreenName = h),
      (l.getCurrentScreenName = y),
      (l.getTargetType = k),
      (l.getAncestorTrackingPath = I),
      (l.handleClick = T),
      (l.handleDoubleClick = D),
      (l.handleWheel = x),
      (l.handleScroll = $),
      (l.handlePointerDown = P),
      (l.handlePointerUp = N),
      (l.handlePointerCancel = M));
  },
  98,
);
