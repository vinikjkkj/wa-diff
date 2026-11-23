__d(
  "WAMFlowsCTWAInputValidation",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = { INVALID: "invalid", VALID: "valid" },
      l = {
        cc_colombia: /^\d{2,10}$/,
        ci_ecuador: /^\d{10}$/,
        cnpj_brazil: /^\d{14}$/,
        cpf_brazil: /^\d{11}$/,
        dni_argentina: /^\d{7,8}$/,
        dni_peru: /^\d{8}$/,
        rfc_mexico: /^[A-Z\u00D1&]{4}\d{6}-[A-Z0-9]{3}$/,
        rut_chile: /^[0-9]{7,8}[0-9K]$/,
      };
    function s(e, t) {
      switch (e) {
        case "rut_chile":
          return t.replace(/[^0-9Kk]/g, "").toUpperCase();
        case "rfc_mexico":
          return t.toUpperCase();
        default:
          return t.replace(/\D/g, "");
      }
    }
    function u(t, n) {
      var r = l[t];
      if (r == null) return e.VALID;
      var o = s(t, n);
      return r.test(o) ? e.VALID : e.INVALID;
    }
    function c(e) {
      var t = l,
        n = t[e];
      return n != null ? n.source : null;
    }
    var d = {
      cc_colombia: function (t) {
        var e = t.replace(/\D/g, "").replace(/^0+/, "");
        return e.length > 10 ? e.substr(0, 10) : e;
      },
      ci_ecuador: function (t) {
        var e = t.replace(/\D/g, "");
        return e.length >= 10 ? e.replace(/(\d{9})(\d{1})\d*/, "$1-$2") : e;
      },
      cnpj_brazil: function (t) {
        var e = t.replace(/\D/g, ""),
          n = e.length;
        return n >= 13
          ? e.replace(
              /(\d{2})(\d{3})(\d{3})(\d{4})(\d{0,2})\d*/,
              "$1.$2.$3/$4-$5",
            )
          : n >= 9
            ? e.replace(/(\d{2})(\d{3})(\d{3})(\d*)/, "$1.$2.$3/$4")
            : n >= 6
              ? e.replace(/(\d{2})(\d{3})(\d*)/, "$1.$2.$3")
              : n >= 3
                ? e.replace(/(\d{2})(\d*)/, "$1.$2")
                : e;
      },
      cpf_brazil: function (t) {
        var e = t.replace(/\D/g, ""),
          n = e.length,
          r = e;
        return (
          n >= 11
            ? (r = e.replace(/(\d{3})(\d{3})(\d{3})(\d{2})\d*/, "$1.$2.$3-$4"))
            : n >= 10
              ? (r = e.replace(/(\d{3})(\d{3})(\d{3})(\d*)/, "$1.$2.$3-$4"))
              : n >= 7
                ? (r = e.replace(/(\d{3})(\d{3})(\d*)/, "$1.$2.$3"))
                : n >= 4 && (r = e.replace(/(\d{3})(\d*)/, "$1.$2")),
          r
        );
      },
      dni_argentina: function (t) {
        var e = t.replace(/\D/g, "").replace(/^0+/, "");
        return e.length > 8 ? e.substr(0, 8) : e;
      },
      dni_peru: function (t) {
        var e = t.replace(/\D/g, "");
        return e.length > 8 ? e.substr(0, 8) : e;
      },
      rfc_mexico: function (t) {
        var e = t.toUpperCase().replace(/[^\dA-Z\u02DC\u00D1&]*/g, ""),
          n = e.length;
        if (n <= 4) return e.replace(/[\d]*/g, "");
        var r = e.slice(0, 4).replace(/[\d]*/g, ""),
          o = e.slice(4, n > 10 ? 10 : n).replace(/\D/g, "");
        if (n <= 10) return r + o;
        var a = e.slice(10, n > 13 ? 13 : n).replace(/&/g, ""),
          i = a.length;
        if (i === 0) return r + o;
        var l = r + o + "-" + a.slice(0, 2);
        if (i === 3) {
          var s = a[2];
          ((s >= "0" && s <= "9") || s === "A") && (l += s);
        }
        return l;
      },
      rut_chile: function (t) {
        var e = t
          .replace(/[^0-9Kk]/g, "")
          .replace(/^0+/, "")
          .toUpperCase();
        e.match(/\d+K\d{1}$/)
          ? (e = e.slice(0, -1))
          : e.match(/K(.)/)
            ? (e = e.replace(/K(.)/, "$1"))
            : e.length > 9 && (e = e.slice(0, -1));
        var n = e.length,
          r = e;
        return (
          n > 7
            ? (r = e.replace(/(\d*)(\d{3})(\d{3})(\d{1}|K{1})/, "$1.$2.$3-$4"))
            : n > 4
              ? (r = e.replace(/(\d*)(\d{3})(\d{1}|K{1})/, "$1.$2-$3"))
              : n > 1 && (r = e.replace(/(\d*)(\d{1}|K{1})/, "$1-$2")),
          r
        );
      },
    };
    function m(e) {
      return e in d;
    }
    ((i.ValidationStatus = e),
      (i.validateNationalId = u),
      (i.getNationalIdPatternString = c),
      (i.formatNationalId = d),
      (i.hasFormatter = m));
  },
  66,
);
