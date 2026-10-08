__d(
  "WAWebOrgManagedChannelsRepository",
  [
    "WALogger",
    "WAWebOrgAdminGraphQL",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = [],
      u = new Set(),
      c = new Map(),
      d = k();
    function m() {
      return d;
    }
    function p(e) {
      return (
        u.add(e),
        function () {
          u.delete(e);
        }
      );
    }
    function _(e) {
      var t,
        n = (t = c.get(e)) == null ? void 0 : t.pendingRead;
      if (n != null) return n;
      var r = y(e, function () {
          return b(e);
        }),
        o = c.get(e);
      return (
        o != null && c.set(e, babelHelpers.extends({}, o, { pendingRead: r })),
        r
      );
    }
    function f(e, t) {
      return y(
        e,
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var n = yield t();
          if (n.status !== "success") return n;
          yield b(e);
          var r = R(e).channels.find(function (e) {
            return e.id === n.channel.id;
          });
          return (r == null && h(e, n.channel), n);
        }),
        !0,
      );
    }
    function g() {
      ((c = new Map()), (d = k()), E());
    }
    function h(e, t) {
      var n = R(e),
        r = [t].concat(
          n.channels.filter(function (e) {
            return e.id !== t.id;
          }),
        );
      L(e, babelHelpers.extends({}, n, { channels: r }));
    }
    function y(e, t, n) {
      var r;
      n === void 0 && (n = !1);
      var o = c.get(e),
        a =
          o == null
            ? t()
            : o.tail.then(
                function () {
                  return t();
                },
                function () {
                  return t();
                },
              );
      return (
        c.set(e, {
          pendingRead: n
            ? null
            : (r = o == null ? void 0 : o.pendingRead) != null
              ? r
              : null,
          tail: a,
        }),
        a.then(
          function () {
            return C(e, a);
          },
          function () {
            return C(e, a);
          },
        ),
        a
      );
    }
    function C(e, t) {
      var n = c.get(e);
      if (n != null) {
        var r = n.pendingRead === t ? null : n.pendingRead;
        n.tail === t && r == null
          ? c.delete(e)
          : r !== n.pendingRead &&
            c.set(e, babelHelpers.extends({}, n, { pendingRead: r }));
      }
    }
    function b(e) {
      var t = R(e);
      return (
        L(e, {
          channels: t.channels,
          error: null,
          status: t.channels.length === 0 ? "loading" : "refreshing",
        }),
        v(e)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = yield o("WAWebOrgAdminGraphQL").loadOrgAdminChannels(t);
            L(t, { channels: n, error: null, status: "ready" });
          } catch (n) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-admin] managed channels request failed: ",
                    "",
                  ])),
                o("WAWebOrgAdminGraphQL").getOrgAdminServerFailureReason(n),
              )
              .catching(r("getErrorSafe")(n))
              .sendLogs("org-admin-managed-channels-load-failed");
            var a = R(t);
            L(t, {
              channels: a.channels,
              error: r("getErrorSafe")(n),
              status: "error",
            });
          }
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      var t;
      return (t = d.listStateByOrgID.get(e)) != null
        ? t
        : { channels: s, error: null, status: "idle" };
    }
    function L(e, t) {
      var n = new Map(d.listStateByOrgID);
      (n.set(e, t),
        (d = babelHelpers.extends({}, d, { listStateByOrgID: n })),
        E());
    }
    function E() {
      u.forEach(function (e) {
        return e();
      });
    }
    function k() {
      return { listStateByOrgID: new Map() };
    }
    ((l.getOrgManagedChannelsRepositorySnapshot = m),
      (l.subscribeToOrgManagedChannelsRepository = p),
      (l.refreshOrgManagedChannels = _),
      (l.runOrgManagedChannelCreation = f),
      (l.resetOrgManagedChannelsRepository = g));
  },
  98,
);
