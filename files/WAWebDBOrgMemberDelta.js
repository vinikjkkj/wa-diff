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
            s = { status: "missing_org" };
          return (
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                [o("WAWebDBOrg").ORG_TABLE, o("WAWebDBOrg").ORG_CONTACT_TABLE],
                (function () {
                  var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (r) {
                      var u = r[0],
                        d = r[1],
                        m = u,
                        p = d,
                        _ = yield m.get(t);
                      if (_ != null) {
                        if (!c(i, _.memberUpdatedTsUsec)) {
                          s = { status: "stale" };
                          return;
                        }
                        var f = Array.from(
                            new Set(
                              [].concat(
                                a.map(function (e) {
                                  return e.lid;
                                }),
                                l,
                              ),
                            ),
                          ),
                          g = new Map(
                            (yield p.anyOf(["lid"], f))
                              .filter(function (e) {
                                return e.orgId === t;
                              })
                              .map(function (e) {
                                return [e.lid, e];
                              }),
                          );
                        (yield (e || (e = n("Promise"))).all(
                          l.map(function (e) {
                            return p.remove([t, e]);
                          }),
                        ),
                          yield p.bulkCreateOrReplace(
                            a.map(function (e) {
                              return o("WAWebDBOrg").mergeOrgContactRow(
                                babelHelpers.extends({}, e, { orgId: t }),
                                g.get(e.lid),
                              );
                            }),
                          ));
                        var h = babelHelpers.extends({}, _, {
                          memberUpdatedTsUsec: i,
                        });
                        (yield m.createOrReplace(h),
                          (s = {
                            org: h,
                            rows: yield o("WAWebDBOrg").readRowsByLids(p, f),
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
            s
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
