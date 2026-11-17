__d(
  "WAWebPathfinderUserTouch",
  [
    "WAWebPathfinderHeldBackSurface",
    "WAWebPathfinderLogger",
    "WAWebPathfinderPIIFilter",
    "WAWebPathfinderScreenName",
    "WAWebUA",
    "justknobx",
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
        : o("WAWebPathfinderHeldBackSurface").isHeldBackTapTrackingId(t) ||
            o("WAWebPathfinderHeldBackSurface").isInsideHeldTapElement(e)
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
      var n = w(e);
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
      if (t instanceof HTMLElement) return t;
      if (!(t instanceof Element) || !r("justknobx")._("8301")) return null;
      for (var n = t, o = 0; n != null && o < e; ) {
        if (n instanceof HTMLElement) return n;
        ((n = n.parentElement), o++);
      }
      return null;
    }
    function w(t) {
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
    function A(e) {
      if (!(e instanceof MouseEvent && N(e))) {
        var t = M(e.target),
          n = F(e, t);
        if (((y = null), !(n || t == null))) {
          var r = Date.now(),
            o = w(t);
          if (o != null) {
            var a = P(t),
              i = p;
            i != null &&
              (window.clearTimeout(i.timer),
              i.target !== t && r - i.timestampMs >= s
                ? E({
                    eventType: "TAP",
                    heldBackSurface: i.heldBackSurface,
                    targetType: i.targetType,
                    timestampMs: i.timestampMs,
                    trackingId: i.trackingId,
                  })
                : i.target !== t && C++);
            var l = window.setTimeout(function () {
              var e = p;
              e != null &&
                e.timer === l &&
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
              timer: l,
              target: t,
              trackingId: o,
              targetType: a,
              timestampMs: r,
              heldBackSurface: S(t, o),
            };
          }
        }
      }
    }
    function F(e, t) {
      return (
        y != null &&
        e instanceof MouseEvent &&
        e.detail !== 0 &&
        (t == null ? void 0 : t.contains(y)) === !0
      );
    }
    function O(e) {
      var t = M(e.target);
      if (t != null) {
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
        var r = w(t);
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
    function B(e) {
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
    function W(e) {
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
    function q(e) {
      if (!(!(e instanceof PointerEvent) || e.button !== 0)) {
        var t = M(e.target);
        if (
          t != null &&
          (h != null && (window.clearTimeout(h), (h = null)), (y = null), !N(e))
        ) {
          var n = w(t);
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
    function U(e) {
      !(e instanceof PointerEvent) ||
        e.button !== 0 ||
        (h != null && (window.clearTimeout(h), (h = null)));
    }
    function V() {
      h != null && (window.clearTimeout(h), (h = null));
    }
    function H() {
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
      (l.resolveTapElement = M),
      (l.getAncestorTrackingPath = w),
      (l.handleClick = A),
      (l.handleDoubleClick = O),
      (l.handleWheel = B),
      (l.handleScroll = W),
      (l.handlePointerDown = q),
      (l.handlePointerUp = U),
      (l.handlePointerCancel = V),
      (l.disposePathfinderUserTouch = H));
  },
  98,
);
