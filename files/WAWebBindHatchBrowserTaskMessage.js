__d(
  "WAWebBindHatchBrowserTaskMessage",
  [
    "JSResource",
    "WALogger",
    "WAWebHatchBrowserTaskMessageData",
    "WAWebModelStorageUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("JSResource")("WAWebHatchBrowserTaskMessagePersistence").__setRef(
        "WAWebBindHatchBrowserTaskMessage",
      );
    function u(t, r) {
      return function (a, i) {
        n("asyncToGeneratorRuntime")
          .asyncToGenerator(function* () {
            if (
              !(
                a.kind === "canonical" &&
                o(
                  "WAWebHatchBrowserTaskMessageData",
                ).browserTaskMessageTerminalState(a.task) == null
              )
            ) {
              var e = o("WAWebModelStorageUtils").getStorage(),
                n = o("WAWebHatchBrowserTaskMessageData").messageIdentity(t),
                l = (function (e) {
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
                u = yield s.load();
              o("WAWebModelStorageUtils").getStorage() !== e ||
                !i() ||
                n !==
                  o("WAWebHatchBrowserTaskMessageData").messageIdentity(t) ||
                (yield u.persistBrowserTaskMessage(t, r, l, function () {
                  return o("WAWebModelStorageUtils").getStorage() === e && i();
                }));
            }
          })()
          .catch(function () {
            return o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-browser/task-message-persistence-failed",
                ])),
            );
          });
      };
    }
    l.bindBrowserTaskMessage = u;
  },
  98,
);
