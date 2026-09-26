__d(
  "FriendingButtonFbt",
  ["fbt", "qex"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = s._(/*BTDS*/ "Add friend"),
      u = s._(/*BTDS*/ "Cancel request"),
      c = s._(/*BTDS*/ "Confirm request"),
      d = s._(/*BTDS*/ "Confirm friend request"),
      m = s._(/*BTDS*/ "Add"),
      p = s._(/*BTDS*/ "Confirm"),
      _ = s._(/*BTDS*/ "Cancel");
    function f() {
      return r("qex")._("1134")
        ? s._(/*BTDS*/ "Remove")
        : s._(/*BTDS*/ "Delete");
    }
    function g() {
      return r("qex")._("1134")
        ? s._(/*BTDS*/ "Remove request")
        : s._(/*BTDS*/ "Delete request");
    }
    function h(e) {
      return r("qex")._("1134")
        ? s._(/*BTDS*/ "Remove {user name}", [s._param("user name", e)])
        : s._(/*BTDS*/ "Delete {user name}", [s._param("user name", e)]);
    }
    function y(e) {
      return r("qex")._("1134")
        ? s._(/*BTDS*/ "Remove {user name}'s request", [
            s._param("user name", e),
          ])
        : s._(/*BTDS*/ "Delete {user name}'s request", [
            s._param("user name", e),
          ]);
    }
    function C() {
      return s._(/*BTDS*/ "Actions for managing incoming friend request");
    }
    var b = s._(/*BTDS*/ "Friend request sent successfully"),
      v = s._(/*BTDS*/ "Friend request confirmed successfully"),
      S = s._(/*BTDS*/ "Friend removed successfully");
    ((l.AddFriendButtonLabelFbt = e),
      (l.CancelRequestButtonFbt = u),
      (l.ConfirmButtonLabelFbt = c),
      (l.ConfirmFriendRequestButtonLabelFbt = d),
      (l.AddFriendButtonLabelShortFbt = m),
      (l.ConfirmButtonLabelFbtShort = p),
      (l.CancelRequestButtonLabelShortFbt = _),
      (l.reject = f),
      (l.rejectRequest = g),
      (l.rejectAiraLabel = h),
      (l.rejectRequestAiraLabel = y),
      (l.incomingRequestAiraLabel = C),
      (l.AddFriendRequestCompletedAriaLabel = b),
      (l.ConfirmFriendRequestCompletedAriaLabel = v),
      (l.RemoveFriendRequestCompletedAriaLabel = S));
  },
  226,
);
