__d(
  "WAWebPathfinderUserTouch",
  [
    "WAWebPathfinderHeldBackSurface",
    "WAWebPathfinderLogger",
    "WAWebPathfinderPIIFilter",
    "WAWebPathfinderScreenName",
    "WAWebUA",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 10,
      s = 50,
      u = 300,
      c = 2e3,
      d = 2e3,
      m = 0,
      p = null,
      _ = null,
      f = null,
      g = null,
      h = null,
      y = null,
      C = 0;
    function b() {
      var e = f;
      return ((f = null), e);
    }
    function v() {
      p != null &&
        (p.heldBackSurface = o(
          "WAWebPathfinderHeldBackSurface",
        ).HeldBackSurface.SCREEN_LOCK);
    }
    function S(e, t) {
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
    function R() {
      return C;
    }
    function L(e, t) {
      var n = _;
      return n != null && n.eventType === e && n.trackingId === t
        ? n.debounceCount + 1
        : 0;
    }
    function E(e) {
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
        var s = L(t, i);
        ((_ = { eventType: t, trackingId: i, debounceCount: s }),
          (t === "TAP" || t === "DOUBLE_TAP") && (f = i),
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
    var k = { UP: 1, DOWN: 2, LEFT: 3, RIGHT: 4 };
    function I(e) {
      var t = Math.abs(e.deltaX),
        n = Math.abs(e.deltaY);
      return t === 0 && n === 0
        ? null
        : n >= t
          ? e.deltaY > 0
            ? k.DOWN
            : k.UP
          : e.deltaX > 0
            ? k.RIGHT
            : k.LEFT;
    }
    function T(e, t, n, r) {
      o("WAWebPathfinderLogger").emitPathfinderEvent({
        eventType: "SCROLL",
        heldBackSurface: e,
        screenName: t,
        timestampMs: n,
        gestureDirection: r,
      });
    }
    function D(e, t, n, r, a) {
      o("WAWebPathfinderLogger").emitPathfinderEvent({
        eventType: "LONG_PRESS",
        heldBackSurface: a,
        pressKind: r,
        screenName: o("WAWebPathfinderScreenName").getCurrentScreenName(),
        targetTrackingId: e,
        targetType: t,
        timestampMs: n,
      });
    }
    function x(e, t) {
      var n = M(e);
      n != null && D(n, P(e), Date.now(), t, S(e, n));
    }
    function $(e) {
      var t;
      return (t = e.getAttribute("data-testid")) != null
        ? t
        : e.getAttribute("testid");
    }
    function P(e) {
      return e.tagName.toLowerCase();
    }
    function N(e) {
      return (
        e.button === m &&
        e.ctrlKey &&
        o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC
      );
    }
    function M(t) {
      for (var n = t, r = 0, a = []; n instanceof HTMLElement && r < e; ) {
        var i = $(n);
        if (i != null) {
          if (o("WAWebPathfinderPIIFilter").hasUnsafePathfinderTrackingId(i))
            return null;
          i !== "" && a.push(i);
        }
        ((n = n.parentElement), r++);
      }
      return (a.reverse(), a.length > 0 ? a.join("/") : null);
    }
    function w(e) {
      if (!(e instanceof MouseEvent && N(e))) {
        var t = e.target;
        if (y != null && y === t) {
          y = null;
          return;
        }
        if (((y = null), t instanceof HTMLElement)) {
          var n = Date.now(),
            r = M(t);
          if (r != null) {
            var o = P(t),
              a = p;
            a != null &&
              (window.clearTimeout(a.timer),
              a.target !== t && n - a.timestampMs >= s
                ? E({
                    eventType: "TAP",
                    heldBackSurface: a.heldBackSurface,
                    targetType: a.targetType,
                    timestampMs: a.timestampMs,
                    trackingId: a.trackingId,
                  })
                : a.target !== t && C++);
            var i = window.setTimeout(function () {
              var e = p;
              e != null &&
                e.timer === i &&
                (E({
                  eventType: "TAP",
                  heldBackSurface: e.heldBackSurface,
                  targetType: e.targetType,
                  timestampMs: e.timestampMs,
                  trackingId: e.trackingId,
                }),
                (p = null));
            }, u);
            p = {
              timer: i,
              target: t,
              trackingId: r,
              targetType: o,
              timestampMs: n,
              heldBackSurface: S(t, r),
            };
          }
        }
      }
    }
    function A(e) {
      var t = e.target;
      if (t instanceof HTMLElement) {
        var n = p;
        if (n != null) {
          (window.clearTimeout(n.timer),
            (p = null),
            E({
              eventType: "DOUBLE_TAP",
              heldBackSurface: n.heldBackSurface,
              targetType: n.targetType,
              timestampMs: n.timestampMs,
              trackingId: n.trackingId,
            }));
          return;
        }
        var r = M(t);
        r != null &&
          E({
            eventType: "DOUBLE_TAP",
            heldBackSurface: S(t, r),
            targetType: P(t),
            timestampMs: Date.now(),
            trackingId: r,
          });
      }
    }
    function F(e) {
      if (g == null && e instanceof WheelEvent) {
        var t = Date.now(),
          n = o("WAWebPathfinderScreenName").getCurrentScreenName(),
          r = I(e);
        ((g = window.setTimeout(function () {
          g = null;
        }, c)),
          T(
            o("WAWebPathfinderHeldBackSurface").captureHeldBackSurface(
              e.target,
            ),
            n,
            t,
            r,
          ));
      }
    }
    function O(e) {
      if (g == null) {
        var t = Date.now(),
          n = o("WAWebPathfinderScreenName").getCurrentScreenName();
        ((g = window.setTimeout(function () {
          g = null;
        }, c)),
          T(
            o("WAWebPathfinderHeldBackSurface").captureHeldBackSurface(
              e == null ? void 0 : e.target,
            ),
            n,
            t,
          ));
      }
    }
    function B(e) {
      if (!(!(e instanceof PointerEvent) || e.button !== 0)) {
        var t = e.target;
        if (
          t instanceof HTMLElement &&
          (h != null && (window.clearTimeout(h), (h = null)), (y = null), !N(e))
        ) {
          var n = M(t);
          if (n != null) {
            var r = P(t),
              o = Date.now(),
              a = S(t, n);
            h = window.setTimeout(function () {
              ((h = null), (y = t), D(n, r, o, "long_hold", a));
            }, d);
          }
        }
      }
    }
    function W(e) {
      !(e instanceof PointerEvent) ||
        e.button !== 0 ||
        (h != null && (window.clearTimeout(h), (h = null)));
    }
    function q() {
      h != null && (window.clearTimeout(h), (h = null));
    }
    function U() {
      (p != null && (window.clearTimeout(p.timer), (p = null)),
        g != null && (window.clearTimeout(g), (g = null)),
        h != null && (window.clearTimeout(h), (h = null)),
        (y = null));
    }
    ((l.consumeLastTapTrackingId = b),
      (l.withholdPendingPathfinderTap = v),
      (l.getRapidFireSuppressedCount = R),
      (l.commitTargetLongPress = x),
      (l.isMacContextClick = N),
      (l.getAncestorTrackingPath = M),
      (l.handleClick = w),
      (l.handleDoubleClick = A),
      (l.handleWheel = F),
      (l.handleScroll = O),
      (l.handlePointerDown = B),
      (l.handlePointerUp = W),
      (l.handlePointerCancel = q),
      (l.disposePathfinderUserTouch = U));
  },
  98,
);
