__d(
  "WAWebAiThreadTypeUtils",
  ["WAWebProtobufsAICommon.pb", "err"],
  function (t, n, r, o, a, i, l) {
    var e = {
      Unknown: "unknown",
      Default: "default",
      Incognito: "incognito",
      SideChat: "side_chat",
    };
    function s(t) {
      switch (t) {
        case e.Unknown:
          return e.Unknown;
        case e.Default:
          return e.Default;
        case e.Incognito:
          return e.Incognito;
        case e.SideChat:
          return e.SideChat;
        default:
          throw r("err")(
            "getAiThreadTypeFromString error: invalid AI thread type",
          );
      }
    }
    function u(t) {
      return t == null
        ? e.Unknown
        : t ===
            o("WAWebProtobufsAICommon.pb")
              .AIThreadInfo$AIThreadClientInfo$AIThreadType.DEFAULT
          ? e.Default
          : t ===
              o("WAWebProtobufsAICommon.pb")
                .AIThreadInfo$AIThreadClientInfo$AIThreadType.INCOGNITO
            ? e.Incognito
            : t ===
                o("WAWebProtobufsAICommon.pb")
                  .AIThreadInfo$AIThreadClientInfo$AIThreadType.UNKNOWN
              ? e.Unknown
              : t ===
                  o("WAWebProtobufsAICommon.pb")
                    .AIThreadInfo$AIThreadClientInfo$AIThreadType.SIDE_CHAT
                ? e.SideChat
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        t,
                    );
                  })();
    }
    function c(t) {
      e: {
        if (t === e.Default)
          return o("WAWebProtobufsAICommon.pb")
            .AIThreadInfo$AIThreadClientInfo$AIThreadType.DEFAULT;
        if (t === e.Incognito)
          return o("WAWebProtobufsAICommon.pb")
            .AIThreadInfo$AIThreadClientInfo$AIThreadType.INCOGNITO;
        if (t === e.SideChat)
          return o("WAWebProtobufsAICommon.pb")
            .AIThreadInfo$AIThreadClientInfo$AIThreadType.SIDE_CHAT;
        if (t === e.Unknown)
          return o("WAWebProtobufsAICommon.pb")
            .AIThreadInfo$AIThreadClientInfo$AIThreadType.UNKNOWN;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    function d(t, n) {
      e: {
        if (n === e.Default) return { title: t, aiThreadType: e.Default };
        if (n === e.Incognito) return { title: t, aiThreadType: e.Incognito };
        if (n === e.SideChat) return { title: t, aiThreadType: e.SideChat };
        throw n === e.Unknown
          ? r("err")("getAiThreadInfoFromType error: Unknown AI thread type")
          : Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                n,
            );
      }
    }
    ((l.AiThreadType = e),
      (l.getAiThreadTypeFromString = s),
      (l.getAiThreadTypeFromProto = u),
      (l.getProtoTypeFromAiThreadType = c),
      (l.getAiThreadInfoFromType = d));
  },
  98,
);
