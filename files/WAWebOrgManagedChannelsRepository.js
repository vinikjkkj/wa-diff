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
      d = new Set(),
      m = D();
    function p() {
      return m;
    }
    function _(e) {
      return (
        u.add(e),
        function () {
          u.delete(e);
        }
      );
    }
    function f(e) {
      var t,
        n = (t = c.get(e)) == null ? void 0 : t.pendingRead;
      if (n != null) return n;
      var r = b(e, function () {
          return S(e);
        }),
        o = c.get(e);
      return (
        o != null && c.set(e, babelHelpers.extends({}, o, { pendingRead: r })),
        r
      );
    }
    function g(e, t) {
      return b(
        e,
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var n = yield t();
          if (n.status !== "success") return n;
          yield S(e);
          var r = k(e).channels.find(function (e) {
            return e.id === n.channel.id;
          });
          return (r == null && C(e, n.channel), n);
        }),
        !0,
      );
    }
    function h(e, t) {
      d.add(t);
      var n = k(e);
      I(e, babelHelpers.extends({}, n, { channels: E(n.channels) }));
    }
    function y() {
      ((c = new Map()), (d = new Set()), (m = D()), T());
    }
    function C(e, t) {
      var n = k(e),
        r = [t].concat(
          n.channels.filter(function (e) {
            return e.id !== t.id;
          }),
        );
      I(e, babelHelpers.extends({}, n, { channels: r }));
    }
    function b(e, t, n) {
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
            return v(e, a);
          },
          function () {
            return v(e, a);
          },
        ),
        a
      );
    }
    function v(e, t) {
      var n = c.get(e);
      if (n != null) {
        var r = n.pendingRead === t ? null : n.pendingRead;
        n.tail === t && r == null
          ? c.delete(e)
          : r !== n.pendingRead &&
            c.set(e, babelHelpers.extends({}, n, { pendingRead: r }));
      }
    }
    function S(e) {
      var t = k(e);
      return (
        I(e, {
          channels: t.channels,
          error: null,
          status: t.channels.length === 0 ? "loading" : "refreshing",
        }),
        R(e)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = yield o("WAWebOrgAdminGraphQL").loadOrgAdminChannels(t);
            I(t, { channels: E(n), error: null, status: "ready" });
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
            var a = k(t);
            I(t, {
              channels: a.channels,
              error: r("getErrorSafe")(n),
              status: "error",
            });
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return e.filter(function (e) {
        return !d.has(e.id);
      });
    }
    function k(e) {
      var t;
      return (t = m.listStateByOrgID.get(e)) != null
        ? t
        : { channels: s, error: null, status: "idle" };
    }
    function I(e, t) {
      var n = new Map(m.listStateByOrgID);
      (n.set(e, t),
        (m = babelHelpers.extends({}, m, { listStateByOrgID: n })),
        T());
    }
    function T() {
      u.forEach(function (e) {
        return e();
      });
    }
    function D() {
      return { listStateByOrgID: new Map() };
    }
    ((l.getOrgManagedChannelsRepositorySnapshot = p),
      (l.subscribeToOrgManagedChannelsRepository = _),
      (l.refreshOrgManagedChannels = f),
      (l.runOrgManagedChannelCreation = g),
      (l.removeOrgManagedChannel = h),
      (l.resetOrgManagedChannelsRepository = y));
  },
  98,
);
