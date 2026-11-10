__d(
  "WAWebPathfinderKeyboard",
  [
    "WAWebPathfinderHeldBackSurface",
    "WAWebPathfinderLogger",
    "WAWebPathfinderPIIFilter",
    "WAWebPathfinderScreenName",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Set(["INPUT", "TEXTAREA"]);
    function s(t) {
      return e.has(t.tagName) || t.isContentEditable;
    }
    var u = 2e3,
      c = ["data-testid", "id"];
    function d(e) {
      for (var t of c) {
        var n = e.getAttribute(t);
        if (n != null && n !== "")
          return o("WAWebPathfinderPIIFilter").hasUnsafePathfinderTrackingId(n)
            ? null
            : t + "=" + n;
      }
      for (var r = 0, a = e.parentElement; a != null && r < 5; ) {
        r++;
        for (var i of c) {
          var l = a.getAttribute(i);
          if (l != null && l !== "")
            return o("WAWebPathfinderPIIFilter").hasUnsafePathfinderTrackingId(
              l,
            )
              ? null
              : i + "=" + l + "@" + String(r);
        }
        a = a.parentElement;
      }
      return m(e);
    }
    function m(e) {
      var t = e.getAttribute("name");
      return t != null && t !== ""
        ? o("WAWebPathfinderPIIFilter").hasUnsafePathfinderTrackingId(t)
          ? null
          : "tag=" + e.tagName + ";name=" + t
        : "tag=" + e.tagName;
    }
    var p = null,
      _ = null,
      f = null,
      g = null,
      h = null;
    function y(e) {
      var t;
      return e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement
        ? e.value === ""
        : ((t = e.textContent) != null ? t : "") === "";
    }
    function C(e) {
      var t = e.target;
      !(t instanceof HTMLElement) ||
        !s(t) ||
        (h != null && window.clearTimeout(h),
        (f = t),
        (g = o("WAWebPathfinderHeldBackSurface").captureHeldBackSurface(t)),
        (h = window.setTimeout(function () {
          h = null;
          var e = f,
            t = g;
          if (((f = null), (g = null), e != null)) {
            var n = y(e);
            o("WAWebPathfinderLogger").emitPathfinderEvent({
              eventType: "CONTENT_CHANGED",
              context: JSON.stringify({ is_empty: String(n) }),
              heldBackSurface: t,
              screenName: o("WAWebPathfinderScreenName").getCurrentScreenName(),
              timestampMs: Date.now(),
            });
          }
        }, u)));
    }
    function b(e) {
      var t = e.target;
      if (!(!(t instanceof HTMLElement) || !s(t))) {
        var n = d(t);
        n != null &&
          p !== n &&
          ((p = n),
          (_ = o("WAWebPathfinderHeldBackSurface").captureHeldBackSurface(t)),
          o("WAWebPathfinderLogger").emitPathfinderEvent({
            eventType: "BEGIN_EDITING",
            heldBackSurface: _,
            screenName: o("WAWebPathfinderScreenName").getCurrentScreenName(),
            targetTrackingId: n,
            timestampMs: Date.now(),
          }));
      }
    }
    function v(e) {
      var t = e.target;
      if (!(!(t instanceof HTMLElement) || !s(t))) {
        var n = d(t);
        if (n == null) {
          p = null;
          return;
        }
        if (p === n) {
          var r = _;
          ((p = null),
            (_ = null),
            o("WAWebPathfinderLogger").emitPathfinderEvent({
              eventType: "END_EDITING",
              heldBackSurface: r,
              screenName: o("WAWebPathfinderScreenName").getCurrentScreenName(),
              targetTrackingId: n,
              timestampMs: Date.now(),
            }));
        }
      }
    }
    ((l.handleInput = C), (l.handleFocusIn = b), (l.handleFocusOut = v));
  },
  98,
);
