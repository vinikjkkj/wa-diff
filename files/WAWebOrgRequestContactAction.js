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
      c = new Set(),
      d = new Set(),
      m = new Set(),
      p = new Map(),
      _ = null;
    function f(e) {
      return e == null ? (u || (u = n("Promise"))).resolve() : g([e]);
    }
    function g(e) {
      if (!o("WAWebOrgGatingUtils").isOrgInfoDisplayEnabled())
        return (u || (u = n("Promise"))).resolve();
      var t = e.filter(function (e) {
        return (
          o("WAWebOrgMemberLidEligibility").parseWAWebOrgMemberLidUser(e) !=
          null
        );
      });
      o("WAWebOrgBridgeApi").noteOrgContactsRequested(t);
      var r = t.filter(function (e) {
        return !m.has(e);
      });
      return r.length === 0
        ? _ != null
          ? _
          : (u || (u = n("Promise"))).resolve()
        : (r.forEach(function (e) {
            d.has(e) || c.add(e);
          }),
          C());
    }
    function h(e) {
      e.forEach(function (e) {
        (m.add(e), p.delete(e));
      });
    }
    function y() {
      ((c = new Set()),
        (d = new Set()),
        (m = new Set()),
        (p = new Map()),
        (_ = null));
    }
    function C() {
      if (_ == null) {
        var t = (u || (u = n("Promise")))
          .resolve()
          .then(b)
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
            (_ === t && (_ = null), c.size > 0 && C());
          });
        _ = t;
      }
      return _;
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebOrgRefreshListAction").whenOrgListReady();
          var e = Array.from(c);
          ((c = new Set()),
            e.forEach(function (e) {
              return d.add(e);
            }));
          try {
            var t = yield S(
              e.filter(function (e) {
                return !m.has(e);
              }),
            );
            if (t && (yield L())) {
              h(e);
              return;
            }
            yield I(e.filter(k));
          } finally {
            e.forEach(function (e) {
              return d.delete(e);
            });
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        R.apply(this, arguments)
      );
    }
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebOrgCollection")
              .OrgCollection.getModelsArray()
              .map(function (e) {
                return e.id;
              }),
            t = yield (u || (u = n("Promise"))).all(
              e.map(function (e) {
                return (
                  o("WAWebOrgFetchDirectoryAction").isOrgDirectoryLoaded(e) ||
                  o("WAWebOrgDirectorySyncJob").isStoredOrgDirectoryFresh(e)
                );
              }),
            );
          return t.every(Boolean);
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      var t = p.get(e);
      return !m.has(e) && (t == null || t <= Date.now());
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                return D(t, e);
              }));
          }
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      t.status === "retry" ? p.set(e, Date.now() + t.backoffMs) : h([e]);
    }
    ((l.requestOrgContact = f),
      (l.requestOrgContacts = g),
      (l.markOrgContactsChecked = h),
      (l.resetOrgRequestContactAction = y));
  },
  98,
);
