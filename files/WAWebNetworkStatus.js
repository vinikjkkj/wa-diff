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
      C = 0,
      b = "socket_open",
      v = !1,
      S = (function (t) {
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
                return String(C);
              },
              async function () {
                var e = b;
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
                var t = C,
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
                  if (t !== C) {
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
              e &&
                o(
                  "WAWebNetworkStatusStateManager",
                ).networkOfflineCauseStateManager.set(null),
              o("WAWebNetworkStatusStateManager").networkStatusStateManager.set(
                e,
              ));
          }),
          (a.isOnline = function () {
            return this.online;
          }),
          (a.markOnline = function () {
            (C++, (this.online = !0));
          }),
          (a.checkOnline = function (t) {
            return ((b = t), this.checkOnlineDeduped());
          }),
          (a.simulateNetworkStatus = function (t) {
            (v || r("gkx")("26256")) &&
              ((this.online = t), (this.simulatedOfflineConditions = !t));
          }),
          n
        );
      })(o("WAWebBaseModel").BaseModel),
      R = o("WAWebBaseModel").defineModel(S),
      L = new R();
    l.default = L;
  },
  98,
);
