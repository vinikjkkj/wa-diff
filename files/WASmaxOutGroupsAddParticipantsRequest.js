__d(
  "WASmaxOutGroupsAddParticipantsRequest",
  [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutGroupsBaseSetGroupMixin",
    "WASmaxOutGroupsPermissionTokenMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.participantJid,
        n = e.participantPhoneNumber,
        r = e.participantUsername,
        a = e.permissionTokenMixinArgs,
        i = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutGroupsPermissionTokenMixin").mergePermissionTokenMixin,
          o("WASmaxJsx").smax("participant", {
            jid: o("WAWap").JID(t),
            phone_number: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, n),
            username: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, r),
          }),
          a,
        );
      return i;
    }
    function s(t) {
      var n = t.participantArgs,
        r = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax(
              "add",
              null,
              o("WASmaxChildren").REPEATED_CHILD(e, n, 1, 1024),
            ),
          ),
          t,
        );
      return r;
    }
    ((l.makeAddParticipantsRequestAddParticipant = e),
      (l.makeAddParticipantsRequest = s));
  },
  98,
);
