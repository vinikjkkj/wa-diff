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
              f();
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e.type,
            );
          }
        },
      ),
        f());
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (o("WAWebAddonDeletionQueueDef").ADDON_DELETION_QUEUE.isReady()) {
            yield o("WAWebAddonDeletionQueueDef").ADDON_DELETION_QUEUE.add(e);
            return;
          }
          yield o("WAWebScheduledOperations").scheduleOperation(
            o("WAWebScheduledOperations").ScheduledOperation.DELETE_ADD_ONS,
            function () {
              return C(e);
            },
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      ((d = !0), c || g());
    }
    function g() {
      ((c = !0),
        (d = !1),
        o("WAWebScheduledOperations")
          .scheduleOperation(
            o("WAWebScheduledOperations").ScheduledOperation.DELETE_ADD_ONS,
            h,
          )
          .then(function (e) {
            ((c = !1), (e || d) && g());
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
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o(
            "WAWebAddonDeletionQueueDef",
          ).ADDON_DELETION_QUEUE.read({
            limit: o("WAWormQueueDef").WA_WORM_QUEUE_DRAIN_LIMIT,
          });
          return e.length === 0
            ? !1
            : (yield C(e),
              yield o("WAWebAddonDeletionQueueDef").ADDON_DELETION_QUEUE.ack(
                e.map(function (e) {
                  return e.queueId;
                }),
              ),
              e.length === o("WAWormQueueDef").WA_WORM_QUEUE_DRAIN_LIMIT);
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Map();
          for (var r of e) {
            var o = t.get(r.chatId);
            o == null ? t.set(r.chatId, [r]) : o.push(r);
          }
          yield Array.from(t).reduce(
            function (e, t) {
              var n = t[0],
                r = t[1];
              return e.then(function () {
                return v(n, r);
              });
            },
            (u || (u = n("Promise"))).resolve(),
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        S.apply(this, arguments)
      );
    }
    ((l.startAddonDeletionQueueDrain = m), (l.recordAddonDeletions = p));
  },
  98,
);
