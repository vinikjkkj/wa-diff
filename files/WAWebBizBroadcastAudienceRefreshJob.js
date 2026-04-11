__d(
  "WAWebBizBroadcastAudienceRefreshJob",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebAudienceExpressionTypes",
    "WAWebAudienceManagementWamEvent",
    "WAWebAudienceResolver",
    "WAWebSchemaBroadcastMetadata",
    "WAWebWamEnumAudienceManagementActionType",
    "WAWebWamEnumAudiencePredicateTypeEnum",
    "WAWebWamEnumAudienceResolutionTriggerType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
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
    function d(e, t) {
      if (e.length !== t.length) return !1;
      for (
        var n = [].concat(e).sort(), r = [].concat(t).sort(), o = 0;
        o < n.length;
        o++
      )
        if (n[o] !== r[o]) return !1;
      return !0;
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            o("WAWebABProps").getABPropConfigValue("m2_audience_dynamic_rules")
          ) {
            var t = yield o("WAWebSchemaBroadcastMetadata")
                .getBroadcastMetadataTable()
                .all(),
              r = t.filter(function (e) {
                var t;
                return (
                  ((t = e.audienceExpression) == null ? void 0 : t.type) ===
                    o("WAWebAudienceExpressionTypes")
                      .EXPRESSION_TYPE_PREDICATE &&
                  (e.audienceExpression.predicateType ===
                    o("WAWebAudienceExpressionTypes")
                      .PREDICATE_TYPE_CHATTED_RECENTLY ||
                    e.audienceExpression.predicateType ===
                      o("WAWebAudienceExpressionTypes")
                        .PREDICATE_TYPE_NOT_MESSAGED_RECENTLY)
                );
              });
            if (r.length !== 0) {
              var a = 0,
                i = 0;
              (yield (u || (u = n("Promise"))).all(
                r.map(
                  (function () {
                    var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (t) {
                        try {
                          var n = yield o(
                              "WAWebAudienceResolver",
                            ).resolveAudienceExpression(t.audienceExpression),
                            r = t.recipients;
                          if (d(r, n)) return;
                          (yield o("WAWebSchemaBroadcastMetadata")
                            .getBroadcastMetadataTable()
                            .createOrReplace(
                              babelHelpers.extends({}, t, { recipients: n }),
                            ),
                            a++);
                          var l = new Set(r),
                            s = new Set(n),
                            u = n.filter(function (e) {
                              return !l.has(e);
                            }).length,
                            m = r.filter(function (e) {
                              return !s.has(e);
                            }).length;
                          new (o(
                            "WAWebAudienceManagementWamEvent",
                          ).AudienceManagementWamEvent)({
                            audienceExtraData: JSON.stringify({
                              added_count: u,
                              removed_count: m,
                              resolved_count: n.length,
                            }),
                            audienceManagementAction: o(
                              "WAWebWamEnumAudienceManagementActionType",
                            ).AUDIENCE_MANAGEMENT_ACTION_TYPE.RESOLVED,
                            audiencePredicateType:
                              t.audienceExpression.type ===
                              o("WAWebAudienceExpressionTypes")
                                .EXPRESSION_TYPE_PREDICATE
                                ? c(t.audienceExpression.predicateType)
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
                              .tags(
                                "wa-smb",
                                "business-broadcast",
                                "audience-refresh",
                              ));
                        }
                      },
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                ),
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
                    r.length,
                    a,
                    i,
                  )
                  .tags("wa-smb", "business-broadcast", "audience-refresh"),
                new (o(
                  "WAWebAudienceManagementWamEvent",
                ).AudienceManagementWamEvent)({
                  audienceExtraData: JSON.stringify({
                    refresh_error_count: i,
                    refresh_skipped_count: r.length - a - i,
                    refresh_success_count: a,
                    refresh_total_audiences: r.length,
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
        })),
        p.apply(this, arguments)
      );
    }
    l.refreshTimeBasedAudiences = m;
  },
  98,
);
