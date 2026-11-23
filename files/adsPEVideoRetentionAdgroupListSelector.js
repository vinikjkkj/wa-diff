__d(
  "adsPEVideoRetentionAdgroupListSelector",
  [
    "AdsLoadObjectUtils",
    "AdsPEAdgroupSelectors",
    "LoadObject",
    "adsCreateSelector",
    "adsInsightsAccountInfoSelector",
    "adsMgmtAdgroupSelectionSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsMgmtAdgroupSelectionSelector"),
          o("AdsPEAdgroupSelectors").getCachedSelector_LEGACY,
          r("adsInsightsAccountInfoSelector"),
        ],
        function (t, n, a) {
          var e = t.map(function (e) {
            return n(e);
          });
          return a.mapValue(function (t) {
            var n = e.reduce(function (e, t) {
              var n = t.mapValue(function (e) {
                var t, n;
                if (((t = e.creative) == null ? void 0 : t.video_id) != null) {
                  var o;
                  n = (o = e.creative) == null ? void 0 : o.video_id;
                } else {
                  var a,
                    l = (a = e.creative) == null ? void 0 : a.object_story_spec;
                  if (l != null)
                    if (
                      l.link_data != null &&
                      l.link_data.child_attachments != null &&
                      l.link_data.child_attachments.length > 0
                    ) {
                      var s = l.link_data.child_attachments.find(function (e) {
                        return (e == null ? void 0 : e.video_id) != null;
                      });
                      s != null && (n = s.video_id);
                    } else l.video_data != null && (n = l.video_data.video_id);
                }
                if (n == null) {
                  var u,
                    c =
                      (u = e.creative) == null ||
                      (u = u.asset_feed_spec) == null
                        ? void 0
                        : u.videos;
                  if (c && c.length > 0) n = c[0].video_id;
                  else return r("LoadObject").empty({ creatorModuleID: i.id });
                }
                return { id: e.id, name: e.name, videoID: n };
              });
              return (n.isEmpty() || e.push(n), e);
            }, []);
            return o("AdsLoadObjectUtils").all(n);
          });
        },
        { name: i.id + ".adsPEVideoRetentionAdgroupListSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
