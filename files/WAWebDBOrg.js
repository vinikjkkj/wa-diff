__d(
  "WAWebDBOrg",
  [
    "WAJids",
    "WAWebModelStorageUtils",
    "WAWebOrgOrder",
    "WAWebSchemaOrg",
    "WAWebSchemaOrgContact",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["memberListTsUsec"],
      s = "org",
      u = "org-contacts",
      c = "/",
      d = ":";
    function m() {
      return o("WAWebSchemaOrg").getOrgTable().all();
    }
    async function p(e) {
      if (e.length === 0) return [];
      var t = [];
      return (
        await o("WAWebModelStorageUtils")
          .getStorage()
          .lock([s], async function (n) {
            var r = n[0],
              o = r,
              a = await o.bulkGet(
                e.map(function (e) {
                  return e.orgId;
                }),
              );
            ((t = e.map(function (e, t) {
              return P(e, a[t]);
            })),
              await o.bulkCreateOrReplace(t));
          }),
        t
      );
    }
    async function _(e) {
      var t = [];
      return (
        await o("WAWebModelStorageUtils")
          .getStorage()
          .lock([s, u], async function (n) {
            var r = n[0],
              o = n[1],
              a = r,
              i = o,
              l = await a.all(),
              s = new Set(
                e.map(function (e) {
                  return e.orgId;
                }),
              ),
              u = new Map(
                l.map(function (e) {
                  return [e.orgId, e];
                }),
              ),
              c = l
                .map(function (e) {
                  return e.orgId;
                })
                .filter(function (e) {
                  return !s.has(e);
                });
            ((t = e.map(function (e) {
              return P(e, u.get(e.orgId));
            })),
              t.length > 0 && (await a.bulkCreateOrReplace(t)),
              await Promise.all(
                c.map(function (e) {
                  return Promise.all([a.remove(e), x(i, e)]);
                }),
              ));
          }),
        t
      );
    }
    async function f(e) {
      await o("WAWebModelStorageUtils")
        .getStorage()
        .lock([s, u], async function (t) {
          var n = t[0],
            r = t[1],
            o = n,
            a = r;
          (await o.remove(e), await x(a, e));
        });
    }
    async function g(e) {
      if (e.length === 0) return [];
      var t = [];
      return (
        await o("WAWebModelStorageUtils")
          .getStorage()
          .lock([s, u], async function (n) {
            var r = n[0],
              o = n[1],
              a = r,
              i = o,
              l = await a.bulkGet(e);
            ((t = l.filter(Boolean).map(R)),
              await a.bulkCreateOrReplace(t),
              await Promise.all(
                e.map(function (e) {
                  return x(i, e);
                }),
              ));
          }),
        t
      );
    }
    function h(e) {
      return o("WAWebSchemaOrgContact")
        .getOrgContactTable()
        .between(["orgId", "lid"], [e, c], [e, d]);
    }
    function y(e) {
      return e.length === 0
        ? Promise.resolve([])
        : o("WAWebSchemaOrgContact").getOrgContactTable().anyOf(["lid"], e);
    }
    async function C(e, t, n, a, i) {
      var l = { org: null, rows: [] };
      return (
        await o("WAWebModelStorageUtils")
          .getStorage()
          .lock([s, u], async function (o) {
            var s = o[0],
              u = o[1],
              m = s,
              p = u,
              _ = await m.bulkGet([e]),
              f = _[0];
            if (f == null)
              throw r("err")("Cannot complete roster for missing org " + e);
            var g = await p.between(["orgId", "lid"], [e, c], [e, d]),
              h = new Map(
                g.map(function (e) {
                  return [e.lid, e];
                }),
              );
            (await x(p, e),
              await p.bulkCreateOrReplace(
                t.map(function (t) {
                  return k(
                    babelHelpers.extends({}, t, { orgId: e }),
                    h.get(t.lid),
                  );
                }),
              ));
            var y = L(
              babelHelpers.extends({}, f, {
                directoryIsComplete: a,
                memberCount: n,
              }),
              i,
            );
            await m.bulkCreateOrReplace([y]);
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
            l = { org: y, rows: await E(p, Array.from(C)) };
          }),
        l
      );
    }
    async function b(e) {
      var t = Array.from(e.keys());
      if (t.length === 0) return [];
      var n = [];
      return (
        await o("WAWebModelStorageUtils")
          .getStorage()
          .lock([u], async function (r) {
            var o = r[0],
              a = o,
              i = new Map(
                (await a.anyOf(["lid"], t)).map(function (e) {
                  return [I(e.orgId, e.lid), e];
                }),
              );
            ((n = Array.from(e).flatMap(function (e) {
              var t = e[0],
                n = e[1];
              return n.map(function (e) {
                return k(
                  babelHelpers.extends({}, e, { lid: t }),
                  i.get(I(e.orgId, t)),
                );
              });
            })),
              await a.bulkRemoveByIndex(["lid"], t),
              n.length > 0 && (await a.bulkCreateOrReplace(n)));
          }),
        n
      );
    }
    async function v(e) {
      if (e.length === 0) return [];
      var t = [];
      return (
        await o("WAWebModelStorageUtils")
          .getStorage()
          .lock([u], async function (n) {
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
                (await o.anyOf(["lid"], a)).map(function (e) {
                  return [I(e.orgId, e.lid), e];
                }),
              );
            (await o.bulkCreateOrReplace(
              e.map(function (e) {
                return k(e, i.get(I(e.orgId, e.lid)));
              }),
            ),
              (t = await E(o, a)));
          }),
        t
      );
    }
    async function S(e, t, n) {
      var r = !1;
      return (
        await o("WAWebModelStorageUtils")
          .getStorage()
          .lock([s], async function (o) {
            var a = o[0],
              i = a,
              l = await i.get(e);
            (l == null ? void 0 : l.directoryIsComplete) !== !0 ||
              l.memberUpdatedTsUsec !== t ||
              (await i.createOrReplace(
                babelHelpers.extends({}, l, {
                  memberCount: n,
                  memberListTsUsec: t,
                }),
              ),
              (r = !0));
          }),
        r
      );
    }
    function R(t) {
      var n = t.memberListTsUsec,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return babelHelpers.extends({}, r, { directoryIsComplete: !1 });
    }
    function L(e, t) {
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
    function E(e, t) {
      return t.length === 0 ? Promise.resolve([]) : e.anyOf(["lid"], t);
    }
    function k(e, t) {
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
      return $({
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
    function I(e, t) {
      return e + "" + t;
    }
    async function T(e, t, n, r) {
      var a = !1,
        i = o("WAWebModelStorageUtils")
          .getStorage()
          .lock([s, u], async function (o) {
            var i = o[0],
              l = o[1],
              s = i,
              u = l,
              c = await s.get(e),
              d = await u.get([e, t]);
            if (
              (d != null &&
                (await u.createOrReplace(
                  babelHelpers.extends({}, d, { role: n }),
                )),
              !(c == null || r == null))
            ) {
              if (c.memberCount !== r) {
                await s.createOrReplace(
                  babelHelpers.extends({}, c, {
                    directoryIsComplete: !1,
                    memberCount: r,
                  }),
                );
                return;
              }
              a = d != null;
            }
          });
      return (await i, a);
    }
    async function D(e, t, n) {
      var r = !1,
        a = o("WAWebModelStorageUtils")
          .getStorage()
          .lock([s, u], async function (o) {
            var a = o[0],
              i = o[1],
              l = a,
              s = i,
              u = await l.get(e),
              c = await s.get([e, t]),
              d =
                (u == null ? void 0 : u.memberCount) == null || c == null
                  ? null
                  : Math.max(0, u.memberCount - 1),
              m = n != null && n !== d,
              p = c == null ? null : n != null ? n : d;
            (await s.remove([e, t]),
              u != null && c == null && n != null
                ? await l.createOrReplace(
                    babelHelpers.extends({}, u, {
                      directoryIsComplete: !1,
                      memberCount: n,
                    }),
                  )
                : u != null &&
                  p != null &&
                  (await l.createOrReplace(
                    m
                      ? babelHelpers.extends({}, u, {
                          directoryIsComplete: !1,
                          memberCount: p,
                        })
                      : babelHelpers.extends({}, u, { memberCount: p }),
                  )),
              (r = n != null && n === d));
          });
      return (await a, r);
    }
    async function x(e, t) {
      await e.bulkDeleteRange(["orgId", "lid"], [t, c], [t, d]);
    }
    function $(e) {
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
    function P(e, t) {
      var n = { orgId: e.orgId, name: e.name };
      (N(n, e), M(n, e, t));
      var r = O(e, t);
      return (r != null && (n.directoryIsComplete = r), n);
    }
    function N(e, t) {
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
    function M(e, t, n) {
      var r = F(t.orgUpdatedTsUsec, n == null ? void 0 : n.orgUpdatedTsUsec);
      r != null && (e.orgUpdatedTsUsec = r);
      var o = F(
        t.memberUpdatedTsUsec,
        n == null ? void 0 : n.memberUpdatedTsUsec,
      );
      o != null && (e.memberUpdatedTsUsec = o);
      var a = F(t.memberListTsUsec, n == null ? void 0 : n.memberListTsUsec);
      a != null && (e.memberListTsUsec = a);
      var i = F(w(t.managedGroups), n == null ? void 0 : n.managedGroups);
      i != null && (e.managedGroups = i);
      var l = F(t.managedChannels, n == null ? void 0 : n.managedChannels);
      l != null && (e.managedChannels = l);
    }
    function w(e) {
      return e == null ? e : e.map(A);
    }
    function A(e) {
      var t = o("WAJids").validateGroupJid(e);
      if (t == null)
        throw r("err")("Org managedGroups entry is not a group jid");
      return t;
    }
    function F(e, t) {
      return e === void 0 ? t : e;
    }
    function O(e, t) {
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
    ((l.ORG_TABLE = s),
      (l.ORG_CONTACT_TABLE = u),
      (l.getOrgs = m),
      (l.putOrgs = p),
      (l.replaceOrgs = _),
      (l.removeOrg = f),
      (l.clearOrgDirectories = g),
      (l.getOrgContacts = h),
      (l.getOrgContactsByLids = y),
      (l.replaceCompleteOrgRoster = C),
      (l.replaceOrgMembershipsForLids = b),
      (l.mergeOrgContacts = v),
      (l.markOrgDirectoryFresh = S),
      (l.readRowsByLids = E),
      (l.mergeOrgContactRow = k),
      (l.updateOrgMemberRole = T),
      (l.removeOrgMember = D),
      (l.removeOrgRoster = x));
  },
  98,
);
