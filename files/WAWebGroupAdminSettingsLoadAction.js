__d(
  "WAWebGroupAdminSettingsLoadAction",
  [
    "WAConcurrentIterate",
    "WALogger",
    "WAWebDBGroupsGroupMetadata",
    "WAWebGroupAdminSettings",
    "WAWebGroupQueryJob",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 20,
      c = 2,
      d = new Set(),
      m = new Map(),
      p = u;
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.filter(function (e) {
            return !d.has(e.id.toString());
          });
          n.length !== 0 &&
            (yield b(n),
            yield R(
              n.filter(function (e) {
                return !y(e);
              }),
              t,
            ));
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = e.filter(function (e) {
            return !C(e);
          });
          yield o("WAConcurrentIterate").concurrentIterate(
            r.length,
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  t.aborted || (yield E(r[e]));
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            c,
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      var t = o("WAWebGroupAdminSettings").getChatGroupAdminSettings(e);
      return t != null && t.addMembers != null;
    }
    function C(e) {
      var t;
      return (
        ((t = e.groupMetadata) == null ? void 0 : t.memberLinkMode) != null ||
        d.has(e.id.toString())
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = yield o("WAWebDBGroupsGroupMetadata").bulkGetGroupMetadata(
              t.map(function (e) {
                return e.id;
              }),
            );
            n.forEach(function (e, n) {
              e != null && S(t[n], e);
            });
          } catch (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "loadGroupAdminSettings: failed to read stored group settings",
                  ])),
              )
              .catching(r("getErrorSafe")(t));
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      var n,
        r,
        o,
        a,
        i,
        l = e.groupMetadata;
      if (l != null) {
        l.set({
          announce: (n = l.announce) != null ? n : t.announce,
          memberAddMode: (r = l.memberAddMode) != null ? r : t.memberAddMode,
          memberLinkMode: (o = l.memberLinkMode) != null ? o : t.memberLinkMode,
          membershipApprovalMode:
            (a = l.membershipApprovalMode) != null
              ? a
              : t.membershipApprovalMode,
          restrict: (i = l.restrict) != null ? i : t.restrict,
        });
        var s = l.announce,
          u = l.memberAddMode,
          c = l.memberLinkMode,
          m = l.membershipApprovalMode,
          p = l.restrict;
        [s, u, c, m, p].every(function (e) {
          return e != null;
        }) && d.add(e.id.toString());
      }
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = e
            .filter(function (e) {
              return !m.has(e.id.toString());
            })
            .slice(0, p);
          yield o("WAConcurrentIterate").concurrentIterate(
            r.length,
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var n = r[e];
                  t.aborted ||
                    p === 0 ||
                    m.has(n.id.toString()) ||
                    (p--, yield E(n));
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            c,
          );
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      var t = e.id.toString(),
        n = m.get(t);
      if (n != null) return n;
      var r = k(e).finally(function () {
        m.delete(t);
      });
      return (m.set(t, r), r);
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            (yield o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
              id: e.id,
              request: "interactive",
            }),
              y(e) && d.add(e.id.toString()));
          } catch (e) {
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "loadGroupAdminSettings: group query failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }
        })),
        I.apply(this, arguments)
      );
    }
    ((l.MAX_SERVER_QUERIES_PER_SESSION = u),
      (l.loadGroupAdminSettings = _),
      (l.loadGroupLinkModes = g),
      (l.hasGroupAdminSettings = y),
      (l.isGroupLinkModeKnown = C));
  },
  98,
);
