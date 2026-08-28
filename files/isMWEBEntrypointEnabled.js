__d(
  "isMWEBEntrypointEnabled",
  ["MWEBEntrypointsKillswitch.enum", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case r("MWEBEntrypointsKillswitch.enum").INBOX_INTERSTITIAL:
          return r("justknobx")._("2598");
        case r("MWEBEntrypointsKillswitch.enum").INBOX_ROOT:
          return r("justknobx")._("782");
        case r("MWEBEntrypointsKillswitch.enum").JEWEL_THREADLIST:
          return r("justknobx")._("2599");
        case r("MWEBEntrypointsKillswitch.enum").INBOX_THREADLIST:
          return r("justknobx")._("2600");
        case r("MWEBEntrypointsKillswitch.enum").IN_THREAD_GAP_UI:
          return r("justknobx")._("2601");
        case r("MWEBEntrypointsKillswitch.enum").IN_THREAD_SCROLL_BANNER:
          return r("justknobx")._("2602");
        case r("MWEBEntrypointsKillswitch.enum").AUTO_RESTORE:
          return r("justknobx")._("2603");
        case r("MWEBEntrypointsKillswitch.enum").IN_THREAD_SEARCH:
          return r("justknobx")._("2604");
        case r("MWEBEntrypointsKillswitch.enum")
          .INBOX_THREADLIST_UNIVERSAL_SEARCH:
          return r("justknobx")._("2768");
        case r("MWEBEntrypointsKillswitch.enum").MEDIA_GALLERY_RESTORE:
          return r("justknobx")._("2841");
        case r("MWEBEntrypointsKillswitch.enum").PINNED_MESSAGES:
          return r("justknobx")._("2937");
        case r("MWEBEntrypointsKillswitch.enum").BUMP_MESSAGES:
          return !0;
        case r("MWEBEntrypointsKillswitch.enum").SIDEBAR_SETTINGS_PRIVACY_MENU:
          return r("justknobx")._("4788");
        case r("MWEBEntrypointsKillswitch.enum").JEWEL_EVERGREEN_PIN_UPSELL:
          return r("justknobx")._("1878");
        case r("MWEBEntrypointsKillswitch.enum").DYI:
        case r("MWEBEntrypointsKillswitch.enum").EB_SETTINGS:
        case r("MWEBEntrypointsKillswitch.enum").IGD_NO_KILLSWITCH_APPLICABLE:
        case r("MWEBEntrypointsKillswitch.enum")
          .NOT_AN_ENTRYPOINT_NO_KILLSWITCH_APPLICABLE:
        case r("MWEBEntrypointsKillswitch.enum")
          .IN_DEVELOPMENT_ADD_A_TODO_COMMENT_WITH_A_TASK_ABOVE_THIS_TO_ADD_A_KILLSWITCH:
          return !0;
      }
    }
    l.default = e;
  },
  98,
);
