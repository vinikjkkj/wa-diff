__d(
  "WAWebContactsAndGroupsTodoFocus",
  ["WAWebContactsAndGroupsFocus"],
  function (t, n, r, o, a, i, l) {
    var e = '[role="listitem"]',
      s = "[data-todo-decisions]",
      u = "aside";
    function c(t) {
      var n,
        r,
        a = document.activeElement,
        i = t == null ? void 0 : t.closest(e);
      if (
        t == null ||
        i == null ||
        !(a instanceof HTMLElement) ||
        !t.contains(a)
      )
        return null;
      var l = o("WAWebContactsAndGroupsFocus").getButtons(t).indexOf(a),
        c = Array.from(
          (n = (r = i.parentElement) == null ? void 0 : r.children) != null
            ? n
            : [],
        ),
        d = c.indexOf(i),
        m = o("WAWebContactsAndGroupsFocus")
          .getItemsAfterThenBefore(c, d)
          .map(function (e) {
            var t = e.querySelector(s);
            return t != null
              ? o("WAWebContactsAndGroupsFocus").getButtons(t)[l]
              : null;
          })
          .find(function (e) {
            return e != null;
          }),
        p = m != null ? m : i.closest(u);
      return (p == null || p.focus(), { buttonIndex: l, movedTo: p });
    }
    function d(e, t) {
      var n,
        r = document.activeElement;
      e == null ||
        t == null ||
        (r !== e.movedTo && !o("WAWebContactsAndGroupsFocus").isFocusLost()) ||
        (n = o("WAWebContactsAndGroupsFocus").getButtons(t)[e.buttonIndex]) ==
          null ||
        n.focus();
    }
    ((l.moveFocusOffTodoItem = c), (l.takeBackTodoFocus = d));
  },
  98,
);
