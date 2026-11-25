__d(
  "WAWebHatchShoppingFlowLoadable",
  [
    "JSResourceForInteraction",
    "WAWebHatchLoadingDrawer.react",
    "WAWebHatchShoppingGate.react",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        return await r("JSResourceForInteraction")(
          "WAWebHatchShoppingFlow.react",
        )
          .__setRef("WAWebHatchShoppingFlowLoadable")
          .load();
      }, "WAWebHatchShoppingFlow"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebHatchLoadingDrawer.react"), {
            error: !!t.error,
          });
        },
        renderLoadingImmediately: !0,
      });
    function d(e) {
      return s.jsx(o("WAWebHatchShoppingGate.react").WAWebHatchShoppingGate, {
        msgKey: e.msgKey,
        onClose: e.onClose,
        children: s.jsx(c, babelHelpers.extends({}, e)),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
