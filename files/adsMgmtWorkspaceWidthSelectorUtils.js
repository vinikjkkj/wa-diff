__d(
  "adsMgmtWorkspaceWidthSelectorUtils",
  ["cssVar"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = parseInt("1024px", 10);
    function u(t, n, r, o, a) {
      var i = Math.max(t, e);
      return (
        r && (i -= o),
        a.isMAIBAChatAppOpen && !a.isFullScreen && (i -= a.chatWindowWidth),
        i - n
      );
    }
    l.adsMgmtWorkspaceWidth = u;
  },
  98,
);
