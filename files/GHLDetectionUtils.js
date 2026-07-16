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
    function s() {
      try {
        var e,
          t = JSON.parse(
            '{"data":{"node":{"th_dat_spo":{"__typename":"SponsoredData"}}}}',
          );
        return (t == null || (e = t.data) == null ? void 0 : e.node) == null;
      } catch (e) {
        return !1;
      }
    }
    function u(e) {
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
    function c(e) {
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
    function d() {
      return (
        typeof String == "function" &&
        !(
          String.toString === String.toString.toString &&
          o("GHLDetectionUtilsPreludeSafe").normalize(String.toString()) ===
            "function String() { [native code] }" &&
          o("GHLDetectionUtilsPreludeSafe").normalize(
            String.toString.toString(),
          ) === "function toString() { [native code] }"
        )
      );
    }
    function m() {
      return (
        typeof Function.prototype.call == "function" &&
        !(
          Function.prototype.call.toString ===
            Function.prototype.call.toString.toString &&
          o("GHLDetectionUtilsPreludeSafe").normalize(
            Function.prototype.call.toString(),
          ) === "function call() { [native code] }" &&
          o("GHLDetectionUtilsPreludeSafe").normalize(
            Function.prototype.call.toString.toString(),
          ) === "function toString() { [native code] }"
        )
      );
    }
    ((l.isJSONParseShimmed = e),
      (l.isJSONParseBehaviorallyShimmed = s),
      (l.isXHRModified = u),
      (l.isCanvasFillTextModified = c),
      (l.isStringShimmed = d),
      (l.isCallShimmed = m));
  },
  98,
);
