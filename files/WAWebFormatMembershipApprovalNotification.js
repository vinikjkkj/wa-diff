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
        case "membership_approval_mode":
          return c(n, a);
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
          var u = a.map(function (e) {
              return o("WAWebFormatParticipantNames").getFormattedName(
                o("WAWebWidFactory").createWid(e.toString()),
                !1,
              );
            }),
            d = u[0],
            m = babelHelpers.arrayLikeToArray(u).slice(1),
            p = r("WAWebFbtIntlList")(
              m,
              r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
              r("WAWebFbtIntlList").DELIMITERS.COMMA,
            );
          return {
            text: i
              ? s._(/*BTDS*/ "{author} requested to add {authors}", [
                  s._param("author", d),
                  s._param("authors", p),
                ])
              : s._(
                  /*BTDS*/ "{author} requested to add {authors}. Click to review.",
                  [s._param("author", d), s._param("authors", p)],
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
    function c(e, t) {
      var n =
          t[0] &&
          o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled.cast(
            t[0].toString(),
          ) ===
            o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled.On,
        r =
          t[1] &&
          o("WAWebGroupType").GroupSettingChangeSystemMessageIsAdmin.cast(
            t[1].toString(),
          ) ===
            o("WAWebGroupType").GroupSettingChangeSystemMessageIsAdmin.Admin,
        a =
          o(
            "WAWebSystemMessageGatingUtils",
          ).systemMessageActionTextStylingEnabled() && r,
        i = e ? o("WAWebFormatParticipantNames").getFormattedName(e, !1) : null;
      return n
        ? i == null
          ? r
            ? {
                text: a
                  ? s._(
                      /*BTDS*/ "New members need admin approval to join this group",
                    )
                  : s._(
                      /*BTDS*/ "New members need admin approval to join this group. Click to change.",
                    ),
              }
            : {
                text: s._(
                  /*BTDS*/ "New members need admin approval to join this group.",
                ),
              }
          : o("WAWebUserPrefsMeUser").isMeAccount(e)
            ? {
                text: a
                  ? s._(
                      /*BTDS*/ "You turned on admin approval to join this group",
                    )
                  : s._(
                      /*BTDS*/ "You turned on admin approval to join this group. Click to change.",
                    ),
              }
            : r
              ? {
                  text: a
                    ? s._(
                        /*BTDS*/ "{author} turned on admin approval to join this group",
                        [s._param("author", i)],
                      )
                    : s._(
                        /*BTDS*/ "{author} turned on admin approval to join this group. Click to change.",
                        [s._param("author", i)],
                      ),
                }
              : {
                  text: s._(
                    /*BTDS*/ "{author} turned on admin approval to join this group",
                    [s._param("author", i)],
                  ),
                }
        : i == null
          ? {
              text: s._(
                /*BTDS*/ "Admin approval to join this group was turned off.",
              ),
            }
          : o("WAWebUserPrefsMeUser").isMeAccount(e)
            ? {
                text: a
                  ? s._(
                      /*BTDS*/ "You turned off admin approval to join this group",
                    )
                  : s._(
                      /*BTDS*/ "You turned off admin approval to join this group. Click to change.",
                    ),
              }
            : r
              ? {
                  text: a
                    ? s._(
                        /*BTDS*/ "{author} turned off admin approval to join this group",
                        [s._param("author", i)],
                      )
                    : s._(
                        /*BTDS*/ "{author} turned off admin approval to join this group. Click to change.",
                        [s._param("author", i)],
                      ),
                }
              : {
                  text: s._(
                    /*BTDS*/ "{author} turned off admin approval to join this group",
                    [s._param("author", i)],
                  ),
                };
    }
    function d(e, t, n) {
      return u(e, t, n).text;
    }
    l.formatMembershipApprovalNotification = d;
  },
  226,
);
