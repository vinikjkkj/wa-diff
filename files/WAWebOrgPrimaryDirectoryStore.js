__d(
  "WAWebOrgPrimaryDirectoryStore",
  [
    "WALogger",
    "WAWebLidMigrationUtils",
    "WAWebOrgCollection",
    "WAWebOrgFetchDirectoryAction",
    "WAWebOrgMemberSearchMatch",
    "WAWebOrgSearchMembersAction",
    "WAWebUserPrefsMeUser",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = [],
      c = (function () {
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
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-picker] retrying the primary directory download",
                ])),
            ),
              this.$7({ download: "loading", remoteHits: null }),
              this.$6());
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
                  (o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[org-picker] primary directory ",
                        "",
                      ])),
                    t.status,
                  ),
                    e.$7(babelHelpers.extends({}, e.$5, { download: m(t) })),
                    e.$5.download === "too_large" &&
                      e.$4 != null &&
                      e.$8(e.$4));
                },
                function () {
                  e.$7(babelHelpers.extends({}, e.$5, { download: "error" }));
                },
              );
          }),
          (n.$8 = function (t) {
            var e = this;
            o("WAWebOrgSearchMembersAction")
              .searchOrgMembers(t)
              .then(
                function (n) {
                  var r;
                  e.$9(t, (r = n == null ? void 0 : n.members) != null ? r : u);
                },
                function () {
                  e.$9(t, u);
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
    function d(e, t, n, r) {
      var a, i;
      if (t.download === "loading" || t.download === "error") return u;
      var l =
          r.matchOrgName &&
          (a =
            (i = o("WAWebOrgCollection").OrgCollection.get(e)) == null
              ? void 0
              : i.name) != null
            ? a
            : "",
        s =
          t.download === "too_large"
            ? _(t.remoteHits, r.query)
            : f(n, l, r.query),
        c = new Set([].concat(p(r.excludeContacts), r.excludeLids)),
        d = r.includeViewer
          ? null
          : o("WAWebUserPrefsMeUser").getMeLidUserOrThrow().user;
      return s.filter(function (e) {
        return e.id !== d && !c.has(e.id);
      });
    }
    function m(e) {
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
    function p(e) {
      return r("compactMap")(e, function (e) {
        var t;
        return e.id.isRegularUser()
          ? (t = o("WAWebLidMigrationUtils").toUserLid(e.id)) == null
            ? void 0
            : t.user
          : null;
      });
    }
    function _(e, t) {
      return e != null && e.query === t ? e.members : u;
    }
    function f(e, t, n) {
      return n.trim() === ""
        ? e
        : o("WAWebOrgMemberSearchMatch").findOrgMembers(e, t, n);
    }
    ((l.PrimaryOrgDirectoryStore = c), (l.selectPrimaryOrgMembers = d));
  },
  98,
);
