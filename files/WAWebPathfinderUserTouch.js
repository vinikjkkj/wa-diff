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
        : 1;
    }
    function b(e, t, n, r) {
      var a = C(e, t);
      ((m = { eventType: e, trackingId: t, debounceCount: a }),
        o("WAWebPathfinderLogger").emitPathfinderEvent({
          eventType: e,
          debounceCount: a,
          screenName: p,
          targetTrackingId: t,
          targetType: n,
          timestampMs: r,
        }));
    }
    function v(e, t) {
      o("WAWebPathfinderLogger").emitPathfinderEvent({
        eventType: "SCROLL",
        screenName: e,
        timestampMs: t,
      });
    }
    function S(e, t, n) {
      o("WAWebPathfinderLogger").emitPathfinderEvent({
        eventType: "LONG_PRESS",
        screenName: p,
        targetTrackingId: e,
        targetType: t,
        timestampMs: n,
      });
    }
    function R(e) {
      var t;
      return (t = e.getAttribute("data-testid")) != null
        ? t
        : e.getAttribute("testid");
    }
    function L(e) {
      return e.tagName.toLowerCase();
    }
    function E(t) {
      for (var n = t, r = 0, o = []; n instanceof HTMLElement && r < e; ) {
        var a = R(n);
        (a != null && a !== "" && o.push(a), (n = n.parentElement), r++);
      }
      return (o.reverse(), o.length > 0 ? o.join("/") : null);
    }
    function k(e) {
      var t = e.target;
      if (g != null && g === t) {
        g = null;
        return;
      }
      if (((g = null), t instanceof HTMLElement)) {
        var n = Date.now(),
          r = E(t);
        if (r != null) {
          var o = L(t),
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
    function I(e) {
      var t = e.target;
      if (t instanceof HTMLElement) {
        var n = d;
        if (n != null) {
          (window.clearTimeout(n.timer),
            (d = null),
            b("DOUBLE_TAP", n.trackingId, n.targetType, n.timestampMs));
          return;
        }
        var r = E(t);
        r != null && b("DOUBLE_TAP", r, L(t), Date.now());
      }
    }
    function T() {
      if (_ == null) {
        var e = Date.now(),
          t = p;
        ((_ = window.setTimeout(function () {
          _ = null;
        }, u)),
          v(t, e));
      }
    }
    function D(e) {
      if (!(!(e instanceof PointerEvent) || e.button !== 0)) {
        var t = e.target;
        if (t instanceof HTMLElement) {
          (f != null && window.clearTimeout(f), (g = null));
          var n = E(t),
            r = L(t),
            o = Date.now();
          f = window.setTimeout(function () {
            ((f = null), (g = t), S(n, r, o));
          }, c);
        }
      }
    }
    function x(e) {
      !(e instanceof PointerEvent) ||
        e.button !== 0 ||
        (f != null && (window.clearTimeout(f), (f = null)));
    }
    function $() {
      f != null && (window.clearTimeout(f), (f = null));
    }
    ((l.updateCurrentScreenName = h),
      (l.getCurrentScreenName = y),
      (l.getTargetType = L),
      (l.getAncestorTrackingPath = E),
      (l.handleClick = k),
      (l.handleDoubleClick = I),
      (l.handleScroll = T),
      (l.handlePointerDown = D),
      (l.handlePointerUp = x),
      (l.handlePointerCancel = $));
  },
  98,
);
