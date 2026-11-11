__d(
  "WAWebOrgAdminProfilePictureCache",
  ["Promise", "WAWebOrgAdminProfilePictures", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 3e4,
      u = 300 * 1e3,
      c = 3600 * 1e3,
      d = new Set(),
      m = new Map(),
      p = new Map(),
      _ = new Map(),
      f = new Map();
    function g() {
      return m;
    }
    function h(e) {
      return (
        d.add(e),
        function () {
          d.delete(e);
        }
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = Date.now(),
            o = new Set(),
            a = [];
          for (var i of new Set(t)) {
            var l = f.get(i);
            l != null ? o.add(l) : v(i, r) && a.push(i);
          }
          (a.length > 0 && o.add(S(a)), yield (e || (e = n("Promise"))).all(o));
        })),
        C.apply(this, arguments)
      );
    }
    function b() {
      ((m = new Map()), (p = new Map()), (_ = new Map()), (f = new Map()));
    }
    function v(e, t) {
      var n;
      if (((n = _.get(e)) != null ? n : 0) > t) return !1;
      var r = p.get(e);
      return r == null || t - r >= c;
    }
    function S(e) {
      var t = o("WAWebOrgAdminProfilePictures")
        .fetchOrgAdminProfilePictures(e)
        .catch(function () {
          return null;
        })
        .then(function (n) {
          for (var r of e) f.get(r) === t && f.delete(r);
          R(e, n);
        });
      for (var n of e) f.set(n, t);
      return t;
    }
    function R(e, t) {
      var n = Date.now(),
        r = new Map(m);
      for (var o of e) {
        var a = t == null ? void 0 : t.profilePictureURLByLID.get(o);
        a != null
          ? (r.set(o, a), p.set(o, n), _.delete(o))
          : (t == null ? void 0 : t.unavailableLIDs.has(o)) === !0
            ? (r.delete(o), p.delete(o), _.set(o, n + u))
            : _.set(o, n + s);
      }
      L(r, m) ||
        ((m = r),
        d.forEach(function (e) {
          return e();
        }));
    }
    function L(e, t) {
      return (
        e.size === t.size &&
        Array.from(e).every(function (e) {
          var n = e[0],
            r = e[1];
          return t.get(n) === r;
        })
      );
    }
    ((l.getOrgAdminProfilePictures = g),
      (l.subscribeToOrgAdminProfilePictures = h),
      (l.loadOrgAdminProfilePictures = y),
      (l.resetOrgAdminProfilePictures = b));
  },
  98,
);
