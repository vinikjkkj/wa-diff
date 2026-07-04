__d(
  "WAWebPathfinderKeyboard",
  ["WAWebPathfinderLogger", "WAWebPathfinderUserTouch"],
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
      return "tag=" + e.tagName;
    }
    var m = null,
      p = null,
      _ = null;
    function f() {
      ((m = null),
        (p = null),
        _ != null && (window.clearTimeout(_), (_ = null)));
    }
    function g(e) {
      var t;
      return e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement
        ? e.value === ""
        : ((t = e.textContent) != null ? t : "") === "";
    }
    function h(e) {
      var t = e.target;
      !(t instanceof HTMLElement) ||
        !s(t) ||
        (_ != null && window.clearTimeout(_),
        (p = t),
        (_ = window.setTimeout(function () {
          _ = null;
          var e = p;
          if (((p = null), e != null)) {
            var t = g(e);
            o("WAWebPathfinderLogger").emitPathfinderEvent({
              eventType: "CONTENT_CHANGED",
              context: JSON.stringify({ is_empty: String(t) }),
              screenName: o("WAWebPathfinderUserTouch").getCurrentScreenName(),
              timestampMs: Date.now(),
            });
          }
        }, u)));
    }
    function y(e) {
      var t = e.target;
      if (!(!(t instanceof HTMLElement) || !s(t))) {
        var n = d(t);
        m !== n &&
          ((m = n),
          o("WAWebPathfinderLogger").emitPathfinderEvent({
            eventType: "BEGIN_EDITING",
            screenName: o("WAWebPathfinderUserTouch").getCurrentScreenName(),
            timestampMs: Date.now(),
          }));
      }
    }
    function C(e) {
      var t = e.target;
      if (!(!(t instanceof HTMLElement) || !s(t))) {
        var n = d(t);
        m === n &&
          ((m = null),
          o("WAWebPathfinderLogger").emitPathfinderEvent({
            eventType: "END_EDITING",
            screenName: o("WAWebPathfinderUserTouch").getCurrentScreenName(),
            timestampMs: Date.now(),
          }));
      }
    }
    ((l.resetKeyboardStateForTesting = f),
      (l.handleInput = h),
      (l.handleFocusIn = y),
      (l.handleFocusOut = C));
  },
  98,
);
