__d(
  "useWAWebNewsletterInboxSearch",
  ["WAWebChatGetters", "WAWebFuzzySearch", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useCallback;
    function u(e) {
      var t = e.filteredText,
        n = s(
          function (e) {
            var n = t.trim() !== "";
            return e
              .filter(function (e) {
                if (!o("WAWebChatGetters").getIsNewsletter(e) || e == null)
                  return !1;
                if (n) {
                  var r,
                    a =
                      t == null || (r = t.toLocaleLowerCase()) == null
                        ? void 0
                        : r.trim();
                  return d(e, a);
                }
                return !0;
              })
              .sort(function (e, r) {
                var o;
                return c({
                  channelA: e,
                  channelB: r,
                  hasSearchText: n,
                  searchText:
                    t == null || (o = t.toLocaleLowerCase()) == null
                      ? void 0
                      : o.trim(),
                });
              });
          },
          [t],
        );
      return n;
    }
    function c(e) {
      var t,
        n,
        r = e.channelA,
        a = e.channelB,
        i = e.hasSearchText,
        l = e.searchText;
      if (!i) return 0;
      var s =
          (t = r.newsletterMetadata) == null || (t = t.name) == null
            ? void 0
            : t.toLocaleLowerCase(),
        u =
          (n = a.newsletterMetadata) == null || (n = n.name) == null
            ? void 0
            : n.toLocaleLowerCase();
      return s == null ||
        s === "" ||
        u == null ||
        u === "" ||
        l == null ||
        l === ""
        ? 0
        : l.toLowerCase() === s.toLowerCase()
          ? -1
          : l.toLowerCase() === u.toLowerCase()
            ? 1
            : s.startsWith(l)
              ? -1
              : u.startsWith(l)
                ? 1
                : s.includes(l)
                  ? -1
                  : u.includes(l)
                    ? 1
                    : o("WAWebFuzzySearch").fuzzyMatches(l, s).length -
                      o("WAWebFuzzySearch").fuzzyMatches(l, u).length;
    }
    function d(e, t) {
      var n,
        r =
          (n = e.newsletterMetadata) == null || (n = n.name) == null
            ? void 0
            : n.toLocaleLowerCase();
      return r == null || r === "" || t == null || t === ""
        ? !1
        : o("WAWebFuzzySearch").fuzzySearch(t, r);
    }
    ((l.useNewsletterInboxSearch = u), (l.sortChannelResults = c));
  },
  98,
);
