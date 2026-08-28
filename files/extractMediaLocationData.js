__d(
  "extractMediaLocationData",
  ["FBLogger", "Promise", "asyncToGeneratorRuntime", "exif-js", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return (
        e[0].numerator +
        e[1].numerator / (60 * e[1].denominator) +
        e[2].numerator / (3600 * e[2].denominator)
      );
    }
    function u(t) {
      return new (e || (e = n("Promise")))(function (e, n) {
        var r = new FileReader();
        ((r.onload = function () {
          r.result instanceof ArrayBuffer ? e(r.result) : n(r.error);
        }),
          (r.onerror = function () {
            n(r.error);
          }),
          r.readAsArrayBuffer(t));
      });
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield u(e),
              n = r("exif-js").readFromBinaryFile(t);
            if (!n.GPSLongitude || !n.GPSLatitude) return null;
            var o = n.GPSLatitudeRef || "N",
              a = n.GPSLongitudeRef || "W",
              i = s(n.GPSLatitude) * (o === "N" ? 1 : -1),
              l = s(n.GPSLongitude) * (a === "W" ? -1 : 1),
              c = { accuracy: 0, latitude: i, longitude: l, stale_time: 0 };
            return c;
          } catch (e) {
            var d = r("getErrorSafe")(e);
            return (
              r("FBLogger")("comet_composer")
                .catching(d)
                .mustfix("Failed to extract GPS location from media"),
              null
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.extractMediaLocationData = c;
  },
  98,
);
