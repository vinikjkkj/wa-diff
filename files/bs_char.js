__d(
  "bs_char",
  ["bs_caml_bytes"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e < 0 || e > 255)
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Char.chr",
          Error: new Error(),
        };
      return e;
    }
    function l(e) {
      var t = 0;
      if (e >= 40) {
        if (e === 92) return "\\\\";
        t = e >= 127 ? 1 : 2;
      } else if (e >= 32) {
        if (e >= 39) return "\\'";
        t = 2;
      } else if (e >= 14) t = 1;
      else
        switch (e) {
          case 8:
            return "\\b";
          case 9:
            return "\\t";
          case 10:
            return "\\n";
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 11:
          case 12:
            t = 1;
            break;
          case 13:
            return "\\r";
        }
      switch (t) {
        case 1:
          var r = [0, 0, 0, 0];
          return (
            (r[0] = 92),
            (r[1] = (48 + ((e / 100) | 0)) | 0),
            (r[2] = (48 + (((e / 10) | 0) % 10)) | 0),
            (r[3] = (48 + (e % 10)) | 0),
            n("bs_caml_bytes").bytes_to_string(r)
          );
        case 2:
          var o = [0];
          return ((o[0] = e), n("bs_caml_bytes").bytes_to_string(o));
      }
    }
    function s(e) {
      return (e >= 65 && e <= 90) ||
        (e >= 192 && e <= 214) ||
        (e >= 216 && e <= 222)
        ? (e + 32) | 0
        : e;
    }
    function u(e) {
      return (e >= 97 && e <= 122) ||
        (e >= 224 && e <= 246) ||
        (e >= 248 && e <= 254)
        ? (e - 32) | 0
        : e;
    }
    function c(e) {
      return e >= 65 && e <= 90 ? (e + 32) | 0 : e;
    }
    function d(e) {
      return e >= 97 && e <= 122 ? (e - 32) | 0 : e;
    }
    function m(e, t) {
      return (e - t) | 0;
    }
    function p(e, t) {
      return ((e - t) | 0) === 0;
    }
    ((i.chr = e),
      (i.escaped = l),
      (i.lowercase = s),
      (i.uppercase = u),
      (i.lowercase_ascii = c),
      (i.uppercase_ascii = d),
      (i.compare = m),
      (i.equal = p));
  },
  null,
);
