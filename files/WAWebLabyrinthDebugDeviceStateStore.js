__d(
  "WAWebLabyrinthDebugDeviceStateStore",
  [
    "WAResultOrError",
    "WAWebLabyrinthDebugClearAllState",
    "WAWebLabyrinthDebugRotateToEpoch",
    "WAWebLabyrinthDebugSaveNewBackup",
    "WAWebLabyrinthOwnerAccountId",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      try {
        return (
          await o("WAWebLabyrinthDebugSaveNewBackup").saveNewBackup(
            babelHelpers.extends({}, e, {
              ownerAccountId: o(
                "WAWebLabyrinthOwnerAccountId",
              ).getOwnerAccountId(),
            }),
          ),
          o("WAResultOrError").makeResult(void 0)
        );
      } catch (e) {
        return d("save", e);
      }
    }
    async function s(e) {
      try {
        var t = await e(o("WAWebLabyrinthOwnerAccountId").getOwnerAccountId());
        return t.success
          ? o("WAResultOrError").makeResult(t.value)
          : (await o("WAWebLabyrinthDebugClearAllState").clearAllState(),
            o("WAResultOrError").makeResult(null));
      } catch (e) {
        return d("load", e);
      }
    }
    async function u(e) {
      try {
        return (
          await o("WAWebLabyrinthDebugRotateToEpoch").rotateToEpoch(e),
          o("WAResultOrError").makeResult(void 0)
        );
      } catch (e) {
        return d("rotate", e);
      }
    }
    async function c() {
      try {
        return (
          await o("WAWebLabyrinthDebugClearAllState").clearAllState(),
          o("WAResultOrError").makeResult(void 0)
        );
      } catch (e) {
        return d("clear", e);
      }
    }
    function d(e, t) {
      return o("WAResultOrError").makeError({
        error: r("getErrorSafe")(t),
        kind: "storage-error",
        operation: e,
      });
    }
    ((l.saveLabyrinthDebugBackup = e),
      (l.loadOwnedState = s),
      (l.rotateLabyrinthDebugDeviceStateToEpoch = u),
      (l.clearLabyrinthDebugDeviceState = c));
  },
  98,
);
