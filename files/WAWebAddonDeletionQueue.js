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
              m();
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e.type,
            );
          }
        },
      ),
        m());
    }
    function m() {
      ((c = !0), u || p());
    }
    function p() {
      ((u = !0),
        (c = !1),
        o("WAWebScheduledOperations")
          .scheduleOperation(
            o("WAWebScheduledOperations").ScheduledOperation.DELETE_ADD_ONS,
            _,
          )
          .then(function (e) {
            ((u = !1), (e || c) && p());
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
    async function _() {
      var e = await o("WAWebAddonDeletionQueueDef").ADDON_DELETION_QUEUE.read({
        limit: o("WAWormQueueDef").WA_WORM_QUEUE_DRAIN_LIMIT,
      });
      if (e.length === 0) return !1;
      var t = new Map();
      for (var n of e) {
        var r = t.get(n.chatId);
        r == null ? t.set(n.chatId, [n]) : r.push(n);
      }
      return (
        await Array.from(t).reduce(function (e, t) {
          var n = t[0],
            r = t[1];
          return e.then(function () {
            return f(n, r);
          });
        }, Promise.resolve()),
        await o("WAWebAddonDeletionQueueDef").ADDON_DELETION_QUEUE.ack(
          e.map(function (e) {
            return e.queueId;
          }),
        ),
        e.length === o("WAWormQueueDef").WA_WORM_QUEUE_DRAIN_LIMIT
      );
    }
    async function f(e, t) {
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
    l.startAddonDeletionQueueDrain = d;
  },
  98,
);
