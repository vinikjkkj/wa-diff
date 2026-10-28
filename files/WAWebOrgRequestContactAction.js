__d(
  "WAWebOrgRequestContactAction",
  [
    "Promise",
    "WALogger",
    "WAWebOrgBridgeApi",
    "WAWebOrgCollection",
    "WAWebOrgDirectorySyncJob",
    "WAWebOrgFetchDirectoryAction",
    "WAWebOrgGatingUtils",
    "WAWebOrgMemberLidEligibility",
    "WAWebOrgMembershipUsyncJob",
    "WAWebOrgRefreshListAction",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = new Set(),
      m = new Set(),
      p = new Set(),
      _ = new Map(),
      f = null;
    function g(e) {
      return e == null ? (c || (c = n("Promise"))).resolve() : h([e]);
    }
    function h(e) {
      if (!o("WAWebOrgGatingUtils").isOrgInfoDisplayEnabled())
        return (c || (c = n("Promise"))).resolve();
      var t = e.filter(function (e) {
        return (
          o("WAWebOrgMemberLidEligibility").parseWAWebOrgMemberLidUser(e) !=
          null
        );
      });
      o("WAWebOrgBridgeApi").noteOrgContactsRequested(t);
      var r = t.filter(function (e) {
        return !p.has(e);
      });
      return r.length === 0
        ? f != null
          ? f
          : (c || (c = n("Promise"))).resolve()
        : (r.forEach(function (e) {
            m.has(e) || d.add(e);
          }),
          b());
    }
    function y(e) {
      e.forEach(function (e) {
        (p.add(e), _.delete(e));
      });
    }
    function C() {
      ((d = new Set()),
        (m = new Set()),
        (p = new Set()),
        (_ = new Map()),
        (f = null));
    }
    function b() {
      if (f == null) {
        var t = (c || (c = n("Promise")))
          .resolve()
          .then(v)
          .catch(function (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-affiliations] resolver task failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("org-affiliations-resolution-failed");
          })
          .finally(function () {
            (f === t && (f = null), d.size > 0 && b());
          });
        f = t;
      }
      return f;
    }
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebOrgRefreshListAction").whenOrgListReady();
          var e = Array.from(d);
          ((d = new Set()),
            e.forEach(function (e) {
              return m.add(e);
            }));
          try {
            var t = yield R(
              e.filter(function (e) {
                return !p.has(e);
              }),
            );
            if (t && (yield E())) {
              y(e);
              return;
            }
            yield T(e.filter(I));
          } finally {
            e.forEach(function (e) {
              return m.delete(e);
            });
          }
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length === 0) return !0;
          try {
            var t = yield o(
              "WAWebOrgMembershipUsyncJob",
            ).loadStoredOrgMemberships(e);
            return (
              o("WAWebOrgBridgeApi").applyOrgContactRows({
                createModels: !0,
                lids: e,
                rows: t,
              }),
              !0
            );
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-affiliations] stored memberships read failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("org-affiliations-cache-read-failed"),
              !1
            );
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebOrgCollection")
              .OrgCollection.getModelsArray()
              .map(function (e) {
                return e.id;
              }),
            t = yield (c || (c = n("Promise"))).all(
              e.map(function (e) {
                return (
                  o("WAWebOrgFetchDirectoryAction").isOrgDirectoryLoaded(e) ||
                  o("WAWebOrgDirectorySyncJob").isStoredOrgDirectoryFresh(e)
                );
              }),
            );
          return t.every(Boolean);
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      var t = _.get(e);
      return !p.has(e) && (t == null || t <= Date.now());
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length !== 0) {
            var t = yield o("WAWebOrgMembershipUsyncJob").syncOrgMemberships(e),
              n = t.rows,
              r = t.statusByLid,
              a = e.filter(function (e) {
                var t;
                return (
                  ((t = r.get(e)) == null ? void 0 : t.status) === "answered"
                );
              });
            (o("WAWebOrgBridgeApi").applyOrgContactRows({
              createModels: !0,
              lids: a,
              rows: n,
            }),
              r.forEach(function (e, t) {
                return x(t, e);
              }));
            var i = e.filter(function (e) {
              var t;
              return ((t = r.get(e)) == null ? void 0 : t.status) === "retry";
            }).length;
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-affiliations] usync people=",
                  " answered=",
                  " retrying=",
                  "",
                ])),
              e.length,
              a.length,
              i,
            );
          }
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      t.status === "retry" ? _.set(e, Date.now() + t.backoffMs) : y([e]);
    }
    ((l.requestOrgContact = g),
      (l.requestOrgContacts = h),
      (l.markOrgContactsChecked = y),
      (l.resetOrgRequestContactAction = C));
  },
  98,
);
