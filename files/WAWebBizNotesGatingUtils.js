__d(
  "WAWebBizNotesGatingUtils",
  ["WAWebABProps", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_notes_v1_enabled")
      );
    }
    l.smbNotesV1Enabled = e;
  },
  98,
);
