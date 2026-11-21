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
      d ||
        typeof window == "undefined" ||
        !o("BootloaderResourceErrorConfig").shouldRethrowCachedLoadErrors() ||
        ((d = !0),
        window.addEventListener("online", function () {
          for (var e of Object.keys(c)) delete c[e];
        }));
    }
    function p(e) {
      var t = e.getModuleId();
      (c[t] != null &&
        o("BootloaderResourceErrorConfig").shouldRethrowCachedLoadErrors() &&
        delete c[t],
        e.load());
    }
    function _(t) {
      var n = t.getModuleIfRequireable(),
        a = t.getModuleId(),
        i = c[a];
      if (
        i != null &&
        (r("gkx")("18743") ||
          o("BootloaderResourceErrorConfig").shouldRethrowCachedLoadErrors())
      )
        throw i;
      if (n == null) {
        if (
          (!(e || (e = r("ExecutionEnvironment"))).isInBrowser &&
            !t.isAvailableInSSR_DO_NOT_USE() &&
            (s || (s = r("suspendOrThrowIfUsedInSSR")))(
              "Loading of bootloaded and T3 components is disabled during SSR",
            ),
          !u[a])
        ) {
          var l = (u[a] = t.load());
          l.catch(function (e) {
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
