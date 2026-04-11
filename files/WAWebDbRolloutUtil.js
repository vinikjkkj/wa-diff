__d(
  "WAWebDbRolloutUtil",
  [
    "WALogger",
    "WAWebLocalSchemaVersions",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebSchemaVersions",
    "WAWebWamEnumWebDbVersionSourceType",
    "WAWebWebDbVersionsSourceWamEvent",
    "asyncToGeneratorRuntime",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = -1;
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !(
              o("WAWebRuntimeEnvironmentUtils").isWorker() &&
              !o("WAWebRuntimeEnvironmentUtils").isServiceWorker()
            ) &&
            !o("WAWebSchemaVersions").hasSchemaVersions()
          ) {
            if (r("justknobx")._("1854") === !0) {
              o("WAWebSchemaVersions").setSchemaVersions(new Map());
              return;
            }
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[storage] start load schema versions",
                ])),
            );
            var t = new Map();
            (Array.from(
              o("WAWebSchemaVersions").DatabaseNames.members(),
              function (e) {
                var n = null;
                e: {
                  if (
                    e === o("WAWebSchemaVersions").DatabaseNames.ModelStorage
                  ) {
                    n = r("justknobx")._("1617");
                    break e;
                  }
                  if (e === o("WAWebSchemaVersions").DatabaseNames.FtsStorage) {
                    n = r("justknobx")._("1618");
                    break e;
                  }
                  if (
                    e === o("WAWebSchemaVersions").DatabaseNames.JobsStorage
                  ) {
                    n = r("justknobx")._("1619");
                    break e;
                  }
                  if (
                    e === o("WAWebSchemaVersions").DatabaseNames.LruMediaStorage
                  ) {
                    n = r("justknobx")._("1620");
                    break e;
                  }
                  if (
                    e === o("WAWebSchemaVersions").DatabaseNames.OffdStorage
                  ) {
                    n = r("justknobx")._("1621");
                    break e;
                  }
                  if (
                    e === o("WAWebSchemaVersions").DatabaseNames.SignalStorage
                  ) {
                    n = r("justknobx")._("1623");
                    break e;
                  }
                  if (
                    e === o("WAWebSchemaVersions").DatabaseNames.WorkerStorage
                  ) {
                    n = r("justknobx")._("1624");
                    break e;
                  }
                  if (e === o("WAWebSchemaVersions").DatabaseNames.SW) {
                    n = r("justknobx")._("1662");
                    break e;
                  }
                  if (e === o("WAWebSchemaVersions").DatabaseNames.WAWC) {
                    n = r("justknobx")._("1663");
                    break e;
                  }
                  if (e === o("WAWebSchemaVersions").DatabaseNames.WAWCDBEnc) {
                    n = r("justknobx")._("1664");
                    break e;
                  }
                  if (
                    e === o("WAWebSchemaVersions").DatabaseNames.StatusStorage
                  ) {
                    n = r("justknobx")._("3717");
                    break e;
                  }
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                }
                n != null && n !== d && t.set(e, n);
              },
            ),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[storage] database allowed versions: ",
                    "",
                  ])),
                Array.from(t),
              ));
            var n = yield o(
              "WAWebLocalSchemaVersions",
            ).getLocalSchemaVersions();
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[storage] found ",
                  " local versions",
                ])),
              n.size,
            );
            var a = 0,
              i = [];
            if (
              (n.forEach(function (e, n) {
                var r = t == null ? void 0 : t.get(n);
                r != null &&
                  e > r &&
                  (a++,
                  i.length < 3 &&
                    i.push({ key: n, ksVersion: r, localVersion: e }),
                  t == null || t.set(n, e));
              }),
              a > 0)
            ) {
              var l = JSON.stringify(i);
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[storage] ks->local override cnt=",
                      " ",
                      "",
                    ])),
                  a,
                  l,
                )
                .sendLogs("[storage] overriding ks version with local version");
            }
            (new (o(
              "WAWebWebDbVersionsSourceWamEvent",
            ).WebDbVersionsSourceWamEvent)({
              webDbVersionSource: o("WAWebWamEnumWebDbVersionSourceType")
                .WEB_DB_VERSION_SOURCE_TYPE.KNOB,
              webSchemaInitiator: o("WAWebSchemaVersions").getLoaderType(),
            }).commit(),
              o("WAWebSchemaVersions").hasSchemaVersions() ||
                o("WAWebSchemaVersions").setSchemaVersions(t));
          }
        })),
        p.apply(this, arguments)
      );
    }
    ((l.AnyDbVersion = d), (l.loadSchemaVersions = m));
  },
  98,
);
