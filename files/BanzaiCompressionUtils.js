__d(
  "BanzaiCompressionUtils",
  ["FBLogger", "Promise", "SnappyCompressUtil", "once", "performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("once")(function () {
        if (t.CompressionStream == null || t.Response == null) return !1;
        try {
          var e = new t.CompressionStream("deflate");
        } catch (e) {
          return !1;
        }
        return !0;
      });
    function c(e, t) {
      if (e.needs_compression !== !0) {
        delete e.needs_compression;
        return;
      }
      if (t === "deflate") {
        c(e, "snappy");
        return;
      }
      var n = (s || (s = r("performanceNow")))(),
        a = JSON.stringify(e.posts),
        i;
      switch (t) {
        case "snappy":
          i = o("SnappyCompressUtil").compressStringToSnappyBinary(a);
          break;
        case "snappy_base64":
          i = o("SnappyCompressUtil").compressStringToSnappy(a);
          break;
        default:
          break;
      }
      (i != null && i.length < a.length
        ? ((e.posts = i),
          (e.compression = t),
          (e.snappy_ms = Math.ceil((s || (s = r("performanceNow")))() - n)),
          e.snappy_ms < 0 &&
            r("FBLogger")("BanzaiCompressionUtils").warn(
              "Expected positive snappy_ms but got %s",
              e.snappy_ms,
            ))
        : (e.compression = ""),
        delete e.needs_compression);
    }
    function d(o, a) {
      if (a !== "deflate")
        return (c(o, "snappy"), (e || (e = n("Promise"))).resolve());
      if (!u()) return d(o, "snappy");
      var i = (s || (s = r("performanceNow")))(),
        l = JSON.stringify(o.posts),
        m = new Response(l).body;
      if (!m)
        return (
          (o.compression = ""),
          delete o.needs_compression,
          (e || (e = n("Promise"))).resolve()
        );
      var p = m.pipeThrough(new t.CompressionStream("deflate"));
      return new Response(p)
        .arrayBuffer()
        .then(function (e) {
          (e.byteLength < l.length
            ? ((o.posts = new Uint8Array(e)),
              (o.compression = a),
              (o.snappy_ms = Math.ceil((s || (s = r("performanceNow")))() - i)),
              o.snappy_ms < 0 &&
                r("FBLogger")("BanzaiCompressionUtils").warn(
                  "Expected positive snappy_ms but got %s",
                  o.snappy_ms,
                ))
            : (o.compression = ""),
            delete o.needs_compression);
        })
        .catch(function () {
          ((o.compression = ""), delete o.needs_compression);
        });
    }
    function m(e) {
      var t = 0,
        n = {};
      for (var r of e) {
        var o = r.compression === "snappy" || r.compression === "deflate";
        if (o) {
          var a = new Blob([r.posts], { type: "application/octet-stream" });
          ((r.posts = String(t)), (n["post_" + String(t)] = a), t++);
        }
      }
      return n;
    }
    ((l.compressWad = c), (l.compressWadAsync = d), (l.outOfBandsPosts = m));
  },
  98,
);
