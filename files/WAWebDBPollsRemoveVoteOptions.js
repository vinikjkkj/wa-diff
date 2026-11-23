__d(
  "WAWebDBPollsRemoveVoteOptions",
  ["WAWebLidMigrationUtils"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      var r = o("WAWebLidMigrationUtils").getAlternateMsgKey(t),
        a = await e.anyOf(
          ["parentMsgKey"],
          r != null ? [t.toString(), r.toString()] : [t.toString()],
        ),
        i = a
          .filter(function (e) {
            return (
              s(e.selectedOptionLocalIds, n) ||
              s(e.lastSuccessfulSelectedOptionLocalIds, n)
            );
          })
          .map(function (e) {
            var t = e.lastSuccessfulSelectedOptionLocalIds;
            return babelHelpers.extends(
              {},
              e,
              { selectedOptionLocalIds: u(e.selectedOptionLocalIds, n) },
              t != null
                ? { lastSuccessfulSelectedOptionLocalIds: u(t, n) }
                : null,
            );
          });
      i.length > 0 && (await e.bulkCreateOrReplace(i));
    }
    function s(e, t) {
      return (
        e != null &&
        new Uint8Array(e).some(function (e) {
          return t.has(e);
        })
      );
    }
    function u(e, t) {
      return new Uint8Array(e).filter(function (e) {
        return !t.has(e);
      }).buffer;
    }
    l.removeOptionsFromStoredVotes = e;
  },
  98,
);
