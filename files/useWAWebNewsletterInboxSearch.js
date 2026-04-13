__d(
  "useWAWebNewsletterInboxSearch",
  ["WAWebChatGetters", "WAWebFuzzySearch", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useCallback;
    function u(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.filteredText,
        r;
      t[0] !== n
        ? ((r = function (t) {
            var e = n.trim() !== "";
            return t
              .filter(function (t) {
                if (!o("WAWebChatGetters").getIsNewsletter(t) || t == null)
                  return !1;
                if (e) {
                  var r,
                    a =
                      n == null || (r = n.toLocaleLowerCase()) == null
                        ? void 0
                        : r.trim();
                  return d(t, a);
                }
                return !0;
              })
              .sort(function (t, r) {
                var o;
                return c({
                  channelA: t,
                  channelB: r,
                  hasSearchText: e,
                  searchText:
                    n == null || (o = n.toLocaleLowerCase()) == null
                      ? void 0
                      : o.trim(),
                });
              });
          }),
          (t[0] = n),
          (t[1] = r))
        : (r = t[1]);
      var a = r;
      return a;
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
