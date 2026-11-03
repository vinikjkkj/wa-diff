__d(
  "WAWebDebugContacts",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebContactSyncBridge",
    "WAWebNonAddressBookContactsJob",
    "WAWebSchemaContact_DO_NOT_USE_DIRECTLY",
    "WAWebWidFactory",
    "getErrorSafe",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    function g(t) {
      return (
        t === void 0 && (t = !0),
        r("vulture")("99MOd1H0UBSc8pE4Dclxa6UFLlA="),
        t
          ? o("WAWebNonAddressBookContactsJob")
              .getAndUpdateNonAddressBookContacts()
              .catch(function (t) {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to sync non-address book contacts",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t));
              })
              .then(function () {
                return o("WAWebContactSyncBridge").doFullContactSync(!1);
              })
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "contact sync failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e));
              })
          : o("WAWebContactSyncBridge").doFullContactSync(!1)
      );
    }
    g.doc = "Sync Contacts (initial sync)";
    function h(e) {
      return (
        e === void 0 && (e = !0),
        r("vulture")("D-xFwMBLroiKersrmDEBuxgSRpw="),
        e
          ? o("WAWebNonAddressBookContactsJob")
              .getNonAddressBookContactsAndMarkAllContactsDirty()
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to sync non-address book contacts",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e));
              })
              .then(function () {
                return o("WAWebContactSyncBridge").doFullContactSync(!1);
              })
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "contact sync failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e));
              })
          : o("WAWebContactSyncBridge").doFullContactSync(!1)
      );
    }
    h.doc = "Sync Contacts (periodic full sync)";
    async function y(e) {
      r("vulture")("mvFwOfmC9Ac7vlA26dt1fA8xnEo=");
      var t = o("WAWebWidFactory").createUserLidOrThrow(e),
        n = o("WAWebApiContact").getPhoneNumber(t),
        a = o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable(),
        i = await a.get(t.toJid());
      (i != null
        ? (await a.bulkCreateOrMerge([
            babelHelpers.extends({}, i, {
              phoneNumber: void 0,
              phoneNumberCreatedAt: void 0,
            }),
          ]),
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[makeContactPhoneNumberUnknown] cleared phoneNumber on LID row ",
                "",
              ])),
            t.toString(),
          ))
        : o("WALogger").WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[makeContactPhoneNumberUnknown] no contact row for LID ",
                "",
              ])),
            t.toString(),
          ),
        n != null
          ? (await a.remove(n.toJid()),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[makeContactPhoneNumberUnknown] removed PN row ",
                  "",
                ])),
              n.toString(),
            ))
          : o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[makeContactPhoneNumberUnknown] no PN mapping for LID ",
                  "",
                ])),
              t.toString(),
            ),
        o("WAWebApiContact").lidPnCache.remove(t),
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "[makeContactPhoneNumberUnknown] evicted LID\u2194PN mapping for ",
              ". Reload to re-hydrate contact models.",
            ])),
          t.toString(),
        ));
    }
    ((y.doc =
      "Force a LID contact into the 'phone number unknown' state: nullify phoneNumber on the LID row, delete the paired PN row, and evict the LID\u2194PN mapping. Reload afterwards."),
      (y.paramsToExecute = ["lid"]));
    var C = {
      syncContact: g,
      syncContactPeriodicFullSync: h,
      makeContactPhoneNumberUnknown: y,
    };
    l.default = C;
  },
  98,
);
