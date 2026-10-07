__d(
  "WAWebPathfinderUserTouch",
  [
    "WAWebPathfinderLogger",
    "WAWebPathfinderPIIFilter",
    "WAWebPathfinderScreenName",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 10,
      s = 50,
      u = 300,
      c = 2e3,
      d = 2e3,
      m = null,
      p = null,
      _ = null,
      f = null,
      g = null,
      h = null,
      y = 0;
    function C() {
      var e = _;
      return ((_ = null), e);
    }
    function b() {
      return y;
    }
    function v(e, t) {
      var n = p;
      return n != null && n.eventType === e && n.trackingId === t
        ? n.debounceCount + 1
        : 0;
    }
    function S(e) {
      var t = e.eventType,
        n = e.targetType,
        r = e.timestampMs,
        a = e.trackingId,
        i = v(t, a);
      ((p = { eventType: t, trackingId: a, debounceCount: i }),
        (t === "TAP" || t === "DOUBLE_TAP") && (_ = a),
        o("WAWebPathfinderLogger").emitPathfinderEvent({
          eventType: t,
          debounceCount: i > 0 ? i : void 0,
          screenName: o("WAWebPathfinderScreenName").getCurrentScreenName(),
          targetTrackingId: a,
          targetType: n,
          timestampMs: r,
        }));
    }
    var R = { UP: 1, DOWN: 2, LEFT: 3, RIGHT: 4 };
    function L(e) {
      var t = Math.abs(e.deltaX),
        n = Math.abs(e.deltaY);
      return t === 0 && n === 0
        ? null
        : n >= t
          ? e.deltaY > 0
            ? R.DOWN
            : R.UP
          : e.deltaX > 0
            ? R.RIGHT
            : R.LEFT;
    }
    function E(e, t, n) {
      o("WAWebPathfinderLogger").emitPathfinderEvent({
        eventType: "SCROLL",
        screenName: e,
        timestampMs: t,
        gestureDirection: n,
      });
    }
    function k(e, t, n) {
      o("WAWebPathfinderLogger").emitPathfinderEvent({
        eventType: "LONG_PRESS",
        screenName: o("WAWebPathfinderScreenName").getCurrentScreenName(),
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
      return e.tagName.toLowerCase();
    }
    function D(t) {
      for (var n = t, r = 0, a = []; n instanceof HTMLElement && r < e; ) {
        var i = I(n);
        if (i != null) {
          if (o("WAWebPathfinderPIIFilter").hasUnsafePathfinderTrackingId(i))
            return null;
          i !== "" && a.push(i);
        }
        ((n = n.parentElement), r++);
      }
      return (a.reverse(), a.length > 0 ? a.join("/") : null);
    }
    function x(e) {
      var t = e.target;
      if (h != null && h === t) {
        h = null;
        return;
      }
      if (((h = null), t instanceof HTMLElement)) {
        var n = Date.now(),
          r = D(t);
        if (r != null) {
          var o = T(t),
            a = m;
          a != null &&
            (window.clearTimeout(a.timer),
            a.target !== t && n - a.timestampMs >= s
              ? S({
                  eventType: "TAP",
                  targetType: a.targetType,
                  timestampMs: a.timestampMs,
                  trackingId: a.trackingId,
                })
              : a.target !== t && y++);
          var i = window.setTimeout(function () {
            var e = m;
            e != null &&
              e.timer === i &&
              (S({
                eventType: "TAP",
                targetType: e.targetType,
                timestampMs: e.timestampMs,
                trackingId: e.trackingId,
              }),
              (m = null));
          }, u);
          m = {
            timer: i,
            target: t,
            trackingId: r,
            targetType: o,
            timestampMs: n,
          };
        }
      }
    }
    function $(e) {
      var t = e.target;
      if (t instanceof HTMLElement) {
        var n = m;
        if (n != null) {
          (window.clearTimeout(n.timer),
            (m = null),
            S({
              eventType: "DOUBLE_TAP",
              targetType: n.targetType,
              timestampMs: n.timestampMs,
              trackingId: n.trackingId,
            }));
          return;
        }
        var r = D(t);
        r != null &&
          S({
            eventType: "DOUBLE_TAP",
            targetType: T(t),
            timestampMs: Date.now(),
            trackingId: r,
          });
      }
    }
    function P(e) {
      if (f == null && e instanceof WheelEvent) {
        var t = Date.now(),
          n = o("WAWebPathfinderScreenName").getCurrentScreenName(),
          r = L(e);
        ((f = window.setTimeout(function () {
          f = null;
        }, c)),
          E(n, t, r));
      }
    }
    function N() {
      if (f == null) {
        var e = Date.now(),
          t = o("WAWebPathfinderScreenName").getCurrentScreenName();
        ((f = window.setTimeout(function () {
          f = null;
        }, c)),
          E(t, e));
      }
    }
    function M(e) {
      if (!(!(e instanceof PointerEvent) || e.button !== 0)) {
        var t = e.target;
        if (t instanceof HTMLElement) {
          (g != null && (window.clearTimeout(g), (g = null)), (h = null));
          var n = D(t);
          if (n != null) {
            var r = T(t),
              o = Date.now();
            g = window.setTimeout(function () {
              ((g = null), (h = t), k(n, r, o));
            }, d);
          }
        }
      }
    }
    function w(e) {
      !(e instanceof PointerEvent) ||
        e.button !== 0 ||
        (g != null && (window.clearTimeout(g), (g = null)));
    }
    function A() {
      g != null && (window.clearTimeout(g), (g = null));
    }
    ((l.consumeLastTapTrackingId = C),
      (l.getRapidFireSuppressedCount = b),
      (l.getAncestorTrackingPath = D),
      (l.handleClick = x),
      (l.handleDoubleClick = $),
      (l.handleWheel = P),
      (l.handleScroll = N),
      (l.handlePointerDown = M),
      (l.handlePointerUp = w),
      (l.handlePointerCancel = A));
  },
  98,
);
