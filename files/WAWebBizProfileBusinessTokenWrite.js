__d(
  "WAWebBizProfileBusinessTokenWrite",
  [
    "WALogger",
    "WAWebFetchAdAccountToken",
    "WAWebFetchWithAdAccountToken",
    "WAWebNoop",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n) {
      var a = !1,
        i = null,
        l = r("WAWebNoop"),
        s = new Promise(function (e) {
          l = function () {
            return e("timed_out");
          };
        }),
        m = function () {
          i = window.setTimeout(function () {
            ((a = !0), l());
          }, c());
        },
        p = function () {
          i != null && (window.clearTimeout(i), (i = null));
        };
      m();
      var _ = o("WAWebFetchWithAdAccountToken").fetchWithAdAccountToken(
          async function (e) {
            if (a) throw new d();
            if ((p(), e.type !== "WAA")) throw new u();
            try {
              return await t(e.token);
            } catch (e) {
              throw (m(), e);
            }
          },
        ),
        f = await Promise.race([
          _.then(
            function () {
              return "settled";
            },
            function () {
              return "settled";
            },
          ),
          s,
        ]);
      return (
        p(),
        f === "timed_out"
          ? (_.catch(function (t) {
              t instanceof d ||
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Business token write failed after its business token wait timed out",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t))
                  .sendLogs(n);
            }),
            { type: "token_timed_out" })
          : { type: "written", value: await _ }
      );
    }
    var u = (function (e) {
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
    function c() {
      return (
        2 *
        o("WAWebFetchAdAccountToken").getMaximumAdAccountFetchTimeoutSeconds() *
        1e3
      );
    }
    var d = (function (e) {
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
    ((l.writeWithBusinessToken = s), (l.NotABusinessTokenError = u));
  },
  98,
);
