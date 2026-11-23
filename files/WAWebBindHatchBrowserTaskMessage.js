__d(
  "WAWebBindHatchBrowserTaskMessage",
  [
    "JSResource",
    "WALogger",
    "WAWebHatchBrowserTaskMessageData",
    "WAWebModelStorageUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("JSResource")("WAWebHatchBrowserTaskMessagePersistence").__setRef(
        "WAWebBindHatchBrowserTaskMessage",
      );
    function u(t, n) {
      return function (r, a) {
        (async function () {
          if (
            !(
              r.kind === "canonical" &&
              o(
                "WAWebHatchBrowserTaskMessageData",
              ).browserTaskMessageTerminalState(r.task) == null
            )
          ) {
            var e = o("WAWebModelStorageUtils").getStorage(),
              i = o("WAWebHatchBrowserTaskMessageData").messageIdentity(t),
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
              })(r),
              u = await s.load();
            o("WAWebModelStorageUtils").getStorage() !== e ||
              !a() ||
              i !== o("WAWebHatchBrowserTaskMessageData").messageIdentity(t) ||
              (await u.persistBrowserTaskMessage(t, n, l, function () {
                return o("WAWebModelStorageUtils").getStorage() === e && a();
              }));
          }
        })().catch(function () {
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
