__d(
  "WAWebPathfinderKeyboard",
  ["WAWebPathfinderLogger", "WAWebPathfinderScreenName"],
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
        if (n != null && n !== "") return t + "=" + n;
      }
      for (var r = 0, o = e.parentElement; o != null && r < 5; ) {
        r++;
        for (var a of c) {
          var i = o.getAttribute(a);
          if (i != null && i !== "") return a + "=" + i + "@" + String(r);
        }
        o = o.parentElement;
      }
      return m(e);
    }
    function m(e) {
      var t = e.getAttribute("name");
      return t != null && t !== ""
        ? "tag=" + e.tagName + ";name=" + t
        : "tag=" + e.tagName;
    }
    var p = null,
      _ = null,
      f = null;
    function g() {
      ((p = null),
        (_ = null),
        f != null && (window.clearTimeout(f), (f = null)));
    }
    function h(e) {
      var t;
      return e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement
        ? e.value === ""
        : ((t = e.textContent) != null ? t : "") === "";
    }
    function y(e) {
      var t = e.target;
      !(t instanceof HTMLElement) ||
        !s(t) ||
        (f != null && window.clearTimeout(f),
        (_ = t),
        (f = window.setTimeout(function () {
          f = null;
          var e = _;
          if (((_ = null), e != null)) {
            var t = h(e);
            o("WAWebPathfinderLogger").emitPathfinderEvent({
              eventType: "CONTENT_CHANGED",
              context: JSON.stringify({ is_empty: String(t) }),
              screenName: o("WAWebPathfinderScreenName").getCurrentScreenName(),
              timestampMs: Date.now(),
            });
          }
        }, u)));
    }
    function C(e) {
      var t = e.target;
      if (!(!(t instanceof HTMLElement) || !s(t))) {
        var n = d(t);
        p !== n &&
          ((p = n),
          o("WAWebPathfinderLogger").emitPathfinderEvent({
            eventType: "BEGIN_EDITING",
            screenName: o("WAWebPathfinderScreenName").getCurrentScreenName(),
            targetTrackingId: n,
            timestampMs: Date.now(),
          }));
      }
    }
    function b(e) {
      var t = e.target;
      if (!(!(t instanceof HTMLElement) || !s(t))) {
        var n = d(t);
        p === n &&
          ((p = null),
          o("WAWebPathfinderLogger").emitPathfinderEvent({
            eventType: "END_EDITING",
            screenName: o("WAWebPathfinderScreenName").getCurrentScreenName(),
            targetTrackingId: n,
            timestampMs: Date.now(),
          }));
      }
    }
    ((l.resetKeyboardStateForTesting = g),
      (l.handleInput = y),
      (l.handleFocusIn = C),
      (l.handleFocusOut = b));
  },
  98,
);
