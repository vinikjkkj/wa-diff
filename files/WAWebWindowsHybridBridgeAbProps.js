__d(
  "WAWebWindowsHybridBridgeAbProps",
  [
    "WALogger",
    "WAWebABPropsCache",
    "WAWebABPropsLocalStorage",
    "WAWebBackendApi",
    "WAWebHybridABProps",
    "WAWebODS",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t(t) {
          var a = this;
          ((this.$2 = !1),
            (this.$4 = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n;
                  a.$3 == null &&
                    (a.$3 = o("WAWebHybridABProps").getAllHybridExpoKeys());
                  var i = t.toString(),
                    l = (n = a.$3) == null ? void 0 : n.get(i);
                  if (l == null) {
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[abprops][windows hybrid] unknown exposure key: ",
                          "",
                        ])),
                      i,
                    );
                    return;
                  }
                  (o("WAWebABPropsCache").saveExposure(l),
                    r("WAWebODS").incr(
                      "web.hybrid.bridge.abprops.send.acknowledge_exposure",
                    ),
                    a.$1.acknowledgeExposure(i));
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })()),
            (this.$5 = function (e) {
              a.$3 = null;
              var t = o("WAWebABPropsLocalStorage").getABKey();
              if (e !== t) {
                var n = o("WAWebHybridABProps").getAllHybridAbProps(!1);
                (r("WAWebODS").incr(
                  "web.hybrid.bridge.abprops.send.set_configs",
                ),
                  a.$1.setConfigs(t, JSON.stringify(n)));
              }
            }),
            (this.$1 = t));
        }
        var a = t.prototype;
        return (
          (a.initialize = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this;
              if (!this.$2) {
                ((this.$2 = !0),
                  yield o("WAWebABPropsCache").waitForABPropConfigsReady(),
                  this.$1.addEventListener("exposureLogged", this.$4),
                  this.$1.subscribe(null),
                  r("WAWebODS").incr(
                    "web.hybrid.bridge.abprops.send.get_version",
                  ));
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
    l.WindowsHybridBridgeAbProps = s;
  },
  98,
);
