__d(
  "StringToUtf8",
  ["TWriteBuffer"],
  function (t, n, r, o, a, i, l) {
    var e = function (t) {
      for (
        var e = new (r("TWriteBuffer"))(t.length), n, o = 0;
        o < t.length;
        o++
      )
        if (((n = t.charCodeAt(o)), n < 128)) e.writeByte(n);
        else if (n < 2048)
          (e.writeByte((n >> 6) | 192), e.writeByte((n & 63) | 128));
        else if ((n & 64512) == 55296) {
          if (o + 1 >= t.length) {
            var a = new Error(
              "UTF-16 string is truncated: [" + n.toString(16) + "]",
            );
            throw (a.stack, a);
          }
          if ((t.charCodeAt(o + 1) & 64512) !== 56320) {
            var i = new Error(
              "Invalid UTF-16 string: [" +
                n.toString(16) +
                ", " +
                t.charCodeAt(o + 1).toString(16) +
                "]",
            );
            throw (i.stack, i);
          }
          ((n = 65536 + ((n & 1023) << 10) + (t.charCodeAt(++o) & 1023)),
            e.writeByte((n >> 18) | 240),
            e.writeByte(((n >> 12) & 63) | 128),
            e.writeByte(((n >> 6) & 63) | 128),
            e.writeByte((n & 63) | 128));
        } else
          (e.writeByte((n >> 12) | 224),
            e.writeByte(((n >> 6) & 63) | 128),
            e.writeByte((n & 63) | 128));
      return e.toByteArray();
    };
    l.StringToUtf8 = e;
  },
  98,
);
