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
        c(e) ? "distorted" : d(e, t)
      );
    }
    function c(e) {
      var t = e.ownerDocument.defaultView;
      if (t == null) return !1;
      for (
        var n = function () {
            var e = t.getComputedStyle(o);
            if (
              s.some(function (t) {
                var n = t[0],
                  r = t[1];
                return !f(e.getPropertyValue(n), r);
              }) ||
              !g(e.getPropertyValue("transform"))
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
    function d(t, n) {
      var r,
        o = t.ownerDocument;
      if (n.width <= 2 * e || n.height <= 2 * e) return null;
      var a = o.createElement("style");
      ((a.textContent = "* { pointer-events: auto !important; }"),
        (r = o.head) == null || r.appendChild(a));
      try {
        var i = !1;
        for (var s of p(n)) {
          var u = s[0],
            c = s[1],
            d = m(t, o.elementsFromPoint(u, c));
          if (d != null && d.closest(l) == null) return "occluded";
          i || (i = d != null);
        }
        return i ? "app_layer" : null;
      } finally {
        a.remove();
      }
    }
    function m(e, t) {
      for (var n of t) {
        if (n === e || e.contains(n)) return null;
        if (!_(n)) return n;
      }
      return null;
    }
    function p(t) {
      var n = [t.left + e, t.left + t.width / 2, t.right - e],
        r = [t.top + e, t.top + t.height / 2, t.bottom - e];
      return n.flatMap(function (e) {
        return r.map(function (t) {
          return [e, t];
        });
      });
    }
    function _(e) {
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
    function f(e, t) {
      return e === "" || e === t;
    }
    function g(e) {
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
    i.findPermissionButtonCover = u;
  },
  66,
);
