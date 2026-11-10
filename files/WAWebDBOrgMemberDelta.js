__d(
  "WAWebDBOrgMemberDelta",
  [
    "Promise",
    "WAWebDBOrg",
    "WAWebModelStorageUtils",
    "WAWebOrgOrder",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = r.added,
            i = r.memberUpdatedTsUsec,
            l = r.removedLids,
            s = r.removesViewer,
            u = r.updated,
            m = { status: "missing_org" };
          return (
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                [o("WAWebDBOrg").ORG_TABLE, o("WAWebDBOrg").ORG_CONTACT_TABLE],
                (function () {
                  var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (r) {
                      var p = r[0],
                        _ = r[1],
                        f = p,
                        g = _,
                        h = yield f.get(t);
                      if (h != null) {
                        if (!d(i, h.memberUpdatedTsUsec)) {
                          m = { status: "stale" };
                          return;
                        }
                        if (s) {
                          (yield f.remove(t),
                            yield o("WAWebDBOrg").removeOrgRoster(g, t),
                            (m = {
                              orgs: yield f.all(),
                              status: "viewer_removed",
                            }));
                          return;
                        }
                        var y = Array.from(
                            new Set(
                              [].concat(
                                a.map(function (e) {
                                  return e.lid;
                                }),
                                l,
                                u.map(function (e) {
                                  return e.lid;
                                }),
                              ),
                            ),
                          ),
                          C = new Map(
                            (yield g.anyOf(["lid"], y))
                              .filter(function (e) {
                                return e.orgId === t;
                              })
                              .map(function (e) {
                                return [e.lid, e];
                              }),
                          );
                        (yield (e || (e = n("Promise"))).all(
                          l.map(function (e) {
                            return g.remove([t, e]);
                          }),
                        ),
                          yield g.bulkCreateOrReplace(
                            a.map(function (e) {
                              return o("WAWebDBOrg").mergeOrgContactRow(
                                babelHelpers.extends({}, e, { orgId: t }),
                                C.get(e.lid),
                              );
                            }),
                          ));
                        var b = new Set(l);
                        yield g.bulkCreateOrReplace(
                          u.flatMap(function (e) {
                            var t = C.get(e.lid);
                            return t == null || b.has(e.lid) ? [] : [c(t, e)];
                          }),
                        );
                        var v = babelHelpers.extends({}, h, {
                          memberUpdatedTsUsec: i,
                        });
                        (yield f.createOrReplace(v),
                          (m = {
                            org: v,
                            rows: yield o("WAWebDBOrg").readRowsByLids(g, y),
                            status: "applied",
                          }));
                      }
                    },
                  );
                  return function (e) {
                    return r.apply(this, arguments);
                  };
                })(),
              ),
            m
          );
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      var n = t.memberTag,
        r = t.role;
      return babelHelpers.extends({}, e, {
        memberTag: n != null ? n : e.memberTag,
        role: r != null ? r : e.role,
      });
    }
    function d(e, t) {
      return (
        t == null || o("WAWebOrgOrder").compareUnsignedDecimalStrings(e, t) > 0
      );
    }
    l.applyOrgMemberDelta = s;
  },
  98,
);
