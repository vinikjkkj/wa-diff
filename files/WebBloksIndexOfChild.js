__d(
  "WebBloksIndexOfChild",
  ["WebBloksLegacyTraverser"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r,
        a,
        i = t;
      if (i == null || i.getId() == null)
        return (
          e.objectSet.environment.logger.warn(
            "bk.action.bloks.IndexOfChild called on a container without an ID",
          ),
          -1
        );
      var l = o("WebBloksLegacyTraverser").findComponentByServerId(
          e.treeManager,
          i.getId(),
          e.objectSet.environment.traversalKeys,
        ),
        s = String(n);
      return (r =
        l == null || (a = l.getChildren_DEPRECATED()) == null
          ? void 0
          : a.findIndex(function (e) {
              return e.getId() === s;
            })) != null
        ? r
        : -1;
    }
    l.default = e;
  },
  98,
);
