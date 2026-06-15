__d(
  "WAWebMemberLabelGating",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "member_name_tag_db_enabled",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "member_name_tag_web_sender_enabled",
      );
    }
    ((l.isMemberLabelInfraEnabled = e), (l.isMemberLabelSenderEnabled = s));
  },
  98,
);
