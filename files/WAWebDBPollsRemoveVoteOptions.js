__d(
  "WAWebDBPollsRemoveVoteOptions",
  ["WAWebLidMigrationUtils", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = o("WAWebLidMigrationUtils").getAlternateMsgKey(t),
            a = yield e.anyOf(
              ["parentMsgKey"],
              r != null ? [t.toString(), r.toString()] : [t.toString()],
            ),
            i = a
              .filter(function (e) {
                return (
                  u(e.selectedOptionLocalIds, n) ||
                  u(e.lastSuccessfulSelectedOptionLocalIds, n)
                );
              })
              .map(function (e) {
                var t = e.lastSuccessfulSelectedOptionLocalIds;
                return babelHelpers.extends(
                  {},
                  e,
                  { selectedOptionLocalIds: c(e.selectedOptionLocalIds, n) },
                  t != null
                    ? { lastSuccessfulSelectedOptionLocalIds: c(t, n) }
                    : null,
                );
              });
          i.length > 0 && (yield e.bulkCreateOrReplace(i));
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      return (
        e != null &&
        new Uint8Array(e).some(function (e) {
          return t.has(e);
        })
      );
    }
    function c(e, t) {
      return new Uint8Array(e).filter(function (e) {
        return !t.has(e);
      }).buffer;
    }
    l.removeOptionsFromStoredVotes = e;
  },
  98,
);
