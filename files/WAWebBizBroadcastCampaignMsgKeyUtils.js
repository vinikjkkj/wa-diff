__d(
  "WAWebBizBroadcastCampaignMsgKeyUtils",
  [
    "WAWebMsgKey",
    "WAWebParseMsgKeyString",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return new (r("WAWebMsgKey"))({
        fromMe: !0,
        id: u(e),
        remote: o("WAWebWidFactory").createWid(t),
      });
    }
    function s(e, t) {
      return new (r("WAWebMsgKey"))({
        fromMe: !0,
        id: u(e),
        participant: o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
        remote: o("WAWebWidFactory").createWid(t),
      });
    }
    function u(e) {
      if (e.includes("_")) {
        var t = r("WAWebParseMsgKeyString")(e);
        return t.id;
      }
      return e;
    }
    ((l.reconstructCampaignMsgKey = e),
      (l.reconstructCampaignMsgKeyWithParticipant = s),
      (l.extractStanzaId = u));
  },
  98,
);
