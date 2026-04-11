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
      }),
      u = {
        compressWad: function (r, o) {
          if (r.needs_compression !== !0) {
            delete r.needs_compression;
            return;
          }
          if (o === "deflate") {
            u.compressWad(r, "snappy");
            return;
          }
          var t = (e || (e = n("performanceNow")))(),
            a = JSON.stringify(r.posts),
            i;
          switch (o) {
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
            ? ((r.posts = i),
              (r.compression = o),
              (r.snappy_ms = Math.ceil((e || (e = n("performanceNow")))() - t)),
              r.snappy_ms < 0 &&
                n("FBLogger")("BanzaiCompressionUtils").warn(
                  "Expected positive snappy_ms but got %s",
                  r.snappy_ms,
                ))
            : (r.compression = ""),
            delete r.needs_compression);
        },
        compressWadAsync: function (o, a) {
          if (a !== "deflate")
            return (
              u.compressWad(o, "snappy"),
              (l || (l = n("Promise"))).resolve()
            );
          if (!s()) return u.compressWadAsync(o, "snappy");
          var r = (e || (e = n("performanceNow")))(),
            i = JSON.stringify(o.posts),
            c = new Response(i).body;
          if (!c)
            return (
              (o.compression = ""),
              delete o.needs_compression,
              (l || (l = n("Promise"))).resolve()
            );
          var d = c.pipeThrough(new t.CompressionStream("deflate"));
          return new Response(d)
            .arrayBuffer()
            .then(function (t) {
              (t.byteLength < i.length
                ? ((o.posts = new Uint8Array(t)),
                  (o.compression = a),
                  (o.snappy_ms = Math.ceil(
                    (e || (e = n("performanceNow")))() - r,
                  )),
                  o.snappy_ms < 0 &&
                    n("FBLogger")("BanzaiCompressionUtils").warn(
                      "Expected positive snappy_ms but got %s",
                      o.snappy_ms,
                    ))
                : (o.compression = ""),
                delete o.needs_compression);
            })
            .catch(function () {
              ((o.compression = ""), delete o.needs_compression);
            });
        },
        outOfBandsPosts: function (t) {
          var e = 0,
            n = {};
          for (var r of t) {
            var o = r.compression === "snappy" || r.compression === "deflate";
            if (o) {
              var a = new Blob([r.posts], { type: "application/octet-stream" });
              ((r.posts = String(e)), (n["post_" + String(e)] = a), e++);
            }
          }
          return n;
        },
      };
    a.exports = u;
  },
  null,
);
