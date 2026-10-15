__d(
  "WAWebNewsletterTabNavigateTo",
  [
    "WATimeUtils",
    "WAWebCmd",
    "WAWebNavBarTypes",
    "WAWebNewsletterCollection",
    "WAWebNewsletterTabPulseState",
    "WAWebOpenLastActiveChatAction",
    "WAWebOpenLastActiveNewsletterAction",
    "WAWebOpenNewsletterTab",
    "WAWebSideNavButtonsActivityModel",
    "WAWebUserPrefsNewsletter",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      (o("WAWebOpenLastActiveChatAction").cancelPendingLastActiveChatRestore(),
        o("WAWebCmd").Cmd.closeActiveChat(),
        o("WAWebCmd").Cmd.setActiveNavBarItem(
          o("WAWebNavBarTypes").NavBarItems.Newsletters,
        ),
        s());
    }
    function s() {
      (o("WAWebOpenNewsletterTab").openNewsletterTab(),
        o("WAWebUserPrefsNewsletter").setNewsletterTabLastSeenTimestamp(
          o("WATimeUtils").unixTime(),
        ),
        r("WAWebNewsletterCollection").trigger("newsletter_tab_close"),
        o("WAWebSideNavButtonsActivityModel").setLastActiveButton(
          o("WAWebNavBarTypes").NavBarItems.Newsletters,
        ),
        r("WAWebNewsletterTabPulseState").cancelPulse(),
        o("WAWebOpenLastActiveNewsletterAction").openLastActiveNewsletter());
    }
    ((l.navigateToNewsletterTab = e), (l.showNewsletterTab = s));
  },
  98,
);
