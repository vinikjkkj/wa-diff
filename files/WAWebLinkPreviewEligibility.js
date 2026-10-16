__d(
  "WAWebLinkPreviewEligibility",
  [
    "WAWebCodeFormatMutator",
    "WAWebLinkify",
    "WAWebSpoilerFormatRegex",
    "WAWebSpoilerNotificationMask",
  ],
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
    function u(e) {
      var t = e.matchedText,
        n = e.text;
      if (t == null || t === "" || n == null) return !1;
      if (!o("WAWebSpoilerFormatRegex").hasSpoilerMarkup(n)) return !0;
      var r = o("WAWebSpoilerNotificationMask").maskSpoilersPreservingLength(
        n,
        { parseBlockCode: !0, parseInlineCode: !0 },
      );
      return o("WAWebLinkify")
        .findLinks(r)
        .some(function (e) {
          var n = r.slice(e.index, e.index + e.url.length);
          return n === t;
        });
    }
    ((l.findFirstPreviewEligibleWebLink = e), (l.isLinkPreviewEligible = u));
  },
  98,
);
