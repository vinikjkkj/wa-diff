__d(
  "CometTrackingNodeRenderer",
  ["CometTrackingNodeProvider.react", "react", "react-strict-dom"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      if (t.__typename) {
        var n = 304,
          a = "CometLink";
        switch (t.__typename) {
          case "User":
            ((n = 312), (a = "CometProfileLink"));
            break;
          case "Page":
            ((n = 50), (a = "CometPageLink"));
            break;
          case "Hashtag":
          case "GroupHashtag":
            ((n = 90), (a = "CometHashtagLink"));
            break;
          default:
            break;
        }
        return s.jsx(o("react-strict-dom").html.span, {
          "data-testid": void 0,
          children: s.jsx(r("CometTrackingNodeProvider.react"), {
            trackingNode: n,
            children: e,
          }),
        });
      }
      return e;
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
