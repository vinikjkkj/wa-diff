__d(
  "WAWebWamPrivateStats",
  [
    "WALogger",
    "WARandomHex",
    "WAResolvable",
    "WATimeUtils",
    "WAWebWamEnumPsIdAction",
    "WAWebWamGlobals",
    "WAWebWamStorage",
    "WAWebWamUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = {},
      c = {},
      d = {};
    (o("WAWebWamGlobals").PrivateStatsAllIds.map(function (e) {
      ((u[e.keyHashInt] = e.key),
        (c[e.key] = e.keyHashInt),
        (d[e.key] = {
          value: e.keyHashInt,
          rotationPeriodDays: e.rotationPeriodDays,
        }));
    }),
      (u[0] = "none"),
      (c.none = 0),
      (d.none = { value: "none", rotationPeriodDays: -1 }));
    var m = null;
    async function p() {
      if (m != null) return m.promise;
      var e = new (o("WAResolvable").Resolvable)();
      m = e;
      var t = [],
        n = await r("WAWebWamStorage").getPsMeta(),
        a = new Set();
      n.map(function (e) {
        (a.add(e.key),
          d[e.key] === void 0 ? t.push(e.key) : (d[e.key].value = e.value));
      });
      var i = Object.keys(d)
        .filter(function (e) {
          return !a.has(e);
        })
        .map(function (e) {
          return (
            e !== "none" && (d[e].value = o("WARandomHex").randomHex(16)),
            {
              key: e,
              value: d[e].value,
              rotateInDays: d[e].rotationPeriodDays,
              creationTs: o("WATimeUtils").unixTime(),
            }
          );
        });
      (await r("WAWebWamStorage").addPsMeta(i),
        await r("WAWebWamStorage").removePsMeta(t),
        i.map(function (e) {
          return o("WAWebWamUtils").logPsIdUpdate(
            o("WAWebWamEnumPsIdAction").PS_ID_ACTION.CREATED,
            c[e.key],
            e.rotateInDays,
          );
        }),
        t.map(function (e) {
          return o("WAWebWamUtils").logPsIdUpdate(
            o("WAWebWamEnumPsIdAction").PS_ID_ACTION.DELETED,
            c[e],
            d[e].rotationPeriodDays,
          );
        }),
        e.resolve());
    }
    function _() {
      var e = new Map();
      return (
        o("WAWebWamGlobals").PrivateStatsAllIds.forEach(function (t) {
          e.set(t.keyHashInt, String(d[t.key].value));
        }),
        e
      );
    }
    function f(e) {
      if (m == null)
        throw r("err")(
          "can't call getPrivateStatsKeyFromInt without initializing",
        );
      return u[e];
    }
    function g(e) {
      if (e === "regular")
        throw r("err")("tried to get psId for regular channel event");
      if (m == null)
        throw r("err")(
          "can't call getLatestPrivateStatsIdValueFromKey without initializing",
        );
      return d[e].value;
    }
    async function h() {
      var t = [];
      if (m == null)
        throw r("err")("can't call maybeRotatePsIds without initializing");
      try {
        await m.promise;
        var n = await r("WAWebWamStorage").getPsMeta();
        await Promise.all(
          n.map(async function (n) {
            try {
              var r = n.creationTs,
                a = n.key,
                i = n.rotateInDays;
              C(r, i) && (t.push(a), await y(a));
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
          }),
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
    }
    async function y(e) {
      var t = o("WARandomHex").randomHex(16);
      ((d[e].value = t),
        await r("WAWebWamStorage").updatePsMeta({
          key: e,
          rotateInDays: d[e].rotationPeriodDays,
          value: t,
          creationTs: o("WATimeUtils").unixTime(),
        }),
        o("WAWebWamUtils").logPsIdUpdate(
          o("WAWebWamEnumPsIdAction").PS_ID_ACTION.ROTATED,
          c[e],
          d[e].rotationPeriodDays,
        ));
    }
    function C(e, t) {
      if (t === -1 || e == null) return !1;
      var n = t * o("WATimeUtils").DAY_SECONDS,
        r = Math.floor(o("WATimeUtils").unixTime() / n) * n;
      return e < r;
    }
    ((l.initPrivateStats = p),
      (l.getPrivateStatsIdsForCoreWam = _),
      (l.getPrivateStatsKeyFromInt = f),
      (l.getLatestPrivateStatsIdValueFromKey = g),
      (l.maybeRotatePsIds = h));
  },
  98,
);
