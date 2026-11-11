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
    "WAWebGetMaybeChatById",
    "WAWebInteractiveMessageSync",
    "WAWebModalManager",
    "WAWebMsgType",
    "WAWebQplFlowWrapper",
    "WAWebShowGenericErrorToastAction",
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
      m,
      p,
      _,
      f = _ || (_ = o("react")),
      g = r("qpl")._(200750681, "3410"),
      h = r("qpl")._(200743350, "3411"),
      y = r("qpl")._(200739086, "3412");
    function C(e) {
      return e === 200750681
        ? g
        : e === 200743350
          ? h
          : e === 200739086
            ? y
            : null;
    }
    function b(e) {
      return {
        public_key: o(
          "WAWebGalaxyFlowsDrawerUtils",
        ).getPublicKeyFromFetchedData(e),
        errorKey: "",
        errorMessage: "",
      };
    }
    function v(t) {
      var a = t.chatId,
        i = t.flowInitData,
        l = t.galaxyFlowData,
        _ = t.getFileDownloadRef,
        g = t.msg,
        h = t.onCancel,
        y = t.phoneNumber,
        v = t.responseViewer;
      return function (t) {
        var S = t.eventName,
          R = t.payload;
        return new (p || (p = n("Promise")))(
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                switch (S) {
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAFlowsGetFlowData: {
                    var n = o("WAWebGetMaybeChatById").getMaybeChatById(a);
                    if (n == null) {
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
                        chat: n,
                        flowInitData: i,
                        messageData: l,
                        responseViewer: v,
                      }),
                    );
                    break;
                  }
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAFlowsGetPublicKey:
                    t(b(l.flowFetchedMetadata));
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
                    var p = R;
                    o("WAWebGalaxyFlowsABPropsUtils")
                      .getActualABPropData(p)
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
                            o(
                              "WAFlowsWebNativeBridgeClientABPropsContext.react",
                            ).abPropsFallBackDataForWeb,
                          ));
                      });
                    break;
                  }
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAFlowsNavigate: {
                    var L = R;
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
                        ((l.screenLength = k),
                        (l.isRestoredFromCache = I),
                        (l.layoutType = $),
                        (l.screenProgress = P),
                        (l.sequenceNumber = N),
                        (l.isTerminalError = D === !0),
                        (l.isTerminalSuccess = x === !0),
                        (l.isSuccess = T === !0),
                        E === !0)
                      ) {
                        var M;
                        o(
                          "WAWebGalaxyDisableCTACollection",
                        ).GalaxyDisableCTACollection.addMessageId(
                          g.id.toString(),
                        );
                        var w =
                          g.type ===
                          o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE
                            ? (M = g.unsafe().ctwaContext) == null
                              ? void 0
                              : M.sourceId
                            : void 0;
                        r("WAWebInteractiveMessageSync").sendDisableCTAMutation(
                          g.id,
                          l.flowId,
                          w,
                        );
                      }
                    }
                    break;
                  }
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAFlowsClose:
                    h();
                    break;
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAFlowsComplete: {
                    var A = o("WAWebGetMaybeChatById").getMaybeChatById(a);
                    if (A == null) {
                      (o("WALogger").WARN(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[galaxy-flows] complete skipped for flow ",
                            ", chat left the collection",
                          ])),
                        l.flowId,
                      ),
                        r("WAWebShowGenericErrorToastAction")(),
                        t(null));
                      break;
                    }
                    (h(),
                      o("WAWebGalaxyFlowsCompleteAction").onFlowsCompleteAction(
                        { chat: A, messageData: l, msg: g, payload: R },
                      ));
                    break;
                  }
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAFlowsOpenURL: {
                    typeof (R == null ? void 0 : R.url) == "string" &&
                      o("WAWebExternalLink.react").openExternalLink(R.url);
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
                    o("WAWebGalaxyFlowsNavBarUtils.react").reportGalaxyFlow(g);
                    break;
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAFlowsMediaSelect: {
                    o("WAWebModalManager").ModalManager.open(
                      f.jsx(r("WAWebGalaxyFlowMediaPicker.react"), {
                        mediaPayload: R,
                      }),
                    );
                    break;
                  }
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAFlowsDownloadResponse: {
                    var F,
                      O = o("WAWebGetMaybeChatById").getMaybeChatById(a);
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
                      f.jsx(r("WAWebGalaxyFlowsResponseDownloadFlow.react"), {
                        bizPlatform: o(
                          "WAWebGalaxyFlowWamLoggerUtils",
                        ).getFlowsMaybeBizPlatform(O),
                        businessOwnerJid: y != null ? y : "",
                        flowId: l.flowId,
                        flowName: l.flowName,
                        flowResponseMessage: l.flowResponseMessage,
                        flowWAMMessageId: l.flowWAMMessageId,
                        flowWAMSessionId:
                          (F = l.flowWAMSessionId) != null ? F : "",
                        getFileDownloadRef: _,
                        phoneNumber: y,
                        timestamp: g.t,
                      }),
                    );
                    break;
                  }
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAFlowsDataExchangeDuringNavigation: {
                    var B = g.id.id.toString();
                    if (
                      R != null &&
                      typeof R == "object" &&
                      R.screen != null &&
                      R.data != null &&
                      typeof R.data == "object"
                    ) {
                      var W = R.data;
                      o("WAWebGalaxyFlowsSessionsCache").addDataToLatestSession(
                        {
                          data: W,
                          messageId: B,
                          screenName: String(R.screen),
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
                    R != null &&
                    typeof R == "object" &&
                    typeof R.collectionId == "string" &&
                    typeof R.mediaId == "string"
                      ? o(
                          "WAWebGalaxyFlowMediaEditorCollection",
                        ).GalaxyFlowMediaEditorCollection.deleteMsg(
                          R.collectionId,
                          R.mediaId,
                        )
                      : o("WALogger").WARN(
                          d ||
                            (d = babelHelpers.taggedTemplateLiteralLoose([
                              "[WhatsAppBridge]: Invalid payload for WAFlowsMediaDelete: ",
                              "",
                            ])),
                          JSON.stringify(R),
                        );
                    break;
                  }
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAFlowsShowToast:
                    o("WAWebGalaxyFlowsShowToastAction").onFlowShowToastAction(
                      R,
                    );
                    break;
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAMLogger: {
                    var q = o(
                      "WAWebGalaxyFlowsWamEventParser",
                    ).parseRawWamEvent(R);
                    (q != null &&
                      new (o("WAWebWamCodegenWamEvent").RawWamEvent)(
                        q,
                      ).commit(),
                      t(null));
                    break;
                  }
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAQPLLoggerAnnotate: {
                    var U = R;
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
                        Q = C(H);
                      Q != null &&
                        o("WAWebQplFlowWrapper").QPL.markerAnnotate(Q, K, {
                          instanceKey: G,
                        });
                    }
                    break;
                  }
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAQPLLoggerStart: {
                    var X = R;
                    if (X != null && typeof X == "object") {
                      var Y = X.event,
                        J = X.instanceKey,
                        Z = C(Y);
                      Z != null &&
                        o("WAWebQplFlowWrapper").QPL.markerStart(Z, {
                          instanceKey: J,
                        });
                    }
                    break;
                  }
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAQPLLoggerEnd: {
                    var ee = R;
                    if (ee != null && typeof ee == "object") {
                      var te = ee.action,
                        ne = ee.event,
                        re = ee.instanceKey,
                        oe = C(ne);
                      oe != null &&
                        o("WAWebQplFlowWrapper").QPL.markerEnd(oe, te, {
                          instanceKey: re,
                        });
                    }
                    break;
                  }
                  case o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                    .WAQPLLoggerPoint: {
                    var ae = R;
                    if (ae != null && typeof ae == "object") {
                      var ie = ae.event,
                        le = ae.name,
                        se = C(ie);
                      se != null &&
                        o("WAWebQplFlowWrapper").QPL.markerPoint(se, le);
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
                      S,
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
    l.getInvokeHandler = v;
  },
  98,
);
