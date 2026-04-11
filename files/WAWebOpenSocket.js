__d(
  "WAWebOpenSocket",
  [
    "Promise",
    "WAAbortError",
    "WALogger",
    "WANullthrows",
    "WAPromiseRetryLoop",
    "WAWebCookieDomain",
    "WAWebLocalStorage",
    "WAWebMiscErrors",
    "WAWebWatchedSocket",
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
      g = [
        "wss://web.whatsapp.com/ws/chat",
        "wss://web.whatsapp.com:5222/ws/chat",
      ];
    function h() {
      if (!r("gkx")("26258")) {
        var e,
          t =
            (e = r("WANullthrows")(r("WAWebLocalStorage")).getItem(
              "wdev-pinning-cookie-value",
            )) != null
              ? e
              : "";
        document.cookie = [
          "sticky_routing=" + t.replace(/\"/g, ""),
          "path=/",
          "domain=" + o("WAWebCookieDomain").COOKIE_DOMAIN,
          "secure",
        ].join(";");
      }
    }
    function y(t) {
      t.code !== 1e3 &&
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[socket] Immediate socket closure: closed: ",
                " ",
                "",
              ])),
            t.code,
            t.reason,
          )
          .tags("socket");
    }
    function C(e, t) {
      var n =
        e != null
          ? "[socket] " + e + " closed. code: " + t.code
          : "[socket] closed connection during initialization. Code: " + t.code;
      e: {
        if (t.code === 1e3 || t.code === 1001) {
          o("WALogger")
            .LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[socket] ",
                  "",
                ])),
              n,
            )
            .tags("socket");
          break e;
        }
        if (t.code === 1006) {
          (e != null &&
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[socket] ",
                    "",
                  ])),
                n,
              )
              .tags("socket"),
            o("WALogger")
              .COUNT(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[socket] ",
                    "",
                  ])),
                n,
              )
              .tags("socket"));
          break e;
        }
        if (
          t.code === 1002 ||
          t.code === 1003 ||
          t.code === 1007 ||
          t.code === 1008 ||
          t.code === 1009 ||
          t.code === 1010 ||
          t.code === 1011 ||
          t.code === 1015
        ) {
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[socket] ",
                  "",
                ])),
              n,
            )
            .tags("socket");
          break e;
        }
        {
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[socket] ",
                  ". Reason: ",
                  ", clean: ",
                  "",
                ])),
              n,
              t.reason,
              t.wasClean,
            )
            .tags("socket");
          break e;
        }
      }
    }
    function b(e) {
      var t = new AbortController();
      return new (f || (f = n("Promise")))(function (n, r) {
        var a = !1,
          i = [];
        e.forEach(function (l) {
          v(l, t.signal, y, C)
            .then(function (e) {
              a
                ? (t.abort(), e.close(1e3, "loser socket"))
                : ((a = !0),
                  o("WALogger")
                    .LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "[socket] openWebSocketsConcurrently opened socket with ",
                          " ws.",
                        ])),
                      l,
                    )
                    .tags("socket"),
                  n(e));
            })
            .catch(function (t) {
              t.name !== "AbortError" &&
                (o("WALogger")
                  .WARN(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[socket] openWebSocketsConcurrently socket with ",
                        " failed: ",
                        "",
                      ])),
                    l,
                    t,
                  )
                  .tags("socket"),
                i.push(t),
                i.length === e.length && r(t));
            });
        });
      });
    }
    function v(e, t, r, a) {
      var i = new WebSocket(e);
      return (
        (i.binaryType = "arraybuffer"),
        new (f || (f = n("Promise")))(function (e, n) {
          ((i.onopen = e),
            (i.onclose = function (e) {
              if (t != null && t.aborted) {
                n(new (o("WAAbortError").AbortError)());
                return;
              }
              (r == null || r(e),
                a == null || a(null, e),
                n(new (o("WAWebMiscErrors").SocketError)(e)));
            }));
        }).then(function () {
          return i;
        })
      );
    }
    function S() {
      return {
        jitter: 0.1,
        max: 1e4,
        algo: { type: "fibonacci", first: 1e3, second: 1e3 },
        relativeDelay: !0,
      };
    }
    function R() {
      return self.navigator != null ? self.navigator.onLine : !0;
    }
    function L(e) {
      var t = g.map(function (t) {
          return e != null ? t + "?ED=" + e : t;
        }),
        n = !0;
      h();
      var r = function () {
          R() && n === !1 && ((n = !0), a.reset());
        },
        a = new (o("WAPromiseRetryLoop").PromiseRetryLoop)({
          name: "socketOpener",
          timer: S(),
          code: function (r) {
            return b(t)
              .then(function (e) {
                r(new (o("WAWebWatchedSocket").WatchedSocket)(e));
              })
              .catch(function () {
                n = R();
              });
          },
        });
      return (
        self.addEventListener("online", r),
        a.start(),
        a.promise().finally(function () {
          self.removeEventListener("online", r);
        })
      );
    }
    l.openWebSocket = L;
  },
  98,
);
