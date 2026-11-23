__d(
  "WAWebAddonDeletionQueue",
  [
    "WALogger",
    "WAWebAddonDeleteForParents",
    "WAWebAddonDeletionQueueDef",
    "WAWebScheduledOperations",
    "WAWormQueueDef",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = !1,
      c = !1;
    function d() {
      (o("WAWebAddonDeletionQueueDef").ADDON_DELETION_QUEUE.subscribe(
        function (e) {
          e: {
            if (e.type === "new_entities") {
              p();
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e.type,
            );
          }
        },
      ),
        p());
    }
    async function m(e) {
      if (o("WAWebAddonDeletionQueueDef").ADDON_DELETION_QUEUE.isReady()) {
        await o("WAWebAddonDeletionQueueDef").ADDON_DELETION_QUEUE.add(e);
        return;
      }
      await o("WAWebScheduledOperations").scheduleOperation(
        o("WAWebScheduledOperations").ScheduledOperation.DELETE_ADD_ONS,
        function () {
          return g(e);
        },
      );
    }
    function p() {
      ((c = !0), u || _());
    }
    function _() {
      ((u = !0),
        (c = !1),
        o("WAWebScheduledOperations")
          .scheduleOperation(
            o("WAWebScheduledOperations").ScheduledOperation.DELETE_ADD_ONS,
            f,
          )
          .then(function (e) {
            ((u = !1), (e || c) && _());
          })
          .catch(function (t) {
            ((u = !1),
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[addon-deletion-queue] drain failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .tags("addons", "messaging")
                .sendLogs("addon-deletion-queue-drain-failed"));
          }));
    }
    async function f() {
      var e = await o("WAWebAddonDeletionQueueDef").ADDON_DELETION_QUEUE.read({
        limit: o("WAWormQueueDef").WA_WORM_QUEUE_DRAIN_LIMIT,
      });
      return e.length === 0
        ? !1
        : (await g(e),
          await o("WAWebAddonDeletionQueueDef").ADDON_DELETION_QUEUE.ack(
            e.map(function (e) {
              return e.queueId;
            }),
          ),
          e.length === o("WAWormQueueDef").WA_WORM_QUEUE_DRAIN_LIMIT);
    }
    async function g(e) {
      var t = new Map();
      for (var n of e) {
        var r = t.get(n.chatId);
        r == null ? t.set(n.chatId, [n]) : r.push(n);
      }
      await Array.from(t).reduce(function (e, t) {
        var n = t[0],
          r = t[1];
        return e.then(function () {
          return h(n, r);
        });
      }, Promise.resolve());
    }
    async function h(e, t) {
      try {
        await o("WAWebAddonDeleteForParents").deleteAddOnsForParents({
          chatId: e,
          parentMsgKeys: t.map(function (e) {
            return e.parentMsgKey;
          }),
        });
      } catch (n) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[addon-deletion-queue] delete failed for ",
                ", dropping ",
                " rows",
              ])),
            e,
            t.length,
          )
          .catching(r("getErrorSafe")(n))
          .tags("addons", "messaging")
          .sendLogs("addon-deletion-queue-failed");
      }
    }
    ((l.startAddonDeletionQueueDrain = d), (l.recordAddonDeletions = m));
  },
  98,
);
