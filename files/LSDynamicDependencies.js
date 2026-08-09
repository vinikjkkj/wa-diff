__d(
  "LSDynamicDependencies",
  [
    "Bootloader",
    "LSDynamicDependenciesEventEmitter",
    "LSExpandedStaticDependencies",
    "ODS",
    "Promise",
    "SiteData",
    "asyncToGeneratorRuntime",
    "clearTimeout",
    "err",
    "justknobx",
    "nullthrows",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = babelHelpers.extends({}, r("LSExpandedStaticDependencies"));
    function c(e) {
      Object.assign(u, e);
    }
    var d = { _tombstone: !0 };
    function m(t) {
      var a = new Map();
      for (var i of t) {
        var l = i.name;
        l != null && !f(l) && a.set(l, r("nullthrows")(i.value));
      }
      if (a.size === 0) return (s || (s = n("Promise"))).resolve();
      var c = new (s || (s = n("Promise")))(function (t) {
        var i = {},
          l = [],
          s = function () {
            var t = d[0],
              r = d[1],
              a = r == null ? void 0 : r.__dr;
            ((i[a] = { be: 1, r: [] }),
              l.push(a),
              (e || (e = o("ODS"))).bumpEntityKey(
                3185,
                "ls_download_dependency.relay",
                a,
              ),
              (u[t] = {
                load: (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* () {
                      return (yield c, u[t]);
                    },
                  );
                  function r() {
                    return e.apply(this, arguments);
                  }
                  return r;
                })(),
              }));
          };
        for (var d of a) s();
        (r("Bootloader").handlePayload({
          compMap: i,
          consistency: { rev: r("SiteData").client_revision },
        }),
          p(r("Bootloader"), l, function (e) {
            (Array.from(a.entries()).forEach(function (t, n) {
              var r = t[0],
                o = t[1];
              u[r] = e[n];
            }),
              t());
          }));
      });
      return c;
    }
    function p(e, t, n) {
      return e.loadModules.call(e, t, function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return n(t);
      });
    }
    function _(e) {
      return e.charAt(0).toUpperCase() + e.slice(1);
    }
    function f(e) {
      return e in u && u[e] !== d;
    }
    var g = r("justknobx")._("2800");
    function h(t, a, i) {
      var l = new Map();
      for (var c of t != null ? t : []) f(c) || l.set(c, "LS" + _(c));
      for (var m of a != null ? a : [])
        f(m + ".bs")
          ? m + ".nop" in u || l.set(m + ".nop", "LS" + _(m) + ".nop")
          : l.set(m + ".bs", "LS" + _(m) + ".nop");
      for (var h of i != null ? i : []) h in u || l.set(h, "LS" + _(h));
      if (l.size === 0) return (s || (s = n("Promise"))).resolve();
      var y = new (s || (s = n("Promise")))(function (t, a) {
        var i = {},
          s = [],
          c = function () {
            var t = m[0],
              r = m[1];
            ((e || (e = o("ODS"))).bumpEntityKey(
              3185,
              "ls_download_dependency.bootloader",
              r,
            ),
              o("LSDynamicDependenciesEventEmitter").emitLoadModuleEvent(r),
              (i[r] = { be: 1, r: [] }),
              s.push(r),
              (u[t] = {
                load: (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* () {
                      try {
                        yield y;
                      } catch (e) {
                        throw ((u[t] = d), e);
                      }
                      return u[t];
                    },
                  );
                  function r() {
                    return e.apply(this, arguments);
                  }
                  return r;
                })(),
              }));
          };
        for (var m of l) c();
        r("Bootloader").handlePayload({
          compMap: i,
          consistency: { rev: r("SiteData").client_revision },
        });
        var _ = p(r("Bootloader"), s, function (e) {
            (r("clearTimeout")(f),
              Array.from(l.entries()).forEach(function (t, n) {
                var r = t[0],
                  o = t[1];
                u[r] = e[n];
              }),
              t());
          }),
          f = r("setTimeout")(function () {
            _.remove();
            var e = r("err")(
              "Dynamic sproc loading timeout (%s ms); was loading: %s",
              g,
              Array.from(l.keys()),
            );
            ((e.name = "dynamic_sproc_loading_timeout"), a(e));
          }, g);
      });
      return y;
    }
    ((l.cachedModules = u),
      (l.addToCachedModules = c),
      (l.TOMBSTONE = d),
      (l.downloadRelayDependencies = m),
      (l.downloadBootloaderDependencies = h));
  },
  98,
);
