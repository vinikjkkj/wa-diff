__d(
  "WAWebCommsGating",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return (
        e == null &&
          (e = o("WAWebABProps").getABPropConfigValue(
            "waweb_comms_in_backend_worker",
          )),
        e != null ? e : !1
      );
    }
    l.isCommsInWorker = s;
  },
  98,
);
