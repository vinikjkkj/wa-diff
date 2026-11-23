__d(
  "WAWebGuestMessagingGetPushName",
  ["WAWebLidAwareContactsDB"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = await r("WAWebLidAwareContactsDB").get(e);
      return t != null && t.pushname != null ? t.pushname : null;
    }
    l.getPushName = e;
  },
  98,
);
