__d(
  "WAWebKeyboardTabUtils",
  [
    "$InternalEnum",
    "WAWebBoolFunc",
    "WAWebMiscGatingUtils",
    "lodash",
    "tabbable",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored([
        "CUSTOM",
        "CUSTOM_SELECTOR",
        "TABBABLE",
      ]),
      s = n("$InternalEnum").Mirrored(["FORWARD", "BACKWARD"]);
    function u(t, n, a) {
      return n === e.TABBABLE
        ? {
            candidateElements: o("tabbable").tabbable(t),
            isElementTabbable: function (t) {
              return !0;
            },
          }
        : n === e.CUSTOM_SELECTOR && a != null
          ? {
              candidateElements: Array.from(t.querySelectorAll(a)),
              isElementTabbable: function (t) {
                return !0;
              },
            }
          : {
              candidateElements: r("lodash").sortBy(
                Array.from(t.querySelectorAll("[data-tab]")),
                function (e) {
                  return parseInt(e.getAttribute("data-tab"), 10) || 0;
                },
              ),
              isElementTabbable: p,
            };
    }
    function c(t, n, r, o) {
      (n === void 0 && (n = e.CUSTOM),
        r === void 0 &&
          (r = function () {
            return !0;
          }));
      var a = u(t, n, o),
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
      var l = u(t, r, i),
        c = l.candidateElements,
        d = l.isElementTabbable,
        p = n === s.FORWARD ? 1 : -1,
        _ = 0,
        f = document,
        g = f.activeElement;
      if (g) {
        var h = c.findIndex(function (e) {
          return e.contains(g);
        });
        if (o("WAWebMiscGatingUtils").messageListA11yRedesignEnabled()) {
          var y = c.findIndex(function (e) {
            return e === g;
          });
          y > 0 && (h = y);
        }
        _ = h === -1 ? 0 : m(h + p, c.length);
      }
      for (var C = 0; C < c.length; C++) {
        var b = m(_ + C * p, c.length),
          v = c[b];
        if (d(v) && a(v)) return v;
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
      return n != null && parseInt(n, 10) === -1 ? !1 : !_(e);
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
