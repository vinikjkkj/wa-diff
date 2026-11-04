__d(
  "BanzaiCompressionUtils",
  ["FBLogger", "Promise", "SnappyCompressUtil", "once", "performanceNow"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l,
      s = n("once")(function () {
        if (t.CompressionStream == null || t.Response == null) return !1;
        try {
          var e = new t.CompressionStream("deflate");
        } catch (e) {
          return !1;
        }
        return !0;
      });
    function u(t, r) {
      if (t.needs_compression !== !0) {
        delete t.needs_compression;
        return;
      }
      if (r === "deflate") {
        u(t, "snappy");
        return;
      }
      var o = (e || (e = n("performanceNow")))(),
        a = JSON.stringify(t.posts),
        i;
      switch (r) {
        case "snappy":
          i = n("SnappyCompressUtil").compressStringToSnappyBinary(a);
          break;
        case "snappy_base64":
          i = n("SnappyCompressUtil").compressStringToSnappy(a);
          break;
        default:
          break;
      }
      (i != null && i.length < a.length
        ? ((t.posts = i),
          (t.compression = r),
          (t.snappy_ms = Math.ceil((e || (e = n("performanceNow")))() - o)),
          t.snappy_ms < 0 &&
            n("FBLogger")("BanzaiCompressionUtils").warn(
              "Expected positive snappy_ms but got %s",
              t.snappy_ms,
            ))
        : (t.compression = ""),
        delete t.needs_compression);
    }
    function c(r, o) {
      if (o !== "deflate")
        return (u(r, "snappy"), (l || (l = n("Promise"))).resolve());
      if (!s()) return c(r, "snappy");
      var a = (e || (e = n("performanceNow")))(),
        i = JSON.stringify(r.posts),
        d = new Response(i).body;
      if (!d)
        return (
          (r.compression = ""),
          delete r.needs_compression,
          (l || (l = n("Promise"))).resolve()
        );
      var m = d.pipeThrough(new t.CompressionStream("deflate"));
      return new Response(m)
        .arrayBuffer()
        .then(function (t) {
          (t.byteLength < i.length
            ? ((r.posts = new Uint8Array(t)),
              (r.compression = o),
              (r.snappy_ms = Math.ceil((e || (e = n("performanceNow")))() - a)),
              r.snappy_ms < 0 &&
                n("FBLogger")("BanzaiCompressionUtils").warn(
                  "Expected positive snappy_ms but got %s",
                  r.snappy_ms,
                ))
            : (r.compression = ""),
            delete r.needs_compression);
        })
        .catch(function () {
          ((r.compression = ""), delete r.needs_compression);
        });
    }
    function d(e) {
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
    ((i.compressWad = u), (i.compressWadAsync = c), (i.outOfBandsPosts = d));
  },
  66,
);
