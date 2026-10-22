__d(
  "WAWebDBBulkGetRootMsgs",
  [
    "WALogger",
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
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return m(yield _(e));
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(function (e) {
              return r("WAWebMsgKey").fromString(e);
            }),
            n = g(
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
          return h(t, i).map(String);
        })),
        f.apply(this, arguments)
      );
    }
    function g(t) {
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
    function h(e, t) {
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
    ((l.bulkGetRootMsgs = c), (l.fixMsgKeysWithChatId = _));
  },
  98,
);
