__d(
  "WAWebParseThreadMetadata",
  ["WAWebHandleInfoBulletinTypes.flow"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.child(
          o("WAWebHandleInfoBulletinTypes.flow").INFO_TYPE.THREAD_META,
        ),
        n = {};
      return (
        t.forEachChildWithTag("item", function (e) {
          var t = e.attrChatJid("from"),
            r = e.attrTime("t");
          n[String(t)] = r;
        }),
        { chatTimestamp: n }
      );
    }
    l.parseThreadMetadata = e;
  },
  98,
);
