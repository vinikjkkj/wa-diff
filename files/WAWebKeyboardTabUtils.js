__d(
  "WAWebKeyboardTabUtils",
  ["$InternalEnum", "WAWebBoolFunc", "tabbable"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored([
        "CUSTOM",
        "CUSTOM_SELECTOR",
        "TABBABLE",
      ]),
      s = n("$InternalEnum").Mirrored(["FORWARD", "BACKWARD"]);
    function u(t) {
      var n = t.container,
        r = t.customSelector,
        a = t.focusType;
      return a === e.TABBABLE
        ? {
            candidateElements: o("tabbable").tabbable(n),
            isElementTabbable: function (t) {
              return !0;
            },
          }
        : a === e.CUSTOM_SELECTOR && r != null
          ? {
              candidateElements: Array.from(n.querySelectorAll(r)),
              isElementTabbable: function (t) {
                return !0;
              },
            }
          : {
              candidateElements: Array.from(
                n.querySelectorAll("[data-tab]"),
              ).sort(function (e, t) {
                return (
                  (parseInt(e.getAttribute("data-tab"), 10) || 0) -
                  (parseInt(t.getAttribute("data-tab"), 10) || 0)
                );
              }),
              isElementTabbable: p,
            };
    }
    function c(t, n, r, o) {
      (n === void 0 && (n = e.CUSTOM),
        r === void 0 &&
          (r = function () {
            return !0;
          }));
      var a = u({ container: t, customSelector: o, focusType: n }),
        i = a.candidateElements,
        l = a.isElementTabbable;
      return i.filter(function (e) {
        return l(e) && r(e);
      });
    }
    function d(t, n, r, a, i) {
      (n === void 0 && (n = s.FORWARD),
        r === void 0 && (r = e.CUSTOM),
        a === void 0 && (a = o("WAWebBoolFunc").returnTrue));
      var l = u({ container: t, customSelector: i, focusType: r }),
        c = l.candidateElements,
        d = l.isElementTabbable,
        p = n === s.FORWARD ? 1 : -1,
        _ = 0,
        f = t.ownerDocument.activeElement;
      if (f) {
        var g = c.findIndex(function (e) {
            return e.contains(f);
          }),
          h = c.findIndex(function (e) {
            return e === f;
          });
        (h > 0 && (g = h), (_ = g === -1 ? 0 : m(g + p, c.length)));
      }
      for (var y = 0; y < c.length; y++) {
        var C = m(_ + y * p, c.length),
          b = c[C];
        if (d(b) && a(b)) return b;
      }
      return null;
    }
    function m(e, t) {
      return (e + t) % t;
    }
    function p(e) {
      if (e.disabled) return !1;
      var t = parseInt(e.dataset.tab, 10);
      if (typeof t != "number" || t < 0) return !1;
      var n = e.getAttribute("tabindex");
      return (n != null && parseInt(n, 10) === -1) ||
        e.closest("[inert]") != null
        ? !1
        : !_(e);
    }
    function _(e) {
      if (getComputedStyle(e).visibility === "hidden") return !0;
      for (var t = e; t; ) {
        if (getComputedStyle(t).display === "none") return !0;
        t = t.parentElement;
      }
      return !1;
    }
    ((l.FocusType = e),
      (l.TabDirection = s),
      (l.getTabbableElements = c),
      (l.getNextTabbableElement = d));
  },
  98,
);
