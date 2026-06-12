__d(
  "WAWebOutContactCollection",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBaseCollection",
    "WAWebContactComparator",
    "WAWebContactSearchGatingUtils",
    "WAWebL10NAccentFold",
    "WAWebOutContactInviteGating",
    "WAWebOutContactModel",
    "WAWebPhoneNumberSearch",
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
          (r.getContacts = function () {
            return o("WAWebOutContactInviteGating").isOutContactInviteEnabled()
              ? [].concat(this.getModelsArray())
              : [];
          }),
          (r.getFilteredContacts = function (t) {
            if (!o("WAWebOutContactInviteGating").isOutContactInviteEnabled())
              return [];
            var e = this.getModelsArray();
            if (t == null || t === "")
              return []
                .concat(e)
                .sort(o("WAWebContactComparator").ContactComparator);
            var n = o("WAWebL10NAccentFold").accentFold(t).toLowerCase(),
              r = o("WAWebPhoneNumberSearch").numberSearch(n);
            return e
              .filter(function (e) {
                return c(e, n, r);
              })
              .sort(o("WAWebContactComparator").ContactComparator);
          }),
          (r.searchOutContacts = function (n) {
            var t = n.query,
              r = n.skipFuzzySearch,
              a = r === void 0 ? !1 : r;
            if (
              !o("WAWebOutContactInviteGating").isOutContactInviteEnabled() ||
              !t.text
            )
              return [];
            var i = o("WAWebContactSearchGatingUtils").isPrefixSearchEnabled(),
              l = this.getModelsArray(),
              s = [];
            for (var c of l) {
              var d = i
                ? c.searchMatchPrefix(t.text, t.number)
                : c.searchMatchExact(t.text, t.number);
              d != null && s.push({ outContact: c, searchMatch: d });
            }
            if (
              s.length > 0 ||
              a ||
              !o("WAWebContactSearchGatingUtils").isFuzzySearchEnabled() ||
              !o(
                "WAWebContactSearchGatingUtils",
              ).canTermsMeetFuzzySearchThreshold(
                t.text.split(/\s+/).filter(Boolean),
              )
            )
              return u(s);
            var m =
                o(
                  "WAWebContactSearchGatingUtils",
                ).getFuzzySearchTimeoutThreshold() * 1e3,
              p = new (o("WATimeUtils").MonotonicTimer)(),
              _ = [];
            for (var f of l) {
              var g = p.elapsed();
              if (g > m) {
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "OutContact fuzzy search timeout ",
                      "ms (limit ",
                      "ms)",
                    ])),
                  g,
                  m,
                );
                break;
              }
              var h = f.searchMatchFuzzy(t.text);
              h != null && _.push({ outContact: f, searchMatch: h });
            }
            return u(_);
          }),
          n
        );
      })(o("WAWebBaseCollection").BaseCollection);
    s.model = r("WAWebOutContactModel");
    function u(e) {
      return e.sort(function (e, t) {
        return o("WAWebContactComparator").ContactComparator(
          e.outContact,
          t.outContact,
        );
      });
    }
    function c(e, t, n) {
      var r = o("WAWebL10NAccentFold").accentFold(e.getName()).toLowerCase();
      if (r.includes(t)) return !0;
      var a = n != null ? n : t;
      return !!e.phoneNumber.includes(a);
    }
    var d = new s();
    ((l.OutContactCollectionImpl = s), (l.OutContactCollection = d));
  },
  98,
);
