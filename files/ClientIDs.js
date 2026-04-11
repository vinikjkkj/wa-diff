__d(
  "ClientIDs",
  ["randomInt"],
  function (t, n, r, o, a, i, l) {
    var e = new Set();
    function s() {
      var t = Date.now(),
        n = t + ":" + (r("randomInt")(0, 4294967295) + 1);
      return (e.add(n), n);
    }
    function u(t) {
      return e.has(t);
    }
    ((l.getNewClientID = s), (l.isExistingClientID = u));
  },
  98,
);
