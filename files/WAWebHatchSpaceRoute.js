__d(
  "WAWebHatchSpaceRoute",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 2048,
      l = 32,
      s = 3,
      u = /^[A-Za-z0-9._-]{1,128}$/,
      c = /^(?:\.?\/)+/,
      d = 32,
      m = 127,
      p = Object.freeze({
        method: "GET",
        query: null,
        route: "bundle",
        subpath: "",
      });
    function _(e) {
      return u.test(e) && !e.startsWith(".") ? e : null;
    }
    function f(t, n) {
      if (t.length > e) return null;
      var r = g(t),
        o = r[0],
        a = r[1];
      if (!h(o, a) || !y(o)) return null;
      var i = C(o);
      if (!b(i)) return null;
      var l = x(i);
      return l != null && l.method === n.toUpperCase()
        ? babelHelpers.extends({}, l, { query: a, subpath: i })
        : null;
    }
    function g(e) {
      var t = e.split("#", 1)[0],
        n = t.indexOf("?");
      if (n < 0) return [t, null];
      var r = t.slice(n + 1);
      return [t.slice(0, n), r === "" ? null : r];
    }
    function h(e, t) {
      return !I(e, D) && (t == null || (!I(t, D) && !L(t)));
    }
    function y(e) {
      return !e.includes("\\") && !e.includes("://") && !e.startsWith("//");
    }
    function C(e) {
      var t = e.replace(c, ""),
        n = t
          .split("/")
          .filter(function (e) {
            return e !== "";
          })
          .join("/");
      return t.endsWith("/") && n !== "" ? n + "/" : n;
    }
    function b(e) {
      var t = v(e);
      if (t == null) return !1;
      var n = S(e, t);
      return (
        n != null &&
        !n.some(E) &&
        n.every(function (e) {
          return (
            e.split("/").filter(function (e) {
              return e !== "";
            }).length <= l
          );
        })
      );
    }
    function v(e) {
      try {
        return decodeURIComponent(e);
      } catch (e) {
        return null;
      }
    }
    function S(e, t) {
      for (var n = [e, t], r = R(t); r !== n[n.length - 1]; ) {
        if (n.length > s) return null;
        (n.push(r), (r = R(r)));
      }
      return n;
    }
    function R(e) {
      return e.replace(/%([0-9A-Fa-f]{2})/g, function (e, t) {
        return String.fromCharCode(parseInt(t, 16));
      });
    }
    function L(e) {
      var t = v(e),
        n = t == null ? null : S(e, t);
      return (
        n == null ||
        n.some(function (e) {
          return I(e, T);
        })
      );
    }
    function E(e) {
      return (
        e.includes("\\") ||
        I(e, T) ||
        e.split("/").some(function (e) {
          return e === "." || e === "..";
        }) ||
        k(e)
      );
    }
    function k(e) {
      var t = e
        .toLowerCase()
        .split("/")
        .filter(function (e) {
          return e !== "";
        });
      return t.some(function (e, n) {
        return e === "spaces" && t[n + 1] === "cvm";
      });
    }
    function I(e, t) {
      for (var n = 0; n < e.length; n++) if (t(e.charCodeAt(n))) return !0;
      return !1;
    }
    function T(e) {
      return e < d || e === m;
    }
    function D(e) {
      return e <= d || e === m;
    }
    function x(e) {
      return e === ""
        ? { method: "GET", route: "bundle" }
        : e === "icon.jpg" || e === "icon.png"
          ? { method: "GET", route: "icon" }
          : e === "actions"
            ? { method: "POST", route: "actions" }
            : e === "actions_stream"
              ? { method: "POST", route: "actions_stream" }
              : $(e);
    }
    function $(e) {
      return P(e, "assets/")
        ? { method: "GET", route: "asset" }
        : P(e, "blobs/")
          ? { method: "GET", route: "blob" }
          : null;
    }
    function P(e, t) {
      return e.length > t.length && e.startsWith(t);
    }
    ((i.HATCH_SPACE_BUNDLE_PATH = p),
      (i.toHatchSpaceSlug = _),
      (i.resolveHatchSpacePath = f));
  },
  66,
);
