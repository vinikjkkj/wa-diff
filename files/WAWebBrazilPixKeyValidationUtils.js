__d(
  "WAWebBrazilPixKeyValidationUtils",
  ["WAWebValidationUtils"],
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
    function u(e) {
      var t = 14,
        n = 9,
        r = 2,
        o = 10,
        a = 11,
        i = 0,
        l = 12,
        s = 13,
        u = e.replace(/\D/g, "");
      if (u.length !== t) return !1;
      for (
        var c = function (t, n) {
            var e = (t * o) % a;
            return ((e === o || e === a) && (e = i), e === n);
          },
          d = 0,
          m = r,
          p = u.length - 3;
        p >= 0;
        p--
      )
        ((d += parseInt(u[p], 10) * m), (m = m === n ? r : m + 1));
      var _ = parseInt(u[l], 10);
      if (c(d, _)) {
        ((d = 0), (m = r));
        for (var f = u.length - 2; f >= 0; f--)
          ((d += parseInt(u[f], 10) * m), (m = m === n ? r : m + 1));
        var g = parseInt(u[s], 10);
        return c(d, g);
      }
      return !1;
    }
    function c(t, n) {
      if (n == null || n.trim().length === 0) return !1;
      switch (t) {
        case "PHONE":
          return e(n);
        case "CPF":
          return s(n);
        case "EMAIL":
          return o("WAWebValidationUtils").validateEmail(n);
        case "CNPJ":
          return u(n);
        case "EVP":
          return o("WAWebValidationUtils").validateUUID(n);
        default:
          return !1;
      }
    }
    function d(e) {
      return !(e == null || e.trim() === "" || e.match(/[^\w\- ]/));
    }
    ((l.isValidPhoneNumber = e),
      (l.validateCPF = s),
      (l.validateCNPJ = u),
      (l.validatePixKey = c),
      (l.isPixDisplayNameValid = d));
  },
  98,
);
