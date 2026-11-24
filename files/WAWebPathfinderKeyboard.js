__d(
  "WAWebPathfinderKeyboard",
  [
    "WAWebPathfinderFieldEmptiness",
    "WAWebPathfinderHeldBackScreen",
    "WAWebPathfinderHeldBackSurface",
    "WAWebPathfinderLogger",
    "WAWebPathfinderPIIFilter",
    "WAWebPathfinderScreenName",
    "justknobx",
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
      f = new WeakMap(),
      g = 0,
      h = null,
      y = null,
      C = null,
      b = null;
    function v(e) {
      var t,
        n,
        r,
        a = o("WAWebPathfinderScreenName").getCurrentScreenName();
      return (t =
        (n =
          (r = o("WAWebPathfinderHeldBackSurface").captureHeldBackSurface(e)) !=
          null
            ? r
            : o("WAWebPathfinderHeldBackSurface").captureHeldBackScreen(a)) !=
        null
          ? n
          : o("WAWebPathfinderHeldBackScreen").claimedLeavingVerdict(a)) != null
        ? t
        : null;
    }
    function S(e) {
      var t;
      return e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement
        ? e.value === ""
        : ((t = e.textContent) != null ? t : "") === "";
    }
    function R(e) {
      var t,
        n = e.target;
      !(n instanceof HTMLElement) ||
        !s(n) ||
        r("justknobx")._("8647") ||
        (b != null && window.clearTimeout(b),
        (y = n),
        (C = (t = h != null && f.get(n) === h ? _ : null) != null ? t : v(n)),
        (b = window.setTimeout(function () {
          b = null;
          var e = y,
            t = C;
          if (((y = null), (C = null), e != null)) {
            var n = S(e);
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
    function L(e) {
      var t = e.target;
      if (!(!(t instanceof HTMLElement) || !s(t))) {
        var n = d(t);
        n != null &&
          p !== n &&
          ((p = n),
          (h = g++),
          f.set(t, h),
          (_ = v(t)),
          o("WAWebPathfinderLogger").emitPathfinderEvent({
            eventType: "BEGIN_EDITING",
            heldBackSurface: _,
            isInputEmpty: o("WAWebPathfinderFieldEmptiness").getLoggedIsEmpty(
              t,
            ),
            screenName: o("WAWebPathfinderScreenName").getCurrentScreenName(),
            targetTrackingId: n,
            timestampMs: Date.now(),
          }));
      }
    }
    function E(e) {
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
            (h = null),
            (_ = null),
            o("WAWebPathfinderLogger").emitPathfinderEvent({
              eventType: "END_EDITING",
              heldBackSurface: r,
              isInputEmpty: o("WAWebPathfinderFieldEmptiness").getLoggedIsEmpty(
                t,
              ),
              screenName: o("WAWebPathfinderScreenName").getCurrentScreenName(),
              targetTrackingId: n,
              timestampMs: Date.now(),
            }));
        }
      }
    }
    ((l.handleInput = R), (l.handleFocusIn = L), (l.handleFocusOut = E));
  },
  98,
);
