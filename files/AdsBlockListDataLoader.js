__d(
  "AdsBlockListDataLoader",
  ["AdsGraphAPI", "AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = [
          "id",
          "name",
          "last_update_time",
          "blocked_placements",
          "business_owner_id",
          "owner_ad_account_id",
          "is_auto_blocking_on",
        ],
        n = e.startsWith("act_") ? e.substring(4) : e;
      return o("AdsGraphAPI")
        .get(i.id)
        .adaccount(n)
        .edge("publisher_block_lists")
        .get({ fields: t.join(",") })
        .then(
          function (e) {
            return e.data;
          },
          function (t) {
            var n;
            throw (
              r("AdsInterfacesLogger").log({
                eventCategory: "brand_safety_controls",
                eventName: "placement_block_lists_load_error",
                data: ((n = {}), (n.accountid = e), n),
              }),
              t
            );
          },
        );
    }
    l.getBlockLists = e;
  },
  98,
);
