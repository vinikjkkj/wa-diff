__d(
  "WAWebNewsletterInboxSearch.react",
  [
    "WAWebChatEntryPoint",
    "WAWebChatListSearch.react",
    "WAWebDrawerSection.react",
    "WAWebFbtCommon",
    "WAWebKeyboardHotKeys.react",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterInboxSearchLogging",
    "WAWebNewsletterMembershipUtil",
    "WAWebNewsletterWamoSubUtils",
    "WAWebOpenNewsletterChat",
    "WAWebWamEnumTsSurface",
    "WAWebWamEnumUpdateTabSearchEventType",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = function (t) {
        var e = {
          followedChannelsCount: 0,
          adminChannelsCount: 0,
          premiumChannelsFollowedCount: 0,
        };
        return (
          t.forEach(function (t) {
            o("WAWebNewsletterMembershipUtil").iAmSubscriber(
              t.newsletterMetadata,
            )
              ? (e.followedChannelsCount++,
                o(
                  "WAWebNewsletterWamoSubUtils",
                ).newsletterSupportsSubscriptions(t.newsletterMetadata) &&
                  e.premiumChannelsFollowedCount++)
              : o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(
                  t.newsletterMetadata,
                ) && e.adminChannelsCount++;
          }),
          e
        );
      };
    function d(e) {
      var t = e.filteredText,
        n = e.handleSearchChange,
        a = e.handleSelectNewsletter,
        i = e.listData,
        l = e.newsletters,
        d = e.ref,
        m = e.searchQuery,
        p = u(!1),
        _ = p[0],
        f = p[1],
        g = c(l),
        h = g.adminChannelsCount,
        y = g.followedChannelsCount,
        C = g.premiumChannelsFollowedCount,
        b = function () {
          t.trim() === "" && f(!1);
        },
        v = function () {
          f(!1);
        },
        S = function () {
          t.trim() === "" &&
            o(
              "WAWebNewsletterInboxSearchLogging",
            ).logNewsletterInboxSearchEvent({
              updateTabSearchEventType: o(
                "WAWebWamEnumUpdateTabSearchEventType",
              ).UPDATE_TAB_SEARCH_EVENT_TYPE.SEARCH_TAP,
              channelsFollowedCount: y,
              channelsAdminCount: h,
              premiumChannelsFollowedCount: o(
                "WAWebNewsletterGatingUtils",
              ).isWamoSubLoggingEnabled()
                ? C
                : void 0,
            });
        },
        R = function () {
          t.trim() === "" && (_ || S(), f(!0));
        },
        L = function (t) {
          var e = i.length === 0 ? null : i[0];
          e != null &&
            e.type === "NEWSLETTER_CHAT_CELL" &&
            (t.preventDefault(),
            o("WAWebOpenNewsletterChat").openNewsletterChat({
              newsletter: e.newsletter,
              onSelect: a(e),
              chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                .NewsletterChatlist,
              discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                .CHANNEL_UPDATES_HOME_SEARCH,
            }));
        },
        E = function (t) {
          (m.updateQuery(t), n(t));
        };
      return s.jsx(r("WAWebDrawerSection.react"), {
        animation: !1,
        theme: "list-section",
        children: s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
          onBlur: b,
          children: s.jsx(o("WAWebChatListSearch.react").ListSearch, {
            ref: d,
            placeholder: r("WAWebFbtCommon")("Search"),
            onSearch: E,
            borderBottom: !1,
            onEnter: L,
            onSearchInputFocus: R,
            onBackButton: v,
            type: o("WAWebChatListSearch.react").ListSearchType
              .NEWSLETTER_SEARCH,
            showPlaceholderUntilType: !0,
          }),
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
