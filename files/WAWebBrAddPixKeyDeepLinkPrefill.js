__d(
  "WAWebBrAddPixKeyDeepLinkPrefill",
  ["WAWebUserPrefsTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 25,
      u = 100,
      c = 64,
      d = new Map([
        [
          (e = o("WAWebUserPrefsTypes")).PixKeyType.CPF,
          { maxLength: 14, shape: /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/ },
        ],
        [
          e.PixKeyType.CNPJ,
          { maxLength: 18, shape: /^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/ },
        ],
        [e.PixKeyType.PHONE, { maxLength: 15, shape: /^\+55\d{10,11}$/ }],
        [e.PixKeyType.EMAIL, { maxLength: 77, shape: /^[^@\s]+@[^@\s]+$/ }],
        [
          e.PixKeyType.EVP,
          {
            maxLength: 36,
            shape:
              /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
          },
        ],
      ]),
      m =
        /(?:[\0-\x1F\x7F-\x9F\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u2028-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F])/,
      p = /^[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]+$/,
      _ = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
    function f(e) {
      try {
        return decodeURIComponent(e);
      } catch (e) {
        return null;
      }
    }
    function g(e, t) {
      for (var n of e.split("&")) {
        var r = n.indexOf("=");
        if (r !== -1 && f(n.slice(0, r)) === t) return f(n.slice(r + 1));
      }
      return null;
    }
    function h(e, t, n) {
      var r = e.get(t);
      return r == null || r === "" || r.length > n || m.test(r) || p.test(r)
        ? null
        : r;
    }
    function y(e) {
      var t = e.get("type");
      return t == null || t === ""
        ? null
        : o("WAWebUserPrefsTypes").PixKeyType.cast(t.toUpperCase());
    }
    function C(e, t) {
      var n = d.get(t),
        r = g(e, "value");
      return n == null ||
        r == null ||
        r.length > n.maxLength ||
        m.test(r) ||
        _.test(r) ||
        !n.shape.test(r)
        ? null
        : r;
    }
    function b(e, t) {
      var n,
        r,
        o,
        a = y(e);
      if (a == null) return null;
      var i = C(t, a);
      return i == null
        ? null
        : {
            bankId: (n = h(e, "bankid", c)) != null ? n : void 0,
            bankName: (r = h(e, "bankname", u)) != null ? r : void 0,
            keyType: a,
            name: (o = h(e, "name", s)) != null ? o : void 0,
            value: i,
          };
    }
    l.parseAddPixKeyPrefill = b;
  },
  98,
);
