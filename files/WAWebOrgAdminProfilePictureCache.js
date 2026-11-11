__d(
  "WAWebOrgAdminProfilePictureCache",
  [
    "Promise",
    "WAWebNullFunc",
    "WAWebOrgAdminProfilePictures",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 3e4,
      u = 300 * 1e3,
      c = 3600 * 1e3,
      d = new Set(),
      m = new Map(),
      p = new Map(),
      _ = new Map();
    function f() {
      return m;
    }
    function g(e) {
      return (
        d.add(e),
        function () {
          d.delete(e);
        }
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = Date.now(),
            o = new Set(),
            a = [];
          for (var i of new Set(t)) {
            var l,
              s = _.get(i);
            s != null
              ? o.add(s)
              : ((l = p.get(i)) != null ? l : 0) <= r && a.push(i);
          }
          (a.length > 0 && o.add(b(a)), yield (e || (e = n("Promise"))).all(o));
        })),
        y.apply(this, arguments)
      );
    }
    function C() {
      ((m = new Map()), (p = new Map()), (_ = new Map()));
    }
    function b(e) {
      var t = o("WAWebOrgAdminProfilePictures")
        .fetchOrgAdminProfilePictures(e)
        .catch(o("WAWebNullFunc").returnNull)
        .then(function (n) {
          var r = e.filter(function (e) {
            return _.get(e) === t;
          });
          (r.forEach(function (e) {
            return _.delete(e);
          }),
            v(r, n));
        });
      for (var n of e) _.set(n, t);
      return t;
    }
    function v(e, t) {
      var n = Date.now(),
        r = new Map(m),
        o = !1;
      for (var a of e) {
        var i = t == null ? void 0 : t.profilePictureURLByLID.get(a);
        i != null
          ? ((o = o || r.get(a) !== i), r.set(a, i), p.set(a, n + c))
          : (t == null ? void 0 : t.unavailableLIDs.has(a)) === !0
            ? ((o = r.delete(a) || o), p.set(a, n + u))
            : p.set(a, n + s);
      }
      o &&
        ((m = r),
        d.forEach(function (e) {
          return e();
        }));
    }
    ((l.getOrgAdminProfilePictures = f),
      (l.subscribeToOrgAdminProfilePictures = g),
      (l.loadOrgAdminProfilePictures = h),
      (l.resetOrgAdminProfilePictures = C));
  },
  98,
);
