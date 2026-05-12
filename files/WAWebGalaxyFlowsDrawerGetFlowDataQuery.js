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
      if (o("WAWebGalaxyFlowQPLLoggerUtils").isGalaxyFlowSanctioned()) {
        var p = new (o("WAWebGalaxyFlowsError").WaeGalaxyFlowError)(
          o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetdataErrors.SANCTIONED,
        );
        return (p.stack, (s || (s = n("Promise"))).reject(p));
      }
      if (i != null && i.aborted) {
        var _ = new Error("Request aborted");
        return (_.stack, (s || (s = n("Promise"))).reject(_));
      }
      var f = a.contact.id,
        g = f.isLid()
          ? (u =
              (d = o("WAWebLidMigrationUtils").toPn(f)) == null
                ? void 0
                : d.toString()) != null
            ? u
            : ""
          : f.toString(),
        h = t.flowId;
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
            { request: { extensions: { biz_jid: g, flow_id: h } } },
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
                    ) {
                      o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataAnnotate(
                        {
                          string: {
                            error_type: o("WAWebGalaxyFlowQPLLoggerUtils")
                              .WaeMetadataQPLErrorTypes
                              .EXTENSIONS_METADATA_EMPTY_RESPONSE,
                          },
                        },
                      );
                      var n = new (o(
                        "WAWebGalaxyFlowsError",
                      ).WaeGalaxyFlowError)(
                        o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetdataErrors
                          .METADATA_EMPTY_RESPONSE,
                      );
                      throw (n.stack, n);
                    }
                    if (m)
                      if (c(e)) {
                        (o(
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
                          }));
                        var r = new (o(
                          "WAWebGalaxyFlowsError",
                        ).WaeGalaxyFlowError)(
                          o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetdataErrors
                            .METADATA_INVALID_PUBLIC_KEY,
                        );
                        throw (r.stack, r);
                      } else {
                        var a, l;
                        (o(
                          "WAWebGalaxyFlowQPLLoggerUtils",
                        ).qplWaeMetadataAnnotate({
                          bool: { endpoint_public_key_received: !0 },
                        }),
                          yield o(
                            "WAWebGalaxyFlowsUnifiedEncryptionVerifier",
                          ).UnifiedEncryptionVerifier.arePublicKeyWithSignatureValid(
                            f,
                            (a = e.xwa_extensions_get_flow_data) == null ||
                              (a = a.endpoint_public_key) == null
                              ? void 0
                              : a.key,
                            (l = e.xwa_extensions_get_flow_data) == null ||
                              (l = l.endpoint_public_key) == null
                              ? void 0
                              : l.signature,
                            {
                              onComplete: function (t) {
                                if (!t) {
                                  var e = new (o(
                                    "WAWebGalaxyFlowsError",
                                  ).WaeGalaxyFlowError)(
                                    o("WAWebGalaxyFlowsError")
                                      .WaeGalaxyFlowMetdataErrors
                                      .PUBLIC_KEY_SINGATURE_VERIFICATION_EXCEPTION,
                                  );
                                  throw (e.stack, e);
                                }
                              },
                            },
                          ));
                      }
                    if (
                      o("WAWebGalaxyFlowsUtils").getFlowDataFromFetchedData(
                        h,
                        e,
                      ) == null
                    ) {
                      o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataAnnotate(
                        {
                          string: {
                            error_type: o("WAWebGalaxyFlowQPLLoggerUtils")
                              .WaeMetadataQPLErrorTypes
                              .EXTENSIONS_INVALID_EXTENSIONS_ID,
                          },
                        },
                      );
                      var s = new (o(
                        "WAWebGalaxyFlowsError",
                      ).WaeGalaxyFlowError)(
                        o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetdataErrors
                          .METADATA_INVALID_EXTENSIONS_ID,
                      );
                      throw (s.stack, s);
                    }
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
            if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
              o(
                "WAWebGalaxyFlowWamLoggerUtils",
              ).logStructuredMessageInteractionWAMEvent(
                t,
                a,
                r,
                o("WAWebWamEnumInteractionType").INTERACTION_TYPE.FLOW_ERROR,
                o("WAWebGalaxyFlowQPLLoggerUtils")
                  .WaeScreenNavigationQPLErrorTypes
                  .EXTENSIONS_METADATA_GRAPHQL_RESPONSE_ERROR,
              );
              var n = new (o("WAWebGalaxyFlowsError").WaeGalaxyFlowError)(
                o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetdataErrors
                  .EXTENSIONS_METADATA_GRAPHQL_RESPONSE_ERROR,
              );
              throw (n.stack, n);
            }
            throw e;
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
