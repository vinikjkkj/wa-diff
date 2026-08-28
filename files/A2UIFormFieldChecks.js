__d(
  "A2UIFormFieldChecks",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      if (!Array.isArray(e)) return [];
      var t = [];
      for (var n of e) {
        var r = typeof n == "object" && n != null ? n : {},
          o = typeof r.call == "string" ? r.call : null;
        if (o != null) {
          var a = { call: o };
          if (Array.isArray(r.args)) {
            var i = [];
            for (var l of r.args)
              (typeof l == "string" || typeof l == "number") && i.push(l);
            a.args = i;
          }
          (typeof r.message == "string" &&
            r.message !== "" &&
            (a.message = r.message),
            t.push(a));
        }
      }
      return t;
    }
    function u(e, t) {
      var n = t.filter(function (e) {
        return typeof e == "string";
      });
      if (n.length === 0) return !0;
      var r = e.name.toLowerCase(),
        o = e.type.toLowerCase();
      return n.some(function (e) {
        var t = String(e).toLowerCase();
        return t === ""
          ? !1
          : t.startsWith(".")
            ? r.endsWith(t)
            : t.endsWith("/*")
              ? o.startsWith(t.slice(0, -1))
              : o === t;
      });
    }
    function c(e, t) {
      for (var n of e) {
        var r = !1;
        if (n.call === "maxSizeBytes") {
          var o,
            a = (o = n.args) == null ? void 0 : o[0];
          r = typeof a == "number" && t.size > a;
        }
        if (r) {
          var i;
          return (i = n.message) != null ? i : d(n.call);
        }
      }
      return null;
    }
    function d(e) {
      return e === "maxSizeBytes"
        ? s._(/*BTDS*/ "That file is too large.")
        : s._(/*BTDS*/ "There was a problem uploading this file.");
    }
    var m = ["image/jpeg", "image/png"];
    function p(e) {
      return u(e, m) ? null : s._(/*BTDS*/ "Unsupported file type.");
    }
    var _ = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    function f(e) {
      if (!Array.isArray(e)) return [];
      var t = [];
      for (var n of e) {
        var r = typeof n == "object" && n != null ? n : {},
          o =
            typeof r.condition == "object" && r.condition != null
              ? r.condition
              : {},
          a = typeof o.call == "string" ? o.call : null;
        if (a != null) {
          var i = { call: a },
            l = typeof o.args == "object" && o.args != null ? o.args : {};
          (typeof l.pattern == "string" && (i.args = { pattern: l.pattern }),
            typeof r.message == "string" &&
              r.message !== "" &&
              (i.message = r.message),
            t.push(i));
        }
      }
      return t;
    }
    function g(e, t) {
      var n = Array.isArray(t) ? t.join(", ") : t;
      for (var r of e)
        if (h(r, t, n)) {
          var o;
          return (o = r.message) != null ? o : y(r.call);
        }
      return null;
    }
    function h(e, t, n) {
      switch (e.call) {
        case "required":
          return Array.isArray(t) ? t.length === 0 : n.trim() === "";
        case "email":
          return n !== "" && !_.test(n);
        case "regex": {
          var r,
            o = (r = e.args) == null ? void 0 : r.pattern;
          if (o == null || n === "") return !1;
          try {
            return !new RegExp(o).test(n);
          } catch (e) {
            return !1;
          }
        }
        default:
          return !1;
      }
    }
    function y(e) {
      return e === "required"
        ? s._(/*BTDS*/ "This field is required.")
        : e === "email"
          ? s._(/*BTDS*/ "Enter a valid email address.")
          : s._(/*BTDS*/ "Enter a valid value.");
    }
    ((l.parseFileChecks = e),
      (l.runFileChecks = c),
      (l.A2UI_FILE_DEFAULT_ACCEPT = m),
      (l.runDefaultFileChecks = p),
      (l.parseFieldChecks = f),
      (l.runFieldChecks = g));
  },
  226,
);
