__d(
  "WAWebOpenSocket",
  [
    "Promise",
    "WAAbortError",
    "WALogger",
    "WAPromiseRetryLoop",
    "WAWebMiscErrors",
    "WAWebWatchedSocket",
    "getErrorSafe",
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
    function h(t) {
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
    function y(e, t) {
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
    function C(e) {
      var t = new AbortController();
      return new (f || (f = n("Promise")))(function (n, a) {
        var i = !1,
          l = [];
        e.forEach(function (s) {
          b(s, t.signal, h, y)
            .then(function (e) {
              i
                ? (t.abort(), e.close(1e3, "loser socket"))
                : ((i = !0),
                  o("WALogger")
                    .LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "[socket] openWebSocketsConcurrently opened socket with ",
                          " ws.",
                        ])),
                      s,
                    )
                    .tags("socket"),
                  n(e));
            })
            .catch(function (t) {
              r("getErrorSafe")(t).name !== "AbortError" &&
                (o("WALogger")
                  .WARN(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[socket] openWebSocketsConcurrently socket with ",
                        " failed: ",
                        "",
                      ])),
                    s,
                    String(t),
                  )
                  .tags("socket"),
                l.push(t),
                l.length === e.length && a(t));
            });
        });
      });
    }
    function b(e, t, r, a) {
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
    function v() {
      return {
        jitter: 0.1,
        max: 1e4,
        algo: { type: "fibonacci", first: 1e3, second: 1e3 },
        relativeDelay: !0,
      };
    }
    function S() {
      return self.navigator != null ? self.navigator.onLine : !0;
    }
    function R(e) {
      var t = g.map(function (t) {
          return e != null ? t + "?ED=" + e : t;
        }),
        n = !0,
        r = function () {
          S() && n === !1 && ((n = !0), a.reset());
        },
        a = new (o("WAPromiseRetryLoop").PromiseRetryLoop)({
          name: "socketOpener",
          timer: v(),
          code: function (r) {
            return C(t)
              .then(function (e) {
                r(new (o("WAWebWatchedSocket").WatchedSocket)(e));
              })
              .catch(function () {
                n = S();
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
    l.openWebSocket = R;
  },
  98,
);
