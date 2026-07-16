__d(
  "WAWebStarredMsgsUtils",
  ["WAWebFrontendMsgGetters", "WAWebStarredMsgCollection"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.starredMsgs;
      return (
        t ||
          ((e.starredMsgs = t =
            new (o("WAWebStarredMsgCollection").StarredMsgCollection)()),
          e.starredMsgs.add(
            o("WAWebStarredMsgCollection").AllStarredMsgsCollection.filter(
              function (t) {
                return o("WAWebFrontendMsgGetters").getChat(t) === e;
              },
            ),
          )),
        t
      );
    }
    l.getStarredMsgs = e;
  },
  98,
);
