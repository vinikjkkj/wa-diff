__d(
  "WAWebFormatChangeUsernameTemplateText",
  [
    "fbt",
    "WALogger",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebLidMigrationUtils",
    "WAWebWamEnumOppositeVisibleIdentificationType",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidFormat",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = function (t) {
        var e = t.newUsername,
          n = t.phoneNumber;
        return s._(
          /*BTDS*/ "{phoneNumber} set the username \u0040{newUsername}",
          [s._param("phoneNumber", n), s._param("newUsername", e.toString())],
        );
      },
      m = function (t) {
        var e = t.newUsername,
          n = t.savedName;
        return s._(
          /*BTDS*/ "{contactName} set the username \u0040{newUsername}",
          [s._param("contactName", n), s._param("newUsername", e.toString())],
        );
      },
      p = function (t) {
        var e = t.newUsername,
          n = t.oldUsername;
        return s._(
          /*BTDS*/ "\u0040{oldUsername} changed their username to \u0040{newUsername}",
          [s._param("oldUsername", n), s._param("newUsername", e.toString())],
        );
      },
      _ = function (t) {
        var e = t.newUsername,
          n = t.savedName;
        return s._(
          /*BTDS*/ "{contactName} changed their username to \u0040{newUsername}",
          [s._param("contactName", n), s._param("newUsername", e.toString())],
        );
      },
      f = function (t) {
        var e = t.oldUsername;
        return s._(/*BTDS*/ "\u0040{oldUsername} deleted their username", [
          s._param("oldUsername", e),
        ]);
      },
      g = function (t) {
        var e = t.savedName;
        return s._(/*BTDS*/ "{contactName} deleted their username", [
          s._param("contactName", e),
        ]);
      },
      h = function (t) {
        var e = t.newUsername;
        return s._(
          /*BTDS*/ "This person set the username \u0040{newUsername}",
          [s._param("newUsername", e.toString())],
        );
      },
      y = function (t) {
        var e = t.newUsername;
        return s._(/*BTDS*/ "A member set the username \u0040{newUsername}", [
          s._param("newUsername", e.toString()),
        ]);
      },
      C = function (t) {
        var e = t.newUsername;
        return s._(
          /*BTDS*/ "This business set the username \u0040{newUsername}",
          [s._param("newUsername", e.toString())],
        );
      },
      b = function (t) {
        var e = t.oldUsername;
        return s._(/*BTDS*/ "This business deleted their username");
      },
      v = {
        oneOnOne_noSavedName_noPhoneNumber_created_consumer: h,
        oneOnOne_noSavedName_phoneNumber_created_consumer: d,
        oneOnOne_savedName_noPhoneNumber_created_consumer: m,
        oneOnOne_savedName_phoneNumber_created_consumer: m,
        oneOnOne_noSavedName_noPhoneNumber_updated_consumer: p,
        oneOnOne_noSavedName_phoneNumber_updated_consumer: p,
        oneOnOne_savedName_noPhoneNumber_updated_consumer: _,
        oneOnOne_savedName_phoneNumber_updated_consumer: _,
        oneOnOne_noSavedName_noPhoneNumber_deleted_consumer: f,
        oneOnOne_noSavedName_phoneNumber_deleted_consumer: f,
        oneOnOne_savedName_noPhoneNumber_deleted_consumer: g,
        oneOnOne_savedName_phoneNumber_deleted_consumer: g,
        group_noSavedName_noPhoneNumber_created_consumer: y,
        group_noSavedName_phoneNumber_created_consumer: d,
        group_savedName_noPhoneNumber_created_consumer: m,
        group_savedName_phoneNumber_created_consumer: m,
        group_noSavedName_noPhoneNumber_updated_consumer: p,
        group_noSavedName_phoneNumber_updated_consumer: p,
        group_savedName_noPhoneNumber_updated_consumer: _,
        group_savedName_phoneNumber_updated_consumer: _,
        group_noSavedName_noPhoneNumber_deleted_consumer: f,
        group_noSavedName_phoneNumber_deleted_consumer: f,
        group_savedName_noPhoneNumber_deleted_consumer: g,
        group_savedName_phoneNumber_deleted_consumer: g,
        oneOnOne_noSavedName_noPhoneNumber_created_business: C,
        oneOnOne_noSavedName_phoneNumber_created_business: d,
        oneOnOne_savedName_noPhoneNumber_created_business: m,
        oneOnOne_savedName_phoneNumber_created_business: m,
        oneOnOne_noSavedName_noPhoneNumber_updated_business: p,
        oneOnOne_noSavedName_phoneNumber_updated_business: p,
        oneOnOne_savedName_noPhoneNumber_updated_business: _,
        oneOnOne_savedName_phoneNumber_updated_business: _,
        oneOnOne_noSavedName_noPhoneNumber_deleted_business: b,
        oneOnOne_noSavedName_phoneNumber_deleted_business: f,
        oneOnOne_savedName_noPhoneNumber_deleted_business: g,
        oneOnOne_savedName_phoneNumber_deleted_business: g,
        group_noSavedName_noPhoneNumber_created_business: y,
        group_noSavedName_phoneNumber_created_business: d,
        group_savedName_noPhoneNumber_created_business: m,
        group_savedName_phoneNumber_created_business: m,
        group_noSavedName_noPhoneNumber_updated_business: p,
        group_noSavedName_phoneNumber_updated_business: p,
        group_savedName_noPhoneNumber_updated_business: _,
        group_savedName_phoneNumber_updated_business: _,
        group_noSavedName_noPhoneNumber_deleted_business: f,
        group_noSavedName_phoneNumber_deleted_business: f,
        group_savedName_noPhoneNumber_deleted_business: g,
        group_savedName_phoneNumber_deleted_business: g,
      };
    function S(t) {
      if (t.templateParams.length === 1)
        return s._(/*BTDS*/ "User changed their username to {newUsername}", [
          s._param("newUsername", t.templateParams[0].toString()),
        ]);
      var n = t.templateParams[1];
      if (typeof n != "string")
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[formatChangeUsernameTemplateText] invalid newUsername",
                ])),
            )
            .sendLogs(
              "formatChangeUsernameTemplateText-newUsername-not-a-string",
            ),
          ""
        );
      var a = t.templateParams[0];
      if (typeof a != "string")
        return (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[formatChangeUsernameTemplateText] invalid oldUsername",
                ])),
            )
            .sendLogs(
              "formatChangeUsernameTemplateText-oldUsername-not-a-string",
            ),
          ""
        );
      var i = a === "",
        l = n === "",
        d = o("WAWebFrontendMsgGetters").getChat(t),
        m = r("WAWebWid").isGroup(d.id),
        p = t.templateParams[2];
      if (p == null) return "";
      var _ = o("WAWebContactCollection").ContactCollection.get(p),
        f = _
          ? o(
              "WAWebFrontendContactGetters",
            ).getFormattedSavedNameOrPushnameWithType(_)
          : null,
        g =
          f != null &&
          f.type ===
            o("WAWebWamEnumOppositeVisibleIdentificationType")
              .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.SAVED_CONTACT_NAME
            ? f.displayName
            : null,
        h = o("WAWebWidFormat").widToFormattedUser(
          o("WAWebLidMigrationUtils").toPn(
            o("WAWebWidFactory").createUserWidOrThrow(p.toString()),
          ),
        ),
        y = m ? "group" : "oneOnOne",
        C = r("isStringNullOrEmpty")(g) ? "noSavedName" : "savedName",
        b = r("isStringNullOrEmpty")(h) ? "noPhoneNumber" : "phoneNumber",
        S;
      i ? (S = "created") : l ? (S = "deleted") : (S = "updated");
      var R = _ != null && _.isBusiness ? "business" : "consumer",
        L = y + "_" + C + "_" + b + "_" + S + "_" + R,
        E = v[L];
      if (E == null)
        return (
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[formatChangeUsernameTemplateText] invalid lookupKey ",
                  "",
                ])),
              L,
            )
            .sendLogs("formatChangeUsernameTemplateText-lookupKey-not-valid"),
          ""
        );
      var k = E({
        newUsername: n,
        savedName: g != null ? g : "",
        oldUsername: a != null ? a : "",
        phoneNumber: h,
      });
      return k;
    }
    l.default = S;
  },
  226,
);
