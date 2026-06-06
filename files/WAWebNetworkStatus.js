__d(
  "WAWebNetworkStatus",
  [
    "Promise",
    "WALogger",
    "WAMemoizeConcurrent",
    "WAWebBaseModel",
    "WAWebBrowserInfo",
    "WAWebBuildConstants",
    "WAWebNetworkGetResponseIfOnline",
    "asyncToGeneratorRuntime",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = o("WAWebBuildConstants").DYN_ORIGIN + "status.json",
      h = !1,
      y = (function (t) {
        function a() {
          for (var a, i = arguments.length, l = new Array(i), _ = 0; _ < i; _++)
            l[_] = arguments[_];
          return (
            (a = t.call.apply(t, [this].concat(l)) || this),
            (a.online = o("WAWebBaseModel").session(!0)),
            (a.simulatedOfflineConditions = o("WAWebBaseModel").session(!1)),
            (a.waitIfOffline = r("WAMemoizeConcurrent")(
              function () {
                return "all";
              },
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var t = this;
                if (!this.online) {
                  if (
                    r("WAWebBrowserInfo")().name !== "Firefox" &&
                    navigator.onLine
                  ) {
                    o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "waitIfOffline: XHR=offline, nav.onLine=true \u2192 resolve",
                        ])),
                    );
                    return;
                  }
                  (o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "waitIfOffline: Waiting...",
                      ])),
                  ),
                    yield new (f || (f = n("Promise")))(function (e) {
                      t.listenToOnce(t, "change:online", function () {
                        (o("WALogger").LOG(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "waitIfOffline: Continuing...",
                            ])),
                        ),
                          e());
                      });
                    }));
                }
              }),
            )),
            (a.checkOnline = r("WAMemoizeConcurrent")(
              function () {
                return "all";
              },
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                if (
                  (o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "NetworkStatus:checkOnline checking",
                      ])),
                  ),
                  (h || r("gkx")("26256")) && this.simulatedOfflineConditions)
                ) {
                  o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "NetworkStatus:checkOnline simulating offline behavior",
                      ])),
                  );
                  return;
                }
                try {
                  var e = yield r("WAWebNetworkGetResponseIfOnline")(
                    g,
                    "GET",
                    null,
                    void 0,
                  );
                  ((this.online = !!e),
                    o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "NetworkStatus:checkOnline response ",
                          "",
                        ])),
                      String(this.online),
                    ));
                } catch (e) {
                  o("WALogger").WARN(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "NetworkStatus:checkOnline errored! ",
                        "",
                      ])),
                    String(e),
                  );
                }
              }),
            )),
            babelHelpers.assertThisInitialized(a) ||
              babelHelpers.assertThisInitialized(a)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.initialize = function () {
            (this.listenTo(this, "change:online", this.$NetworkStatus$p_1),
              this.$NetworkStatus$p_1());
          }),
          (i.$NetworkStatus$p_1 = function () {
            var e = this.online;
            o("WALogger")
              .LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[comms] NetworkStatus ",
                    "",
                  ])),
                e ? "online" : "offline",
              )
              .tags("comms");
          }),
          (i.simulateNetworkStatus = function (t) {
            (h || r("gkx")("26256")) &&
              ((this.online = t), (this.simulatedOfflineConditions = !t));
          }),
          a
        );
      })(o("WAWebBaseModel").BaseModel),
      C = o("WAWebBaseModel").defineModel(y),
      b = new C();
    l.default = b;
  },
  98,
);
