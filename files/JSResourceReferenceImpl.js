__d(
  "JSResourceReferenceImpl",
  [
    "BootloaderEvents",
    "JSResourceEvents",
    "Promise",
    "PromiseAnnotate",
    "err",
    "ifRequireable",
    "ifRequired",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = function (t) {
        return t;
      },
      c = [],
      d = null;
    function m(e) {
      d ? e(d) : c.push(e);
    }
    var p = "JSResource: unknown caller",
      _ = (function () {
        function t(e) {
          this.$1 = e;
        }
        t.setBootloader = function (t) {
          d = t;
          for (var e of c) e(d);
          c = [];
        };
        var a = t.prototype;
        return (
          (a.getModuleId = function () {
            var e = this.$1;
            return e;
          }),
          (a.getModuleIdAsRef = function () {
            return this.$1;
          }),
          (a.load = function () {
            var t = this,
              a = this.$2,
              i = this.getModuleId();
            o("JSResourceEvents").notify(this.$1, a, "LOADED");
            var l = new (s || (s = n("Promise")))(function (e, n) {
              var l = o("BootloaderEvents").onBootloadEndpointError(
                function (e) {
                  if (e.module === i) {
                    l == null || l.unsubscribe();
                    var t = r("err")(
                      "[INTERNAL ONLY] Bootloading module " +
                        i +
                        " failed with error MID opes:" +
                        e.errorMID +
                        ". This issue may cause infinite spinners in production.",
                    );
                    ((t.opes_mids = [e.errorMID]), n(t));
                  }
                },
              );
              m(function (n) {
                var r;
                n.loadModules(
                  [t.getModuleIdAsRef()],
                  function (n) {
                    (l == null || l.unsubscribe(),
                      o("JSResourceEvents").notify(t.$1, a, "PROMISE_RESOLVED"),
                      e(n));
                  },
                  (r = t.$2) != null ? r : p,
                );
              });
            });
            return (
              (e || (e = o("PromiseAnnotate"))).setDisplayName(
                l,
                "Bootload(" + this.getModuleId() + ")",
              ),
              l
            );
          }),
          (a.preload = function () {
            var e,
              t = this,
              n = (e = this.$2) != null ? e : p;
            m(function (e) {
              return e.loadModules(
                [t.getModuleIdAsRef()],
                function () {},
                "preload: " + n,
              );
            });
          }),
          (a.equals = function (t) {
            return this === t || this.$1 == t.$1;
          }),
          (a.getModuleIfRequireable = function () {
            return (
              o("JSResourceEvents").notify(this.$1, this.$2, "ACCESSED"),
              r("ifRequireable").call(null, this.$1, u)
            );
          }),
          (a.getModuleIfRequired = function () {
            return (
              o("JSResourceEvents").notify(this.$1, this.$2, "ACCESSED"),
              r("ifRequired").call(null, this.$1, u)
            );
          }),
          (t.disableForSSR_DO_NOT_USE = function () {
            this.$3 = !1;
          }),
          (a.isAvailableInSSR_DO_NOT_USE = function () {
            return this.constructor.$3;
          }),
          (a.__setRef = function (t) {
            return (
              (this.$2 = t),
              o("JSResourceEvents").notify(this.$1, this.$2, "CREATED"),
              this
            );
          }),
          (t.loadAll = function (t, n) {
            var e = {},
              r = !1;
            for (var a of t) {
              var i = a.$2;
              (i && ((r = !0), (e[i] = !0)),
                o("JSResourceEvents").notify(a.$1, i, "LOADED"));
            }
            m(function (o) {
              return o.loadModules(
                t.map(function (e) {
                  return e.getModuleId();
                }),
                n,
                r ? Object.keys(e).join(":") : p,
              );
            });
          }),
          t
        );
      })();
    ((_.$3 = !0), (l.default = _));
  },
  98,
);
