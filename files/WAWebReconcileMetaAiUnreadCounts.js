__d(
  "WAWebReconcileMetaAiUnreadCounts",
  [
    "WALogger",
    "WAWebReconcileMetaAiUnreadCountHelper",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            yield o(
              "WAWebReconcileMetaAiUnreadCountHelper",
            ).reconcileMetaAiUnreadCounts();
          } catch (t) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[reconcile-unread] action failed: ",
                  "",
                ])),
              String(t),
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.reconcileMetaAiUnreadCountsAction = s;
  },
  98,
);
