__d(
  "WAWebFlowsInvokeHandler",
  [
    "WAFlowsBridgeEvents",
    "WAFlowsWebNativeBridgeClientABPropsContext.react",
    "WALogger",
    "WAWebCmd",
    "WAWebExternalLink.react",
    "WAWebGalaxyDisableCTACollection",
    "WAWebGalaxyFlowMediaEditorCollection",
    "WAWebGalaxyFlowMediaPicker.react",
    "WAWebGalaxyFlowQPLLoggerUtils",
    "WAWebGalaxyFlowWamLoggerUtils",
    "WAWebGalaxyFlowsABPropsUtils",
    "WAWebGalaxyFlowsCompleteAction",
    "WAWebGalaxyFlowsDrawerUtils",
    "WAWebGalaxyFlowsNavBarUtils.react",
    "WAWebGalaxyFlowsResponseDownloadFlow.react",
    "WAWebGalaxyFlowsSessionsCache",
    "WAWebGalaxyFlowsShowToastAction",
    "WAWebGalaxyFlowsWamEventParser",
    "WAWebInteractiveMessageSync",
    "WAWebModalManager",
    "WAWebMsgType",
    "WAWebQplFlowWrapper",
    "WAWebWamCodegenWamEvent",
    "qpl",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = c || (c = o("react")),
      m = r("qpl")._(200750681, "3410"),
      p = r("qpl")._(200743350, "3411"),
      _ = r("qpl")._(200739086, "3412");
    function f(e) {
      return e === 200750681
        ? m
        : e === 200743350
          ? p
          : e === 200739086
            ? _
            : null;
    }
    function g(e) {
      return {
        public_key: o(
          "WAWebGalaxyFlowsDrawerUtils",
        ).getPublicKeyFromFetchedData(e),
        errorKey: "",
        errorMessage: "",
      };
    }
    function h(t, n, a, i, l, c, m, p) {
      return function (_) {
        var h = _.eventName,
          y = _.payload;
        return new Promise(async function (_) {
          switch (h) {
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsGetFlowData:
              _(
                o("WAWebGalaxyFlowsDrawerUtils").getFlowInitDataPayload({
                  chat: t,
                  flowInitData: a,
                  messageData: n,
                  responseViewer: i,
                }),
              );
              break;
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsGetPublicKey:
              _(g(n.flowFetchedMetadata));
              break;
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsLearnMore:
              o("WAWebGalaxyFlowsNavBarUtils.react").openHelpCenterArticle(
                o("WAWebGalaxyFlowsNavBarUtils.react").GALAXY_FLOWS_ARTICLE_IDS
                  .LEARN_MORE,
              );
              break;
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsGetClientAbProps: {
              var C = y;
              o("WAWebGalaxyFlowsABPropsUtils")
                .getActualABPropData(C)
                .then(function (e) {
                  _(e);
                })
                .catch(function (t) {
                  (o("WALogger").ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[Galaxy Flows] Failed to get ABProp data: ",
                        "",
                      ])),
                    t,
                  ),
                    _(
                      o("WAFlowsWebNativeBridgeClientABPropsContext.react")
                        .abPropsFallBackDataForWeb,
                    ));
                });
              break;
            }
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsNavigate: {
              var b = y;
              if (b != null && typeof b == "object") {
                var v = b.disable_cta,
                  S = b.extension_screen_length,
                  R = b.is_restored,
                  L = b.is_success,
                  E = b.is_terminal_error,
                  k = b.is_terminal_success,
                  I = b.layout_type,
                  T = b.screen_progress,
                  D = b.sequence_number;
                if (
                  ((n.screenLength = S),
                  (n.isRestoredFromCache = R),
                  (n.layoutType = I),
                  (n.screenProgress = T),
                  (n.sequenceNumber = D),
                  (n.isTerminalError = E === !0),
                  (n.isTerminalSuccess = k === !0),
                  (n.isSuccess = L === !0),
                  v === !0)
                ) {
                  var x;
                  o(
                    "WAWebGalaxyDisableCTACollection",
                  ).GalaxyDisableCTACollection.addMessageId(l.id.toString());
                  var $ =
                    l.type ===
                    o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE
                      ? (x = l.unsafe().ctwaContext) == null
                        ? void 0
                        : x.sourceId
                      : void 0;
                  r("WAWebInteractiveMessageSync").sendDisableCTAMutation(
                    l.id,
                    n.flowId,
                    $,
                  );
                }
              }
              break;
            }
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsClose:
              p();
              break;
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsComplete:
              (p(),
                o("WAWebGalaxyFlowsCompleteAction").onFlowsCompleteAction({
                  chat: t,
                  messageData: n,
                  msg: l,
                  payload: y,
                }));
              break;
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsOpenURL: {
              typeof (y == null ? void 0 : y.url) == "string" &&
                o("WAWebExternalLink.react").openExternalLink(y.url);
              break;
            }
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsContextualHelp: {
              o("WAWebGalaxyFlowsNavBarUtils.react").openHelpCenterArticle(
                o("WAWebGalaxyFlowsNavBarUtils.react").GALAXY_FLOWS_ARTICLE_IDS
                  .HELP,
              );
              break;
            }
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsSpamReport:
              o("WAWebGalaxyFlowsNavBarUtils.react").reportGalaxyFlow(l);
              break;
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsMediaSelect: {
              o("WAWebModalManager").ModalManager.open(
                d.jsx(r("WAWebGalaxyFlowMediaPicker.react"), {
                  mediaPayload: y,
                }),
              );
              break;
            }
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsDownloadResponse: {
              var P;
              o("WAWebModalManager").ModalManager.open(
                d.jsx(r("WAWebGalaxyFlowsResponseDownloadFlow.react"), {
                  bizPlatform: o(
                    "WAWebGalaxyFlowWamLoggerUtils",
                  ).getFlowsMaybeBizPlatform(t),
                  businessOwnerJid: c != null ? c : "",
                  flowId: n.flowId,
                  flowName: n.flowName,
                  flowResponseMessage: n.flowResponseMessage,
                  flowWAMMessageId: n.flowWAMMessageId,
                  flowWAMSessionId: (P = n.flowWAMSessionId) != null ? P : "",
                  getFileDownloadRef: m,
                  phoneNumber: c,
                  timestamp: l.t,
                }),
              );
              break;
            }
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsDataExchangeDuringNavigation: {
              var N = l.id.id.toString();
              if (
                y != null &&
                typeof y == "object" &&
                y.screen != null &&
                y.data != null &&
                typeof y.data == "object"
              ) {
                var M = y.data;
                o("WAWebGalaxyFlowsSessionsCache").addDataToLatestSession(
                  N,
                  n.flowQPLMessageId,
                  String(y.screen),
                  M,
                );
              }
              _(null);
              break;
            }
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsMediaRetry:
              break;
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsMediaDelete: {
              y != null &&
              typeof y == "object" &&
              typeof y.collectionId == "string" &&
              typeof y.mediaId == "string"
                ? o(
                    "WAWebGalaxyFlowMediaEditorCollection",
                  ).GalaxyFlowMediaEditorCollection.deleteMsg(
                    y.collectionId,
                    y.mediaId,
                  )
                : o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[WhatsAppBridge]: Invalid payload for WAFlowsMediaDelete: ",
                        "",
                      ])),
                    JSON.stringify(y),
                  );
              break;
            }
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsShowToast:
              o("WAWebGalaxyFlowsShowToastAction").onFlowShowToastAction(y);
              break;
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAMLogger: {
              var w = o("WAWebGalaxyFlowsWamEventParser").parseRawWamEvent(y);
              (w != null &&
                new (o("WAWebWamCodegenWamEvent").RawWamEvent)(w).commit(),
                _(null));
              break;
            }
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAQPLLoggerAnnotate: {
              var A = y;
              if (A != null && typeof A == "object") {
                var F = A.boolAnnotations,
                  O = A.event,
                  B = A.instanceKey,
                  W = A.intAnnotations,
                  q = A.stringAnnotations,
                  U = {
                    string:
                      q != null && typeof q == "object"
                        ? o(
                            "WAWebGalaxyFlowQPLLoggerUtils",
                          ).qplBuildAnnotations(q).string
                        : null,
                    bool:
                      F != null && typeof F == "object"
                        ? o(
                            "WAWebGalaxyFlowQPLLoggerUtils",
                          ).qplBuildAnnotations(F).bool
                        : null,
                    int:
                      W != null && typeof W == "object"
                        ? o(
                            "WAWebGalaxyFlowQPLLoggerUtils",
                          ).qplBuildAnnotations(W).int
                        : null,
                  },
                  V = f(O);
                V != null &&
                  o("WAWebQplFlowWrapper").QPL.markerAnnotate(V, U, {
                    instanceKey: B,
                  });
              }
              break;
            }
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAQPLLoggerStart: {
              var H = y;
              if (H != null && typeof H == "object") {
                var G = H.event,
                  z = H.instanceKey,
                  j = f(G);
                j != null &&
                  o("WAWebQplFlowWrapper").QPL.markerStart(j, {
                    instanceKey: z,
                  });
              }
              break;
            }
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAQPLLoggerEnd: {
              var K = y;
              if (K != null && typeof K == "object") {
                var Q = K.action,
                  X = K.event,
                  Y = K.instanceKey,
                  J = f(X);
                J != null &&
                  o("WAWebQplFlowWrapper").QPL.markerEnd(J, Q, {
                    instanceKey: Y,
                  });
              }
              break;
            }
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAQPLLoggerPoint: {
              var Z = y;
              if (Z != null && typeof Z == "object") {
                var ee = Z.event,
                  te = Z.name,
                  ne = f(ee);
                ne != null && o("WAWebQplFlowWrapper").QPL.markerPoint(ne, te);
              }
              break;
            }
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsCloseContextMenu: {
              o("WAWebCmd").Cmd.closeContextMenu();
              break;
            }
            default:
              (o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[WhatsAppBridge]: Unsupported event: ",
                    "",
                  ])),
                h,
              ),
                _(null));
              break;
          }
        });
      };
    }
    l.getInvokeHandler = h;
  },
  98,
);
