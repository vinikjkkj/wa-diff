__d(
  "WAWebVoipPermissionButtonCover",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 5,
      l = "#app",
      s = [
        ["backdrop-filter", "none"],
        ["filter", "none"],
        ["mix-blend-mode", "normal"],
        ["opacity", "1"],
        ["rotate", "none"],
        ["scale", "none"],
      ];
    function u(e, t) {
      return (
        t === void 0 && (t = e.getBoundingClientRect()),
        m(e) ? "distorted" : d(p(e, t))
      );
    }
    function c(e, t) {
      t === void 0 && (t = e.getBoundingClientRect());
      var n = new Map();
      for (var r of p(e, t))
        if (r.closest(l) != null) {
          var o,
            a = _(r, e);
          n.set(a, ((o = n.get(a)) != null ? o : 0) + 1);
        }
      if (n.size === 0) return null;
      var i = C(t).length;
      return Array.from(n)
        .sort(function (e, t) {
          var n = e[1],
            r = t[1];
          return r - n;
        })
        .map(function (e) {
          var t = e[0],
            n = e[1];
          return t + " points=" + n + "/" + i;
        })
        .join("; ");
    }
    function d(e) {
      return e.some(function (e) {
        return e.closest(l) == null;
      })
        ? "occluded"
        : e.length > 0
          ? "app_layer"
          : null;
    }
    function m(e) {
      var t = e.ownerDocument.defaultView;
      if (t == null) return !1;
      for (
        var n = function () {
            var e = t.getComputedStyle(o);
            if (
              s.some(function (t) {
                var n = t[0],
                  r = t[1];
                return !v(e.getPropertyValue(n), r);
              }) ||
              !S(e.getPropertyValue("transform"))
            )
              return { v: !0 };
          },
          r,
          o = e;
        o != null;
        o = o.parentElement
      )
        if (((r = n()), r)) return r.v;
      return !1;
    }
    function p(t, n) {
      var r,
        o = t.ownerDocument;
      if (n.width <= 2 * e || n.height <= 2 * e) return [];
      var a = o.createElement("style");
      ((a.textContent = "* { pointer-events: auto !important; }"),
        (r = o.head) == null || r.appendChild(a));
      try {
        return C(n).flatMap(function (e) {
          var n = e[0],
            r = e[1],
            a = y(t, o.elementsFromPoint(n, r));
          return a == null ? [] : [a];
        });
      } finally {
        a.remove();
      }
    }
    function _(e, t) {
      var n,
        r = e.ownerDocument.defaultView;
      return [
        "testid=" + g(f(e, "data-testid")),
        "role=" + f(e, "role"),
        "tag=" + e.tagName.toLowerCase(),
        "z=" + h(e, t),
        "pointer=" +
          ((n =
            r == null
              ? void 0
              : r.getComputedStyle(e).getPropertyValue("pointer-events")) !=
          null
            ? n
            : ""),
      ].join(" ");
    }
    function f(e, t) {
      var n, r;
      return (n =
        (r = e.closest("[" + t + "]")) == null ? void 0 : r.getAttribute(t)) !=
        null
        ? n
        : "none";
    }
    function g(e) {
      return e.replace(/[0-9a-z]*\d[0-9a-z]*/gi, "#");
    }
    function h(e, t) {
      for (
        var n = e.ownerDocument.defaultView, r = "auto", o = e;
        o != null && !o.contains(t);
        o = o.parentElement
      ) {
        var a =
          n == null
            ? void 0
            : n.getComputedStyle(o).getPropertyValue("z-index");
        a != null && a !== "" && a !== "auto" && (r = a);
      }
      return r;
    }
    function y(e, t) {
      for (var n of t) {
        if (n === e || e.contains(n)) return null;
        if (!b(n)) return n;
      }
      return null;
    }
    function C(t) {
      var n = [t.left + e, t.left + t.width / 2, t.right - e],
        r = [t.top + e, t.top + t.height / 2, t.bottom - e];
      return n.flatMap(function (e) {
        return r.map(function (t) {
          return [e, t];
        });
      });
    }
    function b(e) {
      for (
        var t = e.ownerDocument.defaultView, n = e;
        n != null;
        n = n.parentElement
      )
        if (
          (t == null
            ? void 0
            : t.getComputedStyle(n).getPropertyValue("opacity")) === "0"
        )
          return !0;
      return !1;
    }
    function v(e, t) {
      return e === "" || e === t;
    }
    function S(e) {
      if (e === "" || e === "none") return !0;
      var t = /^matrix\(([^)]*)\)$/.exec(e);
      if (t == null) return !1;
      var n = t[1].split(",").map(Number),
        r = n[0],
        o = n[1],
        a = n[2],
        i = n[3];
      return o === 0 && a === 0 && r === i && r >= 1;
    }
    ((i.findPermissionButtonCover = u), (i.describeAppLayerCover = c));
  },
  66,
);
