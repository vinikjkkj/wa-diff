__d(
  "WAWebForwardMessageModalLoadable",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingModal.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebForwardMessageModal.react",
          )
            .__setRef("WAWebForwardMessageModalLoadable")
            .load();
          return e;
        }),
        "ForwardMessageModal",
      ),
      d = r("react-loadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingModal.react"), {
            title: s._(
              /*BTDS*/ '_j{"*":"Forward messages to","_1":"Forward message to"}',
              [s._plural(1)],
            ),
            error: !!t.error,
          });
        },
      });
    ((l.requireBundle = c), (l.ForwardMessageModalLoadable = d));
  },
  226,
);
