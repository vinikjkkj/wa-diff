__d(
  "WAWebProductGallery.react",
  [
    "fbt",
    "Promise",
    "WAWebHistorySyncComponents.react",
    "WAWebMessageGallery.react",
    "react",
    "useWAWebUiIdle",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["chat", "productMsgs"],
      u,
      c,
      d = c || (c = o("react"));
    function m(t) {
      var a = t.chat,
        i = t.productMsgs,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        c = ["add", "remove", "reset", "products_loaded"],
        m = r("useWAWebUiIdle")(),
        p = function (t) {
          return m(function () {
            i.queryProducts(a, t);
          });
        };
      return d.jsxs(d.Fragment, {
        children: [
          d.jsx(
            r("WAWebMessageGallery.react"),
            babelHelpers.extends(
              {
                msgsCollection: i,
                msgsCollectionUpdateEvents: c,
                queryCollection: p,
                getHasBefore: function () {
                  return i.hasProductBefore;
                },
                getQueryBefore: function () {
                  return i.hasProductBefore
                    ? (u || (u = n("Promise"))).resolve()
                    : null;
                },
                emptyText: s._(/*BTDS*/ "No products"),
                chat: a,
              },
              l,
            ),
          ),
          d.jsx(
            o("WAWebHistorySyncComponents.react").HistorySyncGalleryPlaceholder,
            { chat: a },
          ),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
