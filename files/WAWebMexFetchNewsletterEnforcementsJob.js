__d(
  "WAWebMexFetchNewsletterEnforcementsJob",
  [
    "WATimeUtils",
    "WAWebAsISOCountryCode",
    "WAWebCommonNewsletterEnums",
    "WAWebLocaleModules",
    "WAWebMexClient",
    "WAWebMexFetchNewsletterEnforcementsJobQuery.graphql",
    "asyncToGeneratorRuntime",
    "filterNulls",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchNewsletterEnforcementsJobQuery.graphql"));
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = { newsletter_id: e, locale: t },
            a = yield o("WAWebMexClient").fetchQuery(s, n),
            i = a == null ? void 0 : a.xwa2_channel_enforcements;
          if (i == null) return null;
          var l = {
            profilePictureDeletions: [],
            suspensions: [],
            violatingMessages: [],
            geoSuspensions: [],
          };
          if (i.profile_picture_deletions != null) {
            var u = [];
            (i.profile_picture_deletions.forEach(function (e) {
              m(e) ||
                u.push(
                  _(
                    e,
                    o("WAWebCommonNewsletterEnums").EnforcementType
                      .PROFILE_PICTURE_DELETION,
                  ),
                );
            }),
              (l.profilePictureDeletions = u));
          }
          if (i.suspensions != null) {
            var c = [];
            (i.suspensions.forEach(function (e) {
              var t;
              if (!m(e)) {
                var n = _(
                  e,
                  o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND,
                );
                ((n.enforcementType =
                  ((t = n.enforcementExtraData) == null
                    ? void 0
                    : t.enforcementTargetData) != null
                    ? o("WAWebCommonNewsletterEnums").EnforcementType
                        .SUSPEND_INFORM
                    : o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND),
                  c.push(n));
              }
            }),
              (l.suspensions = c));
          }
          if (i.violating_messages != null) {
            var p = [];
            (i.violating_messages.forEach(function (e) {
              if (!m(e.base_enforcement_data)) {
                var t = d(e.content_data);
                t != null &&
                  p.push(
                    babelHelpers.extends(
                      {},
                      _(
                        e.base_enforcement_data,
                        o("WAWebCommonNewsletterEnums").EnforcementType
                          .VIOLATING_MSG,
                      ),
                      { violatingContentData: t },
                    ),
                  );
              }
            }),
              (l.violatingMessages = p));
          }
          var f = i.geosuspensions;
          if (f != null) {
            var g = [];
            yield o("WAWebLocaleModules")
              .getCountryData()
              .then(function (e) {
                f.forEach(function (t) {
                  var n, a, i;
                  if (!m(t.base_enforcement_data)) {
                    var l =
                        (n = t.country_codes) == null
                          ? void 0
                          : n.map(function (t) {
                              var n = o(
                                  "WAWebAsISOCountryCode",
                                ).asISOCountryCode(t),
                                r = e[t.toUpperCase()];
                              return n != null && r != null
                                ? { countryCode: n, countryName: r }
                                : null;
                            }),
                      s;
                    l != null && (s = r("filterNulls")(l));
                    var u = _(
                      t.base_enforcement_data,
                      o("WAWebCommonNewsletterEnums").EnforcementType
                        .GEOSUSPEND,
                    );
                    ((u.enforcementType =
                      ((a = u.enforcementExtraData) == null
                        ? void 0
                        : a.enforcementTargetData) != null
                        ? o("WAWebCommonNewsletterEnums").EnforcementType
                            .GEOSUSPEND_INFORM
                        : o("WAWebCommonNewsletterEnums").EnforcementType
                            .GEOSUSPEND),
                      s != null &&
                        ((i = s) == null ? void 0 : i.length) > 0 &&
                        g.push(
                          babelHelpers.extends({}, u, { countryCodes: s }),
                        ));
                  }
                });
              })
              .finally(function () {
                l.geoSuspensions = g;
              });
          }
          return l;
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return e == null
        ? null
        : e.server_id != null
          ? {
              contentType: o("WAWebCommonNewsletterEnums").ViolatingContentType
                .STATUS,
              serverId: parseInt(e.server_id, 10),
            }
          : e.server_msg_id != null
            ? {
                contentType: o("WAWebCommonNewsletterEnums")
                  .ViolatingContentType.MESSAGE,
                serverId: Number(e.server_msg_id),
              }
            : null;
    }
    function m(e) {
      return (
        e.appeal_creation_time == null &&
        e.appeal_state !== "NOT_APPEALED" &&
        e.appeal_state !== "NON_APPEALABLE"
      );
    }
    function p(e) {
      if (e == null) return null;
      var t = e == null ? void 0 : e.ip_violation_report_data,
        n = e == null ? void 0 : e.enforcement_target_data,
        r = e == null ? void 0 : e.enforcing_entity_data,
        a = e == null ? void 0 : e.appeal_extra_data,
        i = e == null ? void 0 : e.enforcement_origin_workflow,
        l = e == null ? void 0 : e.enforcement_origin_legal_basis,
        s = null;
      if (
        (t != null &&
          (s = {
            ipViolationReportData: {
              reportFbid: t.report_fbid,
              appealFormUrl: t.appeal_form_url,
              reporterEmail: t.reporter_email,
              reporterName: t.reporter_name,
            },
          }),
        n != null)
      ) {
        var u =
            n.server_id != null
              ? o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS
              : o("WAWebCommonNewsletterEnums").ViolatingContentType.MESSAGE,
          c =
            n.server_msg_id != null
              ? parseInt(n.server_msg_id, 10)
              : parseInt(n.server_id, 10);
        s = babelHelpers.extends({}, s, {
          enforcementTargetData: { contentType: u, serverId: c },
        });
      }
      return (
        a != null &&
          a.appeal_form_url != null &&
          (s = babelHelpers.extends({}, s, {
            appealExtraData: { appealFormUrl: a.appeal_form_url },
          })),
        r != null &&
          r.name != null &&
          (s = babelHelpers.extends({}, s, {
            enforcingEntityData: { name: r.name },
          })),
        i != null &&
          (s = babelHelpers.extends({}, s, { enforcementOriginWorkflow: i })),
        l != null &&
          (s = babelHelpers.extends({}, s, { enforcementOriginLegalBasis: l })),
        s
      );
    }
    function _(e, t) {
      var n,
        r,
        a = e.enforcement_policy_information;
      return {
        appealCreationTime: o("WATimeUtils").castToUnixTime(
          parseInt((n = e.appeal_creation_time) != null ? n : 0, 10),
        ),
        enforcementCreationTime: o("WATimeUtils").castToUnixTime(
          parseInt(e.enforcement_creation_time, 10),
        ),
        appealState: e.appeal_state,
        enforcementViolationCategory: e.enforcement_violation_category,
        enforcementId: e.enforcement_id,
        enforcementType: t,
        enforcementSource: (r = e.enforcement_source) != null ? r : null,
        enforcementExtraData: p(e.enforcement_extra_data),
        enforcementPolicyInformation:
          a != null
            ? {
                overview: a.overview,
                headline: a.headline,
                subtitle: a.subtitle,
                explanation: a.explanation,
                adminDisclaimer: a.admin_disclaimer,
              }
            : null,
      };
    }
    l.mexFetchNewsletterEnforcements = u;
  },
  98,
);
