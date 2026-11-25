__d(
  "WAWebMusicSongText",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return e.title.trim() !== "" ? e.title : s._(/*BTDS*/ "");
    }
    function u(e) {
      return e.author.trim() !== "" ? e.author : null;
    }
    ((l.getSongTitle = e), (l.getSongArtist = u));
  },
  226,
);
