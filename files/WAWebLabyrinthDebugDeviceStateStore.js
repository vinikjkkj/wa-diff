__d(
  "WAWebLabyrinthDebugDeviceStateStore",
  [
    "WAResultOrError",
    "WAWebLabyrinthDebugClearAllState",
    "WAWebLabyrinthDebugRotateToEpoch",
    "WAWebLabyrinthDebugSaveNewBackup",
    "WAWebLabyrinthOwnerAccountId",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            return (
              yield o("WAWebLabyrinthDebugSaveNewBackup").saveNewBackup(
                babelHelpers.extends({}, e, {
                  ownerAccountId: o(
                    "WAWebLabyrinthOwnerAccountId",
                  ).getOwnerAccountId(),
                }),
              ),
              o("WAResultOrError").makeResult(void 0)
            );
          } catch (e) {
            return f("save", e);
          }
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield e(
              o("WAWebLabyrinthOwnerAccountId").getOwnerAccountId(),
            );
            return t.success
              ? o("WAResultOrError").makeResult(t.value)
              : (yield o("WAWebLabyrinthDebugClearAllState").clearAllState(),
                o("WAResultOrError").makeResult(null));
          } catch (e) {
            return f("load", e);
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            return (
              yield o("WAWebLabyrinthDebugRotateToEpoch").rotateToEpoch(e),
              o("WAResultOrError").makeResult(void 0)
            );
          } catch (e) {
            return f("rotate", e);
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            return (
              yield o("WAWebLabyrinthDebugClearAllState").clearAllState(),
              o("WAResultOrError").makeResult(void 0)
            );
          } catch (e) {
            return f("clear", e);
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return o("WAResultOrError").makeError({
        error: r("getErrorSafe")(t),
        kind: "storage-error",
        operation: e,
      });
    }
    ((l.saveLabyrinthDebugBackup = e),
      (l.loadOwnedState = u),
      (l.rotateLabyrinthDebugDeviceStateToEpoch = d),
      (l.clearLabyrinthDebugDeviceState = p));
  },
  98,
);
