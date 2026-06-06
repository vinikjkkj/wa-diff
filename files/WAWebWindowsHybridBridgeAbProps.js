__d(
  "WAWebWindowsHybridBridgeAbProps",
  [
    "WALogger",
    "WAWebABPropsCache",
    "WAWebABPropsLocalStorage",
    "WAWebBackendApi",
    "WAWebHybridABProps",
    "WAWebODS",
    "WAWebWindowsHybridBridgeTrace",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t(t) {
          var n = this;
          ((this.$2 = !1),
            (this.$4 = async function (t) {
              var a;
              n.$3 == null &&
                (n.$3 = o("WAWebHybridABProps").getAllHybridExpoKeys());
              var i = t.toString(),
                l = (a = n.$3) == null ? void 0 : a.get(i);
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
                o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                  {
                    bridge: "abProps",
                    method: "acknowledgeExposure",
                    type: "sync",
                  },
                  function () {
                    return n.$1.acknowledgeExposure(i);
                  },
                ));
            }),
            (this.$5 = function (e) {
              n.$3 = null;
              var t = o("WAWebABPropsLocalStorage").getABKey();
              if (e !== t) {
                var a = o("WAWebHybridABProps").getAllHybridAbProps(!1);
                (r("WAWebODS").incr(
                  "web.hybrid.bridge.abprops.send.set_configs",
                ),
                  o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                    { bridge: "abProps", method: "setConfigs", type: "sync" },
                    function () {
                      return n.$1.setConfigs(t, JSON.stringify(a));
                    },
                  ));
              }
            }),
            (this.$1 = t));
        }
        var n = t.prototype;
        return (
          (n.initialize = async function () {
            var e = this;
            if (!this.$2) {
              ((this.$2 = !0),
                await o("WAWebABPropsCache").waitForABPropConfigsReady(),
                this.$1.addEventListener("exposureLogged", this.$4),
                this.$1.subscribe(null),
                r("WAWebODS").incr(
                  "web.hybrid.bridge.abprops.send.get_version",
                ));
              var t = await o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                { bridge: "abProps", method: "getVersion", type: "sync" },
                function () {
                  return e.$1.getVersion();
                },
              );
              (o("WAWebBackendApi").frontendFireAndForget(
                "addAbPropsUpdateListener",
                function () {
                  e.$5(null);
                },
              ),
                this.$5(t));
            }
          }),
          t
        );
      })();
    l.WindowsHybridBridgeAbProps = s;
  },
  98,
);
