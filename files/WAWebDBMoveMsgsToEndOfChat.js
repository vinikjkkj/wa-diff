__d(
  "WAWebDBMoveMsgsToEndOfChat",
  [
    "WAWebDBMessageUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgKey",
    "WAWebNoop",
    "WAWebOrderPreservingHex",
    "WAWebSchemaFtsIndexingQueue",
    "WAWebSyncGatingUtils",
    "cr:375",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = n("cr:375")) != null ? e : {},
      u = s.ftsLightClient,
      c = ["hasLink", "isMediaMsg", "isDocMsg", "isCarouselMsg", "isEventMsg"];
    async function d(e, t) {
      if (e.length === 0) return [];
      var n = await o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["message", "message-association"], async function (n) {
          var r = n[0],
            a = n[1],
            i = m(await r.bulkGet(e));
          if (i.size === 0) return [];
          var l = await r.all({
              reverse: !0,
              limit: 1,
              index: ["rowId"],
              returnKeyType: "keys",
            }),
            s = Array.from(i),
            u = await Promise.all(
              s.map(function (e) {
                var t = e[0],
                  n = e[1];
                return r.between(
                  ["internalId"],
                  o("WAWebDBMessageUtils").beginningOfChat(t),
                  o("WAWebDBMessageUtils").endOfChat(t),
                  { limit: n.length, reverse: !0 },
                );
              }),
            ),
            c = l[0] + 1,
            d = [];
          if (
            (s.forEach(function (e, n) {
              var r = e[0],
                a = e[1],
                i = u[n],
                l = i.flatMap(function (e) {
                  var t;
                  return (t = e.internalId) != null ? t : [];
                });
              if (
                !(
                  _(a, l) ||
                  f(a, i, t == null ? void 0 : t.skipChatsWithMsgsAfterT)
                )
              ) {
                var s = o("WAWebDBMessageUtils").getInChatMsgId(l[0]) + 1;
                for (var m of a)
                  d.push({ row: m, chatId: r, rowId: c++, inChatMsgId: s++ });
              }
            }),
            d.length === 0)
          )
            return [];
          await r.bulkMergeOnly(d.map(g));
          var p = d.flatMap(h);
          return (p.length > 0 && (await a.bulkCreateOrReplace(p)), d);
        });
      return (
        y(n),
        n.map(function (e) {
          var t = e.row,
            n = e.rowId;
          return { id: t.id, rowId: n };
        })
      );
    }
    function m(e) {
      var t = new Map();
      for (var n of e) {
        var o,
          a = n == null ? void 0 : n.internalId;
        if (!(n == null || a == null || n.rowId == null)) {
          var i = r("WAWebMsgKey").fromString(n.id).remote;
          if (a.startsWith(i.toString() + "_")) {
            var l = i.toString(),
              s = (o = t.get(l)) != null ? o : [i, []];
            (s[1].push(n), t.set(l, s));
          }
        }
      }
      return new Map(
        Array.from(t.values(), function (e) {
          var t = e[0],
            n = e[1];
          return [t, n.sort(p)];
        }),
      );
    }
    function p(e, t) {
      var n, r;
      return (
        o("WAWebDBMessageUtils").getInChatMsgId(
          (n = e.internalId) != null ? n : "",
        ) -
        o("WAWebDBMessageUtils").getInChatMsgId(
          (r = t.internalId) != null ? r : "",
        )
      );
    }
    function _(e, t) {
      var n = new Set(t);
      return e.every(function (e) {
        return e.internalId != null && n.has(e.internalId);
      });
    }
    function f(e, t, n) {
      if (n == null) return !1;
      var r = new Set(
          e.map(function (e) {
            return e.id;
          }),
        ),
        o = t.find(function (e) {
          return !r.has(e.id);
        });
      return (o == null ? void 0 : o.t) != null && o.t > n;
    }
    function g(e) {
      var t = e.chatId,
        n = e.inChatMsgId,
        r = e.row,
        a = e.rowId,
        i = {
          id: r.id,
          internalId: o("WAWebDBMessageUtils").craftInternalId({
            chatId: t.toString(),
            inChatMsgId: n,
          }),
          rowId: a,
        };
      for (var l of c) r[l] === r.rowId && (i[l] = a);
      !o("WAWebSyncGatingUtils").shouldPopulateStarMessageWithTimestamp() &&
        r.isStarred === r.rowId &&
        (i.isStarred = a);
      var s = r.internalThreadIDs;
      if (s != null) {
        var u = o("WAWebOrderPreservingHex").orderPreservingHex(n);
        i.internalThreadIDs = s.map(function (e) {
          return "" + e.slice(0, e.lastIndexOf("_") + 1) + u;
        });
      }
      return i;
    }
    function h(e) {
      var t = e.chatId,
        n = e.inChatMsgId,
        r = e.row,
        a = r.associationType,
        i = r.parentMsgKey;
      return a == null || i == null
        ? []
        : [
            {
              msgKey: r.id,
              parentMsgKey: i,
              associationType: a,
              msgKeyInternalId: o("WAWebDBMessageUtils").craftInternalId({
                chatId: t.toString(),
                inChatMsgId: n,
              }),
            },
          ];
    }
    function y(e) {
      e.length !== 0 &&
        (u == null ||
          u
            .purge(
              e.map(function (e) {
                var t = e.row;
                return String(t.rowId);
              }),
            )
            .catch(r("WAWebNoop")),
        o("WAWebSchemaFtsIndexingQueue")
          .getFtsIndexingQueueTable()
          .bulkCreateOrReplace(
            e.map(function (e) {
              var t = e.rowId;
              return { id: String(t) };
            }),
          )
          .then(function () {
            return u == null ? void 0 : u.index();
          })
          .catch(r("WAWebNoop")));
    }
    l.moveMsgsToEndOfChat = d;
  },
  98,
);
