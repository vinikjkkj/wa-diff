__d(
  "WAWebContactsAndGroupsRowCheckboxFocus",
  [],
  function (t, n, r, o, a, i) {
    var e = 1,
      l =
        '[role="row"]:not([aria-rowindex="' + e + '"]) input[type="checkbox"]';
    function s(e) {
      var t;
      if (e != null) {
        var n = null;
        for (var r of e.querySelectorAll(l))
          if (r instanceof HTMLElement) {
            if (u(r)) {
              r.focus({ preventScroll: !0 });
              return;
            }
            n != null || (n = r);
          }
        (t = n) == null || t.focus({ preventScroll: !0 });
      }
    }
    function u(e) {
      var t = e.getBoundingClientRect(),
        n = t.bottom,
        r = t.top;
      return r >= 0 && n <= window.innerHeight;
    }
    i.focusFirstRowCheckbox = s;
  },
  66,
);
