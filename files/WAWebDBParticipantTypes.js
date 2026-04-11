__d(
  "WAWebDBParticipantTypes",
  [],
  function (t, n, r, o, a, i, l) {
    var e = Object.freeze({
        ADD: "add",
        REMOVE: "remove",
        DEMOTE: "demote",
        PROMOTE: "promote",
        LINKED_GROUP_PROMOTE: "linked_group_promote",
        LINKED_GROUP_DEMOTE: "linked_group_demote",
      }),
      s = Object.freeze({ DEVICE: "device", PARTICIPANT: "participant" }),
      u = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "GroupUnSyncedError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    ((l.PARTICIPANT_OPERATION = e),
      (l.STALE_TYPES = s),
      (l.GroupUnSyncedError = u));
  },
  98,
);
