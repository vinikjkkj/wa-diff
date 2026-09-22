__d(
  "WAWebBizAiResponseSettingsV2Labels",
  ["fbt", "WAWebBizAiResponseSettingsV2Model", "err"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return e === "CONTACTS"
        ? s._(/*BTDS*/ "My contacts")
        : e === "ADS"
          ? s._(/*BTDS*/ "People from ads")
          : e === "ALL"
            ? s._(/*BTDS*/ "Everyone else")
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function u(e) {
      var t = o("WAWebBizAiResponseSettingsV2Model").getMode(e, "CONTACTS"),
        n = o("WAWebBizAiResponseSettingsV2Model").getMode(e, "ADS"),
        a = o("WAWebBizAiResponseSettingsV2Model").getMode(e, "ALL");
      if (t == null || n == null || a == null)
        throw r("err")(
          "response settings v2 status summary is missing an audience mode",
        );
      var i = t + "|" + n + "|" + a;
      return i === "UNMUTED|UNMUTED|UNMUTED"
        ? s._(
            /*BTDS*/ "Responding to your contacts, people from ads and everyone else.",
          )
        : i === "UNMUTED|UNMUTED|SUGGESTED_REPLIES"
          ? s._(
              /*BTDS*/ "Responding to your contacts and people from ads, suggesting for everyone else.",
            )
          : i === "UNMUTED|UNMUTED|MUTED"
            ? s._(
                /*BTDS*/ "Responding to your contacts and people from ads. Off for everyone else.",
              )
            : i === "UNMUTED|SUGGESTED_REPLIES|UNMUTED"
              ? s._(
                  /*BTDS*/ "Responding to your contacts and everyone else, suggesting for people from ads.",
                )
              : i === "UNMUTED|SUGGESTED_REPLIES|SUGGESTED_REPLIES"
                ? s._(
                    /*BTDS*/ "Responding to your contacts, suggesting for people from ads and everyone else.",
                  )
                : i === "UNMUTED|SUGGESTED_REPLIES|MUTED"
                  ? s._(
                      /*BTDS*/ "Responding to your contacts, suggesting for people from ads. Off for everyone else.",
                    )
                  : i === "UNMUTED|MUTED|UNMUTED"
                    ? s._(
                        /*BTDS*/ "Responding to your contacts and everyone else. Off for people from ads.",
                      )
                    : i === "UNMUTED|MUTED|SUGGESTED_REPLIES"
                      ? s._(
                          /*BTDS*/ "Responding to your contacts, suggesting for everyone else. Off for people from ads.",
                        )
                      : i === "UNMUTED|MUTED|MUTED"
                        ? s._(
                            /*BTDS*/ "Responding to your contacts. Off for people from ads and everyone else.",
                          )
                        : i === "SUGGESTED_REPLIES|UNMUTED|UNMUTED"
                          ? s._(
                              /*BTDS*/ "Responding to people from ads and everyone else, suggesting for your contacts.",
                            )
                          : i === "SUGGESTED_REPLIES|UNMUTED|SUGGESTED_REPLIES"
                            ? s._(
                                /*BTDS*/ "Responding to people from ads, suggesting for your contacts and everyone else.",
                              )
                            : i === "SUGGESTED_REPLIES|UNMUTED|MUTED"
                              ? s._(
                                  /*BTDS*/ "Responding to people from ads, suggesting for your contacts. Off for everyone else.",
                                )
                              : i ===
                                  "SUGGESTED_REPLIES|SUGGESTED_REPLIES|UNMUTED"
                                ? s._(
                                    /*BTDS*/ "Responding to everyone else, suggesting for your contacts and people from ads.",
                                  )
                                : i ===
                                    "SUGGESTED_REPLIES|SUGGESTED_REPLIES|SUGGESTED_REPLIES"
                                  ? s._(
                                      /*BTDS*/ "Suggesting for your contacts, people from ads and everyone else.",
                                    )
                                  : i ===
                                      "SUGGESTED_REPLIES|SUGGESTED_REPLIES|MUTED"
                                    ? s._(
                                        /*BTDS*/ "Suggesting for your contacts and people from ads. Off for everyone else.",
                                      )
                                    : i === "SUGGESTED_REPLIES|MUTED|UNMUTED"
                                      ? s._(
                                          /*BTDS*/ "Responding to everyone else, suggesting for your contacts. Off for people from ads.",
                                        )
                                      : i ===
                                          "SUGGESTED_REPLIES|MUTED|SUGGESTED_REPLIES"
                                        ? s._(
                                            /*BTDS*/ "Suggesting for your contacts and everyone else. Off for people from ads.",
                                          )
                                        : i === "SUGGESTED_REPLIES|MUTED|MUTED"
                                          ? s._(
                                              /*BTDS*/ "Suggesting for your contacts. Off for people from ads and everyone else.",
                                            )
                                          : i === "MUTED|UNMUTED|UNMUTED"
                                            ? s._(
                                                /*BTDS*/ "Responding to people from ads and everyone else. Off for your contacts.",
                                              )
                                            : i ===
                                                "MUTED|UNMUTED|SUGGESTED_REPLIES"
                                              ? s._(
                                                  /*BTDS*/ "Responding to people from ads, suggesting for everyone else. Off for your contacts.",
                                                )
                                              : i === "MUTED|UNMUTED|MUTED"
                                                ? s._(
                                                    /*BTDS*/ "Responding to people from ads. Off for your contacts and everyone else.",
                                                  )
                                                : i ===
                                                    "MUTED|SUGGESTED_REPLIES|UNMUTED"
                                                  ? s._(
                                                      /*BTDS*/ "Responding to everyone else, suggesting for people from ads. Off for your contacts.",
                                                    )
                                                  : i ===
                                                      "MUTED|SUGGESTED_REPLIES|SUGGESTED_REPLIES"
                                                    ? s._(
                                                        /*BTDS*/ "Suggesting for people from ads and everyone else. Off for your contacts.",
                                                      )
                                                    : i ===
                                                        "MUTED|SUGGESTED_REPLIES|MUTED"
                                                      ? s._(
                                                          /*BTDS*/ "Suggesting for people from ads. Off for your contacts and everyone else.",
                                                        )
                                                      : i ===
                                                          "MUTED|MUTED|UNMUTED"
                                                        ? s._(
                                                            /*BTDS*/ "Responding to everyone else. Off for your contacts and people from ads.",
                                                          )
                                                        : i ===
                                                            "MUTED|MUTED|SUGGESTED_REPLIES"
                                                          ? s._(
                                                              /*BTDS*/ "Suggesting for everyone else. Off for your contacts and people from ads.",
                                                            )
                                                          : s._(
                                                              /*BTDS*/ "Off for your contacts, people from ads and everyone else.",
                                                            );
    }
    function c(e) {
      return e === "UNMUTED"
        ? s._(/*BTDS*/ "AI responds")
        : e === "SUGGESTED_REPLIES"
          ? s._(/*BTDS*/ "AI suggests")
          : e === "MUTED"
            ? s._(/*BTDS*/ "Off")
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function d(e) {
      return e === "UNMUTED"
        ? s._(/*BTDS*/ "Sends replies automatically")
        : e === "SUGGESTED_REPLIES"
          ? s._(/*BTDS*/ "Drafts replies for you to approve")
          : e === "MUTED"
            ? s._(/*BTDS*/ "Won't reply")
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function m(e) {
      return e === "CONTACTS"
        ? s._(/*BTDS*/ "When your contacts message you")
        : e === "ADS"
          ? s._(/*BTDS*/ "When people from ads message you")
          : e === "ALL"
            ? s._(/*BTDS*/ "When anyone else messages you")
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function p(e) {
      return e === "CONTACTS"
        ? s._(/*BTDS*/ "Applies even if they first messaged you from an ad.")
        : e === "ADS"
          ? s._(/*BTDS*/ "People who tapped your ad to start a chat.")
          : e === "ALL"
            ? s._(
                /*BTDS*/ "Anyone not in your contacts who didn't come from an ad.",
              )
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    ((l.getAudienceLabel = e),
      (l.getStatusSummary = u),
      (l.getModeLabel = c),
      (l.getModeDescription = d),
      (l.getModePickerHeader = m),
      (l.getModePickerFooter = p));
  },
  226,
);
