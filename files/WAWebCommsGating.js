__d(
  "WAWebCommsGating",
  ["qex"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = r("qex")._("5241");
      return e === "worker" || e === "worker_hrp" || e === "worker_hrp_bundle";
    }
    l.isCommsInWorker = e;
  },
  98,
);
