__d(
  "deepFreezeValue",
  ["ImmutableValue"],
  function (t, n, r, o, a, i) {
    function e(e) {
      if (e != null)
        switch (typeof e) {
          case "string":
            return;
          case "boolean":
            return;
          case "number":
            return;
          case "function":
            return;
          default:
            n("ImmutableValue").deepFreezeRootNode(e);
        }
    }
    i.default = e;
  },
  66,
);
