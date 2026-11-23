__d(
  "WAWebOrgRequestContactAction",
  [
    "WALogger",
    "WAWebOrgBridgeApi",
    "WAWebOrgCollection",
    "WAWebOrgDirectorySyncJob",
    "WAWebOrgFetchDirectoryAction",
    "WAWebOrgGatingUtils",
    "WAWebOrgMemberLidEligibility",
    "WAWebOrgMembershipUsyncJob",
    "WAWebOrgRefreshListAction",
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
      _ = null,
      f = 0;
    function g(e) {
      return e == null ? Promise.resolve() : h([e]);
    }
    function h(e) {
      if (!o("WAWebOrgGatingUtils").isOrgsEnabled()) return Promise.resolve();
      var t = e.filter(function (e) {
          return (
            o("WAWebOrgMemberLidEligibility").parseWAWebOrgMemberLidUser(e) !=
            null
          );
        }),
        n = t.filter(function (e) {
          return !m.has(e);
        });
      return n.length === 0
        ? _ != null
          ? _
          : Promise.resolve()
        : (n.forEach(function (e) {
            d.has(e) || c.add(e);
          }),
          v());
    }
    function y(e) {
      e.forEach(function (e) {
        (m.add(e), p.delete(e));
      });
    }
    function C(e) {
      e.forEach(function (e) {
        return m.delete(e);
      });
    }
    function b() {
      ((c = new Set()),
        (d = new Set()),
        (m = new Set()),
        (p = new Map()),
        (_ = null),
        (f = 0));
    }
    function v() {
      if (_ == null) {
        var t = Promise.resolve()
          .then(S)
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
            (_ === t && (_ = null), c.size > 0 && v());
          });
        _ = t;
      }
      return _;
    }
    async function S() {
      await o("WAWebOrgRefreshListAction").whenOrgListReady();
      var e = Array.from(c);
      ((c = new Set()),
        e.forEach(function (e) {
          return d.add(e);
        }));
      try {
        var t = await R(
          e.filter(function (e) {
            return !m.has(e);
          }),
        );
        if (t && (await L())) {
          y(e);
          return;
        }
        await k(e.filter(E));
      } finally {
        e.forEach(function (e) {
          return d.delete(e);
        });
      }
    }
    async function R(e) {
      if (e.length === 0) return !0;
      try {
        var t = await o("WAWebOrgMembershipUsyncJob").loadStoredOrgMemberships(
          e,
        );
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
    }
    async function L() {
      var e = o("WAWebOrgCollection")
          .OrgCollection.getModelsArray()
          .map(function (e) {
            return e.id;
          }),
        t = await Promise.all(
          e.map(function (e) {
            return (
              o("WAWebOrgFetchDirectoryAction").isOrgDirectoryLoaded(e) ||
              o("WAWebOrgDirectorySyncJob").isStoredOrgDirectoryFresh(e)
            );
          }),
        );
      return t.every(Boolean);
    }
    function E(e) {
      var t = p.get(e);
      return !m.has(e) && (t == null || t <= Date.now());
    }
    async function k(e) {
      if (e.length !== 0) {
        var t = await o("WAWebOrgMembershipUsyncJob").syncOrgMemberships(e),
          n = t.rows,
          r = t.statusByLid,
          a = e.filter(function (e) {
            var t;
            return ((t = r.get(e)) == null ? void 0 : t.status) === "answered";
          });
        (o("WAWebOrgBridgeApi").applyOrgContactRows({
          createModels: !0,
          lids: a,
          rows: n,
        }),
          r.forEach(function (e, t) {
            return I(t, e);
          }));
        var i = e.filter(function (e) {
          var t;
          return ((t = r.get(e)) == null ? void 0 : t.status) === "retry";
        }).length;
        ((f += e.length),
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
            f,
          ));
      }
    }
    function I(e, t) {
      t.status === "retry" ? p.set(e, Date.now() + t.backoffMs) : y([e]);
    }
    ((l.requestOrgContact = g),
      (l.requestOrgContacts = h),
      (l.markOrgContactsChecked = y),
      (l.uncheckOrgContacts = C),
      (l.resetOrgRequestContactAction = b));
  },
  98,
);
