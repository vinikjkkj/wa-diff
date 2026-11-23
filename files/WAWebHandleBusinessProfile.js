__d(
  "WAWebHandleBusinessProfile",
  ["WAWebApiContact", "WAWebBackendApi", "WAWebWidFactory", "WAWebWidToJid"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.from,
        n = o("WAWebWidFactory").createWidFromWidLike(t.toString());
      await u(n);
    }
    async function s(e) {
      var t = e.hash,
        n = await o("WAWebApiContact").getContactRecordByHash(t);
      if (n == null) return !1;
      var r = o("WAWebWidFactory").createWid(n.id);
      return (await u(r), !0);
    }
    function u(e) {
      return o("WAWebBackendApi").frontendSendAndReceive(
        "updateBusinessProfile",
        { wid: o("WAWebWidToJid").widToUserJid(e) },
      );
    }
    ((l.handleBusinessProfile = e), (l.handleBusinessProfileHash = s));
  },
  98,
);
