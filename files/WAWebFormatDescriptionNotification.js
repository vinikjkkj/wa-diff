__d(
  "WAWebFormatDescriptionNotification",
  [
    "fbt",
    "WAWebSystemMessageGatingUtils",
    "WAWebSystemMessagesUtils",
    "WAWebWamEnumSystemMessageTypeType",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = o(
      "WAWebSystemMessageGatingUtils",
    ).systemMessageActionTextStylingEnabled();
    function u(t) {
      var n = t.author,
        r = t.authorClickable,
        a = t.isParentGroup,
        i = a === void 0 ? !1 : a,
        l = t.shouldFormatAsLastMsg,
        u = l === void 0 ? !1 : l;
      return u
        ? o("WAWebSystemMessagesUtils").isMe(n)
          ? i === !0
            ? {
                text: s._(/*BTDS*/ "You changed the community description"),
                enumType: o("WAWebWamEnumSystemMessageTypeType")
                  .SYSTEM_MESSAGE_TYPE_TYPE.COMMUNITY_DESCRIPTION_CHANGED,
              }
            : {
                text: s._(/*BTDS*/ "You changed the group description"),
                enumType: o("WAWebWamEnumSystemMessageTypeType")
                  .SYSTEM_MESSAGE_TYPE_TYPE.GROUP_DESCRIPTION_CHANGED,
              }
          : r != null
            ? i === !0
              ? {
                  text: s._(
                    /*BTDS*/ "{user_name} changed the community description",
                    [s._param("user_name", r)],
                  ),
                  enumType: o("WAWebWamEnumSystemMessageTypeType")
                    .SYSTEM_MESSAGE_TYPE_TYPE.COMMUNITY_DESCRIPTION_CHANGED,
                }
              : {
                  text: s._(
                    /*BTDS*/ "{user_name} changed the group description",
                    [s._param("user_name", r)],
                  ),
                  enumType: o("WAWebWamEnumSystemMessageTypeType")
                    .SYSTEM_MESSAGE_TYPE_TYPE.GROUP_DESCRIPTION_CHANGED,
                }
            : i === !0
              ? {
                  text: s._(
                    /*BTDS*/ "A member changed the community description",
                  ),
                  enumType: o("WAWebWamEnumSystemMessageTypeType")
                    .SYSTEM_MESSAGE_TYPE_TYPE.COMMUNITY_DESCRIPTION_CHANGED,
                }
              : {
                  text: s._(/*BTDS*/ "A member changed the group description"),
                  enumType: o("WAWebWamEnumSystemMessageTypeType")
                    .SYSTEM_MESSAGE_TYPE_TYPE.GROUP_DESCRIPTION_CHANGED,
                }
        : o("WAWebSystemMessagesUtils").isMe(n)
          ? i === !0
            ? {
                text: e
                  ? s._(/*BTDS*/ "You changed the community description")
                  : s._(
                      /*BTDS*/ "You changed the community description. Click to view",
                    ),
                enumType: o("WAWebWamEnumSystemMessageTypeType")
                  .SYSTEM_MESSAGE_TYPE_TYPE.COMMUNITY_DESCRIPTION_CHANGED,
              }
            : {
                text: e
                  ? s._(/*BTDS*/ "You changed the group description")
                  : s._(
                      /*BTDS*/ "You changed the group description. Click to view.",
                    ),
                enumType: o("WAWebWamEnumSystemMessageTypeType")
                  .SYSTEM_MESSAGE_TYPE_TYPE.GROUP_DESCRIPTION_CHANGED,
              }
          : r != null
            ? i === !0
              ? {
                  text: e
                    ? s._(
                        /*BTDS*/ "{user_name} changed the community description",
                        [s._param("user_name", r)],
                      )
                    : s._(
                        /*BTDS*/ "{user_name} changed the community description. Click to view",
                        [s._param("user_name", r)],
                      ),
                  enumType: o("WAWebWamEnumSystemMessageTypeType")
                    .SYSTEM_MESSAGE_TYPE_TYPE.COMMUNITY_DESCRIPTION_CHANGED,
                }
              : {
                  text: e
                    ? s._(
                        /*BTDS*/ "{user_name} changed the group description",
                        [s._param("user_name", r)],
                      )
                    : s._(
                        /*BTDS*/ "{user_name} changed the group description. Click to view",
                        [s._param("user_name", r)],
                      ),
                  enumType: o("WAWebWamEnumSystemMessageTypeType")
                    .SYSTEM_MESSAGE_TYPE_TYPE.GROUP_DESCRIPTION_CHANGED,
                }
            : i === !0
              ? {
                  text: e
                    ? s._(/*BTDS*/ "A member changed the community description")
                    : s._(
                        /*BTDS*/ "A member changed the community description. Click to view",
                      ),
                  enumType: o("WAWebWamEnumSystemMessageTypeType")
                    .SYSTEM_MESSAGE_TYPE_TYPE.COMMUNITY_DESCRIPTION_CHANGED,
                }
              : {
                  text: e
                    ? s._(/*BTDS*/ "A member changed the group description")
                    : s._(
                        /*BTDS*/ "A member changed the group description. Click to view",
                      ),
                  enumType: o("WAWebWamEnumSystemMessageTypeType")
                    .SYSTEM_MESSAGE_TYPE_TYPE.COMMUNITY_DESCRIPTION_CHANGED,
                };
    }
    function c(e) {
      var t = e.author,
        n = e.authorClickable,
        r = e.isParentGroup,
        o = r === void 0 ? !1 : r,
        a = e.shouldFormatAsLastMsg,
        i = a === void 0 ? !1 : a;
      return u({
        author: t,
        authorClickable: n,
        isParentGroup: o,
        shouldFormatAsLastMsg: i,
      }).text;
    }
    l.formatDescriptionNotification = c;
  },
  226,
);
