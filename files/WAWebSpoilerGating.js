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
      return (
        e() &&
        o("WAWebABProps").getABPropConfigValue(
          "spoilers_status_receiver_enabled",
        )
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "is_spoiler_rich_format_sender_enabled",
      );
    }
    function c() {
      return (
        u() &&
        o("WAWebABProps").getABPropConfigValue("spoilers_status_sender_enabled")
      );
    }
    function d(e, t) {
      return (t === void 0 && (t = !1), e || t ? c() : u());
    }
    ((l.isSpoilerReceiverEnabled = e),
      (l.isStatusSpoilerReceiverEnabled = s),
      (l.isSpoilerSenderEnabled = u),
      (l.isStatusSpoilerSenderEnabled = c),
      (l.isSpoilerSenderEnabledForDestination = d));
  },
  98,
);
