__d(
  "WAWebBrAddPixKeyDeepLinkPrefill",
  ["WAWebUserPrefsTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 56,
      u = new Map([
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
      c =
        /(?:[\0-\x1F\x7F-\x9F\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u2028-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F])/,
      d = /^[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]+$/,
      m = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
    function p(e, t) {
      return e !== "" && e.length <= t && !c.test(e) && !d.test(e);
    }
    function _(e, t) {
      var n = u.get(t);
      return (
        n != null &&
        e.length <= n.maxLength &&
        !c.test(e) &&
        !m.test(e) &&
        n.shape.test(e)
      );
    }
    ((l.MAX_NAME_LENGTH = s),
      (l.isAcceptableCappedText = p),
      (l.isAcceptablePixKeyValue = _));
  },
  98,
);
