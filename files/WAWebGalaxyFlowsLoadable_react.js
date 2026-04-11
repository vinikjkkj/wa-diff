__d(
  "WAWebGalaxyFlowsLoadable.react",
  [
    "JSResourceForInteraction",
    "WAFlowsExpiredCacheCleaner",
    "WAWebABProps",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebFlex.react",
    "WAWebGalaxyFlowQPLLoggerUtils",
    "WAWebGalaxyFlowsData",
    "WAWebGalaxyFlowsDrawerUtils",
    "WAWebGalaxyFlowsNavBarUtils.react",
    "WAWebLazyLoadedRetriable",
    "WAWebSpinner.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-loadable",
    "useWAWebAsync",
    "useWAWebRenderCallbacks",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useRef,
      m = o("WAWebABProps").getABPropConfigValue("flows_wa_web"),
      p = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")("WAWebGalaxyFlows.react")
            .__setRef("WAWebGalaxyFlowsLoadable.react")
            .load();
          return e;
        }),
        "WAWebGalaxyFlows",
      ),
      _ = r("react-loadable")({
        loader: p,
        loading: function () {
          return null;
        },
      }),
      f = { loadingContainer: { marginTop: "xafmxuu", $$css: !0 } };
    function g(e) {
      var t = e.chat,
        a = e.hasClearedActiveQPLMarker,
        i = a === void 0 ? !1 : a,
        l = e.messageData,
        u = e.msg,
        p = e.onCancel,
        g = e.ref,
        h = d(!1);
      (c(function () {
        o("WAFlowsExpiredCacheCleaner")
          .clearExpiredCachedStates()
          .catch(function (e) {});
      }, []),
        r("useWAWebRenderCallbacks")({
          onMount: function () {
            o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationStart();
          },
          onUnmount: function () {
            !i &&
              o(
                "WAWebGalaxyFlowQPLLoggerUtils",
              ).clearAllActiveWaeQPLMarkerInstances();
          },
        }));
      var y = r("useWAWebAsync")(
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            return h.current
              ? l
              : ((h.current = !0), r("WAWebGalaxyFlowsData")(l, u, t, e));
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        [l, u, t.contact.id],
      );
      return !m || _ == null || y.error != null || y.loading
        ? s.jsxs(r("WAWebDrawer.react"), {
            ref: g,
            children: [
              s.jsx(
                o("WAWebGalaxyFlowsNavBarUtils.react").WAWebGalaxyFlowsNavBar,
                { onCancel: p, msg: u, isResponseFlow: l.isResponseFlow },
              ),
              s.jsx(r("WAWebDrawerBody.react"), {
                children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
                  align: "center",
                  justify: "center",
                  grow: 1,
                  xstyle: f.loadingContainer,
                  children: [
                    y.loading &&
                      s.jsx(o("WAWebSpinner.react").Spinner, {
                        size: 24,
                        stroke: 4,
                      }),
                    y.error &&
                      o(
                        "WAWebGalaxyFlowsDrawerUtils",
                      ).getGalaxyFlowsFullScreenErrorString(),
                  ],
                }),
              }),
            ],
          })
        : s.jsx(_, { chat: t, messageData: y.value, onCancel: p, msg: u });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"),
      (l.WAWebGalaxyFlowsLoadable = g));
  },
  98,
);
