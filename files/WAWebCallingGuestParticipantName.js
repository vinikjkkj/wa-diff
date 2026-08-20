__d(
  "WAWebCallingGuestParticipantName",
  ["WAWebChatContactUtils", "WAWebGuestNameFormat"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WAWebChatContactUtils").getFormattedNotifyName(t);
      return !e || n === ""
        ? null
        : {
            baseName: n,
            displayName: o("WAWebGuestNameFormat").maybeGetNameWithGuestLabel(
              n,
              !0,
            ),
          };
    }
    l.getCallingGuestParticipantName = e;
  },
  98,
);
