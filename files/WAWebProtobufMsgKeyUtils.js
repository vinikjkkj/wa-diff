__d(
  "WAWebProtobufMsgKeyUtils",
  ["invariant", "WAWebMsgKey", "WAWebUserPrefsMeUser", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      var n = e.fromMe,
        a = e.id,
        i = e.participant,
        l = e.remoteJid,
        u = i != null ? i : t == null ? void 0 : t.toString();
      (n != null && l != null && a != null) || s(0, 56276);
      var c =
          u != null && o("WAWebWidFactory").isWidlike(u)
            ? o("WAWebWidFactory").createWid(u)
            : void 0,
        d = o("WAWebWidFactory").createWid(l);
      return (
        (d.isGroup() || d.isBroadcast()) &&
          n &&
          (c = o("WAWebUserPrefsMeUser").getMaybeMePnUser()),
        new (r("WAWebMsgKey"))({
          fromMe: n,
          id: a,
          participant: c,
          remote: o("WAWebWidFactory").createWid(l),
        })
      );
    }
    function u(e) {
      var t;
      return {
        fromMe: e.fromMe,
        id: e.id,
        participant:
          e.fromMe || (t = e.participant) == null
            ? void 0
            : t.toString({ legacy: !0 }),
        remoteJid: e.remote.toString({ legacy: !0 }),
      };
    }
    ((l.protobufToMsgKey = e), (l.msgKeyToProtobuf = u));
  },
  98,
);
