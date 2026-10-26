__d(
  "WAWebMusicOnChatsAcsProject",
  ["WAWebABProps", "cr:17794"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t =
        n("cr:17794") == null
          ? void 0
          : n("cr:17794").ACS_NON_PROD_PROJECTS.WA_ChatsMusicInternal;
      return t != null && s() ? t : e;
    }
    function s() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "is_meta_employee_or_internal_tester",
        ) &&
        o("WAWebABProps").getABPropConfigValue(
          "music_on_chats_internal_acs_enabled",
        )
      );
    }
    l.getMusicOnChatsAcsProject = e;
  },
  98,
);
