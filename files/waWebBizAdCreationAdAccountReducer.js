__d(
  "waWebBizAdCreationAdAccountReducer",
  ["FBImmer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("FBImmer").produce(e, function (e) {
        switch (t.type) {
          case "ad_account_reducer.update_ad_account":
            e.adAccountData = t.adAccountData;
            break;
          case "ad_account_reducer.update_ad_account_with_currency_update":
            ((e.adAccountData = t.adAccountData),
              (e.budgetData = t.budgetData));
            break;
        }
      });
      return [n];
    }
    l.default = e;
  },
  98,
);
