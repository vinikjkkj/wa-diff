__d(
  "MAIBAAdGalleryExperience",
  [
    "MAIBAAdGalleryExperience.entrypoint",
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
      return !Array.isArray(n.previews) || n.previews.length === 0 ? null : n;
    }
    var s = {
        loadExperienceEntryPoint: function (n, a) {
          var t = e(a.attributes_json);
          if (t == null) return null;
          var i = o("RelayHooks").loadEntryPoint(
            n,
            r("MAIBAAdGalleryExperience.entrypoint"),
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
