__d(
  "WAWebAddonDeletionQueue",
  [
    "Promise",
    "WALogger",
    "WAWebAddonDeleteForParents",
    "WAWebAddonDeletionQueueDef",
    "WAWebScheduledOperations",
    "WAWormQueueDef",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = !1,
      d = !1;
    function m() {
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
    function p() {
      ((d = !0), c || _());
    }
    function _() {
      ((c = !0),
        (d = !1),
        o("WAWebScheduledOperations")
          .scheduleOperation(
            o("WAWebScheduledOperations").ScheduledOperation.DELETE_ADD_ONS,
            f,
          )
          .then(function (e) {
            ((c = !1), (e || d) && _());
          })
          .catch(function (t) {
            ((c = !1),
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
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o(
            "WAWebAddonDeletionQueueDef",
          ).ADDON_DELETION_QUEUE.read({
            limit: o("WAWormQueueDef").WA_WORM_QUEUE_DRAIN_LIMIT,
          });
          if (e.length === 0) return !1;
          var t = new Map();
          for (var r of e) {
            var a = t.get(r.chatId);
            a == null ? t.set(r.chatId, [r]) : a.push(r);
          }
          return (
            yield Array.from(t).reduce(
              function (e, t) {
                var n = t[0],
                  r = t[1];
                return e.then(function () {
                  return h(n, r);
                });
              },
              (u || (u = n("Promise"))).resolve(),
            ),
            yield o("WAWebAddonDeletionQueueDef").ADDON_DELETION_QUEUE.ack(
              e.map(function (e) {
                return e.queueId;
              }),
            ),
            e.length === o("WAWormQueueDef").WA_WORM_QUEUE_DRAIN_LIMIT
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            yield o("WAWebAddonDeleteForParents").deleteAddOnsForParents({
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
        })),
        y.apply(this, arguments)
      );
    }
    ((l.startAddonDeletionQueueDrain = m), (l.drainAddonDeletionBatch = f));
  },
  98,
);
