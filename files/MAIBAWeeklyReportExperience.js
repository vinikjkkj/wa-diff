__d(
  "MAIBAWeeklyReportExperience",
  [
    "GeoIcon.react",
    "MAIBAWeeklyReportExperience.entrypoint",
    "MAIBAWorkspaceExperienceRegistry",
    "RelayHooks",
    "meta-brand-chart-bar-filled-20",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      if (e == null || e === "") return null;
      var t;
      try {
        t = JSON.parse(e);
      } catch (e) {
        return null;
      }
      if (t == null || typeof t != "object" || Array.isArray(t)) return null;
      var n = t;
      return typeof n.title != "string" || n.title === "" ? null : n;
    }
    var c = {
        loadExperienceEntryPoint: function (t, n) {
          var e = u(n.attributes_json);
          if (e == null) return null;
          var a = o("RelayHooks").loadEntryPoint(
            t,
            r("MAIBAWeeklyReportExperience.entrypoint"),
            { workspaceVersion: n.version },
          );
          return o("MAIBAWorkspaceExperienceRegistry").buildLoadedEntryPoint(
            a,
            function (t) {
              var n = t.entity;
              return { entity: n, input: e };
            },
          );
        },
        getPillDescriptor: function (t) {
          var e;
          return {
            iconElement: s.jsx(r("GeoIcon.react"), {
              icon: o("meta-brand-chart-bar-filled-20")
                .metaBrandChartBarFilled20,
            }),
            subtitle: {
              kind: "plain",
              text: (e = t.subtitle) != null ? e : "",
            },
          };
        },
      },
      d = c;
    l.default = d;
  },
  98,
);
