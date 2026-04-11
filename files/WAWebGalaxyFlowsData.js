__d(
  "WAWebGalaxyFlowsData",
  [
    "Promise",
    "WAWebGalaxyFlowQPLLoggerUtils",
    "WAWebGalaxyFlowsDrawerGetFlowDataQuery",
    "WAWebGalaxyFlowsDrawerUtils",
    "WAWebGalaxyFlowsError",
    "WAWebGalaxyFlowsMetadataUtils",
    "WAWebGalaxyFlowsSessionsCache",
    "WAWebGalaxyFlowsUtils",
    "WAWebWamEnumFlowEntryPoint",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n, r) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l) {
            try {
              var s, u, c;
              if (t.flowJSON != null || (l != null && l.aborted)) return t;
              var d = a.unsafe(),
                m =
                  d.galaxyFlowWAMMessageId == null ||
                  d.galaxyFlowQPLMessageId == null,
                p = m
                  ? yield o("WAWebGalaxyFlowsUtils").computeMessageIds(d.id)
                  : null;
              p &&
                d.updateGalaxyFlowMsgLoggingIds(
                  p.flowWAMMessageId,
                  p.flowQPLMessageId,
                );
              var _ =
                d.galaxyFlowQPLMessageId != null
                  ? d.galaxyFlowQPLMessageId
                  : p == null
                    ? void 0
                    : p.flowQPLMessageId;
              if (_ != null) {
                var f = o("WAWebGalaxyFlowsSessionsCache").createFlowSession(
                  d.id.id.toString(),
                  _,
                );
                ((t.flowQPLSessionId = "qpl_" + f),
                  (t.flowWAMSessionId = "wam_" + f));
              }
              (o(
                "WAWebGalaxyFlowQPLLoggerUtils",
              ).qplWaeScreenNavigationAnnotate(
                o(
                  "WAWebGalaxyFlowQPLLoggerUtils",
                ).getWaeScreenNavigationAnnotations(a, t),
              ),
                o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationPoint(
                  o("WAWebGalaxyFlowQPLLoggerUtils")
                    .WaeScreenNavigationQPLPoints.FETCHING_FLOW_DATA_START,
                ));
              var g =
                  o(
                    "WAWebGalaxyFlowsMetadataUtils",
                  ).skipIfStaleMedatadataOrNullDataApiVersion(t) ||
                  !!t.isResponseFlow,
                h = yield (e || (e = n("Promise"))).all([
                  o("WAWebGalaxyFlowsUtils").fetchFlowJSON(t.flowId, l),
                  g
                    ? (e || (e = n("Promise"))).resolve(null)
                    : r("WAWebGalaxyFlowsDrawerGetFlowDataQuery")(t, a, i, l),
                ]),
                y = h[0],
                C = h[1];
              return (
                o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationPoint(
                  o("WAWebGalaxyFlowQPLLoggerUtils")
                    .WaeScreenNavigationQPLPoints.FETCHING_FLOW_DATA_END,
                ),
                babelHelpers.extends({}, t, {
                  flowJSON: y,
                  flowWAMMessageId:
                    (s = p == null ? void 0 : p.flowWAMMessageId) != null
                      ? s
                      : d.galaxyFlowWAMMessageId,
                  flowQPLMessageId:
                    (u = p == null ? void 0 : p.flowQPLMessageId) != null
                      ? u
                      : d.galaxyFlowQPLMessageId,
                  hsmTag: d.hsmTag,
                  categories:
                    (c = o("WAWebGalaxyFlowsUtils").getFlowDataFromFetchedData(
                      t.flowId,
                      t.flowFetchedMetadata,
                    )) == null
                      ? void 0
                      : c.categories,
                  flowEntryPoint: o("WAWebWamEnumFlowEntryPoint")
                    .FLOW_ENTRY_POINT.MESSAGE_CTA,
                  mode: String(
                    o("WAWebGalaxyFlowsDrawerUtils").getFlowStatus(t, C),
                  ),
                  isTemplate: d.templateId != null ? 1 : 0,
                  flowFetchedMetadata: C,
                })
              );
            } catch (e) {
              if (l != null && l.aborted) throw e;
              if (!navigator.onLine)
                o(
                  "WAWebGalaxyFlowQPLLoggerUtils",
                ).qplWaeScreenNavigationAnnotate({
                  string: {
                    error_type: o("WAWebGalaxyFlowQPLLoggerUtils")
                      .WaeScreenNavigationQPLErrorTypes.NO_NETWORK_ERROR,
                  },
                });
              else {
                var b = o(
                  "WAWebGalaxyFlowsError",
                ).WaeGalaxyFlowMetdataErrors.cast(
                  e instanceof o("WAWebGalaxyFlowsError").WaeGalaxyFlowError
                    ? e.name
                    : "",
                );
                e: {
                  if (
                    b ===
                    o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetdataErrors
                      .SANCTIONED
                  ) {
                    (o(
                      "WAWebGalaxyFlowQPLLoggerUtils",
                    ).qplWaeScreenNavigationDrop(),
                      o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataDrop());
                    break e;
                  }
                  if (
                    b ===
                    o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetdataErrors
                      .METADATA_EMPTY_RESPONSE
                  ) {
                    o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataEnd(3);
                    break e;
                  }
                  if (
                    b ===
                    o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetdataErrors
                      .METADATA_INVALID_EXTENSIONS_ID
                  ) {
                    o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataEnd(3);
                    break e;
                  }
                  if (
                    b ===
                    o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetdataErrors
                      .METADATA_INVALID_PUBLIC_KEY
                  ) {
                    o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataEnd(3);
                    break e;
                  }
                  if (
                    b ===
                    o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetdataErrors
                      .PUBLIC_KEY_SINGATURE_VERIFICATION_EXCEPTION
                  ) {
                    (o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataAnnotate({
                      string: {
                        error_type: o("WAWebGalaxyFlowQPLLoggerUtils")
                          .WaeMetadataQPLErrorTypes
                          .EXTENSIONS_PUBLIC_KEY_SINGATURE_VERIFICATION_EXCEPTION,
                      },
                    }),
                      o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataEnd(3));
                    break e;
                  }
                  if (
                    b ===
                    o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetdataErrors
                      .MISSING_IDENTITY_KEY
                  ) {
                    (o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataAnnotate({
                      string: {
                        error_type: o("WAWebGalaxyFlowQPLLoggerUtils")
                          .WaeMetadataQPLErrorTypes
                          .EXTENSIONS_PUBLIC_KEY_MISSING_IDENTITY_KEY_ERROR,
                      },
                    }),
                      o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataEnd(3));
                    break e;
                  }
                  if (
                    b ===
                    o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetdataErrors
                      .EXTENSIONS_METADATA_GRAPHQL_RESPONSE_ERROR
                  ) {
                    (o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataAnnotate({
                      string: {
                        error_type: o("WAWebGalaxyFlowQPLLoggerUtils")
                          .WaeMetadataQPLErrorTypes
                          .EXTENSIONS_METADATA_GRAPHQL_RESPONSE_ERROR,
                      },
                    }),
                      o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataEnd(3));
                    break e;
                  }
                  {
                    var v;
                    ((v = o(
                      "WAWebGalaxyFlowQPLLoggerUtils",
                    )).qplWaeMetadataAnnotate({
                      string: {
                        error_type:
                          v.WaeMetadataQPLErrorTypes
                            .EXTENSIONS_METADATA_RESPONSE_ERROR,
                      },
                    }),
                      v.qplWaeMetadataAnnotate({
                        bool: { endpoint_public_key_received: !1 },
                      }),
                      v.qplWaeMetadataEnd(3));
                    break e;
                  }
                }
                o(
                  "WAWebGalaxyFlowQPLLoggerUtils",
                ).qplWaeScreenNavigationAnnotate({
                  string: {
                    error_type:
                      b ===
                      o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetdataErrors
                        .EXTENSIONS_METADATA_GRAPHQL_RESPONSE_ERROR
                        ? o("WAWebGalaxyFlowQPLLoggerUtils")
                            .WaeScreenNavigationQPLErrorTypes
                            .EXTENSIONS_METADATA_GRAPHQL_RESPONSE_ERROR
                        : o("WAWebGalaxyFlowQPLLoggerUtils")
                            .WaeScreenNavigationQPLErrorTypes
                            .EXTENSION_METADATA_RESPONSE_ERROR,
                  },
                });
              }
              throw (
                o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationEnd(3),
                e
              );
            }
          },
        )),
        u.apply(this, arguments)
      );
    }
    l.default = s;
  },
  98,
);
