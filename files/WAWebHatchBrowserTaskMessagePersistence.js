__d(
  "WAWebHatchBrowserTaskMessagePersistence",
  [
    "WADeepEquals",
    "WAWebHatchBrowserTaskMessageData",
    "WAWebHatchBrowserTaskState",
    "WAWebModelStorageUtils",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            return n.kind === "canonical" &&
              o(
                "WAWebHatchBrowserTaskMessageData",
              ).browserTaskMessageTerminalState(n.task) == null
              ? !1
              : u(e, t, n, r);
          },
        )),
        s.apply(this, arguments)
      );
    }
    function u(e, t, n, r) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i) {
            var l = o("WAWebModelStorageUtils").getStorage(),
              s = e.id,
              u = e.rowId,
              c = o("WAWebHatchBrowserTaskMessageData").messageIdentity(e),
              m = (function (e) {
                if (
                  ((typeof e == "object" && e !== null) ||
                    typeof e == "function") &&
                  e.kind === "canonical" &&
                  "task" in e
                ) {
                  var t = e.task;
                  return {
                    kind: "canonical",
                    task: babelHelpers.extends({}, t),
                  };
                }
                return { kind: "stop" };
              })(a),
              p = function () {
                return o("WAWebModelStorageUtils").getStorage() === l && i();
              },
              _ = yield l.lock(
                ["message"],
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var n = e[0],
                        a = yield n.get(s, !1);
                      if (
                        (a == null ? void 0 : a.unifiedResponse) == null ||
                        !p() ||
                        (u != null && u !== a.rowId) ||
                        c !==
                          o("WAWebHatchBrowserTaskMessageData").messageIdentity(
                            a,
                          ) ||
                        (m.kind === "canonical" &&
                          o(
                            "WAWebHatchBrowserTaskMessageData",
                          ).normalizedTaskID(m.task.browserTaskID) !==
                            o(
                              "WAWebHatchBrowserTaskMessageData",
                            ).normalizedTaskID(t))
                      )
                        return null;
                      var i = o(
                        "WAWebHatchBrowserTaskMessageData",
                      ).mapBrowserTasks(a.unifiedResponse, function (e) {
                        return o(
                          "WAWebHatchBrowserTaskMessageData",
                        ).normalizedTaskID(e.browser_task_id) ===
                          o(
                            "WAWebHatchBrowserTaskMessageData",
                          ).normalizedTaskID(t)
                          ? d(e, m)
                          : e;
                      });
                      if (o("WADeepEquals").deepEqual(i, a.unifiedResponse))
                        return null;
                      if ((yield n.merge(a.id, { unifiedResponse: i }), !p()))
                        throw r("err")("Browser task message request changed");
                      return i;
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              );
            return _ != null && p();
          },
        )),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      var n;
      if (t.kind === "stop") {
        var r = e.state == null ? e.status : String(e.state);
        return o("WAWebHatchBrowserTaskMessageData").terminal(r) != null
          ? e
          : babelHelpers.extends({}, e, {
              state: null,
              status: "completed",
              status_label: null,
              activity_title: null,
              terminal_reason: null,
            });
      }
      var a = t.task,
        i = o(
          "WAWebHatchBrowserTaskMessageData",
        ).browserTaskMessageTerminalState(a);
      return i == null ||
        !o("WAWebHatchBrowserTaskMessageData").canReplace(a.version, e.version)
        ? e
        : babelHelpers.extends({}, e, {
            state: null,
            status: i,
            version: a.version,
            title:
              (n = o("WAWebHatchBrowserTaskState").nonBlank(a.title)) != null
                ? n
                : e.title,
            status_label: null,
            activity_title:
              i === "completed"
                ? o("WAWebHatchBrowserTaskState").nonBlank(a.activityTitle)
                : null,
            terminal_reason: i === "failed" ? a.terminalReason : null,
          });
    }
    l.persistBrowserTaskMessage = e;
  },
  98,
);
