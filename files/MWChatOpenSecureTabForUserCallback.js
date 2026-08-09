__d(
  "MWChatOpenSecureTabForUserCallback",
  ["cr:312"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, r, o, a) {
      if (n("cr:312") == null) {
        a.addMarkerPoint(
          "MAWChatOpenTabForUser_dependency_missing",
          "AppTiming",
        );
        return;
      }
      return n("cr:312").openChatTab(e, t, r, o, a);
    }
    l.openChatTab = e;
  },
  98,
);
