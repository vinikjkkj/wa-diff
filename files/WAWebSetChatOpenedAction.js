__d(
  "WAWebSetChatOpenedAction",
  ["WAWebDBUpdateChatTable"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = { hasOpened: !0 };
      (await o("WAWebDBUpdateChatTable").updateChatTable(e.id, t), e.set(t));
    }
    l.setChatHasOpened = e;
  },
  98,
);
