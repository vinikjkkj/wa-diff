__d(
  "MWChatStateV2TabGroups",
  [
    "MWChatStateV2CompareTabs",
    "MWChatStateV2IsMinimized",
    "MWChatStateV2IsOpen",
    "ODS",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n) {
      var r = e.length;
      if (r > t && t > 0 && n != null) {
        var o = e.findIndex(function (e) {
          return e.tabId === n;
        });
        if (o !== -1 && o >= t && o < r) {
          var a = function (n, r) {
            var t = e[n];
            ((e[n] = e[r]), (e[r] = t));
          };
          a((t - 1) | 0, o);
        }
      }
      return e;
    }
    function u(t, n, r, a) {
      (e || (e = o("ODS"))).bumpEntityKey(
        3185,
        "chat_tab_groups",
        "mediaViewerOpenWatermarkOpt." +
          (t == null || t === -1 ? "default" : "set"),
      );
      var i = s(
          Array.from(n.values())
            .filter(function (e) {
              return o("MWChatStateV2IsOpen").isOpen(t, e);
            })
            .sort(o("MWChatStateV2CompareTabs").byMostRecentOpened),
          a,
          r,
        ),
        l = Array.from(n.values()).filter(function (e) {
          return o("MWChatStateV2IsMinimized").isMinimized(t, e);
        });
      return {
        minimizedTabs: l,
        openExcessTabs: i.slice(a, i.length),
        openTabs: i.slice(0, a),
      };
    }
    l.getTabGroups = u;
  },
  98,
);
