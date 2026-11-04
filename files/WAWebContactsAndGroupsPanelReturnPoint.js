__d(
  "WAWebContactsAndGroupsPanelReturnPoint",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      var n = document.activeElement,
        r = n != null && e.contains(n) ? n : t;
      return { focusKey: r == null ? null : s(e, r), scrollTop: e.scrollTop };
    }
    function l(e, t) {
      e.scrollTop = t.scrollTop;
      var n = u(e, t.focusKey);
      n != null
        ? n.focus({ preventScroll: !0 })
        : e.focus({ preventScroll: !0 });
    }
    function s(e, t) {
      var n,
        r = t.closest("[data-testid]");
      if (!(r instanceof HTMLElement) || r === e || !e.contains(r)) return null;
      var o = (n = r.getAttribute("data-testid")) != null ? n : "";
      return { index: c(e, o).indexOf(r), testid: o, text: r.textContent };
    }
    function u(e, t) {
      if (t == null) return null;
      var n = t.index,
        r = t.testid,
        o = t.text,
        a = null,
        i = 1 / 0;
      return (
        c(e, r).forEach(function (e, t) {
          var r = Math.abs(t - n);
          e.textContent === o && r < i && ((a = e), (i = r));
        }),
        a
      );
    }
    function c(e, t) {
      var n = [];
      return (
        e.querySelectorAll("[data-testid]").forEach(function (e) {
          e instanceof HTMLElement &&
            e.getAttribute("data-testid") === t &&
            n.push(e);
        }),
        n
      );
    }
    ((i.getPanelReturnPoint = e), (i.restorePanelReturnPoint = l));
  },
  66,
);
