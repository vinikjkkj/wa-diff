__d(
  "WAWebUsernameSearchPlaceholder",
  ["WAWebFbtCommon", "WAWebUsernameGatingUtils"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebUsernameGatingUtils").usernameSearchRequiresAtSign()
        ? r("WAWebFbtCommon")("Search name, number or @username")
        : r("WAWebFbtCommon")("Search name, number or username");
    }
    l.getUsernameSearchPlaceholder = e;
  },
  98,
);
