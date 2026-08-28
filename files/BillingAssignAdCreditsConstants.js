__d(
  "BillingAssignAdCreditsConstants",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        accountLevelChoice: s._(/*BTDS*/ "Apply to ad account"),
        body: s._(
          /*BTDS*/ "You can apply your ad credit to the entire ad account or to specific ad campaigns.",
        ),
        campaignLevelChoice: s._(/*BTDS*/ "Apply to specific campaigns"),
        headline: s._(/*BTDS*/ "Apply ad credit"),
        primaryButtonLabel: s._(/*BTDS*/ "Save"),
        searchBarMsg: s._(/*BTDS*/ "Search for a campaign by name or ID"),
        successAccountLevelBody: function (t) {
          return s._(
            /*BTDS*/ "You\u2019ve removed all campaigns from this ad credit and {new prepaid balance} is now available for use on your ad account.",
            [s._param("new prepaid balance", t)],
          );
        },
        successActivateAccountLevelBody: s._(
          /*BTDS*/ "You\u2019ve successfully claimed your ad credit and applied it to your ad account.",
        ),
        successActivateCampaignLevelBody: function (t, n) {
          return n > 0
            ? s._(
                /*BTDS*/ '_j{"*":"You\'ve successfully claimed your credit and applied it to {campaign name} and {campaign number} other campaigns.","_1":"You\'ve successfully claimed your credit and applied it to {campaign name} and {campaign number} other campaign."}',
                [
                  s._plural(n),
                  s._param("campaign name", t),
                  s._param("campaign number", n),
                ],
              )
            : s._(
                /*BTDS*/ "You've successfully claimed your credit and applied it to {campaign name}.",
                [s._param("campaign name", t)],
              );
        },
        successActivateHeadline: s._(/*BTDS*/ "Ad credit activated"),
        successCampaignBody: function (t, n) {
          return n > 0
            ? s._(
                /*BTDS*/ '_j{"*":"You\'ve successfully applied your ad credit to {campaign name} and {campaign number} other campaigns.","_1":"You\'ve successfully applied your ad credit to {campaign name} and {campaign number} other campaign."}',
                [
                  s._plural(n),
                  s._param("campaign name", t),
                  s._param("campaign number", n),
                ],
              )
            : s._(
                /*BTDS*/ "You've successfully applied your ad credit to {campaign name}.",
                [s._param("campaign name", t)],
              );
        },
        successEditHeadline: s._(/*BTDS*/ "Ad credit updated"),
        title: s._(/*BTDS*/ "Ad credit"),
        validationMessageTen: s._(/*BTDS*/ "Select 10 or fewer campaigns."),
        validationMessageZero: s._(
          /*BTDS*/ "Select at least one campaign or apply the credit to your ad account.",
        ),
      },
      u = e;
    l.default = u;
  },
  226,
);
