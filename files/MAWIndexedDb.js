__d(
  "MAWIndexedDb",
  [
    "ExecutionEnvironment",
    "FBLogger",
    "MAWBridge",
    "MAWCacheServiceMiddleware",
    "MAWDataSyncMiddleware",
    "MAWDbFactory",
    "MAWDbMutationMiddleware",
    "MAWDbProtocolMsgIdMiddleware",
    "MAWDbSchema",
    "MAWDexie",
    "MAWTransactor",
    "MWFBLogger",
    "cr:10181",
    "cr:10182",
    "cr:3527",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c() {
      var e = o("MAWDbFactory").makeIDBFactory("idb", "worker");
      return babelHelpers.extends({}, e, {
        makeDB: function (a, i, l) {
          var t = [o("MAWDbMutationMiddleware").getMAWDbMutationMiddleware];
          return (
            t.push(
              o("MAWDbProtocolMsgIdMiddleware").MAWDbProtocolMsgIdMiddleware,
            ),
            t.push(r("MAWCacheServiceMiddleware")),
            i.enableDataSyncMiddleware &&
              t.push(o("MAWDataSyncMiddleware").getDataSyncMiddleware),
            n("cr:3527") != null && t.push(n("cr:3527")),
            e.makeDB(
              a,
              { autoOpen: !0, middleware: t, onDbPopulate: i.onDbPopulate },
              l,
            )
          );
        },
      });
    }
    var d = c(),
      m = d.willSetupDB,
      p = function (t, n, r) {
        return d.makeDB(t, n, r);
      },
      _ = d.closeDB,
      f = d.getDB,
      g = function (t) {
        return d.reset_singleton_INTERNAL_ONLY();
      },
      h = new WeakMap(),
      y = o("MWFBLogger").MWLogger().tags(["db", "afterTransaction"]);
    function C(e) {
      var t = r("MAWDexie").currentTransaction;
      if (t == null)
        throw y.mustfixThrow(
          "afterTransaction called outside of dexie transaction",
          "maw_db",
        );
      var a = h.get(t);
      if (a != null) a.push(e);
      else {
        var i = [e];
        (h.set(t, i),
          t.on("complete", function () {
            (h.delete(t),
              r("gkx")("5675") &&
              (u || (u = r("ExecutionEnvironment"))).isInMainThread &&
              n("cr:10182") !== null &&
              n("cr:10181") !== null
                ? n("cr:10182").handleEvents(
                    n("cr:10181").LSDatabaseSingleton,
                    i,
                  )
                : o("MAWBridge")
                    .getBridge()
                    .fireAndForget("event", "uiUpdate", { events: i }));
          }));
      }
    }
    var b = new Set([
      "NewMsg",
      "NewMsgs",
      "MsgUpdated",
      "NewMedia",
      "NewMediaRange",
      "MediaExpired",
      "DeleteMessagesOfThread",
      "UpsertReaction",
      "DeleteReaction",
      "DeleteMessages",
      "NewXMA",
      "EditMsgHistoryAdded",
      "OneToOneMessageRequestLoaded",
      "MsgsStartCountdown",
      "XMAShareTombstoned",
      "NewReceiverFetchInfo",
      "NewXMAs",
      "NewPoll",
      "RavenActionUpdate",
      "ParticipantsUpdated",
      "EphemeralSettingsUpdatedForUI",
      "ReceivedReceipt",
    ]);
    function v(t) {
      if (b.has(t.tag)) {
        r("FBLogger")("wmi").INFO(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[MpsMessageRendering] Ignoring afterTxn event: ",
              "",
            ])),
          t.tag,
        );
        return;
      }
      var n = ["UpdateThreadActivity", "VerifyThreadExists", "ThreadUpdated"];
      if (
        (n.includes(t.tag) ||
          r("FBLogger")("wmi").MUSTFIX(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[MpsMessageRendering] ",
                " should NOT be emitted in MAW: afterTransaction",
              ])),
            t.tag,
          ),
        t.tag === "ThreadUpdated")
      )
        try {
          var o = t.value.snippetContactIDs;
          o != null &&
            o.some(function (e) {
              return e === "Facebook User";
            }) &&
            (y.mustfix(
              'Something is still setting a contact id as "Facebook User"',
            ),
            (t.value = babelHelpers.extends({}, t.value, {
              snippetContactIDs: o.map(function (e) {
                return e === "Facebook User" ? "0" : e;
              }),
            })));
        } catch (e) {}
      C(t);
    }
    ((l.TABLES_TO_ENCRYPT = o("MAWDbSchema").TABLES_TO_ENCRYPT),
      (l.makeMsgrTransactor = o("MAWTransactor").makeMsgrTransactor),
      (l.willSetupDB = m),
      (l.makeDB = p),
      (l.closeDB = _),
      (l.getDB = f),
      (l.setDB_INTERNAL_USE_ONLY = g),
      (l.afterTransaction = v));
  },
  98,
);
