__d(
  "WAWebPollAddOptionContributor",
  [
    "WAWebContactCollection",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebSystemMsgContactName",
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebMsgGetters").getSender(e);
      return t == null
        ? null
        : o("WAWebUserUtils").isMeAccount(t)
          ? { kind: "me" }
          : {
              kind: "other",
              name: o("WAWebSystemMsgContactName").getSystemMsgContactName(
                o("WAWebFrontendMsgGetters").getChat(e),
                o("WAWebContactCollection").ContactCollection.gadd(t),
              ),
            };
    }
    l.getPollAddOptionContributor = e;
  },
  98,
);
