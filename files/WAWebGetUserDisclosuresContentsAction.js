__d(
  "WAWebGetUserDisclosuresContentsAction",
  ["WAWebGetUserDisclosuresContentsJob", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebGetUserDisclosuresContentsJob",
          ).getDisclosuresContentsJob(e);
          return t;
        })),
        s.apply(this, arguments)
      );
    }
    l.getDisclosuresContentAction = e;
  },
  98,
);
