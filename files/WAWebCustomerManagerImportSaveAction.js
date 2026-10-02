__d(
  "WAWebCustomerManagerImportSaveAction",
  [
    "Promise",
    "WALogger",
    "WAWebContactImportTemplateParsingUtils",
    "WAWebCustomerManagerCreateCustomerRecord",
    "WAWebCustomerManagerImportDateParsingUtils",
    "WAWebCustomerManagerImportTemplateUtils",
    "WAWebCustomerProfileAcquisitionSourceNames",
    "WAWebLeadStageNames",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 10;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t, n;
          if (e.lid == null)
            throw r("err")(
              "Imported contact missing lid; cannot resolve chatJid",
            );
          var a = o("WAWebWidFactory").createUserWidOrThrow(e.lid),
            i = e.phone.replace(/\D/g, "");
          yield o(
            "WAWebCustomerManagerCreateCustomerRecord",
          ).createCustomerRecord({
            acquisitionSource: f(e),
            address:
              (t = o("WAWebContactImportTemplateParsingUtils").readRawRowColumn(
                e.rawRow,
                [
                  "Address",
                  o("WAWebCustomerManagerImportTemplateUtils").FBT_ADDRESS,
                ],
              )) != null
                ? t
                : "",
            birthday: p(e, "birthday"),
            chatJid: o("WAWebWidToJid").widToChatJid(a),
            email:
              (n = o("WAWebContactImportTemplateParsingUtils").readRawRowColumn(
                e.rawRow,
                [
                  "Email",
                  o("WAWebCustomerManagerImportTemplateUtils").FBT_EMAIL,
                ],
              )) != null
                ? n
                : "",
            firstName: e.firstName,
            lastName: e.lastName,
            leadStage: _(e),
            lastOrder: p(e, "lastOrder"),
            note: o("WAWebContactImportTemplateParsingUtils").readRawRowColumn(
              e.rawRow,
              ["Notes", o("WAWebCustomerManagerImportTemplateUtils").FBT_NOTES],
            ),
            phoneNumber: i,
            profileWid: a,
            username: o(
              "WAWebContactImportTemplateParsingUtils",
            ).readRawRowColumn(e.rawRow, [
              "Username",
              o("WAWebCustomerManagerImportTemplateUtils").FBT_USERNAME,
            ]),
          });
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      var n =
          t === "birthday"
            ? [
                "Birthday",
                o("WAWebCustomerManagerImportTemplateUtils").FBT_BIRTHDAY,
              ]
            : [
                "Last order",
                o("WAWebCustomerManagerImportTemplateUtils").FBT_LAST_ORDER,
              ],
        r = o(
          "WAWebCustomerManagerImportDateParsingUtils",
        ).parseCustomerManagerImportDate(
          o("WAWebContactImportTemplateParsingUtils").readRawRowColumn(
            e.rawRow,
            n,
          ),
          t,
        );
      return r.type === "valid" ? r.value : void 0;
    }
    function _(e) {
      var t = o("WAWebContactImportTemplateParsingUtils").readRawRowColumn(
        e.rawRow,
        [
          "Lead stage",
          o("WAWebCustomerManagerImportTemplateUtils").FBT_LEAD_STAGE,
        ],
      );
      return t != null
        ? o("WAWebLeadStageNames").getLeadStageFromName(t)
        : null;
    }
    function f(e) {
      var t = o("WAWebContactImportTemplateParsingUtils").readRawRowColumn(
        e.rawRow,
        [
          "Source",
          o("WAWebCustomerManagerImportTemplateUtils").FBT_ACQUISITION_SOURCE,
          "Acquisition source",
        ],
      );
      return t != null
        ? o(
            "WAWebCustomerProfileAcquisitionSourceNames",
          ).getProfileAcquisitionSourceIdFromLabel(t)
        : null;
    }
    function g(t, n, a) {
      return n.reduce(function (n, a, i) {
        return a.status === "fulfilled"
          ? babelHelpers.extends({}, n, { successCount: n.successCount + 1 })
          : (o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[cm:import] save failed for row ",
                    "",
                  ])),
                t[i].rowIndex,
              )
              .catching(r("getErrorSafe")(a.reason))
              .sendLogs("cm-import-save-row-failed"),
            babelHelpers.extends({}, n, { failureCount: n.failureCount + 1 }));
      }, a);
    }
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          if (t >= e.length) return r;
          var o = e.slice(t, t + c),
            a = yield (u || (u = n("Promise"))).allSettled(
              o.map(function (e) {
                return d(e);
              }),
            );
          return h(e, t + c, g(o, a, r));
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield h(e, 0, { failureCount: 0, successCount: 0 });
          return (
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[cm:import] save complete: ",
                    " ok, ",
                    " failed",
                  ])),
                t.successCount,
                t.failureCount,
              )
              .sendLogs("cm-import-save-complete"),
            t
          );
        })),
        b.apply(this, arguments)
      );
    }
    l.saveImportedContacts = C;
  },
  98,
);
