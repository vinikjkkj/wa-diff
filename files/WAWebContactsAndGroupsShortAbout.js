__d(
  "WAWebContactsAndGroupsShortAbout",
  [
    "fbt",
    "WAWebContactCollection",
    "WAWebContactsAndGroupsGroupInteractions",
    "WAWebContactsAndGroupsSampleData",
    "WAWebFrontendContactGetters",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = [
        "change:textStatusString",
        "change:textStatusEmoji",
        "change:textStatusExpiryTs",
        "change:textStatusEphemeralDuration",
        "change:textStatusLastUpdateTime",
      ],
      u = 4,
      c = 2,
      d = [],
      m = null;
    function p(e) {
      return (
        e.id.isRegularUser() &&
        o("WAWebTextStatusGatingUtils").receiveTextStatusForNewSurfacesEnabled()
      );
    }
    function _(e) {
      var t;
      return {
        textStatusEmoji: (t = o(
          "WAWebFrontendContactGetters",
        )).getTextStatusEmoji(e),
        textStatusEphemeralDuration: t.getTextStatusEphemeralDuration(e),
        textStatusExpiryTs: t.getTextStatusExpiryTs(e),
        textStatusLastUpdateTime: t.getTextStatusLastUpdateTime(e),
        textStatusString: t.getTextStatusString(e),
      };
    }
    function f(e, t, n, r) {
      var a = t.textStatusEphemeralDuration,
        i = t.textStatusExpiryTs;
      return p(e) &&
        o("WAWebTextStatusUtils").isEphemeralTextStatus(a) &&
        (i == null || i > n) &&
        o("WAWebTextStatusUtils").shouldDisplayTextStatus(t)
        ? { emoji: t.textStatusEmoji, text: t.textStatusString }
        : r
          ? g(e)
          : null;
    }
    function g(e) {
      var t =
        o("WAWebContactsAndGroupsSampleData").getSampleDataSession() +
        ":" +
        o("WAWebContactCollection").ContactCollection.length;
      m !== t &&
        ((d = o("WAWebContactsAndGroupsSampleData").getSampleContacts().map(h)),
        (m = t));
      var n = d.indexOf(h(e));
      return n < 0 || n % u !== c
        ? null
        : {
            emoji: null,
            text:
              Math.floor(n / u) % 2 === 0 ? s._(/*BTDS*/ "") : s._(/*BTDS*/ ""),
          };
    }
    function h(e) {
      var t;
      return (t = o("WAWebContactsAndGroupsGroupInteractions").getPersonKey(
        e.id,
      )) != null
        ? t
        : e.id.toString();
    }
    ((l.SHORT_ABOUT_CONTACT_EVENTS = e),
      (l.canShowShortAbout = p),
      (l.readTextStatus = _),
      (l.getShortAbout = f));
  },
  226,
);
