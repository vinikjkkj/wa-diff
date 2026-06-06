__d(
  "WAWebSyncdLogs",
  ["WALogger", "WASyncdConst", "WAWebPriorLogs", "compactMap"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = async function (n, r) {
        var t = o("WAWebPriorLogs").WAWebLogCategory.cast(n);
        if (t != null) return o("WAWebPriorLogs").writePriorLog(t, r);
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: cannot log unknown cagtegory ",
              "",
            ])),
          n,
        );
      },
      u = async function (t) {
        var e = [].concat(
            Array.from(t ? [t] : o("WASyncdConst").CollectionName.members()),
            [""],
          ),
          n = r("compactMap")(e, function (e) {
            return o("WAWebPriorLogs").WAWebLogCategory.cast(e);
          });
        return o("WAWebPriorLogs").printPriorLogs(n);
      };
    ((l.writeSyncdLogImpl = s), (l.printSyncdLogs = u));
  },
  98,
);
