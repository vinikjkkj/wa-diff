__d(
  "WAWebSpoilerFormatRegex",
  [],
  function (t, n, r, o, a, i) {
    var e = /\|\|([^\s|][^|]*[^\s|]|[^\s|])\|\|/g,
      l = /\|\|([^\s|][^|]*[^\s|]|[^\s|])\|\|/;
    function s(e) {
      return l.test(e);
    }
    function u(e) {
      return e != null && e.indexOf("||") >= 0 && s(e);
    }
    ((i.SPOILER_REGEX = e), (i.containsSpoiler = s), (i.hasSpoilerMarkup = u));
  },
  66,
);
