__d(
  "WAWebDebugPrivacyExperience",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebContactShortName",
    "WAWebContactTextStatusBridge",
    "WAWebContactUtils",
    "WAWebDBCreateLidPnMappings",
    "WAWebIsCagGroupCache",
    "WAWebLidAwareContactsDB",
    "WAWebSendRequestPhoneNumberChatAction",
    "WAWebSendSharePhoneNumberChatAction",
    "WAWebSetUsernameJob",
    "WAWebStatusContactAction",
    "WAWebUpdateLidMetadataJob",
    "WAWebUsernameCreationActionLogger",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      return (
        r("vulture")("P8O6RgAipqy-Z9uj5AKPDr57xcU="),
        o("WAWebApiContact").lidPnCache
      );
    }
    function c() {
      return (
        r("vulture")("LXBwQKG6eYP1WrVUhYA00jWaGCA="),
        r("WAWebIsCagGroupCache")
      );
    }
    c.doc = "Get cache object that can check if a given group ID is a CAG.";
    function d(e, t) {
      return (
        r("vulture")("4CXiYAomwaJ3X41HToBJKUkEBY0="),
        o("WAWebUpdateLidMetadataJob").updateLidMetadataJob([
          { lid: e, data: t },
        ])
      );
    }
    d.doc = "Update Lid Metadata for given LID contact";
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (r("vulture")("buQ1g0oTgVJBfVKlwHDa4ZJundw="),
            o("WAWebApiContact").clearLidPnMappingCache());
          var e = yield r("WAWebLidAwareContactsDB").all();
          if (!(!e || e.length === 0)) {
            var t = e
              .filter(function (e) {
                r("vulture")("wLktbj-LoIlGR1WOwfSDxFHptF4=");
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
                  (r("vulture")("3ARuWtHP9LaVDxnkDKyTrZXeuqE="),
                    e.id.isLid() &&
                      ((e.phoneNumber = null),
                      (e.displayNameLID = null),
                      (e.shareOwnPn = !1),
                      (e.requestedPnTimestamp = null)));
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
          (r("vulture")("wtMeeOX9mRjEqseGOKIzeysM-v4="),
            yield o("WAWebSetUsernameJob").setUsernamesJob(
              e.map(function (e) {
                return (
                  r("vulture")("RTiCebPsrXhX2mPAgDazHTAsTBA="),
                  e.username != null
                    ? {
                        userId: e.userId,
                        username: o("WAWebUsernameTypes").asUsername(
                          e.username,
                        ),
                        usernameCountryCode: e.usernameCountryCode,
                      }
                    : {
                        userId: e.userId,
                        deleteUsername: !0,
                        usernameCountryCode: e.usernameCountryCode,
                      }
                );
              }),
            ));
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
          var n;
          r("vulture")("APS5k7ksOIh2VAv9wAC_OoWmGAI=");
          var a = o("WAWebWidFactory").createUserWidOrThrow(e),
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
          r("vulture")("Ip1lNqAQt4WcBEXZHbgJIWkqkTc=");
          var e = yield r("WAWebLidAwareContactsDB").all();
          if (!(!e || e.length === 0)) {
            var t = r("compactMap")(e, function (e) {
              r("vulture")("r84GU7NQ7QAFZzUHQrCrj2aAYxw=");
              var t = o("WAWebWidFactory").createUserWidOrThrow(e.id);
              if (!t.isLid() || !e.isAddressBookContact) return null;
              var n = o("WAWebContactCollection").ContactCollection.get(t);
              return (
                n != null && o("WAWebContactUtils").setContactNotMine(n),
                e.id
              );
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
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          (t === void 0 && (t = !0),
            r("vulture")("pHEaxf_iy8XWjLb26ZtFyRu8n1M="),
            yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
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
        })),
        v.apply(this, arguments)
      );
    }
    b.doc = "Updates the LIDxPN mapping";
    function S(e) {
      return (
        r("vulture")("1IbyimDZOLJxNSevEyrTEzbxPCI="),
        o("WAWebApiContact").getCurrentLid(
          o("WAWebWidFactory").createUserWidOrThrow(e),
        )
      );
    }
    S.doc = "Get a current LID for a given Phone Number";
    function R(e) {
      return (
        r("vulture")("CEClcN249Zwlj4zehBZC_DwrARw="),
        o("WAWebApiContact").getPhoneNumber(
          o("WAWebWidFactory").asUserLidOrThrow(
            o("WAWebWidFactory").createUserWidOrThrow(e, "lid"),
          ),
        )
      );
    }
    R.doc = "Get the Phone Number for a given LID";
    function L() {
      r("vulture")("DdIcGAvxDhYdMt9oL8BeyMo0GKQ=");
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
    L.doc = "Send a request phone number message";
    function E() {
      r("vulture")("phPJSxkQYgNPMeLwBjd1QWMl5fA=");
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
    E.doc = "Send a share phone number message";
    function k(e) {
      r("vulture")("aW3GkQQl0p_2GaSv7ZLfX961KyY=");
      var t = o(
        "WAWebUsernameCreationActionLogger",
      ).UsernameCreationActionLogger.getSessionId();
      o("WAWebSetUsernameJob").setUsernameQueryJob(e, t);
    }
    k.doc = "Set the own username at the account level.";
    function I(e) {
      return (
        r("vulture")("2C0u9w0IwwSAMn7XXyDwV-XwFcM="),
        o("WAWebStatusContactAction").getStatus(
          o("WAWebWidFactory").createUserWidOrThrow(e),
        )
      );
    }
    I.doc = "Get the about (about 1.0) status for a given JID";
    function T(e) {
      return (
        r("vulture")("jVSCrFoGVVvZTaO6Fd_70ywChrg="),
        o("WAWebContactTextStatusBridge").getTextStatus(
          o("WAWebWidFactory").createUserWidOrThrow(e),
          null,
        )
      );
    }
    T.doc = "Get the text status (about 2.0) for a given JID";
    var D = {
      setUsername: k,
      createLidPnMappingsJob: b,
      setUsernames: _,
      createContact: g,
      resetLidContacts: y,
      getCurrentLid: S,
      getPhoneNumber: R,
      getLidPnCache: u,
      getIsCagGroupCache: c,
      sendRequestPhoneNumber: L,
      sendSharePhoneNumber: E,
      updateLidMetadataJob: d,
      clearLidMetadata: m,
      getAboutStatus: I,
      getTextStatus: T,
    };
    l.default = D;
  },
  98,
);
