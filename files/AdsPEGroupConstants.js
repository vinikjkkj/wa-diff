__d(
  "AdsPEGroupConstants",
  [],
  function (t, n, r, o, a, i) {
    var e = 200,
      l = 20,
      s = 5,
      u = "parent",
      c = "budget_pool";
    function d(e) {
      return e === u || e === c;
    }
    var m = "__local_drafts__",
      p = "__needs_attention__",
      _ = "__rest_of_campaigns__",
      f = 10;
    function g(e) {
      return e === p || e === _;
    }
    var h = {
      expandedGroupKeys: [],
      groupIDsByKey: {},
      groupObjectCounts: {},
      groupPageIndex: 0,
      groupingDimension: null,
    };
    ((i.GROUP_EXPAND_LIMIT = e),
      (i.PARENT_INITIAL_BATCH_SIZE = l),
      (i.GROUP_VIEWPORT_BUFFER = s),
      (i.PARENT_GROUPING_DIMENSION = u),
      (i.BUDGET_POOL_GROUPING_DIMENSION = c),
      (i.isDynamicGroupingDimension = d),
      (i.DRAFTS_GROUP_KEY = m),
      (i.NEEDS_ATTENTION_GROUP_KEY = p),
      (i.REST_OF_CAMPAIGNS_GROUP_KEY = _),
      (i.PRIORITIZED_HIGHLIGHTS_MAX = f),
      (i.isPrioritizedGroupKey = g),
      (i.ADS_PE_GROUP_DEFAULTS = h));
  },
  66,
);
