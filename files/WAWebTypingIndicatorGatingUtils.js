__d(
  "WAWebTypingIndicatorGatingUtils",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      return !e.isBot();
    }
    function l(t, n) {
      return e(t) && n == null;
    }
    ((i.isTypingIndicatorMessageBubbleEnabled = e),
      (i.shouldShowMessageListTypingIndicator = l));
  },
  66,
);
