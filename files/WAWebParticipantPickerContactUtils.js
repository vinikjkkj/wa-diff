__d(
  "WAWebParticipantPickerContactUtils",
  [
    "WAWebContactCollection",
    "WAWebContactCollectionUtils",
    "WAWebContactComparator",
    "WAWebContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebL10NAccentFold",
    "WAWebLidMigrationUtils",
    "WAWebPhoneNumberSearch",
    "WAWebReachoutTimelockUtils",
    "WAWebUserUtils",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.excludedContacts,
        n = e.frequentlyContacted,
        a = e.members,
        i = e.participants,
        l = e.retainSelected,
        s = e.searchText,
        u = e.selectedSubgroup,
        d = e.showCommunityDirectory,
        m = e.showSubgroupFilter,
        p = Array.from(t != null ? t : []),
        _ = l ? [] : i;
      if (u != null && m) {
        var f = r("WAWebGroupMetadataCollection").assertGet(u),
          g = f.participants
            .map(function (e) {
              return e.contact;
            })
            .filter(function (e) {
              return !o("WAWebContactGetters").getIsMe(e);
            });
        return {
          contacts: c(S(g, [].concat(_, p), l), s),
          communityDirectory: [],
        };
      }
      var h =
          d && a != null
            ? a
                .filter(function (e) {
                  var t = e.id;
                  return !o("WAWebUserUtils").isMeAccount(t) && !t.isLid();
                })
                .slice()
                .sort(o("WAWebContactComparator").ContactComparator)
            : [],
        y = o("WAWebContactCollectionUtils").getFilteredContacts(
          o("WAWebContactCollection").ContactCollection,
          {},
        ),
        C = S(y, h, l),
        b = S(C, [].concat(_, n, p), l);
      return {
        contacts: c(b, s),
        communityDirectory: c(
          S(l ? [].concat(h, y) : h, [].concat(R(t, i, l), C), l),
          s,
        ),
      };
    }
    function s(e) {
      var t,
        n = e.excludedContacts,
        r = e.parentGroupId,
        o = e.participants,
        a = e.retainSelected,
        i = e.searchText,
        l = e.sourceGroupMembers,
        s = e.suggestedContacts;
      return s == null ||
        i !== "" ||
        r != null ||
        ((t = l == null ? void 0 : l.length) != null ? t : 0) > 0
        ? []
        : S(s, R(n, o, a), a);
    }
    function u(e, t, n, r) {
      var o = r ? S(e, Array.from(t != null ? t : []), !0) : e;
      return c(o, n);
    }
    function c(e, t) {
      if (t === "") return Array.from(e);
      var n = o("WAWebL10NAccentFold").accentFold(t),
        r = o("WAWebPhoneNumberSearch").numberSearch(n);
      return e.filter(function (e) {
        return e.searchMatchExact(n, r) != null;
      });
    }
    function d(e) {
      return p(e.id);
    }
    function m(e, t) {
      var n = p(t);
      return e.find(function (e) {
        return d(e) === n;
      });
    }
    function p(e) {
      var t = e.isRegularUser()
        ? o("WAWebLidMigrationUtils").toUserLid(e)
        : null;
      return (t != null ? t : e).toString();
    }
    function _(e, t) {
      return m(e, t.id);
    }
    function f(e, t, n) {
      if (!n)
        return e.filter(function (e) {
          return !e.id.equals(t.id);
        });
      var r = d(t);
      return e.filter(function (e) {
        return d(e) !== r;
      });
    }
    function g(e) {
      return (
        !o("WAWebReachoutTimelockUtils").isUserReachoutTimelockedAndVisible() ||
        e.canSendMsgWhileTimelocked
      );
    }
    function h(e, t, n, r) {
      return !n || (!(r != null ? r : _(e, t) != null) && g(t));
    }
    function y(e, t, n) {
      return n
        ? _(e, t)
        : e.find(function (e) {
            return e.id.equals(t.id);
          });
    }
    function C(e, t, n) {
      var r = n ? new Set(e.map(d)).size : e.length;
      return r + t;
    }
    function b(e, t, n, r, o) {
      return o && _(t, e) != null ? "duplicate" : n >= r ? "limit" : "add";
    }
    function v(e) {
      var t = new Map();
      for (var n of e) {
        var r = d(n),
          o = t.get(r);
        (o == null || (n.isContactBlocked && !o.isContactBlocked)) &&
          t.set(r, n);
      }
      return t;
    }
    function S(e, t, n) {
      if (!n) return Array.from(new Set(e).difference(new Set(t)));
      var a = new Set(t.map(d)),
        i = new Set(e.map(d)),
        l = v(
          [].concat(
            e,
            o("WAWebContactCollection").ContactCollection.getModelsArray(),
          ),
        );
      return Array.from(i)
        .filter(function (e) {
          return !a.has(e);
        })
        .map(function (e) {
          return r("nullthrows")(l.get(e));
        });
    }
    function R(e, t, n) {
      return n ? Array.from(e != null ? e : []) : t;
    }
    ((l.getParticipantPickerContacts = e),
      (l.getParticipantPickerSuggestions = s),
      (l.getParticipantPickerSourceContacts = u),
      (l.getParticipantPickerContactKey = d),
      (l.findSelectedParticipantPickerContactForWid = m),
      (l.findSelectedParticipantPickerContact = _),
      (l.getParticipantsWithoutContact = f),
      (l.isUnpickedParticipantPickerContact = h),
      (l.getParticipantPickerSelectedContact = y),
      (l.getParticipantPickerSelectedCount = C),
      (l.getParticipantPickerContactAddition = b));
  },
  98,
);
