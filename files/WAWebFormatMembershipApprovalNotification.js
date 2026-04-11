__d(
  "WAWebFormatMembershipApprovalNotification",
  [
    "fbt",
    "WALogger",
    "WAWebFbtIntlList",
    "WAWebFormatParticipantNames",
    "WAWebGroupType",
    "WAWebSystemMessageGatingUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumSystemMessageTypeType",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e;
    function u(t, n, a) {
      var i = o(
          "WAWebSystemMessageGatingUtils",
        ).systemMessageActionTextStylingEnabled(),
        l;
      switch (
        (n && (l = o("WAWebFormatParticipantNames").getFormattedName(n, !1)), t)
      ) {
        case "membership_approval_mode": {
          var u =
              a[0] &&
              o(
                "WAWebGroupType",
              ).GroupSettingChangeSystemMessageToggleEnabled.cast(
                a[0].toString(),
              ) ===
                o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled
                  .On,
            c =
              a[1] &&
              o("WAWebGroupType").GroupSettingChangeSystemMessageIsAdmin.cast(
                a[1].toString(),
              ) ===
                o("WAWebGroupType").GroupSettingChangeSystemMessageIsAdmin
                  .Admin;
          return u
            ? l == null
              ? {
                  text: c
                    ? s._(
                        /*BTDS*/ "New members need admin approval to join this group. Click to change.",
                      )
                    : s._(
                        /*BTDS*/ "New members need admin approval to join this group.",
                      ),
                }
              : o("WAWebUserPrefsMeUser").isMeAccount(n)
                ? {
                    text: s._(
                      /*BTDS*/ "You turned on admin approval to join this group. Click to change.",
                    ),
                  }
                : {
                    text: c
                      ? s._(
                          /*BTDS*/ "{author} turned on admin approval to join this group. Click to change.",
                          [s._param("author", l)],
                        )
                      : s._(
                          /*BTDS*/ "{author} turned on admin approval to join this group",
                          [s._param("author", l)],
                        ),
                  }
            : l == null
              ? {
                  text: s._(
                    /*BTDS*/ "Admin approval to join this group was turned off.",
                  ),
                }
              : o("WAWebUserPrefsMeUser").isMeAccount(n)
                ? {
                    text: s._(
                      /*BTDS*/ "You turned off admin approval to join this group. Click to change.",
                    ),
                  }
                : {
                    text: c
                      ? s._(
                          /*BTDS*/ "{author} turned off admin approval to join this group. Click to change.",
                          [s._param("author", l)],
                        )
                      : s._(
                          /*BTDS*/ "{author} turned off admin approval to join this group",
                          [s._param("author", l)],
                        ),
                  };
        }
        case "membership_approval_request":
          return {
            text: i
              ? s._(/*BTDS*/ "{author} requested to join", [
                  s._param("author", l),
                ])
              : s._(/*BTDS*/ "{author} requested to join. Click to review.", [
                  s._param("author", l),
                ]),
            enumType: o("WAWebWamEnumSystemMessageTypeType")
              .SYSTEM_MESSAGE_TYPE_TYPE.GROUP_JOIN_REQUEST,
          };
        case "created_membership_requests": {
          var d = a.map(function (e) {
              return o("WAWebFormatParticipantNames").getFormattedName(
                o("WAWebWidFactory").createWid(e.toString()),
                !1,
              );
            }),
            m = d[0],
            p = babelHelpers.arrayLikeToArray(d).slice(1),
            _ = r("WAWebFbtIntlList")(
              p,
              r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
              r("WAWebFbtIntlList").DELIMITERS.COMMA,
            );
          return {
            text: i
              ? s._(/*BTDS*/ "{author} requested to add {authors}", [
                  s._param("author", m),
                  s._param("authors", _),
                ])
              : s._(
                  /*BTDS*/ "{author} requested to add {authors}. Click to review.",
                  [s._param("author", m), s._param("authors", _)],
                ),
            enumType: o("WAWebWamEnumSystemMessageTypeType")
              .SYSTEM_MESSAGE_TYPE_TYPE.GROUP_JOIN_REQUEST,
          };
        }
        default:
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[formatMembershipApprovalNotification] unknown subtype: ",
                "",
              ])),
            t,
          );
          break;
      }
      return { text: "" };
    }
    function c(e, t, n) {
      return u(e, t, n).text;
    }
    l.formatMembershipApprovalNotification = c;
  },
  226,
);
