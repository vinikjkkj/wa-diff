__d(
  "WAWebPathfinderUserTouch",
  [
    "WAWebPathfinderHeldBackSurface",
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
      m != null &&
        (m.heldBackSurface = o(
          "WAWebPathfinderHeldBackSurface",
        ).HeldBackSurface.SCREEN_LOCK);
    }
    function v(e, t) {
      var n,
        r,
        a = o("WAWebPathfinderScreenName").getCurrentScreenName();
      return (n =
        (r = o("WAWebPathfinderHeldBackSurface").captureHeldBackSurface(e)) !=
        null
          ? r
          : o("WAWebPathfinderHeldBackSurface").isHeldBackScreen(a)
            ? a
            : null) != null
        ? n
        : o("WAWebPathfinderHeldBackSurface").isHeldBackTapTrackingId(t)
          ? o("WAWebPathfinderHeldBackSurface").HeldBackSurface.SCREEN_LOCK
          : null;
    }
    function S() {
      return y;
    }
    function R(e, t) {
      var n = p;
      return n != null && n.eventType === e && n.trackingId === t
        ? n.debounceCount + 1
        : 0;
    }
    function L(e) {
      var t = e.eventType,
        n = e.heldBackSurface,
        r = e.targetType,
        a = e.timestampMs,
        i = e.trackingId,
        l = o("WAWebPathfinderScreenName").getCurrentScreenName();
      if (
        !o("WAWebPathfinderHeldBackSurface").isHeldBackEvent({
          heldBackSurface: n,
          screenName: l,
        })
      ) {
        var s = R(t, i);
        ((p = { eventType: t, trackingId: i, debounceCount: s }),
          (t === "TAP" || t === "DOUBLE_TAP") && (_ = i),
          o("WAWebPathfinderLogger").emitPathfinderEvent({
            eventType: t,
            debounceCount: s > 0 ? s : void 0,
            heldBackSurface: n,
            screenName: l,
            targetTrackingId: i,
            targetType: r,
            timestampMs: a,
          }));
      }
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
    function I(e, t, n, r) {
      o("WAWebPathfinderLogger").emitPathfinderEvent({
        eventType: "SCROLL",
        heldBackSurface: e,
        screenName: t,
        timestampMs: n,
        gestureDirection: r,
      });
    }
    function T(e, t, n, r) {
      o("WAWebPathfinderLogger").emitPathfinderEvent({
        eventType: "LONG_PRESS",
        heldBackSurface: r,
        screenName: o("WAWebPathfinderScreenName").getCurrentScreenName(),
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
      return e.tagName.toLowerCase();
    }
    function $(t) {
      for (var n = t, r = 0, a = []; n instanceof HTMLElement && r < e; ) {
        var i = D(n);
        if (i != null) {
          if (o("WAWebPathfinderPIIFilter").hasUnsafePathfinderTrackingId(i))
            return null;
          i !== "" && a.push(i);
        }
        ((n = n.parentElement), r++);
      }
      return (a.reverse(), a.length > 0 ? a.join("/") : null);
    }
    function P(e) {
      var t = e.target;
      if (h != null && h === t) {
        h = null;
        return;
      }
      if (((h = null), t instanceof HTMLElement)) {
        var n = Date.now(),
          r = $(t);
        if (r != null) {
          var o = x(t),
            a = m;
          a != null &&
            (window.clearTimeout(a.timer),
            a.target !== t && n - a.timestampMs >= s
              ? L({
                  eventType: "TAP",
                  heldBackSurface: a.heldBackSurface,
                  targetType: a.targetType,
                  timestampMs: a.timestampMs,
                  trackingId: a.trackingId,
                })
              : a.target !== t && y++);
          var i = window.setTimeout(function () {
            var e = m;
            e != null &&
              e.timer === i &&
              (L({
                eventType: "TAP",
                heldBackSurface: e.heldBackSurface,
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
            heldBackSurface: v(t, r),
          };
        }
      }
    }
    function N(e) {
      var t = e.target;
      if (t instanceof HTMLElement) {
        var n = m;
        if (n != null) {
          (window.clearTimeout(n.timer),
            (m = null),
            L({
              eventType: "DOUBLE_TAP",
              heldBackSurface: n.heldBackSurface,
              targetType: n.targetType,
              timestampMs: n.timestampMs,
              trackingId: n.trackingId,
            }));
          return;
        }
        var r = $(t);
        r != null &&
          L({
            eventType: "DOUBLE_TAP",
            heldBackSurface: v(t, r),
            targetType: x(t),
            timestampMs: Date.now(),
            trackingId: r,
          });
      }
    }
    function M(e) {
      if (f == null && e instanceof WheelEvent) {
        var t = Date.now(),
          n = o("WAWebPathfinderScreenName").getCurrentScreenName(),
          r = k(e);
        ((f = window.setTimeout(function () {
          f = null;
        }, c)),
          I(
            o("WAWebPathfinderHeldBackSurface").captureHeldBackSurface(
              e.target,
            ),
            n,
            t,
            r,
          ));
      }
    }
    function w(e) {
      if (f == null) {
        var t = Date.now(),
          n = o("WAWebPathfinderScreenName").getCurrentScreenName();
        ((f = window.setTimeout(function () {
          f = null;
        }, c)),
          I(
            o("WAWebPathfinderHeldBackSurface").captureHeldBackSurface(
              e == null ? void 0 : e.target,
            ),
            n,
            t,
          ));
      }
    }
    function A(e) {
      if (!(!(e instanceof PointerEvent) || e.button !== 0)) {
        var t = e.target;
        if (t instanceof HTMLElement) {
          (g != null && (window.clearTimeout(g), (g = null)), (h = null));
          var n = $(t);
          if (n != null) {
            var r = x(t),
              o = Date.now(),
              a = v(t, n);
            g = window.setTimeout(function () {
              ((g = null), (h = t), T(n, r, o, a));
            }, d);
          }
        }
      }
    }
    function F(e) {
      !(e instanceof PointerEvent) ||
        e.button !== 0 ||
        (g != null && (window.clearTimeout(g), (g = null)));
    }
    function O() {
      g != null && (window.clearTimeout(g), (g = null));
    }
    ((l.consumeLastTapTrackingId = C),
      (l.withholdPendingPathfinderTap = b),
      (l.getRapidFireSuppressedCount = S),
      (l.getAncestorTrackingPath = $),
      (l.handleClick = P),
      (l.handleDoubleClick = N),
      (l.handleWheel = M),
      (l.handleScroll = w),
      (l.handlePointerDown = A),
      (l.handlePointerUp = F),
      (l.handlePointerCancel = O));
  },
  98,
);
