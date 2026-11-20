__d(
  "WAWebContactsAndGroupsJoinRequestFocus",
  ["Promise", "WAWebContactsAndGroupsFocus"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "[data-join-request-list]",
      u = "[data-join-request-actions]",
      c = '[tabindex="-1"]',
      d = new WeakMap(),
      m = new WeakMap(),
      p = null;
    function _(t, r) {
      return (
        d.set(t, r),
        m.set(r, t),
        function () {
          (m.delete(r), d.get(t) === r && d.delete(t));
          var o = p;
          o != null &&
            o.handled === t &&
            (e || (e = n("Promise"))).resolve().then(function () {
              return y(o);
            });
        }
      );
    }
    function f(e, t) {
      var n = document.activeElement,
        r = t == null ? void 0 : t.closest(s);
      if (
        !(
          t == null ||
          r == null ||
          !(n instanceof HTMLElement) ||
          !t.contains(n)
        )
      ) {
        var a = o("WAWebContactsAndGroupsFocus").getButtons(t).indexOf(n),
          i = Array.from(r.querySelectorAll(u)),
          l = i.indexOf(t),
          d = o("WAWebContactsAndGroupsFocus")
            .getItemsAfterThenBefore(i, l)
            .find(function (e) {
              return o("WAWebContactsAndGroupsFocus").getButtons(e)[a] != null;
            }),
          _ =
            d != null
              ? o("WAWebContactsAndGroupsFocus").getButtons(d)[a]
              : r.closest(c);
        ((p = {
          buttonIndex: a,
          handled: e,
          movedTo: _,
          target: d != null ? m.get(d) : null,
        }),
          _ == null || _.focus());
      }
    }
    function g(e) {
      var t = p;
      return t == null || t.handled !== e
        ? null
        : ((p = null),
          document.activeElement === t.movedTo ||
          o("WAWebContactsAndGroupsFocus").isFocusLost()
            ? t.buttonIndex
            : null);
    }
    function h(e, t) {
      if (e != null) {
        var n;
        (n = o("WAWebContactsAndGroupsFocus").getButtons(e)[t]) == null ||
          n.focus();
      }
    }
    function y(e) {
      if (p === e) {
        p = null;
        var t = e.target != null ? d.get(e.target) : null;
        if (
          (t == null ? void 0 : t.isConnected) === !0 &&
          o("WAWebContactsAndGroupsFocus").isFocusLost()
        ) {
          var n;
          (n = o("WAWebContactsAndGroupsFocus").getButtons(t)[e.buttonIndex]) ==
            null || n.focus();
        }
      }
    }
    ((l.watchJoinRequestFocus = _),
      (l.moveFocusToNextRequest = f),
      (l.takeBackJoinRequestFocus = g),
      (l.focusJoinRequestAction = h));
  },
  98,
);
