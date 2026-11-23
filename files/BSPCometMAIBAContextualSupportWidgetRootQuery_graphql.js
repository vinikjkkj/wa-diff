__d(
  "BSPCometMAIBAContextualSupportWidgetRootQuery.graphql",
  ["BSPCometMAIBAContextualSupportWidgetRootQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "article_id" },
          { defaultValue: null, kind: "LocalArgument", name: "count" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "failed_payment_restriction_types",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "integrity_disabled_restriction_types",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "max_accounts_checked",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "risk_payment_restriction_types",
          },
          { defaultValue: null, kind: "LocalArgument", name: "skip" },
        ],
        t = {
          kind: "Variable",
          name: "article_id",
          variableName: "article_id",
        },
        r = { kind: "Variable", name: "count", variableName: "count" },
        o = { kind: "Literal", name: "list_type", value: "ACCOUNT" },
        a = {
          kind: "Variable",
          name: "max_accounts_checked_per_entity_type",
          variableName: "max_accounts_checked",
        },
        i = {
          kind: "Literal",
          name: "should_fetch_issues_without_article_restriction",
          value: !0,
        },
        l = {
          kind: "Literal",
          name: "should_fetch_only_ad_accounts",
          value: !0,
        },
        s = [
          t,
          r,
          o,
          a,
          {
            kind: "Variable",
            name: "restriction_types",
            variableName: "risk_payment_restriction_types",
          },
          i,
          l,
        ],
        u = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "legacy_account_id",
          storageKey: null,
        },
        c = { kind: "Literal", name: "disable_auto_log_exposures", value: !0 },
        d = [
          {
            alias: "is_enabled",
            args: [
              { kind: "Literal", name: "bool_default", value: !1 },
              { kind: "Literal", name: "param_name", value: "enabled" },
            ],
            kind: "ScalarField",
            name: "bool",
            storageKey: 'bool(bool_default:false,param_name:"enabled")',
          },
        ],
        m = {
          alias: "restricted_ad_account_maiba_qe",
          args: [
            c,
            {
              kind: "Literal",
              name: "qe_universe",
              value: "risk_disabled_new_reach_impression_opportunity_universe",
            },
          ],
          concreteType: "QECheck",
          kind: "LinkedField",
          name: "qe_check",
          plural: !1,
          selections: d,
          storageKey:
            'qe_check(disable_auto_log_exposures:true,qe_universe:"risk_disabled_new_reach_impression_opportunity_universe")',
        },
        p = {
          alias: "risk_payment_prompt_qe",
          args: [
            c,
            {
              kind: "Literal",
              name: "qe_universe",
              value: "maiba_dora_risk_payment_restriction_prompt",
            },
          ],
          concreteType: "QECheck",
          kind: "LinkedField",
          name: "qe_check",
          plural: !1,
          selections: d,
          storageKey:
            'qe_check(disable_auto_log_exposures:true,qe_universe:"maiba_dora_risk_payment_restriction_prompt")',
        },
        _ = [
          t,
          r,
          o,
          a,
          {
            kind: "Variable",
            name: "restriction_types",
            variableName: "failed_payment_restriction_types",
          },
          i,
          l,
        ],
        f = [
          {
            alias: null,
            args: null,
            concreteType: "AccountQualityLandingPageIssueAccountDetails",
            kind: "LinkedField",
            name: "account_entities",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "AdAccount",
                kind: "LinkedField",
                name: "ad_accounts",
                plural: !0,
                selections: [u, m],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        g = [
          t,
          r,
          o,
          a,
          {
            kind: "Variable",
            name: "restriction_types",
            variableName: "integrity_disabled_restriction_types",
          },
          i,
          l,
        ],
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        y = [
          {
            alias: null,
            args: null,
            concreteType: "AccountQualityLandingPageIssueAccountDetails",
            kind: "LinkedField",
            name: "account_entities",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "AdAccount",
                kind: "LinkedField",
                name: "ad_accounts",
                plural: !0,
                selections: [u, m, h],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: { throwOnFieldError: !0 },
          name: "BSPCometMAIBAContextualSupportWidgetRootQuery",
          selections: [
            {
              condition: "skip",
              kind: "Condition",
              passingValue: !1,
              selections: [
                {
                  alias: "risk_payment_issue_accounts",
                  args: s,
                  concreteType: "AccountQualityLandingPageIssuesQueryDetails",
                  kind: "LinkedField",
                  name: "xfb_bhc_article_issues",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType:
                        "AccountQualityLandingPageIssueAccountDetails",
                      kind: "LinkedField",
                      name: "account_entities",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "AdAccount",
                          kind: "LinkedField",
                          name: "ad_accounts",
                          plural: !0,
                          selections: [u, m, p],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: "failed_payment_issue_accounts",
                  args: _,
                  concreteType: "AccountQualityLandingPageIssuesQueryDetails",
                  kind: "LinkedField",
                  name: "xfb_bhc_article_issues",
                  plural: !1,
                  selections: f,
                  storageKey: null,
                },
                {
                  alias: "integrity_disabled_issue_accounts",
                  args: g,
                  concreteType: "AccountQualityLandingPageIssuesQueryDetails",
                  kind: "LinkedField",
                  name: "xfb_bhc_article_issues",
                  plural: !1,
                  selections: f,
                  storageKey: null,
                },
              ],
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "BSPCometMAIBAContextualSupportWidgetRootQuery",
          selections: [
            {
              condition: "skip",
              kind: "Condition",
              passingValue: !1,
              selections: [
                {
                  alias: "risk_payment_issue_accounts",
                  args: s,
                  concreteType: "AccountQualityLandingPageIssuesQueryDetails",
                  kind: "LinkedField",
                  name: "xfb_bhc_article_issues",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType:
                        "AccountQualityLandingPageIssueAccountDetails",
                      kind: "LinkedField",
                      name: "account_entities",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "AdAccount",
                          kind: "LinkedField",
                          name: "ad_accounts",
                          plural: !0,
                          selections: [u, m, p, h],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: "failed_payment_issue_accounts",
                  args: _,
                  concreteType: "AccountQualityLandingPageIssuesQueryDetails",
                  kind: "LinkedField",
                  name: "xfb_bhc_article_issues",
                  plural: !1,
                  selections: y,
                  storageKey: null,
                },
                {
                  alias: "integrity_disabled_issue_accounts",
                  args: g,
                  concreteType: "AccountQualityLandingPageIssuesQueryDetails",
                  kind: "LinkedField",
                  name: "xfb_bhc_article_issues",
                  plural: !1,
                  selections: y,
                  storageKey: null,
                },
              ],
            },
          ],
        },
        params: {
          id: n(
            "BSPCometMAIBAContextualSupportWidgetRootQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "BSPCometMAIBAContextualSupportWidgetRootQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
