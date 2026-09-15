__d(
  "WAWebFlowsInvokeHandler",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "qpl",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = r("qpl")._(200750681, "3410"),
      _ = r("qpl")._(200743350, "3411"),
      f = r("qpl")._(200739086, "3412");
    function g(e) {
      return e === 200750681
        ? p
        : e === 200743350
          ? _
          : e === 200739086
            ? f
            : null;
    }
    function h(e) {
      return {
        public_key: o(
          "WAWebGalaxyFlowsDrawerUtils",
        ).getPublicKeyFromFetchedData(e),
        errorKey: "",
        errorMessage: "",
      };
    }
    function y(t) {
      var a = t.chat,
        i = t.flowInitData,
        l = t.galaxyFlowData,
        d = t.getFileDownloadRef,
        p = t.msg,
        _ = t.onCancel,
        f = t.phoneNumber,
        y = t.responseViewer;
      return function (t) {
        var C = t.eventName,
          b = t.payload;
        return new (c || (c = n("Promise")))(
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                switch (C) {
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAFlowsGetFlowData:
                    t(
                      o("WAWebGalaxyFlowsDrawerUtils").getFlowInitDataPayload({
                        chat: a,
                        flowInitData: i,
                        messageData: l,
                        responseViewer: y,
                      }),
                    );
                    break;
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAFlowsGetPublicKey:
                    t(h(l.flowFetchedMetadata));
                    break;
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAFlowsLearnMore:
                    o(
                      "WAWebGalaxyFlowsNavBarUtils.react",
                    ).openHelpCenterArticle(
                      o("WAWebGalaxyFlowsNavBarUtils.react")
                        .GALAXY_FLOWS_ARTICLE_IDS.LEARN_MORE,
                    );
                    break;
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAFlowsGetClientAbProps: {
                    var n = b;
                    o("WAWebGalaxyFlowsABPropsUtils")
                      .getActualABPropData(n)
                      .then(function (e) {
                        t(e);
                      })
                      .catch(function (n) {
                        (o("WALogger").ERROR(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "[Galaxy Flows] Failed to get ABProp data: ",
                              "",
                            ])),
                          n,
                        ),
                          t(
                            o(
                              "WAFlowsWebNativeBridgeClientABPropsContext.react",
                            ).abPropsFallBackDataForWeb,
                          ));
                      });
                    break;
                  }
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAFlowsNavigate: {
                    var c = b;
                    if (c != null && typeof c == "object") {
                      var v = c.disable_cta,
                        S = c.extension_screen_length,
                        R = c.is_restored,
                        L = c.is_success,
                        E = c.is_terminal_error,
                        k = c.is_terminal_success,
                        I = c.layout_type,
                        T = c.screen_progress,
                        D = c.sequence_number;
                      if (
                        ((l.screenLength = S),
                        (l.isRestoredFromCache = R),
                        (l.layoutType = I),
                        (l.screenProgress = T),
                        (l.sequenceNumber = D),
                        (l.isTerminalError = E === !0),
                        (l.isTerminalSuccess = k === !0),
                        (l.isSuccess = L === !0),
                        v === !0)
                      ) {
                        var x;
                        o(
                          "WAWebGalaxyDisableCTACollection",
                        ).GalaxyDisableCTACollection.addMessageId(
                          p.id.toString(),
                        );
                        var $ =
                          p.type ===
                          o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE
                            ? (x = p.unsafe().ctwaContext) == null
                              ? void 0
                              : x.sourceId
                            : void 0;
                        r("WAWebInteractiveMessageSync").sendDisableCTAMutation(
                          p.id,
                          l.flowId,
                          $,
                        );
                      }
                    }
                    break;
                  }
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAFlowsClose:
                    _();
                    break;
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAFlowsComplete:
                    (_(),
                      o("WAWebGalaxyFlowsCompleteAction").onFlowsCompleteAction(
                        { chat: a, messageData: l, msg: p, payload: b },
                      ));
                    break;
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAFlowsOpenURL: {
                    typeof (b == null ? void 0 : b.url) == "string" &&
                      o("WAWebExternalLink.react").openExternalLink(b.url);
                    break;
                  }
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAFlowsContextualHelp: {
                    o(
                      "WAWebGalaxyFlowsNavBarUtils.react",
                    ).openHelpCenterArticle(
                      o("WAWebGalaxyFlowsNavBarUtils.react")
                        .GALAXY_FLOWS_ARTICLE_IDS.HELP,
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
                      m.jsx(r("WAWebGalaxyFlowMediaPicker.react"), {
                        mediaPayload: b,
                      }),
                    );
                    break;
                  }
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAFlowsDownloadResponse: {
                    var P;
                    o("WAWebModalManager").ModalManager.open(
                      m.jsx(r("WAWebGalaxyFlowsResponseDownloadFlow.react"), {
                        bizPlatform: o(
                          "WAWebGalaxyFlowWamLoggerUtils",
                        ).getFlowsMaybeBizPlatform(a),
                        businessOwnerJid: f != null ? f : "",
                        flowId: l.flowId,
                        flowName: l.flowName,
                        flowResponseMessage: l.flowResponseMessage,
                        flowWAMMessageId: l.flowWAMMessageId,
                        flowWAMSessionId:
                          (P = l.flowWAMSessionId) != null ? P : "",
                        getFileDownloadRef: d,
                        phoneNumber: f,
                        timestamp: p.t,
                      }),
                    );
                    break;
                  }
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAFlowsDataExchangeDuringNavigation: {
                    var N = p.id.id.toString();
                    if (
                      b != null &&
                      typeof b == "object" &&
                      b.screen != null &&
                      b.data != null &&
                      typeof b.data == "object"
                    ) {
                      var M = b.data;
                      o("WAWebGalaxyFlowsSessionsCache").addDataToLatestSession(
                        {
                          data: M,
                          messageId: N,
                          screenName: String(b.screen),
                          sessionId: l.flowQPLMessageId,
                        },
                      );
                    }
                    t(null);
                    break;
                  }
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAFlowsMediaRetry:
                    break;
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAFlowsMediaDelete: {
                    b != null &&
                    typeof b == "object" &&
                    typeof b.collectionId == "string" &&
                    typeof b.mediaId == "string"
                      ? o(
                          "WAWebGalaxyFlowMediaEditorCollection",
                        ).GalaxyFlowMediaEditorCollection.deleteMsg(
                          b.collectionId,
                          b.mediaId,
                        )
                      : o("WALogger").WARN(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "[WhatsAppBridge]: Invalid payload for WAFlowsMediaDelete: ",
                              "",
                            ])),
                          JSON.stringify(b),
                        );
                    break;
                  }
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAFlowsShowToast:
                    o("WAWebGalaxyFlowsShowToastAction").onFlowShowToastAction(
                      b,
                    );
                    break;
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAMLogger: {
                    var w = o(
                      "WAWebGalaxyFlowsWamEventParser",
                    ).parseRawWamEvent(b);
                    (w != null &&
                      new (o("WAWebWamCodegenWamEvent").RawWamEvent)(
                        w,
                      ).commit(),
                      t(null));
                    break;
                  }
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAQPLLoggerAnnotate: {
                    var A = b;
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
                        V = g(O);
                      V != null &&
                        o("WAWebQplFlowWrapper").QPL.markerAnnotate(V, U, {
                          instanceKey: B,
                        });
                    }
                    break;
                  }
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAQPLLoggerStart: {
                    var H = b;
                    if (H != null && typeof H == "object") {
                      var G = H.event,
                        z = H.instanceKey,
                        j = g(G);
                      j != null &&
                        o("WAWebQplFlowWrapper").QPL.markerStart(j, {
                          instanceKey: z,
                        });
                    }
                    break;
                  }
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAQPLLoggerEnd: {
                    var K = b;
                    if (K != null && typeof K == "object") {
                      var Q = K.action,
                        X = K.event,
                        Y = K.instanceKey,
                        J = g(X);
                      J != null &&
                        o("WAWebQplFlowWrapper").QPL.markerEnd(J, Q, {
                          instanceKey: Y,
                        });
                    }
                    break;
                  }
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAQPLLoggerPoint: {
                    var Z = b;
                    if (Z != null && typeof Z == "object") {
                      var ee = Z.event,
                        te = Z.name,
                        ne = g(ee);
                      ne != null &&
                        o("WAWebQplFlowWrapper").QPL.markerPoint(ne, te);
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
                      C,
                    ),
                      t(null));
                    break;
                }
              },
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        );
      };
    }
    l.getInvokeHandler = y;
  },
  98,
);
