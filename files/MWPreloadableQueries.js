__d(
  "MWPreloadableQueries",
  ["I64", "ReQL"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (t, n) {
        return o("ReQL")
          .fromTableAscending(t.tables.thread_nullstate)
          .getKeyRange(n);
      },
      u = function (t, n) {
        return o("ReQL")
          .fromTableAscending(
            t.tables.thread_nullstate_ctas.index("threadKeyCtaId"),
          )
          .getKeyRange(n);
      },
      c = function (t, n) {
        return o("ReQL")
          .fromTableAscending(t.tables.cutover_threads)
          .getKeyRange(n);
      },
      d = function (t, n) {
        return o("ReQL")
          .fromTableAscending(t.tables.community_folders)
          .getKeyRange(n);
      },
      m = function (t, n) {
        return o("ReQL")
          .fromTableAscending(t.tables.thread_proactive_warning_settings)
          .getKeyRange(n);
      },
      p = function (t, n) {
        return o("ReQL")
          .fromTableAscending(t.tables.in_thread_banner)
          .getKeyRange(n);
      };
    function _(t, n) {
      return o("ReQL")
        .fromTableAscending(t.tables.media_staging)
        .filter(function (t) {
          return !t.isSent && (e || (e = o("I64"))).equal(t.threadKey, n);
        });
    }
    ((l.threadNullStateQuery = s),
      (l.threadNullStateCtaQuery = u),
      (l.getCutoverThreadByThreadKey = c),
      (l.getCommunityFolderQuery = d),
      (l.getProactiveWarningsForThreadQuery = m),
      (l.getThreadBannerQuery = p),
      (l.getMediaStagingQuery = _));
  },
  98,
);
