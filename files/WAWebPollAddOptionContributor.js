__d(
  "WAWebPollAddOptionContributor",
  [
    "WAWebContactCollection",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebSystemMsgContactName",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebMsgGetters").getSender(e);
      return t == null
        ? null
        : o("WAWebUserPrefsMeUser").isMeAccount(t)
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
