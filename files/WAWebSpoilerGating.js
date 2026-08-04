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
    ((l.isSpoilerReceiverEnabled = e), (l.isSpoilerSenderEnabled = s));
  },
  98,
);
