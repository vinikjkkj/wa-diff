__d(
  "WaterfallIDGenerator",
  ["CurrentUser", "md5", "uuidv4"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = 2147483647;
      return Math.random() * e;
    }
    function s() {
      return Math.floor(Date.now() / 1e3);
    }
    function u() {
      var t = r("md5")([r("CurrentUser").getID(), s(), e()].join(":"));
      return t == null ? r("uuidv4")() : t;
    }
    l.generate = u;
  },
  98,
);
