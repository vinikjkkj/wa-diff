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
                          return N(e, o[t]);
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
                            return N(e, d.get(e.orgId));
                          }),
                        )),
                        yield (e || (e = n("Promise"))).all(
                          m.map(function (t) {
                            return (e || (e = n("Promise"))).all([
                              l.remove(t),
                              x(s, t),
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
                    (yield o.remove(e), yield x(a, e));
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
    function b(t) {
      return t.length === 0
        ? (e || (e = n("Promise"))).resolve([])
        : o("WAWebSchemaOrgContact").getOrgContactTable().anyOf(["lid"], t);
    }
    function v(e, t, n, r) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                        (yield x(u, e),
                          yield u.bulkCreateOrReplace(
                            t.map(function (t) {
                              return P(
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
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = Array.from(e.keys());
          if (t.length === 0) return [];
          var r = [];
          return (
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                [u],
                (function () {
                  var o = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      var o = n[0],
                        a = o,
                        i = new Map(
                          (yield a.anyOf(["lid"], t)).map(function (e) {
                            return [E(e.orgId, e.lid), e.memberName];
                          }),
                        );
                      ((r = Array.from(e).flatMap(function (e) {
                        var t = e[0],
                          n = e[1];
                        return n.map(function (e) {
                          var n;
                          return P(
                            babelHelpers.extends({}, e, {
                              lid: t,
                              memberName:
                                e.memberName === ""
                                  ? (n = i.get(E(e.orgId, t))) != null
                                    ? n
                                    : ""
                                  : e.memberName,
                            }),
                          );
                        });
                      })),
                        yield a.bulkRemoveByIndex(["lid"], t),
                        r.length > 0 && (yield a.bulkCreateOrReplace(r)));
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
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      return e + "" + t;
    }
    function k(e, t, n, r) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(
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
        I.apply(this, arguments)
      );
    }
    function T(e, t, n) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
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
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield e.bulkDeleteRange(["orgId", "lid"], [t, c], [t, d]);
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
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
    function N(e, t) {
      var n = { orgId: e.orgId, name: e.name };
      (M(n, e), w(n, e, t));
      var r = F(e, t);
      return (r != null && (n.directoryIsComplete = r), n);
    }
    function M(e, t) {
      (t.description != null && (e.description = t.description),
        t.isMemberDirectoryEnabled != null &&
          (e.isMemberDirectoryEnabled = t.isMemberDirectoryEnabled),
        t.memberCount != null && (e.memberCount = t.memberCount),
        t.memberTagOptions != null && (e.memberTagOptions = t.memberTagOptions),
        t.iconHandle != null && (e.iconHandle = t.iconHandle),
        t.iconThumbUrl != null && (e.iconThumbUrl = t.iconThumbUrl),
        t.iconFullUrl != null && (e.iconFullUrl = t.iconFullUrl),
        t.viewerRole != null && (e.viewerRole = t.viewerRole));
    }
    function w(e, t, n) {
      var r = A(t.orgUpdatedTsUsec, n == null ? void 0 : n.orgUpdatedTsUsec);
      r != null && (e.orgUpdatedTsUsec = r);
      var o = A(
        t.memberUpdatedTsUsec,
        n == null ? void 0 : n.memberUpdatedTsUsec,
      );
      o != null && (e.memberUpdatedTsUsec = o);
      var a = A(t.managedGroups, n == null ? void 0 : n.managedGroups);
      a != null && (e.managedGroups = a);
      var i = A(t.managedChannels, n == null ? void 0 : n.managedChannels);
      i != null && (e.managedChannels = i);
    }
    function A(e, t) {
      return e === void 0 ? t : e;
    }
    function F(e, t) {
      if (
        e.directoryIsComplete != null ||
        (t == null ? void 0 : t.directoryIsComplete) == null
      )
        return e.directoryIsComplete;
      var n = e.memberCount != null && e.memberCount !== t.memberCount,
        r =
          e.isMemberDirectoryEnabled != null &&
          e.isMemberDirectoryEnabled !== t.isMemberDirectoryEnabled;
      return n || r ? !1 : t.directoryIsComplete;
    }
    ((l.getOrgs = m),
      (l.putOrgs = p),
      (l.replaceOrgs = f),
      (l.removeOrg = h),
      (l.getOrgContacts = C),
      (l.getOrgContactsByLids = b),
      (l.replaceCompleteOrgRoster = v),
      (l.replaceOrgMembershipsForLids = R),
      (l.updateOrgMemberRole = k),
      (l.removeOrgMember = T));
  },
  98,
);
