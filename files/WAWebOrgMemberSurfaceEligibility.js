__d(
  "WAWebOrgMemberSurfaceEligibility",
  [
    "WAWebApiContact",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebOrgMemberSearchRows",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebUsernameWorkerCompatibleGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = s(e, t);
      return n != null && u(e, t, n) !== "";
    }
    function s(e, t) {
      var n,
        r = o("WAWebOrgMemberSearchRows").getOrgMemberIdentifiers(t, e),
        a = r.phoneNumber,
        i = r.username,
        l = m(t, a);
      return o("WAWebUserPrefsMeUser").isMeAccount(t) ||
        l.some(function (e) {
          return (
            e != null &&
            (o("WAWebFrontendContactGetters").getIsMyContact(e) ||
              o("WAWebFrontendContactGetters").getIsContactBlocked(e))
          );
        })
        ? null
        : o("WAWebUsernameTypes").isPresentUsername(i) &&
            !l.some(function (e) {
              return e == null ? void 0 : e.isSmb;
            }) &&
            o(
              "WAWebUsernameWorkerCompatibleGatingUtils",
            ).usernameContactUIEnabled()
          ? { type: "username", lid: t, username: i }
          : a == null ||
              e.phoneNumber == null ||
              e.phoneNumber === "" ||
              ((n = o("WAWebApiContact").getCurrentLid(a)) == null
                ? void 0
                : n.equals(t)) === !1
            ? null
            : { type: "phone_number", phoneNumber: a };
    }
    function u(e, t, n) {
      var r,
        a =
          (r = o("WAWebContactCollection").ContactCollection.get(t)) == null
            ? void 0
            : r.pushname;
      return a != null && a !== ""
        ? a
        : e.memberName !== ""
          ? e.memberName
          : n.type === "username"
            ? o("WAWebUsernameTypes").serializeUsername(n.username)
            : "";
    }
    function c(e, t) {
      return d(e, t, { includePhoneNumber: !0, includeUsername: !0 }) != null;
    }
    function d(e, t, n) {
      var r = o("WAWebOrgMemberSearchRows").getOrgMemberIdentifiers(t, e),
        a = r.username,
        i =
          n.includeUsername &&
          o("WAWebUsernameGatingUtils").usernameContactUiVcardEnabled() &&
          o("WAWebUsernameTypes").isPresentUsername(a),
        l =
          n.includePhoneNumber &&
          e.phoneNumber != null &&
          e.phoneNumber !== "" &&
          o("WAWebApiContact").getPnIfLidIsLatestMapping(t) != null;
      return l || i ? { includePhoneNumber: l, includeUsername: i } : null;
    }
    function m(e, t) {
      return [o("WAWebContactCollection").ContactCollection.get(e)].concat(
        [o("WAWebApiContact").getPnIfLidIsLatestMapping(e), t].map(
          function (t) {
            var n;
            return t != null &&
              ((n = o("WAWebApiContact").getCurrentLid(t)) == null
                ? void 0
                : n.equals(e)) !== !1
              ? o("WAWebContactCollection").ContactCollection.get(t)
              : null;
          },
        ),
      );
    }
    ((l.isOrgMemberBulkSaveAllowed = e),
      (l.getOrgMemberBulkSaveTarget = s),
      (l.getOrgMemberBulkSaveName = u),
      (l.isOrgMemberVcardAllowed = c),
      (l.getOrgMemberVcardOptions = d));
  },
  98,
);
