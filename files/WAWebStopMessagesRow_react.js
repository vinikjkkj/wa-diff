__d(
  "WAWebStopMessagesRow.react",
  [
    "fbt",
    "WAWebChatInfoDrawerRow.react",
    "WAWebMarketingMessagesFeedbackResumeConfirmationLoadable",
    "WAWebMarketingMessagesFeedbackStopConfirmationLoadable",
    "WAWebMarketingMessagesUserFeedbackGatingUtils",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebSettingsNotificationsIcon.react",
    "WAWebText.react",
    "WAWebUnmuteNotificationsRefreshedIcon.react",
    "WAWebWamEnumMmUserControlsEntryPoint",
    "WDSSwitch.react",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { secondaryColor: { color: "xhslqc4", $$css: !0 } };
    function d(e) {
      var t = e.chat,
        n = e.contact,
        a = e.isRefresh,
        i = o("useWAWebModelValues").useModelValues(n, [
          "id",
          "isContactOptedOut",
          "isEverOptedOutOfMarketingMessages",
        ]),
        l = i.isContactOptedOut;
      if (
        (!i.getIsMarketingMessageThread() &&
          !i.isEverOptedOutOfMarketingMessages) ||
        !o(
          "WAWebMarketingMessagesUserFeedbackGatingUtils",
        ).isMMOptOutEnabled() ||
        o(
          "WAWebMarketingMessagesUserFeedbackGatingUtils",
        ).isMMUserControlsExceptionNumberPrefixMatch(i.id)
      )
        return null;
      var d = function () {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(
              o("WAWebMarketingMessagesFeedbackStopConfirmationLoadable")
                .WAWebMarketingMessagesFeedbackStopConfirmationLoadable,
              {
                chat: t,
                logEntryPoint: o("WAWebWamEnumMmUserControlsEntryPoint")
                  .MM_USER_CONTROLS_ENTRY_POINT.BUSINESS_PROFILE,
              },
            ),
            { transition: "default" },
          );
        },
        m = function () {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(
              o("WAWebMarketingMessagesFeedbackResumeConfirmationLoadable")
                .WAWebMarketingMessagesFeedbackResumeConfirmationLoadable,
              {
                chat: t,
                logEntryPoint: o("WAWebWamEnumMmUserControlsEntryPoint")
                  .MM_USER_CONTROLS_ENTRY_POINT.BUSINESS_PROFILE,
              },
            ),
            { transition: "default" },
          );
        },
        p = l ? m : d,
        _ = u.jsx(o("WAWebText.react").WAWebTextTitle, {
          children: s._(/*BTDS*/ "Offers and announcements"),
        }),
        f = u.jsx(o("WAWebText.react").WAWebTextMuted, {
          children: s._(
            /*BTDS*/ "Get offers and announcements from this business.",
          ),
        }),
        g =
          a === !0
            ? u.jsx(
                o("WAWebUnmuteNotificationsRefreshedIcon.react")
                  .UnmuteNotificationsRefreshedIcon,
                {},
              )
            : u.jsx(
                o("WAWebSettingsNotificationsIcon.react")
                  .SettingsNotificationsIcon,
                { iconXstyle: c.secondaryColor, height: 20 },
              ),
        h = u.jsx(r("WDSSwitch.react"), {
          onChange: r("WAWebNoop"),
          tabIndex: -1,
          testid: void 0,
          value: !l,
        });
      return a === !0
        ? u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
            icon: g,
            onClick: p,
            secondaryTitle: f,
            side: h,
            testid: void 0,
            title: _,
          })
        : u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRow, {
            icon: g,
            onClick: p,
            secondaryTitle: f,
            side: h,
            spaced: !1,
            testid: void 0,
            title: _,
          });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
