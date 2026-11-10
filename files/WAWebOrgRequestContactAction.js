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
      f = null,
      g = 0;
    function h(e) {
      return e == null ? (c || (c = n("Promise"))).resolve() : y([e]);
    }
    function y(e) {
      if (!o("WAWebOrgGatingUtils").isOrgInfoDisplayEnabled())
        return (c || (c = n("Promise"))).resolve();
      var t = e.filter(function (e) {
          return (
            o("WAWebOrgMemberLidEligibility").parseWAWebOrgMemberLidUser(e) !=
            null
          );
        }),
        r = t.filter(function (e) {
          return !p.has(e);
        });
      return r.length === 0
        ? f != null
          ? f
          : (c || (c = n("Promise"))).resolve()
        : (r.forEach(function (e) {
            m.has(e) || d.add(e);
          }),
          S());
    }
    function C(e) {
      e.forEach(function (e) {
        (p.add(e), _.delete(e));
      });
    }
    function b(e) {
      e.forEach(function (e) {
        return p.delete(e);
      });
    }
    function v() {
      ((d = new Set()),
        (m = new Set()),
        (p = new Set()),
        (_ = new Map()),
        (f = null),
        (g = 0));
    }
    function S() {
      if (f == null) {
        var t = (c || (c = n("Promise")))
          .resolve()
          .then(R)
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
            (f === t && (f = null), d.size > 0 && S());
          });
        f = t;
      }
      return f;
    }
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebOrgRefreshListAction").whenOrgListReady();
          var e = Array.from(d);
          ((d = new Set()),
            e.forEach(function (e) {
              return m.add(e);
            }));
          try {
            var t = yield E(
              e.filter(function (e) {
                return !p.has(e);
              }),
            );
            if (t && (yield I())) {
              C(e);
              return;
            }
            yield x(e.filter(D));
          } finally {
            e.forEach(function (e) {
              return m.delete(e);
            });
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        k.apply(this, arguments)
      );
    }
    function I() {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        T.apply(this, arguments)
      );
    }
    function D(e) {
      var t = _.get(e);
      return !p.has(e) && (t == null || t <= Date.now());
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                return P(t, e);
              }));
            var i = e.filter(function (e) {
              var t;
              return ((t = r.get(e)) == null ? void 0 : t.status) === "retry";
            }).length;
            ((g += e.length),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-affiliations] usync people=",
                    " answered=",
                    " retrying=",
                    " session=",
                    "",
                  ])),
                e.length,
                a.length,
                i,
                g,
              ));
          }
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t) {
      t.status === "retry" ? _.set(e, Date.now() + t.backoffMs) : C([e]);
    }
    ((l.requestOrgContact = h),
      (l.requestOrgContacts = y),
      (l.markOrgContactsChecked = C),
      (l.uncheckOrgContacts = b),
      (l.resetOrgRequestContactAction = v));
  },
  98,
);
