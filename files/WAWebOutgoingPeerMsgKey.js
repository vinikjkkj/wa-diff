__d(
  "WAWebOutgoingPeerMsgKey",
  ["WAWebMsgKey", "WAWebUserPrefsMeUser"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      return new (r("WAWebMsgKey"))({
        fromMe: !0,
        remote:
          (t = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) != null
            ? t
            : o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
        id: e,
      });
    }
    l.buildOutgoingPeerMsgKey = e;
  },
  98,
);
