__d(
  "WAWebContactsAndGroupsContacts",
  [
    "WAWebBoolFunc",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebContactCollection",
    "WAWebContactComparator",
    "WAWebContactGetters",
    "WAWebContactsAndGroupsGroupInteractions",
    "WAWebContactsAndGroupsPresence",
    "WAWebContactsAndGroupsThisWeek",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebL10NAccentFold",
    "WAWebPhoneNumberSearch",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumOppositeVisibleIdentificationType",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [
        "change:isLocked",
        "change:msgsLength",
        "change:createdLocally",
        "change:chatViewMode",
      ],
      s = new Map(),
      u = new Set();
    function c(e, t) {
      var n = t.filter,
        r = t.groupInteractionTimes,
        o = r === void 0 ? s : r,
        a = t.now,
        i = t.onlinePresenceKeys,
        l = i === void 0 ? u : i,
        c = t.query,
        m = t.sort,
        p = g(c),
        _ = e.filter(function (e) {
          return p(e) && y(e, n, a, l);
        });
      return m === "recent"
        ? d(_, o, a)
        : m === "nameAscending"
          ? _
          : m === "nameDescending"
            ? _.reverse()
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    m,
                );
              })();
    }
    function d(e, t, n) {
      return e
        .map(function (e) {
          return { contact: e, interaction: m(e, t, n) };
        })
        .sort(function (e, t) {
          return f(e.interaction, t.interaction);
        })
        .map(function (e) {
          var t = e.contact;
          return t;
        });
    }
    function m(e, t, n) {
      var r,
        o,
        a = (r = (o = x(e)) == null ? void 0 : o.t) != null ? r : 0,
        i = Math.max(a, p(e, t, n)),
        l = _(i);
      return { day: l, isOneToOneDay: a > 0 && _(a) === l, time: i };
    }
    function p(e, t, n) {
      var r = o("WAWebContactsAndGroupsGroupInteractions").getPersonKey(e.id),
        a = r == null ? null : t.get(r);
      return a != null &&
        o("WAWebContactsAndGroupsThisWeek").happenedThisWeek(a, n)
        ? a
        : 0;
    }
    function _(e) {
      return e > 0 ? o("WAWebContactsAndGroupsThisWeek").startOfDay(e) : 0;
    }
    function f(e, t) {
      return (
        +(t.time > 0) - +(e.time > 0) ||
        t.day - e.day ||
        Number(t.isOneToOneDay) - Number(e.isOneToOneDay) ||
        t.time - e.time
      );
    }
    function g(e) {
      var t = e.trim();
      if (t === "") return o("WAWebBoolFunc").returnTrue;
      var n = o("WAWebL10NAccentFold").accentFold(t),
        r = o("WAWebPhoneNumberSearch").numberSearch(n);
      return function (e) {
        return e.searchMatchExact(n, r) != null;
      };
    }
    function h(e) {
      return e.trim().split(/\s+/).filter(Boolean);
    }
    function y(e, t, n, r) {
      return (function (t) {
        if (t === "all") return !0;
        if (t === "unsaved")
          return !o("WAWebFrontendContactGetters").getIsMyContact(e);
        if (t === "favorites") {
          var a;
          return ((a = x(e)) == null ? void 0 : a.isFavorite) === !0;
        }
        if (t === "recent") return L(D(e), n);
        if (t === "online") return T(e, r);
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          "listId" in t
        ) {
          var i = t.listId;
          return I(e, i);
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      })(t);
    }
    function C(e, t) {
      if (t.length === 0) return e;
      var n = new Set(e);
      return []
        .concat(
          e,
          t.filter(function (e) {
            return !n.has(e);
          }),
        )
        .sort(o("WAWebContactComparator").ContactComparator);
    }
    function b() {
      var e = new Map();
      return (
        o("WAWebChatCollection").ChatCollection.forEach(function (t) {
          var n = v(t);
          n != null && e.set(n.id.toString(), n);
        }),
        Array.from(e.values()).sort(
          o("WAWebContactComparator").ContactComparator,
        )
      );
    }
    function v(e) {
      if (!e.id.isRegularUser() || o("WAWebUserPrefsMeUser").isMeAccount(e.id))
        return null;
      var t = e.accountLid,
        n =
          t == null
            ? null
            : o("WAWebContactCollection").ContactCollection.get(t);
      return n == null ||
        !n.isActive() ||
        o("WAWebFrontendContactGetters").getIsMyContact(n) ||
        !S(e, n)
        ? null
        : n;
    }
    function S(e, t) {
      return o("WAWebFrontendChatGetters").getShouldAppearInList(e) && R(t);
    }
    function R(e) {
      return (
        !r("isStringNullOrEmpty")(o("WAWebContactGetters").getNotifyName(e)) ||
        o("WAWebFrontendContactGetters").getFormattedNameAndType(e).type !==
          o("WAWebWamEnumOppositeVisibleIdentificationType")
            .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PLACEHOLDER
      );
    }
    function L(e, t) {
      return (
        e != null &&
        o("WAWebContactsAndGroupsThisWeek").happenedThisWeek(e.t, t) &&
        o("WAWebFrontendChatGetters").getShouldAppearInList(e)
      );
    }
    function E(e, t, n) {
      var r = function (r) {
        return e.filter(function (e) {
          return y(e, r, n, u);
        }).length;
      };
      return {
        all: e.length,
        favorites: r("favorites"),
        lists: new Map(
          t.map(function (e) {
            return [e, r({ listId: e })];
          }),
        ),
        unsaved: r("unsaved"),
      };
    }
    function k(e, t) {
      var n = new Set();
      return (
        e.forEach(function (e) {
          var r = D(e);
          r != null && y(e, "recent", t, u) && n.add(r);
        }),
        n
      );
    }
    function I(e, t) {
      var n,
        r = D(e);
      return (
        r != null &&
        ((n = o("WAWebChatGetters").getLabels(r)) == null
          ? void 0
          : n.includes(t)) === !0
      );
    }
    function T(e, t) {
      var n = o("WAWebContactsAndGroupsPresence").getContactPresenceKey(e);
      return n != null && t.has(n);
    }
    function D(e) {
      return o("WAWebChatCollection").ChatCollection.getLatestChatForWid(e.id);
    }
    function x(e) {
      var t = D(e);
      return t != null && o("WAWebFrontendChatGetters").getShouldAppearInList(t)
        ? t
        : null;
    }
    ((l.CHAT_LIST_VISIBILITY_EVENTS = e),
      (l.getContactRows = c),
      (l.createContactSearch = g),
      (l.getContactSearchHighlightTerms = h),
      (l.matchesContactFilter = y),
      (l.getAllContacts = C),
      (l.getUnsavedContacts = b),
      (l.getUnsavedChatContact = v),
      (l.canListUnsavedPerson = S),
      (l.hasChattedThisWeek = L),
      (l.countContactsByFilter = E),
      (l.getRecentContactChats = k),
      (l.getContactChat = D));
  },
  98,
);
