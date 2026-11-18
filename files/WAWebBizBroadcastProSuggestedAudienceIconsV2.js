__d(
  "WAWebBizBroadcastProSuggestedAudienceIconsV2",
  [
    "WDSIconIcContacts.react",
    "WDSIconIcLabel.react",
    "WDSIconWdsIcChat.react",
    "WDSIconWdsIcUnsupportedMessage.react",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e === "active_chats"
        ? r("WDSIconWdsIcChat.react")
        : e === "inactive_chats"
          ? r("WDSIconWdsIcUnsupportedMessage.react")
          : e === "largest_list"
            ? r("WDSIconIcLabel.react")
            : e === "all_contacts"
              ? r("WDSIconIcContacts.react")
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    l.getProSuggestedAudienceIcon = e;
  },
  98,
);
