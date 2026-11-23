__d(
  "WAWebWorkDirectoryMemberSearchModel",
  [
    "WAWebEventEmitter",
    "WAWebL10NAccentFold",
    "WAWebLidMigrationUtils",
    "WAWebSearchModel",
    "WAWebUserUtils",
    "WAWebWorkDirectoryFetchMembersJob",
    "WAWebWorkDirectoryMemberUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 4,
      s = 3,
      u = (function (e) {
        function t() {
          for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
            o[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(o)) || this),
            (t.id = "WorkDirectoryMemberSearch"),
            (t.events = new (r("WAWebEventEmitter"))()),
            (t.loadStarted = !1),
            (t.members = null),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.queryFn = function (t) {
            var e;
            if (t.replace(/\s/g, "").length < s)
              return { results: [], type: "work-directory" };
            this.loadMembers();
            var n = o("WAWebUserUtils").getMeLidUserOrThrow().user,
              r = o("WAWebWorkDirectoryMemberUtils").filterWorkDirectoryMembers(
                (e = this.members) != null ? e : [],
                t,
              );
            return {
              results: d(
                r,
                o("WAWebL10NAccentFold").accentFold(t.trim()),
              ).flatMap(function (e) {
                return e.lid == null ||
                  e.lid.user === n ||
                  !o(
                    "WAWebWorkDirectoryMemberUtils",
                  ).canSelectWorkDirectoryMember(e)
                  ? []
                  : [{ data: e, id: e.memberId, type: "work-directory" }];
              }),
              type: "work-directory",
            };
          }),
          (n.loadMembers = function () {
            var e = this;
            this.loadStarted ||
              ((this.loadStarted = !0),
              o("WAWebWorkDirectoryFetchMembersJob")
                .getCachedWorkDirectoryMembers(
                  o("WAWebUserUtils").getMeLidUserOrThrow().toString(),
                  new AbortController().signal,
                )
                .then(function (t) {
                  ((e.members = t), e.events.trigger("load"));
                })
                .catch(function () {
                  e.loadStarted = !1;
                }));
          }),
          t
        );
      })(o("WAWebSearchModel").Search);
    function c(t) {
      var n = _(t);
      return t.map(function (t) {
        return t.type === "work-directory"
          ? babelHelpers.extends({}, t, {
              results: t.results
                .filter(function (e) {
                  return !p(e.data, n);
                })
                .slice(0, e),
            })
          : t;
      });
    }
    function d(e, t) {
      return e
        .map(function (e) {
          return { member: e, rank: m(e.name, t) };
        })
        .sort(function (e, t) {
          return e.rank - t.rank;
        })
        .map(function (e) {
          var t = e.member;
          return t;
        });
    }
    function m(e, t) {
      var n = o("WAWebL10NAccentFold").accentFold(e);
      return n.startsWith(t) ||
        n.split(/\s+/).some(function (e) {
          return e.startsWith(t);
        })
        ? 0
        : n.includes(t)
          ? 1
          : 2;
    }
    function p(e, t) {
      return e.lid != null && t.has(e.lid.toString());
    }
    function _(e) {
      var t = new Set();
      for (var n of e)
        for (var r of n.results) {
          var o = n.type === "chat" ? f(r.data) : g(n.type, r.data);
          o != null && t.add(o.toString());
        }
      return t;
    }
    function f(e) {
      return e.accountLid;
    }
    function g(e, t) {
      return e !== "contact" && e !== "non-contact-pushname"
        ? null
        : t.id.isRegularUser()
          ? o("WAWebLidMigrationUtils").toUserLid(t.id)
          : null;
    }
    ((l.WorkDirectoryMemberSearch = u),
      (l.dedupeWorkDirectoryMemberSection = c));
  },
  98,
);
