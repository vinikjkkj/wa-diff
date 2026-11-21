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
        r = e.isTriggerless,
        a = e.targetType,
        i = e.timestampMs,
        l = e.trackingId,
        s = o("WAWebPathfinderScreenName").getCurrentScreenName();
      if (
        o("WAWebPathfinderHeldBackSurface").isHeldBackEvent({
          heldBackSurface: n,
          screenName: s,
        })
      ) {
        k(t) && (f = null);
        return;
      }
      var u = L(t, l);
      _ = { eventType: t, trackingId: l, debounceCount: u };
      var c = o("WAWebPathfinderLogger").emitPathfinderEvent({
        eventType: t,
        debounceCount: u > 0 ? u : void 0,
        heldBackSurface: n,
        screenName: s,
        targetTrackingId: l,
        targetType: a,
        timestampMs: i,
      });
      k(t) && (f = c && !r ? l : null);
    }
    function k(e) {
      return e === "TAP" || e === "DOUBLE_TAP";
    }
    function I() {
      ((f = null), p != null && (p.isTriggerless = !0));
    }
    var T = { UP: 1, DOWN: 2, LEFT: 3, RIGHT: 4 };
    function D(e) {
      var t = Math.abs(e.deltaX),
        n = Math.abs(e.deltaY);
      return t === 0 && n === 0
        ? null
        : n >= t
          ? e.deltaY > 0
            ? T.DOWN
            : T.UP
          : e.deltaX > 0
            ? T.RIGHT
            : T.LEFT;
    }
    function x(e, t, n, r) {
      o("WAWebPathfinderLogger").emitPathfinderEvent({
        eventType: "SCROLL",
        heldBackSurface: e,
        screenName: t,
        timestampMs: n,
        gestureDirection: r,
      });
    }
    function $(e, t, n, r, a) {
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
    function P(e, t) {
      var n = F(e);
      n != null && $(n, M(e), Date.now(), t, S(e, n));
    }
    function N(e) {
      var t;
      return (t = e.getAttribute("data-testid")) != null
        ? t
        : e.getAttribute("testid");
    }
    function M(e) {
      return e.tagName.toLowerCase();
    }
    function w(e) {
      return (
        e.button === m &&
        e.ctrlKey &&
        o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC
      );
    }
    function A(t) {
      if (t instanceof HTMLElement) return t;
      if (!(t instanceof Element) || !r("justknobx")._("8301")) return null;
      for (var n = t, o = 0; n != null && o < e; ) {
        if (n instanceof HTMLElement) return n;
        ((n = n.parentElement), o++);
      }
      return null;
    }
    function F(t) {
      for (var n = t, r = 0, a = []; n instanceof HTMLElement && r < e; ) {
        var i = N(n);
        if (i != null) {
          if (o("WAWebPathfinderPIIFilter").hasUnsafePathfinderTrackingId(i))
            return null;
          i !== "" && a.push(i);
        }
        ((n = n.parentElement), r++);
      }
      return (a.reverse(), a.length > 0 ? a.join("/") : null);
    }
    function O(e) {
      if (!(e instanceof MouseEvent && w(e))) {
        var t = A(e.target),
          n = W(e, t);
        if (((y = null), !n)) {
          if (t == null) {
            I();
            return;
          }
          var r = Date.now(),
            o = F(t);
          if (o == null) {
            I();
            return;
          }
          var a = M(t);
          B(t, r);
          var i = window.setTimeout(function () {
            var e = p;
            e != null &&
              e.timer === i &&
              (E({
                eventType: "TAP",
                heldBackSurface: e.heldBackSurface,
                isTriggerless: e.isTriggerless,
                targetType: e.targetType,
                timestampMs: e.timestampMs,
                trackingId: e.trackingId,
              }),
              (p = null));
          }, u);
          p = {
            timer: i,
            target: t,
            trackingId: o,
            targetType: a,
            timestampMs: r,
            heldBackSurface: S(t, o),
            isTriggerless: !1,
          };
        }
      }
    }
    function B(e, t) {
      var n = p;
      n != null &&
        (window.clearTimeout(n.timer),
        n.target !== e && t - n.timestampMs >= s
          ? E({
              eventType: "TAP",
              heldBackSurface: n.heldBackSurface,
              isTriggerless: n.isTriggerless,
              targetType: n.targetType,
              timestampMs: n.timestampMs,
              trackingId: n.trackingId,
            })
          : n.target !== e && C++);
    }
    function W(e, t) {
      return (
        y != null &&
        e instanceof MouseEvent &&
        e.detail !== 0 &&
        (t == null ? void 0 : t.contains(y)) === !0
      );
    }
    function q(e) {
      var t = A(e.target);
      if (t != null) {
        var n = p;
        if (n != null) {
          (window.clearTimeout(n.timer),
            (p = null),
            E({
              eventType: "DOUBLE_TAP",
              heldBackSurface: n.heldBackSurface,
              isTriggerless: n.isTriggerless,
              targetType: n.targetType,
              timestampMs: n.timestampMs,
              trackingId: n.trackingId,
            }));
          return;
        }
        var r = F(t);
        if (r == null) {
          I();
          return;
        }
        E({
          eventType: "DOUBLE_TAP",
          heldBackSurface: S(t, r),
          isTriggerless: !1,
          targetType: M(t),
          timestampMs: Date.now(),
          trackingId: r,
        });
      }
    }
    function U(e) {
      if (g == null && e instanceof WheelEvent) {
        var t = Date.now(),
          n = o("WAWebPathfinderScreenName").getCurrentScreenName(),
          r = D(e);
        ((g = window.setTimeout(function () {
          g = null;
        }, c)),
          x(
            o("WAWebPathfinderHeldBackSurface").captureHeldBackSurface(
              e.target,
            ),
            n,
            t,
            r,
          ));
      }
    }
    function V(e) {
      if (g == null) {
        var t = Date.now(),
          n = o("WAWebPathfinderScreenName").getCurrentScreenName();
        ((g = window.setTimeout(function () {
          g = null;
        }, c)),
          x(
            o("WAWebPathfinderHeldBackSurface").captureHeldBackSurface(
              e == null ? void 0 : e.target,
            ),
            n,
            t,
          ));
      }
    }
    function H(e) {
      if (!(!(e instanceof PointerEvent) || e.button !== 0)) {
        var t = A(e.target);
        if (
          t != null &&
          (h != null && (window.clearTimeout(h), (h = null)), (y = null), !w(e))
        ) {
          var n = F(t);
          if (n != null) {
            var r = M(t),
              o = Date.now(),
              a = S(t, n);
            h = window.setTimeout(function () {
              ((h = null), (y = t), $(n, r, o, "long_hold", a));
            }, d);
          }
        }
      }
    }
    function G(e) {
      !(e instanceof PointerEvent) ||
        e.button !== 0 ||
        (h != null && (window.clearTimeout(h), (h = null)));
    }
    function z() {
      h != null && (window.clearTimeout(h), (h = null));
    }
    function j() {
      (p != null && (window.clearTimeout(p.timer), (p = null)),
        g != null && (window.clearTimeout(g), (g = null)),
        h != null && (window.clearTimeout(h), (h = null)),
        (y = null));
    }
    ((l.consumeLastTapTrackingId = b),
      (l.withholdPendingPathfinderTap = v),
      (l.getRapidFireSuppressedCount = R),
      (l.commitTargetLongPress = P),
      (l.isMacContextClick = w),
      (l.resolveTapElement = A),
      (l.getAncestorTrackingPath = F),
      (l.handleClick = O),
      (l.handleDoubleClick = q),
      (l.handleWheel = U),
      (l.handleScroll = V),
      (l.handlePointerDown = H),
      (l.handlePointerUp = G),
      (l.handlePointerCancel = z),
      (l.disposePathfinderUserTouch = j));
  },
  98,
);
