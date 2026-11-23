__d(
  "WAWebHatchBrowserTaskMessagePersistence",
  [
    "WADeepEquals",
    "WAWebHatchBrowserTaskMessageData",
    "WAWebHatchBrowserTaskState",
    "WAWebModelStorageUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t, n, r) {
      return n.kind === "canonical" &&
        o("WAWebHatchBrowserTaskMessageData").browserTaskMessageTerminalState(
          n.task,
        ) == null
        ? !1
        : s(e, t, n, r);
    }
    async function s(e, t, n, a) {
      var i = o("WAWebModelStorageUtils").getStorage(),
        l = e.id,
        s = e.rowId,
        c = o("WAWebHatchBrowserTaskMessageData").messageIdentity(e),
        d = (function (e) {
          if (
            ((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.kind === "canonical" &&
            "task" in e
          ) {
            var t = e.task;
            return { kind: "canonical", task: babelHelpers.extends({}, t) };
          }
          return { kind: "stop" };
        })(n),
        m = function () {
          return o("WAWebModelStorageUtils").getStorage() === i && a();
        },
        p = await i.lock(["message"], async function (e) {
          var n = e[0],
            a = await n.get(l, !1);
          if (
            (a == null ? void 0 : a.unifiedResponse) == null ||
            !m() ||
            (s != null && s !== a.rowId) ||
            c !== o("WAWebHatchBrowserTaskMessageData").messageIdentity(a) ||
            (d.kind === "canonical" &&
              o("WAWebHatchBrowserTaskMessageData").normalizedTaskID(
                d.task.browserTaskID,
              ) !== o("WAWebHatchBrowserTaskMessageData").normalizedTaskID(t))
          )
            return null;
          var i = o("WAWebHatchBrowserTaskMessageData").mapBrowserTasks(
            a.unifiedResponse,
            function (e) {
              return o("WAWebHatchBrowserTaskMessageData").normalizedTaskID(
                e.browser_task_id,
              ) === o("WAWebHatchBrowserTaskMessageData").normalizedTaskID(t)
                ? u(e, d)
                : e;
            },
          );
          if (o("WADeepEquals").deepEqual(i, a.unifiedResponse)) return null;
          if ((await n.merge(a.id, { unifiedResponse: i }), !m()))
            throw r("err")("Browser task message request changed");
          return i;
        });
      return p != null && m();
    }
    function u(e, t) {
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
