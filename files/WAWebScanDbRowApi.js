__d(
  "WAWebScanDbRowApi",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      if (t === "lru-media-meta-info") {
        var n = 0;
        return (
          e.size != null && typeof e.size == "number" && (n += e.size),
          (n += l(e)),
          n
        );
      }
      return l(e);
    }
    function l(e) {
      var t = 0;
      return (
        JSON.stringify(e, function (e, n) {
          if (
            (typeof e == "string" && (t += 2 * e.length),
            n instanceof ArrayBuffer)
          )
            t += n.byteLength;
          else if (n instanceof Blob) t += n.size;
          else if (typeof n == "number") t += 8;
          else if (typeof n == "boolean") t += 1;
          else if (typeof n == "string") t += 2 * n.length;
          else return n;
        }),
        t
      );
    }
    i.estimateSize = e;
  },
  66,
);
