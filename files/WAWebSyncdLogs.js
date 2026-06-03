__d(
  "WAWebSyncdLogs",
  [
    "WALogger",
    "WASyncdConst",
    "WAWebPriorLogs",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = o("WAWebPriorLogs").WAWebLogCategory.cast(t);
          if (r != null) return o("WAWebPriorLogs").writePriorLog(r, n);
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: cannot log unknown cagtegory ",
                "",
              ])),
            t,
          );
        });
        return function (n, r) {
          return t.apply(this, arguments);
        };
      })(),
      u = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = [].concat(
              Array.from(e ? [e] : o("WASyncdConst").CollectionName.members()),
              [""],
            ),
            n = r("compactMap")(t, function (e) {
              return o("WAWebPriorLogs").WAWebLogCategory.cast(e);
            });
          return o("WAWebPriorLogs").printPriorLogs(n);
        });
        return function (n) {
          return e.apply(this, arguments);
        };
      })();
    ((l.writeSyncdLogImpl = s), (l.printSyncdLogs = u));
  },
  98,
);
