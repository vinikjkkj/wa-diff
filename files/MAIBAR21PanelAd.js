__d(
  "MAIBAR21PanelAd",
  ["FBLogger", "MAIBAR21PanelAdQuery.graphql", "RelayHooks", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e !== void 0 ? e : (e = n("MAIBAR21PanelAdQuery.graphql"));
    function u(e) {
      var t,
        n,
        r = function (t) {
          return function (e, n) {
            var r, o;
            return ((r = t(n)) != null ? r : 0) - ((o = t(e)) != null ? o : 0);
          };
        },
        o = e
          .filter(function (e) {
            return e.status === "ACTIVE";
          })
          .sort(
            r(function (e) {
              return e.startTime;
            }),
          ),
        a = e
          .filter(function (e) {
            return e.status === "FINISHED" || e.status === "EXTENDABLE";
          })
          .sort(
            r(function (e) {
              return e.stopTime;
            }),
          );
      return (t = (n = o[0]) != null ? n : a[0]) != null ? t : null;
    }
    async function c(e, t) {
      try {
        var n,
          a,
          i = await o("RelayHooks")
            .fetchQuery(
              e,
              s,
              { pageID: t },
              { fetchPolicy: "store-or-network" },
            )
            .toPromise(),
          l = u(
            ((n =
              i == null || (a = i.lwi) == null || (a = a.all_page_ads) == null
                ? void 0
                : a.edges) != null
              ? n
              : []
            )
              .map(function (e) {
                var t,
                  n,
                  r,
                  o,
                  a,
                  i,
                  l,
                  s,
                  u,
                  c = (t = e.node) == null ? void 0 : t.wrapper_renderer,
                  d = c == null ? void 0 : c.boosted_component_common_wrapper,
                  m =
                    d == null ||
                    (n = d.spec) == null ||
                    (n = n.adgroup_spec[0]) == null
                      ? void 0
                      : n.adgroup_id;
                return m == null
                  ? null
                  : {
                      id: m,
                      name:
                        (r =
                          (o =
                            c == null || (a = c.body_text) == null
                              ? void 0
                              : a[0]) != null
                            ? o
                            : c == null
                              ? void 0
                              : c.title_text) != null
                          ? r
                          : "",
                      startTime:
                        d == null || (i = d.boosting_info) == null
                          ? void 0
                          : i.start_time,
                      status:
                        (l =
                          d == null || (s = d.spec) == null
                            ? void 0
                            : s.boosting_status) != null
                          ? l
                          : "",
                      stopTime:
                        d == null || (u = d.boosting_info) == null
                          ? void 0
                          : u.stop_time,
                    };
              })
              .filter(Boolean),
          );
        return l == null
          ? null
          : { id: l.id, name: l.name, payload: { is_draft: !1 }, type: "Ad" };
      } catch (e) {
        return (
          r("FBLogger")("sb_maiba_surfaces")
            .catching(r("getErrorSafe")(e))
            .warn("R2.1 panel ad lookup failed; sending Page-only"),
          null
        );
      }
    }
    ((l.MAIBAR21PanelAdQuery = s),
      (l.chooseMAIBAR21PanelAd = u),
      (l.fetchMAIBAR21PanelAd = c));
  },
  98,
);
