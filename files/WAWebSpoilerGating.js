__d(
  "WAWebSpoilerGating",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "is_spoiler_rich_format_enabled",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "is_spoiler_rich_format_sender_enabled",
      );
    }
    function u() {
      return (
        s() &&
        o("WAWebABProps").getABPropConfigValue("spoilers_status_sender_enabled")
      );
    }
    function c(e, t) {
      return (t === void 0 && (t = !1), e || t ? u() : s());
    }
    ((l.isSpoilerReceiverEnabled = e),
      (l.isSpoilerSenderEnabled = s),
      (l.isStatusSpoilerSenderEnabled = u),
      (l.isSpoilerSenderEnabledForDestination = c));
  },
  98,
);
