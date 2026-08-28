__d(
  "adsIntelligentComponentsCrossChannelVisibilitySelector",
  ["AdsPEMegaphoneTipStore", "adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /\/manage\/[^/]+\/edit\//,
      s = [
        "/adsmanager/manage/creation_package",
        "/adsmanager/marketing/creation_package",
      ];
    function u() {
      var t = window.location.pathname;
      return (
        e.test(t) ||
        s.some(function (e) {
          return t.startsWith(e);
        })
      );
    }
    var c = r("adsCreateStoreSelector")(
        [r("AdsPEMegaphoneTipStore")],
        function () {
          if (u()) return !0;
          var e = r("AdsPEMegaphoneTipStore").getMessages(),
            t = e.length === 0;
          return t;
        },
        { name: i.id },
      ),
      d = c;
    l.default = d;
  },
  98,
);
