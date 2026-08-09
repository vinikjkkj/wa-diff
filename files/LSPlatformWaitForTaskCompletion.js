__d(
  "LSPlatformWaitForTaskCompletion",
  [
    "I64",
    "Promise",
    "asyncToGeneratorRuntime",
    "emptyFunction",
    "err",
    "promiseDone",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = ["acs_sync"];
    function c(e, t, n, r) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, l, c) {
            var d = new Set(),
              m = [],
              p = 0,
              _ = !0,
              f,
              g,
              h = new (s || (s = n("Promise")))(function (e, t) {
                ((f = e), (g = t));
              }),
              y = r("uuidv4")(),
              C = !0,
              b = yield t.runInTransaction(
                (function () {
                  var s = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (s) {
                      yield s.mailbox_task_completion_notification_context.add({
                        notificationName: l,
                        notificationScopeKey: y,
                      });
                      var h = t.tables.pending_tasks.subscribe(function (t, n) {
                          var r = (e || (e = o("I64"))).to_string(t[0]);
                          if (n.operation === "add" || n.operation === "put") {
                            var a = n.value;
                            if (
                              u.some(function (e) {
                                return a.queueName.startsWith(e);
                              }) ||
                              (c != null && a.queueName !== c)
                            )
                              return;
                            d.add(r);
                          } else d.delete(r);
                        }),
                        v = r("emptyFunction"),
                        S =
                          t.tables.mailbox_task_completion_api_tasks.subscribe(
                            function (t, n) {
                              if (
                                n.operation === "add" ||
                                (n.operation === "put" &&
                                  n.value.notificationScopeKey === y)
                              ) {
                                var r = (e || (e = o("I64"))).to_string(
                                  n.value.taskId,
                                );
                                d.delete(r);
                                var a = n.value.success;
                                a == null
                                  ? C && (m.push(r), (p += 1))
                                  : ((_ = a && _), (p -= 1));
                              }
                            },
                          );
                      v = t.subscribeToCommit(function () {
                        p === 0 &&
                          d.size === 0 &&
                          (S(),
                          h(),
                          v(),
                          r("promiseDone")(
                            t.runInTransaction(
                              (function () {
                                var t = n(
                                  "asyncToGeneratorRuntime",
                                ).asyncToGenerator(function* (t) {
                                  for (var n of m)
                                    yield t.mailbox_task_completion_api_tasks.delete(
                                      (e || (e = o("I64"))).of_string(n),
                                    );
                                });
                                return function (e) {
                                  return t.apply(this, arguments);
                                };
                              })(),
                              "readwrite",
                              "background",
                              void 0,
                              i.id + ":144",
                            ),
                          ),
                          _
                            ? f(b)
                            : g(
                                r("err")(
                                  "Not all tasks for " + l + " succeeded",
                                ),
                              ));
                      });
                      try {
                        var R = yield a(s);
                        return (
                          yield s.mailbox_task_completion_notification_context.delete(
                            y,
                          ),
                          R
                        );
                      } catch (e) {
                        throw (v(), S(), h(), e);
                      }
                    },
                  );
                  return function (e) {
                    return s.apply(this, arguments);
                  };
                })(),
                "readwrite",
                void 0,
                void 0,
                i.id + ":65",
              );
            return ((C = !1), h);
          },
        )),
        d.apply(this, arguments)
      );
    }
    l.default = c;
  },
  98,
);
