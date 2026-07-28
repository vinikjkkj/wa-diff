__d(
  "WAWebSyncdLogs",
  [
    "WALogger",
    "WAWebPriorLogs",
    "WAWebSyncdConst",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = [].concat(
              Array.from(
                e ? [e] : o("WAWebSyncdConst").CollectionName.members(),
              ),
              [""],
            ),
            n = r("compactMap")(t, function (e) {
              return o("WAWebPriorLogs").WAWebLogCategory.cast(e);
            });
          return o("WAWebPriorLogs").printPriorLogs(n);
        })),
        d.apply(this, arguments)
      );
    }
    ((l.writeSyncdLogImpl = s), (l.printSyncdLogs = c));
  },
  98,
);
