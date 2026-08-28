__d(
  "ZenonMWJoinUtils",
  [
    "ZenonActorHooks",
    "ZenonBrowsers",
    "ZenonIGMediaUtil",
    "shouldUseSFUMediaPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("ZenonBrowsers").isFirefox() && e !== "answer"
        ? !1
        : !r("ZenonIGMediaUtil").shouldUseSFUOnly();
    }
    function s() {
      return r("shouldUseSFUMediaPath")(!1)
        ? !1
        : !o("ZenonBrowsers").isMobileSafari() &&
            !o("ZenonBrowsers").isDesktopSafari() &&
            !o("ZenonBrowsers").isFirefox() &&
            !o("ZenonBrowsers").isFBWebview() &&
            !o("ZenonActorHooks").ZenonActor.isInstagramUser();
    }
    ((l.canUseMwpp = e), (l.canDeescalate = s));
  },
  98,
);
