__d(
  "WAWebNetworkStatus",
  [
    "WALogger",
    "WAMemoizeConcurrent",
    "WAWebBaseModel",
    "WAWebBrowserInfo",
    "WAWebBuildConstants",
    "WAWebNetworkGetResponseIfOnline",
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
      f = o("WAWebBuildConstants").DYN_ORIGIN + "status.json",
      g = !1,
      h = (function (t) {
        function n() {
          for (var n, a = arguments.length, i = new Array(a), l = 0; l < a; l++)
            i[l] = arguments[l];
          return (
            (n = t.call.apply(t, [this].concat(i)) || this),
            (n.online = o("WAWebBaseModel").session(!0)),
            (n.simulatedOfflineConditions = o("WAWebBaseModel").session(!1)),
            (n.waitIfOffline = r("WAMemoizeConcurrent")(
              function () {
                return "all";
              },
              async function () {
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
                    await new Promise(function (e) {
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
              },
            )),
            (n.checkOnline = r("WAMemoizeConcurrent")(
              function () {
                return "all";
              },
              async function () {
                if (
                  (o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "NetworkStatus:checkOnline checking",
                      ])),
                  ),
                  (g || r("gkx")("26256")) && this.simulatedOfflineConditions)
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
                  var e = await r("WAWebNetworkGetResponseIfOnline")(
                    f,
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
              },
            )),
            babelHelpers.assertThisInitialized(n) ||
              babelHelpers.assertThisInitialized(n)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.initialize = function () {
            (this.listenTo(this, "change:online", this.$NetworkStatus$p_1),
              this.$NetworkStatus$p_1());
          }),
          (a.$NetworkStatus$p_1 = function () {
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
          (a.simulateNetworkStatus = function (t) {
            (g || r("gkx")("26256")) &&
              ((this.online = t), (this.simulatedOfflineConditions = !t));
          }),
          n
        );
      })(o("WAWebBaseModel").BaseModel),
      y = o("WAWebBaseModel").defineModel(h),
      C = new y();
    l.default = C;
  },
  98,
);
