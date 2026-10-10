__d(
  "WAWebHatchBrowserTaskClient",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebHatchBrowserTaskReplies",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 3,
      c = 1e3,
      d = 64 * 1024,
      m = (function () {
        function t(e, t) {
          (t === void 0 && (t = o("WATimeUtils").unixTimeMs),
            (this.$1 = e),
            (this.$2 = t));
        }
        var a = t.prototype;
        return (
          (a.present = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.$3(e, "present");
                return t == null
                  ? "unavailable"
                  : o("WAWebHatchBrowserTaskReplies").readPresentReply(e, t);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.takeover = function (t) {
            return this.$4(t, "takeover");
          }),
          (a.heartbeat = function (t) {
            return this.$4(t, "heartbeat");
          }),
          (a.release = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.$3(e, "release");
                return (
                  t != null && o("WAWebHatchBrowserTaskReplies").isReleased(t)
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.stop = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.$3(e, "stop");
                return t == null
                  ? "failed"
                  : o("WAWebHatchBrowserTaskReplies").readStopReply(t);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.stopUntilSettled = function (t) {
            return this.$5(t, u);
          }),
          (a.$5 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var r = yield this.stop(e);
                return r !== "notSettled" || t === 0
                  ? r
                  : (yield new (s || (s = n("Promise")))(function (e) {
                      return self.setTimeout(e, c);
                    }),
                    this.$5(e, t - 1));
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$4 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield this.$3(e, t);
                return n == null
                  ? { kind: "retry" }
                  : o("WAWebHatchBrowserTaskReplies").readControlReply(
                      e,
                      n,
                      this.$2(),
                      t === "heartbeat",
                    );
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$3 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n) {
                try {
                  var a = yield this.$1();
                  if (a == null) return null;
                  var i = yield a.browserTaskPost(t, n);
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
                      return { body: t.length > d ? null : t, statusCode: n };
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
                        n,
                      )
                      .catching(r("getErrorSafe")(t))
                      .sendLogs("hatch-browser-task-post-failed"),
                    null
                  );
                }
              },
            );
            function a(e, n) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          t
        );
      })();
    l.default = m;
  },
  98,
);
