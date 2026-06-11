__d(
  "WAWebVoipGroupCallAccentColor",
  [
    "WAWebChatParticipantColor",
    "WAWebUserPrefsMeUser",
    "WAWebVoipGroupCallAccentColors",
    "useWAWebDefaultProfileColors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r = o(
        "useWAWebDefaultProfileColors",
      ).getDefaultProfilePhotoAccentColor(t);
      if (e != null)
        return r != null
          ? r
          : o("WAWebVoipGroupCallAccentColors").GROUP_CALL_DARK_COLORS[
              o("WAWebChatParticipantColor").getAssignedColor(e, t)
            ];
      var a = o("WAWebVoipGroupCallAccentColors").getLandingPageAccentColor();
      if (a != null && o("WAWebUserPrefsMeUser").isMeAccount(t)) return a;
      if (r != null) return r;
      var i =
          o("WAWebVoipGroupCallAccentColors").GROUP_CALL_DARK_COLORS.length - 1,
        l = n.findIndex(function (e) {
          return e.equals(t);
        });
      if (!(l < 0))
        return o("WAWebVoipGroupCallAccentColors").GROUP_CALL_DARK_COLORS[
          (l % i) + 1
        ];
    }
    l.default = e;
  },
  98,
);
