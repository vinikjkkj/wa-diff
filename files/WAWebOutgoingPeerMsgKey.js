__d(
  "WAWebOutgoingPeerMsgKey",
  ["WAWebMsgKey", "WAWebUserPrefsMeUser"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return new (r("WAWebMsgKey"))({
        fromMe: !0,
        remote: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        id: e,
      });
    }
    l.buildOutgoingPeerMsgKey = e;
  },
  98,
);
