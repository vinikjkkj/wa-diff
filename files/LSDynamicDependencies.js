__d(
  "LSDynamicDependencies",
  [
    "Bootloader",
    "FBLogger",
    "LSDynamicDependenciesEventEmitter",
    "LSExpandedStaticDependencies",
    "LSServerProgramHardening",
    "ODS",
    "SiteData",
    "clearTimeout",
    "err",
    "justknobx",
    "nullthrows",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = babelHelpers.extends({}, r("LSExpandedStaticDependencies"));
    function u(e) {
      Object.assign(s, e);
    }
    var c = { _tombstone: !0 };
    function d(t) {
      var n = new Map();
      for (var a of t) {
        var i = a.name;
        if (i != null && !h(i)) {
          var l = r("nullthrows")(a.value);
          g(i, l.__dr, f(i) === l.__dr) && n.set(i, l);
        }
      }
      if (n.size === 0) return Promise.resolve();
      var u = new Promise(function (t) {
        var a = {},
          i = [],
          l = function () {
            var t = c[0],
              n = c[1],
              r = n == null ? void 0 : n.__dr;
            ((a[r] = { be: 1, r: [] }),
              i.push(r),
              (e || (e = o("ODS"))).bumpEntityKey(
                3185,
                "ls_download_dependency.relay",
                r,
              ),
              (s[t] = {
                load: async function () {
                  return (await u, s[t]);
                },
              }));
          };
        for (var c of n) l();
        (r("Bootloader").handlePayload({
          compMap: a,
          consistency: { rev: r("SiteData").client_revision },
        }),
          m(r("Bootloader"), i, function (e) {
            (Array.from(n.entries()).forEach(function (t, n) {
              var r = t[0];
              s[r] = e[n];
            }),
              t());
          }));
      });
      return u;
    }
    function m(e, t, n) {
      return e.loadModules.call(e, t, function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return n(t);
      });
    }
    function p(e) {
      return e.charAt(0).toUpperCase() + e.slice(1);
    }
    var _ = ".bs";
    function f(e) {
      var t = e.endsWith(_),
        n = t ? e.slice(0, -_.length) : e;
      return o("LSServerProgramHardening").isCanonicalCallableName(n)
        ? "LS" + p(n) + (t ? ".nop" : "")
        : null;
    }
    function g(e, t, n) {
      if (n) return !0;
      var a = o("LSServerProgramHardening").getRestrictedOpsMode();
      return a == null
        ? !0
        : a === "enforce"
          ? (r("FBLogger")("wmi", "ls_server_program_dependency").mustfix(
              "Refused server program dependency %s bound to %s",
              e,
              String(t),
            ),
            !1)
          : (r("FBLogger")("wmi", "ls_server_program_dependency").mustfix(
              "Server program dependency %s is bound to %s",
              e,
              String(t),
            ),
            !0);
    }
    function h(e) {
      return e in s && s[e] !== c;
    }
    var y = r("justknobx")._("2800");
    function C(t, n, a) {
      var i = new Map();
      for (var l of t != null ? t : []) {
        var u = "LS" + p(l);
        !h(l) &&
          g(l, u, o("LSServerProgramHardening").isCanonicalCallableName(l)) &&
          i.set(l, u);
      }
      for (var d of n != null ? n : []) {
        var _ = "LS" + p(d) + ".nop",
          f = null;
        (h(d + ".bs") ? d + ".nop" in s || (f = d + ".nop") : (f = d + ".bs"),
          f != null &&
            g(d, _, o("LSServerProgramHardening").isCanonicalCallableName(d)) &&
            i.set(f, _));
      }
      for (var C of a != null ? a : []) {
        var b = "LS" + p(C);
        !(C in s) &&
          g(C, b, o("LSServerProgramHardening").isCanonicalCallableName(C)) &&
          i.set(C, b);
      }
      if (i.size === 0) return Promise.resolve();
      var v = new Promise(function (t, n) {
        var a = {},
          l = [],
          u = function () {
            var t = d[0],
              n = d[1];
            ((e || (e = o("ODS"))).bumpEntityKey(
              3185,
              "ls_download_dependency.bootloader",
              n,
            ),
              o("LSDynamicDependenciesEventEmitter").emitLoadModuleEvent(n),
              (a[n] = { be: 1, r: [] }),
              l.push(n),
              (s[t] = {
                load: async function () {
                  try {
                    await v;
                  } catch (e) {
                    throw ((s[t] = c), e);
                  }
                  return s[t];
                },
              }));
          };
        for (var d of i) u();
        r("Bootloader").handlePayload({
          compMap: a,
          consistency: { rev: r("SiteData").client_revision },
        });
        var p = m(r("Bootloader"), l, function (e) {
            (r("clearTimeout")(_),
              Array.from(i.entries()).forEach(function (t, n) {
                var r = t[0];
                s[r] = e[n];
              }),
              t());
          }),
          _ = r("setTimeout")(function () {
            p.remove();
            var e = r("err")(
              "Dynamic sproc loading timeout (%s ms); was loading: %s",
              y,
              Array.from(i.keys()),
            );
            ((e.name = "dynamic_sproc_loading_timeout"), n(e));
          }, y);
      });
      return v;
    }
    ((l.cachedModules = s),
      (l.addToCachedModules = u),
      (l.TOMBSTONE = c),
      (l.downloadRelayDependencies = d),
      (l.downloadBootloaderDependencies = C));
  },
  98,
);
