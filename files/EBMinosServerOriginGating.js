__d(
  "EBMinosServerOriginGating",
  ["MinosServerOriginContentType", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([1, 2, 3, 4, 5, 6, 7, 8]);
    function s() {
      return r("gkx")("10585");
    }
    function u(e) {
      if (e == null) return null;
      var t = r("MinosServerOriginContentType").cast(e);
      return t != null
        ? r("MinosServerOriginContentType").getName(t)
        : "unknown";
    }
    function c(t) {
      if (t == null) return "notServerOrigin";
      var n = r("MinosServerOriginContentType").cast(t);
      return n != null && s() && e.has(n) ? "supported" : "unsupported";
    }
    function d(e) {
      return e.xmatThreadNickname != null
        ? 1
        : e.xmatThreadQuickReaction != null
          ? 2
          : e.xmatThemeColor != null
            ? 3
            : e.xmatMagicWords != null
              ? 4
              : e.xmatPinMessageV2 != null
                ? 5
                : e.xmatUnpinMessageV2 != null
                  ? 6
                  : e.xmatDisappearingSetting != null
                    ? 7
                    : e.xmatMessagingLimitSharing != null
                      ? 8
                      : null;
    }
    function m(e) {
      var t = d(e);
      return t != null && c(t) === "supported";
    }
    ((l.isServerOriginAdminMessageEnabled = s),
      (l.serverOriginContentTypeName = u),
      (l.classifyServerOriginContent = c),
      (l.isSupportedServerOriginAdminMessage = m));
  },
  98,
);
