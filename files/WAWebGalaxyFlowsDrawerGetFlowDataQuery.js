__d(
  "WAWebGalaxyFlowsDrawerGetFlowDataQuery",
  [
    "Promise",
    "WAWebGalaxyFlowQPLLoggerUtils",
    "WAWebGalaxyFlowWamLoggerUtils",
    "WAWebGalaxyFlowsDrawerGetFlowDataQuery.graphql",
    "WAWebGalaxyFlowsError",
    "WAWebGalaxyFlowsUnifiedEncryptionVerifier",
    "WAWebGalaxyFlowsUtils",
    "WAWebGraphQLServerError",
    "WAWebLidMigrationUtils",
    "WAWebRelayClient",
    "WAWebWamEnumInteractionType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t, r, a, i) {
      var l, u, d;
      (o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataStart(),
        o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataAnnotate(
          o("WAWebGalaxyFlowQPLLoggerUtils").getWaeMetadataAnnotations(r, t),
        ));
      var m =
        ((l = t.flowMetadata) == null ? void 0 : l.data_api_version) != null;
      if (o("WAWebGalaxyFlowQPLLoggerUtils").isGalaxyFlowSanctioned())
        return (s || (s = n("Promise"))).reject(
          new (o("WAWebGalaxyFlowsError").WaeGalaxyFlowError)(
            o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetdataErrors.SANCTIONED,
          ),
        );
      if (i != null && i.aborted)
        return (s || (s = n("Promise"))).reject(new Error("Request aborted"));
      var p = a.contact.id,
        _ = p.isLid()
          ? (u =
              (d = o("WAWebLidMigrationUtils").toPn(p)) == null
                ? void 0
                : d.toString()) != null
            ? u
            : ""
          : p.toString(),
        f = t.flowId;
      return (
        o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataPoint(
          o("WAWebGalaxyFlowQPLLoggerUtils").WaeMetadataQPLPoints
            .METADATA_NETWORK_START,
        ),
        o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationPoint(
          o("WAWebGalaxyFlowQPLLoggerUtils").WaeScreenNavigationQPLPoints
            .METADATA_NETWORK_START,
        ),
        o("WAWebRelayClient")
          .fetchQuery(
            e !== void 0
              ? e
              : (e = n("WAWebGalaxyFlowsDrawerGetFlowDataQuery.graphql")),
            { request: { extensions: { biz_jid: _, flow_id: f } } },
          )
          .then(
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  if (!(i != null && i.aborted)) {
                    var t;
                    if (
                      ((t = o(
                        "WAWebGalaxyFlowQPLLoggerUtils",
                      )).qplWaeMetadataPoint(
                        t.WaeMetadataQPLPoints.METADATA_NETWORK_END,
                      ),
                      t.qplWaeScreenNavigationPoint(
                        t.WaeScreenNavigationQPLPoints.METADATA_NETWORK_END,
                      ),
                      t.qplAnnotateMetadataSize(e),
                      e == null ||
                        e.xwa_extensions_get_flow_data == null ||
                        e.xwa_extensions_get_flow_data.extensions_flow_data ==
                          null ||
                        e.xwa_extensions_get_flow_data.extensions_flow_data ==
                          null ||
                        e.xwa_extensions_get_flow_data.extensions_flow_data
                          .length === 0)
                    )
                      throw (
                        o(
                          "WAWebGalaxyFlowQPLLoggerUtils",
                        ).qplWaeMetadataAnnotate({
                          string: {
                            error_type: o("WAWebGalaxyFlowQPLLoggerUtils")
                              .WaeMetadataQPLErrorTypes
                              .EXTENSIONS_METADATA_EMPTY_RESPONSE,
                          },
                        }),
                        new (o("WAWebGalaxyFlowsError").WaeGalaxyFlowError)(
                          o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetdataErrors
                            .METADATA_EMPTY_RESPONSE,
                        )
                      );
                    if (m) {
                      if (c(e))
                        throw (
                          o(
                            "WAWebGalaxyFlowQPLLoggerUtils",
                          ).qplWaeMetadataAnnotate({
                            bool: { endpoint_public_key_received: !1 },
                          }),
                          o(
                            "WAWebGalaxyFlowQPLLoggerUtils",
                          ).qplWaeMetadataAnnotate({
                            string: {
                              error_type: o("WAWebGalaxyFlowQPLLoggerUtils")
                                .WaeMetadataQPLErrorTypes
                                .EXTENSIONS_INVALID_PUBLIC_KEY,
                            },
                          }),
                          new (o("WAWebGalaxyFlowsError").WaeGalaxyFlowError)(
                            o("WAWebGalaxyFlowsError")
                              .WaeGalaxyFlowMetdataErrors
                              .METADATA_INVALID_PUBLIC_KEY,
                          )
                        );
                      var n, r;
                      (o(
                        "WAWebGalaxyFlowQPLLoggerUtils",
                      ).qplWaeMetadataAnnotate({
                        bool: { endpoint_public_key_received: !0 },
                      }),
                        yield o(
                          "WAWebGalaxyFlowsUnifiedEncryptionVerifier",
                        ).UnifiedEncryptionVerifier.arePublicKeyWithSignatureValid(
                          p,
                          (n = e.xwa_extensions_get_flow_data) == null ||
                            (n = n.endpoint_public_key) == null
                            ? void 0
                            : n.key,
                          (r = e.xwa_extensions_get_flow_data) == null ||
                            (r = r.endpoint_public_key) == null
                            ? void 0
                            : r.signature,
                          {
                            onComplete: function (t) {
                              if (!t)
                                throw new (o(
                                  "WAWebGalaxyFlowsError",
                                ).WaeGalaxyFlowError)(
                                  o("WAWebGalaxyFlowsError")
                                    .WaeGalaxyFlowMetdataErrors
                                    .PUBLIC_KEY_SINGATURE_VERIFICATION_EXCEPTION,
                                );
                            },
                          },
                        ));
                    }
                    if (
                      o("WAWebGalaxyFlowsUtils").getFlowDataFromFetchedData(
                        f,
                        e,
                      ) == null
                    )
                      throw (
                        o(
                          "WAWebGalaxyFlowQPLLoggerUtils",
                        ).qplWaeMetadataAnnotate({
                          string: {
                            error_type: o("WAWebGalaxyFlowQPLLoggerUtils")
                              .WaeMetadataQPLErrorTypes
                              .EXTENSIONS_INVALID_EXTENSIONS_ID,
                          },
                        }),
                        new (o("WAWebGalaxyFlowsError").WaeGalaxyFlowError)(
                          o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetdataErrors
                            .METADATA_INVALID_EXTENSIONS_ID,
                        )
                      );
                    o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataEnd(2);
                  }
                  return e;
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          )
          .catch(function (e) {
            throw e instanceof o("WAWebGraphQLServerError").GraphQLServerError
              ? (o(
                  "WAWebGalaxyFlowWamLoggerUtils",
                ).logStructuredMessageInteractionWAMEvent(
                  t,
                  a,
                  r,
                  o("WAWebWamEnumInteractionType").INTERACTION_TYPE.FLOW_ERROR,
                  o("WAWebGalaxyFlowQPLLoggerUtils")
                    .WaeScreenNavigationQPLErrorTypes
                    .EXTENSIONS_METADATA_GRAPHQL_RESPONSE_ERROR,
                ),
                new (o("WAWebGalaxyFlowsError").WaeGalaxyFlowError)(
                  o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetdataErrors
                    .EXTENSIONS_METADATA_GRAPHQL_RESPONSE_ERROR,
                ))
              : e;
          })
      );
    }
    function c(e) {
      var t, n;
      return !(
        ((t = e.xwa_extensions_get_flow_data) == null ||
        (t = t.endpoint_public_key) == null
          ? void 0
          : t.key) != null &&
        e.xwa_extensions_get_flow_data.endpoint_public_key.key.length > 0 &&
        ((n = e.xwa_extensions_get_flow_data) == null ||
        (n = n.endpoint_public_key) == null
          ? void 0
          : n.signature) != null &&
        e.xwa_extensions_get_flow_data.endpoint_public_key.signature.length > 0
      );
    }
    l.default = u;
  },
  98,
);
