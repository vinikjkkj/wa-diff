__d(
  "WAWebPrepareBizBroadcastProAudienceImportFlow",
  [
    "CometRelay",
    "WALogger",
    "WAWebBizBroadcastProImportAudienceScreenLoadable",
    "WAWebBizBroadcastProRelayEnvironment",
    "WAWebBizBroadcastProSmartCSVImportAudiencesScreenLoadable",
    "WAWebBizBroadcastProSubscriberPoolStateQuery",
    "WAWebBusinessBroadcastHomeFlowLoadable",
    "WAWebDrawerManager",
    "WAWebErrorBoundary.react",
    "WAWebKeyboardTabUtils",
    "WAWebLoadingDrawer.react",
    "getErrorSafe",
    "react",
    "useWAWebAsync",
    "useWAWebBizBroadcastProSubscriberPoolSetup",
    "useWAWebOnUnmount",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.Suspense,
      p = d.useCallback,
      _ = d.useEffect,
      f = d.useRef,
      g = d.useState,
      h = "biz-broadcast-pro-audience-import-loading-drawer";
    function y(t) {
      var n = t.entryPoint,
        a = t.importLoggingContext,
        i = t.request,
        l = g(0),
        u = l[0],
        d = l[1],
        y = g(null),
        b = y[0],
        v = y[1],
        S = f(null),
        R = r("useWAWebAsync")(
          async function (e) {
            var t;
            ((t = S.current) == null || t.dispose(), (S.current = null));
            var n = await r("WAWebBizBroadcastProRelayEnvironment")(),
              a = o(
                "WAWebBizBroadcastProSubscriberPoolStateQuery",
              ).preloadSubscriberPoolStateQuery(n);
            return (
              e.aborted ? a.dispose() : (S.current = a),
              { environment: n, generation: u, queryRef: a }
            );
          },
          [u],
        );
      (r("useWAWebOnUnmount")(function () {
        var e;
        ((e = S.current) == null || e.dispose(), (S.current = null));
      }),
        _(
          function () {
            R.error != null &&
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to prepare BB Pro audience import data",
                    ])),
                )
                .catching(r("getErrorSafe")(R.error))
                .sendLogs("bb-pro-audience-import-prepare-failed");
          },
          [R.error],
        ));
      var L = p(function () {
          (v(null),
            d(function (e) {
              return e + 1;
            }));
        }, []),
        E = p(function (e) {
          (o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to read BB Pro audience import data",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("bb-pro-audience-import-query-failed"),
            v(e));
        }, []);
      if (R.error != null || b != null)
        return c.jsx(r("WAWebLoadingDrawer.react"), {
          error: !0,
          retry: L,
          testid: h,
        });
      if (R.value == null || R.value.generation !== u)
        return c.jsx(r("WAWebLoadingDrawer.react"), { error: !1, testid: h });
      var k = R.value,
        I = k.environment,
        T = k.queryRef;
      return c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
        name: "biz-broadcast-pro-audience-import-query",
        onError: E,
        sendLogs: !1,
        children: c.jsx(o("CometRelay").RelayEnvironmentProvider, {
          environment: I,
          children: c.jsx(m, {
            fallback: c.jsx(r("WAWebLoadingDrawer.react"), {
              error: !1,
              testid: h,
            }),
            children: c.jsx(
              o("WAWebBizBroadcastProSubscriberPoolStateQuery")
                .WAWebBizBroadcastProSubscriberPoolStateQueryReader,
              {
                queryRef: T,
                children: function (t, r) {
                  return c.jsx(C, {
                    entryPoint: n,
                    importLoggingContext: a,
                    omitRecipientNames: r,
                    onRetry: L,
                    request: i,
                    retryKey: u,
                    subscriberPoolState: t,
                  });
                },
              },
            ),
          }),
        }),
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.entryPoint,
        n = e.importLoggingContext,
        a = e.omitRecipientNames,
        i = e.onRetry,
        l = e.request,
        s = e.retryKey,
        u = e.subscriberPoolState,
        d = r("useWAWebBizBroadcastProSubscriberPoolSetup")({
          onRetry: i,
          retryKey: s,
          subscriberPoolState: u,
        }),
        m = d.setupCard,
        p = d.subscriberPoolID,
        _ = function () {
          return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
        },
        f = function () {
          return b(t);
        };
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "single" &&
          "errorList" in e &&
          "validContactsData" in e
        ) {
          var r = e.errorList,
            i = e.validContactsData;
          return c.jsx(
            o("WAWebBizBroadcastProImportAudienceScreenLoadable")
              .WAWebBizBroadcastProImportAudienceScreenLoadable,
            {
              entryPoint: t,
              errorList: r,
              importLoggingContext: n,
              omitRecipientNames: a,
              onClose: _,
              onCreateAudienceSuccess: f,
              subscriberPoolID: p,
              subscriberPoolSetupCard: m,
              validContactsData: i,
            },
          );
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "multiple" &&
          "audiences" in e
        ) {
          var l = e.audiences;
          return c.jsx(
            o("WAWebBizBroadcastProSmartCSVImportAudiencesScreenLoadable")
              .WAWebBizBroadcastProSmartCSVImportAudiencesScreenLoadable,
            {
              audiences: l,
              entryPoint: t,
              importLoggingContext: n,
              omitRecipientNames: a,
              onClose: _,
              onCreateAudiencesSuccess: f,
              subscriberPoolID: p,
              subscriberPoolSetupCard: m,
            },
          );
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(l);
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      (o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen(),
        o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
          c.jsx(
            o("WAWebBusinessBroadcastHomeFlowLoadable")
              .WAWebBusinessBroadcastHomeFlowLoadable,
            {
              entryPoint: e,
              initialTab: "audiences",
              onClose: function () {
                return o(
                  "WAWebDrawerManager",
                ).DrawerManager.closeDrawerFullscreen();
              },
            },
          ),
          { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
        ));
    }
    l.default = y;
  },
  98,
);
