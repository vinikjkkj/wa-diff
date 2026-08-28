__d(
  "WebBloksUserTooYoungRegistration",
  ["CAAWebBloksYoungAgeStorage"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      try {
        var n = t.split("-");
        n.length === 3 &&
          o(
            "CAAWebBloksYoungAgeStorage",
          ).CAAWebBloksYoungAgeStorage.saveAgeWrongAttemptSignal(
            parseInt(n[2], 10),
          );
      } catch (e) {
        return;
      }
    }
    l.default = e;
  },
  98,
);
