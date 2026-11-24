__d(
  "WAWebNetworkStatus",
  [
    "WALogger",
    "WAMemoizeConcurrent",
    "WAWebBaseModel",
    "WAWebBrowserInfo",
    "WAWebBuildConstants",
    "WAWebNetworkGetResponseIfOnline",
    "WAWebNetworkStatusStateManager",
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
      h = o("WAWebBuildConstants").DYN_ORIGIN + "status.json",
      y = 10 * 1e3,
      C = 30 * 1e3,
      b = 0,
      v = null,
      S = "socket_open",
      R = !1,
      L = (function (t) {
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
            (n.checkOnlineDeduped = r("WAMemoizeConcurrent")(
              function () {
                return String(b);
              },
              async function () {
                var e = S;
                if (
                  (o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "NetworkStatus:checkOnline checking",
                      ])),
                  ),
                  (R || r("gkx")("26256")) && this.simulatedOfflineConditions)
                ) {
                  o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "NetworkStatus:checkOnline simulating offline behavior",
                      ])),
                  );
                  return;
                }
                var t = b,
                  n = new AbortController(),
                  a = self.setTimeout(function () {
                    return n.abort();
                  }, y);
                try {
                  var i = await r("WAWebNetworkGetResponseIfOnline")({
                    data: null,
                    method: "GET",
                    responseType: void 0,
                    url: h,
                    signal: n.signal,
                  });
                  if (n.signal.aborted) {
                    o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "NetworkStatus:checkOnline timed out",
                        ])),
                    );
                    return;
                  }
                  if (t !== b) {
                    o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "NetworkStatus:checkOnline ignored: started before markOnline",
                        ])),
                    );
                    return;
                  }
                  var l = !!i;
                  (!l &&
                    this.online &&
                    o(
                      "WAWebNetworkStatusStateManager",
                    ).networkOfflineCauseStateManager.set({
                      source: e,
                      sinceMs: Date.now(),
                    }),
                    (this.online = l),
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
                  self.clearTimeout(a);
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
            this.listenTo(this, "change:online", this.$NetworkStatus$p_1);
          }),
          (a.$NetworkStatus$p_1 = function () {
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
              e
                ? (o(
                    "WAWebNetworkStatusStateManager",
                  ).networkOfflineCauseStateManager.set(null),
                  E())
                : this.$NetworkStatus$p_2(),
              o("WAWebNetworkStatusStateManager").networkStatusStateManager.set(
                e,
              ));
          }),
          (a.$NetworkStatus$p_2 = function () {
            var e = this;
            v != null ||
              !r("gkx")("28987") ||
              (v = self.setInterval(function () {
                e.checkOnline("offline_recheck");
              }, C));
          }),
          (a.isOnline = function () {
            return this.online;
          }),
          (a.markOnline = function () {
            (b++, (this.online = !0));
          }),
          (a.checkOnline = function (t) {
            return ((S = t), this.checkOnlineDeduped());
          }),
          (a.simulateNetworkStatus = function (t) {
            (R || r("gkx")("26256")) &&
              ((this.online = t), (this.simulatedOfflineConditions = !t));
          }),
          n
        );
      })(o("WAWebBaseModel").BaseModel);
    function E() {
      v != null && (self.clearInterval(v), (v = null));
    }
    var k = o("WAWebBaseModel").defineModel(L),
      I = new k();
    l.default = I;
  },
  98,
);
