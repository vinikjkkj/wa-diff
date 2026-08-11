__d(
  "WAWebGalaxyFlowsData",
  [
    "Promise",
    "WAWebDBUpdateMessageTable",
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
              var s, u, d;
              if (t.flowJSON != null || (l != null && l.aborted)) return t;
              var m = a.unsafe(),
                p =
                  m.galaxyFlowWAMMessageId == null ||
                  m.galaxyFlowQPLMessageId == null,
                _ = p
                  ? yield o("WAWebGalaxyFlowsUtils").computeMessageIds(m.id)
                  : null;
              _ && c(m, _.flowWAMMessageId, _.flowQPLMessageId);
              var f =
                m.galaxyFlowQPLMessageId != null
                  ? m.galaxyFlowQPLMessageId
                  : _ == null
                    ? void 0
                    : _.flowQPLMessageId;
              if (f != null) {
                var g = o("WAWebGalaxyFlowsSessionsCache").createFlowSession(
                  m.id.id.toString(),
                  f,
                );
                ((t.flowQPLSessionId = "qpl_" + g),
                  (t.flowWAMSessionId = "wam_" + g));
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
              var h =
                  o(
                    "WAWebGalaxyFlowsMetadataUtils",
                  ).skipIfStaleMedatadataOrNullDataApiVersion(t) ||
                  !!t.isResponseFlow,
                y = yield (e || (e = n("Promise"))).all([
                  o("WAWebGalaxyFlowsUtils").fetchFlowJSON(t.flowId, l),
                  h
                    ? (e || (e = n("Promise"))).resolve(null)
                    : r("WAWebGalaxyFlowsDrawerGetFlowDataQuery")({
                        chat: i,
                        messageData: t,
                        msg: a,
                        signal: l,
                      }),
                ]),
                C = y[0],
                b = y[1];
              return (
                o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationPoint(
                  o("WAWebGalaxyFlowQPLLoggerUtils")
                    .WaeScreenNavigationQPLPoints.FETCHING_FLOW_DATA_END,
                ),
                babelHelpers.extends({}, t, {
                  flowJSON: C,
                  flowWAMMessageId:
                    (s = _ == null ? void 0 : _.flowWAMMessageId) != null
                      ? s
                      : m.galaxyFlowWAMMessageId,
                  flowQPLMessageId:
                    (u = _ == null ? void 0 : _.flowQPLMessageId) != null
                      ? u
                      : m.galaxyFlowQPLMessageId,
                  hsmTag: m.hsmTag,
                  categories:
                    (d = o("WAWebGalaxyFlowsUtils").getFlowDataFromFetchedData(
                      t.flowId,
                      t.flowFetchedMetadata,
                    )) == null
                      ? void 0
                      : d.categories,
                  flowEntryPoint: o("WAWebWamEnumFlowEntryPoint")
                    .FLOW_ENTRY_POINT.MESSAGE_CTA,
                  mode: String(
                    o("WAWebGalaxyFlowsDrawerUtils").getFlowStatus(t, b),
                  ),
                  isTemplate: m.templateId != null ? 1 : 0,
                  flowFetchedMetadata: b,
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
                var v = o(
                  "WAWebGalaxyFlowsError",
                ).WaeGalaxyFlowMetadataErrors.cast(
                  e instanceof o("WAWebGalaxyFlowsError").WaeGalaxyFlowError
                    ? e.name
                    : "",
                );
                e: {
                  if (
                    v ===
                    o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors
                      .SANCTIONED
                  ) {
                    (o(
                      "WAWebGalaxyFlowQPLLoggerUtils",
                    ).qplWaeScreenNavigationDrop(),
                      o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataDrop());
                    break e;
                  }
                  if (
                    v ===
                    o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors
                      .METADATA_EMPTY_RESPONSE
                  ) {
                    o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataEnd(3);
                    break e;
                  }
                  if (
                    v ===
                    o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors
                      .METADATA_INVALID_EXTENSIONS_ID
                  ) {
                    o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataEnd(3);
                    break e;
                  }
                  if (
                    v ===
                    o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors
                      .METADATA_INVALID_PUBLIC_KEY
                  ) {
                    o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataEnd(3);
                    break e;
                  }
                  if (
                    v ===
                    o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors
                      .PUBLIC_KEY_SIGNATURE_VERIFICATION_EXCEPTION
                  ) {
                    (o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataAnnotate({
                      string: {
                        error_type: o("WAWebGalaxyFlowQPLLoggerUtils")
                          .WaeMetadataQPLErrorTypes
                          .EXTENSIONS_PUBLIC_KEY_SIGNATURE_VERIFICATION_EXCEPTION,
                      },
                    }),
                      o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataEnd(3));
                    break e;
                  }
                  if (
                    v ===
                    o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors
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
                    v ===
                    o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors
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
                    var S;
                    ((S = o(
                      "WAWebGalaxyFlowQPLLoggerUtils",
                    )).qplWaeMetadataAnnotate({
                      string: {
                        error_type:
                          S.WaeMetadataQPLErrorTypes
                            .EXTENSIONS_METADATA_RESPONSE_ERROR,
                      },
                    }),
                      S.qplWaeMetadataAnnotate({
                        bool: { endpoint_public_key_received: !1 },
                      }),
                      S.qplWaeMetadataEnd(3));
                    break e;
                  }
                }
                o(
                  "WAWebGalaxyFlowQPLLoggerUtils",
                ).qplWaeScreenNavigationAnnotate({
                  string: {
                    error_type:
                      v ===
                      o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors
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
    function c(e, t, n) {
      return (
        (e.galaxyFlowWAMMessageId = t),
        (e.galaxyFlowQPLMessageId = n),
        o("WAWebDBUpdateMessageTable").updateMessageTable(e.id, {
          galaxyFlowWAMMessageId: t,
          galaxyFlowQPLMessageId: n,
        })
      );
    }
    l.default = s;
  },
  98,
);
