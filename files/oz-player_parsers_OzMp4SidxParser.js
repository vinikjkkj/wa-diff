__d(
  "oz-player/parsers/OzMp4SidxParser",
  [
    "oz-player/manifests/OzDataSegment",
    "oz-player/manifests/OzSegmentOptions",
    "oz-player/shims/OzDataViewReader",
    "oz-player/utils/OzErrorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1936286840;
    function s(t, n, a, i) {
      var l = new (r("oz-player/shims/OzDataViewReader"))(
          new DataView(i.buffer),
        ),
        s = l.readUint32(),
        u = l.readUint32();
      if (u !== e)
        throw o("oz-player/utils/OzErrorUtils").createOzError({
          type: "OZ_SIDX_PARSER",
          description: 'Invalid box type, expected "sidx".',
        });
      s == 1 && (s = l.readUint64());
      var c = l.readUint8();
      (l.skip(3), l.skip(4));
      var d = l.readUint32();
      if (!d)
        throw o("oz-player/utils/OzErrorUtils").createOzError({
          type: "OZ_SIDX_PARSER",
          description: "Invalid timescale.",
        });
      var m, p;
      (c == 0
        ? ((m = l.readUint32()), (p = l.readUint32()))
        : ((m = l.readUint64()), (p = l.readUint64())),
        l.skip(2));
      for (
        var _ = l.readUint16(),
          f = m,
          g = a + s + p,
          h = 0,
          y = t.getBool("sidx_parser_memory_optimization"),
          C = [],
          b = function () {
            var e = l.readUint32(),
              t = (e & 2147483648) >>> 31,
              a = e & 2147483647,
              i = l.readUint32();
            if (((e = l.readUint32()), t == 1))
              throw o("oz-player/utils/OzErrorUtils").createOzError({
                type: "OZ_SIDX_PARSER",
                description: "Heirarchical SIDXs are not supported.",
              });
            var s = f / d,
              u = (f + i) / d;
            v === 0 && (h = s);
            var c = g,
              m = c + a - 1,
              p = new (r("oz-player/manifests/OzSegmentOptions"))();
            (C.push(
              y
                ? new (r("oz-player/manifests/OzDataSegment"))(
                    n,
                    s - h,
                    u - h,
                    c,
                    m,
                  )
                : {
                    getData: function () {
                      return null;
                    },
                    getURI: function () {
                      return n;
                    },
                    getTimeRange: function () {
                      return { startTime: s - h, endTime: u - h };
                    },
                    getByteRange: function () {
                      return { startByte: c, endByte: m };
                    },
                    getSequenceNumber: function () {
                      return null;
                    },
                    getOptions: function () {
                      return p;
                    },
                  },
            ),
              (f += i),
              (g += a));
          },
          v = 0;
        v < _;
        v++
      )
        b();
      return C;
    }
    l.parse = s;
  },
  98,
);
