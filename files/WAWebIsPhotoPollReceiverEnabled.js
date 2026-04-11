__d(
  "WAWebIsPhotoPollReceiverEnabled",
  ["WAWebNewsletterCommonGatingUtils", "WAWebNewsletterIsNewsletterMsg"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        r("WAWebNewsletterIsNewsletterMsg")({ from: e.from, to: e.to }) &&
        o(
          "WAWebNewsletterCommonGatingUtils",
        ).isNewsletterPhotoPollsReceiverEnabled()
      );
    }
    l.isPhotoPollReceiverEnabled = e;
  },
  98,
);
