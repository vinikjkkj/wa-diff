__d(
  "ProfileCometUserClearsMentionsTabBadgeMutation",
  [
    "CometRelay",
    "ProfileCometUserClearsMentionsTabBadgeMutation.graphql",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s || (s = o("react"))).useCallback,
      c =
        e !== void 0
          ? e
          : (e = n("ProfileCometUserClearsMentionsTabBadgeMutation.graphql"));
    function d() {
      var e = o("react-compiler-runtime").c(5),
        t = o("CometRelay").useMutation(c),
        n = t[0],
        r = t[1],
        a;
      e[0] !== n
        ? ((a = function (t) {
            var e = function (n) {
              var e = n.get(t);
              if (e != null) {
                var r = e.getLinkedRecord("timeline_nav_app_sections");
                if (r != null) {
                  var o = r.getLinkedRecords("edges");
                  if (o != null) {
                    for (var a of o)
                      if (a != null) {
                        var i = a.getLinkedRecord("node");
                        i != null &&
                          i.getValue("section_type") === "MENTIONS" &&
                          i.setValue(!1, "has_new_content");
                      }
                  }
                }
              }
            };
            n({
              optimisticUpdater: e,
              updater: e,
              variables: { input: { user_id: t } },
            });
          }),
          (e[0] = n),
          (e[1] = a))
        : (a = e[1]);
      var i = a,
        l;
      return (
        e[2] !== i || e[3] !== r
          ? ((l = [i, r]), (e[2] = i), (e[3] = r), (e[4] = l))
          : (l = e[4]),
        l
      );
    }
    l.useClearMentionsTabBadge = d;
  },
  98,
);
