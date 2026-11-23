__d(
  "WAWebHatchWebShare",
  [],
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
    async function l(e) {
      try {
        var t =
          navigator.share == null
            ? void 0
            : navigator.share({ files: [].concat(e) });
        return t == null ? "failed" : (await t, "shared");
      } catch (e) {
        return e instanceof DOMException && e.name === "AbortError"
          ? "cancelled"
          : "failed";
      }
    }
    ((i.canShareHatchFiles = e), (i.shareHatchFiles = l));
  },
  66,
);
