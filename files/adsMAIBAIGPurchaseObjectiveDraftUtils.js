__d(
  "adsMAIBAIGPurchaseObjectiveDraftUtils",
  ["adsMAIBAIGGoalEditDraftUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, a, i, l, s, u) {
      var c = [
          {
            adObjectID: t,
            fields: [{ field: "objective", value: "OUTCOME_SALES" }].concat(
              u === !0 ||
                s != null ||
                e.some(function (e) {
                  return (
                    e.level === "L3" &&
                    e.adObjectID === t &&
                    e.field ===
                      o("adsMAIBAIGGoalEditDraftUtils")
                        .MAIBA_IG_COMBINED_OBJECTIVE_METADATA_FIELD
                  );
                })
                ? [
                    {
                      field: o("adsMAIBAIGGoalEditDraftUtils")
                        .MAIBA_IG_COMBINED_OBJECTIVE_METADATA_FIELD,
                      value: null,
                    },
                  ]
                : [],
            ),
            level: "L3",
          },
          {
            adObjectID: n,
            fields: [
              { field: "optimization_goal", value: "OFFSITE_CONVERSIONS" },
              { field: "destination_type", value: "WEBSITE" },
              {
                field: "promoted_object",
                value: babelHelpers.extends(
                  {},
                  a != null && a !== "" ? { page_id: a } : {},
                  { pixel_id: i.pixel.id, custom_event_type: "PURCHASE" },
                ),
              },
            ],
            level: "L2",
          },
          {
            adObjectID: r,
            fields: [
              { field: "creative_link_url", value: i.website },
              { field: "creative_call_to_action_type", value: i.cta },
              {
                field: o("adsMAIBAIGGoalEditDraftUtils")
                  .MAIBA_IG_CTA_VALUE_FIELD,
                value: o(
                  "adsMAIBAIGGoalEditDraftUtils",
                ).buildMAIBAIGAuthoritativeCTAValue(i.website),
              },
              {
                field:
                  "creative.creative_sourcing_spec.associated_product_set_id",
                value: l,
              },
            ],
            level: "L1",
          },
        ],
        d = [].concat(e),
        m = function () {
          var e = p.adObjectID,
            t = p.fields,
            n = p.level,
            r = function () {
              var t = a.field,
                r = a.value,
                i = d.findIndex(function (r) {
                  return r.adObjectID === e && r.field === t && r.level === n;
                }),
                l = i >= 0 ? d[i] : null,
                u =
                  (l == null ? void 0 : l.kind) === "value"
                    ? l.originalValue
                    : t ===
                        o("adsMAIBAIGGoalEditDraftUtils")
                          .MAIBA_IG_COMBINED_OBJECTIVE_METADATA_FIELD
                      ? s
                      : null;
              if (
                t ===
                  o("adsMAIBAIGGoalEditDraftUtils")
                    .MAIBA_IG_COMBINED_OBJECTIVE_METADATA_FIELD &&
                u === null
              )
                return (i >= 0 && d.splice(i, 1), 1);
              var c = {
                adObjectID: e,
                field: t,
                kind: "value",
                level: n,
                originalValue: u,
                value: r,
              };
              i >= 0 ? (d[i] = c) : d.push(c);
            };
          for (var a of t) r();
        };
      for (var p of c) m();
      return d;
    }
    l.buildMAIBAIGPurchaseObjectivePatches = e;
  },
  98,
);
