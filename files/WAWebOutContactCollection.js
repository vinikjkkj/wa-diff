__d(
  "WAWebOutContactCollection",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBaseCollection",
    "WAWebContactComparator",
    "WAWebContactSearchGatingUtils",
    "WAWebOutContactInviteGating",
    "WAWebOutContactModel",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.getFilteredContacts = function (t) {
            if (!o("WAWebOutContactInviteGating").isOutContactInviteEnabled())
              return [];
            var e = this.getModelsArray();
            if (t == null || t === "")
              return []
                .concat(e)
                .sort(o("WAWebContactComparator").ContactComparator);
            var n = t.toLowerCase();
            return e
              .filter(function (e) {
                return u(e, n);
              })
              .sort(o("WAWebContactComparator").ContactComparator);
          }),
          (r.searchOutContacts = function (n) {
            var t = n.query;
            if (
              !o("WAWebOutContactInviteGating").isOutContactInviteEnabled() ||
              !t.text
            )
              return [];
            var r = o("WAWebContactSearchGatingUtils").isPrefixSearchEnabled(),
              a = this.getModelsArray(),
              i = [];
            for (var l of a) {
              var s = r
                ? l.searchMatchPrefix(t.text, t.number)
                : l.searchMatchExact(t.text, t.number);
              s != null && i.push({ outContact: l, searchMatch: s });
            }
            if (
              i.length > 0 ||
              !o("WAWebContactSearchGatingUtils").isFuzzySearchEnabled() ||
              !o(
                "WAWebContactSearchGatingUtils",
              ).canTermsMeetFuzzySearchThreshold(
                t.text.split(/\s+/).filter(Boolean),
              )
            )
              return i;
            var u =
                o(
                  "WAWebContactSearchGatingUtils",
                ).getFuzzySearchTimeoutThreshold() * 1e3,
              c = new (o("WATimeUtils").MonotonicTimer)(),
              d = [];
            for (var m of a) {
              var p = c.elapsed();
              if (p > u) {
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "OutContact fuzzy search timeout ",
                      "ms (limit ",
                      "ms)",
                    ])),
                  p,
                  u,
                );
                break;
              }
              var _ = m.searchMatchFuzzy(t.text);
              _ != null && d.push({ outContact: m, searchMatch: _ });
            }
            return d;
          }),
          n
        );
      })(o("WAWebBaseCollection").BaseCollection);
    s.model = r("WAWebOutContactModel");
    function u(e, t) {
      var n = e.getName().toLowerCase();
      return !!(n.includes(t) || e.phoneNumber.includes(t));
    }
    var c = new s();
    ((l.OutContactCollectionImpl = s), (l.OutContactCollection = c));
  },
  98,
);
