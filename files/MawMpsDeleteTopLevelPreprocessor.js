__d(
  "MawMpsDeleteTopLevelPreprocessor",
  [
    "MawMpsDeletionPreprocessingUtils",
    "MpsErrors",
    "MpsPreprocessor",
    "MpsTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("MpsPreprocessor").preprocessor(async function (e) {
      var t = e.ctx,
        n = e.payloadList,
        r = new Map(),
        a = [],
        i = async function (t, i) {
          try {
            var e = await o(
                "MawMpsDeletionPreprocessingUtils",
              ).generateDeletionPayload(t, n),
              l = e[0],
              s = e[1];
            a[i] = l;
          } catch (e) {
            r.set(
              t.message.messageId,
              o("MpsErrors").MpsErrors.classify(
                e,
                "delete_top_level",
                "write_failed",
              ),
            );
          }
        },
        l = n
          .map(function (e, t) {
            var n = e.directive.actionType;
            return n === o("MpsTypes").ActionType.DeleteTopLevel
              ? i(e, t)
              : ((a[t] = e), null);
          })
          .filter(Boolean);
      return (
        l.length !== 0 && (await Promise.all(l)),
        { ctx: t, errors: r, payloadList: a.filter(Boolean) }
      );
    }, "delete_top_level");
    l.MawMpsDeleteTopLevelPreprocessor = e;
  },
  98,
);
