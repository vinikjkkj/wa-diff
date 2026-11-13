__d(
  "WAWebGroupMembershipFormWriteErrors",
  ["fbt", "WAWebGroupMembershipFormTypes"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return e === "save"
        ? s._(
            /*BTDS*/ "Couldn't save membership questions. Check your internet connection and try again.",
          )
        : s._(
            /*BTDS*/ "Couldn't delete membership questions. Check your internet connection and try again.",
          );
    }
    function u() {
      return s._(
        /*BTDS*/ "Your membership questions are too long. Shorten them and try again.",
      );
    }
    function c(e, t) {
      var n =
        e instanceof
        o("WAWebGroupMembershipFormTypes").GroupMembershipFormSaveError
          ? e.code
          : o("WAWebGroupMembershipFormTypes").GroupMembershipFormSaveErrorCode
              .FAILED;
      return n ===
        o("WAWebGroupMembershipFormTypes").GroupMembershipFormSaveErrorCode
          .NOT_AVAILABLE
        ? s._(/*BTDS*/ "Membership questions aren't available yet.")
        : n ===
            o("WAWebGroupMembershipFormTypes").GroupMembershipFormSaveErrorCode
              .TOO_LARGE
          ? u()
          : n ===
              o("WAWebGroupMembershipFormTypes")
                .GroupMembershipFormSaveErrorCode.FAILED
            ? t === "save"
              ? s._(/*BTDS*/ "Couldn't save membership questions. Try again.")
              : s._(/*BTDS*/ "Couldn't delete membership questions. Try again.")
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    n,
                );
              })();
    }
    ((l.getGroupMembershipFormOfflineMessage = e),
      (l.getGroupMembershipFormTooLargeMessage = u),
      (l.getGroupMembershipFormWriteErrorMessage = c));
  },
  226,
);
