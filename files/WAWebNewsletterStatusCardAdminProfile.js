__d(
  "WAWebNewsletterStatusCardAdminProfile",
  [
    "WAWebInitialsFromNameUtils",
    "WAWebMsgGetters",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterModelUtils",
    "useWAWebDefaultProfileColors",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = o("WAWebMsgGetters").getNewsletterAdminProfile(e),
        r = (t = n == null ? void 0 : n.name.trim()) != null ? t : "";
      if (
        n == null ||
        r === "" ||
        !o(
          "WAWebNewsletterGatingUtils",
        ).isNewsletterAdminProfilesReceiverEnabled()
      )
        return null;
      var a = o("WAWebInitialsFromNameUtils").getInitialsFromAdminProfile(n),
        i = a.firstInitial,
        l = a.secondInitial,
        s = "" + (i != null ? i : "") + (l != null ? l : ""),
        u = o(
          "useWAWebDefaultProfileColors",
        ).getDefaultProfileLightColorsFromName(n.name),
        c = u.background,
        d = u.foreground;
      return {
        content: {
          name: r,
          initials: s !== "" ? s : null,
          nameColor: d,
          avatarColor: c,
        },
        pictureUrl: o("WAWebNewsletterModelUtils").formatProfilePictureURL(
          n.pictureDirectPath,
        ),
      };
    }
    l.getNewsletterStatusCardAdminProfile = e;
  },
  98,
);
