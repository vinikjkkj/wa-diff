__d(
  "WAWebOrgPrimaryDirectoryStore",
  [
    "WAWebLidMigrationUtils",
    "WAWebOrgCollection",
    "WAWebOrgFetchDirectoryAction",
    "WAWebOrgMemberSearchMatch",
    "WAWebOrgSearchMembersAction",
    "WAWebUserPrefsMeUser",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [],
      s = (function () {
        function t(e) {
          var t = this;
          ((this.$1 = !1),
            (this.$2 = new Set()),
            (this.$4 = null),
            (this.$5 = { download: "loading", remoteHits: null }),
            (this.subscribe = function (e) {
              return (
                t.$2.add(e),
                function () {
                  t.$2.delete(e);
                }
              );
            }),
            (this.getState = function () {
              return t.$5;
            }),
            (this.$3 = e),
            this.$6());
        }
        var n = t.prototype;
        return (
          (n.retry = function () {
            (this.$7({ download: "loading", remoteHits: null }), this.$6());
          }),
          (n.search = function (t) {
            ((this.$4 = t), this.$5.download === "too_large" && this.$8(t));
          }),
          (n.dispose = function () {
            ((this.$1 = !0), this.$2.clear());
          }),
          (n.$6 = function () {
            var e = this;
            o("WAWebOrgFetchDirectoryAction")
              .fetchOrgDirectory(this.$3, { createModels: !0 })
              .then(
                function (t) {
                  (e.$7(babelHelpers.extends({}, e.$5, { download: c(t) })),
                    e.$5.download === "too_large" &&
                      e.$4 != null &&
                      e.$8(e.$4));
                },
                function () {
                  e.$7(babelHelpers.extends({}, e.$5, { download: "error" }));
                },
              );
          }),
          (n.$8 = function (n) {
            var t = this;
            o("WAWebOrgSearchMembersAction")
              .searchOrgMembers(n)
              .then(
                function (r) {
                  var o;
                  t.$9(n, (o = r == null ? void 0 : r.members) != null ? o : e);
                },
                function () {
                  t.$9(n, e);
                },
              );
          }),
          (n.$9 = function (t, n) {
            t === this.$4 &&
              this.$7(
                babelHelpers.extends({}, this.$5, {
                  remoteHits: { members: n, query: t },
                }),
              );
          }),
          (n.$7 = function (t) {
            this.$1 ||
              ((this.$5 = t),
              this.$2.forEach(function (e) {
                return e();
              }));
          }),
          t
        );
      })();
    function u(t, n, r, a) {
      var i, l;
      if (n.download === "loading" || n.download === "error") return e;
      var s =
          a.matchOrgName &&
          (i =
            (l = o("WAWebOrgCollection").OrgCollection.get(t)) == null
              ? void 0
              : l.name) != null
            ? i
            : "",
        u =
          n.download === "too_large"
            ? m(n.remoteHits, a.query)
            : p(r, s, a.query),
        c = new Set([].concat(d(a.excludeContacts), a.excludeLids)),
        _ = a.includeViewer
          ? null
          : o("WAWebUserPrefsMeUser").getMeLidUserOrThrow().user;
      return u.filter(function (e) {
        return e.id !== _ && !c.has(e.id);
      });
    }
    function c(e) {
      return e.status === "success" || e.status === "not_allowed"
        ? "ready"
        : e.status === "roster_too_large"
          ? "too_large"
          : e.status === "failed"
            ? "error"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e.status,
                );
              })();
    }
    function d(e) {
      return r("compactMap")(e, function (e) {
        var t;
        return e.id.isRegularUser()
          ? (t = o("WAWebLidMigrationUtils").toUserLid(e.id)) == null
            ? void 0
            : t.user
          : null;
      });
    }
    function m(t, n) {
      return t != null && t.query === n ? t.members : e;
    }
    function p(e, t, n) {
      return n.trim() === ""
        ? e
        : o("WAWebOrgMemberSearchMatch").findOrgMembers(e, t, n);
    }
    ((l.PrimaryOrgDirectoryStore = s), (l.selectPrimaryOrgMembers = u));
  },
  98,
);
