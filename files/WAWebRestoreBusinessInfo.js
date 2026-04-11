__d(
  "WAWebRestoreBusinessInfo",
  [
    "WALogger",
    "WAWebApiBusinessProfile",
    "WAWebBackendApi",
    "WAWebBusinessProfileCopyPnDataToLidRows",
    "WAWebBusinessProfileTypes",
    "WAWebSchemaBusinessProfile",
    "WAWebSchemaVerifiedBusinessName",
    "WAWebVerifiedBusinessNameCopyPnDataToLidRows",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o("WAWebSchemaVerifiedBusinessName")
            .getVerifiedBusinessNameTable()
            .all();
          yield o(
            "WAWebVerifiedBusinessNameCopyPnDataToLidRows",
          ).copyVerifiedNamePnDataToLidRows(t);
          var n = [];
          (t.forEach(function (t) {
            var r;
            try {
              r = o("WAWebWidFactory").createUserWidOrThrow(t.id);
            } catch (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "restore-business-info: invalid wid",
                    ])),
                )
                .sendLogs("restore-business-info: invalid wid");
              return;
            }
            n.push({
              wid: o("WAWebWidToJid").widToUserJid(r),
              contactData: {
                isBusiness: !0,
                isEnterprise: t.isApi,
                verifiedName: t.name,
                verifiedLevel: c(t.level),
                privacyMode: t.privacyMode,
              },
            });
          }),
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "restoreVerifiedBusinessContacts",
              { entries: n },
            ));
          var r = yield o("WAWebSchemaBusinessProfile")
            .getBusinessProfileTable()
            .all();
          yield o(
            "WAWebBusinessProfileCopyPnDataToLidRows",
          ).copyBusinessProfilePnDataToLidRows(r);
          var a = r.map(function (e) {
            return o("WAWebApiBusinessProfile").businessProfileFromDbRow(e);
          });
          yield o("WAWebBackendApi").frontendSendAndReceive(
            "restoreBusinessProfiles",
            { profiles: a },
          );
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      switch (e) {
        case "unknown":
          return o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.UNKNOWN;
        case "low":
          return o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.LOW;
        case "high":
          return o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH;
      }
      return o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.UNKNOWN;
    }
    l.restoreBusinessInfo = s;
  },
  98,
);
