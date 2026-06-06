__d(
  "WAWebUpdateMessageHistoryBundleState",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBMsgUtils",
    "WAWebDBUpdateMessageTable",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            var a = yield o("WAWebDBMsgUtils").getMsgByMsgKey(t),
              i = a == null ? void 0 : a.groupHistoryBundleMetadata;
            if (i == null)
              throw r("err")("Group history bundle metadata not found");
            (yield o("WAWebDBUpdateMessageTable").updateMessageTable(t, {
              groupHistoryBundleMetadata: babelHelpers.extends({}, i, {
                processState: n,
              }),
            }),
              o("WAWebBackendApi").frontendFireAndForget(
                "updateGroupHistoryBundleState",
                { messageKey: t, processState: n },
              ));
          } catch (t) {
            throw (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history]: failed to update bundle state in storage",
                    ])),
                )
                .verbose()
                .sendLogs("updateGroupHistoryBundleState failed"),
              t
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.updateGroupHistoryBundleState = s;
  },
  98,
);
