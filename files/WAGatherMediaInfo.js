__d(
  "WAGatherMediaInfo",
  [
    "WADeprecatedSendIq",
    "WAErrors",
    "WALogger",
    "WAMediaConnParser",
    "WAPromiseManagement",
    "WAPromiseRetryLoop",
    "WAResultOrError",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = 507,
      p = o("WAPromiseManagement").cacheWhilePending(function () {
        return "gatherMediaInfo";
      }, _);
    function _() {
      var e = new (o("WAPromiseRetryLoop").PromiseRetryLoop)({
        name: "gatherMediaInfo",
        timer: {
          jitter: 0.25,
          max: 987e3,
          algo: { type: "fibonacci", first: 6e3, second: 12e3 },
          relativeDelay: !0,
        },
        code: g,
      });
      return (e.start(), e.promise());
    }
    var f = 60;
    function g(t) {
      var n,
        r = (n = o("WAWap")).wap(
          "iq",
          {
            id: n.generateId(),
            to: n.S_WHATSAPP_NET,
            type: "set",
            xmlns: "w:m",
          },
          n.wap("media_conn", null),
        );
      return o("WADeprecatedSendIq")
        .deprecatedSendIqIfConnectedWithin(
          r,
          o("WAMediaConnParser").mediaConnParser,
          f,
        )
        .then(function (n) {
          if (n.success)
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "gatherMediaInfo got ",
                  " hosts",
                ])),
              n.result.hosts.length,
            ),
              t(o("WAResultOrError").makeResult(n.result)));
          else if (
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "gatherMediaInfo failure ",
                  "",
                ])),
              n,
            ),
            n.errorCode === m)
          ) {
            var r = n.errorBackoff;
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "gatherMediaInfo got ",
                  " seconds backoff",
                ])),
              r,
            ),
              t(
                o("WAResultOrError").makeError({
                  type: "backoff",
                  backoffMs: r * 1e3,
                }),
              ));
          } else
            n.errorCode < 500 &&
              (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "gatherMediaInfo got client error: ",
                    "",
                  ])),
                n.errorCode,
              ),
              t(
                o("WAResultOrError").makeError({
                  type: "client-error",
                  code: n.errorCode,
                  text: n.errorText,
                }),
              ));
        })
        .catch(function (e) {
          e instanceof o("WAErrors").Disconnected
            ? t(o("WAResultOrError").makeError("disconnected"))
            : o("WALogger").ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "gatherMediaInfo error ",
                    "",
                  ])),
                e,
              );
        });
    }
    l.gatherMediaInfo = p;
  },
  98,
);
