__d(
  "getEntityIDFromRoute",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t,
        n = (e == null || (t = e.rootView) == null ? void 0 : t.props) || {};
      return n.userID
        ? n.userID
        : n.pageID
          ? n.pageID
          : n.groupID
            ? n.groupID
            : n.eventID
              ? n.eventID
              : null;
    }
    i.default = e;
  },
  66,
);
