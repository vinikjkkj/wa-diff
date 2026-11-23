__d(
  "WAWebPhoneNumberSharingPrivacyLists",
  ["err"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      e: {
        var t = e;
        if (t == null) return [];
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.id === "pn_sharing:deny" &&
          "disallowedList" in t
        ) {
          var n = t.disallowedList;
          return n;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.id === "pn_sharing:allow" &&
          "allowedList" in t
        ) {
          var o = t.allowedList;
          return o;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.id === "pn_sharing:contact_exclude" &&
          "excludedContacts" in t
        ) {
          var a = t.excludedContacts;
          return a;
        }
        throw r("err")("phone-number-sharing: unexpected privacy list row");
      }
    }
    l.getPhoneNumberSharingListEntries = e;
  },
  98,
);
