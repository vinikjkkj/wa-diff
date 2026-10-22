__d(
  "WAWebVoipPermissionButtonCover",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 5,
      l = 1e3,
      s = "#app",
      u = [
        ["backdrop-filter", "none"],
        ["filter", "none"],
        ["mix-blend-mode", "normal"],
        ["opacity", "1"],
        ["rotate", "none"],
        ["scale", "none"],
      ];
    function c(e, t) {
      return (
        t === void 0 && (t = e.getBoundingClientRect()),
        _(e) ? "distorted" : p(f(e, t))
      );
    }
    function d(e, t) {
      t === void 0 && (t = e.getBoundingClientRect());
      var n = new Map();
      for (var r of f(e, t))
        if (r.closest(s) != null) {
          var o,
            a = g(r, e);
          n.set(a, ((o = n.get(a)) != null ? o : 0) + 1);
        }
      if (n.size === 0) return null;
      var i = v(t).length;
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
    function m(e) {
      var t = null,
        n = !1,
        r = Date.now(),
        o = R(e, function (e) {
          e !== t && ((n = t === !1), (t = e), (r = Date.now()));
        });
      return {
        read: function () {
          var e = Date.now() - r;
          return { msSinceChange: e, visibility: L(t, n, e) };
        },
        stop: function () {
          return o == null ? void 0 : o.disconnect();
        },
      };
    }
    function p(e) {
      return e.some(function (e) {
        return e.closest(s) == null;
      })
        ? "occluded"
        : e.length > 0
          ? "app_layer"
          : null;
    }
    function _(e) {
      var t = e.ownerDocument.defaultView;
      if (t == null) return !1;
      for (
        var n = function () {
            var e = t.getComputedStyle(o);
            if (
              u.some(function (t) {
                var n = t[0],
                  r = t[1];
                return !E(e.getPropertyValue(n), r);
              }) ||
              !k(e.getPropertyValue("transform"))
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
    function f(t, n) {
      var r,
        o = t.ownerDocument;
      if (n.width <= 2 * e || n.height <= 2 * e) return [];
      var a = o.createElement("style");
      ((a.textContent = "* { pointer-events: auto !important; }"),
        (r = o.head) == null || r.appendChild(a));
      try {
        return v(n).flatMap(function (e) {
          var n = e[0],
            r = e[1],
            a = b(t, o.elementsFromPoint(n, r));
          return a == null ? [] : [a];
        });
      } finally {
        a.remove();
      }
    }
    function g(e, t) {
      var n,
        r = e.ownerDocument.defaultView;
      return [
        "testid=" + y(h(e, "data-testid")),
        "role=" + h(e, "role"),
        "tag=" + e.tagName.toLowerCase(),
        "z=" + C(e, t),
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
    function h(e, t) {
      var n, r;
      return (n =
        (r = e.closest("[" + t + "]")) == null ? void 0 : r.getAttribute(t)) !=
        null
        ? n
        : "none";
    }
    function y(e) {
      return e.replace(/[0-9a-z]*\d[0-9a-z]*/gi, "#");
    }
    function C(e, t) {
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
    function b(e, t) {
      for (var n of t) {
        if (n.contains(e) || e.contains(n)) return null;
        if (!S(n)) return n;
      }
      return null;
    }
    function v(t) {
      var n = [t.left + e, t.left + t.width / 2, t.right - e],
        r = [t.top + e, t.top + t.height / 2, t.bottom - e];
      return n.flatMap(function (e) {
        return r.map(function (t) {
          return [e, t];
        });
      });
    }
    function S(e) {
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
    function R(e, t) {
      var n,
        r =
          (n = e.ownerDocument.defaultView) == null
            ? void 0
            : n.IntersectionObserver;
      if (typeof r != "function") return null;
      var o = new r(
        function (e) {
          var n = e[e.length - 1];
          n != null && t(Reflect.get(n, "isVisible") === !0);
        },
        { delay: 100, threshold: 1, trackVisibility: !0 },
      );
      return (o.observe(e), o);
    }
    function L(e, t, n) {
      return e == null
        ? "unknown"
        : e === !1
          ? "hidden"
          : e === !0
            ? t && n < l
              ? "just_visible"
              : "visible"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function E(e, t) {
      return e === "" || e === t;
    }
    function k(e) {
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
    ((i.findPermissionButtonCover = c),
      (i.describeAppLayerCover = d),
      (i.watchPermissionButtonVisibility = m));
  },
  66,
);
