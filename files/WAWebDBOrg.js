__d(
  "WAWebDBOrg",
  [
    "Promise",
    "WAJids",
    "WAWebModelStorageUtils",
    "WAWebOrgOrder",
    "WAWebSchemaOrg",
    "WAWebSchemaOrgContact",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["memberListTsUsec"],
      s,
      u = "org",
      c = "org-contacts",
      d = "/",
      m = ":";
    function p() {
      return o("WAWebSchemaOrg").getOrgTable().all();
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length === 0) return [];
          var t = [];
          return (
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                [u],
                (function () {
                  var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      var r = n[0],
                        o = r,
                        a = yield o.bulkGet(
                          e.map(function (e) {
                            return e.orgId;
                          }),
                        );
                      ((t = e.map(function (e, t) {
                        return H(e, a[t]);
                      })),
                        yield o.bulkCreateOrReplace(t));
                    },
                  );
                  return function (e) {
                    return r.apply(this, arguments);
                  };
                })(),
              ),
            t
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = [];
          return (
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                [u, c],
                (function () {
                  var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (r) {
                      var o = r[0],
                        a = r[1],
                        i = o,
                        l = a,
                        u = yield i.all(),
                        c = new Set(
                          e.map(function (e) {
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
                      ((t = e.map(function (e) {
                        return H(e, d.get(e.orgId));
                      })),
                        t.length > 0 && (yield i.bulkCreateOrReplace(t)),
                        yield (s || (s = n("Promise"))).all(
                          m.map(function (e) {
                            return (s || (s = n("Promise"))).all([
                              i.remove(e),
                              q(l, e),
                            ]);
                          }),
                        ));
                    },
                  );
                  return function (e) {
                    return r.apply(this, arguments);
                  };
                })(),
              ),
            t
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              [u, c],
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    var n = t[0],
                      r = t[1],
                      o = n,
                      a = r;
                    (yield o.remove(e), yield q(a, e));
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            );
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length === 0) return [];
          var t = [];
          return (
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                [u, c],
                (function () {
                  var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (r) {
                      var o = r[0],
                        a = r[1],
                        i = o,
                        l = a,
                        u = yield i.bulkGet(e);
                      ((t = u.filter(Boolean).map(P)),
                        yield i.bulkCreateOrReplace(t),
                        yield (s || (s = n("Promise"))).all(
                          e.map(function (e) {
                            return q(l, e);
                          }),
                        ));
                    },
                  );
                  return function (e) {
                    return r.apply(this, arguments);
                  };
                })(),
              ),
            t
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return o("WAWebSchemaOrgContact")
        .getOrgContactTable()
        .between(["orgId", "lid"], [e, d], [e, m]);
    }
    function R(e) {
      return e.length === 0
        ? (s || (s = n("Promise"))).resolve([])
        : o("WAWebSchemaOrgContact").getOrgContactTable().anyOf(["lid"], e);
    }
    function L(e, t, n, r, o) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l) {
            var s = { org: null, rows: [] };
            return (
              yield o("WAWebModelStorageUtils")
                .getStorage()
                .lock(
                  [u, c],
                  (function () {
                    var o = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (n) {
                        var o = n[0],
                          u = n[1],
                          c = o,
                          p = u,
                          _ = yield c.bulkGet([e]),
                          f = _[0];
                        if (f == null)
                          throw r("err")(
                            "Cannot complete roster for missing org " + e,
                          );
                        var g = yield p.between(
                            ["orgId", "lid"],
                            [e, d],
                            [e, m],
                          ),
                          h = new Map(
                            g.map(function (e) {
                              return [e.lid, e];
                            }),
                          );
                        (yield q(p, e),
                          yield p.bulkCreateOrReplace(
                            t.map(function (t) {
                              return w(
                                babelHelpers.extends({}, t, { orgId: e }),
                                h.get(t.lid),
                              );
                            }),
                          ));
                        var y = N(
                          babelHelpers.extends({}, f, {
                            directoryIsComplete: i,
                            memberCount: a,
                          }),
                          l,
                        );
                        yield c.bulkCreateOrReplace([y]);
                        var C = new Set(
                          [].concat(
                            g.map(function (e) {
                              return e.lid;
                            }),
                            t.map(function (e) {
                              return e.lid;
                            }),
                          ),
                        );
                        s = { org: y, rows: yield M(p, Array.from(C)) };
                      },
                    );
                    return function (e) {
                      return o.apply(this, arguments);
                    };
                  })(),
                ),
              s
            );
          },
        )),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = Array.from(e.keys());
          if (t.length === 0) return [];
          var r = [];
          return (
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                [c],
                (function () {
                  var o = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      var o = n[0],
                        a = o,
                        i = new Map(
                          (yield a.anyOf(["lid"], t)).map(function (e) {
                            return [A(e.orgId, e.lid), e];
                          }),
                        );
                      ((r = Array.from(e).flatMap(function (e) {
                        var t = e[0],
                          n = e[1];
                        return n.map(function (e) {
                          return w(
                            babelHelpers.extends({}, e, { lid: t }),
                            i.get(A(e.orgId, t)),
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
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length === 0) return [];
          var t = [];
          return (
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                [c],
                (function () {
                  var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      var r = n[0],
                        o = r,
                        a = Array.from(
                          new Set(
                            e.map(function (e) {
                              return e.lid;
                            }),
                          ),
                        ),
                        i = new Map(
                          (yield o.anyOf(["lid"], a)).map(function (e) {
                            return [A(e.orgId, e.lid), e];
                          }),
                        );
                      (yield o.bulkCreateOrReplace(
                        e.map(function (e) {
                          return w(e, i.get(A(e.orgId, e.lid)));
                        }),
                      ),
                        (t = yield M(o, a)));
                    },
                  );
                  return function (e) {
                    return r.apply(this, arguments);
                  };
                })(),
              ),
            t
          );
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t, n) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = !1;
          return (
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                [u],
                (function () {
                  var o = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      var o = n[0],
                        i = o,
                        l = yield i.get(e);
                      (l == null ? void 0 : l.directoryIsComplete) !== !0 ||
                        l.memberUpdatedTsUsec !== t ||
                        (yield i.createOrReplace(
                          babelHelpers.extends({}, l, {
                            memberCount: r,
                            memberListTsUsec: t,
                          }),
                        ),
                        (a = !0));
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
        $.apply(this, arguments)
      );
    }
    function P(t) {
      var n = t.memberListTsUsec,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return babelHelpers.extends({}, r, { directoryIsComplete: !1 });
    }
    function N(e, t) {
      if (t == null) return e;
      var n =
        e.memberUpdatedTsUsec == null ||
        o("WAWebOrgOrder").compareUnsignedDecimalStrings(
          t,
          e.memberUpdatedTsUsec,
        ) > 0
          ? t
          : e.memberUpdatedTsUsec;
      return babelHelpers.extends({}, e, {
        memberListTsUsec: t,
        memberUpdatedTsUsec: n,
      });
    }
    function M(e, t) {
      return t.length === 0
        ? (s || (s = n("Promise"))).resolve([])
        : e.anyOf(["lid"], t);
    }
    function w(e, t) {
      var n,
        r,
        o,
        a,
        i =
          e.memberName === "" && t != null
            ? babelHelpers.extends({}, t, {
                firstName: (n = t.firstName) != null ? n : "",
              })
            : e;
      return V({
        firstName: i.firstName,
        lastName: i.lastName,
        lid: e.lid,
        memberName: i.memberName,
        memberTag: e.memberTag,
        orgId: e.orgId,
        phoneNumber:
          (r = e.phoneNumber) != null ? r : t == null ? void 0 : t.phoneNumber,
        role: (o = e.role) != null ? o : t == null ? void 0 : t.role,
        username:
          (a = e.username) != null ? a : t == null ? void 0 : t.username,
      });
    }
    function A(e, t) {
      return e + "" + t;
    }
    function F(e, t, n, r) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a) {
            var i = !1,
              l = o("WAWebModelStorageUtils")
                .getStorage()
                .lock(
                  [u, c],
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
        O.apply(this, arguments)
      );
    }
    function B(e, t, n) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = !1,
            i = o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                [u, c],
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
        W.apply(this, arguments)
      );
    }
    function q(e, t) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield e.bulkDeleteRange(["orgId", "lid"], [t, d], [t, m]);
        })),
        U.apply(this, arguments)
      );
    }
    function V(e) {
      var t = {
        orgId: e.orgId,
        lid: e.lid,
        memberName: e.memberName,
        memberTag: e.memberTag,
      };
      return (
        e.firstName != null && (t.firstName = e.firstName),
        e.lastName != null && e.lastName !== "" && (t.lastName = e.lastName),
        e.role != null && (t.role = e.role),
        e.username != null && (t.username = e.username),
        e.phoneNumber != null && (t.phoneNumber = e.phoneNumber),
        t
      );
    }
    function H(e, t) {
      var n = { orgId: e.orgId, name: e.name };
      (G(n, e), z(n, e, t));
      var r = Q(e, t);
      return (r != null && (n.directoryIsComplete = r), n);
    }
    function G(e, t) {
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
    function z(e, t, n) {
      var r = K(t.orgUpdatedTsUsec, n == null ? void 0 : n.orgUpdatedTsUsec);
      r != null && (e.orgUpdatedTsUsec = r);
      var o = K(
        t.memberUpdatedTsUsec,
        n == null ? void 0 : n.memberUpdatedTsUsec,
      );
      o != null && (e.memberUpdatedTsUsec = o);
      var a = K(t.memberListTsUsec, n == null ? void 0 : n.memberListTsUsec);
      a != null && (e.memberListTsUsec = a);
      var i = K(j(t.managedGroups), n == null ? void 0 : n.managedGroups);
      i != null && (e.managedGroups = i);
      var l = K(t.managedChannels, n == null ? void 0 : n.managedChannels);
      l != null && (e.managedChannels = l);
    }
    function j(e) {
      return e == null ? e : e.map(o("WAJids").toGroupJid);
    }
    function K(e, t) {
      return e === void 0 ? t : e;
    }
    function Q(e, t) {
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
    ((l.ORG_TABLE = u),
      (l.ORG_CONTACT_TABLE = c),
      (l.getOrgs = p),
      (l.putOrgs = _),
      (l.replaceOrgs = g),
      (l.removeOrg = y),
      (l.clearOrgDirectories = b),
      (l.getOrgContacts = S),
      (l.getOrgContactsByLids = R),
      (l.replaceCompleteOrgRoster = L),
      (l.replaceOrgMembershipsForLids = k),
      (l.mergeOrgContacts = T),
      (l.markOrgDirectoryFresh = x),
      (l.readRowsByLids = M),
      (l.mergeOrgContactRow = w),
      (l.updateOrgMemberRole = F),
      (l.removeOrgMember = B),
      (l.removeOrgRoster = q));
  },
  98,
);
