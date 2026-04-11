__d(
  "WAWebWidToFormattedNameOrNumber",
  ["WAWebContactCollection", "WAWebFrontendContactGetters", "WAWebWidFormat"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebContactCollection").ContactCollection.get(e);
      return t
        ? o("WAWebFrontendContactGetters").getFormattedName(t)
        : o("WAWebWidFormat").widToFormattedUser(e);
    }
    l.default = e;
  },
  98,
);
