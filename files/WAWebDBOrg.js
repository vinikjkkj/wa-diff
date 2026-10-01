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
          if (e.length !== 0) {
            var t = o("WAWebModelStorageUtils")
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
                          return $(e, o[t]);
                        }),
                      );
                    },
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              );
            yield t;
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = 0;
          return (
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                [s, u],
                (function () {
                  var o = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (o) {
                      var a = o[0],
                        i = o[1],
                        l = a,
                        s = i,
                        u = yield l.all(),
                        c = new Set(
                          t.map(function (e) {
                            return e.orgId;
                          }),
                        ),
                        d = new Map(
                          u.map(function (e) {
                            return [e.orgId, e];
                          }),
                        ),
                        m = u
                          .map(function (e) {
                            return e.orgId;
                          })
                          .filter(function (e) {
                            return !c.has(e);
                          });
                      (t.length > 0 &&
                        (yield l.bulkCreateOrReplace(
                          t.map(function (e) {
                            return $(e, d.get(e.orgId));
                          }),
                        )),
                        yield (e || (e = n("Promise"))).all(
                          m.map(function (t) {
                            return (e || (e = n("Promise"))).all([
                              l.remove(t),
                              T(s, t),
                            ]);
                          }),
                        ),
                        (r = m.length));
                    },
                  );
                  return function (e) {
                    return o.apply(this, arguments);
                  };
                })(),
              ),
            r
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
                    (yield o.remove(e), yield T(a, e));
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
                          c = yield s.bulkGet([e]),
                          d = c[0];
                        if (d == null)
                          throw r("err")(
                            "Cannot complete roster for missing org " + e,
                          );
                        (yield T(u, e),
                          yield u.bulkCreateOrReplace(
                            t.map(function (t) {
                              return x(
                                babelHelpers.extends({}, t, { orgId: e }),
                              );
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
                ),
              !0
            );
          },
        )),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = Array.from(e.keys());
          if (t.length === 0) return [];
          var r = Array.from(e).flatMap(function (e) {
            var t = e[0],
              n = e[1];
            return n.map(function (e) {
              return x(babelHelpers.extends({}, e, { lid: t }));
            });
          });
          return (
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                [u],
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var n = e[0],
                        o = n;
                      (yield o.bulkRemoveByIndex(["lid"], t),
                        r.length > 0 && (yield o.bulkCreateOrReplace(r)));
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            r
          );
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t, n, r) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a) {
            var i = !1,
              l = o("WAWebModelStorageUtils")
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
                );
            return (yield l, i);
          },
        )),
        E.apply(this, arguments)
      );
    }
    function k(e, t, n) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = !1,
            i = o("WAWebModelStorageUtils")
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
                                memberCount: r,
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
              );
          return (yield i, a);
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield e.bulkDeleteRange(["orgId", "lid"], [t, c], [t, d]);
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
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
    function $(e, t) {
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
      (l.replaceOrgMembershipsForLids = S),
      (l.updateOrgMemberRole = L),
      (l.removeOrgMember = k));
  },
  98,
);
