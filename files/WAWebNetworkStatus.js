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
    "WAWebNetworkStatusStateManager",
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
      g,
      h,
      y = o("WAWebBuildConstants").DYN_ORIGIN + "status.json",
      C = 10 * 1e3,
      b = 0,
      v = !1,
      S = (function (t) {
        function a() {
          for (var a, i = arguments.length, l = new Array(i), g = 0; g < i; g++)
            l[g] = arguments[g];
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
                    yield new (h || (h = n("Promise")))(function (e) {
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
                return String(b);
              },
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                if (
                  (o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "NetworkStatus:checkOnline checking",
                      ])),
                  ),
                  (v || r("gkx")("26256")) && this.simulatedOfflineConditions)
                ) {
                  o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "NetworkStatus:checkOnline simulating offline behavior",
                      ])),
                  );
                  return;
                }
                var e = b,
                  t = new AbortController(),
                  n = self.setTimeout(function () {
                    return t.abort();
                  }, C);
                try {
                  var a = yield r("WAWebNetworkGetResponseIfOnline")({
                    data: null,
                    method: "GET",
                    responseType: void 0,
                    url: y,
                    signal: t.signal,
                  });
                  if (t.signal.aborted) {
                    o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "NetworkStatus:checkOnline timed out",
                        ])),
                    );
                    return;
                  }
                  if (e !== b) {
                    o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "NetworkStatus:checkOnline ignored: started before markOnline",
                        ])),
                    );
                    return;
                  }
                  ((this.online = !!a),
                    o("WALogger").LOG(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "NetworkStatus:checkOnline response ",
                          "",
                        ])),
                      String(this.online),
                    ));
                } catch (e) {
                  o("WALogger").WARN(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "NetworkStatus:checkOnline errored! ",
                        "",
                      ])),
                    String(e),
                  );
                } finally {
                  self.clearTimeout(n);
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
            (o("WALogger")
              .LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[comms] NetworkStatus ",
                    "",
                  ])),
                e ? "online" : "offline",
              )
              .tags("comms"),
              o("WAWebNetworkStatusStateManager").networkStatusStateManager.set(
                e,
              ));
          }),
          (i.isOnline = function () {
            return this.online;
          }),
          (i.markOnline = function () {
            (b++, (this.online = !0));
          }),
          (i.simulateNetworkStatus = function (t) {
            (v || r("gkx")("26256")) &&
              ((this.online = t), (this.simulatedOfflineConditions = !t));
          }),
          a
        );
      })(o("WAWebBaseModel").BaseModel),
      R = o("WAWebBaseModel").defineModel(S),
      L = new R();
    l.default = L;
  },
  98,
);
