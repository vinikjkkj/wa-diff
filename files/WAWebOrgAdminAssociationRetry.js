__d(
  "WAWebOrgAdminAssociationRetry",
  ["WAPromiseDelays", "err"],
  function (t, n, r, o, a, i, l) {
    var e = [0, 300, 900, 1800];
    function s(e) {
      return u(e, 0);
    }
    async function u(t, n) {
      var a,
        i = (a = e[n]) != null ? a : 0;
      i > 0 && (await o("WAPromiseDelays").delayMs(i));
      var l = n === e.length - 1;
      try {
        var s = await t();
        if (s != null) return s;
      } catch (e) {
        if (!c(e) || l) throw e;
      }
      if (l) throw r("err")("Association rejected");
      return u(t, n + 1);
    }
    function c(e) {
      return e instanceof Error && e.message === "NOT_FOUND_OR_UNAVAILABLE";
    }
    l.associateOrgAdminManagedObjectWithRetry = s;
  },
  98,
);
