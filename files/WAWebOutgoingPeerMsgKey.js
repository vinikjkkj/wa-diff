__d(
  "WAWebOutgoingPeerMsgKey",
  ["WAWebMsgKey", "WAWebUserUtils", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return new (r("WAWebMsgKey"))({
        fromMe: !0,
        remote: r("nullthrows")(
          o("WAWebUserUtils").getStableMaybeMeUser(),
          "stableMeUser",
        ),
        id: e,
      });
    }
    l.buildOutgoingPeerMsgKey = e;
  },
  98,
);
