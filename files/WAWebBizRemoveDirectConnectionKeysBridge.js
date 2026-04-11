__d(
  "WAWebBizRemoveDirectConnectionKeysBridge",
  [
    "Promise",
    "WAWebBusinessDirectConnectionCollection",
    "WAWebDirectConnectionGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      return o("WAWebDirectConnectionGatingUtils").supportsDirectConnection()
        ? r("WAWebBusinessDirectConnectionCollection").removeCypher(t)
        : (e || (e = n("Promise"))).resolve();
    }
    l.removeDirectConnectionKeys = s;
  },
  98,
);
