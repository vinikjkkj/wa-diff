__d(
  "WAWebBrazilPixKeyValidationUtils",
  ["WAWebValidationUtils", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = /\+55\d{10,11}$/;
      return t.test(e);
    }
    function s(e) {
      var t = /^[0-9.-]+$/;
      if (!t.test(e)) return !1;
      var n = e
        .replace(/[^0-9]/g, "")
        .split("")
        .map(Number);
      if (n.length !== 11 || new Set(n).size <= 1) return !1;
      var r = n.slice(0, 9).reduce(function (e, t, n) {
          return e + t * (10 - n);
        }, 0),
        o = ((r * 10) % 11) % 10;
      if (o !== n[9]) return !1;
      var a = n.slice(0, 10).reduce(function (e, t, n) {
          return e + t * (11 - n);
        }, 0),
        i = ((a * 10) % 11) % 10;
      return i === n[10];
    }
    var u = /^[0-9A-Z]$/,
      c = /[.\-/\s]/g,
      d = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
      m = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    function p(e) {
      return e.charCodeAt(0) - 48;
    }
    function _(e) {
      for (var t = 0, n = 0; n < d.length; n++) t += d[n] * e[n];
      t += e[12];
      var r = t % 11;
      if (!(r === 0 || (e[12] === 0 && r === 1))) return !1;
      for (var o = 0, a = 0; a < m.length; a++) o += m[a] * e[a];
      o += e[13];
      var i = o % 11;
      return i === 0 || (e[13] === 0 && i === 1);
    }
    function f(e) {
      var t,
        n = (t = r("justknobx")._("3897")) != null ? t : !1,
        o = n ? e.replace(c, "").toUpperCase() : e.replace(/\D/g, "");
      if (o.length !== 14) return !1;
      if (n) {
        for (var a = 0; a < 12; a++) if (!u.test(o[a])) return !1;
        if (!/^\d$/.test(o[12]) || !/^\d$/.test(o[13])) return !1;
      }
      var i = o.split("").map(function (e) {
        return n ? p(e) : parseInt(e, 10);
      });
      return _(i);
    }
    function g(t, n) {
      if (n == null || n.trim().length === 0) return !1;
      switch (t) {
        case "PHONE":
          return e(n);
        case "CPF":
          return s(n);
        case "EMAIL":
          return o("WAWebValidationUtils").validateEmail(n);
        case "CNPJ":
          return f(n);
        case "EVP":
          return o("WAWebValidationUtils").validateUUID(n);
        default:
          return !1;
      }
    }
    function h(e) {
      return !(e == null || e.trim() === "" || e.match(/[^\w\- ]/));
    }
    ((l.isValidPhoneNumber = e),
      (l.validateCPF = s),
      (l.validateCNPJ = f),
      (l.validatePixKey = g),
      (l.isPixDisplayNameValid = h));
  },
  98,
);
