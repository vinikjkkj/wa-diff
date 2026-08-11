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
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t) {
      var a,
        i,
        l,
        u = t.chat,
        d = t.messageData,
        m = t.msg,
        p = t.signal;
      (o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataStart(),
        o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataAnnotate(
          o("WAWebGalaxyFlowQPLLoggerUtils").getWaeMetadataAnnotations(m, d),
        ));
      var _ =
        ((a = d.flowMetadata) == null ? void 0 : a.data_api_version) != null;
      if (o("WAWebGalaxyFlowQPLLoggerUtils").isGalaxyFlowSanctioned()) {
        var f = new (o("WAWebGalaxyFlowsError").WaeGalaxyFlowError)(
          o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors.SANCTIONED,
        );
        return (f.stack, (s || (s = n("Promise"))).reject(f));
      }
      if (p != null && p.aborted) {
        var g = r("err")("Request aborted");
        return (s || (s = n("Promise"))).reject(g);
      }
      var h = u.contact.id,
        y = h.isLid()
          ? (i =
              (l = o("WAWebLidMigrationUtils").toPn(h)) == null
                ? void 0
                : l.toString()) != null
            ? i
            : ""
          : h.toString(),
        C = d.flowId;
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
            { request: { extensions: { biz_jid: y, flow_id: C } } },
          )
          .then(
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  if (!(p != null && p.aborted)) {
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
                        o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors
                          .METADATA_EMPTY_RESPONSE,
                      );
                      throw (n.stack, n);
                    }
                    if (_)
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
                          o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors
                            .METADATA_INVALID_PUBLIC_KEY,
                        );
                        throw (r.stack, r);
                      } else {
                        var a, i;
                        (o(
                          "WAWebGalaxyFlowQPLLoggerUtils",
                        ).qplWaeMetadataAnnotate({
                          bool: { endpoint_public_key_received: !0 },
                        }),
                          yield o(
                            "WAWebGalaxyFlowsUnifiedEncryptionVerifier",
                          ).UnifiedEncryptionVerifier.arePublicKeyWithSignatureValid(
                            {
                              callback: {
                                onComplete: function (t) {
                                  if (!t) {
                                    var e = new (o(
                                      "WAWebGalaxyFlowsError",
                                    ).WaeGalaxyFlowError)(
                                      o("WAWebGalaxyFlowsError")
                                        .WaeGalaxyFlowMetadataErrors
                                        .PUBLIC_KEY_SIGNATURE_VERIFICATION_EXCEPTION,
                                    );
                                    throw (e.stack, e);
                                  }
                                },
                              },
                              contactId: h,
                              publicKeyPem:
                                (a = e.xwa_extensions_get_flow_data) == null ||
                                (a = a.endpoint_public_key) == null
                                  ? void 0
                                  : a.key,
                              publicKeySignature:
                                (i = e.xwa_extensions_get_flow_data) == null ||
                                (i = i.endpoint_public_key) == null
                                  ? void 0
                                  : i.signature,
                            },
                          ));
                      }
                    if (
                      o("WAWebGalaxyFlowsUtils").getFlowDataFromFetchedData(
                        C,
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
                      var l = new (o(
                        "WAWebGalaxyFlowsError",
                      ).WaeGalaxyFlowError)(
                        o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors
                          .METADATA_INVALID_EXTENSIONS_ID,
                      );
                      throw (l.stack, l);
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
                d,
                u,
                m,
                o("WAWebWamEnumInteractionType").INTERACTION_TYPE.FLOW_ERROR,
                o("WAWebGalaxyFlowQPLLoggerUtils")
                  .WaeScreenNavigationQPLErrorTypes
                  .EXTENSIONS_METADATA_GRAPHQL_RESPONSE_ERROR,
              );
              var t = new (o("WAWebGalaxyFlowsError").WaeGalaxyFlowError)(
                o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors
                  .EXTENSIONS_METADATA_GRAPHQL_RESPONSE_ERROR,
              );
              throw (t.stack, t);
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
