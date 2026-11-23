__d(
  "WAWebHatchConnectorsFlowLoadable",
  [
    "JSResourceForInteraction",
    "WAWebDrawerManager",
    "WAWebHatchConnectAttemptLog",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "react",
    "useWAWebOnUnmount",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebHatchConnectorsFlow.react",
        )
          .__setRef("WAWebHatchConnectorsFlowLoadable")
          .load();
        return e;
      }, "WAWebHatchConnectorsFlow"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    function d(e) {
      var t = e.cardTapAttempt;
      return (
        r("useWAWebOnUnmount")(function () {
          return o("WAWebHatchConnectAttemptLog").settleHatchConnectAttempt(
            t,
            !1,
          );
        }),
        s.jsx(c, babelHelpers.extends({}, e))
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e, t, n) {
      o("WAWebDrawerManager").DrawerManager.openDrawerRight(
        s.jsx(d, {
          cardTapAttempt: n,
          initialConnectorId: e,
          initialConnectorName: t,
          onClose: o("WAWebDrawerManager").closeDrawerRight,
        }),
      );
    }
    ((l.WAWebHatchConnectorsFlowLoadable = d),
      (l.openHatchConnectorDrawer = m));
  },
  98,
);
