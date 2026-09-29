__d(
  "WAWebDBOrg",
  [
    "Promise",
    "WAWebModelStorageUtils",
    "WAWebSchemaOrg",
    "WAWebSchemaOrgContact",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "org",
      u = "org-contacts",
      c = "/",
      d = ":";
    function m() {
      return o("WAWebSchemaOrg").getOrgTable().all();
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e.length !== 0 &&
            (yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                [s],
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      var n = t[0],
                        r = n,
                        o = yield r.bulkGet(
                          e.map(function (e) {
                            return e.orgId;
                          }),
                        );
                      yield r.bulkCreateOrReplace(
                        e.map(function (e, t) {
                          return D(e, o[t]);
                        }),
                      );
                    },
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              ));
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = null;
          return (
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                [s, u],
                (function () {
                  var o = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (o) {
                      var i = o[0],
                        l = o[1],
                        s = i,
                        u = l,
                        c = yield s.all();
                      if (r()) {
                        var d = new Set(
                            t.map(function (e) {
                              return e.orgId;
                            }),
                          ),
                          m = new Map(
                            c.map(function (e) {
                              return [e.orgId, e];
                            }),
                          ),
                          p = c
                            .map(function (e) {
                              return e.orgId;
                            })
                            .filter(function (e) {
                              return !d.has(e);
                            });
                        (t.length > 0 &&
                          (yield s.bulkCreateOrReplace(
                            t.map(function (e) {
                              return D(e, m.get(e.orgId));
                            }),
                          )),
                          yield (e || (e = n("Promise"))).all(
                            p.map(function (t) {
                              return (e || (e = n("Promise"))).all([
                                s.remove(t),
                                k(u, t),
                              ]);
                            }),
                          ),
                          (a = p.length));
                      }
                    },
                  );
                  return function (e) {
                    return o.apply(this, arguments);
                  };
                })(),
              ),
            a
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              [s, u],
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    var n = t[0],
                      r = t[1],
                      o = n,
                      a = r;
                    (yield o.remove(e), yield k(a, e));
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            );
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return o("WAWebSchemaOrgContact")
        .getOrgContactTable()
        .between(["orgId", "lid"], [e, c], [e, d]);
    }
    function b(e, t, n, r) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i) {
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                [s, u],
                (function () {
                  var o = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      var o = n[0],
                        l = n[1],
                        s = o,
                        u = l,
                        c = yield s.bulkGet([e]),
                        d = c[0];
                      if (d == null)
                        throw r("err")(
                          "Cannot complete roster for missing org " + e,
                        );
                      (yield k(u, e),
                        yield u.bulkCreateOrReplace(
                          t.map(function (t) {
                            return T(babelHelpers.extends({}, t, { orgId: e }));
                          }),
                        ),
                        yield s.bulkCreateOrReplace([
                          babelHelpers.extends({}, d, {
                            directoryIsComplete: i,
                            memberCount: a,
                          }),
                        ]));
                    },
                  );
                  return function (e) {
                    return o.apply(this, arguments);
                  };
                })(),
              );
          },
        )),
        v.apply(this, arguments)
      );
    }
    function S(e, t, n, r) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a) {
            var i = !1;
            return (
              yield o("WAWebModelStorageUtils")
                .getStorage()
                .lock(
                  [s, u],
                  (function () {
                    var o = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (n) {
                        var o = n[0],
                          l = n[1],
                          s = o,
                          u = l,
                          c = yield s.get(e),
                          d = yield u.get([e, t]);
                        if (
                          (d != null &&
                            (yield u.createOrReplace(
                              babelHelpers.extends({}, d, { role: r }),
                            )),
                          !(c == null || a == null))
                        ) {
                          if (c.memberCount !== a) {
                            yield s.createOrReplace(
                              babelHelpers.extends({}, c, {
                                directoryIsComplete: !1,
                                memberCount: a,
                              }),
                            );
                            return;
                          }
                          i = d != null;
                        }
                      },
                    );
                    return function (e) {
                      return o.apply(this, arguments);
                    };
                  })(),
                ),
              i
            );
          },
        )),
        R.apply(this, arguments)
      );
    }
    function L(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = !1;
          return (
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                [s, u],
                (function () {
                  var o = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      var o = n[0],
                        i = n[1],
                        l = o,
                        s = i,
                        u = yield l.get(e),
                        c = yield s.get([e, t]),
                        d =
                          (u == null ? void 0 : u.memberCount) == null ||
                          c == null
                            ? null
                            : Math.max(0, u.memberCount - 1),
                        m = r != null && r !== d,
                        p = c == null ? null : r != null ? r : d;
                      (yield s.remove([e, t]),
                        u != null && c == null && r != null
                          ? yield l.createOrReplace(
                              babelHelpers.extends({}, u, {
                                directoryIsComplete: !1,
                              }),
                            )
                          : u != null &&
                            p != null &&
                            (yield l.createOrReplace(
                              m
                                ? babelHelpers.extends({}, u, {
                                    directoryIsComplete: !1,
                                    memberCount: p,
                                  })
                                : babelHelpers.extends({}, u, {
                                    memberCount: p,
                                  }),
                            )),
                        (a = r != null && r === d));
                    },
                  );
                  return function (e) {
                    return o.apply(this, arguments);
                  };
                })(),
              ),
            a
          );
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield e.bulkDeleteRange(["orgId", "lid"], [t, c], [t, d]);
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      var t = {
        orgId: e.orgId,
        lid: e.lid,
        memberName: e.memberName,
        memberTag: e.memberTag,
      };
      return (
        e.role != null && (t.role = e.role),
        e.username != null && (t.username = e.username),
        e.phoneNumber != null && (t.phoneNumber = e.phoneNumber),
        t
      );
    }
    function D(e, t) {
      var n,
        r,
        a = {
          orgId: e.orgId,
          name: e.name,
          viewerRole:
            (n =
              (r = e.viewerRole) != null
                ? r
                : t == null
                  ? void 0
                  : t.viewerRole) != null
              ? n
              : o("WAWebSchemaOrg").OrgMemberRole.Member,
        };
      if (
        (e.description != null && (a.description = e.description),
        e.isMemberDirectoryEnabled != null &&
          (a.isMemberDirectoryEnabled = e.isMemberDirectoryEnabled),
        e.memberCount != null && (a.memberCount = e.memberCount),
        e.memberTagOptions != null && (a.memberTagOptions = e.memberTagOptions),
        e.iconHandle != null && (a.iconHandle = e.iconHandle),
        e.iconThumbUrl != null && (a.iconThumbUrl = e.iconThumbUrl),
        e.iconFullUrl != null && (a.iconFullUrl = e.iconFullUrl),
        e.managedGroups != null && (a.managedGroups = e.managedGroups),
        e.managedChannels != null && (a.managedChannels = e.managedChannels),
        e.directoryIsComplete != null)
      )
        a.directoryIsComplete = e.directoryIsComplete;
      else if ((t == null ? void 0 : t.directoryIsComplete) != null) {
        var i = e.memberCount != null && e.memberCount !== t.memberCount,
          l =
            e.isMemberDirectoryEnabled != null &&
            e.isMemberDirectoryEnabled !== t.isMemberDirectoryEnabled;
        a.directoryIsComplete = i || l ? !1 : t.directoryIsComplete;
      }
      return a;
    }
    ((l.getOrgs = m),
      (l.putOrgs = p),
      (l.replaceOrgs = f),
      (l.removeOrg = h),
      (l.getOrgContacts = C),
      (l.replaceCompleteOrgRoster = b),
      (l.updateOrgMemberRole = S),
      (l.removeOrgMember = L));
  },
  98,
);
