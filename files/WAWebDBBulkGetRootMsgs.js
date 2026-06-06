__d(
  "WAWebDBBulkGetRootMsgs",
  [
    "WALogger",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebLidStatusMigrationKeyUtils",
    "WAWebMsgKey",
    "WAWebSchemaChat",
    "WAWebSchemaMessage",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e;
          o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()
            ? (n = yield h(e))
            : (n = e.map(function (e) {
                return o("WAWebLidStatusMigrationKeyUtils")
                  .matKeyConvert(r("WAWebMsgKey").fromString(e))
                  .toString();
              }));
          var a = yield f(n, t);
          return (
            a.some(function (e) {
              return e == null;
            }) &&
              !o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.isLidMigrated() &&
              (yield p(n, a, t)),
            a
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          for (
            var a = e.map(function (e) {
                return r("WAWebMsgKey").fromString(e);
              }),
              i = [],
              l = 0;
            l < t.length;
            l++
          )
            t[l] == null &&
              a[l].remote.isLid() &&
              i.push({ key: a[l], idxInOriginalMsgKeys: l });
          if (i.length !== 0) {
            var s = C(
                i.map(function (e) {
                  return e.key;
                }),
              ),
              u = (yield f(s.map(String), n)).filter(Boolean),
              d = [];
            if (
              (u.forEach(function (e, n) {
                if (e != null) {
                  var o = e.id,
                    a = r("nullthrows")(i[n]).idxInOriginalMsgKeys;
                  if (a == null) {
                    d.length < 3 && d.push(o == null ? "null" : o);
                    return;
                  }
                  t[a] = e;
                }
              }),
              d.length > 0)
            ) {
              var m = e.length;
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[fillMissingLidMessages] ",
                      " no idx, decrypt=",
                      " ids=",
                      " keys=",
                      "",
                    ])),
                  d.length,
                  n,
                  d,
                  m,
                )
                .sendLogs("fillMissingLidMessages-no-original-idx");
            }
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          for (
            var n = yield o("WAWebSchemaMessage")
                .getMessageTable()
                .bulkGet(e, t),
              r = new Map(),
              a = 0;
            a < e.length;
            a++
          )
            (n[a] == null || n[a].subtype === "message_edit") &&
              (r.set(e[a], a), (n[a] = null));
          if (r.size === 0) return n;
          var i = yield o("WAWebSchemaMessage")
            .getMessageTable()
            .anyOf(["latestEditMsgKey"], Array.from(r.keys()));
          for (var l of i)
            if (!(l.latestEditMsgKey == null || l.subtype === "message_edit")) {
              var s = r.get(l.latestEditMsgKey);
              s != null && (n[s] = l);
            }
          return n;
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.isLidMigrated()
          )
            return e;
          var t = e.map(function (e) {
              return r("WAWebMsgKey").fromString(e);
            }),
            n = b(
              t.map(function (e) {
                return e.remote;
              }),
            ),
            a = yield o("WAWebSchemaChat")
              .getChatTable()
              .anyOf(
                ["accountLid"],
                Array.from(n, function (e) {
                  return e.toString();
                }),
              ),
            i = new Map(
              a.map(function (e) {
                return [
                  o("WAWebWidFactory").createWid(r("nullthrows")(e.accountLid)),
                  o("WAWebWidFactory").createWid(e.id),
                ];
              }),
            );
          return v(t, i).map(String);
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      var t = e.reduce(function (e, t) {
        var n = o("WAWebLidMigrationUtils").toPn(t.remote);
        return n == null ? e : e.set(t.remote, n);
      }, new Map());
      return v(e, t);
    }
    function b(t) {
      var n = t
        .filter(function (e) {
          return e.isRegularUser();
        })
        .map(function (e) {
          return o("WAWebLidMigrationUtils").toLid(e);
        });
      return (
        n.some(function (e) {
          return e == null;
        }) &&
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "_bulkGetRootMsgsByAccountLid: missing mapping for PN remote",
              ])),
          ),
        new Set(n.filter(Boolean))
      );
    }
    function v(e, t) {
      var n = [],
        a = [],
        i = e.map(function (e) {
          var i = e.remote;
          if (i.isStatus())
            return o("WAWebLidStatusMigrationKeyUtils").matKeyConvert(e);
          if (!i.isRegularUser()) return e;
          var l = o("WAWebLidMigrationUtils").toUserLid(i);
          if (l == null) return (n.length < 3 && n.push(e.id), e);
          var s = t.get(l);
          return s == null
            ? (a.length < 3 && a.push(e.id), e)
            : r("WAWebMsgKey").from({ fromMe: e.fromMe, remote: s, id: e.id });
        });
      return (
        n.length > 0 &&
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[_bulkGetRootMsgsByAccountLid] no lid for PN cnt=",
                " keys=",
                "",
              ])),
            n.length,
            n,
          ),
        a.length > 0 &&
          o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[_bulkGetRootMsgsByAccountLid] no chat for ",
                " lids => ",
                "",
              ])),
            a.length,
            a,
          ),
        i
      );
    }
    ((l.bulkGetRootMsgs = d),
      (l.fixMsgKeysWithChatId = h),
      (l.fixMsgKeysWithPnMapping = C));
  },
  98,
);
