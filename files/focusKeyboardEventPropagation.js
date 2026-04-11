__d(
  "focusKeyboardEventPropagation",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e._stopFocusKeyboardPropagation === !0;
    }
    function l(e) {
      e._stopFocusKeyboardPropagation = !0;
    }
    ((i.hasFocusKeyboardEventPropagationStopped = e),
      (i.stopFocusKeyboardEventPropagation = l));
  },
  66,
);
