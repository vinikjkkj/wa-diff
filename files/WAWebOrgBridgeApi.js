__d(
  "WAWebOrgBridgeApi",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadedRetriable",
    "WAWebOrgCollection",
    "WAWebOrgContactIdentitySync",
    "WAWebOrgMemberCollection",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("JSResourceForInteraction")("WAWebBootstrapOrgDirectory")
            .__setRef("WAWebOrgBridgeApi")
            .load();
        }),
        "OrgDirectoryBootstrap",
      ),
      c = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("JSResourceForInteraction")("WAWebOrgBackgroundSyncAction")
            .__setRef("WAWebOrgBridgeApi")
            .load();
        }),
        "OrgBackgroundSync",
      ),
      d = {
        applyOrgContactRows: p,
        applyOrgRows: m,
        bootstrapOrgs: function () {
          u()
            .then(function (e) {
              return e.bootstrapOrgs();
            })
            .catch(function (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-directory] bootstrap failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("org-directory-bootstrap-failed");
            });
        },
        syncOrgsInBackground: function (t) {
          c()
            .then(function (e) {
              return e.syncOrgsInBackground(t);
            })
            .catch(function (e) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-directory] background sync failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("org-background-sync-failed");
            });
        },
      };
    function m(e) {
      var t = e.isFullList,
        n = e.rows,
        r = b();
      if (t) {
        var a = new Set(
            n.map(function (e) {
              return e.orgId;
            }),
          ),
          i = o("WAWebOrgCollection")
            .OrgCollection.getModelsArray()
            .filter(function (e) {
              return !a.has(e.id);
            });
        if (i.length > 0) {
          var l = i.flatMap(function (e) {
            return y(e.id);
          });
          (o("WAWebOrgCollection").OrgCollection.remove(i),
            i.forEach(function (e) {
              return e.members.clearMembers();
            }));
          var s = i.map(function (e) {
            return e.id;
          });
          (o("WAWebOrgContactIdentitySync").syncContactOrgIdentity(l),
            o("WAWebOrgCollection").OrgCollection.notifyMembersApplied(s, l));
        }
      }
      (o("WAWebOrgCollection").OrgCollection.addRows(n),
        v(r, b()) ||
          o("WAWebOrgContactIdentitySync").syncAllContactOrgIdentity());
    }
    function p(e) {
      var t = o("WAWebOrgCollection")
        .OrgCollection.filter(function (t) {
          return e.lids.some(function (e) {
            return t.members.get(e) != null;
          });
        })
        .map(function (e) {
          return e.id;
        });
      (h(e, null),
        o("WAWebOrgContactIdentitySync").syncContactOrgIdentity(e.lids),
        o("WAWebOrgCollection").OrgCollection.notifyMembersApplied(
          [].concat(
            t,
            e.rows.map(function (e) {
              return e.orgId;
            }),
          ),
          e.lids,
        ));
    }
    function _(e) {
      var t = e.createModels,
        n = e.inServerOrder,
        r = e.lids,
        a = e.orgId,
        i = e.rows,
        l = new Set(r),
        s = y(a).filter(function (e) {
          return !l.has(e);
        });
      g({ createModels: t, inServerOrder: n, lids: r, orgId: a, rows: i });
      var u = [].concat(r, s);
      (o("WAWebOrgContactIdentitySync").syncContactOrgIdentity(u),
        o("WAWebOrgCollection").OrgCollection.notifyMembersApplied(
          [a].concat(
            i.map(function (e) {
              return e.orgId;
            }),
          ),
          u,
        ));
    }
    function f(e) {
      var t,
        n = e.orgId,
        r = y(n);
      ((t = o("WAWebOrgCollection").OrgCollection.get(n)) == null ||
        t.members.clearMembers(),
        o("WAWebOrgContactIdentitySync").syncContactOrgIdentity(r),
        o("WAWebOrgCollection").OrgCollection.notifyMembersApplied([n], r));
    }
    function g(e) {
      var t,
        n = e.createModels,
        r = e.inServerOrder,
        a = e.lids,
        i = e.orgId,
        l = e.rows,
        s = new Map(
          l
            .filter(function (e) {
              return e.orgId === i;
            })
            .map(function (e) {
              return [e.lid, e];
            }),
        );
      ((t = o("WAWebOrgCollection").OrgCollection.get(i)) == null ||
        t.members.applyList(
          a.flatMap(function (e) {
            var t = s.get(e);
            return t == null
              ? []
              : [o("WAWebOrgMemberCollection").toOrgMemberAttrs(t)];
          }),
          { complete: n, inServerOrder: r },
        ),
        h({ createModels: n, lids: a, rows: l }, i));
    }
    function h(e, t) {
      var n = e.createModels,
        r = e.lids,
        a = e.rows,
        i = o("WAWebOrgCollection").OrgCollection.filter(function (e) {
          return e.id !== t;
        }),
        l = C(a);
      r.forEach(function (e) {
        var t,
          r = o("WAWebOrgCollection").OrgCollection.some(function (t) {
            return t.members.get(e) != null;
          });
        if (!(!r && !n)) {
          var a = (t = l.get(e)) != null ? t : [];
          i.forEach(function (t) {
            var n = a.find(function (e) {
              var n = e.orgId;
              return n === t.id;
            });
            n == null
              ? t.members.removeMember(e)
              : t.members.upsertMember(
                  o("WAWebOrgMemberCollection").toOrgMemberAttrs(n),
                );
          });
        }
      });
    }
    function y(e) {
      var t, n;
      return (t =
        (n = o("WAWebOrgCollection").OrgCollection.get(e)) == null
          ? void 0
          : n.members.getModelsArray().map(function (e) {
              return e.id;
            })) != null
        ? t
        : [];
    }
    function C(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n,
            r = (n = t.get(e.lid)) != null ? n : [];
          (r.push(e), t.set(e.lid, r));
        }),
        t
      );
    }
    function b() {
      return o("WAWebOrgCollection")
        .OrgCollection.getOrderedOrgs()
        .map(function (e) {
          return e.id;
        });
    }
    function v(e, t) {
      return (
        e.length === t.length &&
        e.every(function (e, n) {
          return e === t[n];
        })
      );
    }
    ((l.OrgBridgeApi = d),
      (l.applyOrgRows = m),
      (l.applyOrgContactRows = p),
      (l.applyOrgDirectory = _),
      (l.removeOrgContacts = f));
  },
  98,
);
