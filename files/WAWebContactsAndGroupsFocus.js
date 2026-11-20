__d(
  "WAWebContactsAndGroupsFocus",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = document,
        t = e.activeElement;
      return t == null || t === document.body;
    }
    function l(e) {
      return Array.from(e.querySelectorAll("button"));
    }
    function s(e, t) {
      return [].concat(e.slice(t + 1), e.slice(0, t).reverse());
    }
    ((i.isFocusLost = e), (i.getButtons = l), (i.getItemsAfterThenBefore = s));
  },
  66,
);
