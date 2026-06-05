__d(
  "WAWebVoipGroupCallAccentColor",
  [
    "WAWebChatParticipantColor",
    "WAWebUserPrefsMeUser",
    "WAWebVoipGroupCallAccentColors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (e != null)
        return o("WAWebVoipGroupCallAccentColors").GROUP_CALL_DARK_COLORS[
          o("WAWebChatParticipantColor").getAssignedColor(e, t)
        ];
      var r = o("WAWebVoipGroupCallAccentColors").getLandingPageAccentColor();
      if (r != null && o("WAWebUserPrefsMeUser").isMeAccount(t)) return r;
      var a =
          o("WAWebVoipGroupCallAccentColors").GROUP_CALL_DARK_COLORS.length - 1,
        i = n.findIndex(function (e) {
          return e.equals(t);
        });
      if (!(i < 0))
        return o("WAWebVoipGroupCallAccentColors").GROUP_CALL_DARK_COLORS[
          (i % a) + 1
        ];
    }
    l.default = e;
  },
  98,
);
