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
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.chat,
            i = t.messageData,
            l = t.msg,
            s = t.signal;
          try {
            var u, d, m;
            if (i.flowJSON != null || (s != null && s.aborted)) return i;
            var p = l.unsafe(),
              _ =
                p.galaxyFlowWAMMessageId == null ||
                p.galaxyFlowQPLMessageId == null,
              f = _
                ? yield o("WAWebGalaxyFlowsUtils").computeMessageIds(p.id)
                : null;
            f && c(p, f.flowWAMMessageId, f.flowQPLMessageId);
            var g =
              p.galaxyFlowQPLMessageId != null
                ? p.galaxyFlowQPLMessageId
                : f == null
                  ? void 0
                  : f.flowQPLMessageId;
            if (g != null) {
              var h = o("WAWebGalaxyFlowsSessionsCache").createFlowSession(
                p.id.id.toString(),
                g,
              );
              ((i.flowQPLSessionId = "qpl_" + h),
                (i.flowWAMSessionId = "wam_" + h));
            }
            (o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationAnnotate(
              o(
                "WAWebGalaxyFlowQPLLoggerUtils",
              ).getWaeScreenNavigationAnnotations(p, i),
            ),
              o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationPoint(
                o("WAWebGalaxyFlowQPLLoggerUtils").WaeScreenNavigationQPLPoints
                  .FETCHING_FLOW_DATA_START,
              ));
            var y =
                o(
                  "WAWebGalaxyFlowsMetadataUtils",
                ).skipIfStaleMedatadataOrNullDataApiVersion(i) ||
                !!i.isResponseFlow,
              C = yield (e || (e = n("Promise"))).all([
                o("WAWebGalaxyFlowsUtils").fetchFlowJSON(i.flowId, s),
                y
                  ? (e || (e = n("Promise"))).resolve(null)
                  : r("WAWebGalaxyFlowsDrawerGetFlowDataQuery")({
                      chat: a,
                      messageData: i,
                      msg: l,
                      signal: s,
                    }),
              ]),
              b = C[0],
              v = C[1];
            return (
              o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationPoint(
                o("WAWebGalaxyFlowQPLLoggerUtils").WaeScreenNavigationQPLPoints
                  .FETCHING_FLOW_DATA_END,
              ),
              babelHelpers.extends({}, i, {
                flowJSON: b,
                flowWAMMessageId:
                  (u = f == null ? void 0 : f.flowWAMMessageId) != null
                    ? u
                    : p.galaxyFlowWAMMessageId,
                flowQPLMessageId:
                  (d = f == null ? void 0 : f.flowQPLMessageId) != null
                    ? d
                    : p.galaxyFlowQPLMessageId,
                hsmTag: p.hsmTag,
                categories:
                  (m = o("WAWebGalaxyFlowsUtils").getFlowDataFromFetchedData(
                    i.flowId,
                    i.flowFetchedMetadata,
                  )) == null
                    ? void 0
                    : m.categories,
                flowEntryPoint: o("WAWebWamEnumFlowEntryPoint").FLOW_ENTRY_POINT
                  .MESSAGE_CTA,
                mode: String(
                  o("WAWebGalaxyFlowsDrawerUtils").getFlowStatus(i, v),
                ),
                isTemplate: p.templateId != null ? 1 : 0,
                flowFetchedMetadata: v,
              })
            );
          } catch (e) {
            if (s != null && s.aborted) throw e;
            if (!navigator.onLine)
              o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationAnnotate(
                {
                  string: {
                    error_type: o("WAWebGalaxyFlowQPLLoggerUtils")
                      .WaeScreenNavigationQPLErrorTypes.NO_NETWORK_ERROR,
                  },
                },
              );
            else {
              var S = o(
                "WAWebGalaxyFlowsError",
              ).WaeGalaxyFlowMetadataErrors.cast(
                e instanceof o("WAWebGalaxyFlowsError").WaeGalaxyFlowError
                  ? e.name
                  : "",
              );
              e: {
                if (
                  S ===
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
                  S ===
                  o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors
                    .METADATA_EMPTY_RESPONSE
                ) {
                  o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataEnd(3);
                  break e;
                }
                if (
                  S ===
                  o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors
                    .METADATA_INVALID_EXTENSIONS_ID
                ) {
                  o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataEnd(3);
                  break e;
                }
                if (
                  S ===
                  o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors
                    .METADATA_INVALID_PUBLIC_KEY
                ) {
                  o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataEnd(3);
                  break e;
                }
                if (
                  S ===
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
                  S ===
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
                  S ===
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
                  var R;
                  ((R = o(
                    "WAWebGalaxyFlowQPLLoggerUtils",
                  )).qplWaeMetadataAnnotate({
                    string: {
                      error_type:
                        R.WaeMetadataQPLErrorTypes
                          .EXTENSIONS_METADATA_RESPONSE_ERROR,
                    },
                  }),
                    R.qplWaeMetadataAnnotate({
                      bool: { endpoint_public_key_received: !1 },
                    }),
                    R.qplWaeMetadataEnd(3));
                  break e;
                }
              }
              o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationAnnotate(
                {
                  string: {
                    error_type:
                      S ===
                      o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors
                        .EXTENSIONS_METADATA_GRAPHQL_RESPONSE_ERROR
                        ? o("WAWebGalaxyFlowQPLLoggerUtils")
                            .WaeScreenNavigationQPLErrorTypes
                            .EXTENSIONS_METADATA_GRAPHQL_RESPONSE_ERROR
                        : o("WAWebGalaxyFlowQPLLoggerUtils")
                            .WaeScreenNavigationQPLErrorTypes
                            .EXTENSION_METADATA_RESPONSE_ERROR,
                  },
                },
              );
            }
            throw (
              o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationEnd(3),
              e
            );
          }
        })),
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
