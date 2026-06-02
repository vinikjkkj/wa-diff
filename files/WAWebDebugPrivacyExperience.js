__d(
  "WAWebDebugPrivacyExperience",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebContactShortName",
    "WAWebContactTextStatusBridge",
    "WAWebDBCreateLidPnMappings",
    "WAWebIsCagGroupCache",
    "WAWebLidAwareContactsDB",
    "WAWebSendRequestPhoneNumberChatAction",
    "WAWebSendSharePhoneNumberChatAction",
    "WAWebSetUsernameJob",
    "WAWebStatusContactAction",
    "WAWebUpdateLidMetadataJob",
    "WAWebUsernameCreationActionLogger",
    "WAWebWidFactory",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      return o("WAWebApiContact").lidPnCache;
    }
    function c() {
      return r("WAWebIsCagGroupCache");
    }
    c.doc = "Get cache object that can check if a given group ID is a CAG.";
    function d(e, t) {
      return o("WAWebUpdateLidMetadataJob").updateLidMetadataJob([
        { lid: e, data: t },
      ]);
    }
    d.doc = "Update Lid Metadata for given LID contact";
    async function m() {
      o("WAWebApiContact").clearLidPnMappingCache();
      var e = await r("WAWebLidAwareContactsDB").all();
      if (!(!e || e.length === 0)) {
        var t = e
          .filter(function (e) {
            var t = o("WAWebWidFactory").createUserWidOrThrow(e.id);
            return t.isLid();
          })
          .map(function (e) {
            return {
              id: e.id,
              phoneNumber: void 0,
              phoneNumberCreatedAt: void 0,
              requestedPnTimestamp: void 0,
              shareOwnPn: void 0,
              displayNameLID: void 0,
            };
          });
        (await r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
          t,
          "DebugPrivacyExperience.clearLidMetadata",
        ),
          o("WAWebContactCollection").ContactCollection.forEach(function (e) {
            e.id.isLid() &&
              ((e.phoneNumber = null),
              (e.displayNameLID = null),
              (e.shareOwnPn = !1),
              (e.requestedPnTimestamp = null));
          }));
      }
    }
    m.doc =
      "Deletes all information related with LID (displayName, shareOwnPn, lidXPn mapping, requestedPnTimestamp)";
    async function p(e) {
      await o("WAWebSetUsernameJob").setUsernamesJob(
        e.map(function (e) {
          return e.username != null
            ? {
                userId: e.userId,
                username: e.username,
                usernameCountryCode: e.usernameCountryCode,
              }
            : {
                userId: e.userId,
                deleteUsername: !0,
                usernameCountryCode: e.usernameCountryCode,
              };
        }),
      );
    }
    async function _(e, t) {
      var n,
        a = o("WAWebWidFactory").createUserWidOrThrow(e),
        i = {
          id: e,
          name: t,
          shortName:
            (n = o("WAWebContactShortName").getShortName(t)) != null ? n : "",
          type: "in",
          isAddressBookContact: 1,
          isContactSyncCompleted: 0,
        };
      (await r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
        [babelHelpers.extends({}, i)],
        "DebugPrivacyExperience.createContact",
      ),
        o("WAWebContactCollection").ContactCollection.add(
          babelHelpers.extends({}, i, { id: a }),
          { merge: !0 },
        ));
    }
    _.doc = "Saves a lid contact to contact collection and database.";
    async function f() {
      var e = await r("WAWebLidAwareContactsDB").all();
      if (!(!e || e.length === 0)) {
        var t = r("compactMap")(e, function (e) {
          var t = o("WAWebWidFactory").createUserWidOrThrow(e.id);
          if (!t.isLid() || !e.isAddressBookContact) return null;
          var n = o("WAWebContactCollection").ContactCollection.get(t);
          return (n != null && n.setNotMyContact(), e.id);
        });
        t.length > 0 &&
          (await o("WAWebApiContact").setNotAddressBookContacts(t));
      }
    }
    f.doc = "Removes all lid contacts from address book.";
    async function g(e, t, n) {
      (t === void 0 && (t = !0),
        await o("WAWebDBCreateLidPnMappings").createLidPnMappings({
          mappings: e.map(function (e) {
            return {
              lid: o("WAWebWidFactory").asUserLidOrThrow(
                o("WAWebWidFactory").createUserWidOrThrow(e.lid, "lid"),
              ),
              pn: o("WAWebWidFactory").createUserWidOrThrow(e.pn),
            };
          }),
          flushImmediately: t,
          learningSource: n != null ? n : "usync",
        }));
    }
    g.doc = "Updates the LIDxPN mapping";
    function h(e) {
      return o("WAWebApiContact").getCurrentLid(
        o("WAWebWidFactory").createUserWidOrThrow(e),
      );
    }
    h.doc = "Get a current LID for a given Phone Number";
    function y(e) {
      return o("WAWebApiContact").getPhoneNumber(
        o("WAWebWidFactory").asUserLidOrThrow(
          o("WAWebWidFactory").createUserWidOrThrow(e, "lid"),
        ),
      );
    }
    y.doc = "Get the Phone Number for a given LID";
    function C() {
      var t = o("WAWebChatCollection").ChatCollection.getActive();
      if (!t) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "the current chat is null",
            ])),
        );
        return;
      }
      o("WAWebSendRequestPhoneNumberChatAction").sendRequestPhoneNumber(t);
    }
    C.doc = "Send a request phone number message";
    function b() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      if (!e) {
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "the current chat is null",
            ])),
        );
        return;
      }
      o("WAWebSendSharePhoneNumberChatAction").sendSharePhoneNumber(e);
    }
    b.doc = "Send a share phone number message";
    function v(e) {
      var t = o(
        "WAWebUsernameCreationActionLogger",
      ).UsernameCreationActionLogger.getSessionId();
      o("WAWebSetUsernameJob").setUsernameQueryJob(e, t);
    }
    v.doc = "Set the own username at the account level.";
    function S(e) {
      return o("WAWebStatusContactAction").getStatus(
        o("WAWebWidFactory").createUserWidOrThrow(e),
      );
    }
    S.doc = "Get the about (about 1.0) status for a given JID";
    function R(e) {
      return o("WAWebContactTextStatusBridge").getTextStatus(
        o("WAWebWidFactory").createUserWidOrThrow(e),
        null,
      );
    }
    R.doc = "Get the text status (about 2.0) for a given JID";
    var L = {
      setUsername: v,
      createLidPnMappingsJob: g,
      setUsernames: p,
      createContact: _,
      resetLidContacts: f,
      getCurrentLid: h,
      getPhoneNumber: y,
      getLidPnCache: u,
      getIsCagGroupCache: c,
      sendRequestPhoneNumber: C,
      sendSharePhoneNumber: b,
      updateLidMetadataJob: d,
      clearLidMetadata: m,
      getAboutStatus: S,
      getTextStatus: R,
    };
    l.default = L;
  },
  98,
);
