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
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e;
          o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()
            ? (t = yield h(e))
            : (t = e.map(function (e) {
                return o("WAWebLidStatusMigrationKeyUtils")
                  .matKeyConvert(r("WAWebMsgKey").fromString(e))
                  .toString();
              }));
          var n = yield f(t);
          return (
            n.some(function (e) {
              return e == null;
            }) &&
              !o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.isLidMigrated() &&
              (yield p(t, n)),
            n
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          for (
            var n = e.map(function (e) {
                return r("WAWebMsgKey").fromString(e);
              }),
              a = [],
              i = 0;
            i < t.length;
            i++
          )
            t[i] == null &&
              n[i].remote.isLid() &&
              a.push({ key: n[i], idxInOriginalMsgKeys: i });
          if (a.length !== 0) {
            var l = C(
                a.map(function (e) {
                  return e.key;
                }),
              ),
              s = (yield f(l.map(String))).filter(Boolean),
              u = [];
            if (
              (s.forEach(function (e, n) {
                if (e != null) {
                  var o = e.id,
                    i = r("nullthrows")(a[n]).idxInOriginalMsgKeys;
                  if (i == null) {
                    u.length < 3 && u.push(o == null ? "null" : o);
                    return;
                  }
                  t[i] = e;
                }
              }),
              u.length > 0)
            ) {
              var d = e.length;
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[fillMissingLidMessages] ",
                      " no idx, ids=",
                      " keys=",
                      "",
                    ])),
                  u.length,
                  u,
                  d,
                )
                .sendLogs("fillMissingLidMessages-no-original-idx");
            }
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          for (
            var t = yield o("WAWebSchemaMessage")
                .getMessageTable()
                .bulkGet(e, !1),
              n = new Map(),
              r = 0;
            r < e.length;
            r++
          )
            (t[r] == null || t[r].subtype === "message_edit") &&
              (n.set(e[r], r), (t[r] = null));
          if (n.size === 0) return t;
          var a = yield o("WAWebSchemaMessage")
            .getMessageTable()
            .anyOf(["latestEditMsgKey"], Array.from(n.keys()));
          for (var i of a)
            if (!(i.latestEditMsgKey == null || i.subtype === "message_edit")) {
              var l = n.get(i.latestEditMsgKey);
              l != null && (t[l] = i);
            }
          return t;
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
