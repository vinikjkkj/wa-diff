__d(
  "AdsCMDefaultSort",
  [],
  function (t, n, r, o, a, i) {
    var e = Object.freeze({
      HISTORY_TAB_DEFAULT_SORT: [{ field: "start_time", direction: -1 }],
      ACCOUNT_TAB_DEFAULT_SORT: [{ field: "spend", direction: -1 }],
      CAMPAIGN_GROUP_TAB_DEFAULT_SORT: [
        { field: "delivery_info", direction: 1 },
        { field: "spend", direction: -1 },
        { field: "stop_time", direction: -1 },
        { field: "start_time", direction: -1 },
      ],
      CAMPAIGN_TAB_DEFAULT_SORT: [
        { field: "delivery_info", direction: 1 },
        { field: "spend", direction: -1 },
        { field: "end_time", direction: -1 },
        { field: "start_time", direction: -1 },
      ],
      ADGROUP_TAB_DEFAULT_SORT: [
        { field: "delivery_info", direction: 1 },
        { field: "spend", direction: -1 },
        { field: "created_time", direction: -1 },
      ],
      SORT_ON_TIMEOUT: [{ field: "delivery_info", direction: 1 }],
      SORT_ON_ERROR: [{ field: "name", direction: 1 }],
    });
    i.default = e;
  },
  66,
);
