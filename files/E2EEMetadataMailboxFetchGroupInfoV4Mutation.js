__d(
  "E2EEMetadataMailboxFetchGroupInfoV4Mutation",
  [
    "E2EEMetadataMailboxFetchGroupInfoV4Mutation.graphql",
    "FBLogger",
    "asyncToGeneratorRuntime",
    "createWorkerMutation",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("E2EEMetadataMailboxFetchGroupInfoV4Mutation.graphql"));
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("createWorkerMutation")(s),
            n = t[0],
            o = yield n({ input: e });
          if (o == null)
            throw r("FBLogger")("wmi").mustfixThrow(
              "Failed to fetch E2EE metadata mailbox group info from MI (V4)",
            );
          return o;
        })),
        c.apply(this, arguments)
      );
    }
    l.fetchGroupInfoFromMIOverGraphQLV4 = u;
  },
  98,
);
