__d(
  "WAWebPlayChatListInstantsActionLoadable",
  ["JSResourceForInteraction", "WAWebLazyLoadedRetriable"],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebPlayChatListInstantsAction",
        )
          .__setRef("WAWebPlayChatListInstantsActionLoadable")
          .load();
        return e.playChatListInstants;
      }, "PlayChatListInstantsAction"),
      s = async function () {
        var t = await e();
        return t.apply(void 0, arguments);
      };
    l.playChatListInstantsLoadable = s;
  },
  98,
);
