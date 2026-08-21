__d(
  "WAWebPathfinderUserTouch",
  ["WAWebPathfinderLogger", "WAWebPathfinderScreenName"],
  function (t, n, r, o, a, i, l) {
    var e = 10,
      s = 50,
      u = 300,
      c = 2e3,
      d = 2e3,
      m = /^(true|false)_/,
      p = /^[0-9A-Fa-f]{8,}$/,
      _ = /^\d{6,}$/,
      f = /[^\x20-\x7E]/,
      g = null,
      h = null,
      y = null,
      C = null,
      b = null,
      v = null,
      S = 0;
    function R() {
      var e = y;
      return ((y = null), e);
    }
    function L() {
      return S;
    }
    function E(e, t) {
      var n = h;
      return n != null && n.eventType === e && n.trackingId === t
        ? n.debounceCount + 1
        : 0;
    }
    function k(e) {
      var t = e.eventType,
        n = e.targetType,
        r = e.timestampMs,
        a = e.trackingId,
        i = E(t, a);
      ((h = { eventType: t, trackingId: a, debounceCount: i }),
        (t === "TAP" || t === "DOUBLE_TAP") && (y = a),
        o("WAWebPathfinderLogger").emitPathfinderEvent({
          eventType: t,
          debounceCount: i > 0 ? i : void 0,
          screenName: o("WAWebPathfinderScreenName").getCurrentScreenName(),
          targetTrackingId: a,
          targetType: n,
          timestampMs: r,
        }));
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
    function D(e, t, n) {
      o("WAWebPathfinderLogger").emitPathfinderEvent({
        eventType: "SCROLL",
        screenName: e,
        timestampMs: t,
        gestureDirection: n,
      });
    }
    function x(e, t, n) {
      o("WAWebPathfinderLogger").emitPathfinderEvent({
        eventType: "LONG_PRESS",
        screenName: o("WAWebPathfinderScreenName").getCurrentScreenName(),
        targetTrackingId: e,
        targetType: t,
        timestampMs: n,
      });
    }
    function $(e) {
      var t;
      return (t = e.getAttribute("data-testid")) != null
        ? t
        : e.getAttribute("testid");
    }
    function P(e) {
      var t = e.split("-"),
        n = [];
      for (var r of t) {
        if (r.includes("@") || m.test(r) || p.test(r) || _.test(r) || f.test(r))
          break;
        n.push(r);
      }
      return n.length > 0 ? n.join("-") : "";
    }
    function N(e) {
      return e.tagName.toLowerCase();
    }
    function M(t) {
      for (var n = t, r = 0, o = []; n instanceof HTMLElement && r < e; ) {
        var a = $(n);
        if (a != null) {
          var i = P(a);
          i !== "" && o.push(i);
        }
        ((n = n.parentElement), r++);
      }
      return (o.reverse(), o.length > 0 ? o.join("/") : null);
    }
    function w(e) {
      var t = e.target;
      if (v != null && v === t) {
        v = null;
        return;
      }
      if (((v = null), t instanceof HTMLElement)) {
        var n = Date.now(),
          r = M(t);
        if (r != null) {
          var o = N(t),
            a = g;
          a != null &&
            (window.clearTimeout(a.timer),
            a.target !== t && n - a.timestampMs >= s
              ? k({
                  eventType: "TAP",
                  targetType: a.targetType,
                  timestampMs: a.timestampMs,
                  trackingId: a.trackingId,
                })
              : a.target !== t && S++);
          var i = window.setTimeout(function () {
            var e = g;
            e != null &&
              e.timer === i &&
              (k({
                eventType: "TAP",
                targetType: e.targetType,
                timestampMs: e.timestampMs,
                trackingId: e.trackingId,
              }),
              (g = null));
          }, u);
          g = {
            timer: i,
            target: t,
            trackingId: r,
            targetType: o,
            timestampMs: n,
          };
        }
      }
    }
    function A(e) {
      var t = e.target;
      if (t instanceof HTMLElement) {
        var n = g;
        if (n != null) {
          (window.clearTimeout(n.timer),
            (g = null),
            k({
              eventType: "DOUBLE_TAP",
              targetType: n.targetType,
              timestampMs: n.timestampMs,
              trackingId: n.trackingId,
            }));
          return;
        }
        var r = M(t);
        r != null &&
          k({
            eventType: "DOUBLE_TAP",
            targetType: N(t),
            timestampMs: Date.now(),
            trackingId: r,
          });
      }
    }
    function F(e) {
      if (C == null && e instanceof WheelEvent) {
        var t = Date.now(),
          n = o("WAWebPathfinderScreenName").getCurrentScreenName(),
          r = T(e);
        ((C = window.setTimeout(function () {
          C = null;
        }, c)),
          D(n, t, r));
      }
    }
    function O() {
      if (C == null) {
        var e = Date.now(),
          t = o("WAWebPathfinderScreenName").getCurrentScreenName();
        ((C = window.setTimeout(function () {
          C = null;
        }, c)),
          D(t, e));
      }
    }
    function B(e) {
      if (!(!(e instanceof PointerEvent) || e.button !== 0)) {
        var t = e.target;
        if (t instanceof HTMLElement) {
          (b != null && window.clearTimeout(b), (v = null));
          var n = M(t),
            r = N(t),
            o = Date.now();
          b = window.setTimeout(function () {
            ((b = null), (v = t), x(n, r, o));
          }, d);
        }
      }
    }
    function W(e) {
      !(e instanceof PointerEvent) ||
        e.button !== 0 ||
        (b != null && (window.clearTimeout(b), (b = null)));
    }
    function q() {
      b != null && (window.clearTimeout(b), (b = null));
    }
    ((l.consumeLastTapTrackingId = R),
      (l.getRapidFireSuppressedCount = L),
      (l.getAncestorTrackingPath = M),
      (l.handleClick = w),
      (l.handleDoubleClick = A),
      (l.handleWheel = F),
      (l.handleScroll = O),
      (l.handlePointerDown = B),
      (l.handlePointerUp = W),
      (l.handlePointerCancel = q));
  },
  98,
);
