__d(
  "MAIBAPDFViewerExperience",
  [
    "MAIBAPDFViewerExperience.entrypoint",
    "MAIBAWorkspaceExperienceRegistry",
    "RelayHooks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null || e === "") return null;
      var t;
      try {
        t = JSON.parse(e);
      } catch (e) {
        return null;
      }
      if (t == null || typeof t != "object" || Array.isArray(t)) return null;
      var n = t;
      return typeof n.url != "string" ||
        n.url === "" ||
        typeof n.displayName != "string" ||
        n.displayName === "" ||
        (n.file_size != null && typeof n.file_size != "number")
        ? null
        : n;
    }
    var s = {
        loadExperienceEntryPoint: function (n, a) {
          var t = e(a.attributes_json);
          if (t == null) return null;
          var i = o("RelayHooks").loadEntryPoint(
            n,
            r("MAIBAPDFViewerExperience.entrypoint"),
            { workspaceVersion: a.version },
          );
          return o("MAIBAWorkspaceExperienceRegistry").buildLoadedEntryPoint(
            i,
            function (e) {
              var n = e.entity;
              return { entity: n, input: t };
            },
          );
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
