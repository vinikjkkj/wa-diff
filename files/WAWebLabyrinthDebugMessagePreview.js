__d(
  "WAWebLabyrinthDebugMessagePreview",
  [
    "WABase64",
    "WAResultOrError",
    "WAWebLabyrinthDebugMessageSummary",
    "WAWebLabyrinthDebugPollVoteNames",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return Promise.all(e.map(s));
    }
    async function s(e) {
      var t = e.restoreResult;
      if (!t.success) return babelHelpers.extends({}, e, { restoreResult: t });
      try {
        return babelHelpers.extends({}, e, {
          restoreResult: o("WAResultOrError").makeResult(
            await u(t.value.webMessageInfo),
          ),
        });
      } catch (t) {
        return babelHelpers.extends({}, e, {
          restoreResult: o("WAResultOrError").makeError({
            error: r("getErrorSafe")(t),
            kind: "preview-error",
          }),
        });
      }
    }
    async function u(e) {
      return {
        summary: await o(
          "WAWebLabyrinthDebugPollVoteNames",
        ).resolveLabyrinthDebugPollVoteNames(
          o("WAWebLabyrinthDebugMessageSummary").summarizeLabyrinthDebugMessage(
            e,
          ),
        ),
        webMessageInfo: e,
        webMessageInfoText: JSON.stringify(e, c, 2),
      };
    }
    function c(e, t) {
      return t instanceof ArrayBuffer || t instanceof Uint8Array
        ? o("WABase64").encodeB64(t)
        : t instanceof Map
          ? Object.fromEntries(t)
          : t;
    }
    l.previewLabyrinthDebugMessages = e;
  },
  98,
);
