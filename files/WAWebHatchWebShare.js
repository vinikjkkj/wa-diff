__d(
  "WAWebHatchWebShare",
  ["asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      try {
        return (
          navigator.share != null &&
          (navigator.canShare == null
            ? void 0
            : navigator.canShare({ files: [].concat(e) })) === !0
        );
      } catch (e) {
        return !1;
      }
    }
    function l(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t =
              navigator.share == null
                ? void 0
                : navigator.share({ files: [].concat(e) });
            return t == null ? "failed" : (yield t, "shared");
          } catch (e) {
            return e instanceof DOMException && e.name === "AbortError"
              ? "cancelled"
              : "failed";
          }
        })),
        s.apply(this, arguments)
      );
    }
    ((i.canShareHatchFiles = e), (i.shareHatchFiles = l));
  },
  66,
);
