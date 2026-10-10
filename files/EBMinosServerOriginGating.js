__d(
  "EBMinosServerOriginGating",
  ["MinosServerOriginContentType", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
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
      if (t == null) return { verdict: "notServerOrigin" };
      var n = r("MinosServerOriginContentType").cast(t);
      return n == null
        ? { reason: "server_origin_type_unknown", verdict: "unsupported" }
        : e.has(n)
          ? s()
            ? { verdict: "supported" }
            : { reason: "server_origin_gk_disabled", verdict: "unsupported" }
          : {
              reason: "server_origin_type_not_allowlisted",
              verdict: "unsupported",
            };
    }
    function d(e) {
      return c(e).verdict;
    }
    function m(e) {
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
                      : e.xmatChangeThreadName != null
                        ? 9
                        : e.xmatAddParticipants != null
                          ? 10
                          : e.xmatRemoveParticipant != null
                            ? 11
                            : e.xmatChangeThreadAdmins != null
                              ? 12
                              : e.xmatSetParticipantUpdateMode != null
                                ? 13
                                : null;
    }
    function p(e) {
      var t = m(e);
      return t != null && d(t) === "supported";
    }
    ((l.isServerOriginAdminMessageEnabled = s),
      (l.serverOriginContentTypeName = u),
      (l.classifyServerOriginContentWithReason = c),
      (l.classifyServerOriginContent = d),
      (l.isSupportedServerOriginAdminMessage = p));
  },
  98,
);
