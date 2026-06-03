__d(
  "WAWebWamPrivateStats",
  [
    "Promise",
    "WALogger",
    "WARandomHex",
    "WAResolvable",
    "WATimeUtils",
    "WAWebWamEnumPsIdAction",
    "WAWebWamGlobals",
    "WAWebWamStorage",
    "WAWebWamUtils",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = {},
      d = {},
      m = {};
    (o("WAWebWamGlobals").PrivateStatsAllIds.map(function (e) {
      ((c[e.keyHashInt] = e.key),
        (d[e.key] = e.keyHashInt),
        (m[e.key] = {
          value: e.keyHashInt,
          rotationPeriodDays: e.rotationPeriodDays,
        }));
    }),
      (c[0] = "none"),
      (d.none = 0),
      (m.none = { value: "none", rotationPeriodDays: -1 }));
    var p = null;
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (p != null) return p.promise;
          var e = new (o("WAResolvable").Resolvable)();
          p = e;
          var t = [],
            n = yield r("WAWebWamStorage").getPsMeta(),
            a = new Set();
          n.map(function (e) {
            (a.add(e.key),
              m[e.key] === void 0 ? t.push(e.key) : (m[e.key].value = e.value));
          });
          var i = Object.keys(m)
            .filter(function (e) {
              return !a.has(e);
            })
            .map(function (e) {
              return (
                e !== "none" && (m[e].value = o("WARandomHex").randomHex(16)),
                {
                  key: e,
                  value: m[e].value,
                  rotateInDays: m[e].rotationPeriodDays,
                  creationTs: o("WATimeUtils").unixTime(),
                }
              );
            });
          (yield r("WAWebWamStorage").addPsMeta(i),
            yield r("WAWebWamStorage").removePsMeta(t),
            i.map(function (e) {
              return o("WAWebWamUtils").logPsIdUpdate(
                o("WAWebWamEnumPsIdAction").PS_ID_ACTION.CREATED,
                d[e.key],
                e.rotateInDays,
              );
            }),
            t.map(function (e) {
              return o("WAWebWamUtils").logPsIdUpdate(
                o("WAWebWamEnumPsIdAction").PS_ID_ACTION.DELETED,
                d[e],
                m[e].rotationPeriodDays,
              );
            }),
            e.resolve());
        })),
        f.apply(this, arguments)
      );
    }
    function g() {
      var e = new Map();
      return (
        o("WAWebWamGlobals").PrivateStatsAllIds.forEach(function (t) {
          e.set(t.keyHashInt, String(m[t.key].value));
        }),
        e
      );
    }
    function h(e) {
      if (p == null)
        throw r("err")(
          "can't call getPrivateStatsKeyFromInt without initializing",
        );
      return c[e];
    }
    function y(e) {
      if (e === "regular")
        throw r("err")("tried to get psId for regular channel event");
      if (p == null)
        throw r("err")(
          "can't call getLatestPrivateStatsIdValueFromKey without initializing",
        );
      return m[e].value;
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = [];
          if (p == null)
            throw r("err")("can't call maybeRotatePsIds without initializing");
          try {
            yield p.promise;
            var a = yield r("WAWebWamStorage").getPsMeta();
            yield (u || (u = n("Promise"))).all(
              a.map(
                (function () {
                  var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      try {
                        var r = n.creationTs,
                          a = n.key,
                          i = n.rotateInDays;
                        R(r, i) && (t.push(a), yield v(a));
                      } catch (t) {
                        o("WALogger").WARN(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "error while rotating PS id for key ",
                              "",
                            ])),
                          n.key,
                        );
                      }
                    },
                  );
                  return function (e) {
                    return r.apply(this, arguments);
                  };
                })(),
              ),
            );
          } catch (e) {
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "error while rotating PS ids ",
                  "",
                ])),
              e,
            );
          }
          return t;
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WARandomHex").randomHex(16);
          ((m[e].value = t),
            yield r("WAWebWamStorage").updatePsMeta({
              key: e,
              rotateInDays: m[e].rotationPeriodDays,
              value: t,
              creationTs: o("WATimeUtils").unixTime(),
            }),
            o("WAWebWamUtils").logPsIdUpdate(
              o("WAWebWamEnumPsIdAction").PS_ID_ACTION.ROTATED,
              d[e],
              m[e].rotationPeriodDays,
            ));
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      if (t === -1 || e == null) return !1;
      var n = t * o("WATimeUtils").DAY_SECONDS,
        r = Math.floor(o("WATimeUtils").unixTime() / n) * n;
      return e < r;
    }
    ((l.initPrivateStats = _),
      (l.getPrivateStatsIdsForCoreWam = g),
      (l.getPrivateStatsKeyFromInt = h),
      (l.getLatestPrivateStatsIdValueFromKey = y),
      (l.maybeRotatePsIds = C));
  },
  98,
);
