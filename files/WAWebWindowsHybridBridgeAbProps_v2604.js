__d(
  "WAWebWindowsHybridBridgeAbProps.v2604",
  [
    "WALogger",
    "WAWebABPropsCache",
    "WAWebABPropsLocalStorage",
    "WAWebBackendApi",
    "WAWebHybridABProps",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t(t) {
          var r = this;
          ((this.$2 = !1),
            (this.$4 = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n;
                  r.$3 == null &&
                    (r.$3 = o("WAWebHybridABProps").getAllHybridExpoKeys());
                  var a = t.toString(),
                    i = (n = r.$3) == null ? void 0 : n.get(a);
                  if (i == null) {
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[abprops][windows hybrid] unknown exposure key: ",
                          "",
                        ])),
                      a,
                    );
                    return;
                  }
                  (o("WAWebABPropsCache").saveExposure(i),
                    r.$1.acknowledgeExposure(a));
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })()),
            (this.$5 = function (e) {
              r.$3 = null;
              var t = o("WAWebABPropsLocalStorage").getABKey();
              if (e !== t) {
                var n = o("WAWebHybridABProps").getAllHybridAbProps(!1);
                r.$1.setConfigs(t, JSON.stringify(n));
              }
            }),
            (this.$1 = t));
        }
        var r = t.prototype;
        return (
          (r.initialize = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this;
              if (!this.$2) {
                ((this.$2 = !0),
                  yield o("WAWebABPropsCache").waitForABPropConfigsReady(),
                  this.$1.addEventListener("exposureLogged", this.$4),
                  this.$1.subscribe(null));
                var t = yield this.$1.getVersion();
                (o("WAWebBackendApi").frontendFireAndForget(
                  "addAbPropsUpdateListener",
                  function () {
                    e.$5(null);
                  },
                ),
                  this.$5(t));
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })();
    l.WindowsHybridBridgeAbProps_v2604 = s;
  },
  98,
);
