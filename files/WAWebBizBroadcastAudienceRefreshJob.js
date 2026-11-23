__d(
  "WAWebBizBroadcastAudienceRefreshJob",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebAudienceExpressionTypes",
    "WAWebAudienceManagementWamEvent",
    "WAWebAudienceResolver",
    "WAWebSchemaBroadcastMetadata",
    "WAWebWamEnumAudienceManagementActionType",
    "WAWebWamEnumAudiencePredicateTypeEnum",
    "WAWebWamEnumAudienceResolutionTriggerType",
    "countWhere",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      switch (e) {
        case o("WAWebAudienceExpressionTypes").PREDICATE_TYPE_CHATTED_RECENTLY:
          return o("WAWebWamEnumAudiencePredicateTypeEnum")
            .AUDIENCE_PREDICATE_TYPE_ENUM.CHATTED_RECENTLY;
        case o("WAWebAudienceExpressionTypes")
          .PREDICATE_TYPE_NOT_MESSAGED_RECENTLY:
          return o("WAWebWamEnumAudiencePredicateTypeEnum")
            .AUDIENCE_PREDICATE_TYPE_ENUM.NOT_MESSAGED_RECENTLY;
        default:
          return o("WAWebWamEnumAudiencePredicateTypeEnum")
            .AUDIENCE_PREDICATE_TYPE_ENUM.UNKNOWN;
      }
    }
    function c(e, t) {
      if (e.length !== t.length) return !1;
      for (
        var n = [].concat(e).sort(), r = [].concat(t).sort(), o = 0;
        o < n.length;
        o++
      )
        if (n[o] !== r[o]) return !1;
      return !0;
    }
    async function d() {
      if (o("WAWebABProps").getABPropConfigValue("m2_audience_dynamic_rules")) {
        var t = await o("WAWebSchemaBroadcastMetadata")
            .getBroadcastMetadataTable()
            .all(),
          n = t.filter(function (e) {
            var t;
            return (
              ((t = e.audienceExpression) == null ? void 0 : t.type) ===
                o("WAWebAudienceExpressionTypes").EXPRESSION_TYPE_PREDICATE &&
              (e.audienceExpression.predicateType ===
                o("WAWebAudienceExpressionTypes")
                  .PREDICATE_TYPE_CHATTED_RECENTLY ||
                e.audienceExpression.predicateType ===
                  o("WAWebAudienceExpressionTypes")
                    .PREDICATE_TYPE_NOT_MESSAGED_RECENTLY)
            );
          });
        if (n.length !== 0) {
          var a = 0,
            i = 0;
          (await Promise.all(
            n.map(async function (t) {
              try {
                var n = await o(
                    "WAWebAudienceResolver",
                  ).resolveAudienceExpression(t.audienceExpression),
                  l = t.recipients;
                if (c(l, n)) return;
                (await o("WAWebSchemaBroadcastMetadata")
                  .getBroadcastMetadataTable()
                  .createOrReplace(
                    babelHelpers.extends({}, t, { recipients: n }),
                  ),
                  a++);
                var s = new Set(l),
                  d = new Set(n),
                  m = r("countWhere")(n, function (e) {
                    return !s.has(e);
                  }),
                  p = r("countWhere")(l, function (e) {
                    return !d.has(e);
                  });
                new (o(
                  "WAWebAudienceManagementWamEvent",
                ).AudienceManagementWamEvent)({
                  audienceExtraData: JSON.stringify({
                    added_count: m,
                    removed_count: p,
                    resolved_count: n.length,
                  }),
                  audienceManagementAction: o(
                    "WAWebWamEnumAudienceManagementActionType",
                  ).AUDIENCE_MANAGEMENT_ACTION_TYPE.RESOLVED,
                  audiencePredicateType:
                    t.audienceExpression.type ===
                    o("WAWebAudienceExpressionTypes").EXPRESSION_TYPE_PREDICATE
                      ? u(t.audienceExpression.predicateType)
                      : o("WAWebWamEnumAudiencePredicateTypeEnum")
                          .AUDIENCE_PREDICATE_TYPE_ENUM.UNKNOWN,
                  audienceResolutionTrigger: o(
                    "WAWebWamEnumAudienceResolutionTriggerType",
                  ).AUDIENCE_RESOLUTION_TRIGGER_TYPE.PERIODIC_REFRESH,
                }).commit();
              } catch (n) {
                (i++,
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[audience-refresh] failed to refresh ",
                          ": ",
                          "",
                        ])),
                      t.id,
                      n,
                    )
                    .tags("wa-smb", "business-broadcast", "audience-refresh"));
              }
            }),
          ),
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[audience-refresh] scanned=",
                    " refreshed=",
                    " errors=",
                    "",
                  ])),
                n.length,
                a,
                i,
              )
              .tags("wa-smb", "business-broadcast", "audience-refresh"),
            new (o(
              "WAWebAudienceManagementWamEvent",
            ).AudienceManagementWamEvent)({
              audienceExtraData: JSON.stringify({
                refresh_error_count: i,
                refresh_skipped_count: n.length - a - i,
                refresh_success_count: a,
                refresh_total_audiences: n.length,
              }),
              audienceManagementAction: o(
                "WAWebWamEnumAudienceManagementActionType",
              ).AUDIENCE_MANAGEMENT_ACTION_TYPE.RESOLVED,
              audienceResolutionTrigger: o(
                "WAWebWamEnumAudienceResolutionTriggerType",
              ).AUDIENCE_RESOLUTION_TRIGGER_TYPE.PERIODIC_REFRESH,
            }).commit());
        }
      }
    }
    l.refreshTimeBasedAudiences = d;
  },
  98,
);
