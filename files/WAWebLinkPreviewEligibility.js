__d(
  "WAWebLinkPreviewEligibility",
  ["WAWebCodeFormatMutator", "WAWebLinkify", "WAWebSpoilerFormatRegex"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.getShouldHideSpoilers,
        n = e.sender,
        r = e.text;
      return o("WAWebLinkify").findLinks(
        s({ getShouldHideSpoilers: t, text: r }),
        !0,
        n,
      )[0];
    }
    function s(e) {
      var t = e.getShouldHideSpoilers,
        n = e.text,
        r = o("WAWebCodeFormatMutator").removeCodeBlocks(n);
      return o("WAWebSpoilerFormatRegex").hasSpoilerMarkup(r) && t()
        ? o("WAWebSpoilerFormatRegex").maskSpoilers(r, " ")
        : r;
    }
    l.findFirstPreviewEligibleWebLink = e;
  },
  98,
);
