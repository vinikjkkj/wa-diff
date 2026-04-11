__d(
  "WAWebUpdaterHardExpireTime",
  [],
  function (t, n, r, o, a, i) {
    var e,
      l = document.getElementById("hard_expire_time"),
      s = parseInt(l == null || (e = l.dataset) == null ? void 0 : e.time, 10);
    Number.isNaN(s) && (s = 1572566400);
    var u = s;
    i.default = u;
  },
  66,
);
