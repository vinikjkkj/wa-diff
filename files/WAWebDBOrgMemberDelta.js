__d(
  "WAWebDBOrgMemberDelta",
  ["WAWebDBOrg", "WAWebModelStorageUtils", "WAWebOrgOrder"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = t.added,
        r = t.memberUpdatedTsUsec,
        a = t.removedLids,
        i = t.removesViewer,
        l = t.updated,
        c = { status: "missing_org" };
      return (
        await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(
            [o("WAWebDBOrg").ORG_TABLE, o("WAWebDBOrg").ORG_CONTACT_TABLE],
            async function (t) {
              var d = t[0],
                m = t[1],
                p = d,
                _ = m,
                f = await p.get(e);
              if (f != null) {
                if (!u(r, f.memberUpdatedTsUsec)) {
                  c = { status: "stale" };
                  return;
                }
                if (i) {
                  (await p.remove(e),
                    await o("WAWebDBOrg").removeOrgRoster(_, e),
                    (c = { orgs: await p.all(), status: "viewer_removed" }));
                  return;
                }
                var g = Array.from(
                    new Set(
                      [].concat(
                        n.map(function (e) {
                          return e.lid;
                        }),
                        a,
                        l.map(function (e) {
                          return e.lid;
                        }),
                      ),
                    ),
                  ),
                  h = new Map(
                    (await _.anyOf(["lid"], g))
                      .filter(function (t) {
                        return t.orgId === e;
                      })
                      .map(function (e) {
                        return [e.lid, e];
                      }),
                  );
                (await Promise.all(
                  a.map(function (t) {
                    return _.remove([e, t]);
                  }),
                ),
                  await _.bulkCreateOrReplace(
                    n.map(function (t) {
                      return o("WAWebDBOrg").mergeOrgContactRow(
                        babelHelpers.extends({}, t, { orgId: e }),
                        h.get(t.lid),
                      );
                    }),
                  ));
                var y = new Set(a);
                await _.bulkCreateOrReplace(
                  l.flatMap(function (e) {
                    var t = h.get(e.lid);
                    return t == null || y.has(e.lid) ? [] : [s(t, e)];
                  }),
                );
                var C = babelHelpers.extends({}, f, { memberUpdatedTsUsec: r });
                (await p.createOrReplace(C),
                  (c = {
                    org: C,
                    rows: await o("WAWebDBOrg").readRowsByLids(_, g),
                    status: "applied",
                  }));
              }
            },
          ),
        c
      );
    }
    function s(e, t) {
      var n = t.memberTag,
        r = t.role;
      return babelHelpers.extends({}, e, {
        memberTag: n != null ? n : e.memberTag,
        role: r != null ? r : e.role,
      });
    }
    function u(e, t) {
      return (
        t == null || o("WAWebOrgOrder").compareUnsignedDecimalStrings(e, t) > 0
      );
    }
    l.applyOrgMemberDelta = e;
  },
  98,
);
