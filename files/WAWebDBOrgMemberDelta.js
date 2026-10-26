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
            u = { status: "missing_org" };
          return (
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                [o("WAWebDBOrg").ORG_TABLE, o("WAWebDBOrg").ORG_CONTACT_TABLE],
                (function () {
                  var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (r) {
                      var d = r[0],
                        m = r[1],
                        p = d,
                        _ = m,
                        f = yield p.get(t);
                      if (f != null) {
                        if (!c(i, f.memberUpdatedTsUsec)) {
                          u = { status: "stale" };
                          return;
                        }
                        if (s) {
                          (yield p.remove(t),
                            yield o("WAWebDBOrg").removeOrgRoster(_, t),
                            (u = {
                              orgs: yield p.all(),
                              status: "viewer_removed",
                            }));
                          return;
                        }
                        var g = Array.from(
                            new Set(
                              [].concat(
                                a.map(function (e) {
                                  return e.lid;
                                }),
                                l,
                              ),
                            ),
                          ),
                          h = new Map(
                            (yield _.anyOf(["lid"], g))
                              .filter(function (e) {
                                return e.orgId === t;
                              })
                              .map(function (e) {
                                return [e.lid, e];
                              }),
                          );
                        (yield (e || (e = n("Promise"))).all(
                          l.map(function (e) {
                            return _.remove([t, e]);
                          }),
                        ),
                          yield _.bulkCreateOrReplace(
                            a.map(function (e) {
                              return o("WAWebDBOrg").mergeOrgContactRow(
                                babelHelpers.extends({}, e, { orgId: t }),
                                h.get(e.lid),
                              );
                            }),
                          ));
                        var y = babelHelpers.extends({}, f, {
                          memberUpdatedTsUsec: i,
                        });
                        (yield p.createOrReplace(y),
                          (u = {
                            org: y,
                            rows: yield o("WAWebDBOrg").readRowsByLids(_, g),
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
            u
          );
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      return (
        t == null || o("WAWebOrgOrder").compareUnsignedDecimalStrings(e, t) > 0
      );
    }
    l.applyOrgMemberDelta = s;
  },
  98,
);
