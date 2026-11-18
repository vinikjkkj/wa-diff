__d(
  "WAWebDebugCustomerManagerNux",
  ["WAWebDebugCustomerManagerEducationBanner"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o(
        "WAWebDebugCustomerManagerEducationBanner",
      ).getCustomerManagerEducationBannerDebugState();
    }
    ((e.doc =
      "Show why the Customer Manager education banner is or is not on screen: the day count, whether it was closed here, whether it is retired across the business, and whether the stored record is intact. Reads without writing."),
      (e.paramsToExecute = []));
    function s() {
      return o(
        "WAWebDebugCustomerManagerEducationBanner",
      ).advanceCustomerManagerEducationBannerDebugDay();
    }
    ((s.doc =
      "Backdate the banner to yesterday so the next Customer Manager open counts a new day. Reopen Customer Manager after running it. Repeat to walk to retirement without waiting three days."),
      (s.paramsToExecute = []));
    function u() {
      return o(
        "WAWebDebugCustomerManagerEducationBanner",
      ).resetCustomerManagerEducationBannerForDebug();
    }
    ((u.doc =
      "Put the Customer Manager education banner back to never-seen: clears the day count, the pause window and the retirement, and resets the suggested actions that replace it. Clearing the retirement reaches the business\u2019s other devices. Reopen Customer Manager afterwards."),
      (u.paramsToExecute = []));
    function c() {
      return o(
        "WAWebDebugCustomerManagerEducationBanner",
      ).resetCustomerManagerEducationBannerForDebug({ includeIntroNux: !0 });
    }
    ((c.doc =
      "The reset above, and the Customer Manager intro popup too, so the business is treated as arriving for the very first time. The intro popup shows before the banner."),
      (c.paramsToExecute = []));
    var d = {
      customerManagerEducationBannerNextDay: s,
      customerManagerEducationBannerState: e,
      resetCustomerManagerEducationBanner: u,
      resetCustomerManagerEducationBannerAndIntro: c,
    };
    l.default = d;
  },
  98,
);
