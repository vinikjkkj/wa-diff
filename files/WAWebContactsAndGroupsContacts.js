__d(
  "WAWebContactsAndGroupsContacts",
  [
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebBoolFunc",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebContactCollection",
    "WAWebContactComparator",
    "WAWebContactGetters",
    "WAWebContactsAndGroupsBirthdays",
    "WAWebContactsAndGroupsGroupInteractions",
    "WAWebContactsAndGroupsNameLetter",
    "WAWebContactsAndGroupsPresence",
    "WAWebContactsAndGroupsThisWeek",
    "WAWebFavoriteCollection",
    "WAWebFormatConfiguration",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebL10NAccentFold",
    "WAWebPhoneNumberSearch",
    "WAWebUserUtils",
    "WAWebWamEnumOppositeVisibleIdentificationType",
    "WAWebWidFactory",
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
        a = r === void 0 ? s : r,
        i = t.now,
        l = t.onlinePresenceKeys,
        c = l === void 0 ? u : l,
        p = t.query,
        f = t.sort,
        h = t.today,
        y =
          h === void 0
            ? new Date(
                o("WATimeUtils").unixTimeWithoutClockSkewCorrection() * 1e3,
              )
            : h,
        C = _(p),
        b = e.filter(function (e) {
          return C(e) && g(e, n, i, c);
        });
      return f === "recent"
        ? m(b, a, i)
        : f === "nameAscending"
          ? b
          : f === "birthday"
            ? d(b, y)
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    f,
                );
              })();
    }
    function d(e, t) {
      return e
        .map(function (e) {
          return {
            contact: e,
            days: o("WAWebContactsAndGroupsBirthdays").isSampleBirthday(e)
              ? 0
              : o("WAWebContactsAndGroupsBirthdays").getDaysUntilBirthday(
                  o("WAWebFrontendContactGetters").getBirthday(e),
                  t,
                ),
          };
        })
        .sort(function (e, t) {
          var n, r;
          return (
            ((n = e.days) != null ? n : 1 / 0) -
            ((r = t.days) != null ? r : 1 / 0)
          );
        })
        .map(function (e) {
          var t = e.contact;
          return t;
        });
    }
    function m(e, t, n) {
      return e
        .map(function (e) {
          var r, o;
          return {
            contact: e,
            time: Math.max(
              (r = (o = x(e)) == null ? void 0 : o.t) != null ? r : 0,
              p(e, t, n),
            ),
          };
        })
        .sort(function (e, t) {
          return t.time - e.time;
        })
        .map(function (e) {
          var t = e.contact;
          return t;
        });
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
      var t = e.trim();
      if (t === "") return o("WAWebBoolFunc").returnTrue;
      var n = o("WAWebL10NAccentFold").accentFold(t),
        r = o("WAWebPhoneNumberSearch").numberSearch(n);
      return function (e) {
        return e.searchMatchExact(n, r) != null;
      };
    }
    function f(e) {
      var t = e.trim().split(/\s+/).filter(Boolean);
      return t.length > 0
        ? o("WAWebFormatConfiguration").SearchName({ terms: t })
        : void 0;
    }
    function g(e, t, n, r) {
      return (function (t) {
        if (t === "all") return !0;
        if (t === "unsaved")
          return !o("WAWebFrontendContactGetters").getIsMyContact(e);
        if (t === "favorites") return D(e);
        if (t === "recent") return S(E(e), n);
        if (t === "online") return L(e, r);
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          "listId" in t
        ) {
          var a = t.listId;
          return R(e, a);
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      })(t);
    }
    function h(e, t) {
      if (t.length === 0) return e;
      var n = new Set(e);
      return o("WAWebContactsAndGroupsNameLetter").sortContactsByLetter(
        [].concat(
          e,
          t.filter(function (e) {
            return !n.has(e);
          }),
        ),
      );
    }
    function y() {
      var e = new Map();
      return (
        o("WAWebChatCollection").ChatCollection.forEach(function (t) {
          var n = C(t);
          n != null && e.set(n.id.toString(), n);
        }),
        Array.from(e.values()).sort(
          o("WAWebContactComparator").ContactComparator,
        )
      );
    }
    function C(e) {
      if (!e.id.isRegularUser() || o("WAWebUserUtils").isMeAccount(e.id))
        return null;
      var t = e.accountLid,
        n =
          t == null
            ? null
            : o("WAWebContactCollection").ContactCollection.get(t);
      return n == null ||
        !n.isActive() ||
        o("WAWebFrontendContactGetters").getIsMyContact(n) ||
        !b(e, n)
        ? null
        : n;
    }
    function b(e, t) {
      return o("WAWebFrontendChatGetters").getShouldAppearInList(e) && v(t);
    }
    function v(e) {
      return (
        !r("isStringNullOrEmpty")(o("WAWebContactGetters").getNotifyName(e)) ||
        o("WAWebFrontendContactGetters").getFormattedNameAndType(e).type !==
          o("WAWebWamEnumOppositeVisibleIdentificationType")
            .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PLACEHOLDER
      );
    }
    function S(e, t) {
      return (
        e != null &&
        o("WAWebContactsAndGroupsThisWeek").happenedThisWeek(e.t, t) &&
        o("WAWebFrontendChatGetters").getShouldAppearInList(e)
      );
    }
    function R(e, t) {
      var n,
        r = E(e);
      return (
        r != null &&
        ((n = o("WAWebChatGetters").getLabels(r)) == null
          ? void 0
          : n.includes(t)) === !0
      );
    }
    function L(e, t) {
      var n = o("WAWebContactsAndGroupsPresence").getContactPresenceKey(e);
      return n != null && t.has(n);
    }
    function E(e) {
      return o("WAWebChatCollection").ChatCollection.getLatestChatForWid(e.id);
    }
    function k(e) {
      return I(e).length > 0;
    }
    function I(e) {
      var t = T(e),
        n = t != null ? [e.id, t] : [e.id];
      return n.filter(function (e) {
        return (
          o("WAWebFavoriteCollection").FavoriteCollection.get(e.toString()) !=
          null
        );
      });
    }
    function T(e) {
      return e.phoneNumber != null
        ? e.phoneNumber
        : e.id.isLid()
          ? o("WAWebApiContact").getPhoneNumber(
              o("WAWebWidFactory").asUserLidOrThrow(e.id),
            )
          : null;
    }
    function D(e) {
      var t = E(e);
      return t == null ? k(e) : !t.isLocked && t.isFavorite;
    }
    function x(e) {
      var t = E(e);
      return t != null && o("WAWebFrontendChatGetters").getShouldAppearInList(t)
        ? t
        : null;
    }
    ((l.CHAT_LIST_VISIBILITY_EVENTS = e),
      (l.getContactRows = c),
      (l.getContactGroupInteractionTime = p),
      (l.createContactSearch = _),
      (l.getSearchHighlightFormatters = f),
      (l.matchesContactFilter = g),
      (l.getAllContacts = h),
      (l.getUnsavedContacts = y),
      (l.getUnsavedChatContact = C),
      (l.canListUnsavedPerson = b),
      (l.hasChattedThisWeek = S),
      (l.getContactChat = E),
      (l.isChatlessFavorite = k),
      (l.getStoredChatlessFavoriteIds = I),
      (l.isFavoriteContact = D));
  },
  98,
);
