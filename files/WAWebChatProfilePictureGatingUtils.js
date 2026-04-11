__d(
  "WAWebChatProfilePictureGatingUtils",
  ["WAWebWid"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e != null && r("WAWebWid").isUser(e) && !r("WAWebWid").isPSA(e);
    }
    l.shouldDisplayInitialsInProfilePicture = e;
  },
  98,
);
