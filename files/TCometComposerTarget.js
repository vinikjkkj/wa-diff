__d(
  "TCometComposerTarget",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum")({
      Event: "event",
      Feed: "feed",
      Group: "group",
      Page: "page",
      Profile: "profile",
      Unknown: "unknown",
    });
    function l(t) {
      switch (t) {
        case "event":
          return e.Event;
        case "feed":
          return e.Feed;
        case "group":
          return e.Group;
        case "page":
          return e.Page;
        case "profile":
          return e.Profile;
      }
      return e.Unknown;
    }
    ((i.ComposerTargetType = e), (i.getComposerTargetType = l));
  },
  66,
);
