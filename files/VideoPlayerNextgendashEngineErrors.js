__d(
  "VideoPlayerNextgendashEngineErrors",
  ["nextgendasherr"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      for (
        var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
        o < n;
        o++
      )
        r[o - 2] = arguments[o];
      var a = r.map(function (e) {
        return String(e);
      });
      return {
        createdTimestamp: e.host.clock().unixMs,
        errorLocation: "nextgendash_warning_from_generic_warning",
        errorMessageFormat: t,
        errorMessageParams: a,
        errorName: "VideoPlayerNextgendashLogWarning",
      };
    }
    function s(e, t, n, r, a) {
      var i;
      return {
        createdTimestamp: e.host.clock().unixMs,
        errorLocation: n,
        errorMessageFormat:
          (r != null && r !== ""
            ? r + " :: "
            : a != null && a.length > 0
              ? a
                  .map(function () {
                    return "%s";
                  })
                  .join(" ") + " :: "
              : "") + t.messageFormat,
        errorMessageParams: ((i =
          a == null
            ? void 0
            : a.map(function (e) {
                return String(e);
              })) != null
          ? i
          : []
        ).concat(t.messageParams),
        errorName: o("nextgendasherr").reduceCardinalityOfNextgendashErrorName(
          t.name,
        ),
      };
    }
    ((l.createVideoPlayerErrorFromNextgendashLogWarning = e),
      (l.createVideoPlayerErrorFromNextgendashEngine = s));
  },
  98,
);
