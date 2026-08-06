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
    "WAWebSlicedMatcher",
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
          (r.searchOutContactsExact = function (t) {
            var e = t.query;
            if (
              !o("WAWebOutContactInviteGating").isOutContactInviteEnabled() ||
              !e.text
            )
              return [];
            var n = o("WAWebContactSearchGatingUtils").isPrefixSearchEnabled(),
              r = [];
            for (var a of this.getModelsArray()) {
              var i = n
                ? a.searchMatchPrefix(e.text, e.number)
                : a.searchMatchExact(e.text, e.number);
              i != null && r.push({ outContact: a, searchMatch: i });
            }
            return u(r);
          }),
          (r.$OutContactCollectionImpl$p_1 = function (n) {
            if (
              !o("WAWebOutContactInviteGating").isOutContactInviteEnabled() ||
              !n.text ||
              !o("WAWebContactSearchGatingUtils").isFuzzySearchEnabled() ||
              !o(
                "WAWebContactSearchGatingUtils",
              ).canTermsMeetFuzzySearchThreshold(
                n.text.split(/\s+/).filter(Boolean),
              )
            )
              return null;
            var t = this.getModelsArray(),
              r =
                o(
                  "WAWebContactSearchGatingUtils",
                ).getFuzzySearchTimeoutThreshold() * 1e3,
              a = new (o("WATimeUtils").MonotonicTimer)(),
              i = !1;
            return {
              candidates: t,
              sortResults: u,
              isTimedOut: function () {
                if (i) return !0;
                var t = a.elapsed();
                return t > r
                  ? (o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "OutContact fuzzy search timeout ",
                          "ms (limit ",
                          "ms)",
                        ])),
                      t,
                      r,
                    ),
                    (i = !0),
                    !0)
                  : !1;
              },
              matchOne: function (t) {
                var e = t.searchMatchFuzzy(n.text);
                return e == null ? null : { outContact: t, searchMatch: e };
              },
            };
          }),
          (r.searchOutContactsFuzzy = function (t) {
            var e = this,
              n = t.query,
              r = t.signal;
            return o("WAWebSlicedMatcher").searchFuzzyAsync(function () {
              return e.$OutContactCollectionImpl$p_1(n);
            }, r);
          }),
          (r.searchOutContacts = function (t) {
            var e = t.query,
              n = t.skipFuzzySearch,
              r = n === void 0 ? !1 : n;
            if (
              !o("WAWebOutContactInviteGating").isOutContactInviteEnabled() ||
              !e.text
            )
              return [];
            var a = this.searchOutContactsExact({ query: e });
            if (a.length > 0 || r) return a;
            var i = this.$OutContactCollectionImpl$p_1(e);
            return i == null ? [] : o("WAWebSlicedMatcher").drainMatcherSync(i);
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
    l.OutContactCollection = d;
  },
  98,
);
