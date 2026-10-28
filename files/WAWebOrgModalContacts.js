__d(
  "WAWebOrgModalContacts",
  [
    "WAWebApiContact",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebLidMigrationUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return (t === void 0 && (t = []), n === void 0 && (n = []), s(t, n)(e));
    }
    function s(e, t) {
      var n = new Map();
      return (
        [].concat(e, t).forEach(function (e, t) {
          var r,
            o = (r = n.get(e.id)) != null ? r : [];
          (o.push({ contact: e, order: t }), n.set(e.id, o));
        }),
        function (e) {
          var t,
            r,
            a = o("WAWebApiContact").getPnIfLidIsLatestMapping(e);
          return []
            .concat(
              []
                .concat(
                  (t = n.get(e)) != null ? t : [],
                  a == null ? [] : (r = n.get(a)) != null ? r : [],
                )
                .sort(function (e, t) {
                  return e.order - t.order;
                })
                .map(function (e) {
                  return e.contact;
                }),
              [
                o("WAWebContactCollection").ContactCollection.get(e),
                a == null
                  ? null
                  : o("WAWebContactCollection").ContactCollection.get(a),
              ],
            )
            .filter(function (e) {
              return e != null;
            });
        }
      );
    }
    function u(e, t, n) {
      return e.some(function (e) {
        return (
          (t == null ? void 0 : t(e)) === !0 ||
          (n !== !0 && o("WAWebFrontendContactGetters").getIsContactBlocked(e))
        );
      });
    }
    function c(e, t, n, r, a) {
      a === void 0 && (a = []);
      var i = new Set(e),
        l =
          r == null
            ? []
            : [].concat(n, a).filter(function (e) {
                return e.id.isRegularUser() && r(e);
              });
      for (var s of [].concat(t, l))
        if (s.id.isRegularUser()) {
          var u = o("WAWebLidMigrationUtils").toUserLid(s.id);
          u != null && i.add(u);
        }
      return i;
    }
    ((l.getOrgModalContacts = e),
      (l.createOrgModalContactResolver = s),
      (l.isOrgModalContactUnavailable = u),
      (l.getOrgModalSelectedLids = c));
  },
  98,
);
