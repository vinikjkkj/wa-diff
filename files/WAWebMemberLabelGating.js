__d(
  "WAWebMemberLabelGating",
  ["WAWebABProps", "WAWebMemberLabelDeviceCapabilityCommon"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "member_name_tag_db_enabled",
      );
    }
    function s() {
      return (
        o(
          "WAWebMemberLabelDeviceCapabilityCommon",
        ).canPrimaryReceiveMemberNameTags() &&
        o("WAWebABProps").getABPropConfigValue(
          "member_name_tag_web_receiver_enabled",
        )
      );
    }
    function u() {
      return (
        o(
          "WAWebMemberLabelDeviceCapabilityCommon",
        ).canPrimarySendMemberNameTags() &&
        o("WAWebABProps").getABPropConfigValue(
          "member_name_tag_web_sender_enabled",
        )
      );
    }
    ((l.isMemberLabelInfraEnabled = e),
      (l.isMemberLabelReceiverEnabled = s),
      (l.isMemberLabelSenderEnabled = u));
  },
  98,
);
