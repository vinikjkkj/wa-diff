__d(
  "WAWebGalaxyFlowsData",
  [
    "WAWebGalaxyFlowQPLLoggerUtils",
    "WAWebGalaxyFlowsDrawerGetFlowDataQuery",
    "WAWebGalaxyFlowsDrawerUtils",
    "WAWebGalaxyFlowsError",
    "WAWebGalaxyFlowsMetadataUtils",
    "WAWebGalaxyFlowsSessionsCache",
    "WAWebGalaxyFlowsUtils",
    "WAWebWamEnumFlowEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n, a) {
      try {
        var i, l, s;
        if (e.flowJSON != null || (a != null && a.aborted)) return e;
        var u = t.unsafe(),
          c =
            u.galaxyFlowWAMMessageId == null ||
            u.galaxyFlowQPLMessageId == null,
          d = c
            ? await o("WAWebGalaxyFlowsUtils").computeMessageIds(u.id)
            : null;
        d &&
          u.updateGalaxyFlowMsgLoggingIds(
            d.flowWAMMessageId,
            d.flowQPLMessageId,
          );
        var m =
          u.galaxyFlowQPLMessageId != null
            ? u.galaxyFlowQPLMessageId
            : d == null
              ? void 0
              : d.flowQPLMessageId;
        if (m != null) {
          var p = o("WAWebGalaxyFlowsSessionsCache").createFlowSession(
            u.id.id.toString(),
            m,
          );
          ((e.flowQPLSessionId = "qpl_" + p),
            (e.flowWAMSessionId = "wam_" + p));
        }
        (o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationAnnotate(
          o("WAWebGalaxyFlowQPLLoggerUtils").getWaeScreenNavigationAnnotations(
            t,
            e,
          ),
        ),
          o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationPoint(
            o("WAWebGalaxyFlowQPLLoggerUtils").WaeScreenNavigationQPLPoints
              .FETCHING_FLOW_DATA_START,
          ));
        var _ =
            o(
              "WAWebGalaxyFlowsMetadataUtils",
            ).skipIfStaleMedatadataOrNullDataApiVersion(e) ||
            !!e.isResponseFlow,
          f = await Promise.all([
            o("WAWebGalaxyFlowsUtils").fetchFlowJSON(e.flowId, a),
            _
              ? Promise.resolve(null)
              : r("WAWebGalaxyFlowsDrawerGetFlowDataQuery")(e, t, n, a),
          ]),
          g = f[0],
          h = f[1];
        return (
          o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationPoint(
            o("WAWebGalaxyFlowQPLLoggerUtils").WaeScreenNavigationQPLPoints
              .FETCHING_FLOW_DATA_END,
          ),
          babelHelpers.extends({}, e, {
            flowJSON: g,
            flowWAMMessageId:
              (i = d == null ? void 0 : d.flowWAMMessageId) != null
                ? i
                : u.galaxyFlowWAMMessageId,
            flowQPLMessageId:
              (l = d == null ? void 0 : d.flowQPLMessageId) != null
                ? l
                : u.galaxyFlowQPLMessageId,
            hsmTag: u.hsmTag,
            categories:
              (s = o("WAWebGalaxyFlowsUtils").getFlowDataFromFetchedData(
                e.flowId,
                e.flowFetchedMetadata,
              )) == null
                ? void 0
                : s.categories,
            flowEntryPoint: o("WAWebWamEnumFlowEntryPoint").FLOW_ENTRY_POINT
              .MESSAGE_CTA,
            mode: String(o("WAWebGalaxyFlowsDrawerUtils").getFlowStatus(e, h)),
            isTemplate: u.templateId != null ? 1 : 0,
            flowFetchedMetadata: h,
          })
        );
      } catch (e) {
        if (a != null && a.aborted) throw e;
        if (!navigator.onLine)
          o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationAnnotate({
            string: {
              error_type: o("WAWebGalaxyFlowQPLLoggerUtils")
                .WaeScreenNavigationQPLErrorTypes.NO_NETWORK_ERROR,
            },
          });
        else {
          var y = o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetdataErrors.cast(
            e instanceof o("WAWebGalaxyFlowsError").WaeGalaxyFlowError
              ? e.name
              : "",
          );
          e: {
            if (
              y ===
              o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetdataErrors.SANCTIONED
            ) {
              (o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationDrop(),
                o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataDrop());
              break e;
            }
            if (
              y ===
              o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetdataErrors
                .METADATA_EMPTY_RESPONSE
            ) {
              o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataEnd(3);
              break e;
            }
            if (
              y ===
              o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetdataErrors
                .METADATA_INVALID_EXTENSIONS_ID
            ) {
              o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataEnd(3);
              break e;
            }
            if (
              y ===
              o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetdataErrors
                .METADATA_INVALID_PUBLIC_KEY
            ) {
              o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataEnd(3);
              break e;
            }
            if (
              y ===
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
              y ===
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
              y ===
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
              var C;
              ((C = o("WAWebGalaxyFlowQPLLoggerUtils")).qplWaeMetadataAnnotate({
                string: {
                  error_type:
                    C.WaeMetadataQPLErrorTypes
                      .EXTENSIONS_METADATA_RESPONSE_ERROR,
                },
              }),
                C.qplWaeMetadataAnnotate({
                  bool: { endpoint_public_key_received: !1 },
                }),
                C.qplWaeMetadataEnd(3));
              break e;
            }
          }
          o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationAnnotate({
            string: {
              error_type:
                y ===
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
    }
    l.default = e;
  },
  98,
);
