__d(
  "WAWebIsAlbumV2ReceiverEnabled",
  ["WAWebABProps", "WAWebNewsletterIsNewsletterMsg"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = r("WAWebNewsletterIsNewsletterMsg")({ from: e.from, to: e.to });
      return (
        t ||
        o("WAWebABProps").getABPropConfigValue("album_v2_receiving_enabled")
      );
    }
    l.isAlbumV2MsgReceiverEnabled = e;
  },
  98,
);
