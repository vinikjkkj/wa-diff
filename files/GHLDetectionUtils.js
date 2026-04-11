__d(
  "GHLDetectionUtils",
  ["GHLDetectionUtilsPreludeSafe", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("5415")
        ? !0
        : typeof JSON.parse == "function" &&
            !(
              JSON.parse.toString === JSON.parse.toString.toString &&
              o("GHLDetectionUtilsPreludeSafe").normalize(
                JSON.parse.toString(),
              ) === "function parse() { [native code] }" &&
              o("GHLDetectionUtilsPreludeSafe").normalize(
                JSON.parse.toString.toString(),
              ) === "function toString() { [native code] }"
            );
    }
    function s(e) {
      return r("gkx")("8869")
        ? !0
        : typeof e == "function" &&
            !(
              e.toString === e.toString.toString &&
              o("GHLDetectionUtilsPreludeSafe").normalize(e.toString()) ===
                "function XMLHttpRequest() { [native code] }" &&
              o("GHLDetectionUtilsPreludeSafe").normalize(
                e.toString.toString(),
              ) === "function toString() { [native code] }"
            );
    }
    function u(e) {
      return r("gkx")("9063")
        ? !0
        : typeof e == "function" &&
            !(
              e.prototype.fillText.toString ===
                e.prototype.fillText.toString.toString &&
              o("GHLDetectionUtilsPreludeSafe").normalize(
                e.prototype.fillText.toString(),
              ) === "function fillText() { [native code] }" &&
              o("GHLDetectionUtilsPreludeSafe").normalize(
                e.prototype.fillText.toString.toString(),
              ) === "function toString() { [native code] }"
            );
    }
    ((l.isJSONParseShimmed = e),
      (l.isXHRModified = s),
      (l.isCanvasFillTextModified = u));
  },
  98,
);
