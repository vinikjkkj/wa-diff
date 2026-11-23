__d(
  "WAWebSyncdLogs",
  ["WALogger", "WAWebPriorLogs", "WAWebSyncdConst", "compactMap"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n) {
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
    }
    async function u(e) {
      var t = [].concat(
          Array.from(e ? [e] : o("WAWebSyncdConst").CollectionName.members()),
          [""],
        ),
        n = r("compactMap")(t, function (e) {
          return o("WAWebPriorLogs").WAWebLogCategory.cast(e);
        });
      return o("WAWebPriorLogs").printPriorLogs(n);
    }
    ((l.writeSyncdLogImpl = s), (l.printSyncdLogs = u));
  },
  98,
);
