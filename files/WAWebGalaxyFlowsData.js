__d(
  "WAWebGalaxyFlowsData",
  [
    "WAWebBackendRuntime",
    "WAWebDBUpdateMessageTable",
    "WAWebGalaxyFlowQPLLoggerUtils",
    "WAWebGalaxyFlowsDrawerGetFlowDataQuery",
    "WAWebGalaxyFlowsDrawerUtils",
    "WAWebGalaxyFlowsError",
    "WAWebGalaxyFlowsMetadataUtils",
    "WAWebGalaxyFlowsSessionsCache",
    "WAWebGalaxyFlowsUtils",
    "WAWebMessageStoreService",
    "WAWebWamEnumFlowEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.chat,
        n = e.messageData,
        a = e.msg,
        i = e.signal;
      try {
        var l, u, c;
        if (n.flowJSON != null || (i != null && i.aborted)) return n;
        var d = a.unsafe(),
          m =
            d.galaxyFlowWAMMessageId == null ||
            d.galaxyFlowQPLMessageId == null,
          p = m
            ? await o("WAWebGalaxyFlowsUtils").computeMessageIds(d.id)
            : null;
        p && s(d, p.flowWAMMessageId, p.flowQPLMessageId);
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
          ((n.flowQPLSessionId = "qpl_" + f),
            (n.flowWAMSessionId = "wam_" + f));
        }
        (o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationAnnotate(
          o("WAWebGalaxyFlowQPLLoggerUtils").getWaeScreenNavigationAnnotations(
            d,
            n,
          ),
        ),
          o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationPoint(
            o("WAWebGalaxyFlowQPLLoggerUtils").WaeScreenNavigationQPLPoints
              .FETCHING_FLOW_DATA_START,
          ));
        var g =
            o(
              "WAWebGalaxyFlowsMetadataUtils",
            ).skipIfStaleMedatadataOrNullDataApiVersion(n) ||
            !!n.isResponseFlow,
          h = await Promise.all([
            o("WAWebGalaxyFlowsUtils").fetchFlowJSON(n.flowId, i),
            g
              ? Promise.resolve(null)
              : r("WAWebGalaxyFlowsDrawerGetFlowDataQuery")({
                  chat: t,
                  messageData: n,
                  msg: a,
                  signal: i,
                }),
          ]),
          y = h[0],
          C = h[1];
        return (
          o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationPoint(
            o("WAWebGalaxyFlowQPLLoggerUtils").WaeScreenNavigationQPLPoints
              .FETCHING_FLOW_DATA_END,
          ),
          babelHelpers.extends({}, n, {
            flowJSON: y,
            flowWAMMessageId:
              (l = p == null ? void 0 : p.flowWAMMessageId) != null
                ? l
                : d.galaxyFlowWAMMessageId,
            flowQPLMessageId:
              (u = p == null ? void 0 : p.flowQPLMessageId) != null
                ? u
                : d.galaxyFlowQPLMessageId,
            hsmTag: d.hsmTag,
            categories:
              (c = o("WAWebGalaxyFlowsUtils").getFlowDataFromFetchedData(
                n.flowId,
                n.flowFetchedMetadata,
              )) == null
                ? void 0
                : c.categories,
            flowEntryPoint: o("WAWebWamEnumFlowEntryPoint").FLOW_ENTRY_POINT
              .MESSAGE_CTA,
            mode: String(o("WAWebGalaxyFlowsDrawerUtils").getFlowStatus(n, C)),
            isTemplate: d.templateId != null ? 1 : 0,
            flowFetchedMetadata: C,
          })
        );
      } catch (e) {
        if (i != null && i.aborted) throw e;
        if (!navigator.onLine)
          o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationAnnotate({
            string: {
              error_type: o("WAWebGalaxyFlowQPLLoggerUtils")
                .WaeScreenNavigationQPLErrorTypes.NO_NETWORK_ERROR,
            },
          });
        else {
          var b = o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors.cast(
            e instanceof o("WAWebGalaxyFlowsError").WaeGalaxyFlowError
              ? e.name
              : "",
          );
          e: {
            if (
              b ===
              o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors.SANCTIONED
            ) {
              (o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationDrop(),
                o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataDrop());
              break e;
            }
            if (
              b ===
              o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors
                .METADATA_EMPTY_RESPONSE
            ) {
              o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataEnd(3);
              break e;
            }
            if (
              b ===
              o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors
                .METADATA_INVALID_EXTENSIONS_ID
            ) {
              o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataEnd(3);
              break e;
            }
            if (
              b ===
              o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors
                .METADATA_INVALID_PUBLIC_KEY
            ) {
              o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataEnd(3);
              break e;
            }
            if (
              b ===
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
              b ===
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
              b ===
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
              var v;
              ((v = o("WAWebGalaxyFlowQPLLoggerUtils")).qplWaeMetadataAnnotate({
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
          o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationAnnotate({
            string: {
              error_type:
                b ===
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
    }
    function s(e, t, n) {
      return (
        (e.galaxyFlowWAMMessageId = t),
        (e.galaxyFlowQPLMessageId = n),
        (o("WAWebBackendRuntime").isWebDiBackendEnabled()
          ? o("WAWebBackendRuntime").runtime(
              o("WAWebMessageStoreService").MessageStoreService,
            ).updateMessageTable
          : o("WAWebDBUpdateMessageTable").updateMessageTable)(e.id, {
          galaxyFlowWAMMessageId: t,
          galaxyFlowQPLMessageId: n,
        })
      );
    }
    l.default = e;
  },
  98,
);
