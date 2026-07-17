__d(
  "WAWebDBStoreRevokeMsgs",
  [
    "Promise",
    "WAWebBackendApi",
    "WAWebNoop",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
    "cr:375",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (e = n("cr:375")) != null ? e : {},
      c = u.ftsLightClient,
      d = 20;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = [],
            a = [],
            i = e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var n = yield _(e),
                      r = n.pluginLinkMsgIds,
                      i = n.pluginLinkMsgIdsRowIds;
                    ((t = [].concat(t, r)),
                      (a = [].concat(a, i)),
                      yield o("WAWebSchemaMessage")
                        .getMessageTable()
                        .bulkRemove(t));
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
          (yield (s || (s = n("Promise"))).all(i),
            c == null || c.purge(a).catch(r("WAWebNoop")),
            o("WAWebBackendApi").frontendFireAndForget(
              "deleteAssociatedBotCarouselMsgs",
              { msgKeys: t },
            ));
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
          var t = [],
            n = [],
            r = e.internalId,
            a = e.targetId,
            i = r.split("_")[0];
          return (
            yield o("WAWebSchemaMessage")
              .getMessageTable()
              .between(
                ["internalId"],
                r,
                i + "_g",
                { reverse: !1, limit: d, shouldDecrypt: !1 },
                function (e) {
                  if (e.botResponseTargetId === a)
                    (t.push(e.id), n.push(String(e.rowId)));
                  else return !0;
                  return !1;
                },
              ),
            { pluginLinkMsgIds: t, pluginLinkMsgIdsRowIds: n }
          );
        })),
        f.apply(this, arguments)
      );
    }
    ((l.findAndDeleteAssociatedPluginMsg = m),
      (l.findAssociatedPluginMsgs = _));
  },
  98,
);
