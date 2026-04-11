__d(
  "CurrentCanonicalRoute",
  ["currentCometRouterInstance", "getTopMostRoute"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e,
        t =
          (e = o(
            "currentCometRouterInstance",
          ).get_THIS_IS_NOT_WHAT_YOU_WANT()) == null
            ? void 0
            : e.getCurrentRouterState();
      if (t != null) {
        var n = r("getTopMostRoute")(t);
        return n.canonicalRouteName;
      }
      return null;
    }
    l.getForGlobalLoggingOnly = e;
  },
  98,
);
