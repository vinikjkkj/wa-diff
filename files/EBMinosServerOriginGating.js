__d(
  "EBMinosServerOriginGating",
  ["MinosServerOriginContentType", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
      ]),
      s = new Set([14]);
    function u() {
      return r("gkx")("10585");
    }
    function c() {
      return r("gkx")("27993");
    }
    function d(e) {
      return e === 14 ? c() : u();
    }
    function m(e) {
      var t = r("MinosServerOriginContentType").cast(e);
      return t != null && s.has(t);
    }
    function p(e) {
      if (e == null) return null;
      var t = r("MinosServerOriginContentType").cast(e);
      return t != null
        ? r("MinosServerOriginContentType").getName(t)
        : "unknown";
    }
    function _(t) {
      if (t == null) return { verdict: "notServerOrigin" };
      var n = r("MinosServerOriginContentType").cast(t);
      return n == null
        ? { reason: "server_origin_type_unknown", verdict: "unsupported" }
        : e.has(n)
          ? d(n)
            ? { verdict: "supported" }
            : { reason: "server_origin_gk_disabled", verdict: "unsupported" }
          : {
              reason: "server_origin_type_not_allowlisted",
              verdict: "unsupported",
            };
    }
    function f(e) {
      return _(e).verdict;
    }
    function g(e) {
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
                                : e.xmatLinkCta != null
                                  ? 15
                                  : e.xmatFriendRequestConfirmedEncrypted !=
                                      null
                                    ? 16
                                    : e.xmatMessengerQrCodeScanned != null
                                      ? 17
                                      : null;
    }
    function h(e) {
      var t = g(e);
      return t != null && f(t) === "supported";
    }
    ((l.isServerOriginAdminMessageEnabled = u),
      (l.isServerOriginPaymentsXmaEnabled = c),
      (l.isServerOriginContentTypeEnabled = d),
      (l.isServerOriginTransportMessage = m),
      (l.serverOriginContentTypeName = p),
      (l.classifyServerOriginContentWithReason = _),
      (l.isSupportedServerOriginAdminMessage = h));
  },
  98,
);
