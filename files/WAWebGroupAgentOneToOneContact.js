__d(
  "WAWebGroupAgentOneToOneContact",
  ["WAWebBotUtils", "WAWebChatGroupUtils", "WAWebGroupAgentProfileRouting"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return (function (t) {
        if (
          t ===
          o("WAWebGroupAgentProfileRouting").GroupAgentOneToOneTarget.HATCH_CHAT
        )
          return o("WAWebBotUtils").HATCH_BOT_FBID_WID;
        if (
          t === o("WAWebGroupAgentProfileRouting").GroupAgentOneToOneTarget.NONE
        )
          return null;
        if (t == null)
          return o("WAWebChatGroupUtils").getOneToOneContactFromGroupContact(
            e,
            n,
          );
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      })(o("WAWebGroupAgentProfileRouting").getGroupAgentOneToOneTarget(e, t));
    }
    l.getGroupAgentAwareOneToOneContact = e;
  },
  98,
);
