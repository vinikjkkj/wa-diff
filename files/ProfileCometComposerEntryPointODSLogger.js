__d(
  "ProfileCometComposerEntryPointODSLogger",
  ["ODS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "profile_composer_entrypoint";
    function u(t) {
      (e || (e = o("ODS"))).bumpEntityKey(389, s, "opened." + t);
    }
    l.logProfileCometComposerEntryPointOpened = u;
  },
  98,
);
