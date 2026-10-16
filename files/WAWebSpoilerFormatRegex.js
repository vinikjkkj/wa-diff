__d(
  "WAWebSpoilerFormatRegex",
  [],
  function (t, n, r, o, a, i) {
    var e = "||",
      l = /\|\|([^\s|][^|]*[^\s|]|[^\s|])\|\|/g,
      s = /\|\|([^\s|][^|]*[^\s|]|[^\s|])\|\|/;
    function u(e) {
      return s.test(e);
    }
    function c(e) {
      return e != null && e.indexOf("||") >= 0 && u(e);
    }
    function d(e, t) {
      return e.replace(l, t);
    }
    ((i.SPOILER_DELIMITER = e),
      (i.SPOILER_REGEX = l),
      (i.hasSpoilerMarkup = c),
      (i.maskSpoilers = d));
  },
  66,
);
