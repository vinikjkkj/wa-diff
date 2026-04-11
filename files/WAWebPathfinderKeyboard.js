__d(
  "WAWebPathfinderKeyboard",
  ["WAWebPathfinderLogger", "WAWebPathfinderUserTouch"],
  function (t, n, r, o, a, i, l) {
    var e = new Set(["INPUT", "TEXTAREA"]);
    function s(t) {
      return e.has(t.tagName) || t.isContentEditable;
    }
    var u = 2e3,
      c = null,
      d = null,
      m = null;
    function p(e) {
      var t;
      return e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement
        ? e.value === ""
        : ((t = e.textContent) != null ? t : "") === "";
    }
    function _(e) {
      var t = e.target;
      !(t instanceof HTMLElement) ||
        !s(t) ||
        (m != null && window.clearTimeout(m),
        (d = t),
        (m = window.setTimeout(function () {
          m = null;
          var e = d;
          if (((d = null), e != null)) {
            var t = p(e);
            o("WAWebPathfinderLogger").emitPathfinderEvent({
              eventType: "CONTENT_CHANGED",
              context: JSON.stringify({ is_empty: String(t) }),
              screenName: o("WAWebPathfinderUserTouch").getCurrentScreenName(),
              timestampMs: Date.now(),
            });
          }
        }, u)));
    }
    function f(e) {
      var t = e.target;
      !(t instanceof HTMLElement) ||
        !s(t) ||
        (c !== t &&
          ((c = t),
          o("WAWebPathfinderLogger").emitPathfinderEvent({
            eventType: "BEGIN_EDITING",
            screenName: o("WAWebPathfinderUserTouch").getCurrentScreenName(),
            timestampMs: Date.now(),
          })));
    }
    function g(e) {
      var t = e.target;
      !(t instanceof HTMLElement) ||
        !s(t) ||
        (c === t &&
          ((c = null),
          o("WAWebPathfinderLogger").emitPathfinderEvent({
            eventType: "END_EDITING",
            screenName: o("WAWebPathfinderUserTouch").getCurrentScreenName(),
            timestampMs: Date.now(),
          })));
    }
    ((l.handleInput = _), (l.handleFocusIn = f), (l.handleFocusOut = g));
  },
  98,
);
