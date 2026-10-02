__d(
  "KeyTransparencyGraphQLClient",
  [
    "KeyTransparencyGraphQLClient_Query.graphql",
    "MWFBLogger",
    "WABase64",
    "asyncToGeneratorRuntime",
    "createWorkerQuery",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c =
        e !== void 0
          ? e
          : (e = n("KeyTransparencyGraphQLClient_Query.graphql"));
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a = yield r("createWorkerQuery")(c, e);
          if (a == null)
            throw o("MWFBLogger")
              .MWLogger()
              .tags(["KeyTransparency"])
              .mustfixThrow("GraphQL response is invalid");
          var i =
              (t =
                (n = a.xfb_messenger_kt_lookup) == null
                  ? void 0
                  : n.account_responses) != null
                ? t
                : [],
            l = i.map(function (e) {
              var t, n, r;
              return {
                accountFbid:
                  (t = e == null ? void 0 : e.account_fbid) != null ? t : "",
                pendingSequencing:
                  (n = e == null ? void 0 : e.pending_sequencing) != null
                    ? n
                    : !1,
                protoForClient:
                  (r = e == null ? void 0 : e.proto_for_client) != null
                    ? r
                    : "",
              };
            });
          return (
            o("MWFBLogger")
              .MWLogger()
              .tags(["KeyTransparency"])
              .DEBUG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "GraphQL query successful: ",
                    " responses received",
                  ])),
                l.length,
              ),
            l
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("MWFBLogger")
            .MWLogger()
            .tags(["KeyTransparency"])
            .DEBUG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "GraphQL Fetching Data",
                ])),
            );
          var n = e.map(function (e) {
              var t = e.epochHead,
                n = e.userFbid;
              return {
                account_fbid: n,
                epoch_head: o("WABase64").encodeB64(t),
              };
            }),
            r = { auditor_ids: t, requested_accounts: n, serfmt: "BASE64" },
            a = yield d(r);
          return a;
        })),
        _.apply(this, arguments)
      );
    }
    l.fetchKt11DataForUsers = p;
  },
  98,
);
