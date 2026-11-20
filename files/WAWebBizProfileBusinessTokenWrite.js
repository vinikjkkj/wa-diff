__d(
  "WAWebBizProfileBusinessTokenWrite",
  [
    "Promise",
    "WALogger",
    "WAWebFetchAdAccountToken",
    "WAWebFetchWithAdAccountToken",
    "WAWebNoop",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = !1,
            l = null,
            u = r("WAWebNoop"),
            c = new (s || (s = n("Promise")))(function (e) {
              u = function () {
                return e("timed_out");
              };
            }),
            _ = function () {
              l = window.setTimeout(function () {
                ((i = !0), u());
              }, m());
            },
            f = function () {
              l != null && (window.clearTimeout(l), (l = null));
            };
          _();
          var g = o("WAWebFetchWithAdAccountToken").fetchWithAdAccountToken(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    if (i) throw new p();
                    if ((f(), e.type !== "WAA")) throw new d();
                    try {
                      return yield t(e.token);
                    } catch (e) {
                      throw (_(), e);
                    }
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
            h = yield s.race([
              g.then(
                function () {
                  return "settled";
                },
                function () {
                  return "settled";
                },
              ),
              c,
            ]);
          return (
            f(),
            h === "timed_out"
              ? (g.catch(function (t) {
                  t instanceof p ||
                    o("WALogger")
                      .WARN(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Business token write failed after its business token wait timed out",
                          ])),
                      )
                      .catching(r("getErrorSafe")(t))
                      .sendLogs(a);
                }),
                { type: "token_timed_out" })
              : { type: "written", value: yield g }
          );
        })),
        c.apply(this, arguments)
      );
    }
    var d = (function (e) {
      function t() {
        var t;
        return (
          (t =
            e.call(
              this,
              "The ad account token is not a WhatsApp business token",
            ) || this),
          (t.name = "NotABusinessTokenError"),
          t
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(babelHelpers.wrapNativeSuper(Error));
    function m() {
      return (
        2 *
        o("WAWebFetchAdAccountToken").getMaximumAdAccountFetchTimeoutSeconds() *
        1e3
      );
    }
    var p = (function (e) {
      function t() {
        var t;
        return (
          (t =
            e.call(
              this,
              "The business token arrived after the write timed out",
            ) || this),
          (t.name = "BusinessTokenTimeoutError"),
          t
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(babelHelpers.wrapNativeSuper(Error));
    ((l.writeWithBusinessToken = u), (l.NotABusinessTokenError = d));
  },
  98,
);
