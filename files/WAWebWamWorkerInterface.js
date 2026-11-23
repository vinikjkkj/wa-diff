__d(
  "WAWebWamWorkerInterface",
  ["WALogger", "WAWebWamStorage"],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(e) {
      await d(e);
    }
    async function d(t) {
      try {
        var n = "commit",
          a = t.$className,
          i = JSON.stringify(t.all);
        return (
          await r("WAWebWamStorage").storeWorkerWamData({
            action: n,
            name: a,
            payload: i,
          }),
          !0
        );
      } catch (t) {
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "wam sw commit failed, ",
                "",
              ])),
            t,
          ),
          !1
        );
      }
    }
    function m(e, t) {
      try {
        var n = "set",
          a = e.name,
          i = JSON.stringify({ value: t });
        r("WAWebWamStorage")
          .storeWorkerWamData({ action: n, name: a, payload: i })
          .catch(function (e) {
            o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "wam set failed, ",
                  "",
                ])),
              e,
            );
          });
      } catch (e) {
        o("WALogger").ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "wam set failed, ",
              "",
            ])),
          e,
        );
      }
    }
    ((l.commit = c), (l.commitWithResult = d), (l.set = m));
  },
  98,
);
