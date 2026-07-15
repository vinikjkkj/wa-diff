__d(
  "WAWebDebugContacts",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebContactSyncBridge",
    "WAWebNonAddressBookContactsJob",
    "WAWebSchemaContact_DO_NOT_USE_DIRECTLY",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = { delaySaveMs: 0, simulateErrorOnSaveOrDeleteContact: null };
    function h(e) {
      (e === void 0 && (e = 1e4), (g.delaySaveMs = Math.max(e, 0)));
    }
    function y(e) {
      var t = e == null ? void 0 : e.toUpperCase();
      if (t !== "USYNC" && t !== "NETWORK" && t !== "CLIENT")
        throw r("err")("Unsupported error type");
      g.simulateErrorOnSaveOrDeleteContact = t;
    }
    function C(t) {
      return (
        t === void 0 && (t = !0),
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
    C.doc = "Sync Contacts (initial sync)";
    function b(e) {
      return (
        e === void 0 && (e = !0),
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
    b.doc = "Sync Contacts (periodic full sync)";
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebWidFactory").createUserLidOrThrow(e),
            n = o("WAWebApiContact").getPhoneNumber(t),
            r = o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable(),
            a = yield r.get(t.toJid());
          (a != null
            ? (yield r.bulkCreateOrMerge([
                babelHelpers.extends({}, a, {
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
              ? (yield r.remove(n.toJid()),
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
        })),
        S.apply(this, arguments)
      );
    }
    ((v.doc =
      "Force a LID contact into the 'phone number unknown' state: nullify phoneNumber on the LID row, delete the paired PN row, and evict the LID\u2194PN mapping. Reload afterwards."),
      (v.paramsToExecute = ["lid"]));
    var R = {
      delaySaveContactAction: h,
      simulateErrorOnSaveOrDeleteContact: y,
      debugConfigs: g,
      syncContact: C,
      syncContactPeriodicFullSync: b,
      makeContactPhoneNumberUnknown: v,
    };
    l.default = R;
  },
  98,
);
