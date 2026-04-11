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
    function y(t, a, i, l, d, p, _, f) {
      return function (y) {
        var C = y.eventName,
          b = y.payload;
        return new (c || (c = n("Promise")))(
          (function () {
            var c = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (n) {
                switch (C) {
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAFlowsGetFlowData:
                    n(
                      o("WAWebGalaxyFlowsDrawerUtils").getFlowInitDataPayload(
                        t,
                        a,
                        i,
                        l,
                      ),
                    );
                    break;
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAFlowsGetPublicKey:
                    n(h(a.flowFetchedMetadata));
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
                    var c = b;
                    o("WAWebGalaxyFlowsABPropsUtils")
                      .getActualABPropData(c)
                      .then(function (e) {
                        n(e);
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
                          n(
                            o(
                              "WAFlowsWebNativeBridgeClientABPropsContext.react",
                            ).abPropsFallBackDataForWeb,
                          ));
                      });
                    break;
                  }
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAFlowsNavigate: {
                    var y = b;
                    if (y != null && typeof y == "object") {
                      var v = y.disable_cta,
                        S = y.extension_screen_length,
                        R = y.is_restored,
                        L = y.is_success,
                        E = y.is_terminal_error,
                        k = y.is_terminal_success,
                        I = y.layout_type,
                        T = y.screen_progress,
                        D = y.sequence_number;
                      if (
                        ((a.screenLength = S),
                        (a.isRestoredFromCache = R),
                        (a.layoutType = I),
                        (a.screenProgress = T),
                        (a.sequenceNumber = D),
                        (a.isTerminalError = E === !0),
                        (a.isTerminalSuccess = k === !0),
                        (a.isSuccess = L === !0),
                        v === !0)
                      ) {
                        var x;
                        o(
                          "WAWebGalaxyDisableCTACollection",
                        ).GalaxyDisableCTACollection.addMessageId(
                          d.id.toString(),
                        );
                        var $ =
                          d.type ===
                          o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE
                            ? (x = d.unsafe().ctwaContext) == null
                              ? void 0
                              : x.sourceId
                            : void 0;
                        r("WAWebInteractiveMessageSync").sendDisableCTAMutation(
                          d.id,
                          a.flowId,
                          $,
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
                    .WAFlowsComplete:
                    (f(),
                      o("WAWebGalaxyFlowsCompleteAction").onFlowsCompleteAction(
                        t,
                        d,
                        b,
                        a,
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
                    o("WAWebGalaxyFlowsNavBarUtils.react").reportGalaxyFlow(d);
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
                        ).getFlowsMaybeBizPlatform(t),
                        businessOwnerJid: p != null ? p : "",
                        flowId: a.flowId,
                        flowName: a.flowName,
                        flowResponseMessage: a.flowResponseMessage,
                        flowWAMMessageId: a.flowWAMMessageId,
                        flowWAMSessionId:
                          (P = a.flowWAMSessionId) != null ? P : "",
                        getFileDownloadRef: _,
                        phoneNumber: p,
                        timestamp: d.t,
                      }),
                    );
                    break;
                  }
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAFlowsDataExchangeDuringNavigation: {
                    var N = d.id.id.toString();
                    if (
                      b != null &&
                      typeof b == "object" &&
                      b.screen != null &&
                      b.data != null &&
                      typeof b.data == "object"
                    ) {
                      var M = b.data;
                      o("WAWebGalaxyFlowsSessionsCache").addDataToLatestSession(
                        N,
                        a.flowQPLMessageId,
                        String(b.screen),
                        M,
                      );
                    }
                    n(null);
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
                      n(null));
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
                      n(null));
                    break;
                }
              },
            );
            return function (e) {
              return c.apply(this, arguments);
            };
          })(),
        );
      };
    }
    l.getInvokeHandler = y;
  },
  98,
);
