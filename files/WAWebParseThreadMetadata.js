__d(
  "WAWebParseThreadMetadata",
  ["WAWebABProps", "WAWebHandleInfoBulletinTypes"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.child(o("WAWebHandleInfoBulletinTypes").INFO_TYPE.THREAD_META),
        n = {};
      t.forEachChildWithTag("item", function (e) {
        var t = e.attrChatJid("from"),
          r = e.attrTime("t");
        n[String(t)] = r;
      });
      var r = s(t);
      return { chatTimestamp: n, watermarks: r };
    }
    function s(e) {
      if (
        !o("WAWebABProps").getABPropConfigValue(
          "web_read_self_watermark_processing",
        )
      )
        return null;
      var t = e.maybeChild("watermark");
      if (t == null) return null;
      var n = new Map();
      return (
        t.forEachChildWithTag("item", function (e) {
          var t = e.attrChatJid("from"),
            r = e.maybeAttrInt("sts");
          if (!(r == null || r <= 0)) {
            var o = n.get(t);
            (o == null || r > o.readSts) && n.set(t, { readSts: r });
          }
        }),
        n.size > 0 ? n : null
      );
    }
    l.parseThreadMetadata = e;
  },
  98,
);
