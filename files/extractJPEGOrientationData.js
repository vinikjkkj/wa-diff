__d(
  "extractJPEGOrientationData",
  ["genArrayBufferFromFile", "parseTIFFHeader"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 65496,
      s = 65498,
      u = 1165519206;
    function c(t) {
      return r("genArrayBufferFromFile")(t).then(function (t) {
        var n = new DataView(t);
        if (n.getUint16(0, !1) !== e) return null;
        for (var o = 2; o < t.byteLength - 2 && n.getUint16(o) !== s; ) {
          var a = n.getUint16(o),
            i = a & 65280,
            l = a & 255;
          if (i === 65280) {
            if (l === 225) {
              if (n.getUint32(o + 4) !== u || n.getUint16(o + 8) !== 0)
                return null;
              var c = r("parseTIFFHeader")(t, o + 10);
              if (c != null) {
                var d = c[0];
                for (var m of d.entries)
                  if (m.tag === 274) {
                    var p = m.value;
                    if (p.type === "data") {
                      var _ = p.values[0];
                      return _ == null
                        ? null
                        : _ === 0 ||
                            _ === 1 ||
                            _ === 2 ||
                            _ === 3 ||
                            _ === 4 ||
                            _ === 5 ||
                            _ === 6 ||
                            _ === 7 ||
                            _ === 8
                          ? _
                          : null;
                    }
                    return null;
                  }
              }
              return null;
            } else if (l !== 0 && (l < 208 || l > 217)) {
              var f = n.getUint16(o + 2, !1);
              o += f + 2;
            }
          }
        }
        return null;
      });
    }
    l.default = c;
  },
  98,
);
