__d(
  "WAWebPermissionStatusWatcher",
  ["WALogger", "WAWebNoop", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new WeakMap();
    function c(e, t, n) {
      var o = (n != null ? n : navigator).permissions;
      if (o == null) return r("WAWebNoop");
      var a = _(o, e),
        i = a.listeners,
        l = function (n) {
          return t(n);
        };
      return (
        i.add(l),
        function () {
          i.delete(l);
        }
      );
    }
    function d(e, t, n) {
      var r = !0,
        o = function (n) {
          r && t(n);
        },
        a = (n != null ? n : navigator).permissions;
      if (a == null)
        return (
          queueMicrotask(function () {
            return o("unknown");
          }),
          function () {
            r = !1;
          }
        );
      var i = _(a, e),
        l = i.listeners,
        s = i.status;
      return (
        s.then(
          function (e) {
            r && (l.add(o), t(e.state));
          },
          function () {
            return o("unknown");
          },
        ),
        function () {
          ((r = !1), l.delete(o));
        }
      );
    }
    function m(e, t) {
      var n,
        r,
        o,
        a = (t != null ? t : navigator).permissions;
      if (a == null) return "unknown";
      var i = (n = u.get(a)) == null ? void 0 : n.get(e);
      return (r =
        i == null || (o = i.resolved.status) == null ? void 0 : o.state) != null
        ? r
        : "unknown";
    }
    function p(e, t) {
      var n = t.permissions;
      n != null && _(n, e);
    }
    function _(t, n) {
      var a = f(t),
        i = a.get(n);
      if (i != null) return i;
      var l = new Set(),
        s = { status: null },
        u = t.query({ name: n }).then(function (e) {
          return (
            (s.status = e),
            e.addEventListener("change", function () {
              return g(l, e.state);
            }),
            e
          );
        }),
        c = { listeners: l, resolved: s, status: u };
      return (
        a.set(n, c),
        u.catch(function (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[permissions] could not watch the ",
                  " permission",
                ])),
              n,
            )
            .catching(r("getErrorSafe")(t));
        }),
        c
      );
    }
    function f(e) {
      var t = u.get(e);
      if (t != null) return t;
      var n = new Map();
      return (u.set(e, n), n);
    }
    function g(e, t) {
      for (var n of Array.from(e))
        if (e.has(n))
          try {
            n(t);
          } catch (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[permissions] permission change listener failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("permission-change-listener-failed");
          }
    }
    ((l.subscribeToPermissionChange = c),
      (l.watchPermissionState = d),
      (l.getKnownPermissionState = m),
      (l.listenForPermissionChanges = p));
  },
  98,
);
