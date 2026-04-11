__d(
  "WAWebSetPushnameLocallyAction",
  ["WAWebConnModel", "WAWebUserPrefsGeneral"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      ((o("WAWebConnModel").Conn.pushname = e),
        o("WAWebUserPrefsGeneral").setPushname(e));
    }
    l.setPushnameLocally = e;
  },
  98,
);
