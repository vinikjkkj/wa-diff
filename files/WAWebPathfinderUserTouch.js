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
      b = null;
    function v(e) {
      h = e;
    }
    function S() {
      return h;
    }
    function R(e, t) {
      var n = g;
      return n != null && n.eventType === e && n.trackingId === t
        ? n.debounceCount + 1
        : 0;
    }
    function L(e, t, n, r) {
      var a = R(e, t);
      ((g = { eventType: e, trackingId: t, debounceCount: a }),
        o("WAWebPathfinderLogger").emitPathfinderEvent({
          eventType: e,
          debounceCount: a > 0 ? a : void 0,
          screenName: h,
          targetTrackingId: t,
          targetType: n,
          timestampMs: r,
        }));
    }
    var E = { UP: 1, DOWN: 2, LEFT: 3, RIGHT: 4 };
    function k(e) {
      var t = Math.abs(e.deltaX),
        n = Math.abs(e.deltaY);
      return t === 0 && n === 0
        ? null
        : n >= t
          ? e.deltaY > 0
            ? E.DOWN
            : E.UP
          : e.deltaX > 0
            ? E.RIGHT
            : E.LEFT;
    }
    function I(e, t, n) {
      o("WAWebPathfinderLogger").emitPathfinderEvent({
        eventType: "SCROLL",
        screenName: e,
        timestampMs: t,
        gestureDirection: n,
      });
    }
    function T(e, t, n) {
      o("WAWebPathfinderLogger").emitPathfinderEvent({
        eventType: "LONG_PRESS",
        screenName: h,
        targetTrackingId: e,
        targetType: t,
        timestampMs: n,
      });
    }
    function D(e) {
      var t;
      return (t = e.getAttribute("data-testid")) != null
        ? t
        : e.getAttribute("testid");
    }
    function x(e) {
      var t = e.split("-"),
        n = [];
      for (var r of t) {
        if (r.includes("@") || d.test(r) || m.test(r) || p.test(r) || _.test(r))
          break;
        n.push(r);
      }
      return n.length > 0 ? n.join("-") : "";
    }
    function $(e) {
      return e.tagName.toLowerCase();
    }
    function P(t) {
      for (var n = t, r = 0, o = []; n instanceof HTMLElement && r < e; ) {
        var a = D(n);
        if (a != null) {
          var i = x(a);
          i !== "" && o.push(i);
        }
        ((n = n.parentElement), r++);
      }
      return (o.reverse(), o.length > 0 ? o.join("/") : null);
    }
    function N(e) {
      var t = e.target;
      if (b != null && b === t) {
        b = null;
        return;
      }
      if (((b = null), t instanceof HTMLElement)) {
        var n = Date.now(),
          r = P(t);
        if (r != null) {
          var o = $(t),
            a = f;
          a != null &&
            (window.clearTimeout(a.timer),
            a.target !== t &&
              L("TAP", a.trackingId, a.targetType, a.timestampMs));
          var i = window.setTimeout(function () {
            var e = f;
            e != null &&
              e.timer === i &&
              (L("TAP", e.trackingId, e.targetType, e.timestampMs), (f = null));
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
    function M(e) {
      var t = e.target;
      if (t instanceof HTMLElement) {
        var n = f;
        if (n != null) {
          (window.clearTimeout(n.timer),
            (f = null),
            L("DOUBLE_TAP", n.trackingId, n.targetType, n.timestampMs));
          return;
        }
        var r = P(t);
        r != null && L("DOUBLE_TAP", r, $(t), Date.now());
      }
    }
    function w(e) {
      if (y == null && e instanceof WheelEvent) {
        var t = Date.now(),
          n = h,
          r = k(e);
        ((y = window.setTimeout(function () {
          y = null;
        }, u)),
          I(n, t, r));
      }
    }
    function A() {
      if (y == null) {
        var e = Date.now(),
          t = h;
        ((y = window.setTimeout(function () {
          y = null;
        }, u)),
          I(t, e));
      }
    }
    function F(e) {
      if (!(!(e instanceof PointerEvent) || e.button !== 0)) {
        var t = e.target;
        if (t instanceof HTMLElement) {
          (C != null && window.clearTimeout(C), (b = null));
          var n = P(t),
            r = $(t),
            o = Date.now();
          C = window.setTimeout(function () {
            ((C = null), (b = t), T(n, r, o));
          }, c);
        }
      }
    }
    function O(e) {
      !(e instanceof PointerEvent) ||
        e.button !== 0 ||
        (C != null && (window.clearTimeout(C), (C = null)));
    }
    function B() {
      C != null && (window.clearTimeout(C), (C = null));
    }
    ((l.updateCurrentScreenName = v),
      (l.getCurrentScreenName = S),
      (l.getTargetType = $),
      (l.getAncestorTrackingPath = P),
      (l.handleClick = N),
      (l.handleDoubleClick = M),
      (l.handleWheel = w),
      (l.handleScroll = A),
      (l.handlePointerDown = F),
      (l.handlePointerUp = O),
      (l.handlePointerCancel = B));
  },
  98,
);
