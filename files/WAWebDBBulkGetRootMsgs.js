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
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(e, t) {
      var n = e;
      o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()
        ? (n = await _(e))
        : (n = e.map(function (e) {
            return o("WAWebLidStatusMigrationKeyUtils")
              .matKeyConvert(r("WAWebMsgKey").fromString(e))
              .toString();
          }));
      var a = await p(n, t);
      return (
        a.some(function (e) {
          return e == null;
        }) &&
          !o(
            "WAWebLid1X1MigrationGating",
          ).Lid1X1MigrationUtils.isLidMigrated() &&
          (await m(n, a, t)),
        a
      );
    }
    async function m(t, n, a) {
      for (
        var i = t.map(function (e) {
            return r("WAWebMsgKey").fromString(e);
          }),
          l = [],
          s = 0;
        s < n.length;
        s++
      )
        n[s] == null &&
          i[s].remote.isLid() &&
          l.push({ key: i[s], idxInOriginalMsgKeys: s });
      if (l.length !== 0) {
        var u = f(
            l.map(function (e) {
              return e.key;
            }),
          ),
          c = (await p(u.map(String), a)).filter(Boolean),
          d = [];
        if (
          (c.forEach(function (e, t) {
            if (e != null) {
              var o = e.id,
                a = r("nullthrows")(l[t]).idxInOriginalMsgKeys;
              if (a == null) {
                d.length < 3 && d.push(o == null ? "null" : o);
                return;
              }
              n[a] = e;
            }
          }),
          d.length > 0)
        ) {
          var m = t.length;
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[fillMissingLidMessages] ",
                  " no idx, decrypt=",
                  " ids=",
                  " keys=",
                  "",
                ])),
              d.length,
              a,
              d,
              m,
            )
            .sendLogs("fillMissingLidMessages-no-original-idx");
        }
      }
    }
    async function p(e, t) {
      for (
        var n = await o("WAWebSchemaMessage").getMessageTable().bulkGet(e, t),
          r = new Map(),
          a = 0;
        a < e.length;
        a++
      )
        (n[a] == null || n[a].subtype === "message_edit") &&
          (r.set(e[a], a), (n[a] = null));
      if (r.size === 0) return n;
      var i = await o("WAWebSchemaMessage")
        .getMessageTable()
        .anyOf(["latestEditMsgKey"], Array.from(r.keys()));
      for (var l of i)
        if (!(l.latestEditMsgKey == null || l.subtype === "message_edit")) {
          var s = r.get(l.latestEditMsgKey);
          s != null && (n[s] = l);
        }
      return n;
    }
    async function _(e) {
      if (!o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated())
        return e;
      var t = e.map(function (e) {
          return r("WAWebMsgKey").fromString(e);
        }),
        n = g(
          t.map(function (e) {
            return e.remote;
          }),
        ),
        a = await o("WAWebSchemaChat")
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
    }
    function f(e) {
      var t = e.reduce(function (e, t) {
        var n = o("WAWebLidMigrationUtils").toPn(t.remote);
        return n == null ? e : e.set(t.remote, n);
      }, new Map());
      return h(e, t);
    }
    function g(e) {
      var t = e
        .filter(function (e) {
          return e.isRegularUser();
        })
        .map(function (e) {
          return o("WAWebLidMigrationUtils").toLid(e);
        });
      return (
        t.some(function (e) {
          return e == null;
        }) &&
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "_bulkGetRootMsgsByAccountLid: missing mapping for PN remote",
              ])),
          ),
        new Set(t.filter(Boolean))
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
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[_bulkGetRootMsgsByAccountLid] no lid for PN cnt=",
                " keys=",
                "",
              ])),
            n.length,
            n,
          ),
        a.length > 0 &&
          o("WALogger").ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
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
      (l.fixMsgKeysWithChatId = _),
      (l.fixMsgKeysWithPnMapping = f));
  },
  98,
);
