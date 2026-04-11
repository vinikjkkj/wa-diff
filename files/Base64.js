__d(
  "Base64",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    function l(t) {
      var n =
        (t.charCodeAt(0) << 16) | (t.charCodeAt(1) << 8) | t.charCodeAt(2);
      return String.fromCharCode(
        e.charCodeAt(n >>> 18),
        e.charCodeAt((n >>> 12) & 63),
        e.charCodeAt((n >>> 6) & 63),
        e.charCodeAt(n & 63),
      );
    }
    var s =
      ">___?456789:;<=_______\0\x07\b	\n\v\f\r______\x1B !\"#$%&'()*+,-./0123";
    function u(e) {
      var t =
        (s.charCodeAt(e.charCodeAt(0) - 43) << 18) |
        (s.charCodeAt(e.charCodeAt(1) - 43) << 12) |
        (s.charCodeAt(e.charCodeAt(2) - 43) << 6) |
        s.charCodeAt(e.charCodeAt(3) - 43);
      return String.fromCharCode(t >>> 16, (t >>> 8) & 255, t & 255);
    }
    var c = {
        encode: function (t) {
          var e = unescape(encodeURI(t)),
            n = (e.length + 2) % 3;
          return (
            (e = (e + "\0\0".slice(n)).replace(/[\s\S]{3}/g, l)),
            e.slice(0, e.length + n - 2) + "==".slice(n)
          );
        },
        decode: function (t) {
          var e = t.replace(/[^A-Za-z0-9+\/]/g, ""),
            n = (e.length + 3) & 3;
          ((e = (e + "AAA".slice(n)).replace(/..../g, u)),
            (e = e.slice(0, e.length + n - 3)));
          try {
            return decodeURIComponent(escape(e));
          } catch (e) {
            var r = new Error("Not valid UTF-8");
            throw (r.stack, r);
          }
        },
        encodeObject: function (t) {
          return c.encode(JSON.stringify(t));
        },
        decodeObject: function (t) {
          return JSON.parse(c.decode(t));
        },
        encodeNums: function (n) {
          return String.fromCharCode.apply(
            String,
            n.map(function (t) {
              return e.charCodeAt(
                (t | -(t > 63 ? 1 : 0)) & -(t > 0 ? 1 : 0) & 63,
              );
            }),
          );
        },
      },
      d = c;
    i.default = d;
  },
  66,
);
