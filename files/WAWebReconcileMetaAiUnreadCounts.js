__d(
  "WAWebReconcileMetaAiUnreadCounts",
  ["WALogger", "WAWebReconcileMetaAiUnreadCountHelper"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s() {
      try {
        await o(
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
    }
    l.reconcileMetaAiUnreadCountsAction = s;
  },
  98,
);
