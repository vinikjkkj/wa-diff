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
    "WAWebGetMaybeChatById",
    "WAWebInteractiveMessageSync",
    "WAWebModalManager",
    "WAWebMsgType",
    "WAWebQplFlowWrapper",
    "WAWebShowGenericErrorToastAction",
    "WAWebWamCodegenWamEvent",
    "qpl",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = p || (p = o("react")),
      f = r("qpl")._(200750681, "3410"),
      g = r("qpl")._(200743350, "3411"),
      h = r("qpl")._(200739086, "3412");
    function y(e) {
      return e === 200750681
        ? f
        : e === 200743350
          ? g
          : e === 200739086
            ? h
            : null;
    }
    function C(e) {
      return {
        public_key: o(
          "WAWebGalaxyFlowsDrawerUtils",
        ).getPublicKeyFromFetchedData(e),
        errorKey: "",
        errorMessage: "",
      };
    }
    function b(t) {
      var n = t.chatId,
        a = t.flowInitData,
        i = t.galaxyFlowData,
        l = t.getFileDownloadRef,
        p = t.msg,
        f = t.onCancel,
        g = t.phoneNumber,
        h = t.responseViewer;
      return function (t) {
        var b = t.eventName,
          v = t.payload;
        return new Promise(async function (t) {
          switch (b) {
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsGetFlowData: {
              var S = o("WAWebGetMaybeChatById").getMaybeChatById(n);
              if (S == null) {
                (o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[galaxy-flows] flow data skipped, chat left the collection",
                    ])),
                ),
                  t(null));
                break;
              }
              t(
                o("WAWebGalaxyFlowsDrawerUtils").getFlowInitDataPayload({
                  chat: S,
                  flowInitData: a,
                  messageData: i,
                  responseViewer: h,
                }),
              );
              break;
            }
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsGetPublicKey:
              t(C(i.flowFetchedMetadata));
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
              var R = v;
              o("WAWebGalaxyFlowsABPropsUtils")
                .getActualABPropData(R)
                .then(function (e) {
                  t(e);
                })
                .catch(function (e) {
                  (o("WALogger").ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[Galaxy Flows] Failed to get ABProp data: ",
                        "",
                      ])),
                    e,
                  ),
                    t(
                      o("WAFlowsWebNativeBridgeClientABPropsContext.react")
                        .abPropsFallBackDataForWeb,
                    ));
                });
              break;
            }
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsNavigate: {
              var L = v;
              if (L != null && typeof L == "object") {
                var E = L.disable_cta,
                  k = L.extension_screen_length,
                  I = L.is_restored,
                  T = L.is_success,
                  D = L.is_terminal_error,
                  x = L.is_terminal_success,
                  $ = L.layout_type,
                  P = L.screen_progress,
                  N = L.sequence_number;
                if (
                  ((i.screenLength = k),
                  (i.isRestoredFromCache = I),
                  (i.layoutType = $),
                  (i.screenProgress = P),
                  (i.sequenceNumber = N),
                  (i.isTerminalError = D === !0),
                  (i.isTerminalSuccess = x === !0),
                  (i.isSuccess = T === !0),
                  E === !0)
                ) {
                  var M;
                  o(
                    "WAWebGalaxyDisableCTACollection",
                  ).GalaxyDisableCTACollection.addMessageId(p.id.toString());
                  var w =
                    p.type ===
                    o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE
                      ? (M = p.unsafe().ctwaContext) == null
                        ? void 0
                        : M.sourceId
                      : void 0;
                  r("WAWebInteractiveMessageSync").sendDisableCTAMutation(
                    p.id,
                    i.flowId,
                    w,
                  );
                }
              }
              break;
            }
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsClose:
              f();
              break;
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsComplete: {
              var A = o("WAWebGetMaybeChatById").getMaybeChatById(n);
              if (A == null) {
                (o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[galaxy-flows] complete skipped for flow ",
                      ", chat left the collection",
                    ])),
                  i.flowId,
                ),
                  r("WAWebShowGenericErrorToastAction")(),
                  t(null));
                break;
              }
              (f(),
                o("WAWebGalaxyFlowsCompleteAction").onFlowsCompleteAction({
                  chat: A,
                  messageData: i,
                  msg: p,
                  payload: v,
                }));
              break;
            }
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsOpenURL: {
              typeof (v == null ? void 0 : v.url) == "string" &&
                o("WAWebExternalLink.react").openExternalLink(v.url);
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
              o("WAWebGalaxyFlowsNavBarUtils.react").reportGalaxyFlow(p);
              break;
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsMediaSelect: {
              o("WAWebModalManager").ModalManager.open(
                _.jsx(r("WAWebGalaxyFlowMediaPicker.react"), {
                  mediaPayload: v,
                }),
              );
              break;
            }
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsDownloadResponse: {
              var F,
                O = o("WAWebGetMaybeChatById").getMaybeChatById(n);
              if (O == null) {
                (o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[galaxy-flows] download response skipped, chat left the collection",
                    ])),
                ),
                  t(null));
                break;
              }
              o("WAWebModalManager").ModalManager.open(
                _.jsx(r("WAWebGalaxyFlowsResponseDownloadFlow.react"), {
                  bizPlatform: o(
                    "WAWebGalaxyFlowWamLoggerUtils",
                  ).getFlowsMaybeBizPlatform(O),
                  businessOwnerJid: g != null ? g : "",
                  flowId: i.flowId,
                  flowName: i.flowName,
                  flowResponseMessage: i.flowResponseMessage,
                  flowWAMMessageId: i.flowWAMMessageId,
                  flowWAMSessionId: (F = i.flowWAMSessionId) != null ? F : "",
                  getFileDownloadRef: l,
                  phoneNumber: g,
                  timestamp: p.t,
                }),
              );
              break;
            }
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsDataExchangeDuringNavigation: {
              var B = p.id.id.toString();
              if (
                v != null &&
                typeof v == "object" &&
                v.screen != null &&
                v.data != null &&
                typeof v.data == "object"
              ) {
                var W = v.data;
                o("WAWebGalaxyFlowsSessionsCache").addDataToLatestSession({
                  data: W,
                  messageId: B,
                  screenName: String(v.screen),
                  sessionId: i.flowQPLMessageId,
                });
              }
              t(null);
              break;
            }
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsMediaRetry:
              break;
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsMediaDelete: {
              v != null &&
              typeof v == "object" &&
              typeof v.collectionId == "string" &&
              typeof v.mediaId == "string"
                ? o(
                    "WAWebGalaxyFlowMediaEditorCollection",
                  ).GalaxyFlowMediaEditorCollection.deleteMsg(
                    v.collectionId,
                    v.mediaId,
                  )
                : o("WALogger").WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[WhatsAppBridge]: Invalid payload for WAFlowsMediaDelete: ",
                        "",
                      ])),
                    JSON.stringify(v),
                  );
              break;
            }
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsShowToast:
              o("WAWebGalaxyFlowsShowToastAction").onFlowShowToastAction(v);
              break;
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAMLogger: {
              var q = o("WAWebGalaxyFlowsWamEventParser").parseRawWamEvent(v);
              (q != null &&
                new (o("WAWebWamCodegenWamEvent").RawWamEvent)(q).commit(),
                t(null));
              break;
            }
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAQPLLoggerAnnotate: {
              var U = v;
              if (U != null && typeof U == "object") {
                var V = U.boolAnnotations,
                  H = U.event,
                  G = U.instanceKey,
                  z = U.intAnnotations,
                  j = U.stringAnnotations,
                  K = {
                    string:
                      j != null && typeof j == "object"
                        ? o(
                            "WAWebGalaxyFlowQPLLoggerUtils",
                          ).qplBuildAnnotations(j).string
                        : null,
                    bool:
                      V != null && typeof V == "object"
                        ? o(
                            "WAWebGalaxyFlowQPLLoggerUtils",
                          ).qplBuildAnnotations(V).bool
                        : null,
                    int:
                      z != null && typeof z == "object"
                        ? o(
                            "WAWebGalaxyFlowQPLLoggerUtils",
                          ).qplBuildAnnotations(z).int
                        : null,
                  },
                  Q = y(H);
                Q != null &&
                  o("WAWebQplFlowWrapper").QPL.markerAnnotate(Q, K, {
                    instanceKey: G,
                  });
              }
              break;
            }
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAQPLLoggerStart: {
              var X = v;
              if (X != null && typeof X == "object") {
                var Y = X.event,
                  J = X.instanceKey,
                  Z = y(Y);
                Z != null &&
                  o("WAWebQplFlowWrapper").QPL.markerStart(Z, {
                    instanceKey: J,
                  });
              }
              break;
            }
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAQPLLoggerEnd: {
              var ee = v;
              if (ee != null && typeof ee == "object") {
                var te = ee.action,
                  ne = ee.event,
                  re = ee.instanceKey,
                  oe = y(ne);
                oe != null &&
                  o("WAWebQplFlowWrapper").QPL.markerEnd(oe, te, {
                    instanceKey: re,
                  });
              }
              break;
            }
            case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAQPLLoggerPoint: {
              var ae = v;
              if (ae != null && typeof ae == "object") {
                var ie = ae.event,
                  le = ae.name,
                  se = y(ie);
                se != null && o("WAWebQplFlowWrapper").QPL.markerPoint(se, le);
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
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[WhatsAppBridge]: Unsupported event: ",
                    "",
                  ])),
                b,
              ),
                t(null));
              break;
          }
        });
      };
    }
    l.getInvokeHandler = b;
  },
  98,
);
