__d(
  "WAWebHatchBodyEncoding",
  ["WAWebABProps", "asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "gzip",
      s = 4194304,
      u = null;
    function c() {
      return (
        u == null &&
          (u =
            d() &&
            o("WAWebABProps").getABPropConfigValue(
              "ai_hatch_gzip_encoding_enabled",
            )
              ? [e]
              : []),
        u
      );
    }
    function d() {
      return typeof DecompressionStream == "function";
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          for (
            var t = atob(e), n = new Uint8Array(t.length), r = 0;
            r < t.length;
            r++
          )
            n[r] = t.charCodeAt(r);
          var o = new Blob([n]).stream(),
            a = o.pipeThrough(new DecompressionStream("gzip")),
            i = yield _(a);
          return {
            body: JSON.parse(new TextDecoder("utf-8").decode(i)),
            compressedBytes: n.byteLength,
            inflatedBytes: i.byteLength,
          };
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.getReader(),
            n = [],
            o = 0;
          try {
            for (;;) {
              var a = yield t.read(),
                i = a.done,
                l = a.value;
              if (i === !0 || l == null) break;
              if (((o += l.byteLength), o > s))
                throw r("err")(
                  "inflated hatch response body is over the size cap",
                );
              n.push(l);
            }
          } catch (e) {
            throw (yield t.cancel(), e);
          }
          var u = new Uint8Array(o),
            c = 0;
          for (var d of n) (u.set(d, c), (c += d.byteLength));
          return u;
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return e < 2 ? e : Math.pow(2, Math.floor(Math.log2(e)));
    }
    ((l.HATCH_BODY_ENCODING_GZIP = e),
      (l.acceptedHatchResponseEncodings = c),
      (l.inflateHatchResponseBody = m),
      (l.hatchSizeBucket = g));
  },
  98,
);
