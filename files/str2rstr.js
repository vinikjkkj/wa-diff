__d(
  "str2rstr",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      for (var t = "", n, r, o = 0; o < e.length; o++)
        ((n = e.charCodeAt(o)),
          (r = o + 1 < e.length ? e.charCodeAt(o + 1) : 0),
          55296 <= n &&
            n <= 56319 &&
            56320 <= r &&
            r <= 57343 &&
            ((n = 65536 + ((n & 1023) << 10) + (r & 1023)), o++),
          n <= 127
            ? (t += String.fromCharCode(n))
            : n <= 2047
              ? (t += String.fromCharCode(
                  192 | ((n >>> 6) & 31),
                  128 | (n & 63),
                ))
              : n <= 65535
                ? (t += String.fromCharCode(
                    224 | ((n >>> 12) & 15),
                    128 | ((n >>> 6) & 63),
                    128 | (n & 63),
                  ))
                : n <= 2097151 &&
                  (t += String.fromCharCode(
                    240 | ((n >>> 18) & 7),
                    128 | ((n >>> 12) & 63),
                    128 | ((n >>> 6) & 63),
                    128 | (n & 63),
                  )));
      return t;
    }
    i.default = e;
  },
  66,
);
