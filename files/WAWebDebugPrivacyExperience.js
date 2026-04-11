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
    "asyncToGeneratorRuntime",
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
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WAWebApiContact").clearLidPnMappingCache();
          var e = yield r("WAWebLidAwareContactsDB").all();
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
            (yield r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
              t,
              "DebugPrivacyExperience.clearLidMetadata",
            ),
              o("WAWebContactCollection").ContactCollection.forEach(
                function (e) {
                  e.id.isLid() &&
                    ((e.phoneNumber = null),
                    (e.displayNameLID = null),
                    (e.shareOwnPn = !1),
                    (e.requestedPnTimestamp = null));
                },
              ));
          }
        })),
        p.apply(this, arguments)
      );
    }
    m.doc =
      "Deletes all information related with LID (displayName, shareOwnPn, lidXPn mapping, requestedPnTimestamp)";
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebSetUsernameJob").setUsernamesJob(
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
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = o("WAWebWidFactory").createUserWidOrThrow(e),
            i = {
              id: e,
              name: t,
              shortName:
                (n = o("WAWebContactShortName").getShortName(t)) != null
                  ? n
                  : "",
              type: "in",
              isAddressBookContact: 1,
              isContactSyncCompleted: 0,
            };
          (yield r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
            [babelHelpers.extends({}, i)],
            "DebugPrivacyExperience.createContact",
          ),
            o("WAWebContactCollection").ContactCollection.add(
              babelHelpers.extends({}, i, { id: a }),
              { merge: !0 },
            ));
        })),
        h.apply(this, arguments)
      );
    }
    g.doc = "Saves a lid contact to contact collection and database.";
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("WAWebLidAwareContactsDB").all();
          if (!(!e || e.length === 0)) {
            var t = r("compactMap")(e, function (e) {
              var t = o("WAWebWidFactory").createUserWidOrThrow(e.id);
              if (!t.isLid() || !e.isAddressBookContact) return null;
              var n = o("WAWebContactCollection").ContactCollection.get(t);
              return (n != null && n.setNotMyContact(), e.id);
            });
            t.length > 0 &&
              (yield o("WAWebApiContact").setNotAddressBookContacts(t));
          }
        })),
        C.apply(this, arguments)
      );
    }
    y.doc = "Removes all lid contacts from address book.";
    function b(e, t, n) {
      (t === void 0 && (t = !0),
        o("WAWebDBCreateLidPnMappings").createLidPnMappings({
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
    b.doc = "Updates the LIDxPN mapping";
    function v(e) {
      return o("WAWebApiContact").getCurrentLid(
        o("WAWebWidFactory").createUserWidOrThrow(e),
      );
    }
    v.doc = "Get a current LID for a given Phone Number";
    function S(e) {
      return o("WAWebApiContact").getPhoneNumber(
        o("WAWebWidFactory").asUserLidOrThrow(
          o("WAWebWidFactory").createUserWidOrThrow(e, "lid"),
        ),
      );
    }
    S.doc = "Get the Phone Number for a given LID";
    function R() {
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
    R.doc = "Send a request phone number message";
    function L() {
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
    L.doc = "Send a share phone number message";
    function E(e) {
      var t = o(
        "WAWebUsernameCreationActionLogger",
      ).UsernameCreationActionLogger.getSessionId();
      o("WAWebSetUsernameJob").setUsernameQueryJob(e, t);
    }
    E.doc = "Set the own username at the account level.";
    function k(e) {
      return o("WAWebStatusContactAction").getStatus(
        o("WAWebWidFactory").createUserWidOrThrow(e),
      );
    }
    k.doc = "Get the about (about 1.0) status for a given JID";
    function I(e) {
      return o("WAWebContactTextStatusBridge").getTextStatus(
        o("WAWebWidFactory").createUserWidOrThrow(e),
        null,
      );
    }
    I.doc = "Get the text status (about 2.0) for a given JID";
    var T = {
      setUsername: E,
      createLidPnMappingsJob: b,
      setUsernames: _,
      createContact: g,
      resetLidContacts: y,
      getCurrentLid: v,
      getPhoneNumber: S,
      getLidPnCache: u,
      getIsCagGroupCache: c,
      sendRequestPhoneNumber: R,
      sendSharePhoneNumber: L,
      updateLidMetadataJob: d,
      clearLidMetadata: m,
      getAboutStatus: k,
      getTextStatus: I,
    };
    l.default = T;
  },
  98,
);
