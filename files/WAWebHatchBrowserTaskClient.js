__d(
  "WAWebHatchBrowserTaskClient",
  ["WALogger", "WATimeUtils", "WAWebHatchBrowserTaskReplies", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 3,
      u = 1e3,
      c = 64 * 1024,
      d = (function () {
        function t(e, t) {
          (t === void 0 && (t = o("WATimeUtils").unixTimeMs),
            (this.$1 = e),
            (this.$2 = t));
        }
        var n = t.prototype;
        return (
          (n.present = async function (t) {
            var e = await this.$3(t, "present");
            return e == null
              ? "unavailable"
              : o("WAWebHatchBrowserTaskReplies").readPresentReply(t, e);
          }),
          (n.takeover = function (t) {
            return this.$4(t, "takeover");
          }),
          (n.heartbeat = function (t) {
            return this.$4(t, "heartbeat");
          }),
          (n.release = async function (t) {
            var e = await this.$3(t, "release");
            return e != null && o("WAWebHatchBrowserTaskReplies").isReleased(e);
          }),
          (n.stop = async function (t) {
            var e = await this.$3(t, "stop");
            return e == null
              ? "failed"
              : o("WAWebHatchBrowserTaskReplies").readStopReply(e);
          }),
          (n.stopUntilSettled = function (t) {
            return this.$5(t, s);
          }),
          (n.$5 = async function (t, n) {
            var e = await this.stop(t);
            return e !== "notSettled" || n === 0
              ? e
              : (await new Promise(function (e) {
                  return self.setTimeout(e, u);
                }),
                this.$5(t, n - 1));
          }),
          (n.$4 = async function (t, n) {
            var e = await this.$3(t, n);
            return e == null
              ? { kind: "retry" }
              : o("WAWebHatchBrowserTaskReplies").readControlReply(
                  t,
                  e,
                  this.$2(),
                  n === "heartbeat",
                );
          }),
          (n.$3 = async function (n, a) {
            try {
              var t = await this.$1();
              if (t == null) return null;
              var i = await t.browserTaskPost(n, a);
              return (function (e) {
                if (
                  ((typeof e == "object" && e !== null) ||
                    typeof e == "function") &&
                  e.kind === "response" &&
                  "body" in e &&
                  "statusCode" in e
                ) {
                  var t = e.body,
                    n = e.statusCode;
                  return { body: t.length > c ? null : t, statusCode: n };
                }
                return ((typeof e == "object" && e !== null) ||
                  typeof e == "function") &&
                  e.kind === "failure" &&
                  e.reason === "NO_CHANNEL"
                  ? null
                  : o("WAWebHatchBrowserTaskReplies")
                      .BROWSER_TASK_TRANSPORT_FAILURE;
              })(i);
            } catch (t) {
              return (
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "hatch-browser-task/post-failed route=",
                        "",
                      ])),
                    a,
                  )
                  .catching(r("getErrorSafe")(t))
                  .sendLogs("hatch-browser-task-post-failed"),
                null
              );
            }
          }),
          t
        );
      })();
    l.default = d;
  },
  98,
);
