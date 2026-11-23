__d(
  "WAWebFetchACSTokens",
  ["WAPromiseRetryLoop", "WASmaxPrivatestatsSignCredentialRPC"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3;
    async function s(e, t) {
      return o("WASmaxPrivatestatsSignCredentialRPC").sendSignCredentialRPC({
        projectNameElementValue: e,
        blindedCredentialElementValue: t,
      });
    }
    async function u(t, n) {
      var r = 1,
        a = async function (a) {
          var o = await s(t, n);
          switch (o.name) {
            case "SignCredentialResponseErrorNoRetry":
              return a({ result: null });
            case "SignCredentialResponseErrorRetry":
              return ((r += 1), r > e ? a({ result: null }) : void 0);
            default:
              return (o.name, a({ result: o.value }));
          }
        },
        i = new (o("WAPromiseRetryLoop").PromiseRetryLoop)({
          name: "issueACSTokenForProject-" + t,
          timer: { algo: { type: "exponential", first: 250 }, max: 1e3 },
          code: a,
        });
      return (i.start(), i.promise());
    }
    ((l.fetchACSTokenForProject = s), (l.fetchACSTokenForProjectWithRetry = u));
  },
  98,
);
