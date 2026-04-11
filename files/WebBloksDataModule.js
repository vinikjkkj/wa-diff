__d(
  "WebBloksDataModule",
  ["WebBloksErrors"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t === "ls") return e.localStateDataModule;
      if (t === "gs") return e.objectSet.globalStateDataModule;
      var n = e.objectSet.environment.dataModulesStore.get(t);
      if (n != null) return n;
      throw new (o("WebBloksErrors").WebBloksError)(
        "Unsupported data source type found: " + t,
      );
    }
    function s(e, t) {
      var n = e.data,
        r = n.initial_lispy;
      return r != null ? t(r) : n.initial;
    }
    function u(e, t) {
      return { id: e, type: "ls", data: { initial: t } };
    }
    ((l.getDataModuleFromContext = e),
      (l.getDataEntryInitialValue = s),
      (l.dangerouslyCreateLocalStateDataManifestEntry_DO_NOT_USE = u));
  },
  98,
);
