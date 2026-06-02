__d(
  "WAWebUpdateMessageHistoryBundleState",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBMsgUtils",
    "WAWebDBUpdateMessageTable",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n) {
      try {
        var a = await o("WAWebDBMsgUtils").getMsgByMsgKey(t),
          i = a == null ? void 0 : a.groupHistoryBundleMetadata;
        if (i == null)
          throw r("err")("Group history bundle metadata not found");
        (await o("WAWebDBUpdateMessageTable").updateMessageTable(t, {
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
    }
    l.updateGroupHistoryBundleState = s;
  },
  98,
);
