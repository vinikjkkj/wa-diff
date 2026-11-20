__d(
  "WAWebContactsAndGroupsRowRemovalFocus",
  ["WAWebContactsAndGroupsFocus"],
  function (t, n, r, o, a, i, l) {
    var e =
        '[role="dialog"], [role="alertdialog"], [aria-modal="true"], [role="menu"]',
      s = "button, a[href], input, [tabindex]";
    function u(t) {
      var n;
      return t instanceof Element
        ? t.closest(e) != null
        : t instanceof Node &&
            ((n = t.parentElement) == null ? void 0 : n.closest(e)) != null;
    }
    function c(e) {
      return (
        o("WAWebContactsAndGroupsFocus").isFocusLost() ||
        d(document.activeElement, e)
      );
    }
    function d(e, t) {
      return e instanceof HTMLElement && e !== t && e.contains(t);
    }
    function m(e, t, n) {
      for (var r of e) {
        var o = p(t.get(r), n);
        if (o != null) return o;
      }
      return null;
    }
    function p(e, t) {
      var n, r;
      if (e == null) return null;
      var o = Array.from(e.querySelectorAll(s));
      return (n =
        (r = o.find(function (e) {
          return t != null && e.getAttribute("data-testid") === t;
        })) != null
          ? r
          : o.find(function (e) {
              return e.tabIndex >= 0;
            })) != null
        ? n
        : null;
    }
    ((l.isInContactsAndGroupsOverlay = u),
      (l.isFocusLostFromContactsAndGroupsList = c),
      (l.isContactsAndGroupsListFallback = d),
      (l.findContactsAndGroupsRowControl = m));
  },
  98,
);
