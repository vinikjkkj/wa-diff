__d(
  "cometTypeaheadCreateOrGetCachedCompositeDataSource",
  ["CometLruCache", "CometTypeaheadCompositeDataSource"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["cacheKey_SEARCH_ONLY"],
      s = o("CometLruCache").create(5);
    function u(t) {
      var n = t.cacheKey_SEARCH_ONLY,
        o = babelHelpers.objectWithoutPropertiesLoose(t, e),
        a = c(n),
        i = s.get(a);
      if (i != null) return i;
      var l = new (r("CometTypeaheadCompositeDataSource"))(o);
      return (s.set(a, l), l);
    }
    function c(e) {
      switch (e.type) {
        case "group_rules_mentions_intentful_datasource_cache_key":
        case "groups_mentions_intentful_datasource_cache_key":
        case "groups_mentions_non_intentful_datasource_cache_key":
          return e.type + "-" + e.groupID;
        case "feed_mentions_intentful_datasource_cache_key":
          return (
            e.enableTypeSelection.toString() +
            "-" +
            e.type +
            "-" +
            e.mentionTypes.join(",")
          );
        case "workplace_chat_composer_mentions_datasource_cache_key":
          return (
            e.participants.toString() + "-" + e.type + "-" + e.threadID + "}"
          );
        case "groups_post_mentions_intentful_datasource_cache_key":
          return e.type + "-" + e.groupID + "-" + e.postID;
        case "feed_post_mentions_intentful_datasource_cache_key":
          return (
            e.enableTypeSelection.toString() +
            "-" +
            e.type +
            "-" +
            e.mentionTypes.join(",") +
            "-" +
            e.postID
          );
        default:
          return String(e.type);
      }
    }
    l.default = u;
  },
  98,
);
