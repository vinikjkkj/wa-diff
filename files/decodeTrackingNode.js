__d(
  "decodeTrackingNode",
  ["TrackingNodeConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e.length === 0) return [0];
      var t = function (t, n, r) {
          for (var e = 0, a = n; a < r + n; a += 1) {
            if (
              !(
                a < t.length &&
                t.charCodeAt(a) >= o("TrackingNodeConstants").BASE_CODE_START &&
                t.charCodeAt(a) <= o("TrackingNodeConstants").BASE_CODE_END
              )
            )
              return null;
            e =
              e * o("TrackingNodeConstants").BASE_CODE_SIZE +
              (t.charCodeAt(a) - o("TrackingNodeConstants").BASE_CODE_START);
          }
          return e;
        },
        n = function (n, r) {
          if (r >= n.length) return [null, r];
          var e = r,
            a = null,
            i = 0;
          switch (n.charCodeAt(0)) {
            case o("TrackingNodeConstants")
              .ENCODED_STRING_WITH_TWO_SYMBOLS_PREFIX_CODE:
              ((a = t(n, r, 2)),
                (i = o(
                  "TrackingNodeConstants",
                ).TOTAL_IDS_SUPPORTED_BY_LEGACY_ENCODING),
                (e += 2));
              break;
            case o("TrackingNodeConstants")
              .ENCODED_STRING_WITH_THREE_SYMBOLS_PREFIX_CODE:
              ((a = t(n, r, 3)),
                (i =
                  o("TrackingNodeConstants")
                    .TOTAL_IDS_SUPPORTED_BY_LEGACY_ENCODING +
                  Math.pow(o("TrackingNodeConstants").BASE_CODE_SIZE, 2)),
                (e += 3));
              break;
            default:
              return [null, r];
          }
          return a === null ? [null, r] : [i + (a != null ? a : 0) + 1, e];
        },
        r = e.charCodeAt(0),
        a = 1,
        i = 0,
        l = 0,
        s = 0;
      if (
        [
          o("TrackingNodeConstants")
            .ENCODED_STRING_WITH_TWO_SYMBOLS_PREFIX_CODE,
          o("TrackingNodeConstants")
            .ENCODED_STRING_WITH_THREE_SYMBOLS_PREFIX_CODE,
        ].includes(r)
      ) {
        var u,
          c = n(e, a);
        if (c[0] === null) return [0];
        ((s = (u = c[0]) != null ? u : -1), (a = c[1]));
      } else {
        if (
          r >= o("TrackingNodeConstants").PREFIX_CODE_START &&
          r <= o("TrackingNodeConstants").PREFIX_CODE_END
        ) {
          if (e.length === 1) return [0];
          ((l = r - o("TrackingNodeConstants").PREFIX_CODE_START + 1),
            (i = e.charCodeAt(1)),
            (a = 2));
        } else ((l = 0), (i = r));
        if (
          i < o("TrackingNodeConstants").BASE_CODE_START ||
          i > o("TrackingNodeConstants").BASE_CODE_END
        )
          return [0];
        s =
          l * o("TrackingNodeConstants").BASE_CODE_SIZE +
          (i - o("TrackingNodeConstants").BASE_CODE_START) +
          1;
      }
      return e.length > a + 2 &&
        e.charAt(a) === "#" &&
        e.charAt(a + 1) >= "0" &&
        e.charAt(a + 1) <= "9" &&
        e.charAt(a + 2) >= "0" &&
        e.charAt(a + 2) <= "9"
        ? [a + 3, [s, parseInt(e.charAt(a + 1) + e.charAt(a + 2), 10) + 1]]
        : e.length > a && e.charAt(a) >= "0" && e.charAt(a) <= "9"
          ? [a + 1, [s, parseInt(e.charAt(a), 10) + 1]]
          : [a, [s]];
    }
    l.default = e;
  },
  98,
);
