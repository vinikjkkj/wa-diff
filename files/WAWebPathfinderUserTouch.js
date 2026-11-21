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
      y = 0,
      C = null;
    function b() {
      var e = _;
      return ((_ = null), e);
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
      return y;
    }
    function L(e) {
      var t = e.duplicateCount,
        n = e.eventType,
        r = e.heldBackSurface,
        a = e.isTriggerless,
        i = e.targetType,
        l = e.timestampMs,
        s = e.trackingId,
        u = o("WAWebPathfinderScreenName").getCurrentScreenName();
      if (
        o("WAWebPathfinderHeldBackSurface").isHeldBackEvent({
          heldBackSurface: r,
          screenName: u,
        })
      ) {
        E(n) && (_ = null);
        return;
      }
      var c = o("WAWebPathfinderLogger").emitPathfinderEvent({
        eventType: n,
        debounceCount: t > 0 ? t : void 0,
        heldBackSurface: r,
        screenName: u,
        targetTrackingId: s,
        targetType: i,
        timestampMs: l,
      });
      E(n) && (_ = c && !a ? s : null);
    }
    function E(e) {
      return e === "TAP" || e === "DOUBLE_TAP";
    }
    function k() {
      ((_ = null), p != null && (p.isTriggerless = !0));
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
    function D(e, t, n, r) {
      o("WAWebPathfinderLogger").emitPathfinderEvent({
        eventType: "SCROLL",
        heldBackSurface: e,
        screenName: t,
        timestampMs: n,
        gestureDirection: r,
      });
    }
    function x(e, t, n, r, a) {
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
    function $(e, t) {
      var n = A(e);
      n != null && x(n, N(e), Date.now(), t, S(e, n));
    }
    function P(e) {
      var t;
      return (t = e.getAttribute("data-testid")) != null
        ? t
        : e.getAttribute("testid");
    }
    function N(e) {
      return e.tagName.toLowerCase();
    }
    function M(e) {
      return (
        e.button === m &&
        e.ctrlKey &&
        o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC
      );
    }
    function w(t) {
      if (t instanceof HTMLElement) return t;
      if (!(t instanceof Element) || !r("justknobx")._("8301")) return null;
      for (var n = t, o = 0; n != null && o < e; ) {
        if (n instanceof HTMLElement) return n;
        ((n = n.parentElement), o++);
      }
      return null;
    }
    function A(t) {
      for (var n = t, r = 0, a = []; n instanceof HTMLElement && r < e; ) {
        var i = P(n);
        if (i != null) {
          if (o("WAWebPathfinderPIIFilter").hasUnsafePathfinderTrackingId(i))
            return null;
          i !== "" && a.push(i);
        }
        ((n = n.parentElement), r++);
      }
      return (a.reverse(), a.length > 0 ? a.join("/") : null);
    }
    function F(e) {
      if (!(e instanceof MouseEvent && M(e))) {
        var t = w(e.target);
        if (!W(e, t)) {
          if (t == null) {
            k();
            return;
          }
          var n = Date.now(),
            r = A(t);
          if (r == null) {
            k();
            return;
          }
          var o = N(t),
            a = O(t);
          B(t, n);
          var i = window.setTimeout(function () {
            var e = p;
            e != null &&
              e.timer === i &&
              (L({
                duplicateCount: e.duplicateCount,
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
            trackingId: r,
            targetType: o,
            timestampMs: n,
            heldBackSurface: S(t, r),
            isTriggerless: !1,
            nativeTimeStamp: e.timeStamp,
            duplicateCount: 0,
            replacedDuplicateCount: a,
          };
        }
      }
    }
    function O(e) {
      var t = p;
      return t != null && t.target === e ? t.duplicateCount : 0;
    }
    function B(e, t) {
      var n = p;
      n != null &&
        (window.clearTimeout(n.timer),
        n.target !== e && t - n.timestampMs >= s
          ? L({
              duplicateCount: n.duplicateCount,
              eventType: "TAP",
              heldBackSurface: n.heldBackSurface,
              isTriggerless: n.isTriggerless,
              targetType: n.targetType,
              timestampMs: n.timestampMs,
              trackingId: n.trackingId,
            })
          : n.target !== e && y++);
    }
    function W(e, t) {
      var n = U(e, t);
      return ((h = null), n || q(t, e));
    }
    function q(e, t) {
      var n = p;
      return e == null ||
        n == null ||
        n.target !== e ||
        n.nativeTimeStamp !== t.timeStamp
        ? !1
        : (n.duplicateCount++, !0);
    }
    function U(e, t) {
      return (
        h != null &&
        e instanceof MouseEvent &&
        e.detail !== 0 &&
        (t == null ? void 0 : t.contains(h)) === !0
      );
    }
    function V(e) {
      var t = H(e);
      if (t != null) {
        var n = p;
        if (n != null) {
          (window.clearTimeout(n.timer),
            (p = null),
            L({
              duplicateCount: n.duplicateCount + n.replacedDuplicateCount,
              eventType: "DOUBLE_TAP",
              heldBackSurface: n.heldBackSurface,
              isTriggerless: n.isTriggerless,
              targetType: n.targetType,
              timestampMs: n.timestampMs,
              trackingId: n.trackingId,
            }));
          return;
        }
        var r = A(t);
        if (r == null) {
          k();
          return;
        }
        L({
          duplicateCount: 0,
          eventType: "DOUBLE_TAP",
          heldBackSurface: S(t, r),
          isTriggerless: !1,
          targetType: N(t),
          timestampMs: Date.now(),
          trackingId: r,
        });
      }
    }
    function H(e) {
      return e.timeStamp === C ? null : ((C = e.timeStamp), w(e.target));
    }
    function G(e) {
      if (f == null && e instanceof WheelEvent) {
        var t = Date.now(),
          n = o("WAWebPathfinderScreenName").getCurrentScreenName(),
          r = T(e);
        ((f = window.setTimeout(function () {
          f = null;
        }, c)),
          D(
            o("WAWebPathfinderHeldBackSurface").captureHeldBackSurface(
              e.target,
            ),
            n,
            t,
            r,
          ));
      }
    }
    function z(e) {
      if (f == null) {
        var t = Date.now(),
          n = o("WAWebPathfinderScreenName").getCurrentScreenName();
        ((f = window.setTimeout(function () {
          f = null;
        }, c)),
          D(
            o("WAWebPathfinderHeldBackSurface").captureHeldBackSurface(
              e == null ? void 0 : e.target,
            ),
            n,
            t,
          ));
      }
    }
    function j(e) {
      if (!(!(e instanceof PointerEvent) || e.button !== 0)) {
        var t = w(e.target);
        if (
          t != null &&
          (g != null && (window.clearTimeout(g), (g = null)), (h = null), !M(e))
        ) {
          var n = A(t);
          if (n != null) {
            var r = N(t),
              o = Date.now(),
              a = S(t, n);
            g = window.setTimeout(function () {
              ((g = null), (h = t), x(n, r, o, "long_hold", a));
            }, d);
          }
        }
      }
    }
    function K(e) {
      !(e instanceof PointerEvent) ||
        e.button !== 0 ||
        (g != null && (window.clearTimeout(g), (g = null)));
    }
    function Q() {
      g != null && (window.clearTimeout(g), (g = null));
    }
    function X() {
      (p != null && (window.clearTimeout(p.timer), (p = null)),
        f != null && (window.clearTimeout(f), (f = null)),
        g != null && (window.clearTimeout(g), (g = null)),
        (h = null),
        (C = null));
    }
    ((l.consumeLastTapTrackingId = b),
      (l.withholdPendingPathfinderTap = v),
      (l.getRapidFireSuppressedCount = R),
      (l.commitTargetLongPress = $),
      (l.isMacContextClick = M),
      (l.resolveTapElement = w),
      (l.getAncestorTrackingPath = A),
      (l.handleClick = F),
      (l.handleDoubleClick = V),
      (l.handleWheel = G),
      (l.handleScroll = z),
      (l.handlePointerDown = j),
      (l.handlePointerUp = K),
      (l.handlePointerCancel = Q),
      (l.disposePathfinderUserTouch = X));
  },
  98,
);
