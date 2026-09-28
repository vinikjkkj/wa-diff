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
    "WAWebOutContactInviteGatingUtils",
    "WAWebOutContactModel",
    "WAWebPhoneNumberSearch",
    "WAWebSlicedMatcher",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getContacts = function () {
            return o("WAWebOutContactInviteGating").isOutContactInviteEnabled()
              ? [].concat(this.getModelsArray())
              : [];
          }),
          (n.getFilteredContacts = function (t) {
            if (
              !o(
                "WAWebOutContactInviteGatingUtils",
              ).canShow1to1OutContactsInSession()
            )
              return [];
            var e = c(this.getModelsArray());
            if (t == null || t === "")
              return []
                .concat(e)
                .sort(o("WAWebContactComparator").ContactComparator);
            var n = o("WAWebL10NAccentFold").accentFold(t).toLowerCase(),
              r = o("WAWebPhoneNumberSearch").numberSearch(n);
            return e
              .filter(function (e) {
                return p(e, n, r);
              })
              .sort(o("WAWebContactComparator").ContactComparator);
          }),
          (n.searchOutContactsExact = function (t) {
            var e = t.query;
            if (
              !o(
                "WAWebOutContactInviteGatingUtils",
              ).canShow1to1OutContactsInSession() ||
              !e.text
            )
              return [];
            var n = c(this.getModelsArray());
            return u(n, e);
          }),
          (n.searchOutContacts = function (t) {
            var e = t.query,
              n = t.skipFuzzySearch,
              r = n === void 0 ? !1 : n;
            if (
              !o(
                "WAWebOutContactInviteGatingUtils",
              ).canShow1to1OutContactsInSession() ||
              !e.text
            )
              return [];
            var a = c(this.getModelsArray()),
              i = u(a, e);
            if (i.length > 0 || r) return i;
            var l = d(e, a);
            return l == null ? [] : o("WAWebSlicedMatcher").drainMatcherSync(l);
          }),
          t
        );
      })(o("WAWebBaseCollection").BaseCollection);
    s.model = r("WAWebOutContactModel");
    function u(e, t) {
      var n = [];
      for (var r of e) {
        var o = r.searchMatchPrefix(t.text, t.number);
        o != null && n.push({ outContact: r, searchMatch: o });
      }
      return m(n);
    }
    function c(e) {
      return o("WAWebOutContactInviteGating").isOutContactInviteEnabled()
        ? e
        : e.filter(
            o("WAWebOutContactInviteGatingUtils")
              .canShowOutContactFor1to1Invite,
          );
    }
    function d(t, n) {
      if (
        !o(
          "WAWebOutContactInviteGatingUtils",
        ).canShow1to1OutContactsInSession() ||
        !t.text ||
        !o("WAWebContactSearchGatingUtils").canTermsMeetFuzzySearchThreshold(
          t.text.split(/\s+/).filter(Boolean),
        )
      )
        return null;
      var r =
          o("WAWebContactSearchGatingUtils").getFuzzySearchTimeoutThreshold() *
          1e3,
        a = new (o("WATimeUtils").MonotonicTimer)(),
        i = !1;
      return {
        candidates: n,
        sortResults: m,
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
        matchOne: function (n) {
          var e = n.searchMatchFuzzy(t.text);
          return e == null ? null : { outContact: n, searchMatch: e };
        },
      };
    }
    function m(e) {
      return e.sort(function (e, t) {
        return o("WAWebContactComparator").ContactComparator(
          e.outContact,
          t.outContact,
        );
      });
    }
    function p(e, t, n) {
      var r = o("WAWebL10NAccentFold").accentFold(e.getName()).toLowerCase();
      if (r.includes(t)) return !0;
      var a = n != null ? n : t;
      return !!e.phoneNumber.includes(a);
    }
    var _ = new s();
    l.OutContactCollection = _;
  },
  98,
);
