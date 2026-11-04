__d(
  "VideoPlayerNextgendashMp4SidxParser",
  ["DataViewReader", "nextgendasherr"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1936286840;
    function s(t, n, a, i) {
      i === void 0 && (i = null);
      var l = new (r("DataViewReader"))(
          new DataView(n.buffer, n.byteOffset, n.byteLength),
        ),
        s = l.readUint32(),
        u = l.readUint32();
      if (u !== e)
        throw o("nextgendasherr").nextgendasherr(
          t,
          "VideoPlayerNextgendashMp4SidxParserInvalidBoxType",
          'Invalid box type, expected "sidx".',
        );
      s === 1 && (s = l.readUint64());
      var c = l.readUint8();
      (l.skip(3), l.skip(4));
      var d = l.readUint32();
      if (!d)
        throw o("nextgendasherr").nextgendasherr(
          t,
          "VideoPlayerNextgendashMp4SidxParserInvalidTimescale",
          "Invalid timescale.",
        );
      var m, p;
      (c === 0
        ? ((m = l.readUint32()), (p = l.readUint32()))
        : ((m = l.readUint64()), (p = l.readUint64())),
        l.skip(2));
      var _ = l.readUint16(),
        f = m,
        g = a + s + p,
        h = i != null ? i : 0;
      i != null &&
        m / d < i &&
        t.logging.log(t, {
          error: o("nextgendasherr").nextgendasherr(
            t,
            "VideoPlayerNextgendashMp4SidxParserPresentationTimeOffsetAfterFirstFrame",
            "presentationTimeOffset %ss is after the sidx earliest presentation time %ss",
            String(i),
            String(m / d),
          ),
          type: "generic_error_as_warning",
        });
      for (var y = [], C = 0; C < _; C++) {
        var b = l.readUint32(),
          v = (b & 2147483648) >>> 31,
          S = b & 2147483647,
          R = l.readUint32();
        if (((b = l.readUint32()), v === 1))
          throw o("nextgendasherr").nextgendasherr(
            t,
            "VideoPlayerNextgendashMp4SidxParserUnsupportedHierarchical",
            "Hierarchical SIDXs are not supported.",
          );
        var L = f / d,
          E = (f + R) / d;
        (C === 0 &&
          i == null &&
          !t.config
            .sidxDisableShiftingMediaTimeRangesByEarliestPresentationTime &&
          (h = L),
          y.push({
            mediaFileByteRange: { byteLength: S, byteOffset: g },
            mediaTimeRange: [L - h, E - h],
          }),
          (f += R),
          (g += S));
      }
      return y;
    }
    l.parseMp4Sidx = s;
  },
  98,
);
