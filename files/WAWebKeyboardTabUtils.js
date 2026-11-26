__d(
  "WAWebKeyboardTabUtils",
  ["$InternalEnum", "WAWebBoolFunc", "tabbable"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored([
        "CUSTOM",
        "CUSTOM_SELECTOR",
        "TABBABLE",
      ]),
      s = n("$InternalEnum").Mirrored(["FORWARD", "BACKWARD"]),
      u = 1,
      c = new Set(["auto", "clip", "hidden", "overlay", "scroll"]);
    function d(t) {
      var n = t.container,
        r = t.customSelector,
        a = t.focusType;
      return a === e.TABBABLE
        ? {
            candidateElements: f(
              n,
              o("tabbable").tabbable(n),
              n.ownerDocument.activeElement,
            ),
            isElementTabbable: function (t) {
              return !0;
            },
            skipOccluded: !1,
          }
        : a === e.CUSTOM_SELECTOR && r != null
          ? {
              candidateElements: Array.from(n.querySelectorAll(r)),
              isElementTabbable: function (t) {
                return !0;
              },
              skipOccluded: !1,
            }
          : {
              candidateElements: Array.from(
                n.querySelectorAll("[data-tab]"),
              ).sort(function (e, t) {
                return (
                  (parseInt(String(e.getAttribute("data-tab")), 10) || 0) -
                  (parseInt(String(t.getAttribute("data-tab")), 10) || 0)
                );
              }),
              isElementTabbable: v,
              skipOccluded: !0,
            };
    }
    var m = 'input[type="radio"][name]:not([name=""])',
      p = m + ":not(:checked)";
    function _(e, t) {
      return (
        e.matches(m) &&
        e.getAttribute("name") === t.getAttribute("name") &&
        e.closest("form") === t.closest("form")
      );
    }
    function f(e, t, n) {
      var r =
          n instanceof HTMLInputElement && n.type === "radio" && e.contains(n)
            ? n
            : null,
        o = new Map(),
        a = t.filter(function (e) {
          var t;
          if (r != null) {
            if (e === r) return !0;
            if (_(e, r)) return !1;
          }
          if (!e.matches(p)) return !0;
          var n = e.closest("form"),
            a = String(e.getAttribute("name")),
            i = (t = o.get(n)) != null ? t : new Set();
          o.set(n, i);
          var l = !i.has(a);
          return (i.add(a), l);
        });
      if (r != null && !a.includes(r)) {
        var i = a.findIndex(function (e) {
          return (
            r.compareDocumentPosition(e) === Node.DOCUMENT_POSITION_FOLLOWING
          );
        });
        a.splice(i === -1 ? a.length : i, 0, r);
      }
      return a;
    }
    function g(t, n, r, o) {
      (n === void 0 && (n = e.CUSTOM),
        r === void 0 &&
          (r = function () {
            return !0;
          }));
      var a = d({ container: t, customSelector: o, focusType: n }),
        i = a.candidateElements,
        l = a.isElementTabbable;
      return i.filter(function (e) {
        return l(e) && r(e);
      });
    }
    function h(t, n, r, a, i) {
      var l;
      (n === void 0 && (n = s.FORWARD),
        r === void 0 && (r = e.CUSTOM),
        a === void 0 && (a = o("WAWebBoolFunc").returnTrue));
      var u = d({ container: t, customSelector: i, focusType: r }),
        c = u.candidateElements,
        m = u.isElementTabbable,
        p = u.skipOccluded,
        _ = n === s.FORWARD ? 1 : -1,
        f = y(t, c, _),
        g = function (t) {
          return m(t) && a(t);
        };
      return p &&
        (l = C(c, f, _, function (e) {
          return g(e) && !R(e);
        })) != null
        ? l
        : C(c, f, _, g);
    }
    function y(e, t, n) {
      var r = e.ownerDocument.activeElement;
      if (!r) return 0;
      var o = t.findIndex(function (e) {
          return e.contains(r);
        }),
        a = t.findIndex(function (e) {
          return e === r;
        });
      return (a > 0 && (o = a), o === -1 ? 0 : b(o + n, t.length));
    }
    function C(e, t, n, r) {
      for (var o = 0; o < e.length; o++) {
        var a = e[b(t + o * n, e.length)];
        if (r(a)) return a;
      }
      return null;
    }
    function b(e, t) {
      return (e + t) % t;
    }
    function v(e) {
      if (e.disabled) return !1;
      var t = parseInt(String(e.dataset.tab), 10);
      if (typeof t != "number" || t < 0) return !1;
      var n = e.getAttribute("tabindex");
      return (n != null && parseInt(n, 10) === -1) ||
        e.closest("[inert]") != null
        ? !1
        : !S(e);
    }
    function S(e) {
      if (getComputedStyle(e).visibility === "hidden") return !0;
      for (var t = e; t; ) {
        if (getComputedStyle(t).display === "none") return !0;
        t = t.parentElement;
      }
      return !1;
    }
    function R(e) {
      var t = e.ownerDocument;
      if (!("elementFromPoint" in t) || e.getRootNode() !== t) return !1;
      var n = e.getBoundingClientRect(),
        r = n.height,
        o = n.width,
        a = n.x,
        i = n.y;
      if (
        o === 0 ||
        r === 0 ||
        !E(e, a + o / 2, i + r / 2) ||
        getComputedStyle(e).pointerEvents === "none"
      )
        return !1;
      var l = k(e, { height: r, width: o, x: a, y: i });
      return l == null ? !1 : L(e, l);
    }
    function L(e, t) {
      var n = t.height,
        r = t.width,
        o = t.x,
        a = t.y,
        i = o + u,
        l = o + r - u,
        s = a + u,
        c = a + n - u;
      return (
        E(e, o + r / 2, a + n / 2) &&
        E(e, i, s) &&
        E(e, l, s) &&
        E(e, i, c) &&
        E(e, l, c)
      );
    }
    function E(e, t, n) {
      var r = e.ownerDocument.elementFromPoint(t, n);
      return r == null || r.shadowRoot != null || e.contains(r) || r.contains(e)
        ? !1
        : getComputedStyle(r).opacity !== "0";
    }
    function k(e, t) {
      for (
        var n = t.height,
          r = t.width,
          o = t.x,
          a = t.y,
          i = o,
          l = a,
          s = o + r,
          u = a + n,
          c = e.parentElement;
        c != null;
      ) {
        if (I(c)) {
          var d = c.getBoundingClientRect();
          if (
            ((i = Math.max(i, d.x)),
            (l = Math.max(l, d.y)),
            (s = Math.min(s, d.x + d.width)),
            (u = Math.min(u, d.y + d.height)),
            s <= i || u <= l)
          )
            return null;
        }
        c = c.parentElement;
      }
      return { height: u - l, width: s - i, x: i, y: l };
    }
    function I(e) {
      var t = getComputedStyle(e),
        n = t.overflowX,
        r = t.overflowY;
      return c.has(r) || c.has(n);
    }
    ((l.FocusType = e),
      (l.TabDirection = s),
      (l.getTabbableElements = g),
      (l.getNextTabbableElement = h));
  },
  98,
);
