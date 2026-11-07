__d(
  "WAWebParticipantPickerContactUtils",
  [
    "WAWebContactCollection",
    "WAWebContactCollectionUtils",
    "WAWebContactComparator",
    "WAWebContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebL10NAccentFold",
    "WAWebPhoneNumberSearch",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.excludedContacts,
        n = e.frequentlyContacted,
        a = e.members,
        i = e.participants,
        l = e.searchText,
        s = e.selectedSubgroup,
        u = e.showCommunityDirectory,
        c = e.showSubgroupFilter,
        d,
        m = [],
        p = Array.from(t != null ? t : []);
      if (s && c) {
        var _ = r("WAWebGroupMetadataCollection").assertGet(s),
          f = [];
        (_.participants.forEach(function (e) {
          o("WAWebContactGetters").getIsMe(e.contact) || f.push(e.contact);
        }),
          (d = Array.from(new Set(f).difference(new Set([].concat(i, p))))));
      } else {
        var g = o("WAWebContactCollectionUtils").getFilteredContacts(
            o("WAWebContactCollection").ContactCollection,
            {},
          ),
          h = [];
        (a &&
          u &&
          ((h = a
            .filter(function (e) {
              var t = e.id;
              return !o("WAWebUserPrefsMeUser").isMeAccount(t) && !t.isLid();
            })
            .sort(o("WAWebContactComparator").ContactComparator)),
          (m = Array.from(new Set(h).difference(new Set(i))))),
          (d = Array.from(
            new Set(g).difference(new Set([].concat(i, h, n, p))),
          )));
      }
      var y = l;
      if (!y) return { contacts: d, communityDirectory: m };
      y = o("WAWebL10NAccentFold").accentFold(y);
      var C = o("WAWebPhoneNumberSearch").numberSearch(y),
        b = function (t) {
          return t.searchMatchExact(y, C) != null;
        };
      return { contacts: d.filter(b), communityDirectory: m.filter(b) };
    }
    function s(e) {
      var t,
        n = e.parentGroupId,
        r = e.participants,
        o = e.searchText,
        a = e.sourceGroupMembers,
        i = e.suggestedContacts;
      return i == null ||
        o !== "" ||
        n != null ||
        ((t = a == null ? void 0 : a.length) != null ? t : 0) > 0
        ? []
        : Array.from(new Set(i).difference(new Set(r)));
    }
    function u(e, t) {
      if (e == null || e.length === 0) {
        var n = [];
        return n;
      }
      if (!t) return Array.from(e);
      var r = o("WAWebL10NAccentFold").accentFold(t),
        a = o("WAWebPhoneNumberSearch").numberSearch(r);
      return e.filter(function (e) {
        return e.searchMatchExact(r, a) != null;
      });
    }
    ((l.getParticipantPickerContacts = e),
      (l.getParticipantPickerSuggestions = s),
      (l.getParticipantPickerSourceContacts = u));
  },
  98,
);
