__d(
  "WAWebCommunityGeneralChatFailedParticipantsModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebContactCollection",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebWidFactory",
    "react",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n = e.reduce(function (e, t) {
          var n = o("WAWebContactCollection").ContactCollection.get(t);
          return (
            n != null && n.shortName
              ? e.push(n.shortName)
              : n != null && n.name
                ? e.push(n.name)
                : e.push(o("WAWebWidFactory").createWid(t).user),
            e
          );
        }, []);
      return (
        n.length === 1
          ? (t = s._(
              /*BTDS*/ "Couldn't add {participant_name_0} to the general member chat. You can invite them privately to join this group.",
              [s._param("participant_name_0", n[0])],
            ))
          : n.length === 2
            ? (t = s._(
                /*BTDS*/ "Couldn't add {participant_name_0} and {participant_name_1} to the general member chat. You can invite them privately to join this group.",
                [
                  s._param("participant_name_0", n[0]),
                  s._param("participant_name_1", n[1]),
                ],
              ))
            : n.length === 3
              ? (t = s._(
                  /*BTDS*/ "Couldn't add {participant_name_0}, {participant_name_1}, and {participant_name_2} to the general member chat. You can invite them privately to join this group.",
                  [
                    s._param("participant_name_0", n[0]),
                    s._param("participant_name_1", n[1]),
                    s._param("participant_name_2", n[2]),
                  ],
                ))
              : (t = s._(
                  /*BTDS*/ "Couldn't add {participant_name_0}, {participant_name_1}, {participant_name_2}, and {leftover_participant_count} more to the general member chat. You can invite them privately to join this group.",
                  [
                    s._param("participant_name_0", n[0]),
                    s._param("participant_name_1", n[1]),
                    s._param("participant_name_2", n[2]),
                    s._param("leftover_participant_count", n.length - 3),
                  ],
                )),
        t
      );
    }
    function d(e) {
      var t = e.failedParticipantJids;
      r("vulture")("yQVm_WiO2ChQym3Zu4IX6MbDDSs=");
      var n = c(t);
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        okText: r("WAWebFbtCommon")("OK"),
        onOK: o("WAWebModalManager").closeModalManager,
        children: n,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
