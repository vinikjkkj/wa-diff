__d(
  "WAWebOrgBridgeApi",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadedRetriable",
    "WAWebOrgCollection",
    "WAWebOrgContactCollection",
    "WAWebOrgContactProjection",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("JSResourceForInteraction")("WAWebBootstrapOrgDirectory")
            .__setRef("WAWebOrgBridgeApi")
            .load();
        }),
        "OrgDirectoryBootstrap",
      ),
      d = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("JSResourceForInteraction")("WAWebOrgBackgroundSyncAction")
            .__setRef("WAWebOrgBridgeApi")
            .load();
        }),
        "OrgBackgroundSync",
      ),
      m = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("JSResourceForInteraction")("WAWebOrgRequestContactAction")
            .__setRef("WAWebOrgBridgeApi")
            .load();
        }),
        "OrgRequestContactAction",
      ),
      p = {
        applyOrgContactRows: y,
        applyOrgRows: h,
        bootstrapOrgs: function () {
          c()
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
        markOrgContactsChecked: function (t) {
          var e = t.lids;
          m()
            .then(function (t) {
              return t.markOrgContactsChecked(e);
            })
            .catch(function (e) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-directory] could not record notified people",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("org-contacts-checked-failed");
            });
        },
        syncOrgsInBackground: function (t) {
          d()
            .then(function (e) {
              return e.syncOrgsInBackground(t);
            })
            .catch(function (e) {
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-directory] background sync failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("org-background-sync-failed");
            });
        },
      },
      _ = new Set();
    function f(e) {
      e.forEach(function (e) {
        return _.add(e);
      });
    }
    function g() {
      _ = new Set();
    }
    function h(e) {
      var t = e.isFullList,
        n = e.rows,
        r = L();
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
          o("WAWebOrgCollection").OrgCollection.remove(i);
          var l = i.map(function (e) {
            return e.id;
          });
          o("WAWebOrgContactCollection").OrgContactCollection.notifyApplied(
            l,
            S(new Set(l)),
          );
        }
      }
      (o("WAWebOrgCollection").OrgCollection.addRows(n), E(r, L()) || R());
    }
    function y(e) {
      var t = e.lids.flatMap(function (e) {
        var t, n;
        return Object.keys(
          (t =
            (n = o("WAWebOrgContactCollection").OrgContactCollection.get(e)) ==
            null
              ? void 0
              : n.orgMetadata) != null
            ? t
            : {},
        );
      });
      (v(e),
        o("WAWebOrgContactCollection").OrgContactCollection.notifyApplied(
          [].concat(
            t,
            e.rows.map(function (e) {
              return e.orgId;
            }),
          ),
          e.lids,
        ));
    }
    function C(e) {
      var t = e.createModels,
        n = e.lids,
        r = e.orgId,
        a = e.rows,
        i = new Set(n),
        l = o("WAWebOrgContactCollection")
          .OrgContactCollection.getOrgContactsForOrg(r)
          .filter(function (e) {
            return !i.has(e.id);
          }),
        s = L();
      (l.forEach(function (e) {
        return o("WAWebOrgContactCollection").OrgContactCollection.applyAttrs(
          o("WAWebOrgContactProjection").withoutOrgMemberships(
            o("WAWebOrgContactCollection").toOrgContactAttrs(e),
            new Set([r]),
            s,
          ),
        );
      }),
        v({ createModels: t, lids: n, rows: a }),
        o("WAWebOrgContactCollection").OrgContactCollection.notifyApplied(
          [r].concat(
            a.map(function (e) {
              return e.orgId;
            }),
          ),
          [].concat(
            n,
            l.map(function (e) {
              return e.id;
            }),
          ),
        ));
    }
    function b(e) {
      var t = e.orgId,
        n = o(
          "WAWebOrgContactCollection",
        ).OrgContactCollection.getOrgContactsForOrg(t);
      (S(new Set([t])),
        o("WAWebOrgContactCollection").OrgContactCollection.notifyApplied(
          [t],
          n.map(function (e) {
            return e.id;
          }),
        ));
    }
    function v(e) {
      var t = e.createModels,
        n = e.lids,
        r = e.rows,
        a = L(),
        i = o("WAWebOrgContactProjection").groupOrgContactRowsByLid(r);
      n.forEach(function (e) {
        var n,
          r = o("WAWebOrgContactProjection").projectOrgContact(
            e,
            (n = i.get(e)) != null ? n : [],
            a,
          ),
          l =
            o("WAWebOrgContactCollection").OrgContactCollection.get(e) != null;
        (l || (t && Object.keys(r.orgMetadata).length > 0)) &&
          o("WAWebOrgContactCollection").OrgContactCollection.applyAttrs(r, {
            silent: !_.has(e),
          });
      });
    }
    function S(e) {
      var t = L(),
        n = o("WAWebOrgContactCollection")
          .OrgContactCollection.getModelsArray()
          .filter(function (t) {
            return Object.keys(t.orgMetadata).some(function (t) {
              return e.has(t);
            });
          });
      return (
        n.forEach(function (n) {
          return o("WAWebOrgContactCollection").OrgContactCollection.applyAttrs(
            o("WAWebOrgContactProjection").withoutOrgMemberships(
              o("WAWebOrgContactCollection").toOrgContactAttrs(n),
              e,
              t,
            ),
          );
        }),
        n.map(function (e) {
          return e.id;
        })
      );
    }
    function R() {
      var e = L();
      o("WAWebOrgContactCollection")
        .OrgContactCollection.getModelsArray()
        .forEach(function (t) {
          return o("WAWebOrgContactCollection").OrgContactCollection.applyAttrs(
            o("WAWebOrgContactProjection").reorderOrgContactAttrs(
              o("WAWebOrgContactCollection").toOrgContactAttrs(t),
              e,
            ),
          );
        });
    }
    function L() {
      return o("WAWebOrgCollection")
        .OrgCollection.getOrderedOrgs()
        .map(function (e) {
          return e.id;
        });
    }
    function E(e, t) {
      return (
        e.length === t.length &&
        e.every(function (e, n) {
          return e === t[n];
        })
      );
    }
    ((l.OrgBridgeApi = p),
      (l.noteOrgContactsRequested = f),
      (l.resetOrgContactRequests = g),
      (l.applyOrgRows = h),
      (l.applyOrgContactRows = y),
      (l.applyOrgDirectory = C),
      (l.removeOrgContacts = b));
  },
  98,
);
