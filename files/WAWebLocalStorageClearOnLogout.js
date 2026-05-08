__d(
  "WAWebLocalStorageClearOnLogout",
  ["WAWebLocalStorage"],
  function (t, n, r, o, a, i, l) {
    var e = ["WAWebFalcoBuffer"],
      s = ["falco_queue_log"];
    function u() {
      if (r("WAWebLocalStorage") != null) {
        for (var t of e) r("WAWebLocalStorage").removeItem(t);
        var n = Object.keys(r("WAWebLocalStorage"));
        for (var o of n)
          for (var a of s)
            if (o.startsWith(a)) {
              r("WAWebLocalStorage").removeItem(o);
              break;
            }
      }
    }
    l.clearLocalStorageKeysOnLogout = u;
  },
  98,
);
