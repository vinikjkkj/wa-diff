__d(
  "WAWebContactsAndGroupsJoinRequestFocus",
  ["Promise"],
  function (t, n, r, o, a, i) {
    var e,
      l = "[data-join-request-list]",
      s = "[data-join-request-actions]",
      u = '[tabindex="-1"]',
      c = new WeakMap(),
      d = new WeakMap(),
      m = null;
    function p(t, r) {
      return (
        c.set(t, r),
        d.set(r, t),
        function () {
          (d.delete(r), c.get(t) === r && c.delete(t));
          var o = m;
          o != null &&
            o.handled === t &&
            (e || (e = n("Promise"))).resolve().then(function () {
              return h(o);
            });
        }
      );
    }
    function _(e, t) {
      var n = document.activeElement,
        r = t == null ? void 0 : t.closest(l);
      if (
        !(
          t == null ||
          r == null ||
          !(n instanceof HTMLElement) ||
          !t.contains(n)
        )
      ) {
        var o = y(t).indexOf(n),
          a = Array.from(r.querySelectorAll(s)),
          i = a.indexOf(t),
          c = []
            .concat(a.slice(i + 1), a.slice(0, i).reverse())
            .find(function (e) {
              return y(e)[o] != null;
            }),
          p = c != null ? y(c)[o] : r.closest(u);
        ((m = {
          buttonIndex: o,
          handled: e,
          movedTo: p,
          target: c != null ? d.get(c) : null,
        }),
          p == null || p.focus());
      }
    }
    function f(e) {
      var t = m;
      return t == null || t.handled !== e
        ? null
        : ((m = null),
          document.activeElement === t.movedTo || C() ? t.buttonIndex : null);
    }
    function g(e, t) {
      if (e != null) {
        var n;
        (n = y(e)[t]) == null || n.focus();
      }
    }
    function h(e) {
      if (m === e) {
        m = null;
        var t = e.target != null ? c.get(e.target) : null;
        if ((t == null ? void 0 : t.isConnected) === !0 && C()) {
          var n;
          (n = y(t)[e.buttonIndex]) == null || n.focus();
        }
      }
    }
    function y(e) {
      return Array.from(e.querySelectorAll("button"));
    }
    function C() {
      var e = document,
        t = e.activeElement;
      return t == null || t === document.body;
    }
    ((i.watchJoinRequestFocus = p),
      (i.moveFocusToNextRequest = _),
      (i.takeBackJoinRequestFocus = f),
      (i.focusJoinRequestAction = g));
  },
  66,
);
