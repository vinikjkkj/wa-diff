__d(
  "WAWebContactsAndGroupsTodoKinds",
  ["react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = [
        "joinRequests",
        "saveContact",
        "openPoll",
        "event",
        "groupSetup",
        "growthSuggestion",
        "pollGroup",
        "newMedia",
        "restrictedChats",
      ];
    function c(e) {
      return [].concat(e).sort(function (e, t) {
        return u.indexOf(e.kind) - u.indexOf(t.kind);
      });
    }
    ((l.TODO_KIND_ORDER = u), (l.sortTodoItems = c));
  },
  98,
);
