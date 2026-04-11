__d(
  "WAWebFetchACSTokens",
  [
    "WAPromiseRetryLoop",
    "WASmaxPrivatestatsSignCredentialRPC",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return o("WASmaxPrivatestatsSignCredentialRPC").sendSignCredentialRPC(
            { projectNameElementValue: e, blindedCredentialElementValue: t },
          );
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = 1,
            i = (function () {
              var o = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (n) {
                  var o = yield s(t, r);
                  switch (o.name) {
                    case "SignCredentialResponseErrorNoRetry":
                      return n({ result: null });
                    case "SignCredentialResponseErrorRetry":
                      return ((a += 1), a > e ? n({ result: null }) : void 0);
                    default:
                      return (o.name, n({ result: o.value }));
                  }
                },
              );
              return function (t) {
                return o.apply(this, arguments);
              };
            })(),
            l = new (o("WAPromiseRetryLoop").PromiseRetryLoop)({
              name: "issueACSTokenForProject-" + t,
              timer: { algo: { type: "exponential", first: 250 }, max: 1e3 },
              code: i,
            });
          return (l.start(), l.promise());
        })),
        d.apply(this, arguments)
      );
    }
    ((l.fetchACSTokenForProject = s), (l.fetchACSTokenForProjectWithRetry = c));
  },
  98,
);
