__d(
  "WAWebOfflineSimulatorInfoBulletin",
  ["WAWap", "WAWebHandleMsgParser", "err"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r;
      return (r = o("WAWap")).wap(
        "ib",
        { from: r.S_WHATSAPP_NET },
        r.wap("offline_preview", {
          count: r.INT(e + t + n),
          message: r.INT(e),
          receipt: r.INT(t),
          notification: r.INT(n),
        }),
      );
    }
    function s(e) {
      var t = e.filter(function (e) {
          return e.tag === "message";
        }),
        n = {};
      t.forEach(function (e) {
        var t,
          a =
            (t = o("WAWebHandleMsgParser").incomingMsgParser.parse(e)) == null
              ? void 0
              : t.success;
        if (a == null) throw r("err")("Expected WapNode");
        n[a.msgInfo.chat.toString()] = a.msgInfo.ts;
      });
      var a = Object.keys(n).map(function (e) {
        return o("WAWap").wap("item", {
          from: o("WAWap").CUSTOM_STRING(e),
          t: o("WAWap").INT(n[e]),
        });
      });
      return o("WAWap").wap(
        "ib",
        { from: o("WAWap").S_WHATSAPP_NET },
        o("WAWap").wap("thread_metadata", null, a),
      );
    }
    function u(e) {
      var t;
      return (t = o("WAWap")).wap(
        "ib",
        { from: t.S_WHATSAPP_NET },
        t.wap("offline", { count: t.INT(e) }),
      );
    }
    ((l.createOfflinePreviewIb = e),
      (l.createThreadMetatadaIB = s),
      (l.createOfflineCompleteIb = u));
  },
  98,
);
