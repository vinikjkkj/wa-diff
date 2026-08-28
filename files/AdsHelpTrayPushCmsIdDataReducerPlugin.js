__d(
  "AdsHelpTrayPushCmsIdDataReducerPlugin",
  ["AdsHelpTrayNavigationHelper", "AdsHelpTrayUILogger", "CSS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 2,
      s = {
        reduce: function (n, r) {
          var t = n.navigationStack,
            a = n.recentlyViewed,
            i = r.data.cmsID,
            l = o("AdsHelpTrayNavigationHelper").getCurrentContentCMSID(n);
          if (
            (n.isTrayOpen ||
              o("AdsHelpTrayUILogger").logHelpTrayArticleOpen(i, r.data.source),
            i !== l)
          ) {
            t = o("AdsHelpTrayNavigationHelper").concatToNavigationStack(t, {
              contentType: "ARTICLE",
              id: i,
            });
            var s = a.indexOf(i);
            (s !== -1 && a.splice(s, 1), a.unshift(i), a.length > e && a.pop());
          }
          return (
            document.body &&
              o("CSS").conditionClass(document.body, "has-helptray", !0),
            babelHelpers.extends({}, n, {
              isTrayOpen: !0,
              recentlyViewed: a,
              navigationStack: t,
            })
          );
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
