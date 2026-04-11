__d(
  "WAWebGalaxyFlowsDrawer.react",
  [
    "SecurePostMessage",
    "WAFlowsInitEnvironmentTypes",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WAWebFlowsInvokeHandler",
    "WAWebGalaxyFlowClickOutsideOfExcludedNote",
    "WAWebGalaxyFlowQPLLoggerUtils",
    "WAWebGalaxyFlowsDrawerUtils",
    "WAWebGalaxyFlowsNavBarUtils.react",
    "WAWebGalaxySetIframeTheme",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebSpinner.react",
    "WAWebThemeContext",
    "WAWebWidFactory",
    "WAWebiFrameWrapper.react",
    "react",
    "react-compiler-runtime",
    "useWAWebGalaxyFlowAttachMediaListener",
    "useWAWebGalaxyFlowsData",
    "useWAWebGalaxyFlowsResponseViewer",
    "useWAWebRenderCallbacks",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useRef,
      p = u.useState,
      _ = {
        height100vh: { height: "x1dr59a3", $$css: !0 },
        iframeContainer: {
          height: "x5yr21d",
          maxHeight: "xmz0i5r",
          maxWidth: "x193iq5w",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          position: "x1n2onr6",
          width: "xh8yej3",
          $$css: !0,
        },
        innerStyle: { height: "x5yr21d", width: "xh8yej3", $$css: !0 },
        loadingSpinner: { marginTop: "xkb8jsa", $$css: !0 },
      };
    function f(e) {
      var t = e.chat,
        n = e.messageData,
        a = e.msg,
        i = e.onCancel,
        l = e.ref,
        u = m(),
        f = r("useWAWebGalaxyFlowsResponseViewer")(a.type, a.id.fromMe),
        h = r("useWAWebGalaxyFlowsData")(t),
        y = h.businessName,
        C = p(!0),
        b = C[0],
        v = C[1],
        S = p(!1),
        R = S[0],
        L = S[1],
        E = m(null);
      (r("useWAWebRenderCallbacks")({
        onMount: function () {
          o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationPoint(
            o("WAWebGalaxyFlowQPLLoggerUtils").WaeScreenNavigationQPLPoints
              .HTML_START,
          );
        },
      }),
        o(
          "useWAWebGalaxyFlowAttachMediaListener",
        ).useWAWebGalaxyFlowAttachMediaListener());
      var k = o("WAWebThemeContext").useTheme(),
        I = k.theme,
        T = c(function () {
          var e = document.getElementById(
            o("WAWebGalaxyFlowsDrawerUtils").FLOWS_IFRAME_ID,
          );
          e instanceof HTMLIFrameElement &&
            e.contentWindow &&
            r("SecurePostMessage").sendMessageToSpecificOrigin(
              e.contentWindow,
              JSON.stringify({ eventName: "onOutsideClick" }),
              o("WAWebGalaxyFlowsDrawerUtils").FLOWS_URL,
            );
        }, []);
      (o(
        "WAWebGalaxyFlowClickOutsideOfExcludedNote",
      ).useClickOutsideOfExcludedNode([E], T),
        d(
          function () {
            o("WAWebGalaxySetIframeTheme").setGalaxyFlowIframeTheme(I);
          },
          [I],
        ));
      var D = null;
      if (f === o("WAFlowsInitEnvironmentTypes").ResponseViewer.SMB) {
        var x = o("WAWebMsgGetters").getSender(a);
        if (x) {
          var $ = o("WAWebLidMigrationUtils").toPn(x);
          $ && (D = o("WAWebWidFactory").asUserWidOrThrow($).user);
        }
      }
      var P = o("WAWebFlowsInvokeHandler").getInvokeHandler(
          t,
          n,
          { business_name: y },
          f,
          a,
          D,
          function () {
            return u == null ? void 0 : u.current;
          },
          i,
        ),
        N = c(
          function (e) {
            var t = function (t, n) {
              var e = document.getElementById(
                o("WAWebGalaxyFlowsDrawerUtils").FLOWS_IFRAME_ID,
              );
              e instanceof HTMLIFrameElement &&
                e.contentWindow &&
                r("SecurePostMessage").sendMessageToSpecificOrigin(
                  e.contentWindow,
                  JSON.stringify({ responseData: t, callbackID: n }),
                  o("WAWebGalaxyFlowsDrawerUtils").FLOWS_URL,
                );
            };
            if (e.data != null && typeof e.data == "string") {
              var n = JSON.parse(e.data),
                a = n.callbackID,
                i = n.eventName,
                l = n.payload;
              P({ eventName: i, payload: l })
                .then(function (e) {
                  t(e, a);
                })
                .catch(function (e) {});
              return;
            }
          },
          [P],
        );
      return s.jsxs(r("WAWebDrawer.react"), {
        ref: l,
        tsNavigationData: { surface: "unknown", viewName: "galaxy-flows" },
        children: [
          b &&
            s.jsx(
              o("WAWebGalaxyFlowsNavBarUtils.react").WAWebGalaxyFlowsNavBar,
              { onCancel: i, msg: a, isResponseFlow: n.isResponseFlow },
            ),
          s.jsx(r("WAWebDrawerBody.react"), {
            children: s.jsxs(r("WAWebDrawerSection.react"), {
              theme: "full-height",
              children: [
                s.jsx(r("WAWebiFrameWrapper.react"), {
                  iframeRef: E,
                  iframeLoadedEvent: o("WAWebGalaxyFlowsDrawerUtils")
                    .FLOWS_IFRAME_LOADED_EVENT,
                  fallback: function () {
                    return s.jsx(o("WAWebFlex.react").FlexColumn, {
                      align: "center",
                      justify: "center",
                      grow: 1,
                      xstyle: _.iframeContainer,
                      children: R
                        ? o(
                            "WAWebGalaxyFlowsDrawerUtils",
                          ).getGalaxyFlowsFullScreenErrorString()
                        : s.jsx(o("WAWebSpinner.react").Spinner, {
                            size: 24,
                            stroke: 4,
                            color: "default",
                            xstyle: _.loadingSpinner,
                          }),
                    });
                  },
                  id: o("WAWebGalaxyFlowsDrawerUtils").FLOWS_IFRAME_ID,
                  uri: o("WAWebGalaxyFlowsDrawerUtils").FLOWS_URL,
                  supportedOrigins: o("WAWebGalaxyFlowsDrawerUtils")
                    .SUPPORTED_ORIGINS,
                  messageEventHandler: N,
                  innerXStyle: [_.innerStyle, !b && _.height100vh],
                  containerXStyle: [_.iframeContainer, !b && _.height100vh],
                  onClose: i,
                  onLoad: function () {
                    (v(!1),
                      o("WAWebGalaxySetIframeTheme").setGalaxyFlowIframeTheme(
                        I,
                      ),
                      o(
                        "WAWebGalaxyFlowQPLLoggerUtils",
                      ).qplWaeScreenNavigationPoint(
                        o("WAWebGalaxyFlowQPLLoggerUtils")
                          .WaeScreenNavigationQPLPoints.HTML_END,
                      ));
                  },
                  onError: function () {
                    (o(
                      "WAWebGalaxyFlowQPLLoggerUtils",
                    ).qplWaeScreenNavigationAnnotate({
                      string: {
                        error_type: o("WAWebGalaxyFlowQPLLoggerUtils")
                          .WaeScreenNavigationQPLErrorTypes
                          .EXTENSION_WEBVIEW_LOADING_ERROR,
                      },
                    }),
                      o(
                        "WAWebGalaxyFlowQPLLoggerUtils",
                      ).qplWaeScreenNavigationEnd(3),
                      v(!0),
                      L(!0));
                  },
                  sandbox: "allow-scripts allow-same-origin",
                }),
                s.jsx(g, { fileRef: u }),
              ],
            }),
          }),
        ],
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.fileRef,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = { className: "x1s85apg" }), (t[0] = r))
        : (r = t[0]);
      var a;
      return (
        t[1] !== n
          ? ((a = s.jsx(
              "a",
              babelHelpers.extends({ href: "#", ref: n }, r, {
                children: "\xA0",
              }),
            )),
            (t[1] = n),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    l.default = f;
  },
  98,
);
