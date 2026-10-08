__d(
  "WAWebOrgDirectoryRepositoryState",
  [],
  function (t, n, r, o, a, i) {
    var e = new Set(),
      l = p();
    function s() {
      return l;
    }
    function u(t) {
      return (
        e.add(t),
        function () {
          e.delete(t);
        }
      );
    }
    function c(e) {
      ((l = babelHelpers.extends({}, l, e)), m());
    }
    function d() {
      ((l = p()), m());
    }
    function m() {
      e.forEach(function (e) {
        return e();
      });
    }
    function p() {
      return {
        directoryStateByOrgID: new Map(),
        memberDirectoryEnabledByOrgID: new Map(),
        organizations: [],
        organizationsError: null,
        organizationsStatus: "idle",
        orderedOrgIDs: null,
      };
    }
    ((i.getOrgDirectoryRepositorySnapshot = s),
      (i.subscribeToOrgDirectoryRepository = u),
      (i.updateOrgDirectoryRepositorySnapshot = c),
      (i.resetOrgDirectoryRepositorySnapshot = d));
  },
  66,
);
