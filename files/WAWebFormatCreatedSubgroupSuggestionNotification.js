__d(
  "WAWebFormatCreatedSubgroupSuggestionNotification",
  ["fbt", "WAWebFormatParticipantNames", "WAWebSystemMessageGatingUtils"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t, n) {
      var r = o("WAWebFormatParticipantNames").getFormattedName(e, n),
        a = t[0],
        i = o(
          "WAWebSystemMessageGatingUtils",
        ).systemMessageActionTextStylingEnabled();
      return i
        ? s._(
            /*BTDS*/ '{suggestion-owner} suggested the group "{suggested-group-name}"',
            [
              s._param("suggestion-owner", r),
              s._param("suggested-group-name", a),
            ],
          )
        : s._(
            /*BTDS*/ '{suggestion-owner} suggested the group "{suggested-group-name}". Click to approve or reject.',
            [
              s._param("suggestion-owner", r),
              s._param("suggested-group-name", a),
            ],
          );
    }
    l.default = e;
  },
  226,
);
