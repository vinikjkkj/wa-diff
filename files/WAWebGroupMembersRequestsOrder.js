__d(
  "WAWebGroupMembersRequestsOrder",
  ["WAWebRequestMethodType"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return t === "time"
        ? e
        : [].concat(e).sort(function (e, t) {
            return s(e.requestMethod) - s(t.requestMethod);
          });
    }
    function s(e) {
      return e === o("WAWebRequestMethodType").RequestMethod.NonAdminAdd
        ? 0
        : e === o("WAWebRequestMethodType").RequestMethod.LinkedGroupJoin
          ? 1
          : e === o("WAWebRequestMethodType").RequestMethod.InviteLink ||
              e === null ||
              e === void 0
            ? 2
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    l.sortGroupMembersRequests = e;
  },
  98,
);
