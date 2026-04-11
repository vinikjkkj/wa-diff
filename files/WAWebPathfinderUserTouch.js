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
        : 1;
    }
    function L(e, t, n, r) {
      var a = R(e, t);
      ((g = { eventType: e, trackingId: t, debounceCount: a }),
        o("WAWebPathfinderLogger").emitPathfinderEvent({
          eventType: e,
          debounceCount: a,
          screenName: h,
          targetTrackingId: t,
          targetType: n,
          timestampMs: r,
        }));
    }
    function E(e, t) {
      o("WAWebPathfinderLogger").emitPathfinderEvent({
        eventType: "SCROLL",
        screenName: e,
        timestampMs: t,
      });
    }
    function k(e, t, n) {
      o("WAWebPathfinderLogger").emitPathfinderEvent({
        eventType: "LONG_PRESS",
        screenName: h,
        targetTrackingId: e,
        targetType: t,
        timestampMs: n,
      });
    }
    function I(e) {
      var t;
      return (t = e.getAttribute("data-testid")) != null
        ? t
        : e.getAttribute("testid");
    }
    function T(e) {
      var t = e.split("-"),
        n = [];
      for (var r of t) {
        if (r.includes("@") || d.test(r) || m.test(r) || p.test(r) || _.test(r))
          break;
        n.push(r);
      }
      return n.length > 0 ? n.join("-") : "";
    }
    function D(e) {
      return e.tagName.toLowerCase();
    }
    function x(t) {
      for (var n = t, r = 0, o = []; n instanceof HTMLElement && r < e; ) {
        var a = I(n);
        if (a != null) {
          var i = T(a);
          i !== "" && o.push(i);
        }
        ((n = n.parentElement), r++);
      }
      return (o.reverse(), o.length > 0 ? o.join("/") : null);
    }
    function $(e) {
      var t = e.target;
      if (b != null && b === t) {
        b = null;
        return;
      }
      if (((b = null), t instanceof HTMLElement)) {
        var n = Date.now(),
          r = x(t);
        if (r != null) {
          var o = D(t),
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
    function P(e) {
      var t = e.target;
      if (t instanceof HTMLElement) {
        var n = f;
        if (n != null) {
          (window.clearTimeout(n.timer),
            (f = null),
            L("DOUBLE_TAP", n.trackingId, n.targetType, n.timestampMs));
          return;
        }
        var r = x(t);
        r != null && L("DOUBLE_TAP", r, D(t), Date.now());
      }
    }
    function N() {
      if (y == null) {
        var e = Date.now(),
          t = h;
        ((y = window.setTimeout(function () {
          y = null;
        }, u)),
          E(t, e));
      }
    }
    function M(e) {
      if (!(!(e instanceof PointerEvent) || e.button !== 0)) {
        var t = e.target;
        if (t instanceof HTMLElement) {
          (C != null && window.clearTimeout(C), (b = null));
          var n = x(t),
            r = D(t),
            o = Date.now();
          C = window.setTimeout(function () {
            ((C = null), (b = t), k(n, r, o));
          }, c);
        }
      }
    }
    function w(e) {
      !(e instanceof PointerEvent) ||
        e.button !== 0 ||
        (C != null && (window.clearTimeout(C), (C = null)));
    }
    function A() {
      C != null && (window.clearTimeout(C), (C = null));
    }
    ((l.updateCurrentScreenName = v),
      (l.getCurrentScreenName = S),
      (l.getTargetType = D),
      (l.getAncestorTrackingPath = x),
      (l.handleClick = $),
      (l.handleDoubleClick = P),
      (l.handleScroll = N),
      (l.handlePointerDown = M),
      (l.handlePointerUp = w),
      (l.handlePointerCancel = A));
  },
  98,
);
