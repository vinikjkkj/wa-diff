__d(
  "GroupsCometHealthContextualProfileMessagingDialogContent",
  ["fbt", "HealthContextualProfileStrings"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = function (t, n) {
      return s._(
        /*BTDS*/ '_j{"1":"If you send {name} a message, she\'ll be able to see your main Facebook profile.","2":"If you send {name} a message, he\'ll be able to see your main Facebook profile.","*":"If you send {name} a message, they\'ll be able to see your main Facebook profile."}',
        [s._pronoun(3, n), s._param("name", t)],
      );
    };
    ((l.getSenderDisclaimer = e),
      (l.title = r("HealthContextualProfileStrings").MESSAGE_REQUEST_TITLE),
      (l.warningTitle = r(
        "HealthContextualProfileStrings",
      ).MESSAGE_REQUEST_PROFILE_WARNING_TITLE));
  },
  226,
);
