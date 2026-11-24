__d(
  "WAWebPathfinderUserTouch",
  [
    "WAWebPathfinderHeldBackScreen",
    "WAWebPathfinderHeldBackSurface",
    "WAWebPathfinderLogger",
    "WAWebPathfinderPIIFilter",
    "WAWebPathfinderScreenName",
    "WAWebUA",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 10,
      s = /^(?:label-)?list-item--?\d+$/,
      u = "list-item",
      c = 50,
      d = 300,
      m = 2e3,
      p = 2e3,
      _ = 0,
      f = null,
      g = null,
      h = null,
      y = null,
      C = null,
      b = 0,
      v = null;
    function S() {
      var e = g;
      return ((g = null), e);
    }
    function R() {
      f != null &&
        (f.heldBackSurface = o(
          "WAWebPathfinderHeldBackSurface",
        ).HeldBackSurface.SCREEN_LOCK);
    }
    function L(e, t) {
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
    function E() {
      return b;
    }
    function k(e) {
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
        }) ||
        o("WAWebPathfinderHeldBackScreen").claimedLeavingVerdict(u) != null
      ) {
        I(n) && (g = null);
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
      I(n) && (g = c && !a ? s : null);
    }
    function I(e) {
      return e === "TAP" || e === "DOUBLE_TAP";
    }
    function T() {
      ((g = null), f != null && (f.isTriggerless = !0));
    }
    var D = { UP: 1, DOWN: 2, LEFT: 3, RIGHT: 4 };
    function x(e) {
      var t = Math.abs(e.deltaX),
        n = Math.abs(e.deltaY);
      return t === 0 && n === 0
        ? null
        : n >= t
          ? e.deltaY > 0
            ? D.DOWN
            : D.UP
          : e.deltaX > 0
            ? D.RIGHT
            : D.LEFT;
    }
    function $(e, t, n, r) {
      o("WAWebPathfinderLogger").emitPathfinderEvent({
        eventType: "SCROLL",
        heldBackSurface: e,
        screenName: t,
        timestampMs: n,
        gestureDirection: r,
      });
    }
    function P(e, t, n, r, a) {
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
    function N(e, t) {
      var n = O(e);
      n != null && P(n, w(e), Date.now(), t, L(e, n));
    }
    function M(e) {
      var t;
      return (t = e.getAttribute("data-testid")) != null
        ? t
        : e.getAttribute("testid");
    }
    function w(e) {
      return e.tagName.toLowerCase();
    }
    function A(e) {
      return (
        e.button === _ &&
        e.ctrlKey &&
        o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC
      );
    }
    function F(t) {
      if (t instanceof HTMLElement) return t;
      if (!(t instanceof Element) || !r("justknobx")._("8301")) return null;
      for (var n = t, o = 0; n != null && o < e; ) {
        if (n instanceof HTMLElement) return n;
        ((n = n.parentElement), o++);
      }
      return null;
    }
    function O(t) {
      for (var n = t, r = 0, a = []; n instanceof HTMLElement && r < e; ) {
        var i = M(n);
        if (i != null) {
          if (o("WAWebPathfinderPIIFilter").hasUnsafePathfinderTrackingId(i))
            return null;
          i !== "" && a.push(i);
        }
        ((n = n.parentElement), r++);
      }
      return B(a);
    }
    function B(e) {
      for (var t = "", n = e.length - 1; n >= 0; n--) {
        var r = e[n];
        s.test(r) || (t = t === "" ? r : t + "/" + r);
      }
      return t !== "" ? t : e.length > 0 ? u : null;
    }
    function W(e) {
      if (!(e instanceof MouseEvent && A(e))) {
        var t = F(e.target);
        if (!V(e, t)) {
          if (t == null) {
            T();
            return;
          }
          var n = Date.now(),
            r = O(t);
          if (r == null) {
            T();
            return;
          }
          var o = w(t),
            a = q(t);
          U(t, n);
          var i = window.setTimeout(function () {
            var e = f;
            e != null &&
              e.timer === i &&
              (k({
                duplicateCount: e.duplicateCount,
                eventType: "TAP",
                heldBackSurface: e.heldBackSurface,
                isTriggerless: e.isTriggerless,
                targetType: e.targetType,
                timestampMs: e.timestampMs,
                trackingId: e.trackingId,
              }),
              (f = null));
          }, d);
          f = {
            timer: i,
            target: t,
            trackingId: r,
            targetType: o,
            timestampMs: n,
            heldBackSurface: L(t, r),
            isTriggerless: !1,
            nativeTimeStamp: e.timeStamp,
            duplicateCount: 0,
            replacedDuplicateCount: a,
          };
        }
      }
    }
    function q(e) {
      var t = f;
      return t != null && t.target === e ? t.duplicateCount : 0;
    }
    function U(e, t) {
      var n = f;
      n != null &&
        (window.clearTimeout(n.timer),
        n.target !== e && t - n.timestampMs >= c
          ? k({
              duplicateCount: n.duplicateCount,
              eventType: "TAP",
              heldBackSurface: n.heldBackSurface,
              isTriggerless: n.isTriggerless,
              targetType: n.targetType,
              timestampMs: n.timestampMs,
              trackingId: n.trackingId,
            })
          : n.target !== e && b++);
    }
    function V(e, t) {
      var n = G(e, t);
      return ((C = null), n || H(t, e));
    }
    function H(e, t) {
      var n = f;
      return e == null ||
        n == null ||
        n.target !== e ||
        n.nativeTimeStamp !== t.timeStamp
        ? !1
        : (n.duplicateCount++, !0);
    }
    function G(e, t) {
      return (
        C != null &&
        e instanceof MouseEvent &&
        e.detail !== 0 &&
        (t == null ? void 0 : t.contains(C)) === !0
      );
    }
    function z(e) {
      var t = j(e);
      if (t != null) {
        var n = f;
        if (n != null) {
          (window.clearTimeout(n.timer),
            (f = null),
            k({
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
        var r = O(t);
        if (r == null) {
          T();
          return;
        }
        k({
          duplicateCount: 0,
          eventType: "DOUBLE_TAP",
          heldBackSurface: L(t, r),
          isTriggerless: !1,
          targetType: w(t),
          timestampMs: Date.now(),
          trackingId: r,
        });
      }
    }
    function j(e) {
      return e.timeStamp === v ? null : ((v = e.timeStamp), F(e.target));
    }
    function K(e) {
      if (h == null && e instanceof WheelEvent) {
        var t = Date.now(),
          n = o("WAWebPathfinderScreenName").getCurrentScreenName(),
          r = x(e);
        ((h = window.setTimeout(function () {
          h = null;
        }, m)),
          $(
            o("WAWebPathfinderHeldBackSurface").captureHeldBackSurface(
              e.target,
            ),
            n,
            t,
            r,
          ));
      }
    }
    function Q(e) {
      if (h == null) {
        var t = Date.now(),
          n = o("WAWebPathfinderScreenName").getCurrentScreenName();
        ((h = window.setTimeout(function () {
          h = null;
        }, m)),
          $(
            o("WAWebPathfinderHeldBackSurface").captureHeldBackSurface(
              e == null ? void 0 : e.target,
            ),
            n,
            t,
          ));
      }
    }
    function X(e) {
      if (!(!(e instanceof PointerEvent) || e.button !== 0)) {
        var t = F(e.target);
        if (
          t != null &&
          (y != null && (window.clearTimeout(y), (y = null)), (C = null), !A(e))
        ) {
          var n = O(t);
          if (n != null) {
            var r = w(t),
              o = Date.now(),
              a = L(t, n);
            y = window.setTimeout(function () {
              ((y = null), (C = t), P(n, r, o, "long_hold", a));
            }, p);
          }
        }
      }
    }
    function Y(e) {
      !(e instanceof PointerEvent) ||
        e.button !== 0 ||
        (y != null && (window.clearTimeout(y), (y = null)));
    }
    function J() {
      y != null && (window.clearTimeout(y), (y = null));
    }
    function Z() {
      (f != null && (window.clearTimeout(f.timer), (f = null)),
        h != null && (window.clearTimeout(h), (h = null)),
        y != null && (window.clearTimeout(y), (y = null)),
        (C = null),
        (v = null));
    }
    ((l.consumeLastTapTrackingId = S),
      (l.withholdPendingPathfinderTap = R),
      (l.getRapidFireSuppressedCount = E),
      (l.commitTargetLongPress = N),
      (l.isMacContextClick = A),
      (l.resolveTapElement = F),
      (l.getAncestorTrackingPath = O),
      (l.handleClick = W),
      (l.handleDoubleClick = z),
      (l.handleWheel = K),
      (l.handleScroll = Q),
      (l.handlePointerDown = X),
      (l.handlePointerUp = Y),
      (l.handlePointerCancel = J),
      (l.disposePathfinderUserTouch = Z));
  },
  98,
);
