__d(
  "WAWebOrgMembersLoadState",
  [],
  function (t, n, r, o, a, i) {
    var e = { error: null, status: "idle" },
      l = new Map(),
      s = new Set();
    function u(t) {
      var n;
      return t == null ? e : (n = l.get(t)) != null ? n : e;
    }
    function c(e, t) {
      ((l = new Map(l).set(e, t)),
        s.forEach(function (e) {
          return e();
        }));
    }
    function d(e) {
      return (
        s.add(e),
        function () {
          s.delete(e);
        }
      );
    }
    function m() {
      ((l = new Map()),
        s.forEach(function (e) {
          return e();
        }));
    }
    ((i.getOrgMembersLoad = u),
      (i.storeOrgMembersLoad = c),
      (i.subscribeToOrgMembersLoads = d),
      (i.resetOrgMembersLoads = m));
  },
  66,
);
