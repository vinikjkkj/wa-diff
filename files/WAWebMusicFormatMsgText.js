__d(
  "WAWebMusicFormatMsgText",
  ["fbt", "WAWebMsgGetters", "WAWebMusicGatingUtils"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t,
        n = e.msg;
      return (t = u(n)) != null ? t : s._(/*BTDS*/ "");
    }
    function u(e) {
      var t,
        n =
          (t = o("WAWebMsgGetters").getMusicData(e)) == null
            ? void 0
            : t.title.trim();
      return n == null ||
        n === "" ||
        !o("WAWebMusicGatingUtils").isMusicOnChatsGeogatingEnabled()
        ? null
        : n;
    }
    l.default = e;
  },
  226,
);
