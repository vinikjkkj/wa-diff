__d(
  "BootloaderResource",
  [
    "BootloaderResourceErrorConfig",
    "ExecutionEnvironment",
    "gkx",
    "suspendOrThrowIfUsedInSSR",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = {},
      c = {},
      d = !1;
    function m() {
      !o("BootloaderResourceErrorConfig").RETHROW_CACHED_LOAD_ERRORS ||
        d ||
        typeof window == "undefined" ||
        ((d = !0),
        window.addEventListener("online", function () {
          for (var e of Object.keys(c)) delete c[e];
        }));
    }
    function p(e) {
      (o("BootloaderResourceErrorConfig").RETHROW_CACHED_LOAD_ERRORS &&
        delete c[e.getModuleId()],
        e.load());
    }
    function _(t) {
      var n = t.getModuleIfRequireable(),
        a = t.getModuleId();
      if (
        (r("gkx")("18743") ||
          o("BootloaderResourceErrorConfig").RETHROW_CACHED_LOAD_ERRORS) &&
        c[a] != null
      )
        throw c[a];
      if (n == null) {
        if (
          (!(e || (e = r("ExecutionEnvironment"))).isInBrowser &&
            !t.isAvailableInSSR_DO_NOT_USE() &&
            (s || (s = r("suspendOrThrowIfUsedInSSR")))(
              "Loading of bootloaded and T3 components is disabled during SSR",
            ),
          !u[a])
        ) {
          var i = (u[a] = t.load());
          i.catch(function (e) {
            ((c[a] = e), m());
          }).finally(function () {
            delete u[a];
          });
        }
        throw u[a];
      }
      return n;
    }
    ((l.preload = p), (l.read = _));
  },
  98,
);
