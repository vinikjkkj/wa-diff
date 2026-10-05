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
    l.isMemberLabelInfraEnabled = e;
  },
  98,
);
