__d(
  "BootloaderResource",
  ["ExecutionEnvironment", "gkx", "suspendOrThrowIfUsedInSSR"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = {},
      c = {};
    function d(e) {
      e.load();
    }
    function m(t) {
      var n = t.getModuleIfRequireable(),
        o = t.getModuleId();
      if (r("gkx")("18743") && c[o] != null) throw c[o];
      if (n == null) {
        if (
          (!(e || (e = r("ExecutionEnvironment"))).isInBrowser &&
            !t.isAvailableInSSR_DO_NOT_USE() &&
            (s || (s = r("suspendOrThrowIfUsedInSSR")))(
              "Loading of bootloaded and T3 components is disabled during SSR",
            ),
          !u[o])
        ) {
          var a = (u[o] = t.load());
          a.catch(function (e) {
            c[o] = e;
          }).finally(function () {
            delete u[o];
          });
        }
        throw u[o];
      }
      return n;
    }
    ((l.preload = d), (l.read = m));
  },
  98,
);
