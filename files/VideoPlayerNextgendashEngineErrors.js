__d(
  "VideoPlayerNextgendashEngineErrors",
  ["nextgendasherr"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, a) {
      var i;
      return {
        createdTimestamp: Date.now(),
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
    l.createVideoPlayerErrorFromNextgendashEngine = e;
  },
  98,
);
