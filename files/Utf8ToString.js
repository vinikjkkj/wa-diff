__d(
  "Utf8ToString",
  [],
  function (t, n, r, o, a, i) {
    var e = function (t, n) {
        throw new Error(
          t +
            ": [" +
            n
              .map(function (e) {
                return e.toString(16);
              })
              .toString() +
            "]",
        );
      },
      l = function (n) {
        e("Invalid UTF-8 sequence", n);
      },
      s = function (n, r) {
        e("Not enough bytes for " + n + "-byte sequence", r);
      },
      u = function (t) {
        for (var e = 0, n = []; e < t.length; ) {
          var r = t[e++];
          if (r < 128) n.push(String.fromCharCode(r));
          else if (r >= 128 && r < 194) l([r]);
          else if (r >= 194 && r < 224) {
            e >= t.length && s(2, [r]);
            var o = t[e++];
            ((o & 192) !== 128 && l([r, o]),
              n.push(String.fromCharCode(((r & 31) << 6) | (o & 63))));
          } else if (r >= 240 && r < 245) {
            e + 2 >= t.length && s(4, [r]);
            var a = t[e++],
              i = t[e++],
              u = t[e++];
            ((r == 240 &&
              (!(a >= 144 && a < 192) ||
                (i & 192) !== 128 ||
                (u & 192) !== 128)) ||
              (r >= 241 &&
                r < 244 &&
                ((a & 192) !== 128 ||
                  (i & 192) !== 128 ||
                  (u & 192) !== 128)) ||
              (r == 244 &&
                (!(a >= 128 && a < 144) ||
                  (i & 192) !== 128 ||
                  (u & 192) !== 128))) &&
              l([r, a, i, u]);
            var c =
              (((r & 7) << 18) |
                ((a & 63) << 12) |
                ((i & 63) << 6) |
                (u & 63)) -
              65536;
            (n.push(String.fromCharCode(55296 + (c >> 10))),
              n.push(String.fromCharCode(56320 + (c & 1023))));
          } else if (r >= 245) l([r]);
          else {
            e + 1 >= t.length && s(3, [r]);
            var d = t[e++],
              m = t[e++];
            (r == 224
              ? (d >= 160 && d < 192) || l([r, d, m])
              : r >= 225 && r < 237
                ? (d >= 128 && d < 192) || l([r, d, m])
                : r == 237
                  ? (d >= 128 && d < 160) || l([r, d, m])
                  : r >= 238 &&
                    r < 240 &&
                    ((d >= 128 && d < 192) || l([r, d, m])),
              (m >= 128 && m < 192) || l([r, d, m]),
              n.push(
                String.fromCharCode(
                  ((r & 15) << 12) | ((d & 63) << 6) | (m & 63),
                ),
              ));
          }
        }
        return n.join("");
      };
    i.Utf8ToString = u;
  },
  66,
);
