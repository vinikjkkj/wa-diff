__d(
  "WAWebContactsAndGroupsBirthdayCakePlaysContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.createContext(null);
    function c() {
      var e = new Set();
      return {
        hasPlayed: function (n) {
          return e.has(n);
        },
        markPlayed: function (n) {
          e.add(n);
        },
      };
    }
    ((l.ContactsAndGroupsBirthdayCakePlaysContext = u),
      (l.createBirthdayCakePlays = c));
  },
  98,
);
