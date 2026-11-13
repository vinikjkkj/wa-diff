__d(
  "VideoPlayerNextgendashMp4SidxParser",
  ["DataViewReader", "nextgendasherr"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1936286840;
    function s(t, n, a) {
      var i = new (r("DataViewReader"))(
          new DataView(n.buffer, n.byteOffset, n.byteLength),
        ),
        l = i.readUint32(),
        s = i.readUint32();
      if (s !== e)
        throw o("nextgendasherr").nextgendasherr(
          t,
          "VideoPlayerNextgendashMp4SidxParserInvalidBoxType",
          'Invalid box type, expected "sidx".',
        );
      l === 1 && (l = i.readUint64());
      var u = i.readUint8();
      (i.skip(3), i.skip(4));
      var c = i.readUint32();
      if (!c)
        throw o("nextgendasherr").nextgendasherr(
          t,
          "VideoPlayerNextgendashMp4SidxParserInvalidTimescale",
          "Invalid timescale.",
        );
      var d, m;
      (u === 0
        ? ((d = i.readUint32()), (m = i.readUint32()))
        : ((d = i.readUint64()), (m = i.readUint64())),
        i.skip(2));
      for (
        var p = i.readUint16(), _ = d, f = a + l + m, g = 0, h = [], y = 0;
        y < p;
        y++
      ) {
        var C = i.readUint32(),
          b = (C & 2147483648) >>> 31,
          v = C & 2147483647,
          S = i.readUint32();
        if (((C = i.readUint32()), b === 1))
          throw o("nextgendasherr").nextgendasherr(
            t,
            "VideoPlayerNextgendashMp4SidxParserUnsupportedHierarchical",
            "Hierarchical SIDXs are not supported.",
          );
        var R = _ / c,
          L = (_ + S) / c;
        (y === 0 &&
          !t.config
            .sidxDisableShiftingMediaTimeRangesByEarliestPresentationTime &&
          (g = R),
          h.push({
            mediaFileByteRange: { byteLength: v, byteOffset: f },
            mediaTimeRange: [R - g, L - g],
          }),
          (_ += S),
          (f += v));
      }
      return h;
    }
    l.parseMp4Sidx = s;
  },
  98,
);
