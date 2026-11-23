__d(
  "WAWebOrgAdminProfilePictureCache",
  ["WAWebNullFunc", "WAWebOrgAdminProfilePictures"],
  function (t, n, r, o, a, i, l) {
    var e = 3e4,
      s = 300 * 1e3,
      u = 3600 * 1e3,
      c = new Set(),
      d = new Map(),
      m = new Map(),
      p = new Map();
    function _() {
      return d;
    }
    function f(e) {
      return (
        c.add(e),
        function () {
          c.delete(e);
        }
      );
    }
    async function g(e) {
      var t = Date.now(),
        n = new Set(),
        r = [];
      for (var o of new Set(e)) {
        var a,
          i = p.get(o);
        i != null
          ? n.add(i)
          : ((a = m.get(o)) != null ? a : 0) <= t && r.push(o);
      }
      (r.length > 0 && n.add(y(r)), await Promise.all(n));
    }
    function h() {
      ((d = new Map()), (m = new Map()), (p = new Map()));
    }
    function y(e) {
      var t = o("WAWebOrgAdminProfilePictures")
        .fetchOrgAdminProfilePictures(e)
        .catch(o("WAWebNullFunc").returnNull)
        .then(function (n) {
          var r = e.filter(function (e) {
            return p.get(e) === t;
          });
          (r.forEach(function (e) {
            return p.delete(e);
          }),
            C(r, n));
        });
      for (var n of e) p.set(n, t);
      return t;
    }
    function C(t, n) {
      var r = Date.now(),
        o = new Map(d),
        a = !1;
      for (var i of t) {
        var l = n == null ? void 0 : n.profilePictureURLByLID.get(i);
        l != null
          ? ((a = a || o.get(i) !== l), o.set(i, l), m.set(i, r + u))
          : (n == null ? void 0 : n.unavailableLIDs.has(i)) === !0
            ? ((a = o.delete(i) || a), m.set(i, r + s))
            : m.set(i, r + e);
      }
      a &&
        ((d = o),
        c.forEach(function (e) {
          return e();
        }));
    }
    ((l.getOrgAdminProfilePictures = _),
      (l.subscribeToOrgAdminProfilePictures = f),
      (l.loadOrgAdminProfilePictures = g),
      (l.resetOrgAdminProfilePictures = h));
  },
  98,
);
