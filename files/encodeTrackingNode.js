__d(
  "encodeTrackingNode",
  ["TrackingNodeConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = function (t) {
          return Math.pow(o("TrackingNodeConstants").BASE_CODE_SIZE, t);
        },
        r = function (t, n) {
          for (var e = "", r = t, a = n; a > 0; ) {
            var i = r % o("TrackingNodeConstants").BASE_CODE_SIZE;
            ((e =
              String.fromCharCode(
                o("TrackingNodeConstants").BASE_CODE_START + i,
              ) + e),
              (r = parseInt(r / o("TrackingNodeConstants").BASE_CODE_SIZE, 10)),
              (a -= 1));
          }
          return e;
        },
        a = function (t) {
          var e =
            t -
            o("TrackingNodeConstants").TOTAL_IDS_SUPPORTED_BY_LEGACY_ENCODING -
            1;
          return e < n(2)
            ? String.fromCharCode(
                o("TrackingNodeConstants")
                  .ENCODED_STRING_WITH_TWO_SYMBOLS_PREFIX_CODE,
              ) + r(e, 2)
            : ((e -= n(2)),
              String.fromCharCode(
                o("TrackingNodeConstants")
                  .ENCODED_STRING_WITH_THREE_SYMBOLS_PREFIX_CODE,
              ) + r(e, 3));
        },
        i = (e - 1) % o("TrackingNodeConstants").BASE_CODE_SIZE,
        l = parseInt((e - 1) / o("TrackingNodeConstants").BASE_CODE_SIZE, 10);
      if (
        e < 1 ||
        e >
          (o("TrackingNodeConstants").PREFIX_CODE_SIZE + 1) *
            o("TrackingNodeConstants").BASE_CODE_SIZE +
            Math.pow(o("TrackingNodeConstants").BASE_CODE_SIZE, 2) +
            Math.pow(o("TrackingNodeConstants").BASE_CODE_SIZE, 3)
      ) {
        var s = Error("Invalid tracking node: " + e);
        throw (s.stack, s);
      }
      var u = "";
      return (
        l > o("TrackingNodeConstants").PREFIX_CODE_SIZE
          ? (u += a(e))
          : (l > 0 &&
              (u += String.fromCharCode(
                l - 1 + o("TrackingNodeConstants").PREFIX_CODE_START,
              )),
            (u += String.fromCharCode(
              i + o("TrackingNodeConstants").BASE_CODE_START,
            ))),
        t !== void 0 &&
          t > 0 &&
          (t > 10 && (u += "#"),
          (u += parseInt(
            Math.min(t, o("TrackingNodeConstants").ENCODE_NUMBER_MAX) - 1,
            10,
          ))),
        u
      );
    }
    l.default = e;
  },
  98,
);
